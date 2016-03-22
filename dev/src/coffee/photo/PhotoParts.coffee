MyDisplay = require('../base/MyDisplay');
AniParam  = require('../base/AniParam');
PhotoImg  = require('./PhotoImg');


# ---------------------------------------------------
# 写真 / パーツ
# ---------------------------------------------------
class PhotoParts extends MyDisplay
  
  
  # -----------------------------------------------
  # コンストラクタ
  # -----------------------------------------------
  constructor: (key) ->
    
    super();
    
    # タイプ
    # -1..最初 0..トップ 1..一覧 2..詳細
    @_type = -1;
    
    # 並び順
    @_key = key;
    
    # 先頭画像
    @_topImgId = 0;
    
    # 画像コンテナ
    @_imgCon;
    
    # 画像
    @_imgs = [];
    
    # 左端
    @_left;
    
    # PJ用黒カバー
    @_hoverCover;
    
    # ボタン
    @_btn;
    
    # 現在のスライド移動量
    @_nowSlideDist = 0;
    
    # 全体サイズ用
    @_sizeAP = new AniParam();
    
    # 全体位置用
    @_posAP = new AniParam();
    
    @_isShow = false;
  
  
  
  # -----------------------------------------------
  # 初期化
  # -----------------------------------------------
  init: =>
    
    super();
    
    # 画像コンテナ
    @_imgCon = @_makeDisplay();
    @add(@_imgCon);
    
    # 画像
    i = 0;
    num = MY.f.getConNum();
    while i < num
      img = new PhotoImg(num - (1 + i));
      img.init();
      @_imgCon.add(img);
      @_imgs.push(img);
      img.ap.tEaseE = MY.conf.EASE_PHOTO;
      i++;
    
    # PJ用黒カバー
    @_hoverCover = @_makeDisplay();
    @add(@_hoverCover);
    @_hoverCover.bgColor("#000");
    
    # 左端
    @_left = @_makeDisplay();
    @add(@_left);
    @_left.bgColor("#FFFFFF");
    
    # ボタン
    @_btn = @_makeBtn(null, @_eClickAll, @_eRollOverAll, @_eRollOutAll);
    @add(@_btn);
    
    # アニメオブジェクト作成
    # 0..全体スケール
    # 1..全体位置
    # 2..PJhover用
    @_makeAnimation(3);
    
    @hide(0, false);
    @mask(true);
    @_resize();
  
  
  
  # -----------------------------------
  # イベント 全体クリック
  # -----------------------------------
  _eClickAll: =>
    
    if !@_isButton() then return;
      
    if @_type == MY.conf.TYPE_PHOTO_PROJECT_TOP
    
      # 一番上までスクロールして詳細へ
      MY.scroller.scroll(0, 0, =>
        MY.c.setPjDetail(@_key, true);
      );
    
    if @_type == MY.conf.TYPE_PHOTO_TOP
      MY.c.setPjDetail(@_topImgId, true);
  
  
  
  # -----------------------------------
  # イベント 全体ロールオーバー
  # -----------------------------------
  _eRollOverAll: =>
    
    # PJTOPのみ
    if @_type != MY.conf.TYPE_PHOTO_PROJECT_TOP || !@_isButton()
      return;
    
    s = 0.975;
    
    # ちょっと縮小
    @scaleAnimation(s, true, 0, 60, "outExpo");
    
    # 黒カバー
    a = @_anm[2];
    a.set({
      opacity:{from:0, to:0.05},
      frame:10,
      ease:"outExpo"
    });
    a.start();
    @_update();
  
  
  
  # -----------------------------------
  # イベント 全体ロールアウト
  # -----------------------------------
  _eRollOutAll: =>
    
    # PJTOPのみ
    if @_type != MY.conf.TYPE_PHOTO_PROJECT_TOP || !@_isButton()
      return;
    
    # 戻す
    @scaleAnimation(1, true, 0, 20, "outQuad");
    
    # 黒カバー消す
    a = @_anm[2];
    a.set({
      opacity:{from:0.05, to:0},
      frame:10,
      ease:"outExpo"
    });
    a.start();
    @_update();
  
  
  
  # -----------------------------------
  # ボタンとして機能させるかどうか
  # -----------------------------------
  _isButton: =>
    
    if !@_sizeAP.isFinish() || !@_posAP.isFinish()
      return false;
    else
      return true;
  
  
  
  # -----------------------------------
  # スケールのアニメーション
  # -----------------------------------
  scaleAnimation: (scale, isAnimate, delay, frame, ease) =>
    
    if !isAnimate? then isAnimate = true;
    delay = delay || 0;
    frame = frame || MY.conf.DETAIL_EXPAND_FRAME;
    ease = ease || MY.conf.DETAIL_EXPAND_EASE;
    
    a = @_anm[0];
    nowScale = a.get("scale");
    if nowScale == 0 then nowScale = 1;
    a.set({
      scale:{from:nowScale, to:scale},
      frame:frame,
      ease:ease,
      delay:delay
    });
    a.start();
    
    if !isAnimate then a.finish();
    @_update();
  
  
  
  # -----------------------------------
  # Y位置のアニメーション
  # -----------------------------------
  posYAnimation: (y, isAnimate, delay, frame, ease, callBack) =>
    
    if !isAnimate? then isAnimate = true;
    delay = delay || 0;
    frame = frame || MY.conf.DETAIL_EXPAND_FRAME;
    ease = ease || MY.conf.DETAIL_EXPAND_EASE;
    
    a = @_anm[1];
    nowY = a.get("y");
    a.set({
      y:{from:nowY, to:y},
      frame:frame,
      ease:ease,
      delay:delay,
      onComplete:callBack
    });
    a.start();
    
    if nowY == y
      a.finish();
    
    if !isAnimate then a.finish();
    @_update();
  
  
  
  # -----------------------------------
  # 表示
  # -----------------------------------
  show: (delay, isAnimate) =>
    
    delay = delay || 0;
    if !isAnimate? then isAnimate = true;
    
    @_isShow = true;
    @visible(true);
    
    @_setPartsHeight();
    
    @_sizeAP.tx = @_sw;
    @_sizeAP.delay(delay).resetE();
    
    if @_lo == MY.conf.LO_1
      @_sizeAP.finish();
    
    @_posAP.tx = 0;
    @_posAP.delay(delay).resetE();
    
    if !isAnimate
      @_sizeAP.finish();
      @_posAP.finish();
    
    @_update();
  
  
  
  # -----------------------------------
  # 消す
  # -----------------------------------
  hide: (delay, isAnimate) =>
    
    delay = delay || 0;
    if !isAnimate? then isAnimate = true;
    
    @_isShow = false;
    
    @_sizeAP.tx = 0;
    @_sizeAP.delay(delay).resetE();
    
    if @_lo == MY.conf.LO_1
      @_sizeAP.finish();
    
    @_posAP.tx = @_sw;
    @_posAP.delay(delay).resetE();
    
    if !isAnimate
      @_sizeAP.finish();
      @_posAP.finish();
    
    @_update();
  
  
  
  # -----------------------------------
  # タイプ変更
  # -----------------------------------
  setType: (type, isAnimate) =>
    
    if !isAnimate? then isAnimate = true;
    @_type = type;
    
    # 全体の高さ
    @_setPartsHeight();
    
    # 左端
    @_setLeftParts();
    
    # アニメーション
    if isAnimate
      @_imgCon.ap.resetE();
      @_left.ap.resetE();
      @_sizeAP.resetE();
      @_posAP.resetE();
    else
      @_imgCon.ap.finish();
      @_left.ap.finish();
      @_sizeAP.finish();
      @_posAP.finish();
    
    # ボタン設定
    @_setBtnSize();
  
  
  
  # -----------------------------------
  # パーツの高さ設定
  # -----------------------------------
  _setPartsHeight: (delay) =>
    
    delay = delay || 0;
    
    # 全体の高さを変更
    @_sizeAP.tx = @_sw;
    maxH = @_sh - MY.conf.HEADER_HEIGHT[@_lo];
    switch @_type
      when MY.conf.TYPE_PHOTO_TOP
        @_sizeAP.ty = maxH;
      
      when MY.conf.TYPE_PHOTO_PROJECT_TOP
        @_sizeAP.ty = MY.conf.PJ_TOP_IMG_HEIGHT[@_lo];
        
      when MY.conf.TYPE_PHOTO_PROJECT_DETAIL
        @_sizeAP.ty = maxH;
    
    # 画像コンテナの位置
    @_imgCon.ap.ty = ~~(maxH * 0.5 - @_imgCon.height() * 0.5);
    @_sizeAP.delay(delay);
  
  
  
  # -----------------------------------
  # 左端の位置設定
  # -----------------------------------
  _setLeftParts: =>
    
    switch @_type
      
      when MY.conf.TYPE_PHOTO_TOP
        @_left.ap.tx = MY.conf.TOP_LEFT_IMG_MARGIN[@_lo];
        @_imgCon.ap.tx = @_left.ap.tx * 0.5;
      
      when MY.conf.TYPE_PHOTO_PROJECT_TOP
        @_left.ap.tx = MY.conf.PJ_TOP_LEFT_IMG_MARGIN[@_lo];
        @_imgCon.ap.tx = @_left.ap.tx * 0.5;
      
      when MY.conf.TYPE_PHOTO_PROJECT_DETAIL
        @_imgCon.ap.tx = 0;
        @_left.ap.tx = 0;
  
  
  
  # -----------------------------------
  # 先頭の画像設定
  # -----------------------------------
  changeTopImg: (imgId, isAnimate, delay) =>
    
    # スライド量初期化
    if @_type == MY.conf.TYPE_PHOTO_TOP
      @_imgs[@_topImgId].sp.x = 0;
    
    if imgId == @_topImgId
      return;
    
    if !isAnimate? then isAnimate = true;
    delay = delay || 0;
    
    @_setTopImg(imgId, isAnimate, delay);
    @_topImgId = imgId;
    
    # TOPの先頭切り替え
    if @_type == MY.conf.TYPE_PHOTO_TOP
      MY.c.getObj(MY.conf.P_TOP).setTopParts(@_topImgId, true);
  
  
  
  # -----------------------------------
  # 指定IDの画像を先頭に
  # -----------------------------------
  _setTopImg: (imgId, isAnimate, delay) =>
    
    delay = delay || 0;
    if !isAnimate? then isAnimate = true;
    
    imgW = @_imgs[0].width();
    for val,i in @_imgs
      if @_topImgId > imgId && i == @_topImgId
        val.ap.tx = (i * imgW) - (@_topImgId * imgW) - imgW;
      else
        val.ap.tx = (i * imgW) - (imgId * imgW);
      
      if i != @_topImgId
        val.ap.x = val.ap.tx + val.width() + @_nowSlideDist;
      else
        # スライドで移動してる分足す
        val.ap.x += @_nowSlideDist;
      val.ap.resetE().delay(delay);
      val.sp.x = 0;
      if !isAnimate
        val.ap.finish();
    
    @_update();
  
  
  
  # -----------------------------------
  # 次の画像に
  # -----------------------------------
  _setNextImg: =>
    
    nextId = @_topImgId + 1;
    if nextId >= @_imgs.length
      nextId = 0;
    
    @changeTopImg(nextId, true);
  
  
  
  # -----------------------------------
  # 画像のリピート処理
  # -----------------------------------
  _setRepeatImg: (imgId) =>
    
    next = imgId - 1;
    if next < 0
      next = @_imgs.length - 1;
    
    nextImg = @_imgs[next];
    img     = @_imgs[imgId];
    
    img.ap.x = img.ap.tx = img.sp.baseX = (nextImg.sp.baseX + nextImg.width() + nextImg.sp.x);
    img.sp.x = 0;
    
    x = img.sp.baseX + img.sp.x;
    img.translate(x, 0);
    img.render();
  
  
  
  # -----------------------------------
  # resize
  # -----------------------------------
  _resize: (w, h) =>
    
    super(w, h);
    
    # 画像のリサイズ処理
    bfx = 0;
    for val,i in @_imgs
      val.resize(@_sw, @_sh);
      val.sp.baseX = val.ap.x = val.ap.tx = bfx;
      bfx = bfx + val.width();
    @_imgCon.size(bfx, val.height());
    @_imgCon.render();
    @_setTopImg(@_topImgId, false);
    
    # 左端
    @_left.size(MY.conf.TOP_LEFT_IMG_MARGIN[@_lo], @_sh + 2);
    @_left.xy(-@_left.width(), -2);
    @_left.render();
    
    # パーツの設定
    # リサイズ時はすぐに設定
    @_setPartsHeight();
    @_setLeftParts();
    @_sizeAP.finish();
    @_posAP.finish();
    @_imgCon.ap.finish();
    @_left.ap.finish();
    
    # ボタン設定
    @_setBtnSize();
    
    @_update();
  
  
  
  # -----------------------------------
  # ボタン領域の設定
  # -----------------------------------
  _setBtnSize: =>
    
    @_anm[2].reset();
    
    # プロジェクトトップのみ
    # hover用カバーもここで
    if @_type == MY.conf.TYPE_PHOTO_PROJECT_TOP || @_type == MY.conf.TYPE_PHOTO_TOP
      @_btn.visible(true);
      @_btn.size(@_sizeAP.tx, @_sizeAP.ty);
      @_hoverCover.visible(true);
      @_hoverCover.opacity(0);
      @_hoverCover.size(@_sizeAP.tx, @_sizeAP.ty);
    else
      @_btn.visible(false);
      @_hoverCover.visible(false);
    @_btn.render();
    @_hoverCover.render();
    
    if @_type == MY.conf.TYPE_PHOTO_TOP
      @_hoverCover.visible(false);
      @_hoverCover.render();
  
  
  
  # -----------------------------------
  # update
  # -----------------------------------
  _update: =>
    
    super();
    
    @_nowSlideDist = 0;
    for val,i in @_imgs
      
      val.ap.update();
      val.sp.baseX = val.ap.x;
      
      # トップなら無限スライド
      if @_type == MY.conf.TYPE_PHOTO_TOP && @_key == 0 && !MY.c.getObj(MY.conf.P_ABOUT).isShow()
        val.sp.x -= MY.conf.TOP_SLIDE_SPEED;
      
