DisplayTransform = require('../libs/display/DisplayTransform');


# ---------------------------------------------------
# レスポンシブ用Displayオブジェクト
# レイアウトによって指定されたClassを差し替え
# ---------------------------------------------------
class ResponsiveDisplay extends DisplayTransform
  
  
  # -----------------------------------------------
  # コンストラクタ
  # @classList : 適応classリスト
  # -----------------------------------------------
  constructor: (classList, option) ->
    
    super(option);
    
    @_classList = classList;
  
  
  
  # -----------------------------------------------
  # 初期化
  # -----------------------------------------------
  init: =>
    
    super();
  
  
  
  
  
  
  # -----------------------------------------------
  # レイアウトタイプに合わせて更新
  # -----------------------------------------------
  update: =>
    
    type = MY.f.getLOType();
    
    for val,i in @_classList
      if val?
        @elm().removeClass(val);
    
    @elm().addClass(@_classList[type]);
    @text();






module.exports = ResponsiveDisplay;