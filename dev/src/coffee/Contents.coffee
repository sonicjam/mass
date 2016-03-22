Header       = require('./header/Header');
SimpleHeader = require('./header/SimpleHeader');
SpGnavi      = require('./header/SpGnavi');
Loading      = require('./parts/Loading');
AboutCover   = require('./parts/AboutCover');
Top          = require('./top/Top');
PjTop        = require('./pj/PjTop');
PjDetail     = require('./pjDetail/PjDetail');
Photo        = require('./photo/Photo');
About        = require('./about/About');



# ---------------------------------------------------
# コンテンツ
# ---------------------------------------------------
class Contents
  
  
  # -----------------------------------------------
  # コンストラクタ
  # -----------------------------------------------
  constructor: ->
    
    # ローディング
    @_loading;
    
    # ヘッダー
    @_header;
    
    # 簡易ヘッダー
    @_simpleHeader;
    
    # SP用グロナビ
    @_spgnavi;
    
    # 主要パーツ
    @_parts = {};
  
  
  
  # -----------------------------------------------
  # 初期化
  # -----------------------------------------------
  init: =>
    
    # リンク無効処理
    $(".noLink").attr("href", "javascript:void(0)");
    
    # winは横スクロール無効
    if MY.u.isWin()
      $("body").css({
        overflowX:"hidden"
      });
    
    # 一番上にしておく
    $(window).scrollTop(0);
    
    # ga
    MY.f.trackPageView(location.href);
    
    # 主要パーツオブジェクト作成
    @makeParts(MY.conf.P_TOP);
    @makeParts(MY.conf.P_PJTOP);
    @makeParts(MY.conf.P_PHOTO);
    @makeParts(MY.conf.P_PJDETAIL);
    @makeParts(MY.conf.P_ABOUT_C);
    
    # ローディング
    @_setLoading();
    
    # ブラウザの戻る、進む実行
    $(window).on("popstate", @_ePopState);
    
    MY.resize.add(@_resize, true);
    MY.update.add(@_update);
  
  
  
  # -----------------------------------------------
  # イベント ブラウザの戻る、進むボタン
  # -----------------------------------------------
  _ePopState: (e) =>
    
    if !e.originalEvent.state? then return;
    @setForcePage(MY.f.getPage());
  
  
  
  # -----------------------------------------------
  # ローディング
  # -----------------------------------------------
  _setLoading: =>
    
    @_loading = new Loading();
    @_loading.onComplete = @_eCompleteLoading;
    @_loading.init();
  
  
  
  # -----------------------------------------------
  # ローディング破棄
  # -----------------------------------------------
  _disposeLoading: =>
    
    if @_loading?
      @_loading.dispose();
      @_loading = null;
  
  
  
  # -----------------------------------------------
  # イベント ローディング完了
  # -----------------------------------------------
  _eCompleteLoading: =>
    
    # ABOUTだけは最初データがないのでここで作成
    @makeParts(MY.conf.P_ABOUT);
    
    # 破棄
    @_disposeLoading();
    
    # 共通パーツ
    @_setCmnParts();
    
    partsDelay = MY.conf.FIRST_SHOW_DELAY;
    
    # ヘッダー表示
    @_header.show(true, partsDelay);
    
    # ページによって最初に表示するページ分岐
    switch MY.f.getPage()
      when MY.conf.M_TOP # トップ
        @getObj(MY.conf.P_PHOTO).setType(MY.conf.TYPE_PHOTO_TOP, false);
        @showParts(MY.conf.P_PHOTO, false, MY.f.getLOVal(130, 10));
        @showParts(MY.conf.P_TOP, true, partsDelay + MY.f.getLOVal(0, 30));
        @_header.setActive(MY.conf.M_TOP);
      
      when MY.conf.M_PROJECTS # PJトップ
        @showParts(MY.conf.P_PHOTO, true, 0);
        @getObj(MY.conf.P_PHOTO).setType(MY.conf.TYPE_PHOTO_PROJECT_TOP, false);
        @showParts(MY.conf.P_PJTOP, true, partsDelay + 40);
        @_header.setActive(MY.conf.M_PROJECTS);
      
      when MY.conf.M_PROJECTS_D # PJ詳細
        did = MY.f.getPjDetailId();
        if did?
          @getObj(MY.conf.P_PHOTO).setDetailParts(false);
          @showParts(MY.conf.P_PHOTO, true, 0);
          @setPjDetail(did, true, 0, false, (MY.f.getLOType() == MY.conf.LO_0));
          @_header.setActive(MY.conf.M_PROJECTS);
      
      when MY.conf.M_ABOUT # ABOUT
        @getObj(MY.conf.P_PHOTO).setType(MY.conf.TYPE_PHOTO_TOP, false);
        @showParts(MY.conf.P_ABOUT, true, partsDelay);
        @_header.setActive(MY.conf.M_ABOUT);
  
  
  
  # -----------------------------------------------
  # アニメーション無しでページ表示
  # -----------------------------------------------
  setForcePage: (pageId) =>
    
    if pageId == MY.conf.M_PROJECTS_D
      did = MY.f.getPjDetailId();
      @setPjDetail(did, false, 0, false);
    else
      @setPage(pageId, false);
  
  
  
  # -----------------------------------------------
  # 共通パーツ
  # -----------------------------------------------
  _setCmnParts: =>
  
    # ヘッダー
    @_header = new Header();
    @_header.init();
    
    # 簡易ヘッダー
    @_simpleHeader = new SimpleHeader();
    @_simpleHeader.init();
    
    # SP用グロナビ
    @_spgnavi = new SpGnavi();
    @_spgnavi.init();
  
  
  
  # -----------------------------------------------
  # 主要パーツオブジェクト作成
  # -----------------------------------------------
  makeParts: (name) =>
    
    if @_parts[name]?
      return;
    
    switch name
      when MY.conf.P_TOP
        p = new Top();
        
      when MY.conf.P_PJTOP
        p = new PjTop();
        
      when MY.conf.P_PHOTO
        p = new Photo();
      
      when MY.conf.P_PJDETAIL
        p = new PjDetail();
      
      when MY.conf.P_ABOUT
        p = new About();
      
      when MY.conf.P_ABOUT_C
        p = new AboutCover();
      
    p.init();
    
    @_parts[name] = p;
  
  
  
  # -----------------------------------------------
  # 主要パーツオブジェクト表示
  # -----------------------------------------------
  showParts: (name, isAnimate, delay) =>
    
    if @_parts[name]?
      @_parts[name].show(isAnimate, delay);
  
  
  
  # -----------------------------------------------
  # 主要パーツオブジェクト表示消す
  # -----------------------------------------------
  hideParts: (name, isAnimate, delay) =>
    
    if @_parts[name]?
      @_parts[name].hide(isAnimate, delay);
  
  
  
  # -----------------------------------------------
  # オブジェクト取得
  # -----------------------------------------------
  getObj: (name) =>
    
    return @_parts[name];
  
  
  
  # -----------------------------------
  # ページ表示
  # -----------------------------------
  setPage: (pageId, isChangeUrl) =>
    
    if !isChangeUrl? then isChangeUrl = true;
    
    # グロナビ閉じる SPのみ
    @_header.ctrlGnavi(false);
    
    # 簡易ヘッダー出てたら消す
    if @_simpleHeader.isShow()
      @_header.onMouseLeave = null;
      @_header.setPosition("absolute");
      if !@_header.isShow() then @_header.show(true, 40);
      @_simpleHeader.hide(true, 40);
    
    # アクティブ設定
    @_header.setActive(pageId);
    
    # ヘッダーの背景あり
    @_header.setBgOpacity(1);
    
    # スクロール位置を一番上に
    MY.scroller.scroll(0, 0, null, false);
    
    switch pageId
      when MY.conf.M_TOP # トップ
        @getObj(MY.conf.P_PHOTO).setType(MY.conf.TYPE_PHOTO_TOP);
        @getObj(MY.conf.P_TOP).setTopId(0);
        @showParts(MY.conf.P_TOP, true, MY.conf.PARTS_SHOW_DELAY);
        @hideParts(MY.conf.P_ABOUT_C, false);
        @hideParts(MY.conf.P_PJTOP, true, MY.conf.PARTS_HIDE_DELAY);
        @hideParts(MY.conf.P_ABOUT, true, 0);
        @hideParts(MY.conf.P_PJDETAIL, true, MY.conf.PARTS_HIDE_DELAY);
      
      when MY.conf.M_PROJECTS # PJトップ
        @getObj(MY.conf.P_PHOTO).setType(MY.conf.TYPE_PHOTO_PROJECT_TOP);
        @hideParts(MY.conf.P_ABOUT_C, false);
        @hideParts(MY.conf.P_ABOUT, true, 0);
        @hideParts(MY.conf.P_TOP, true, MY.conf.PARTS_HIDE_DELAY);
        @hideParts(MY.conf.P_PJDETAIL, true, MY.conf.PARTS_HIDE_DELAY);
        @showParts(MY.conf.P_PJTOP, true, 100);
      
      when MY.conf.M_ABOUT # ABOUT
        # カバー表示
        @showParts(MY.conf.P_ABOUT_C, true, 0);
        
        # 遅れてページ表示
        @showParts(MY.conf.P_ABOUT, true, MY.conf.ABOUT_PARAM.CDELAY);
        
        # ヘッダーの背景なし
        @_header.setBgOpacity(0);
    
    # URL変更
    @setPageUrl(pageId, null, isChangeUrl);
  
  
  
  # -----------------------------------
  # URL変更
  # @pageId : ページID
  # @pjId   : 詳細の場合、詳細ID
  # -----------------------------------
  setPageUrl: (pageId, pjId, isChangeUrl) =>
    
    if !isChangeUrl?
      isChangeUrl = true;
    
    if pageId == MY.conf.M_PROJECTS_D
      
      id2 = MY.f.getConNum() - pjId;
      
      # 履歴追加
      if isChangeUrl
        MY.f.historyAdd(MY.conf.DIR_NAME[MY.conf.M_PROJECTS_D] + MY.u.numStr(id2, 2) + "/");
        
        # ga
        MY.f.trackPageView(location.href);
    
      # タイトル変更
      MY.f.setTitle(MY.conf.PAGE_TTL[MY.conf.M_PROJECTS_D][id2 - 1]);
    else
      # 履歴追加
      if isChangeUrl
        MY.f.historyAdd(MY.conf.DIR_NAME[pageId]);
        
        # ga
        MY.f.trackPageView(location.href);
      
      # タイトル変更
      MY.f.setTitle(MY.conf.PAGE_TTL[pageId]);
  
  
  
  # -----------------------------------
  # アニメーションなしで画面をHOMEに
  # -----------------------------------
  setHome: =>
    
    @getObj(MY.conf.P_PHOTO).setType(MY.conf.TYPE_PHOTO_TOP, false);
    #@showParts(MY.conf.P_PHOTO, false, 0);
    #@showParts(MY.conf.P_TOP, false);
    @hideParts(MY.conf.P_PHOTO, false, 0);
    @hideParts(MY.conf.P_TOP, false);
    @hideParts(MY.conf.P_ABOUT_C, false);
    @hideParts(MY.conf.P_PJTOP, false);
    @hideParts(MY.conf.P_PJDETAIL, false);
  
  
  
  # -----------------------------------
  # プロジェクト詳細表示
  # -----------------------------------
  setPjDetail: (pjId, isAnimate, delay, isChangeUrl, isPhotoAnimate) =>
    
    if !isAnimate? then isAnimate = true;
    delay = delay || MY.conf.PARTS_SHOW_DELAY;
    if !isChangeUrl? then isChangeUrl = true;
    
    if !isPhotoAnimate?
      isPhotoAnimate = isAnimate;
    
    # ヘッダーの背景あり
    @_header.setBgOpacity(1);
    
    @_header.setActive(MY.conf.M_PROJECTS);
    
    # 選んだやつを設定
    photo = @getObj(MY.conf.P_PHOTO);
    photo.selectImg(pjId);
    photo.setType(MY.conf.TYPE_PHOTO_PROJECT_DETAIL, isPhotoAnimate);
    
    @hideParts(MY.conf.P_TOP, isAnimate, MY.conf.PARTS_HIDE_DELAY)
    @hideParts(MY.conf.P_PJTOP, isAnimate, MY.conf.PARTS_HIDE_DELAY);
    @hideParts(MY.conf.P_ABOUT_C, isAnimate);
    @hideParts(MY.conf.P_ABOUT, isAnimate, 0);
    @getObj(MY.conf.P_PJDETAIL).setPartsId(pjId);
    @showParts(MY.conf.P_PJDETAIL, isAnimate, delay);
    
    if !@_simpleHeader.isShow()
      # ヘッダー固定にしてから隠す
      @_header.setFixMode(true);
      @_header.hide(isAnimate, MY.conf.DETAIL_EXPAND_DELAY);
      
      # 簡易ヘッダーを表示
      @_simpleHeader.show(isAnimate, MY.conf.DETAIL_EXPAND_DELAY);
    
    # URL変更
    @setPageUrl(MY.conf.M_PROJECTS_D, pjId, isChangeUrl);
  
  
  
  # -----------------------------------
  # ヘッダー取得
  # -----------------------------------
  getHeader: =>
    
    return @_header;
  
  
  
  # -----------------------------------
  # SP用グロナビ取得
  # -----------------------------------
  getSpgnavi: =>
    
    return @_spgnavi;
  
  
  
  
  # -----------------------------------
  # resize
  # -----------------------------------
  _resize: (w, h) =>
  
  
  
  # -----------------------------------
  # update
  # -----------------------------------
  _update: =>
  
  
  
  
  
  





module.exports = Contents;