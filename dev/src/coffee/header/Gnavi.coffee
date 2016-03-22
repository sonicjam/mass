MyDisplay      = require('../base/MyDisplay');
ResponsiveImg  = require('../parts/ResponsiveImg');
GnaviMenuParts = require('./GnaviMenuParts');


# ---------------------------------------------------
# ヘッダー / グロナビ
# ---------------------------------------------------
class Gnavi extends MyDisplay
  
  
  # -----------------------------------------------
  # コンストラクタ
  # -----------------------------------------------
  constructor: ->
    
    super({
      id:"xGnavi",
      resize:false,
      isDefault3d:false
    });
    
    # メニュー名
    @_menus = [];
    
    # 線
    @_line;
    
    # 言語
    @_lang = [];
  
  
  
  # -----------------------------------------------
  # 初期化
  # -----------------------------------------------
  init: =>
    
    super();
    
    # メニュー名
    arr = [
      MY.conf.M_TOP,
      MY.conf.M_PROJECTS,
      MY.conf.M_ABOUT
    ];
    for val,i in arr
      menu = new GnaviMenuParts(val);
      menu.init();
      @add(menu);
      @_menus[val] = menu;
    
    # 線
    @_line = @_makeDisplay();
    @add(@_line);
    @_line.bgColor("#000000");
    @_line.size(1, 14);
    
    # 言語名
    $("#xGnaviLang" + String(MY.conf.L_JP) + " a").attr("id", "xGnaviLang" + String(MY.conf.L_JP) + "_txt");
    $("#xGnaviLang" + String(MY.conf.L_EN) + " a").attr("id", "xGnaviLang" + String(MY.conf.L_EN) + "_txt");
    jp = @_makeResponsiveDisplay("xGnaviLang" + String(MY.conf.L_JP) + "_txt", MY.f.makeRspsvClass("gnaviLang_0", "gnaviLang_1"));
    en = @_makeResponsiveDisplay("xGnaviLang" + String(MY.conf.L_EN) + "_txt", MY.f.makeRspsvClass("gnaviLang_0", "gnaviLang_1"));
    @_lang[MY.conf.L_JP] = jp;
    @_lang[MY.conf.L_EN] = en;
    @_lang[MY.f.getLang()].elm().addClass("centerLine");
    jp.elm().on("click", MY.f.goJpPage);
    en.elm().on("click", MY.f.goEnPage);
    
    @resize();
  
  
  
  # -----------------------------------------------
  # アクティブ設定
  # -----------------------------------------------
  setActive: (pageId) =>
    
    for val,i in @_menus
      val.setActive((i == pageId));
  
  
  
  # -----------------------------------
  # resize
  # -----------------------------------
  resize: (w, h) =>
    
    @_resize(w, h);
    
    # メニュー名
    menuX = 0;
    margin = 35;
    for val,i in @_menus
      val.resize(@_sw, @_sh);
      val.xy(menuX, 0);
      val.render();
      menuX = val.right() + margin;
    
    # 線
    @_line.xy(menuX, 0);
    @_line.render();
    
    # 言語名
    menuX = @_line.right() + 35;
    for val,i in @_lang
      val.update();
      val.xy(menuX, 2);
      val.render();
      menuX = val.right() + 20;
    
    @size(menuX + 30, 30);
    @render();
  
  
  
  # -----------------------------------
  # update
  # -----------------------------------
  _update: =>
    
    super();





module.exports = Gnavi;