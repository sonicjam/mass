MyDisplay = require('../base/MyDisplay');


# ---------------------------------------------------
# About用のカバー
# ---------------------------------------------------
class AboutCover extends MyDisplay
  
  
  # -----------------------------------------------
  # コンストラクタ
  # -----------------------------------------------
  constructor: ->
    
    super({
      id:"xAboutCover"
    });
  
  
  
  # -----------------------------------------------
  # 初期化
  # -----------------------------------------------
  init: =>
    
    super();
    
    @bgColor("#FFFFFF");
    @opacity(0.5);
    
    @_makeAnimation(1);
    
    @_resize();
    @hide(false);
  
  
  
  # -----------------------------------
  # 隠す
  # -----------------------------------
  hide: (isAnimate, delay) =>
  
    if !isAnimate? then isAnimate = true;
    delay = delay || 0;
    
    a = @_anm[0];
    a.set({
      y:{from:0, to:@_sh},
      opacity:{from:1, to:0},
      ease:MY.conf.ABOUT_PARAM.EASE,
      delay:delay,
      frame:MY.conf.ABOUT_PARAM.FRAME,
      onComplete: =>
        @visible(false);
        @render();
    });
    a.start();
    
    if !isAnimate then a.finish();
    
    @_update();
    
  
  
  # -----------------------------------
  # 表示
  # -----------------------------------
  show: (isAnimate, delay) =>
  
    if !isAnimate? then isAnimate = true;
    delay = delay || 0;
    
    @visible(true);
    
    a = @_anm[0];
    a.set({
      y:{from:-@_sh, to:0},
      opacity:{from:0.5, to:0.5},
      ease:MY.conf.ABOUT_PARAM.EASE,
      delay:delay,
      frame:MY.conf.ABOUT_PARAM.FRAME
    });
    a.start();
    
    if !isAnimate then a.finish();
    
    @_update();
  
  
  
  # -----------------------------------
  # resize
  # -----------------------------------
  _resize: (w, h) =>
    
    super(w, h);
    
    @size(@_sw, @_sh);
    @render();
  
  
  
  # -----------------------------------
  # update
  # -----------------------------------
  _update: =>
    
    super();
    
    a = @_anm[0];
    @translate(0, a.get("y"));
    @opacity(a.get("opacity"));
    @render();







module.exports = AboutCover;