

# ---------------------------------------------------
# About / 中央グラフィック部分 / 位置オブジェクト
# ---------------------------------------------------
class AboutGraPoint
  
  
  # -----------------------------------------------
  # コンストラクタ
  # -----------------------------------------------
  constructor: (pId, id, x, y, z) ->
    
    @pId = pId;
    @id = id;
    
    @x = x;
    @y = y;
    @z = z;
    
    @tx = x;
    @ty = y;
    @tz = z;
    
    @defX = x;
    @defY = y;
    @defZ = z;
    
    @delay = -@id * 0.1;
    
#     @ang = @pId * 0 + @id * 2;
    @ang = @id;
    @speed = 2.5;
    
    @range = 0;
    @range2 = 0;
    @tRange = 0;
    @vRange = 0;
    
    @_isFix = true;
    
    @_ease = 0;
    @_tEase = 0.1;
    
    @fixDelay = 0;
    
    @_init();
  
  
  
  # -----------------------------------------------
  # 初期化
  # -----------------------------------------------
  _init: =>
  
  
  
  # -----------------------------------------------
  # 
  # -----------------------------------------------
  change: (bool, delay, range) =>
    
    if @_isFix != bool
      
      @_isFix   = bool;
      @fixDelay = -delay;
      
      if @_isFix
        @tRange = 0;
      else
        #@tRange = MY.u.random(60, 65) * 0.05;
        @tRange = range * 0.05;
  
  
  
  # -----------------------------------------------
  # 更新
  # -----------------------------------------------
  update: (offsetX, offsetY) =>
    
    #if ++@delay > 0
    
    e = 0.1;
    @x += ((@tx + offsetX) - @x) * e;
    @y += ((@ty + offsetY) - @y) * e;
    @z += (@tz - @z) * e;
      
#       if ++@fixDelay > 0
#         p = 0.55;
#         @vRange += (@tRange - @range) * p;
#         @range += (@vRange *= p);
#       
#       @ang += @speed;
#       @tz = Math.cos(MY.u.radian(@ang)) * (0.5 + @range * 2);
#       @tx = @defX + Math.sin(MY.u.radian(@ang)) * (0.1 + @range);
#       @ty = @defY + Math.cos(MY.u.radian(@ang)) * (0.1 + @range);
    
    #else
    
      #@z = 10000;
    
    @_updateTg();
    
  
  
  
  # -----------------------------------------------
  # 目標値更新
  # -----------------------------------------------
  _updateTg: =>
    
    if ++@fixDelay > 0
#       @_ease += (@_tEase - @_ease) * 0.1;
#       @range += (@tRange - @range) * 
      p = 0.4;
      @vRange += (@tRange - @range) * p;
      @range += (@vRange *= p);
    
    @ang += @speed;
    rad = MY.u.radian(@ang);
    #@tx = @defX + Math.sin(rad) * (0.1 + @range);
    #@ty = @defY + Math.cos(rad) * (0.1 + @range);
    @tz = @defZ + Math.sin(rad) * (1 + @range);
    @tx = @defX + Math.sin(rad) * (Math.abs(@z) * 0.5 + @range);
    @ty = @defY + Math.cos(rad) * (Math.abs(@z) * 0.5 + @range);












module.exports = AboutGraPoint;