MyDisplay  = require('../base/MyDisplay');
AniParam   = require('../base/AniParam');
PhotoParts = require('./PhotoParts');
EffectBar  = require('../parts/EffectBar');


# ---------------------------------------------------
# 写真
# ---------------------------------------------------
class Photo extends MyDisplay
  
  
  # -----------------------------------------------
  # コンストラクタ
  # -----------------------------------------------
  constructor: ->
    
    super({
      id:"xPhoto"
    });
    
    # タイプ
    # -1..最初 0..トップ 1..一覧 2..詳細
    @_type = -1;
    
    # 選択されてる画像ID
    @_selectId = 0;
    
    # 表示フラグ
    @_isShow = false;
    
    # パーツ
    @_partsCon;
    @_parts = [];
    
    # 演出バー
    @_effectBar;
    
    # スクロールオフセット用
    @_offset = new AniParam();
  
  
  
  # -----------------------------------------------
  # 初期化
  # -----------------------------------------------
  init: =>
    
    super();
    
    @ap.tEaseE = MY.conf.EASE_PHOTO;
    
    # パーツ作成
    @_partsCon = @_makeDisplay();
    @add(@_partsCon);
    i = 0;
    while i < MY.f.getConNum()
      parts = new PhotoParts(i);
      parts.init();
      @_partsCon.unshift(parts);
      @_parts.push(parts);
      i++;
    
    # 演出バー
    @_effectBar = new EffectBar(null, MY.conf.EFFECT_BAR_COLOR_1);
    @_effectBar.init();
    @add(@_effectBar);
    @_effectBar.opacity(1);
    
    @_resize();
    @hide(false);
  
  
  
  # -----------------------------------------------
  # TOP 先頭の画像を変更
  # -----------------------------------------------
  changeTopImg: (imgId, isAnimate) =>
    
    if !isAnimate? then isAnimate = true;
    @_parts[0].changeTopImg(imgId, isAnimate);
  
  
  
  # -----------------------------------------------
  # 画像選択
  # -----------------------------------------------
  selectImg: (imgId) =>
    
    @_selectId = imgId;
  
  
  
  # -----------------------------------
  # パーツの位置設定
  # -----------------------------------
  _setPartsPosition: (isResize) =>
    
    if !isResize? then isResize = false;
    
    for val,i in @_parts
      if isResize then val._resize();
      val.xy(0, (MY.conf.PJ_TOP_IMG_HEIGHT[@_lo] + MY.conf.PJ_TOP_IMG_MARGIN[@_lo]) * i);
      val.render();
  
  
  
  # -----------------------------------
  # タイプ変更
  # -----------------------------------
  setType: (type, isAnimate) =>
    
    if !isAnimate? then isAnimate = true;
    @_type = type;
    
    # 強制表示
    if !@_isShow
      @show(false);
    
    # パーツ位置
    @_setPartsPosition();
    
    for val,i in @_parts
      
      # パーツのタイプ設定
      val.setType(@_type, isAnimate);
      
      switch @_type
        when MY.conf.TYPE_PHOTO_TOP
          if i == 0
            # 先頭にして表示
            val.changeTopImg(0, isAnimate);
            val.show(60, isAnimate);
            
            # 位置とスケール戻す
            @_resetParts(val, isAnimate);
          else
            val.hide(0, isAnimate);
        
        when MY.conf.TYPE_PHOTO_PROJECT_TOP
          # 各パーツの画像を設定して表示
          val.changeTopImg(i, isAnimate);
          if @_lo == MY.conf.LO_0
            val.show(60 + i * 30, isAnimate);
          else
            val.show(MY.conf.PARTS_SHOW_DELAY, isAnimate);
          
          # 位置とスケール戻す
          if i == 0 then @_resetParts(val, isAnimate);
        
        when MY.conf.TYPE_PHOTO_PROJECT_DETAIL
          # 選択された画像を先頭にして表示
          if i == 0
            val.changeTopImg(@_selectId, isAnimate, MY.f.getLOVal(0, 0));
            val.show(40, isAnimate);
            val.scaleAnimation(@_getPjDetailScale(), true, MY.conf.DETAIL_EXPAND_DELAY); # ヘッダー分拡大
            val.posYAnimation(-MY.conf.HEADER_HEIGHT[@_lo] * 0.5, true, MY.conf.DETAIL_EXPAND_DELAY); # ヘッダー分移動
          else
            val.hide(0, isAnimate);
    
    @_setEffectBar();
    @_setPosition();
    @_setArea();
    @_update();
  
  
  
  # -----------------------------------
  # パーツを詳細用に拡大
  # -----------------------------------
  setDetailParts: (isAnimate) =>
    
    if !isAnimate? then isAnimate = true;
    
    val = @_parts[0];
    val.scaleAnimation(@_getPjDetailScale(), isAnimate, MY.conf.DETAIL_EXPAND_DELAY);
    val.posYAnimation(-MY.conf.HEADER_HEIGHT[@_lo] * 0.5, isAnimate, MY.conf.DETAIL_EXPAND_DELAY);
  
  
  
  # -----------------------------------
  # パーツの位置とスケールを初期値に
  # -----------------------------------
  resetParts: (callBack) =>
    
    @_resetParts(@_parts[0], true, callBack);
  
  
  
  # -----------------------------------
  # パーツの位置とスケールを初期値に
  # -----------------------------------
  _resetParts: (val, isAnimate, callBack) =>
    
    if !isAnimate? then isAnimate = true;
    
    f = MY.conf.PHOTO_RESET_F;
    e = MY.conf.PHOTO_RESET_E;
    val.scaleAnimation(1, isAnimate, 0, f, e);
    val.posYAnimation(0, isAnimate, 0, f, e, callBack);
  
  
  
  # -----------------------------------
  # ヘッダー分補正する拡大率を算出
  # -----------------------------------
  _getPjDetailScale: =>
    
    nowH = @_sh - MY.conf.HEADER_HEIGHT[@_lo];
    tgH  = @_sh;
    
    return tgH / nowH;
  
  
  
  # -----------------------------------
  # 演出バーの設定変更
  # -----------------------------------
  _setEffectBar: =>
    
    w = 0;
    h = 0;
    x = 0;
    y = 0;
    switch @_type
      
      when MY.conf.TYPE_PHOTO_TOP
        w = @_sw - MY.conf.TOP_LEFT_IMG_MARGIN[@_lo];
        #w = @_sw;
        h = @_sh - MY.conf.HEADER_HEIGHT[@_lo];
        x = MY.conf.TOP_LEFT_IMG_MARGIN[@_lo];
        #x = 0;
        y = MY.conf.HEADER_HEIGHT[@_lo];
    
    @_effectBar.xy(x, y);
    @_effectBar.setBarSize(w, h);
  
  
  
  # -----------------------------------
  # 表示
  # -----------------------------------
  show: (isAnimate, delay) =>
    
    delay = delay || 0;
    if !isAnimate? then isAnimate = true;
    
    @_isShow = true;
    @visible(true);
    
    @ap.tx = 0;
    @ap.resetE().delay(delay);
    
    @_effectBar._offsetDelay = 0;
    @_effectBar.start(delay + 0, true);
    
    if !isAnimate then @ap.finish();
    @_update();
  
  
  
  # -----------------------------------
  # 消す
  # -----------------------------------
  hide: (isAnimate, delay) =>
    
    delay = delay || 0;
    if !isAnimate? then isAnimate = true;
    
    @_isShow = false;
    
    @ap.tx = -@_sw;
    @ap.resetE().delay(delay);
    
    @_effectBar.visible(false);
    @_effectBar.render();
    
    if !isAnimate then @ap.finish();
    @_update();
  
  
  
  # -----------------------------------
  # position設定
  # -----------------------------------
  _setPosition: =>
  
    # プロジェクト詳細 PC用の場合はposition:fixに
    if @_type == MY.conf.TYPE_PHOTO_PROJECT_DETAIL && @_lo == MY.conf.LO_0
      @css().position = "fixed";
    else
      @css().position = "absolute";
  
  
  
  # -----------------------------------
  # resize
  # -----------------------------------
  _resize: (w, h) =>
    
    super(w, h);
    
    # パーツ位置
    @_setPartsPosition(true);
    
    @_partsCon.ap.update();
    @_partsCon.translate(0, MY.conf.HEADER_HEIGHT[@_lo]);
    @_partsCon.render();
    
    @_setPosition();
    @_setEffectBar();
    @_setArea();
    
    if @_type == MY.conf.TYPE_PHOTO_PROJECT_DETAIL
      parts = @_parts[0];
      parts.scaleAnimation(@_getPjDetailScale(), false, MY.conf.DETAIL_EXPAND_DELAY);
      parts.posYAnimation(-MY.conf.HEADER_HEIGHT[@_lo] * 0.5, false, MY.conf.DETAIL_EXPAND_DELAY);
  
  
  
  # -----------------------------------
  # 領域設定
  # -----------------------------------
  _setArea: =>
    
    switch @_type
      when MY.conf.TYPE_PHOTO_TOP
        @mask(true);
        @size(@_sw, @_sh);
        @render();
      
      when MY.conf.TYPE_PHOTO_PROJECT_TOP
        @mask(true);
        @size(@_sw, MY.conf.HEADER_HEIGHT[@_lo] + @_parts[@_parts.length - 1].y() + MY.conf.PJ_TOP_IMG_HEIGHT[@_lo]);
        @render();
      
      when MY.conf.TYPE_PHOTO_PROJECT_DETAIL
        @mask(true);
        @size(@_sw, @_sh);
        @render();
  
  
  
  # -----------------------------------
  # オフセット値設定
  # -----------------------------------
  setOffset: (x, y, isAnimate) =>
    
    if !isAnimate? then isAnimate = true;
    
    @_offset.tx = x;
    @_offset.ty = y;
    
    if !isAnimate
      @_offset.finish();
      @_update();
  
  
  
  # -----------------------------------
  # update
  # -----------------------------------
  _update: =>
    
    super();
    
    # オフセット
    # PC用 プロジェクト詳細時にスクロールに合わせてちょっとづつずらす
    @_offset.update();
    
    
    # 全体
    @ap.update();
    @translate(@ap.x, @ap.y + @_offset.y);
    
    if !@_isShow && @ap.isFinish()
      @visible(false);
    
    @render();
























module.exports = Photo;