#       if @_type == MY.conf.TYPE_PHOTO_PROJECT
      if @_type != MY.conf.TYPE_PHOTO_TOP
        val.sp.x += (0 - val.sp.x) * 0.1;
      
      x = val.sp.baseX + val.sp.x;
      val.translate(x, 0);
      val.render();
      
      if i == @_topImgId
        @_nowSlideDist = val.sp.x;
      
      # リピート処理
      if x <= -val.width()
        @_setRepeatImg(i);
    
    # スライド量が一定値を超えたら画像切り替え
    if @_key == 0 && @_type == MY.conf.TYPE_PHOTO_TOP && Math.abs(@_nowSlideDist) >= MY.conf.TOP_SLIDE_DIST[@_lo]
      @_setNextImg();
    
    # 画像コンテナ
    @_imgCon.ap.update();
    @_imgCon.translate(@_imgCon.ap.x, @_imgCon.ap.y);
    @_imgCon.render();
    
    # 左端
    # 左に動く
    @_left.ap.update();
    @_left.translate(@_left.ap.x, @_left.ap.y);
    @_left.render();
    
    # PJHover用
    if @_hoverCover.isVisible()
      @_hoverCover.opacity(@_anm[2].get("opacity"));
      @_hoverCover.render();
    
    # 全体
    @_sizeAP.update();
    @_posAP.update();
    scale = @_anm[0].get("scale");
    if scale == 0 then scale = 1;
    @scale(scale, scale);
    @translate(@_posAP.x, @_anm[1].get("y"));
    @size(@_sizeAP.x, @_sizeAP.y);
    @render();
    
    # 見えなかったら消しておく
    if !@_isShow && @_sizeAP.isFinish()
      @visible(false);
      @render();












module.exports = PhotoParts;