MyDisplay  = require('../base/MyDisplay');
PjTopParts = require('./PjTopParts');
ToTopBtn   = require('../parts/ToTopBtn');


# ---------------------------------------------------
# トップ
# ---------------------------------------------------
class PjTop extends MyDisplay
  
  
  # -----------------------------------------------
  # コンストラクタ
  # -----------------------------------------------
  constructor: ->
    
    super({
      id:"xPjTop"
    });
    
    # パーツ
    @_parts = [];
    
    # 一番上に戻るボタン
    @_topBtn;
    
    # 表示フラグ
    @_isShow = false;
  
  
  
  # -----------------------------------------------
  # 初期化
  # -----------------------------------------------
  init: =>
    
    super();
    
    # パーツ作成
    num = MY.f.getConNum();
    i = 0;
    while i < num
      # idは0が最新になるように調整
      id = (num - 1) - i;
      parts = new PjTopParts(i, "xPjTopParts" + String(id));
      parts.init();
      parts.hide(false);
      @_parts.push(parts);
      i++;
    
    # 一番上に戻るボタン
    @_topBtn = new ToTopBtn();
    @_topBtn.init();
    @add(@_topBtn);
    
    @_resize();
    @hide(false);
  
  
  
  # -----------------------------------
  # 隠す
  # -----------------------------------
  hide: (isAnimate, delay) =>
    
    for val,i in @_parts
      val.hide(isAnimate, delay);
    
    @_isShow = false;
    
    @_topBtn.visible(false);
    @_topBtn.render();
    
    @_resize();
  
  
  
  # -----------------------------------
  # 表示
  # -----------------------------------
  show: (isAnimate, delay) =>
    
    for val,i in @_parts
      val.show(isAnimate, delay);
    
    @_isShow = true;
    
    @_topBtn.visible(true);
    @_topBtn.render();
    
    @_resize();
  
  
  
  # -----------------------------------
  # resize
  # -----------------------------------
  _resize: (w, h) =>
    
    super(w, h);
    
    # パーツの位置はこっちで
    for val,i in @_parts
      val.resize(@_sw, @_sh);
      val.xy(
        MY.conf.PJ_TOP_LEFT_IMG_MARGIN[@_lo] - 1, 
        MY.conf.HEADER_HEIGHT[@_lo] + (MY.conf.PJ_TOP_IMG_HEIGHT[@_lo] + MY.conf.PJ_TOP_IMG_MARGIN[@_lo]) * i
      );
      val.render();
    
    @_topBtn._resize();
    @_topBtn.xy(~~(@_sw * 0.5 - @_topBtn.width() * 0.5), MY.conf.HEADER_HEIGHT[@_lo] + (MY.conf.PJ_TOP_IMG_HEIGHT[@_lo] + MY.conf.PJ_TOP_IMG_MARGIN[@_lo]) * @_parts.length + MY.f.getLOVal(10, -10));
    @_topBtn.render();
    
    @width(1);
    if @_isShow
      @height(@_topBtn.bottom() + MY.f.getLOVal(60, 30));
    else
      @height("auto");
    @render();

  
  
  
  # -----------------------------------
  # update
  # -----------------------------------
  _update: =>
    
    super();























module.exports = PjTop;