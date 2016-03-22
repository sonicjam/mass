MyDisplay = require('../base/MyDisplay');
Point     = require('../libs/object/Point');


# ---------------------------------------------------
# 演出用バー
# ---------------------------------------------------
class EffectBar extends MyDisplay
  
  
  # -----------------------------------------------
  # コンストラクタ
  # -----------------------------------------------
  constructor: (option, barColor, offsetDelay, anmFrame) ->
    
    super(option);
    
    # 色
    @_barColor = barColor || MY.conf.EFFECT_BAR_COLOR_0
    
    # バー
    @_bar;
    
    @_anmFrame = anmFrame || 70;
    @_offsetSpeed = 0;
    @_delayCnt = 0;
    @_offsetDelay = offsetDelay || 40;
    @_barPos = new Point();
    
    @_isStart = false;
  
  
  
  # -----------------------------------------------
  # 初期化
  # -----------------------------------------------
  init: =>
    
    super();
    
    # バー
    @_bar = @_makeDisplay();
    @add(@_bar);
    @_bar.bgColor(@_barColor);
    @_bar.pivot("100% 0%");
    
    @_makeAnimation(1);
    @setBarSize(0, 0);
  
  
  
  # -----------------------------------------------
  # バーサイズ設定
  # -----------------------------------------------
  setBarSize: (w, h) =>
    
    offsetDist = Math.abs(@_offsetDelay * @_offsetSpeed);
    offsetDist = 0;
    
    @_bar.size(w + 4, h);
    @_bar.x(-offsetDist);
    @_bar.render();
    
    @size(w, @_bar.height());
    @render();
  
  
  
  # -----------------------------------
  # 隠す
  # -----------------------------------
  hide: =>
    
    @visible(false);
    @render();
  
  
  
  # -----------------------------------
  # アニメーションの開始
  # -----------------------------------
  start: (delay, isAnimate) =>
    
    @_isStart = true;
    @_delayCnt = -delay || 0;
    
    @_barPos.reset();
    @visible(true);
    @render();
    
    @_bar.opacity(1);
    #@_bar.translate(@_barPos.x, @_barPos.y);
    @_bar.scale(1, 1);
    @_bar.render();
    
    a = @_anm[0];
    a.set({
      scaleX:{from:1, to:0},
      ease:"inOutExpo",
      frame:@_anmFrame,
      delay:delay + @_offsetDelay,
      onComplete: =>
        @visible(false);
        @render();
    });
    a.start();
    
    @_update();
  
  
  
  # -----------------------------------
  # resize
  # -----------------------------------
  _resize: (w, h) =>
    
    super(w, h);
  
  
  
  # -----------------------------------
  # update
  # -----------------------------------
  _update: =>
    
    super();
    
    if @_isStart
      if ++@_delayCnt > 0
        
        # ちょっとずつ動かす
        @_barPos.x += @_offsetSpeed;
        @_bar.translate(@_barPos.x, @_barPos.y);
        
        # 小さくする
        a = @_anm[0];
#         if a.isStart()
#           @_bar.opacity(if @_bar.opacity() == 1 then 0.9 else 1);
        @_bar.scale(a.get("scaleX"), 1);
        @_bar.render();
  
  
  
  
  
  
  




module.exports = EffectBar;