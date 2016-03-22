MyDisplay     = require('../base/MyDisplay');
Btn           = require('./Btn');
ResponsiveImg = require('./ResponsiveImg');


# ---------------------------------------------------
# 共通簡易ボタン
# ---------------------------------------------------
class SimpleBtn extends MyDisplay
  
  
  # -----------------------------------------------
  # コンストラクタ
  # -----------------------------------------------
  constructor: (imgs) ->
    
    super({
      update:false
    });
    
    # 画像情報
    @_imgs = imgs;
    
    # ボタン画像
    @_btnImg;
    
    # ボタン領域
    @_btn;
    
    @type = 0;
    
    # コールバック クリック
    @onClick;
  
  
  
  # -----------------------------------------------
  # 初期化
  # -----------------------------------------------
  init: =>
    
    super();
    
    # ボタン画像
    @_btnImg = new ResponsiveImg(@_imgs);
    @_btnImg.init();
    @add(@_btnImg);
    
    # ボタン領域
    @_btn = @_makeBtn(null, @_eClick, @_eRollOver, @_eRollOut);
    @add(@_btn);
    
    @_resize();
  
  
  
  # -----------------------------------------------
  # イベント クリック
  # -----------------------------------------------
  _eClick: =>
    
    if @onClick? then @onClick();
  
  
  
  # -----------------------------------------------
  # イベント ロールオーバー
  # -----------------------------------------------
  _eRollOver: =>
    
    if @type == 0
      @brightness(90);
    else
      @_btnImg.opacity(0.5);
      @_btnImg.render();
    @render();
  
  
  
  # -----------------------------------------------
  # イベント ロールアウト
  # -----------------------------------------------
  _eRollOut: =>
    
    if @type == 0
      @brightness(1);
    else
      @_btnImg.opacity(1);
      @_btnImg.render();
    @render();
  
  
  
  # -----------------------------------
  # resize
  # -----------------------------------
  _resize: (w, h) =>
    
    super(w, h);
    
    @_btnImg.update();
    @_btn.size(@_btnImg.width(), @_btnImg.height());
    @_btn.render();
    
    @size(@_btn.width(), @_btn.height());
    @render();

















module.exports = SimpleBtn;