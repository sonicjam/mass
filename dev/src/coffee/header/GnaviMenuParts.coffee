MyDisplay     = require('../base/MyDisplay');
ResponsiveImg = require('../parts/ResponsiveImg');


# ---------------------------------------------------
# ヘッダー / グロナビ / メニュー名
# ---------------------------------------------------
class GnaviMenuParts extends MyDisplay
  
  
  # -----------------------------------------------
  # コンストラクタ
  # -----------------------------------------------
  constructor: (menuId) ->
    
    super({
      id:"xGnaviMenu" + String(menuId),
      resize:false,
      isDefault3d:true
    });
    
    # メニューID
    @_menuId = menuId;
    
    # テキスト
    @_txt;
    
    # ボタン
    @_btn;
    
    # 色
    @_color = 0;
    
    # アクティブ用ライン
    @_lineCon;
    @_line;
    
    # アクティブフラグ
    @_isActive = false;
    
    # コールバック クリック
    @onClick;
  
  
  
  # -----------------------------------------------
  # 初期化
  # -----------------------------------------------
  init: =>
    
    super();
    
    # idを追加
    $("#" + @_id + " a").attr("id", @_id + "_txt");
    
    # テキスト
    @_txt = @_makeResponsiveDisplay(@_id + "_txt", MY.f.makeRspsvClass("gnaviTxt_0", "gnaviTxt_1"));
    
    # アクティブ用ライン コンテナ
    @_lineCon = @_makeDisplay();
    @_lineCon.init();
    @add(@_lineCon);
    @_lineCon.mask(true);
    
    # アクティブ用ライン
    @_line = @_makeDisplay();
    @_line.init();
    @_lineCon.add(@_line);
    @_line.bgColor("#000");
    
    # ボタン
    @_btn = @_makeBtn(null, @_eClick, @_eRollOver, @_eRollOut);
    @add(@_btn);
    
    # 0..テキストの色
    # 1..ライン
    @_makeAnimation(2);
    @resize();
  
  
  
  # -----------------------------------
  # ロールオーバーアニメーション設定
  # -----------------------------------
  _setHoverAnm: (param) =>
    
    if @_lo == MY.conf.LO_0
      a = @_anm[0];
      a.set(param);
      a.start()
      @_update();
  
  
  
  # -----------------------------------
  # イベント ロールオーバー
  # -----------------------------------
  _eRollOver: =>
    
    if @_isActive then return;
    
    @_setHoverAnm({
      r:{from:0, to:1},
      frame:30,
      ease:"outExpo"
    });
  
  
  
  # -----------------------------------
  # イベント ロールアウト
  # -----------------------------------
  _eRollOut: =>
    
    if @_isActive then return;
    
    @_setHoverAnm({
      r:{from:@_anm[0].get("r"), to:0},
      frame:40
    });
  
  
  
  # -----------------------------------
  # イベント クリック
  # -----------------------------------
  _eClick: =>
    
    if @_isActive then return;
    
    # スクロール上にしてから
    MY.scroller.scroll(0, 0, null, false);
    
    MY.delay.add(=>
      MY.c.getObj(MY.conf.P_PHOTO).resetParts(=>
        MY.c.setPage(@_menuId);
      );
    , 10);
  
  
  
  # -----------------------------------------------
  # アクティブ設定
  # -----------------------------------------------
  setActive: (bool) =>
    
    if @_isActive && bool then return;
    
    @_eRollOut();
    @_isActive = bool;
    
    if @_isActive
      s = {from:@_anm[1].get("scale"), to:1};
      x = {from:0, to:0};
    else
      s = {from:@_anm[1].get("scale"), to:0};
      x = {from:@_anm[1].get("x"), to:@_lineCon.width()};
    
    a = @_anm[1];
    a.set({
      scale:s,
      x:x,
      frame:60,
      ease:"inOutExpo"
    });
    a.start();
    @_update();
  
  
  
  # -----------------------------------
  # resize
  # -----------------------------------
  resize: (w, h) =>
    
    @_resize(w, h);
    
    # テキスト
    @_txt.update();
    
    # アクティブライン コンテナ
    @_lineCon.xy(0, @_txt.bottom() + 4);
    @_lineCon.size(@_txt.width() - 1, 1);
    @_lineCon.render();
    
    # アクティブライン
    @_line.height(1);
    @_line.render();
    
    # 全体
    @size(@_txt.width(), @_txt.height());
    @render();
    
    # ボタン
    @_btn.size(@width() * 1.2, @height() * 2);
    @_btn.xy(~~(@width() * 0.5 - @_btn.width() * 0.5), ~~(@height() * 0.5 - @_btn.height() * 0.5));
    @_btn.render();
  
  
  
  # -----------------------------------
  # update
  # -----------------------------------
  _update: =>
    
    super();
    
    if @_lo == MY.conf.LO_0
      
      # テキスト色
      r = @_anm[0].get("r");
      @_color = r * 200;
      @_txt.elm().css({
        color:MY.u.getHexColor(@_color, @_color, @_color)
      });
      
      # ライン
      @_line.translate(@_anm[1].get("x"), 0);
      @_line.width(@_lineCon.width() * @_anm[1].get("scale"));
      @_line.render();










module.exports = GnaviMenuParts;