Rect              = require('../libs/object/Rect');
MyDisplay         = require('../base/MyDisplay');
ResponsiveDisplay = require('../parts/ResponsiveDisplay');


# ---------------------------------------------------
# About / キャプション
# ---------------------------------------------------
class AboutCaption extends MyDisplay
  
  
  # -----------------------------------------------
  # コンストラクタ
  # -----------------------------------------------
  constructor: (txtId) ->
    
    super();
    
    @_txtId = txtId;
    
    # テキスト
    @_text;
    
    # ライン
    @_line;
  
  
  
  # -----------------------------------------------
  # 初期化
  # -----------------------------------------------
  init: =>
    
    super();
    
    # テキスト
    @_text = new ResponsiveDisplay(
      MY.f.makeRspsvClass("aboutCap" + String(@_txtId) + "_0", "aboutCap" + String(@_txtId) + "_1"), 
      {
        id:"xAboutCap" + String(@_txtId)
      }
    );
    @_text.init();
    @add(@_text);
    
    # ライン
    @_line = @_makeLine(null, "#000");
    @add(@_line);
  
  
  
  # -----------------------------------------------
  # 
  # -----------------------------------------------
  update: =>
    
    @_text.update();
    
  
  
  
  # -----------------------------------------------
  # 
  # -----------------------------------------------
  flush: (isLine, align) =>
    
    if !isLine? then isLine = true;
    if !align? then align = "left";
    
    if isLine
      @_line.visible(true);
      @_line.size(MY.f.getLOVal(14, 10), MY.f.getLOVal(2, 1));
      switch align
        when "left"
          x = 0;
        when "center"
          x = ~~(@_text.width() * 0.5 - @_line.width() * 0.5);
        else
          x = @_text.width() - @_line.width();
      @_line.xy(x, @_text.bottom() + MY.f.getLOVal(10, 10));
      @_line.render();
      
      @size(@_text.width(), @_line.bottom());
      @render();
    else
      @_line.visible(false);
      @_line.render();
      
      @size(@_text.width(), @_text.bottom());
      @render();












module.exports = AboutCaption;