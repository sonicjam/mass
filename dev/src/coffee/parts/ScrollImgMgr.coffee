Animation = require('../libs/animation/Animation');


# ---------------------------------------------------
# スクロールに合わせて表示する画像管理
# ---------------------------------------------------
class ScrollImgMgr
  
  
  # -----------------------------------------------
  # コンストラクタ
  # -----------------------------------------------
  constructor: (tg) ->
    
    # 管理対象
    @_tg = tg;
    
    
    # 監視フラグ
    @_isMgr = false;
    
    @_triggerVal = 0;
    @_isShow = false;
    @_anm;
    
    @_init();
  
  
  
  # -----------------------------------------------
  # 初期化
  # -----------------------------------------------
  _init: =>
    
    @_anm = new Animation();
    MY.update.add(@_update);
  
  
  
  # -----------------------------------------------
  # 管理のON/OFF
  # -----------------------------------------------
  mgrScroll: (isMgr) =>
    
    @_isMgr = isMgr;
    
    if !@_isMgr
      @_tg.opacity(1);
      @_tg.translate(0, 0);
      @_tg.render();
  
  
  
  # -----------------------------------------------
  # リセット
  # -----------------------------------------------
  reset: =>
    
    @_isShow = false;
    @_anm.reset();
    @_update();
  
  
  
  # -----------------------------------------------
  # トリガーとなるスクロール値設定
  # -----------------------------------------------
  setTriggerVal: (val) =>
    
    @_triggerVal = val;
  
  
  
  # -----------------------------------------------
  # スクロール位置更新
  # -----------------------------------------------
  updateScroll: (top) =>
    
    if @_isMgr && top >= @_triggerVal && !@_isShow
      # アニメーション開始
      @_isShow = true;
      @_anm.set({
        y:{from:30, to:0},
        opacity:{from:0, to:1},
        frame:20,
        ease:"inOutQuad"
      });
      @_anm.start();
      @_update();
  
  
  
  # -----------------------------------------------
  # 更新
  # -----------------------------------------------
  _update: =>
    
    if !@_isMgr then return;
    
    @_anm.update();
    @_tg.opacity(@_anm.get("opacity"));
    @_tg.translate(0, @_anm.get("y"));
    @_tg.render();



















module.exports = ScrollImgMgr;