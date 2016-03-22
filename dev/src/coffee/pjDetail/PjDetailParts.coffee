MyDisplay     = require('../base/MyDisplay');
ResponsiveImg = require('../parts/ResponsiveImg');
ToTopBtn      = require('../parts/ToTopBtn');
NextBtn       = require('../parts/NextBtn');
ScrollImgMgr  = require('../parts/ScrollImgMgr');
SimpleBtn     = require('../parts/SimpleBtn');
PjDetailMovie = require('./PjDetailMovie');


# ---------------------------------------------------
# プロジェクト詳細 / パーツ
# ---------------------------------------------------
class PjDetailParts extends MyDisplay
  
  
  # -----------------------------------------------
  # コンストラクタ
  # -----------------------------------------------
  constructor: (partsId, domId) ->
    
    super({
      id:domId,
      resize:false
    });
    
    # パーツID
    @_partsId = partsId;
    
    # 背景
    @_bg;
    
    # 線
    @_line = [];
    
    # vol
    @_vol;
    
    # タイトル
    @_ttl0;
    @_ttl1;
    
    # 日付
    @_date;
    
    # シェアテキスト
    @_shareTxt;
    
    # SNS
    @_fb;
    @_tw;
    
    # スクロール促すボタン
    @_sBtn;
    
    # テキスト
    @_txt0;
    @_txt1;
    @_txt2;
    
    # 映像サムネイル
    @_videoThumb;
    
    # サブタイトル
    @_sub0;
    @_sub1;
    
    # プロフィール
    @_prfImg;
    @_prfName;
    @_prfTxt;
    
    # ギャラリー写真
    @_photo = [];
    
    # 線
    @_lines = [];
    
    # 一番上に戻るボタン
    @_topBtn;
    
    # ページ送りボタン
    @_nextBtn;
    @_prevBtn;
    
    # スクロールに合わせて表示する画像
    @_scrollImgs = [];
  
  
  
  # -----------------------------------------------
  # 初期化
  # -----------------------------------------------
  init: =>
    
    super();
    
    # 画像パス
    imgPath = MY.conf.IMG_PATH + "/pjDetail/" + String(MY.f.getConNum() - 1 - @_partsId);
    
    # 背景
    @_bg = @_makeDisplay();
    @unshift(@_bg);
    @_bg.bgColor("#FFF");
    
    # vol
    @_vol = @_makeParts("Vol");
    
    # タイトル
    @_ttl0 = @_makeParts("Ttl0");
    @_ttl1 = @_makeParts("Ttl1");
    
    # 日付
    @_date = @_makeParts("Date");
    
    # シェアテキスト
    @_shareTxt = @_makeResponsiveDisplay(null, MY.f.makeRspsvClass("pjDetailShareTxt_0", "pjDetailShareTxt_1"));
    #@_shareTxt = @_makeDisplay();
    @add(@_shareTxt);
    @_shareTxt.elm().addClass("massFont noBr bold");
    @_shareTxt.text("SHARE");
    
    # SNS
    @_fb = @_makePartsImg("Fb", MY.f.makeRspsvImgSrc(
      [MY.conf.IMG_PATH + "/pjDetail/fb0.png", false],
      [MY.conf.IMG_PATH + "/pjDetail/fb1.png", true]
    ));
    @_tw = @_makePartsImg("Tw", MY.f.makeRspsvImgSrc(
      [MY.conf.IMG_PATH + "/pjDetail/tw0.png", false],
      [MY.conf.IMG_PATH + "/pjDetail/tw1.png", true]
    ));
    
    # スクロール促すボタン
    @_sBtn = new SimpleBtn(MY.f.makeRspsvImgSrc(
      [MY.conf.IMG_PATH + "/parts/scroll.png", false], 
      [MY.conf.IMG_PATH + "/parts/scroll.png", true]
    ));
    @_sBtn.init();
    @add(@_sBtn);
    @_sBtn.onClick = @_eClickScrollBtn;
    @_sBtn.type = 1;
    
    # テキスト
    @_txt0 = @_makeParts("Txt0");
    @_txt1 = @_makeParts("Txt1");
    @_txt2 = @_makeParts("Txt2");
    
    # 映像サムネイル
    @_videoThumb = new PjDetailMovie(@elm().attr("data-ycode"));
    @_videoThumb.init();
    @add(@_videoThumb);
    
    # サブタイトル
    @_sub0 = @_makeParts("Sub0");
    @_sub1 = @_makeParts("Sub1");
    
    # プロフィール
    @_prfImg = @_makePartsImg("ProfImg", MY.f.makeRspsvImgSrc(
      [imgPath + "/prof.jpg", false], 
      [imgPath + "/prof.jpg", true]
    ));
    @_prfName = @_makeParts("ProfName");
    @_prfTxt = @_makeParts("ProfTxt");
    
    # ギャラリー写真 
    i = 0;
    num = Number(@elm().attr("data-photoNum"));
    while i < num
      photo = new ResponsiveImg(MY.f.makeRspsvImgSrc(
        [imgPath + "/photo" + String(i) + ".jpg", false],
        [imgPath + "/photo" + String(i) + ".jpg", true]
      ));
      photo.init();
      @add(photo);
      @_photo.push(photo);
      i++;
    
    # 線
    @_lines.push(@_makeLine("#000")); # Vol下
    @_lines.push(@_makeLine("#cccccc"));
    @_lines.push(@_makeLine("#cccccc"));
    @_lines.push(@_makeLine());
    @_lines.push(@_makeLine());
    @_lines.push(@_makeLine("#000")); # シェア下
    
    # 一番上に戻るボタン
    @_topBtn = new ToTopBtn();
    @_topBtn.init();
    @add(@_topBtn);
    
    # ページ送りボタン
    @_nextBtn = new NextBtn(true);
    @_nextBtn.init();
    @_nextBtn.onClick = @_eNextDetail;
    @add(@_nextBtn);
    @_prevBtn = new NextBtn(false);
    @_prevBtn.init();
    @_prevBtn.onClick = @_ePrevDetail;
    @add(@_prevBtn);
    
    if @_partsId == 0
      @_nextBtn.visible(false);
      @_nextBtn.render();
    
    if @_partsId == MY.f.getConNum() - 1
      @_prevBtn.visible(false);
      @_prevBtn.render();
    
    # スクロールに合わせて表示させる画像を設定
    @_makeScrollImgs();
    
    @resize();
  
  
  
  # -----------------------------------------------
  # イベント スクロールアイコンクリック
  # -----------------------------------------------
  _eClickScrollBtn: =>
    
    t = $(window).scrollTop() + @_sh - MY.conf.PJDETAIL_OFFSET_Y[@_lo];
    MY.scroller.scroll(t, 0);
  
  
  
  # -----------------------------------------------
  # イベント 次の記事へ
  # -----------------------------------------------
  _eNextDetail: =>
    
    # スクロール位置を一番上に
    MY.scroller.scroll(0, 0, =>
      MY.delay.add(=>
        next = @_partsId - 1;
        MY.c.setPjDetail(next, true);
      , 10);
    , true);
    MY.c.getObj(MY.conf.P_PHOTO).setOffset(0, 0, false);
  
  
  
  # -----------------------------------------------
  # イベント 前の記事へ
  # -----------------------------------------------
  _ePrevDetail: =>
    
    # スクロール位置を一番上に
    MY.scroller.scroll(0, 0, =>
      MY.delay.add(=>
        next = @_partsId + 1;
        MY.c.setPjDetail(next, true);
      , 10);
    , true);
    MY.c.getObj(MY.conf.P_PHOTO).setOffset(0, 0, false);
  
  
  
  # -----------------------------------------------
  # スクロールに合わせて表示させる画像を設定
  # -----------------------------------------------
  _makeScrollImgs: =>
    
    for val,i in @_photo
      val.scrollImgMgr = new ScrollImgMgr(val);
      @_scrollImgs.push(val);
  
  
  
  # -----------------------------------------------
  # パーツ作成
  # @name : 名前
  # -----------------------------------------------
  _makeParts: (name) =>
    
    obj = $("#" + @_id + " .pjDetail" + name);
    if !obj? || obj.length <= 0
      return null;
    else
      addId = @_id + "_" + name;
      obj.attr("id", addId);
      return @_makeResponsiveDisplay(addId, MY.f.makeRspsvClass("pjDetail" + name + "_0", "pjDetail" + name + "_1"));
  
  
  
  # -----------------------------------------------
  # パーツ作成 レスポンシブ用画像
  # @name : 名前
  # @imgs : レスポンシブ用画像リスト
  # -----------------------------------------------
  _makePartsImg: (name, imgs) =>
    
    obj = $("#" + @_id + " .pjDetail" + name);
    if !obj? || obj.length <= 0
      return null;
    else
      addId = @_id + "_" + name;
      obj.attr("id", addId);
      parts = new ResponsiveImg(imgs, {id:addId});
      parts.init();
      return parts;
  
  
  
  # -----------------------------------------------
  # 線の作成
  # -----------------------------------------------
  _makeLine: (color) =>
    
    if !color?
      color = "#000000";
    
    line = @_makeDisplay();
    @add(line);
    line.bgColor(color);
    
    return line;
  
  
  
  # -----------------------------------
  # ようつべ作成仕直し
  # -----------------------------------
  remakeMovie: =>
    
    @_videoThumb.remake();
  
  
  
  # -----------------------------------
  # ようつべ止め
  # -----------------------------------
  stopMovie: =>
    
    @_videoThumb.stop();
  
  
  
  # -----------------------------------
  # 隠す
  # -----------------------------------
  hide: (isAnimate, delay) =>
    
    # ようつべ止めておく
    @stopMovie();
    
    @visible(false);
    @render();
  
  
  
  # -----------------------------------
  # 表示
  # -----------------------------------
  show: (isAnimate, delay) =>
    
    @visible(true);
    @render();
    
    for val,i in @_scrollImgs
      val.scrollImgMgr.reset();
      
    @resize();
  
  
  
  # -----------------------------------
  # resize
  # -----------------------------------
  resize: (w, h) =>
    
    @_resize(w, h);
    
    if !@isVisible()
      return;
    
    # 全体サイズ
    # PC版は最大値あり
    conW = @_sw - MY.conf.PJDETAIL_X_MARGIN[@_lo] * 2;
    if @_lo == MY.conf.LO_0
      conW = Math.min(conW, MY.conf.PJDETAIL_MAX_WIDTH);
    
    # テキストエリアサイズ
    txtW = conW - MY.conf.PJDETAIL_TXT_X_MARGIN[@_lo] * 2;
    
    # vol
    @_vol.update();
    if @_lo == MY.conf.LO_0
      @_vol.xy(60, MY.conf.PJDETAIL_TXT_TOP_MARGIN[@_lo]);
    else
      @_vol.xy(20, MY.conf.PJDETAIL_TXT_X_MARGIN[@_lo]);
    @_vol.render();
    
    # タイトル
    @_ttl0.update();
    @_ttl1.update();
    if @_lo == MY.conf.LO_0
      @_ttl0.xy(MY.conf.PJDETAIL_TXT_X_MARGIN[@_lo], @_vol.y() - 4);
      @_ttl0.render();
      @_ttl1.xy(@_ttl0.x(), @_ttl0.bottom() + 10);
      @_ttl1.render();
    else
      @_ttl0.xy(@_vol.x(), @_vol.bottom() + 18);
      @_ttl0.render();
      @_ttl1.xy(@_vol.x(), @_ttl0.bottom() + 9);
      @_ttl1.render();
    
    # 日付
    @_date.update();
    @_date.render();
    if @_lo == MY.conf.LO_0
      @_date.xy(conW - MY.conf.PJDETAIL_TXT_X_MARGIN[@_lo] - @_date.width(), @_vol.y() - 3);
    else
      @_date.xy(@_vol.x(), @_ttl1.bottom() + 10);
    @_date.render();
    
    # テキスト1
    @_txt0.update();
    if @_lo == MY.conf.LO_0
      @_txt0.width(txtW);
      @_txt0.xy(~~(conW * 0.5 - @_txt0.width() * 0.5), @_ttl1.bottom() + 60);
      @_txt0.render();
    else
      @_txt0.width(txtW);
      @_txt0.xy(~~(conW * 0.5 - @_txt0.width() * 0.5), @_date.bottom() + 30);
      @_txt0.render();
    
    # 映像サムネイル
    @_videoThumb.setSize(txtW);
    @_videoThumb.xy(
      ~~(conW * 0.5 - @_videoThumb.width() * 0.5), 
      @_txt0.bottom() + MY.f.getLOVal(60, 30)
    );
    @_videoThumb.render();
    
    # テキスト2~3
    @_txt1.update();
    @_txt2.update();
    if @_lo == MY.conf.LO_0
      @_txt1.width(@_txt0.width());
      @_txt1.xy(@_txt0.x(), @_videoThumb.bottom() + 60);
      @_txt1.render();
      
      @_txt2.width(@_txt0.width());
      @_txt2.xy(@_txt0.x(), @_txt1.bottom() + 40);
      @_txt2.render();
    else
      @_txt1.width(@_txt0.width());
      @_txt1.xy(@_txt0.x(), @_videoThumb.bottom() + 30);
      @_txt1.render();
      
      @_txt2.width(@_txt0.width());
      @_txt2.xy(@_txt0.x(), @_txt1.bottom() + 30);
      @_txt2.render();
    
    # サブタイトル 0
    @_sub0.update();
    @_sub0.xy(~~(conW * 0.5 - @_sub0.width() * 0.5), @_txt2.bottom() + MY.f.getLOVal(160, 80));
    @_sub0.render();
    
    # プロフィール
    @_prfImg.update();
    @_prfName.update();
    @_prfTxt.update();
    @_prfImg.setImgWidth(MY.f.getLOVal(~~(conW * 0.5), txtW));
    @_prfName.width(@_prfImg.width() - MY.f.getLOVal(100, 0));
    @_prfName.render();
    @_prfTxt.width(@_prfName.width());
    @_prfTxt.render();
    
    # PCのみ
    profAllTxtHeight = @_prfName.height() + 20 + @_prfTxt.height();
    profBaseH = Math.max(profAllTxtHeight, @_prfImg.height());
    profStartY = @_sub0.bottom() + 120;
    
    @_prfImg.xy(
      MY.f.getLOVal(0, MY.conf.PJDETAIL_TXT_X_MARGIN[@_lo]), 
      MY.f.getLOVal(~~(profStartY + profBaseH * 0.5 - @_prfImg.height() * 0.5), @_sub0.bottom() + 50)
    );
    @_prfImg.render();
    
    @_prfName.xy(
      MY.f.getLOVal(@_prfImg.right() + 60, @_prfImg.x()), 
      MY.f.getLOVal(~~(profStartY + profBaseH * 0.5 - profAllTxtHeight * 0.5), @_prfImg.bottom() + 25)
    );
    @_prfName.render();
    
    @_prfTxt.xy(
      @_prfName.x(),
      @_prfName.bottom() + MY.f.getLOVal(20, 15)
    );
    @_prfTxt.render();
    
    # サブタイトル 1
    @_sub1.update();
    @_sub1.xy(
      ~~(conW * 0.5 - @_sub1.width() * 0.5), 
      MY.f.getLOVal(Math.max(@_prfImg.bottom(), @_prfTxt.bottom()) + 150, @_prfTxt.bottom() + 75)
    );
    @_sub1.render();
    
    # ギャラリー写真
    photoY = @_sub1.bottom() + MY.f.getLOVal(120, 50);
    for val,i in @_photo
      val.update();
      val.setImgWidth(conW);
      val.xy(0, photoY);
      val.render();
      photoY = val.bottom() + MY.f.getLOVal(50, 10);
    
    # SNS
    @_fb.update();
    @_tw.update();
    @_fb.xy(~~(conW * 0.5 - @_fb.width() * 0.5) - MY.f.getLOVal(36, 40), @_photo[@_photo.length-1].bottom() + MY.f.getLOVal(146, 80));
    @_fb.render();
    @_tw.xy(~~(conW * 0.5 - @_tw.width() * 0.5) + MY.f.getLOVal(36, 40), @_fb.y());
    @_tw.render();
    
    # シェアテキスト
    @_shareTxt.update();
    @_shareTxt.xy(~~(conW * 0.5 - @_shareTxt.width() * 0.5), @_photo[@_photo.length-1].bottom() + MY.f.getLOVal(100, 50));
    @_shareTxt.render();
    
    # 線
    if @_lo == MY.conf.LO_0 
      
      # Vol下
      @_lines[0].size(14, 2);
      @_lines[0].xy(@_vol.x(), @_vol.bottom() + 9);
      @_lines[0].render();
      
      @_lines[1].visible(false);
      @_lines[1].size(@_lines[0].width(), @_lines[0].height());
      @_lines[1].xy(@_date.x() - 40, @_lines[0].y());
      @_lines[1].render();
      
      # 日付左
      @_lines[2].visible(true);
      @_lines[2].size(1, @_date.height() + 6);
      @_lines[2].xy(@_date.x() - 40, @_date.y());
      @_lines[2].render();
      
      # シェア下
      #@_lines[5].visible(true);
      @_lines[5].size(14, 2);
      @_lines[5].xy(~~(conW * 0.5 - @_lines[5].width() * 0.5), @_fb.y() - 16);
      @_lines[5].render();
      
      @_lines[3].size(1, 60);
      @_lines[3].xy(@_sub0.x() + ~~(@_sub0.width() * 0.5), @_sub0.bottom() + 30);
      @_lines[3].render();
      
      @_lines[4].size(@_lines[3].width(), @_lines[3].height());
      @_lines[4].xy(@_sub1.x() + ~~(@_sub1.width() * 0.5), @_sub1.bottom() + 30);
      @_lines[4].render();
      
    else
      
      # Vol下
      @_lines[0].size(7, 1);
      @_lines[0].xy(@_vol.x(), @_vol.bottom() + 5);
      @_lines[0].render();
      
      @_lines[1].visible(false);
      @_lines[1].xy(0, 0);
      @_lines[1].size(0, 0);
      @_lines[1].render();
      
      @_lines[2].visible(false);
      @_lines[2].render();
      
      @_lines[3].size(1, 30);
      @_lines[3].xy(@_sub0.x() + ~~(@_sub0.width() * 0.5), @_sub0.bottom() + 10);
      @_lines[3].render();
      
      @_lines[4].size(@_lines[3].width(), @_lines[3].height());
      @_lines[4].xy(@_sub1.x() + ~~(@_sub1.width() * 0.5), @_sub1.bottom() + 10);
      @_lines[4].render();
      
      # シェア下
      @_lines[5].size(10, 1);
      @_lines[5].xy(~~(conW * 0.5 - @_lines[5].width() * 0.5), @_shareTxt.bottom() + 10);
      @_lines[5].render();
    
    # スクロール促すボタン
    @_sBtn._resize();
    @_sBtn.visible((@_lo == MY.conf.LO_0));
    @_sBtn.xy(MY.f.getLOVal(conW - @_sBtn.width() - 40, 0), @_vol.y());
    @_sBtn.render();
    
    # 背景
    @_bg.size(conW, @_photo[@_photo.length - 1].bottom() + MY.f.getLOVal(420, 234));
    @_bg.render();
    
    # 一番上に戻るボタン
    @_topBtn._resize();
    @_topBtn.xy(~~(conW * 0.5 - @_topBtn.width() * 0.5), @_photo[@_photo.length-1].bottom() + MY.f.getLOVal(313, 174));
    @_topBtn.render();
    
    # 次へボタン
    @_nextBtn.resize(@_sw, @_sh);
    @_nextBtn.xy(conW - (@_nextBtn.width() + MY.f.getLOVal(0, 10)), @_topBtn.bottom() - @_nextBtn.height());
    @_nextBtn.render();
    
    # 前へボタン
    @_prevBtn.resize(@_sw, @_sh);
    @_prevBtn.xy(MY.f.getLOVal(0, 10), @_topBtn.bottom() - @_prevBtn.height());
    @_prevBtn.render();
    
    # 全体位置
    if MY.u.isFF() then @mask(true);
    @size(conW, @_bg.height());
    @xy(~~(@_sw * 0.5 - conW * 0.5), 0);
    @render();
    
    # SPはスクロールに合わせて表示しない
    for val,i in @_scrollImgs
      val.scrollImgMgr.mgrScroll((@_lo == MY.conf.LO_0));
      val.scrollImgMgr.setTriggerVal(val.y() + @_sh - MY.conf.PJDETAIL_OFFSET_Y[@_lo]);
  
  
  
  # -----------------------------------
  # update
  # -----------------------------------
  _update: =>
    
    super();
    
    if !@isVisible() then return;
    
    st = $(window).scrollTop();
    s = st + @_sh * 0.6;
    for val,i in @_scrollImgs
      val.scrollImgMgr.updateScroll(s);
    
    if st >= @_sh * 0.15
      to = 0;
    else
      to = 1;
    o = @_sBtn.opacity() + (to - @_sBtn.opacity()) * 0.2;
    @_sBtn.opacity(o);
    @_sBtn.render();






















module.exports = PjDetailParts;