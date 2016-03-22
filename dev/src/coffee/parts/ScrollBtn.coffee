MyDisplay     = require('../base/MyDisplay');
Animation     = require('../libs/animation/Animation');
ResponsiveImg = require('../parts/ResponsiveImg');


# ---------------------------------------------------
# 矢印ボタン
# ---------------------------------------------------
class ScrollBtn extends MyDisplay
  
  
  # -----------------------------------------------
  # コンストラクタ
  # -----------------------------------------------
  constructor: (srcList) ->
    
    super();
    
    @_srcList = srcList;
    
    # やじるし
    @_arw;
    
    # ボタン
    @_btn;
    
    # コールバック クリック
    @onClick;
  
  
  
  # -----------------------------------------------
  # 初期化
  # -----------------------------------------------
  init: =>
    
    super();
    
    @_arw = @_makeResponsiveImg(null, @_srcList);
    @add(@_arw);
    
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
  
  
  
  # -----------------------------------
  # resize
  # -----------------------------------
  _resize: (w, h) =>
    
    super(w, h);
    
    @_arw.update();
    @_arw.xy(0, 0);
    @_arw.render();
    
    @size(@_arw.width(), @_arw.bottom());
    @render();
    
    @_btn.size(@width() * 1, @height() * 1);
    @_btn.xy(~~(@width() * 0.5 - @_btn.width() * 0.5), ~~(@height() * 0.5 - @_btn.height() * 0.5));
    @_btn.render();
  
  
  
  # -----------------------------------
  # update
  # -----------------------------------
  _update: =>
    
    super();
    
    # やじるし
    y = @_anm[0].get("r") * 8;
    @_arw.translate(0, y);
    @_arw.render();
  
  
  
  # -----------------------------------------------
  # 破棄
  # -----------------------------------------------
  dispose: =>
    
    super();













module.exports = ScrollBtn;