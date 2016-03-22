MyDisplay = require('../base/MyDisplay');
Rect      = require('../libs/object/Rect');
SimpleBtn = require('../parts/SimpleBtn');


# ---------------------------------------------------
# SP画面用グロナビ / 本体
# ---------------------------------------------------
class SpGnaviParts extends MyDisplay
  
  
  # -----------------------------------------------
  # コンストラクタ
  # -----------------------------------------------
  constructor: ->
    
    super();
    
    # メニュー名
    @_menus = []
    
    # 言語
    @_lang = [];
    
    # その他パーツ
    @_menuTxt;
    @_menuTxtLine;
    @_bg;
    
    # アクティブ線
    @_actLine;
  
  
  
  # -----------------------------------------------
  # 初期化
  # -----------------------------------------------
  init: =>
    
    super();
    
    # 背景
    @_bg = @_makeDisplay();
    @add(@_bg);
    @_bg.bgColor("#000");
    
    # MENU
    @_menuTxt = @_makeTextParts("MENU", "headerTxt massFont");
    
    # その下のライン
    @_menuTxtLine = @_makeLine(null, "#FFF");
    @add(@_menuTxtLine);
    @_menuTxtLine.size(6, 1);
    
    # メニュー名
    @_menus[0] = @_makeTextParts($("#xGnaviMenu0 a").html(), "gnaviTxt_1 massFont", @_eClickHome);
    @_menus[1] = @_makeTextParts($("#xGnaviMenu1 a").html(), "gnaviTxt_1 massFont", @_eClickPj);
    @_menus[2] = @_makeTextParts($("#xGnaviMenu2 a").html(), "gnaviTxt_1 massFont", @_eClickAbout);
    
    # 言語
    @_lang[0] = @_makeTextParts($("#xGnaviLang0 a").html(), "gnaviLang_1 massFont", MY.f.goJpPage);
    @_lang[1] = @_makeTextParts($("#xGnaviLang1 a").html(), "gnaviLang_1 massFont", MY.f.goEnPage);
    
    if MY.f.getLang() == MY.conf.L_EN
      @_lang[1].elm().addClass("centerLine");
    else
      @_lang[0].elm().addClass("centerLine");
    
    # アクティブ線
    @_actLine = @_makeLine(null, "#FFF");
    @add(@_actLine);
    @_actLine.size(0, 2);
    
    @resize();
    @_updateActLine();
  
  
  
  # -----------------------------------
  # アクティブ線の更新
  # -----------------------------------
  _updateActLine: =>
    
    # ページID
    pid = MY.f.getPage();
    if pid == MY.conf.M_PROJECTS_D
      pid = MY.conf.M_PROJECTS;
    
    menu = @_menus[pid];
    if menu?
      @_actLine.width(menu.width());
      @_actLine.xy(menu.x(), menu.bottom() + 4);
      @_actLine.render();
  
  
  
  # -----------------------------------
  # イベント メニュークリック
  # -----------------------------------
  _eClickHome: =>
    
    MY.c.setPage(MY.conf.M_TOP);
    @_updateActLine();
  
  
  
  # -----------------------------------
  # イベント メニュークリック
  # -----------------------------------
  _eClickPj: =>
    
    MY.c.setPage(MY.conf.M_PROJECTS);
    @_updateActLine();
  
  
  
  # -----------------------------------
  # イベント メニュークリック
  # -----------------------------------
  _eClickAbout: =>
    
    MY.c.setPage(MY.conf.M_ABOUT);
    @_updateActLine();
  
  
  
  # -----------------------------------------------
  # テキストパーツ作成
  # -----------------------------------------------
  _makeTextParts: (txt, className, onClick) =>
    
    t = @_makeDisplay();
    @add(t);
    t.elm().addClass(className);
    t.text(txt);
    
    if onClick?
      t.elm().on("click", onClick);
    
    return t;
  
  
  
  # -----------------------------------
  # resize
  # -----------------------------------
  resize: (w, h) =>
    
    @_resize(w, h);
    
    # 全体
    @size(~~(@_sw * 0.5) + 5, @_sh + 200);
    @render();
    
    # 背景
    @_bg.size(@width(), @height());
    @_bg.render();
    
    # MENU
    @_menuTxt.xy(30, MY.conf.HEADER_HEIGHT[@_lo]);
    @_menuTxt.render();
    
    # MENUの線
    @_menuTxtLine.xy(@_menuTxt.x(), @_menuTxt.bottom() + 4);
    @_menuTxtLine.render();
    
    # メニュー名
    menuY = 100;
    for val,i in @_menus
      val.xy(@_menuTxt.x(), menuY);
      val.render();
      menuY = val.bottom() + 36;
    
    # 言語名
    menuX = @_menuTxt.x();
    for val,i in @_lang
      val.xy(menuX, @_sh - 40);
      val.render();
      menuX = val.right() + 15;
    
    @_updateActLine();
  
  
  
  # -----------------------------------
  # update
  # -----------------------------------
  _update: =>
    
    super();













module.exports = SpGnaviParts;