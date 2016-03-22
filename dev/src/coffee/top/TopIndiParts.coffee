MyDisplay         = require('../base/MyDisplay');
DisplayTransform  = require('../libs/display/DisplayTransform');
ResponsiveDisplay = require('../parts/ResponsiveDisplay');
SeeMoreBtn        = require('../parts/SeeMoreBtn');
EffectBar         = require('../parts/EffectBar');
AniParam          = require('../base/AniParam');


# ---------------------------------------------------
# トップ / インジケーター / パーツ
# ---------------------------------------------------
class TopIndiParts extends MyDisplay
  
  
  # -----------------------------------------------
  # コンストラクタ
  # -----------------------------------------------
  constructor: (partsId) ->
    
    super();
    
    # ID
    @_partsId = partsId;
    
    # まる
    @_dot;
    
    # ボタン
    @_btn;
    
    # アクティブフラグ
    @_isActive = false;
    
    # コールバック クリック
    @onClick;
  
  
  
  # -----------------------------------------------
  # 初期化
  # -----------------------------------------------
  init: =>
    
    super();
    
    # まる
    @_dot = @_makeDisplay();
    @add(@_dot);
    
    # ボタン
    @_btn = @_makeBtn(null, @_eClick);
    @add(@_btn);
    
    @mask(true);
    @resize();
  
  
  
  # -----------------------------------------------
  # アクティブ設定
  # -----------------------------------------------
  setActive: (bool) =>
    
    @_isActive = bool;
    @resize();
  
  
  
  # -----------------------------------
  # イベント クリック
  # -----------------------------------
  _eClick: =>
    
    if @_isActive then return;
    if @onClick? then @onClick(@_partsId);
  
  
  
  # -----------------------------------
  # まる作成
  # -----------------------------------
  _makeDot: (radius) =>
    
    if @_isActive
      color = "#000";
    else
      color = "#FFF";
    
    @_dot.elm().css({
      "-webkit-border-radius":radius,
      "-moz-border-radius":radius,
      "border-radius":radius
    });
    @_dot.size(radius * 2, radius * 2);
    @_dot.bgColor(color);
    @_dot.render();
  
  
  
  # -----------------------------------
  # resize
  # -----------------------------------
  resize: (w, h) =>
    
    @_resize(w, h);
    
    # まる
    radius = MY.f.getLOVal(4, 3);
    @_makeDot(radius);
    
    # ボタン
    @_btn.size(@_dot.width() * 1.5, @_dot.height() * 1.5);
    @_btn.xy(~~(@_dot.width() * 0.5 - @_btn.width() * 0.5), ~~(@_dot.height() * 0.5 - @_btn.height() * 0.5));
    @_btn.render();
    
    @size(@_dot.width(), @_dot.height());
    @render();
  
  
  
  # -----------------------------------
  # update
  # -----------------------------------
  _update: =>
    
    super();






module.exports = TopIndiParts;