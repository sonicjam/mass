MyDisplay         = require('../base/MyDisplay');
DisplayTransform  = require('../libs/display/DisplayTransform');
ResponsiveDisplay = require('../parts/ResponsiveDisplay');
SeeMoreBtn        = require('../parts/SeeMoreBtn');
EffectBar         = require('../parts/EffectBar');
AniParam          = require('../base/AniParam');


# ---------------------------------------------------
# トップ / パーツ
# ---------------------------------------------------
class TopParts extends MyDisplay
  
  
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
    @_vol0;
    @_vol1;
    @_volBtmLine;
    
    # タイトル
    @_ttl0;
    @_ttl1;
    
    # 作品タイトル
    @_workTtl;
    
    # サブタイトル
    @_subTtl;
    
    # 詳細ボタン
    @_moreBtn;
    
    # SP用背景
    @_bg;
    
    # SP用ボタン
    @_btn;
    
    # 演出バー
    @_effectBar = {};
    
    # オフセット用アニメーションパラメータ
    @_offset = {};
    
    # 表示フラグ
    @_isShow = false;
  
  
  
  # -----------------------------------------------
  # 初期化
  # -----------------------------------------------
  init: =>
    
    super();
    
    # idを追加
    $("#" + @_id + " .topVol0").attr("id", @_id + "_0");
    $("#" + @_id + " .topVol1").attr("id", @_id + "_5");
    $("#" + @_id + " .topTtl0").attr("id", @_id + "_1");
    $("#" + @_id + " .topTtl1").attr("id", @_id + "_2");
    $("#" + @_id + " .topSubTtl").attr("id", @_id + "_3");
    $("#" + @_id + " .topDetail").attr("id", @_id + "_4");
    $("#" + @_id + " .topWorkTtl").attr("id", @_id + "_6");
    
    # SP用背景
    @_bg = @_makeDisplay();
    @unshift(@_bg);
    @_bg.bgColor("#FFFFFF");
    
    # vol
    @_vol0 = @_makeResponsiveDisplay(@_id + "_0", MY.f.makeRspsvClass("topVol0_0", "topVol0_1"));
    @_vol1 = @_makeResponsiveDisplay(@_id + "_5", MY.f.makeRspsvClass("topVol1_0", "topVol1_1"));
    
    # vol下のライン
    @_volBtmLine = @_makeDisplay();
    @add(@_volBtmLine);
    @_volBtmLine.bgColor("#000000");
    
    # タイトル
    @_ttl0 = @_makeResponsiveDisplay(@_id + "_1", MY.f.makeRspsvClass("topTtl0_0", "topTtl0_1"));
    @_ttl1 = @_makeResponsiveDisplay(@_id + "_2", MY.f.makeRspsvClass("topTtl1_0", "topTtl1_1"));
    
    # サブタイトル
    @_subTtl = @_makeResponsiveDisplay(@_id + "_3", MY.f.makeRspsvClass("topSubTtl1_0", "topSubTtl1_1"));
    
    # 作品タイトル
    @_workTtl = @_makeResponsiveDisplay(@_id + "_6", MY.f.makeRspsvClass("topWorkTtl_0", "topWorkTtl_1"));
    
    # moreボタン
    @_moreBtn = new SeeMoreBtn(@_id + "_4");
    @_moreBtn.init();
    @_moreBtn.onClick = @_eClick;
    
    # SP用ボタン
    @_btn = @_makeBtn(null, @_eClick);
    @add(@_btn);
    
    # 演出バー
    @_makeEffectBar();
    
    # オフセット用アニメーションパラメータ
    @_offset["vol"] = new AniParam();
    @_offset["ttl"] = new AniParam();
    @_offset["subTtl"] = new AniParam();
    @_offset["moreBtn"] = new AniParam();
    
    if !MY.u.isSmt()
      @mask(true);
    @resize();
  
  
  
  # -----------------------------------
  # 演出バー作成
  # -----------------------------------
  _makeEffectBar: =>
    
    arr = [
      "vol0",
      "vol1",
      "volBtmLine",
      "workTtl",
      "ttl0",
      "ttl1",
      "subTtl",
      "moreBtn"
    ];
    
    for val,i in arr
      bar = new EffectBar();
      bar.init();
      @add(bar);
      @_effectBar[val] = bar;
  
  
  
  # -----------------------------------
  # 指定演出バーのサイズ変更
  # -----------------------------------
  _setEffectBarSize: (key, display) =>
    
    bar = @_effectBar[key];
    if bar?
      bar.xy(display.x(), display.y());
      bar.setBarSize(display.width(), display.height());
  
  
  
  # -----------------------------------
  # 演出ボタンの位置更新
  # -----------------------------------
  _updateEffectBarPos: =>
    
    for key,val of @_effectBar
      base = @["_" + key];
      #val.visible(base.isVisible());
      val.translate(base.ap.x, base.ap.y);
      val.render();
  
  
  
  # -----------------------------------
  # イベント クリック
  # -----------------------------------
  _eClick: =>
    
    MY.c.setPjDetail(@_partsId, true);
  
  
  
  # -----------------------------------
  # パーツ切り替え前の位置に
  # -----------------------------------
  readyPartsChange: =>
    
    @visible(true);
    @render();
    @resize();
    
    @_setAnimation(0, @width() * 1.5, false, 0, false);
  
  
  
  # -----------------------------------
  # 消す
  # -----------------------------------
  hide: (isAnimate, delay) =>
    
    @_isShow = false;
    if @_lo == MY.conf.LO_1
      isAnimate = false;
    @_setAnimation(0, -@width() * 1.2, isAnimate, delay, false);
  
  
  
  # -----------------------------------
  # 表示
  # -----------------------------------
  show: (isAnimate, delay) =>
    
    @_isShow = true;
    @visible(true);
    @render();
    @resize();
    
    @_setAnimation(-@width() * 1.5, 0, isAnimate, delay, true);
  
  
  
  # -----------------------------------
  # アニメーション設定
  # -----------------------------------
  _setAnimation: (to, from, isAnimate, delay, isEffectBar) =>
    
    if !isAnimate? then isAnimate = true;
    if !isEffectBar? then isEffectBar = true;
    
    arr = [
      "vol0",
      "vol1",
      "volBtmLine",
      "workTtl",
      "ttl0",
      "ttl1",
      "subTtl",
      "moreBtn"
    ];
    
    if @_lo == MY.conf.LO_1
      arr.push("bg");
      isEffectBar = false;
    
    # 遅延設定
    start = delay;
    d = MY.conf.STR_DELAY;
    d = 10;
    
    if !isEffectBar
      d = 0;
    
    for val,i in arr
      o = @["_" + val];
      delay2 = start + d * i;
      o.ap.delay(delay2).resetE();
      o.ap.x = to;
      o.ap.tx = from;
      if !isAnimate
        o.ap.finish();
    
      # 演出バー
      bar = @_effectBar[val];
      if bar?
        if isEffectBar
          bar.start(delay2, isAnimate);
        else
          bar.hide();
    
    
    @_update();
  
  
  
  # -----------------------------------
  # タイトルまでのオフセット値
  # -----------------------------------
  getTtlY: =>
    
    return @_workTtl.y() - 5;
  
  
  
  # -----------------------------------
  # resize
  # -----------------------------------
  resize: (w, h) =>
    
    @_resize(w, h);
    
    # vol
    @_vol0.update();
    @_vol1.update();
    @_vol0.xy(0, MY.f.getLOVal(0, 15));
    @_vol0.render();
    @_vol1.xy(0, @_vol0.bottom());
    @_vol1.render();
    
    # vol 演出バー
    @_setEffectBarSize("vol0", @_vol0);
    @_setEffectBarSize("vol1", @_vol1);
    
    # ライン
    @_volBtmLine.size(MY.f.getLOVal(14, 7), MY.f.getLOVal(2, 1));
    @_volBtmLine.xy(0, @_vol1.bottom() + MY.f.getLOVal(7, 6));
    @_volBtmLine.render();
    
    # ライン 演出バー
    @_setEffectBarSize("volBtmLine", @_volBtmLine);
    
    # 作品タイトル
    @_workTtl.update();
    @_workTtl.xy(0, @_volBtmLine.bottom() + MY.f.getLOVal(20, 12));
    @_workTtl.render();
    
    # 作品タイトル 演出バー
    @_setEffectBarSize("workTtl", @_workTtl);
    
    # タイトル
    @_ttl0.update();
    @_ttl1.update();
    @_ttl0.xy(1, @_workTtl.bottom() + MY.f.getLOVal(5, 5));
    @_ttl0.render();
    @_ttl1.xy(@_ttl0.x(), @_ttl0.bottom() + MY.f.getLOVal(0, 10));
    @_ttl1.render();
    
    # タイトル 演出バー
    @_setEffectBarSize("ttl0", @_ttl0);
    @_setEffectBarSize("ttl1", @_ttl1);
    
    # サブタイトル
    @_subTtl.update();
    @_subTtl.xy(0, @_ttl1.bottom() + MY.f.getLOVal(46, 10));
    @_subTtl.render();
    
    # サブタイトル 演出バー
    @_setEffectBarSize("subTtl", @_subTtl);
    
    # moreボタン
    if @_lo == MY.conf.LO_0
      @_moreBtn.visible(true);
      @_moreBtn.xy(0, @_subTtl.bottom() + 30);
      @_moreBtn.render();
    else
      @_moreBtn.visible(false);
      @_moreBtn.render();
    
    # moreボタン 演出バー
    @_setEffectBarSize("moreBtn", @_moreBtn);
    
    # 背景 SPのみ
    if @_lo == MY.conf.LO_1
      @_bg.visible(true);
      @_bg.size(@_ttl0.width() + 25, @_subTtl.bottom() + 20);
      @_bg.render();
    else
      @_bg.visible(false);
      @_bg.render();
    
    # ボタン SPのみ
    @_btn.visible((@_lo == MY.conf.LO_1));
    @_btn.size(@_bg.width(), @_bg.height());
    @_btn.xy(0, 0);
    @_btn.render();
    
    @size(@_ttl0.width() + 80, MY.f.getLOVal(@_moreBtn.bottom(), @_bg.height()));
    @render();
  
  
  
  # -----------------------------------
  # オフセット値変更
  # @r : 0~1
  # -----------------------------------
  setOffset: (r, isAnimate) =>
    
    if !isAnimate? then isAnimate = true;
    
    range0 = 50;
    range1 = 80;
    range2 = 60;
    range3 = 30;
    @_offset["vol"].tx = range0 * r;
    #@_offset["vol"].ty = range0 * r;
    @_offset["ttl"].tx = range1 * r;
    #@_offset["ttl"].ty = range1 * r;
    @_offset["subTtl"].tx = range2 * r;
    #@_offset["subTtl"].ty = range2 * r;
    @_offset["moreBtn"].tx = range3 * r;
    #@_offset["moreBtn"].ty = range3 * r;
    
    if !isAnimate
      @_offset["vol"].finish();
      @_offset["ttl"].finish();
      @_offset["subTtl"].finish();
      @_offset["moreBtn"].finish();
  
  
  
  # -----------------------------------
  # update
  # -----------------------------------
  _update: =>
    
    super();
    
    #if !@isVisible() then return;
    
    # オフセット
#     @_offset["vol"].update();
#     @_offset["ttl"].update();
#     @_offset["subTtl"].update();
#     @_offset["moreBtn"].update();
    
    @_vol0.ap.update();
    @_vol1.ap.update();
    @_volBtmLine.ap.update();
    @_workTtl.ap.update();
    @_ttl0.ap.update();
    @_ttl1.ap.update();
    @_subTtl.ap.update();
    @_moreBtn.ap.update();
    @_bg.ap.update();
    
    @_vol0.translate(@_vol0.ap.x, @_vol0.ap.y);
    @_vol0.render();
    
    @_vol1.translate(@_vol1.ap.x, @_vol1.ap.y);
    @_vol1.render();
    
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
    
    # 演出ボタンの位置
    @_updateEffectBarPos();
    
    
    @_bg.translate(@_bg.ap.x, @_bg.ap.y);
    @_bg.render();
    
    if !@_isShow && @_moreBtn.ap.isFinish()
      @visible(false);
      @render();







module.exports = TopParts;