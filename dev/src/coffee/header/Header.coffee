MyDisplay        = require('../base/MyDisplay');
DisplayTransform = require('../libs/display/DisplayTransform');
HeaderTtl        = require('./HeaderTtl');
Gnavi            = require('./Gnavi');
HbBtn            = require('./HbBtn');
SvgLogo          = require('../parts/SvgLogo');


# ---------------------------------------------------
# ヘッダー
# ---------------------------------------------------
class Header extends MyDisplay
  
  
  # -----------------------------------------------
  # コンストラクタ
  # -----------------------------------------------
  constructor: ->
    
    super({
      id:"xHeader",
      isDefault3d:false
    });
    
    # 背景
    @_bg;
    
    # タイトル
    @_ttl;
    
    # グロナビ
    @_gnavi;
    
    # 固定モード
    @_isFix = false;
    
    # 表示フラグ
    @_isShow = false;
    
    # ハンバーガーボタン SP用
    @_hbBtn;
    
    # コールバック マウス離れた
    @onMouseLeave;
  
  
  
  # -----------------------------------------------
  # 初期化
  # -----------------------------------------------
  init: =>
    
    super();
    
    # 最前面にしておく
    @elm().css({
      zIndex:9999
    });
    
    # 背景
    @_bg = new DisplayTransform();
    @_bg.init();
    @unshift(@_bg);
    @_bg.bgColor("#FFFFFF");
    @_bg.opacity(0);
    
    # タイトル
#     @_ttl = new HeaderTtl();
#     @_ttl.init();
    @_ttl = new SvgLogo(124, 0.7);
    @_ttl.init();
    @add(@_ttl);
    @_ttl.elm().on("mouseenter", =>
      if !MY.u.isSmt()
        MY.u.buttonMode(true);
        @_ttl.showLine(0, 60);
        @_ttl.showFill(40, 50);
    ).on("mouseleave", =>
      MY.u.buttonMode(false);
    ).on("click", =>
      @_gnavi._menus[0]._eClick();
    );
    
    # グロナビ
    @_gnavi = new Gnavi();
    @_gnavi.init();
    
    # ハンバーガーボタン SP用
    @_hbBtn = new HbBtn();
    @_hbBtn.init();
    @_hbBtn.onClick = @_eClickHBBtn;
    @add(@_hbBtn);
    
    # ロールアウトの監視
    @elm().on("mouseleave", @_eMouseLeave);
    
    @_makeAnimation(1);
    
    #@mask(true);
    @_resize();
    @hide(false);
  
  
  
  # -----------------------------------------------
  # 背景の透明度
  # -----------------------------------------------
  setBgOpacity: (val) =>
    
    @_bg.opacity(val);
    @_bg.render();
  
  
  
  # -----------------------------------------------
  # イベント マウス離れた
  # -----------------------------------------------
  _eMouseLeave: =>
    
    if @onMouseLeave? then @onMouseLeave();
  
  
  
  # -----------------------------------------------
  # イベント HBボタンクリック
  # -----------------------------------------------
  _eClickHBBtn: =>
    
    # 閉じてたら開く
    @ctrlGnavi(!MY.c.getSpgnavi().isShow);
  
  
  
  # -----------------------------------------------
  # SP用グロナビの開閉
  # -----------------------------------------------
  ctrlGnavi: (isOpen) =>
    
    if isOpen
      MY.c.getSpgnavi().open();
    else
      MY.c.getSpgnavi().close();
  
  
  
  # -----------------------------------------------
  # ポジションの設定
  # -----------------------------------------------
  setPosition: (val) =>
    
    if !val? then val = "absolute";
    @css().position = val;
    @render();
  
  
  
  # -----------------------------------------------
  # 固定モード設定
  # -----------------------------------------------
  setFixMode: (bool) =>
    
    if bool
      @_isFix = true;
      if @_lo == MY.conf.LO_0 then @setPosition("fixed");
    else
      @_isFix = false;
      @setPosition();
  
  
  
  # -----------------------------------------------
  # 表示されてるかどうか
  # -----------------------------------------------
  isShow: =>
    
    return @_isShow;
  
  
  
  # -----------------------------------------------
  # 表示
  # -----------------------------------------------
  show: (isAnimate, delay, frame) =>
    
    if !isAnimate? then isAnimate = true;
    delay = delay || 0;
    frame = frame || MY.conf.DETAIL_EXPAND_FRAME;
    
    @_isShow = true;
    a = @_anm[0];
    a.set({
      y:{from:-@_bg.height(), to:0},
      frame:frame,
      delay:delay,
      ease:MY.conf.DETAIL_EXPAND_EASE
    });
    a.start();
    
    if !isAnimate then a.finish();
    @opacity(1);
    @_update();
  
  
  
  # -----------------------------------------------
  # 消す
  # -----------------------------------------------
  hide: (isAnimate, delay, frame) =>
    
    if !isAnimate? then isAnimate = true;
    delay = delay || 0;
    frame = frame || MY.conf.DETAIL_EXPAND_FRAME;
    
    @_isShow = false;
    a = @_anm[0];
    a.set({
      y:{from:0, to:-@_bg.height()},
      frame:frame,
      delay:delay,
      ease:MY.conf.DETAIL_EXPAND_EASE,
      onComplete: =>
        @opacity(0);
        @render();
    });
    a.start();
    
    if !isAnimate then a.finish();
    @_update();
  
  
  
  # -----------------------------------------------
  # アクティブ設定
  # -----------------------------------------------
  setActive: (pageId) =>
    
    @_gnavi.setActive(pageId);
  
  
  
  # -----------------------------------
  # resize
  # -----------------------------------
  _resize: (w, h) =>
    
    super(w, h);
    
    @size(@_sw, MY.conf.HEADER_HEIGHT[@_lo]);
    @render();
    
    @_bg.size(@width(), MY.conf.HEADER_HEIGHT[@_lo]);
    @_bg.render();
    
    @_ttl.xy(MY.f.getLOVal(50, 20), MY.f.getLOVal(40, 17));
    @_ttl.render();
    
    # グロナビ
    @_gnavi.visible((@_lo == MY.conf.LO_0));
    @_gnavi.render();
    @_gnavi.resize(@_sw, @_sh);
    @_gnavi.xy(@_sw - @_gnavi.width(), 70);
    @_gnavi.render();
    
    # HBB SPのみ
    @_hbBtn.visible((@_lo == MY.conf.LO_1));
    @_hbBtn.xy(MY.f.getLOVal(0, @_sw - @_hbBtn.width()), ~~(@_bg.height() * 0.5 - @_hbBtn.height() * 0.5));
    @_hbBtn.render();
    
    # 固定モードの引き継ぎ
    if @_isFix && @_lo == MY.conf.LO_0
      @setPosition("fixed");
    else
      @setPosition();
  
  
  
  # -----------------------------------
  # update
  # -----------------------------------
  _update: =>
    
    super();
    
    @translate(0, @_anm[0].get("y"));
    @render();























module.exports = Header;