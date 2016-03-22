ImagesLoader = require('./libs/img/ImagesLoader');


# ---------------------------------------------------
# プリロードクラス
# ---------------------------------------------------
class Preloader
  
  
  # -----------------------------------------------
  # コンストラクタ
  # -----------------------------------------------
  constructor: ->
    
    # 画像読み込み
    @_imgLoader;
    
    # コールバック 読み込み中
    @onProgress;
    
    # コールバック 読み込み完了
    @onComplete;
  
  
  
  # -----------------------------------------------
  # 初期化
  # -----------------------------------------------
  init: =>
  
  
  
  # -----------------------------------
  # 読み込み開始
  # -----------------------------------
  load: =>
    
    # 画像プリロード
    imgList = [];
    
    # 写真
    num = MY.f.getConNum();
    i = 0;
    while i < num
      imgList.push({id:imgList.length, url:MY.conf.IMG_PATH + "/photo/" + String(i) + ".jpg"});
      i++;
    
    # ABOUT写真
    imgList.push({id:imgList.length, url:MY.conf.IMG_PATH + "/about/0.jpg"});
    imgList.push({id:imgList.length, url:MY.conf.IMG_PATH + "/about/1.jpg"});
    imgList.push({id:imgList.length, url:MY.conf.IMG_PATH + "/about/2.jpg"});
    
    # 読み込み開始
    @_imgLoader = new ImagesLoader(imgList, 5);
    @_imgLoader.onComplete = @_eImgComplete;
    @_imgLoader.onProgress = @_eImgProgress;
    @_imgLoader.start();
  
  
  
  # -----------------------------------
  # イベント 読み込み中
  # -----------------------------------
  _eImgProgress: (pct) =>
    
    if @onProgress? then @onProgress(pct / 100);
  
  
  
  # -----------------------------------
  # イベント 読み込み完了
  # -----------------------------------
  _eImgComplete: =>
    
    # メタタグJSON読み込み
    $.getJSON(MY.conf.META_JSON, @_eMJsonComplete);
  
  
  
  # -----------------------------------
  # イベント メタJSON読み込み完了
  # -----------------------------------
  _eMJsonComplete: (e) =>
    
    add = "";
    if MY.f.getLang() == MY.conf.L_EN
      add = "en_";
    
    MY.conf.PAGE_TTL[MY.conf.M_TOP]      = e[add + "home"].title;
    MY.conf.PAGE_TTL[MY.conf.M_PROJECTS] = e[add + "projects"].title;
    MY.conf.PAGE_TTL[MY.conf.M_ABOUT]    = e[add + "about"].title;
    
    MY.conf.PAGE_TTL[MY.conf.M_PROJECTS_D] = [];
    i = 1;
    while 1
      test = e[add + "projects" + MY.u.numStr(i, 2)];
      if test?
        MY.conf.PAGE_TTL[MY.conf.M_PROJECTS_D].push(test.title);
        i++;
      else
        break;
    
    $.getJSON(MY.conf.LOGO_JSON, @_eLJsonComplete);
#     # PCはロゴ座標JSON読み込み
#     if !MY.u.isSmt()
#       $.getJSON(MY.conf.LOGO_JSON, @_eLJsonComplete);
#     else
#       if @onComplete? then @onComplete();
  
  
  
  # -----------------------------------
  # イベント ロゴJSON読み込み完了
  # -----------------------------------
  _eLJsonComplete: (e) =>
    
    MY.conf.MASS_VERTEX = e;
    if @onComplete? then @onComplete();















module.exports = Preloader;