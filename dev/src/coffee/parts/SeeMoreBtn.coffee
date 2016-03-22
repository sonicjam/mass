MyBtn             = require('../base/MyBtn');
DisplayTransform  = require('../libs/display/DisplayTransform');
ResponsiveDisplay = require('./ResponsiveDisplay');
DisplayImg        = require('../libs/display/DisplayImg');


# ---------------------------------------------------
# SeeMoreボタン
# ---------------------------------------------------
class SeeMoreBtn extends MyBtn
  
  
  # -----------------------------------------------
  # コンストラクタ
  # -----------------------------------------------
  constructor: (id) ->
    
    super({
      id:id
    });
    
    # テキスト
    @_txt;
    
    # アイコン
    @_icon;
    
    # オーバー時の背景
    @_over;
    
    # ライン
    @_line;
    
    # やじるし
    @_arw;
    
    # ロールオーバー時の背景
    @_bg;
  
  
  
  # -----------------------------------------------
  # 初期化
  # -----------------------------------------------
  init: =>
    
    super();
    
    # テキスト
    @_txt = @_makeDisplay();
    @add(@_txt);
    @_txt.elm().addClass("moreBtn massFont bold noBr");
    @_txt.text("See More");
    
    # ライン
    @_line = @_makeDisplay();
    @add(@_line);
    @_line.bgColor("#000000");
    @_line.size(150, 4);
    
    @_makeBtn();
    @setBtnSize(150, 40);
    
    # テキスト位置
    @_txt.xy(8, ~~(@height() * 0.5 - @_txt.height() * 0.5));
    @_txt.render();
    
    # ライン位置
    @_line.xy(0, @height() - @_line.height());
    @_line.render();
    
    # やじるし
    @_arw = new DisplayImg({
      src:MY.conf.IMG_PATH + "/parts/seemoreArw0.png"
    });
    @_arw.onLoad = @_resize;
    @_arw.init();
    @add(@_arw);
    
    # ロールオーバー時の背景
    @_bg = @_makeDisplay();
    @unshift(@_bg);
    @_bg.bgColor("#000");
    @_bg.pivot("0% 0%");
    @_bg.xy(0, 0);
    @_bg.size(@width(), @height());
    @_bg.render();
    
    @_makeAnimation(1);
    @_update();
  
  
  
  # -----------------------------------------------
  # イベント ロールオーバー
  # -----------------------------------------------
  _eRollOver: (e) =>
    
    super();
    
    a = @_anm[0];
    a.set({
      scale:{from:0, to:1},
      y:{from:@height(), to:0},
      offset:{from:0, to:1},
      frame:40,
      ease:"outExpo"
    });
    a.start();
    
    @_txt.elm().css("color", "#FFF");
    @_arw.changeImgSrc(MY.conf.IMG_PATH + "/parts/seemoreArw1.png");
  
  
  
  # -----------------------------------------------
  # イベント ロールアウト
  # -----------------------------------------------
  _eRollOut: (e) =>
    
    super();
    
    a = @_anm[0];
    a.set({
      scale:{from:1, to:0},
      y:{from:0, to:@height()},
      offset:{from:1, to:0},
      frame:40,
      ease:"outExpo"
    });
    a.start();
    
    @_txt.elm().css("color", "#000");
    @_arw.changeImgSrc(MY.conf.IMG_PATH + "/parts/seemoreArw0.png");
  
  
  
  # -----------------------------------------------
  # イベント クリック
  # -----------------------------------------------
  _eClick: (e) =>
    
    super();
  
  
  
  # -----------------------------------------------
  # 更新
  # -----------------------------------------------
  _update: =>
    
    super();
    
    # ロールオーバー用背景
    scale = @_anm[0].get("scale");
    @_bg.visible((scale != 0));
    @_bg.scale(1, scale);
    @_bg.translate(0, @_anm[0].get("y"));
    @_bg.render();
    
    # 文字
    offset = @_anm[0].get("offset") * 10;
    @_txt.translate(offset, 0);
    @_txt.render();
    
    # アイコン
    @_arw.translate(-offset, 0);
    @_arw.render();
  
  
  
  # -----------------------------------------------
  # リサイズ
  # -----------------------------------------------
  _resize: (w, h) =>
    
    super(w, h);
    
    @_arw.xy(@width() - 10, ~~(@height() * 0.5 - @_arw.height() * 0.5));
    @_arw.render();










module.exports = SeeMoreBtn;