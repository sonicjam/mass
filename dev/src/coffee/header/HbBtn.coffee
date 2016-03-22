MyDisplay = require('../base/MyDisplay');
Rect      = require('../libs/object/Rect');


# ---------------------------------------------------
# ハンバーガーボタン
# ---------------------------------------------------
class HbBtn extends MyDisplay
  
  
  # -----------------------------------------------
  # コンストラクタ
  # -----------------------------------------------
  constructor: ->
    
    super({
      resize:false
    });
    
    # ボタン
    @_btn;
    
    # ライン
    @_lineTop;
    @_lineCenter;
    @_lineBtm;
    
    @_lineBox;
    
    # コールバック クリック
    @onClick;
  
  
  
  # -----------------------------------------------
  # 初期化
  # -----------------------------------------------
  init: =>
    
    super();
    
    # ライン
    @_lineTop    = @_makeLine(null, "#000000");
    @_lineCenter = @_makeLine(null, "#000000");
    @_lineBtm    = @_makeLine(null, "#000000");
    @add(@_lineTop);
    @add(@_lineCenter);
    @add(@_lineBtm);
    @_lineTop.pivot("50% 0%");
    @_lineCenter.pivot("50% 50%");
    @_lineBtm.pivot("50% 50%");
   
    # ボタン
    @_btn = @_makeBtn(null, @_eClick);
    @add(@_btn);
    @_btn.size(60, 60);
    @_btn.render();
    
    # 全体
    @size(@_btn.width(), @_btn.height());
    @render();
    
    # ライン初期値に
    @setLine();
  
  
  
  # -----------------------------------
  # イベント クリック
  # -----------------------------------
  _eClick: =>
    
    if @onClick? then @onClick();
  
  
  
  # -----------------------------------------------
  # ライン設定
  # -----------------------------------------------
  setLine: (lineW, lineH, lineMargin, lineColor) =>
    
    lineW      = lineW || 20;
    lineH      = lineH || 2;
    lineMargin = lineMargin || 5;
    lineColor  = lineColor || "#000000";
    
    @_lineTop.bgColor(lineColor);
    @_lineCenter.bgColor(lineColor);
    @_lineBtm.bgColor(lineColor);
    
    @_lineBox = new Rect(
      ~~(@width() * 0.5 - lineW * 0.5),
      ~~(@height() * 0.5 - (lineH * 3 + lineMargin * 2) * 0.5),
      lineW,
      lineH * 3 + lineMargin * 2
    );
    
    @_lineTop.xy(@_lineBox.x, @_lineBox.y);
    @_lineTop.size(lineW, lineH);
    @_lineTop.render();
    
    @_lineCenter.xy(@_lineTop.x(), @_lineTop.bottom() + lineMargin);
    @_lineCenter.size(lineW, lineH);
    @_lineCenter.render();
    
    @_lineBtm.xy(@_lineTop.x(), @_lineCenter.bottom() + lineMargin);
    @_lineBtm.size(lineW, lineH);
    @_lineBtm.render();
  
  
  
  # -----------------------------------------------
  # ばつにする
  # -----------------------------------------------
  setClose: =>
    
    @_lineTop.rotate(0, 0, 90);
    @_lineTop.translate(1, @_lineBox.h * 0.5);
    @_lineTop.render();
    
    @_lineBtm.visible(false);
    @_lineBtm.render();
    
    @rotate(0, 0, 45);
    @render();
  
  
  
  # -----------------------------------------------
  # 通常にする
  # -----------------------------------------------
  setNormal: =>
    
    @_lineTop.rotate(0, 0, 0);
    @_lineTop.translate(0, 0);
    @_lineTop.render();
    
    @_lineBtm.visible(true);
    @_lineBtm.render();
    
    @rotate(0, 0, 0);
    @render();
  
  
  
  # -----------------------------------
  # update
  # -----------------------------------
  _update: =>
    
    super();
    
  
  
  
  # -----------------------------------------------
  # 破棄
  # -----------------------------------------------
  dispose: =>
    
    
    super();













module.exports = HbBtn;