MyDisplay    = require('../base/MyDisplay');
TopIndiParts = require('./TopIndiParts');


# ---------------------------------------------------
# トップ / インジケーター
# ---------------------------------------------------
class TopIndi extends MyDisplay
  
  
  # -----------------------------------------------
  # コンストラクタ
  # -----------------------------------------------
  constructor: () ->
    
    super();
    
    # ボタン
    @_btns = [];
    
    # コールバック クリック
    @onClick;
  
  
  
  # -----------------------------------------------
  # 初期化
  # -----------------------------------------------
  init: =>
    
    super();
    
    # ボタン作成
    i = 0;
    num = MY.f.getConNum();
    while i < num
      btn = new TopIndiParts(i);
      btn.init();
      @add(btn);
      btn.onClick = @_eClick;
      @_btns.push(btn);
      i++;
    
    @resize();
  
  
  
  # -----------------------------------------------
  # イベント クリック
  # -----------------------------------------------
  _eClick: (partsId) =>
    
    if @onClick? then @onClick(partsId);
  
  
  
  # -----------------------------------------------
  # アクティブ設定
  # -----------------------------------------------
  setActive: (partsId) =>
    
    for val,i in @_btns
      val.setActive((i == partsId));
  
  
  
  # -----------------------------------
  # resize
  # -----------------------------------
  resize: (w, h) =>
    
    @_resize(w, h);
    
    for val,i in @_btns
      val.resize();
      
      if @_lo == MY.conf.LO_0
        val.xy(0, i * (val.height() + 15));
        val.render();
      else
        val.xy(i * (val.width() + 10), 0);
        val.render();
    
    if @_lo == MY.conf.LO_0
      @size(val.width(), @_btns[@_btns.length-1].bottom());
    else
      @size(@_btns[@_btns.length-1].right(), val.height());
      
    @render();
  
  
  
  # -----------------------------------
  # update
  # -----------------------------------
  _update: =>
    
    super();






module.exports = TopIndi;