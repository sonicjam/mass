MyDisplay  = require('../base/MyDisplay');
DisplayImg = require('../libs/display/DisplayImg');
TopParts   = require('./TopParts');
TopIndi    = require('./TopIndi');


# ---------------------------------------------------
# トップ
# ---------------------------------------------------
class Top extends MyDisplay
  
  
  # -----------------------------------------------
  # コンストラクタ
  # -----------------------------------------------
  constructor: ->
    
    super({
      id:"xTop"
    });
    
    # パーツ
    @_parts = [];
    @_topPartsId = 0;
    
    # インジケーター
    @_indi;
    
    # コピーライト
    @_copy;
    
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
      parts = new TopParts(i, "xTopParts" + String(id));
      parts.init();
      @_parts.push(parts);
      i++;
    
    # インジケーター
    @_indi = new TopIndi();
    @_indi.init();
    @add(@_indi);
    @_indi.onClick = @_eClickIndi;
    
    # コピーライト
    $("#xTopCopyright").html("");
    @_copy = new DisplayImg({
      src:MY.conf.IMG_PATH + "/parts/copyright.png",
      id:"xTopCopyright"
    });
    @_copy.onLoad = @_resize;
    @_copy.init();
    
    @_resize();
    @hide(false);
  
  
  
  # -----------------------------------
  # イベント インジケータークリック
  # -----------------------------------
  _eClickIndi: (id) =>
    
    MY.c.getObj(MY.conf.P_PHOTO).changeTopImg(id);
  
  
  
  # -----------------------------------
  # 表示するID
  # -----------------------------------
  setTopId: (topId) =>
    
    @_topPartsId = topId;
    @_indi.setActive(@_topPartsId);
  
  
  
  # -----------------------------------
  # 隠す
  # -----------------------------------
  hide: (isAnimate, delay) =>
    
    if !isAnimate? then isAnimate = true;
    delay = delay || 0;
    
    @_isShow = false;
    
    for val,i in @_parts
      val.hide(isAnimate, delay);
    
    # コピーライト
    @_copy.ap.tx = -30;
    @_copy.ap.delay(delay + 0).resetE();
    if !isAnimate
      @_copy.ap.finish();
    
    # インジケーター
    @_indi.visible(false);
    @_indi.render();
    
    @_update();
  
  
  
  # -----------------------------------
  # 表示
  # -----------------------------------
  show: (isAnimate, delay) =>
    
    if !isAnimate? then isAnimate = true;
    delay = delay || 0;
    
    @_isShow = true;
    
    for val,i in @_parts
      if i == @_topPartsId
        val.show(isAnimate, delay);
      else
        val.hide(false);
    @_resize();
    
    # コピーライト
    @_copy.ap.tx = 0;
    @_copy.ap.delay(delay + 40).resetE();
    if !isAnimate
      @_copy.ap.finish();
    
    # インジケーター
    @_indi.visible(true);
    @_indi.render();
    @_indi.setActive(@_topPartsId);
    
    @_update();
  
  
  
  # -----------------------------------
  # 先頭切り替え
  # -----------------------------------
  setTopParts: (partsId, isAnimate) =>
    
    if !isAnimate?
      isAnimate = true;
    
    if @_parts[partsId]?
      @_parts[partsId].readyPartsChange();
      
    for val,i in @_parts
      if partsId == i
        val.show(isAnimate, 30);
      else
        val.hide(isAnimate, 0);
    
    @_topPartsId = partsId;
    
    # インジケーター
    @_indi.setActive(@_topPartsId);
    
    @_resize();
  
  
  
  # -----------------------------------
  # resize
  # -----------------------------------
  _resize: (w, h) =>
    
    super(w, h);
    
    # テキスト
    partsBtmMargin = if @_sh > 900 then 100 else 60;
    maxTextY = MY.conf.HEADER_HEIGHT[@_lo] + 20;
    for val,i in @_parts
      if val?
        val.resize(@_sw, @_sh);
        val.xy(
          MY.f.getLOVal(80, 18), 
          Math.max(maxTextY, @_sh - val.height() - MY.f.getLOVal(partsBtmMargin, 0))
        );
        val.render();
    
    if @_lo == MY.conf.LO_1
      for val,i in @_parts
        val.setOffset(0, false);
    
    # インジケーター
    @_indi.resize(@_sw, @_sh);
    @_indi.xy(
      MY.f.getLOVal(@_sw - @_indi.width() - 30, @_sw - @_indi.width() - 15),
      MY.f.getLOVal(~~(MY.conf.HEADER_HEIGHT[@_lo] + (@_sh - MY.conf.HEADER_HEIGHT[@_lo]) * 0.5 - @_indi.height() * 0.5), @_sh - @_indi.height() - 15)
    );
    @_indi.render();
    
    # コピーライト PCのみ
    if @_isShow
      @_copy.visible((@_lo == MY.conf.LO_0));
      @_copy.xy(20, @_parts[@_topPartsId].y() + @_parts[@_topPartsId].getTtlY() + 13);
      @_copy.render();
    
    @size(1, 1);
    @render();
  
  
  
  # -----------------------------------
  # update
  # -----------------------------------
  _update: =>
    
    super();
    
    # コピーライト
    @_copy.ap.update();
    @_copy.translate(@_copy.ap.x, @_copy.ap.y);
    @_copy.render();
    if !@_isShow && @_copy.ap.isFinish()
      @_copy.visible(false);
      @_copy.render();























module.exports = Top;