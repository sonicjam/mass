MyDisplay = require('../base/MyDisplay');
Animation = require('../libs/animation/Animation');
ResponsiveImg     = require('../parts/ResponsiveImg');


# ---------------------------------------------------
# 一番上にスクロールボタン
# ---------------------------------------------------
class ToTopBtn extends MyDisplay
  
  
  # -----------------------------------------------
  # コンストラクタ
  # -----------------------------------------------
  constructor: ->
    
    super();
    
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
      [MY.conf.IMG_PATH + "/parts/toTop1.png", false],
      [MY.conf.IMG_PATH + "/parts/toTop1.png", true]
    ));
    @add(@_arw);
    
    @_img = @_makeResponsiveImg(null, MY.f.makeRspsvImgSrc(
      [MY.conf.IMG_PATH + "/parts/toTop0.png", false],
      [MY.conf.IMG_PATH + "/parts/toTop0.png", true]
    ));
    @add(@_img);
    
    # ボタン
    @_btn = @_makeBtn(null, @_eClick, @_eRollOver, @_eRollOut);
    @add(@_btn);
    
    @_makeAnimation(1);
    
    @_resize();
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
    MY.scroller.scroll(0, 0, null, true);
  
  
  
  # -----------------------------------
  # resize
  # -----------------------------------
  _resize: (w, h) =>
    
    super(w, h);
    
    @_arw.update();
    @_img.update();
    
    @_arw.xy(0, 0);
    @_arw.render();
    
    @_img.xy(0, @_arw.bottom());
    @_img.render();
    
    @size(@_img.width(), @_img.bottom());
    @render();
    
    @_btn.size(@width() * 1.5, @height() * 1.5);
    @_btn.xy(~~(@width() * 0.5 - @_btn.width() * 0.5), ~~(@height() * 0.5 - @_btn.height() * 0.5));
    @_btn.render();
  
  
  
  # -----------------------------------
  # update
  # -----------------------------------
  _update: =>
    
    super();
    
    # やじるし
    y = @_anm[0].get("r") * -8;
    @_arw.translate(0, y);
    @_arw.render();
  
  
  
  # -----------------------------------------------
  # 破棄
  # -----------------------------------------------
  dispose: =>
    
    
    super();













module.exports = ToTopBtn;