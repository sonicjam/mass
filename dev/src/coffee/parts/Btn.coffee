DisplayTransform = require('../libs/display/DisplayTransform');


# ---------------------------------------------------
# ボタン
# ---------------------------------------------------
class Btn extends DisplayTransform
  
  
  # -----------------------------------------------
  # コンストラクタ
  # -----------------------------------------------
  constructor: (option) ->
    
    super(option);
    
    
    # コールバック ロールオーバー
    @onRollOver;
    
    # コールバック ロールアウト
    @onRollOut;
    
    # コールバック クリック
    @onClick;
    
    @_cnt = 0;
    @_tapCnt = 5;
    @_isTouchStart = false;
  
  
  
  # -----------------------------------------------
  # 初期化
  # -----------------------------------------------
  init: =>
    
    super();
    
    @bgColor("#FF0000");
    @opacity(0);
    
    if MY.u.isSmt()
#       @elm().on("touchstart", @_eTouchStart).on("touchend", @_eClick);
      @elm().on("click", @_eClick);
      #MY.update.add(@_update);
    else
      @elm().on("mouseover", @_eRollOver).on("mouseout", @_eRollOut).on("click", @_eClick);
  
  
  
  # -----------------------------------------------
  # 破棄
  # -----------------------------------------------
  dispose: =>
    
    @onRollOver = null;
    @onRollOut  = null;
    @onClick    = null;
    
    super();
  
  
  
  # -----------------------------------------------
  # 更新
  # -----------------------------------------------
  _update: =>
    
    if @_isTouchStart
      @_cnt++;
  
  
  
  # -----------------------------------------------
  # イベント タッチスタート
  # -----------------------------------------------
  _eTouchStart: (e) =>
    
    @_cnt = 0;
    @_isTouchStart = true;
  
  
  
  # -----------------------------------------------
  # イベント ロールオーバー
  # -----------------------------------------------
  _eRollOver: (e) =>
    
    MY.u.buttonMode(true);
    
    if @onRollOver?
      @onRollOver();
  
  
  
  # -----------------------------------------------
  # イベント ロールアウト
  # -----------------------------------------------
  _eRollOut: (e) =>
    
    MY.u.buttonMode(false);
    
    if @onRollOut?
      @onRollOut();
  
  
  
  # -----------------------------------------------
  # イベント クリック
  # -----------------------------------------------
  _eClick: (e) =>
    
    MY.u.buttonMode(false);
    if @onClick? then @onClick();
#     if MY.u.isSmt()
#       @_isTouchStart = false;
#       if @_cnt < @_tapCnt
#         if @onClick? then @onClick();
#     else
#       if @onClick? then @onClick();






module.exports = Btn;