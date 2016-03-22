MyDisplay         = require('../base/MyDisplay');
AniParam          = require('../base/AniParam');
DisplayTransform  = require('../libs/display/DisplayTransform');
ResponsiveDisplay = require('../parts/ResponsiveDisplay');
SeeMoreBtn        = require('../parts/SeeMoreBtn');
EffectBar         = require('../parts/EffectBar');


# ---------------------------------------------------
# トップ / パーツ
# ---------------------------------------------------
class PjTopParts extends MyDisplay
  
  
  # -----------------------------------------------
  # コンストラクタ
  # -----------------------------------------------
  constructor: (partsId, domId) ->
    
    super({
      id:domId,
      resize:false
    });
    
    # パーツID
    @_partsId = partsId;
    
    # vol
    @_vol;
    @_volBtmLine;
    
    # 作品タイトル
    @_workTtl;
    
    # タイトル
    @_ttl0;
    @_ttl1;
    
    # サブタイトル
    @_subTtl;
    
    # 詳細ボタン
    @_moreBtn;
    
    # 背景
    @_bg;
    
    # 演出バー
    @_effectBar = {};
    
    # 表示フラグ
    @_isShow = false;
  
  
  
  # -----------------------------------------------
  # 初期化
  # -----------------------------------------------
  init: =>
    
    super();
    
    # idを追加
    $("#" + @_id + " .pjTopVol").attr("id", @_id + "_0");
    $("#" + @_id + " .pjTopTtl0").attr("id", @_id + "_1");
    $("#" + @_id + " .pjTopTtl1").attr("id", @_id + "_2");
    $("#" + @_id + " .pjTopSubTtl").attr("id", @_id + "_3");
    $("#" + @_id + " .pjTopDetail").attr("id", @_id + "_4");
    $("#" + @_id + " .pjTopWorkTtl").attr("id", @_id + "_5");
    
    # vol
    @_vol = @_makeResponsiveDisplay(@_id + "_0", MY.f.makeRspsvClass("pjTopVol_0", "pjTopVol_1"));
    
    # vol下のライン
    @_volBtmLine = @_makeDisplay();
    @add(@_volBtmLine);
    @_volBtmLine.bgColor("#000000");
    
    # 作品タイトル
    @_workTtl = @_makeResponsiveDisplay(@_id + "_5", MY.f.makeRspsvClass("pjTopWorkTtl_0", "pjTopWorkTtl_1"));
    
    # タイトル
    @_ttl0 = @_makeResponsiveDisplay(@_id + "_1", MY.f.makeRspsvClass("pjTopTtl0_0", "pjTopTtl0_1"));
    @_ttl1 = @_makeResponsiveDisplay(@_id + "_2", MY.f.makeRspsvClass("pjTopTtl1_0", "pjTopTtl1_1"));
    
    # サブタイトル
    @_subTtl = @_makeResponsiveDisplay(@_id + "_3", MY.f.makeRspsvClass("pjTopSubTtl1_0", "pjTopSubTtl1_1"));
    
    # moreボタン
    @_moreBtn = new SeeMoreBtn(@_id + "_4");
    @_moreBtn.init();
    @_moreBtn.onClick = @_eClickMore;
    
    # 背景
    @_bg = @_makeDisplay();
    @unshift(@_bg);
    @_bg.bgColor("#FFFFFF");
    
    # 演出バー作成
    @_makeEffectBar();
    
    if !MY.u.isSmt()
      @mask(true);
    @resize();
  
  
  
  # -----------------------------------
  # イベント Moreボタンクリック
  # -----------------------------------
  _eClickMore: =>
    
    # 一番上までスクロールして詳細へ
    MY.scroller.scroll(0, 0, =>
      MY.c.setPjDetail(@_partsId, true);
    );
  
  
  
  # -----------------------------------
  # 演出バー作成
  # -----------------------------------
  _makeEffectBar: =>
    
    arr = [
      "vol",
      "volBtmLine",
      "workTtl",
      "ttl0",
      "ttl1",
      "subTtl",
      "moreBtn"
    ];
    
    for val,i in arr
      bar = new EffectBar(null, null, 0, 60);
      bar.init();
      @add(bar);
      @_effectBar[val] = bar;
  
  
  
  # -----------------------------------
  # 指定演出バーのサイズ変更
  # -----------------------------------
  _setEffectBarSize: =>
    
    for key,val of @_effectBar
      display = @["_" + key];
      val.xy(display.x(), display.y());
      val.setBarSize(display.width(), display.height());
  
  
  
  # -----------------------------------
  # 演出バーの位置更新
  # -----------------------------------
  _updateEffectBarPos: =>
    
    for key,val of @_effectBar
      base = @["_" + key];
      val.translate(base.ap.x, base.ap.y);
      val.render();
  
  
  
  # -----------------------------------
  # 消す
  # -----------------------------------
  hide: (isAnimate, delay) =>
    
    if !isAnimate? then isAnimate = true;
    delay = delay || 0;
    
    if @_lo == MY.conf.LO_1
      isAnimate = false;
    
    @_isShow = false;
    @_setAnimation(0, -@width() * 1.5, isAnimate, delay + 5, false);
    
    bgDelay = delay + 0;
    @_bg.ap.tx = -@_bg.width() - @_bg.x() - MY.conf.PJ_TOP_LEFT_IMG_MARGIN[@_lo];
    @_bg.ap.ty = 0;
    @_bg.ap.delay(bgDelay).resetE();
    if !isAnimate
      @_bg.ap.finish();
    
    @_update();
  
  
  
  # -----------------------------------
  # 表示
  # -----------------------------------
  show: (isAnimate, delay, isEffectBar) =>
    
    if !isAnimate? then isAnimate = true;
    delay = delay || 0;
    
    @_isShow = true;
    @visible(true);
    @render();
    @resize();
    @_setAnimation(-@_bg.width() - @_bg.x() - 4, 0, isAnimate, delay + MY.f.getLOVal(30, 0));
    
    bgDelay = delay + MY.f.getLOVal(0, 50);
    @_bg.ap.x  = -@_bg.width() - MY.conf.PJ_TOP_LEFT_IMG_MARGIN[@_lo];
    @_bg.ap.y  = 0;
    @_bg.ap.tx = 0;
    @_bg.ap.ty = 0;
    @_bg.ap.delay(bgDelay).resetE();
    if !isAnimate
      @_bg.ap.finish();
    
    @_update();
  
  
  
  # -----------------------------------
  # アニメーション設定
  # -----------------------------------
  _setAnimation: (from, to, isAnimate, delay, isEffectBar) =>
    
    if !isAnimate? then isAnimate = true;
    delay = delay || 0;
    if !isEffectBar? then isEffectBar = true;
    
    arr = [
      "vol",
      "volBtmLine",
      "workTtl",
      "ttl0",
      "ttl1",
      "subTtl",
      "moreBtn"
    ];
    
    # SPはバー無し
    if @_lo == MY.conf.LO_1
      isEffectBar = false;
    
    # 遅延設定
    start = delay;
    d = MY.conf.STR_DELAY;
    d = 5;
    
    for val,i in arr
      o = @["_" + val];
      delay2 = start + d * i;
      o.ap.delay(delay2).resetE();
      o.ap.x = from;
      o.ap.tx = to;
      if !isAnimate
        o.ap.finish();
      
      bar = @_effectBar[val];
      if bar?
        if isEffectBar
          bar.start(delay2, isAnimate);
        else
          bar.hide();
    
    @_update();
  
  
  
  # -----------------------------------
  # resize
  # -----------------------------------
  resize: (w, h) =>
    
    @_resize(w, h);
    
    # vol
    @_vol.update();
    @_vol.xy(0, MY.f.getLOVal(30, 15));
    @_vol.render();
    
    # ライン
    @_volBtmLine.size(MY.f.getLOVal(14, 7), MY.f.getLOVal(2, 1));
    @_volBtmLine.xy(0, @_vol.bottom() + MY.f.getLOVal(6, 4));
    @_volBtmLine.render();
    
    # 作品タイトル
    @_workTtl.update();
    @_workTtl.xy(0, @_volBtmLine.bottom() + MY.f.getLOVal(15, 7));
    @_workTtl.render();
    
    # タイトル
    @_ttl0.update();
    @_ttl1.update();
    @_ttl0.xy(0, @_workTtl.bottom() + MY.f.getLOVal(3, 3));
    @_ttl0.render();
    @_ttl1.xy(0, @_ttl0.bottom() + MY.f.getLOVal(2, 3));
    @_ttl1.render();
    
    # サブタイトル
    @_subTtl.update();
    @_subTtl.xy(0, @_ttl1.bottom() + MY.f.getLOVal(18, 9));
    @_subTtl.render();
    
    # moreボタン PCのみ
    if @_lo == MY.conf.LO_0
      @_moreBtn.visible(true);
      @_moreBtn.xy(0, @_subTtl.bottom() + 20);
      @_moreBtn.render();
    else
      @_moreBtn.visible(false);
      @_moreBtn.render();
    
    # 背景
    @_bg.size(Math.max(@_ttl0.width(), @_subTtl.width()) + MY.f.getLOVal(50, 20), MY.f.getLOVal(@_moreBtn.bottom(), @_subTtl.bottom()));
    @_bg.xy(-1, 1);
    @_bg.render();
    
    # 演出バー
    @_setEffectBarSize();
    
    @size(@_bg.width(), @_bg.height());
    @translate(0, MY.conf.PJ_TOP_IMG_HEIGHT[@_lo] - @height());
    @render();
    
  
  
  
  # -----------------------------------
  # update
  # -----------------------------------
  _update: =>
    
    super();
    
    # 背景
    @_bg.ap.update();
    @_bg.translate(@_bg.ap.x, @_bg.ap.y);
    @_bg.render();
    
    @_vol.ap.update();
    @_volBtmLine.ap.update();
    @_workTtl.ap.update();
    @_ttl0.ap.update();
    @_ttl1.ap.update();
    @_subTtl.ap.update();
    @_moreBtn.ap.update();
    
    @_vol.translate(@_vol.ap.x, @_vol.ap.y);
    @_vol.render();
    
    @_volBtmLine.translate(@_volBtmLine.ap.x, @_volBtmLine.ap.y);
    @_volBtmLine.render();
    
    @_workTtl.translate(@_workTtl.ap.x, @_workTtl.ap.y);
    @_workTtl.render();
    
    @_ttl0.translate(@_ttl0.ap.x, @_ttl0.ap.y);
    @_ttl0.render();
    
    @_ttl1.translate(@_ttl1.ap.x, @_ttl1.ap.y);
    @_ttl1.render();
    
    @_subTtl.translate(@_subTtl.ap.x, @_subTtl.ap.y);
    @_subTtl.render();
    
    @_moreBtn.translate(@_moreBtn.ap.x, @_moreBtn.ap.y);
    @_moreBtn.render();
    
    # 演出バー
    @_updateEffectBarPos();
    
    if !@_isShow && @_moreBtn.ap.isFinish()
      @visible(false);
      @render();







module.exports = PjTopParts;