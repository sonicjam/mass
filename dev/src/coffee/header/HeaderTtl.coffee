MyDisplay     = require('../base/MyDisplay');
ResponsiveImg = require('../parts/ResponsiveImg');
SvgLogo       = require('../parts/SvgLogo');


# ---------------------------------------------------
# ヘッダー / タイトル
# ---------------------------------------------------
class HeaderTtl extends MyDisplay
  
  
  # -----------------------------------------------
  # コンストラクタ
  # -----------------------------------------------
  constructor: ->
    
    super({
      id:"xHeaderTtl"
    });
    
    # SVGロゴ
    @_img;
    
  
  
  
  # -----------------------------------------------
  # 初期化
  # -----------------------------------------------
  init: =>
    
    super();
    
    # SVGロゴ
    @_img = new SvgLogo(124);
    @_img.init();
    @add(@_img);
    @_img.showLine(0, 100, false);
    @_img.showFill(0, 100, false);
    
    
    @_resize();
  
  
  
  # -----------------------------------
  # resize
  # -----------------------------------
  _resize: (w, h) =>
    
    super(w, h);
    
    # SVGロゴ
    @_img._resize();
    
#     @_img.xy(-100, 0);
#     @_img.render();
    
    @size(@_img.width(), @_img.height());
    @render();
  
  
  
  # -----------------------------------
  # update
  # -----------------------------------
  _update: =>
    
    super();










module.exports = HeaderTtl;