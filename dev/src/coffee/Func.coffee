

# ---------------------------------------------------
# 共通関数
# ---------------------------------------------------
class Func
  
  
  # -----------------------------------------------
  # コンストラクタ
  # -----------------------------------------------
  constructor: ->
    
    # コンテンツ数
    @_conNum = -1;
  
  
  
  # ------------------------------------
  # コンテンツ数
  # ------------------------------------
  getConNum: =>
    
    if @_conNum == -1
      @_conNum = Number($("#xTop").context.childNodes.length);
    
    return @_conNum;
  
  
  
  # ------------------------------------
  # 言語タイプ
  # ------------------------------------
  getLang: =>
    
    if (location.href).indexOf("/en") != -1
      return MY.conf.L_EN;
    else
      return MY.conf.L_JP;
  
  
  
  # ------------------------------------
  # ページID取得
  # ------------------------------------
  getPage: =>
    
    url = location.href;
    if url.indexOf("/" + MY.conf.DIR_NAME[MY.conf.M_ABOUT]) != -1
      return MY.conf.M_ABOUT;
    else if url.indexOf("/" + MY.conf.DIR_NAME[MY.conf.M_PROJECTS]) != -1
      i = if @getLang() == MY.conf.L_JP then 6 else 7;
      if (url.split("/")).length >= i
        return MY.conf.M_PROJECTS_D;
      else
        return MY.conf.M_PROJECTS;
    else
      return MY.conf.M_TOP;
  
  
  
  # ------------------------------------
  # ページ詳細ID取得
  # ------------------------------------
  getPjDetailId: =>
    
    url = location.href;
    i = if @getLang() == MY.conf.L_JP then 4 else 5;
    id = String(url.split("/")[i]);
    if id.substr(0, 1) == "0"
      id = Number(id.substr(1));
    
    return @getConNum() - id;
  
  
  
  # ------------------------------------
  # ログ
  # ------------------------------------
  log: (params...) =>
    
    if MY.conf.FLG.LOG
      if console? && console.log? then console.log(params...);
  
  
  
  # ------------------------------------
  # レスポンシブ用画像srcオブジェクト作成
  # @src0 : PC用 [src, isRetina]
  # @src1 : SP用 [src, isRetina]
  # ------------------------------------
  makeRspsvImgSrc: (src0, src1) =>
    
    arr = [];
    arr[MY.conf.LO_0] = src0;
    arr[MY.conf.LO_1] = src1;
    
    return arr;
  
  
  
  # ------------------------------------
  # レスポンシブ用ClassList作成
  # @class0 : PC用クラス名
  # @class1 : SP用クラス名
  # ------------------------------------
  makeRspsvClass: (class0, class1) =>
    
    arr = [];
    arr[MY.conf.LO_0] = class0;
    arr[MY.conf.LO_1] = class1;
    
    return arr;
  
  
  
  # ------------------------------------
  # レイアウトタイプによって値分岐
  # ------------------------------------
  getLOVal: (val0, val1) =>
    
    switch @getLOType()
      when MY.conf.LO_0
        return val0;
      when MY.conf.LO_1
        return val1;
  
  
  
  # ------------------------------------
  # レイアウトタイプ取得
  # ------------------------------------
  getLOType: =>
    
    # スマホ系は強制
    if MY.u.isSmt() 
      return MY.conf.LO_1;
    
    sw = MY.resize.sw();
    if sw > MY.conf.BP_0
      return MY.conf.LO_0;
    else
      return MY.conf.LO_1;
  
  
  
  # -----------------------------------
  # HistoryAPI スタックの追加
  # @dir : ディレクトリ名
  # -----------------------------------
  historyAdd: (dir) =>
  
    if history?
      
      if @getLang() == MY.conf.L_EN
        url = "/en/" + dir;
      else
        url = "/" + dir;
      
      history.replaceState("index", null, null);
      history.pushState(dir, null, url);
      
      @log("historyAdd::", dir);
  
  
  
  # -----------------------------------
  # title変更
  # -----------------------------------
  setTitle: (title) =>
    
    document.title = title;
    $("title").text(title);
  
  
  
  # -----------------------------------
  # ページビューのトラッキング GA
  # -----------------------------------
  trackPageView: (url) =>
    
    if ga?
      @log("##################### trackPageView::", url);
      ga('send', 'pageview', url);
  
  
  
  # ------------------------------------
  # 日本語ページへ遷移
  # ------------------------------------
  goJpPage: =>
    
    location.href = "/";
  
  
  
  # ------------------------------------
  # 英語ページへ遷移
  # ------------------------------------
  goEnPage: =>
    
    location.href = "/en/";








module.exports = Func;