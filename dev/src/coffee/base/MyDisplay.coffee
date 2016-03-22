DisplayTransform  = require('../libs/display/DisplayTransform');
Animation         = require('../libs/animation/Animation');
ResponsiveDisplay = require('../parts/ResponsiveDisplay');
Btn               = require('../parts/Btn');


# ---------------------------------------------------
# プロジェクト専用Displayクラス
# ---------------------------------------------------
class MyDisplay extends DisplayTransform
  
  
  # -----------------------------------------------
  # コンストラクタ
  # -----------------------------------------------
  constructor: (option) ->
    
    super(option);
    
    # ステージサイズ
    @_sw = 0;
    @_sh = 0;
    
    # レイアウトタイプ
    @_lo = -1;
    
    # アニメーションオブジェクト
    @_anm = [];
   
  
  
  # -----------------------------------------------
  # 初期化
  # -----------------------------------------------
  init: =>
    
    super();
    
    @elm().removeClass("hide");
    
    if (@_option.resize? && @_option.resize) || !@_option.resize?
      MY.resize.add(@_resize);
    
    if (@_option.update? && @_option.update) || !@_option.update?
      MY.update.add(@_update);
  
  
  
  # -----------------------------------------------
  # 破棄
  # -----------------------------------------------
  dispose: =>
    
    MY.resize.remove(@_resize);
    MY.update.remove(@_update);
    
    if @_anm?
      for val,i in @_anm
        val.dispose();
      @_anm = null;
    
    super();
  
  
  
  # -----------------------------------------------
  # アニメーションオブジェクトの作成
  # -----------------------------------------------
  _makeAnimation: (num) =>
    
    i = 0;
    while i < num
      @_anm.push(new Animation());
      i++;
  
  
  
  # -----------------------------------------------
  # displayオブジェクト作成
  # -----------------------------------------------
  _makeDisplay: (id) =>
    
    d = new DisplayTransform({
      id:id
    });
    d.init();
    
    return d;
  
  
  
  # -----------------------------------------------
  # ボタン作成
  # -----------------------------------------------
  _makeBtn: (id, onClick, onOver, onOut) =>
    
    btn = new Btn({
      id:id
    });
    btn.init();
    btn.onClick    = onClick;
    btn.onRollOver = onOver;
    btn.onRollOut  = onOut;
    
    return btn;
  
  
  
  # -----------------------------------------------
  # ライン用Displayオブジェクト作成
  # -----------------------------------------------
  _makeLine: (id, color) =>
    
    d = @_makeDisplay(id);
    d.bgColor(color);
    
    return d;
  
  
  
  # -----------------------------------------------
  # ResponsiveDisplayオブジェクト作成
  # -----------------------------------------------
  _makeResponsiveDisplay: (id, classList) =>
    
    d = new ResponsiveDisplay(classList, {
      id:id
    });
    d.init();
    
    return d;
  
  
  
  
  
  
  
  # -----------------------------------------------
  # 更新
  # -----------------------------------------------
  _update: =>
    
    if @_anm?
      for val,i in @_anm
        val.update();
  
  
  
  # -----------------------------------------------
  # リサイズ
  # -----------------------------------------------
  _resize: (w, h) =>
    
    # ステージサイズ
    @_sw = w || MY.resize.sw();
    @_sh = h || MY.resize.sh();
    
    # レイアウトタイプ
    @_lo = MY.f.getLOType();










module.exports = MyDisplay;