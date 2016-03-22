MyDisplay     = require('../base/MyDisplay');
Animation     = require('../libs/animation/Animation');
ResponsiveImg = require('./ResponsiveImg');
SvgLogo       = require('./SvgLogo');


# ---------------------------------------------------
# ローディング
# ---------------------------------------------------
class Loading extends MyDisplay
  
  
  # -----------------------------------------------
  # コンストラクタ
  # -----------------------------------------------
  constructor: ->
    
    super();
    
    # 進捗線
    @_line;
    @_lineA = new Animation();
    
    # タイトル
    @_ttl;
    @_ttlScale = 0.85;
    @_ttlA = new Animation();
    @_isTtlHide = false;
    
    # 進捗率
    @_startRate = MY.u.random(70, 90) * 0.01;
    @_rate = @_startRate;
    @_isLoaded = false;
    
    # コールバック 終わり
    @onComplete;
  
  
  
  # -----------------------------------------------
  # 初期化
  # -----------------------------------------------
  init: =>
    
    super();
    
    # 進捗線
    @_line = @_makeDisplay();
    @add(@_line);
    @_line.bgColor("#000000");
    @_line.pivot("0% 0%");
    @_line.ap.x = 0;
    
    # SVGロゴ
    @_ttl = new SvgLogo(250);
    @_ttl.init();
    @add(@_ttl);
    
    # タイトルの表示アニメーション
    @_ttlA.set({
      opacity:{from:0, to:1},
      frame:20,
      delay:2,
      onComplete: =>
        # データ読み込み開始
        MY.pre.onProgress = @_eProgress;
        MY.pre.onComplete = @_eComplete;
        MY.delay.add(MY.pre.load, 120);
        #MY.pre.load();
    });
    @_ttlA.start();
    @_ttl.showLine(0, 120);
    @_ttl.showFill(90, 90);
    
    @_resize();
    @_update();
  
  
  
  # -----------------------------------------------
  # イベント 読み込み中
  # @r : 0~1
  # -----------------------------------------------
  _eProgress: (r) =>
  
    @_rate = MY.u.map(r, @_startRate, 1, 0, 1);
  
  
  
  # -----------------------------------------------
  # イベント 読み込み完了
  # -----------------------------------------------
  _eComplete: =>
    
    @_rate = 1;
    @_isLoaded = true;
  
  
  
  # -----------------------------------------------
  # タイトル消す
  # -----------------------------------------------
  _hideTtl: =>
    
    if @_isTtlHide then return;
    @_isTtlHide = true;
    
    # タイトル消すアニメーション
    @_ttlA.set({
      opacity:{from:@_ttlA.get("opacity"), to:0},
      frame:70,
      delay:50,
      onComplete: =>
        if @onComplete? then @onComplete();
    });
    @_ttlA.start();
#     @_ttl.hideLine(0, 60);
#     @_ttl.hideFill(0, 60);
    
    # 進捗線消す
    @_line.pivot("100% 0%");
    @_lineA.set({
      scaleX:{from:1, to:-0.01},
      frame:100,
      delay:10,
      ease:"inOutExpo"
    });
    @_lineA.start();
    
    @_update();
  
  
  
  # -----------------------------------
  # resize
  # -----------------------------------
  _resize: (w, h) =>
    
    super(w, h);
    
    @_line.size(@_sw, MY.f.getLOVal(4, 2));
    @_line.render();
    
    @_ttl._resize();
    @_ttl.xy(~~(@_sw * 0.5 - @_ttl.width() * 0.5), ~~(@_sh * 0.5 - @_ttl.height() * 0.5));
    @_ttl.render();
  
  
  
  # -----------------------------------
  # update
  # -----------------------------------
  _update: =>
    
    super();
    
    if !@_line? || !@_ttl? then return;
    
    # 進捗線
    if @_isTtlHide
      @_lineA.update();
      if !@_line? then return;
      @_line.scale(@_lineA.get("scaleX"), 1);
    else
      @_line.ap.x += (@_rate - @_line.ap.x) * 0.1;
      @_line.scale(@_line.ap.x, 1);
    @_line.render();
    
    # タイトル
    @_ttlA.update();
    if @_ttl?
      @_ttlScale += 0.00035;
      @_ttlScale = Math.min(@_ttlScale, 1);
      @_ttl.opacity(@_ttlA.get("opacity"));
      @_ttl.scale(@_ttlScale, @_ttlScale);
      @_ttl.render();
    
    # 進捗線が端までいったらタイトル消して終わり
    if @_line? && @_rate == 1 && Math.abs(@_rate - @_line.ap.x) < 0.5 && @_isLoaded
      @_hideTtl();
  
  
  
  # -----------------------------------------------
  # 破棄
  # -----------------------------------------------
  dispose: =>
    
    if @_line?
      @_line.dispose();
      @_line = null;
    
    if @_lineA?
      @_lineA.dispose();
      @_lineA = null;
    
    if @_ttl?
      @_ttl.dispose();
      @_ttl = null;
    
    if @_ttlA?
      @_ttlA.dispose();
      @_ttlA = null;
    
    @onComplete = null;
    
    super();























module.exports = Loading;