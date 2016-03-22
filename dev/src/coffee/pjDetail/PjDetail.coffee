MyDisplay     = require('../base/MyDisplay');
PjDetailParts = require('./PjDetailParts');


# ---------------------------------------------------
# プロジェクト詳細
# ---------------------------------------------------
class PjDetail extends MyDisplay
  
  
  # -----------------------------------------------
  # コンストラクタ
  # -----------------------------------------------
  constructor: ->
    
    super({
      id:"xPjDetail"
    });
    
    # パーツ
    @_parts = [];
    
    # 表示するパーツID
    @_nowPartsId = -1;
    
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
      parts = new PjDetailParts(i, "xPjDetailParts" + String(id));
      parts.init();
      parts.hide(false);
      @_parts.push(parts);
      i++;
    
    @_makeAnimation(1);
    
    @hide(false);
    @_resize();
  
  
  
  # -----------------------------------
  # 次に表示するパーツIDを取得
  # -----------------------------------
  getNextId: =>
    
    next = @_nowPartsId + 1;
    if next >= @_parts.length
      next = 0;
    return next;
  
  
  
  # -----------------------------------
  # 表示するパーツのIDを設定
  # -----------------------------------
  setPartsId: (partsId) =>
  
    @_nowPartsId = partsId;
  
  
  
  # -----------------------------------
  # 隠す
  # -----------------------------------
  hide: (isAnimate, delay) =>
    
    if !isAnimate? then isAnimate = true;
    delay = delay || 0;
    
    if @_lo == MY.conf.LO_1
      isAnimate = false;
    
    @_isShow = false;
    
    # 写真のオフセット値を初期値に
    MY.c.getObj(MY.conf.P_PHOTO).setOffset(0, 0);
    
    a = @_anm[0];
    a.set({
      y:{from:0, to:MY.conf.PJDETAIL_OFFSET_Y[@_lo]},
      opacity:{from:1, to:1},
      ease:"outExpo",
      delay:delay,
      frame:60,
      onComplete: =>
        @visible(false);
        @render();
    });
    a.start();
    
    # ようつべ止める
    for val,i in @_parts
      if @_nowPartsId != i
        val.stopMovie();
    
    if !isAnimate then a.finish();
    @_update();
  
  
  
  # -----------------------------------
  # 表示
  # -----------------------------------
  show: (isAnimate, delay) =>
    
    if !isAnimate? then isAnimate = true;
    delay = delay || 0;
    
    if MY.u.isSmt()
      delay += 60;
    
    @_isShow = true;
    
    @visible(true);
    @render();
    
    a = @_anm[0];
    a.set({
      y:{from:MY.conf.PJDETAIL_OFFSET_Y[@_lo], to:0},
      opacity:{from:1, to:1},
      ease:"outExpo",
      delay:delay,
      frame:60,
      onComplete: =>
        for val,i in @_parts
          if @_nowPartsId == i
            val.remakeMovie();
    });
    a.start();
    
    if !isAnimate
      a.finish();
    
    for val,i in @_parts
      if @_nowPartsId == i
        val.show();
      else
        val.hide();
    
    @_update();
  
  
  
  # -----------------------------------
  # resize
  # -----------------------------------
  _resize: (w, h) =>
    
    super(w, h);
    
    for val,i in @_parts
      val.resize(@_sw, @_sh);
    
    @width(@_sw);
    @y(@_sh - MY.conf.PJDETAIL_OFFSET_Y[@_lo]);
    @render();
  
  
  
  # -----------------------------------
  # update
  # -----------------------------------
  _update: =>
    
    super();
    
    a = @_anm[0];
    @opacity(a.get("opacity"));
    @translate(0, a.get("y"));
    @render();
    
    # スクロール位置に合わせて背景の写真を移動
    if @_isShow && @_lo == MY.conf.LO_0
      s = $(window).scrollTop();
      MY.c.getObj(MY.conf.P_PHOTO).setOffset(
        0, 
        MY.u.map(s, 0, -(@_sh + MY.conf.HEADER_HEIGHT[@_lo]), 0, @_parts[@_nowPartsId].height() * 0.1)
      );
      
    























module.exports = PjDetail;