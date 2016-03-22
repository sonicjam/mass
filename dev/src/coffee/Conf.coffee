

# ------------------------------------
# 定数
# ------------------------------------
class Conf
  
  # ------------------------------------
  # コンストラクタ
  # ------------------------------------
  constructor: ->
    
    # 本番フラグ
    # -------------------------------
    @RELEASE = true;
    # -------------------------------
    
    # フラグ関連
    @FLG = {
      LOG:true,  # ログ出力
      PARAM:true, # パラメータチェック
      STATS:false  # Stats表示
    };
    
    # 本番フラグがtrueの場合、フラグ関連は全てfalseに
    if @RELEASE
      for key,val of @FLG
        @FLG[key] = false;
    
    # 画像パス
    @IMG_PATH = "/assets/img";
    
    # メタタグJSON
    @META_JSON = "/assets/json/meta.json";
    
    # ロゴ座標JSON
    @LOGO_JSON = "/assets/json/logo.json";
    
    # メニュータイプ
    @M_TOP        = 0;
    @M_PROJECTS   = 1;
    @M_ABOUT      = 2;
    @M_PROJECTS_D = 3;
    
    # ページタイトル
    @PAGE_TTL = [];
    
    # dir名
    @DIR_NAME = [];
    @DIR_NAME[@M_TOP]        = "";
    @DIR_NAME[@M_PROJECTS]   = "projects/";
    @DIR_NAME[@M_ABOUT]      = "about/";
    @DIR_NAME[@M_PROJECTS_D] = "projects/";
    
    # 言語タイプ
    @L_JP = 0;
    @L_EN = 1;
    
    # 主要パーツオブジェクト名
    @P_TOP      = "top";
    @P_PJTOP    = "pjTop";
    @P_PHOTO    = "photo";
    @P_PJDETAIL = "pjDetail";
    @P_ABOUT    = "about";
    @P_ABOUT_C  = "aboutCover";
    
    # レイアウトタイプ
    @LO_0 = 0; # PC
    @LO_1 = 1; # SP
    
    # ステージ幅がこれ以下ならSPレイアウト
    @BP_0 = 850;
    
    # ヘッダーの高さ
    @HEADER_HEIGHT = [];
    @HEADER_HEIGHT[@LO_0] = 140;
    @HEADER_HEIGHT[@LO_1] = 60;
    
    # トップ写真左側のマージン
    @TOP_LEFT_IMG_MARGIN = [];
    @TOP_LEFT_IMG_MARGIN[@LO_0] = 290;
    @TOP_LEFT_IMG_MARGIN[@LO_1] = 20;
    
    # プロジェクトトップ写真左側のマージン
    @PJ_TOP_LEFT_IMG_MARGIN = [];
    @PJ_TOP_LEFT_IMG_MARGIN[@LO_0] = 50;
    @PJ_TOP_LEFT_IMG_MARGIN[@LO_1] = 20;
    
    # プロジェクトトップ写真の高さ
    @PJ_TOP_IMG_HEIGHT = [];
    @PJ_TOP_IMG_HEIGHT[@LO_0] = 500;
    @PJ_TOP_IMG_HEIGHT[@LO_1] = 300;
    
    # プロジェクトトップ写真間のマージン
    @PJ_TOP_IMG_MARGIN = [];
    @PJ_TOP_IMG_MARGIN[@LO_0] = 50;
    @PJ_TOP_IMG_MARGIN[@LO_1] = 25;
    
    # 写真の配置タイプ
    @TYPE_PHOTO_TOP = 0;
    @TYPE_PHOTO_PROJECT_TOP = 1;
    @TYPE_PHOTO_PROJECT_DETAIL = 2;
    
    # TOPのスライド移動量
    @TOP_SLIDE_DIST = [];
    @TOP_SLIDE_DIST[@LO_0] = 50;
    @TOP_SLIDE_DIST[@LO_1] = 50;
    
    # トップスライドの速度
    @TOP_SLIDE_SPEED = 0.1;
    
    # 主要パーツ切り替え時のディレイ
    @PARTS_SHOW_DELAY = 60;
    @PARTS_HIDE_DELAY = 0;
    
    # 写真系のイージング値
    @EASE_PHOTO = 0.05;
    
    # 詳細画面 PC用最大幅
    @PJDETAIL_MAX_WIDTH = 1500;
    
    # 詳細画面 左右マージン
    @PJDETAIL_X_MARGIN = [];
    @PJDETAIL_X_MARGIN[@LO_0] = 50;
    @PJDETAIL_X_MARGIN[@LO_1] = 0;
    
    # 詳細画面 テキストエリア左右マージン
    @PJDETAIL_TXT_X_MARGIN = [];
    @PJDETAIL_TXT_X_MARGIN[@LO_0] = 180;
    @PJDETAIL_TXT_X_MARGIN[@LO_1] = 20;
    
    # 詳細画面 テキストエリア上マージン
    @PJDETAIL_TXT_TOP_MARGIN = [];
    @PJDETAIL_TXT_TOP_MARGIN[@LO_0] = 60;
    @PJDETAIL_TXT_TOP_MARGIN[@LO_1] = 25;
    
    # ABOUT画面登場用パラメータ
    @ABOUT_PARAM = {
      FRAME:80,
      EASE:"inOutExpo",
      CDELAY:10
    };
    
    # 文字エフェクト遅延
    @STR_DELAY = 5;
    
    # 最初の要素表示遅延
    @FIRST_SHOW_DELAY = 15;
    
    # 詳細の画像拡大遅延
    @DETAIL_EXPAND_DELAY = 20;
    
    # 詳細の画像拡大フレーム
    @DETAIL_EXPAND_FRAME = 90;
    
    # 詳細の画像拡大イージング
    @DETAIL_EXPAND_EASE = "inOutExpo";
    
    # 画像戻すとき
    @PHOTO_RESET_F = 70;
    @PHOTO_RESET_E = "outExpo";
    
    # 演出バーの色
    @EFFECT_BAR_COLOR_0 = "#000";
    @EFFECT_BAR_COLOR_1 = "#FFF";
    
    # 詳細のファーストビューオフセット
    @PJDETAIL_OFFSET_Y = [];
    @PJDETAIL_OFFSET_Y[@LO_0] = 180;
    @PJDETAIL_OFFSET_Y[@LO_1] = 130;
    
    # MASSロゴの頂点データ
    @MASS_VERTEX = window.MASS_LOGO;
    
    # PJ詳細 youtubeテンプレ
    @PJ_YOUTUBE = '<iframe width="<width>" height="<height>" src="https://www.youtube.com/embed/<ycode>?vq=highres&rel=0&showinfo=0&modestbranding=0&enablejsapi=1" frameborder="0" allowfullscreen></iframe>';














module.exports = Conf;
