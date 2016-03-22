AniParam = require('./base/AniParam');


# ---------------------------------------------------
# ページスクロール管理
# ---------------------------------------------------
class Scroller
  
  
  # -----------------------------------------------
  # コンストラクタ
  # -----------------------------------------------
  constructor: ->
    
    @_tg;
    
    # パラメータ
    @_ap = new AniParam();
    
    # スクロールフラグ
    @_isScroll = false;
    
    # コールバック 完了
    @onComplete;
    
    
    @_init();
  
  
  # ------------------------------------
  # 初期化
  # ------------------------------------
  _init: =>
    
    @_tg = $(window);
    @_ap.tEaseE = 0.5;
    
    MY.update.add(@_update);
  
  
  
  # -----------------------------------
  # スクロール開始
  # -----------------------------------
  scroll: (t, delay, callBack, isAnimate) =>
    
    delay = delay || 0;
    if !isAnimate? then isAnimate = true;
    
    @onComplete = callBack;
    @_isScroll = true;
    
    @_ap.y = @_tg.scrollTop();
    @_ap.ty = t;
    @_ap.resetE().delay(delay);
    
    if Math.abs(@_ap.y - @_ap.ty) < 1
      isAnimate = false;
    
    if !isAnimate then @_ap.finish();
    @_update();
  
  
  
  # -----------------------------------
  # update
  # -----------------------------------
  _update: =>
    
    if @_isScroll
      @_ap.update();
      @_tg.scrollTop(@_ap.y);
      if @_ap.isFinish()
        @_isScroll = false;
        if @onComplete? then @onComplete();









module.exports = Scroller;