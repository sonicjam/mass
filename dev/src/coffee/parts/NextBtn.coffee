MyDisplay     = require('../base/MyDisplay');
Animation     = require('../libs/animation/Animation');
ResponsiveImg = require('../parts/ResponsiveImg');


# ---------------------------------------------------
# 一番上にスクロールボタン
# ---------------------------------------------------
class NextBtn extends MyDisplay
  
  
  # -----------------------------------------------
  # コンストラクタ
  # -----------------------------------------------
  constructor: (isNext) ->
    
    super();
    
    # falseならprevボタンに
    @_isNext = isNext;
    
    # 画像
    @_arw;
    @_img;
    
    # ボタン
    @_btn;
    
    # コールバック クリック
    @onClick;
  
  
  
  # -----------------------------------------------
  # 初期化
  # -----------------------------------------------
  init: =>
    
    super();
    
    @_arw = @_makeResponsiveImg(null, MY.f.makeRspsvImgSrc(
      [MY.conf.IMG_PATH + "/parts/" + (if @_isNext then "nextarw" else "prevarw") + ".png", false],
      [MY.conf.IMG_PATH + "/parts/" + (if @_isNext then "nextarw" else "prevarw") + ".png", true]
    ));
    @add(@_arw);
    
    @_img = @_makeResponsiveImg(null, MY.f.makeRspsvImgSrc(
      [MY.conf.IMG_PATH + "/parts/" + (if @_isNext then "nextpj" else "prevpj") + ".png", false],
      [MY.conf.IMG_PATH + "/parts/" + (if @_isNext then "nextpj" else "prevpj") + ".png", true]
    ));
    @add(@_img);
    
    # ボタン
    @_btn = @_makeBtn(null, @_eClick, @_eRollOver, @_eRollOut);
    @add(@_btn);
    
    @_makeAnimation(1);
    
    @resize();
    @_update();
  
  
  
  # -----------------------------------------------
  # レスポンシブ用画像作成
  # -----------------------------------------------
  _makeResponsiveImg: (id, imgs) =>
    
    d = new ResponsiveImg(imgs, {
      id:id
    });
    d.init();
    
    return d;
  
  
  
  # -----------------------------------
  # イベント ロールオーバー
  # -----------------------------------
  _eRollOver: =>
    
    # 明るくする
    @brightness(30);
    @render();
    
    a = @_anm[0];
    a.set({
      r:{from:0, to:1},
      frame:30,
      ease:"outExpo"
    });
    a.start();
  
  
  
  # -----------------------------------
  # イベント ロールアウト
  # -----------------------------------
  _eRollOut: =>
    
    # もどす
    @brightness(1);
    @render();
    
    a = @_anm[0];
    a.set({
      r:{from:1, to:0},
      frame:30,
      ease:"outExpo"
    });
    a.start();
  
  
  
  # -----------------------------------
  # イベント クリック
  # -----------------------------------
  _eClick: =>
    
    if @onClick? then @onClick();
    
    # スクロール位置を一番上に
    #MY.scroller.scroll(0, 0, null, true);
  
  
  
  # -----------------------------------
  # resize
  # -----------------------------------
  resize: (w, h) =>
    
    @_resize(w, h);
    
    @_arw.update();
    @_img.update();
    
    if @_isNext
      @_img.xy(0, 0);
      @_img.render();
      @_arw.xy(@_img.right() + MY.f.getLOVal(20, 10), ~~(@_img.height() * 0.5 - @_arw.height() * 0.5));
      @_arw.render();
      @size(@_arw.right(), @_img.bottom());
      @render();
    else
      @_arw.xy(0, ~~(@_img.height() * 0.5 - @_arw.height() * 0.5));
      @_arw.render();
      @_img.xy(@_arw.right() + MY.f.getLOVal(20, 10), 0);
      @_img.render();
      @size(@_img.right(), @_img.bottom());
      @render();
    
    @_btn.size(@width() * 1, @height() * 3);
    @_btn.xy(~~(@width() * 0.5 - @_btn.width() * 0.5), ~~(@height() * 0.5 - @_btn.height() * 0.5));
    @_btn.render();
  
  
  
  # -----------------------------------
  # update
  # -----------------------------------
  _update: =>
    
    super();
    
    # やじるし
    if !MY.u.isFF()
      dist = @_anm[0].get("r") * 8;
      if !@_isNext then dist *= -1;
      @_arw.translate(dist, 0);
      @_arw.render();
  
  
  
  # -----------------------------------------------
  # 破棄
  # -----------------------------------------------
  dispose: =>
    
    super();













module.exports = NextBtn;