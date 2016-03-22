MyDisplay     = require('../base/MyDisplay');
ResponsiveImg = require('../parts/ResponsiveImg');
DisplayImg    = require('../libs/display/DisplayImg');
ToTopBtn      = require('../parts/ToTopBtn');
ScrollBtn     = require('../parts/ScrollBtn');
AboutGra      = require('./AboutGra');
AboutCaption  = require('./AboutCaption');


# ---------------------------------------------------
# About
# ---------------------------------------------------
class About extends MyDisplay
  
  
  # -----------------------------------------------
  # コンストラクタ
  # -----------------------------------------------
  constructor: ->
    
    super({
      id:"xAbout"
    });
    
    # タイトル
    @_ttl;
    
    # サブタイトル 日本版のみ
    @_subTtl;
    
    # 背景
    @_bg0;
    @_bg1;
    
    # 写真
    @_photo = [];
    
    # テキスト
    @_txt = [];
    
    # 下部エリア
    @_aside = [];
    
    # テキスト スラッシュ
    @_slaTxt = [];
    
    # 見出し
    @_caption = [];
    
    # ロゴ
    @_logo;
    
    # 線
    @_lines = [];
    
    # webGLグラフィック部分
    @_gra;
    
    # スクロールボタン
    @_scrollBtn;
    
    # 一番上に戻るボタン
    @_topBtn;
    
    # 表示フラグ
    @_isShow = false;
  
  
  
  # -----------------------------------------------
  # 初期化
  # -----------------------------------------------
  init: =>
    
    super();
    
    # 背景 1
    @_bg1 = @_makeDisplay();
    @unshift(@_bg1);
    @_bg1.bgColor("#f4f4f4");
    
    # webGLグラフィック部分
    @_gra = new AboutGra();
    @_gra.init();
    
    # 背景 2
    @_bg0 = @_makeDisplay();
    @unshift(@_bg0);
    @_bg0.bgColor("#FFF");
    
    # タイトル
    @_ttl = @_makeResponsiveDisplay(
      "xAboutTtl", 
      MY.f.makeRspsvClass("aboutTtl_0", "aboutTtl_1")
    );
    
    # サブタイトル 日本版のみ
    if MY.f.getLang() == MY.conf.L_JP
      @_subTtl = @_makeResponsiveDisplay(
        "xAboutSubTtl", 
        MY.f.makeRspsvClass("aboutSubTtl_0", "aboutSubTtl_1")
      );
    
    # 写真
    i = 0;
    num = 3;
    while i < num
      img = @_makePartsImg(MY.f.makeRspsvImgSrc(
        [MY.conf.IMG_PATH + "/about/" + String(i) + ".jpg", false],
        [MY.conf.IMG_PATH + "/about/" + String(i) + ".jpg", true]
      ));
      @add(img);
      @_photo.push(img);
      i++;
    
    # テキスト
    i = 0;
    num = 6;
    while i < num
      txt = @_makeTxt("xAboutTxt" + String(i), "aboutTxt" + String(i));
      @_txt.push(txt);
      i++;
    
    # テキスト スラッシュ
    i = 0;
    num = 5;
    while i < num
      txts = @_makeSla();
      @add(txts);
      txts.elm().html("/").addClass("bold");
      @_slaTxt.push(txts);
      i++;
    
    # 見出し
    i = 0;
    num = 6;
    while i < num
      caption = new AboutCaption(i);
      caption.init();
      @add(caption);
      @_caption.push(caption);
      i++;
    
    # aside部分
    i = 0;
    num = 20;
    while i < num
      aside = @_makeTxt("xAboutAside" + String(i), "aboutAside" + String(i));
      @_aside.push(aside);
      i++;
    
    # ロゴ
    @_logo = new ResponsiveImg(MY.f.makeRspsvImgSrc(
      [MY.conf.IMG_PATH + "/parts/logo.png", false],
      [MY.conf.IMG_PATH + "/parts/logo.png", true]
    ));
    @_logo.init();
    @add(@_logo);
    
    # aside用線
    @_lines.push(@_makeLine("#cccccc")); # PROJECT NAME 右
    @_lines.push(@_makeLine("#cccccc")); # MEMBERS 右
    
    # スクロールボタン
    @_scrollBtn = new ScrollBtn(MY.f.makeRspsvImgSrc(
      [MY.conf.IMG_PATH + "/about/scroll.png", false],
      [MY.conf.IMG_PATH + "/about/scroll.png", true]
    ));
    @_scrollBtn.init();
    @_scrollBtn.onClick = @_eClickScrollBtn;
    @add(@_scrollBtn);
    
    # 一番上に戻るボタン
    @_topBtn = new ToTopBtn();
    @_topBtn.init();
    @add(@_topBtn);
    
    @_makeAnimation(2);
    @mask(true);
    @_resize();
    @hide(false);
  
  
  
  # -----------------------------------------------
  # テキスト作成
  # @txtId : ID
  # -----------------------------------------------
  _makeTxt: (domId, txtId) =>
    
    return @_makeResponsiveDisplay(
      domId, 
      MY.f.makeRspsvClass(txtId + "_0", txtId + "_1")
    );
  
  
  
  # -----------------------------------------------
  # スラッシュ
  # -----------------------------------------------
  _makeSla: =>
    
    return @_makeResponsiveDisplay(
      null, 
      MY.f.makeRspsvClass("aboutSla_0", "aboutSla_1")
    );
  
  
  
  # -----------------------------------------------
  # パーツ作成 レスポンシブ用画像
  # @imgs : レスポンシブ用画像リスト
  # -----------------------------------------------
  _makePartsImg: (imgs) =>
    
    parts = new ResponsiveImg(imgs);
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
  # 表示されてるかどうか
  # -----------------------------------
  isShow: =>
    
    return @_isShow;
  
  
  
  # -----------------------------------
  # 隠す
  # -----------------------------------
  hide: (isAnimate, delay) =>
    
    if !isAnimate? then isAnimate = true;
    delay = delay || 0;
    
    @_bg0.opacity(1);
    @_bg0.render();
    
    if @_gra? then @_gra.hide();
    
    @_isShow = false;
    a = @_anm[0];
    a.set({
      y:{from:0, to:@_sh},
      ease:MY.conf.ABOUT_PARAM.EASE,
      delay:delay,
      frame:MY.conf.ABOUT_PARAM.FRAME * 0.5,
      onComplete: =>
        @visible(false);
        @render();
    });
    a.start();
    
    if !isAnimate then a.finish();
    
    if @_gra?
      @_gra.isUpdate = false;
    
    @_update();
  
  
  
  # -----------------------------------
  # 表示
  # -----------------------------------
  show: (isAnimate, delay) =>
    
    if !isAnimate? then isAnimate = true;
    delay = delay || 0;
    
    @_isShow = true;
    @visible(true);
    @render();
    @_resize();
    
    a = @_anm[0];
    a.set({
      y:{from:@_sh, to:0},
      ease:MY.conf.ABOUT_PARAM.EASE,
      delay:delay,
      frame:MY.conf.ABOUT_PARAM.FRAME,
      onComplete: =>
        # 表示しきったら裏の要素は消しておく
        MY.c.setHome();
        @_bg0.opacity(0);
        @_bg0.render();
        if @_gra? then @_gra.show();
    });
    a.start();
    
    # タイトル
    a2 = @_anm[1];
    a2.set({
      opacity:{from:0, to:1},
      y:{from:-40, to:0},
      ease:"outQuad",
      delay:delay + MY.conf.ABOUT_PARAM.FRAME + 30,
      frame:80
    });
    a2.start();
    
    if !isAnimate then a.finish();
    @_update();
  
  
  
  # -----------------------------------
  # イベント スクロールボタンクリック
  # -----------------------------------
  _eClickScrollBtn: =>
    
    t = @_sh - 80;
    MY.scroller.scroll(t, 0);
  
  
  
  # -----------------------------------
  # resize
  # -----------------------------------
  _resize: (w, h) =>
    
    super(w, h);
    
    if !@isVisible()
      return;
    
    # 全体サイズ
    # PC版は最大値あり プロジェクト詳細と同じ
    conW = @_sw - MY.conf.PJDETAIL_X_MARGIN[@_lo] * 2;
    if @_lo == MY.conf.LO_0
      conW = Math.min(conW, MY.conf.PJDETAIL_MAX_WIDTH);
    
    # テキストエリアサイズ プロジェクト詳細と同じ
    txtW = conW - MY.conf.PJDETAIL_TXT_X_MARGIN[@_lo] * 2;
    
    # 見出し、テキスト間のマージン
    capBottomMargin = MY.f.getLOVal(10, 12);
    
    # スマホ、グループ間マージン
    spGrpMargin = 30;
    
    # GLグラフィック
    @_gra.setSize(@_sw, MY.f.getLOVal(@_sh, 180));
    @_gra.xy(~~(@_sw * 0.5 - @_sw * 0.5), MY.f.getLOVal(0, 68));
    @_gra.css().position = MY.f.getLOVal("fixed", "absolute");
    @_gra.render();
    
    # スクロールボタン
    @_scrollBtn._resize();
    @_scrollBtn.visible((@_lo == MY.conf.LO_0));
    @_scrollBtn.xy(~~(@_sw * 0.5 - @_scrollBtn.width() * 0.5), @_sh - @_scrollBtn.height() - 30);
    @_scrollBtn.render();
    
    # タイトル
    @_ttl.update();
    @_ttl.width(conW);
    @_ttl.xy(
      ~~(@_sw * 0.5 - @_ttl.width() * 0.5),
      ~~(@_gra.y() + @_gra.height() * 0.5 - @_ttl.height() * 0.5)
    );
    @_ttl.render();
    
    # サブタイトル
    if @_subTtl?
      @_subTtl.update();
      @_subTtl.width(conW);
      @_subTtl.xy(
        ~~(@_sw * 0.5 - @_subTtl.width() * 0.5),
        @_ttl.bottom() + MY.f.getLOVal(5, 10)
      );
      @_subTtl.render();
      
      ttlHeight = @_subTtl.bottom() - @_ttl.y();
      @_ttl.y(~~(@_gra.y() + @_gra.height() * 0.5 - ttlHeight * 0.5));
      @_ttl.render();
      @_subTtl.y(@_ttl.bottom() + MY.f.getLOVal(5, 10));
      @_subTtl.render();
    
    
    # 写真更新
    for val,i in @_photo
      val.update();
    
    # テキスト更新
    for val,i in @_txt
      val.update();
      
    # テキストスラッシュ更新
    for val,i in @_slaTxt
      val.update();
    
    # 見出し更新
    for val,i in @_caption
      val.update();
    
    # aside更新
    for val,i in @_aside
      val.update();
    
    # 写真0
    @_photo[0].setImgWidth(MY.f.getLOVal(~~(conW * 0.5), conW));
    @_photo[0].xy(MY.f.getLOVal(~~(@_sw * 0.5 - @_photo[0].width()), 0), @_gra.bottom() + MY.f.getLOVal(0, 40));
    @_photo[0].render();
    
    
    # グループ0 PROJECT OBJECTIVE
    # ----------------------------------------------------------
    # 見出し
    @_caption[0].flush(true, MY.f.getLOVal("left", "center"));
    @_caption[0].xy(
      MY.f.getLOVal(@_photo[0].right() + 90, ~~(@_sw * 0.5 - @_caption[0].width() * 0.5)), 
      MY.f.getLOVal(~~(@_photo[0].y() + @_photo[0].height() * 0.5 - (@_txt[0].height() + @_caption[0].height()) * 0.5), @_photo[0].bottom() + 25)
    );
    @_caption[0].render();
    
    if @_lo == MY.conf.LO_0 && @_caption[0].y() < @_gra.bottom()
      @_caption[0].y(@_gra.bottom());
      @_caption[0].render();
    
    # テキスト
    @_txt[0].width(MY.f.getLOVal(~~(conW * 0.5 - 100), txtW));
    @_txt[0].render();
    @_txt[0].xy(
      MY.f.getLOVal(@_caption[0].x(), ~~(@_sw * 0.5 - txtW * 0.5)), 
      @_caption[0].bottom() + capBottomMargin
    );
    @_txt[0].render();
    
    if @_lo == MY.conf.LO_0 && @_caption[0].y() == @_gra.bottom()
      @_photo[0].y(~~(@_caption[0].y() + (@_txt[0].bottom() - @_caption[0].y()) * 0.5 - @_photo[0].height() * 0.5));
      @_photo[0].render();
    
    
    # グループ2 作家による公開制作と展示
    # ----------------------------------------------------------
    # 見出し
    @_caption[2].flush((@_lo == MY.conf.LO_0));
    @_caption[2].xy(~~(@_sw * 0.5 - txtW * 0.5), Math.max(@_txt[0].bottom(), @_photo[0].bottom()) + MY.f.getLOVal(80, spGrpMargin));
    @_caption[2].render();
    
    # テキスト
    @_setTxtSizePos(2, MY.f.getLOVal(txtW * 0.5 - 30, txtW), capBottomMargin);
    
    
    # グループ3 企業内スタッフの参加
    # ----------------------------------------------------------
    # 見出し
    @_caption[3].flush((@_lo == MY.conf.LO_0));
    @_caption[3].xy(
      MY.f.getLOVal(~~(@_sw * 0.5 + 30), @_caption[2].x()), 
      MY.f.getLOVal(@_caption[2].y(), @_txt[2].bottom() + spGrpMargin)
    );
    @_caption[3].render();
    
    # テキスト
    @_setTxtSizePos(3, @_txt[2].width(), capBottomMargin);
    
    
    # グループ4 インスピレーションを得る新しい接点
    # ----------------------------------------------------------
    # 見出し
    @_caption[4].flush((@_lo == MY.conf.LO_0));
    @_caption[4].xy(@_caption[2].x(), Math.max(@_txt[2].bottom(), @_txt[3].bottom()) + MY.f.getLOVal(60, spGrpMargin));
    @_caption[4].render();
    
    # テキスト
    @_setTxtSizePos(4, @_txt[2].width(), capBottomMargin);
    
    
    # グループ5 現代アートの解釈や理解向上
    # ----------------------------------------------------------
    # 見出し
    @_caption[5].flush((@_lo == MY.conf.LO_0));
    @_caption[5].xy(
      MY.f.getLOVal(@_caption[3].x(), @_caption[2].x()), 
      MY.f.getLOVal(@_caption[4].y(), @_txt[4].bottom() + spGrpMargin)
    );
    @_caption[5].render();
    
    # テキスト
    @_setTxtSizePos(5, @_txt[2].width(), capBottomMargin);
    
    # 写真2,3
    if @_lo == MY.conf.LO_0
      @_photo[1].setImgWidth(conW * 0.5);
      @_photo[1].xy(~~(@_sw * 0.5 - @_photo[1].width()), Math.max(@_txt[4].bottom(), @_txt[5].bottom()) + 100);
      @_photo[1].render();
      @_photo[2].setImgWidth(@_photo[1].width());
      @_photo[2].xy(@_photo[1].right(), @_photo[1].y());
      @_photo[2].render();
    else
      @_photo[1].setImgWidth(conW);
      @_photo[1].xy(0, Math.max(@_txt[4].bottom(), @_txt[5].bottom()) + spGrpMargin);
      @_photo[1].render();
      @_photo[2].setImgWidth(@_photo[1].width());
      @_photo[2].xy(@_photo[1].x(), @_photo[1].bottom());
      @_photo[2].render();
    
    
    
    # グループ1 BACKGROUND
    # ----------------------------------------------------------
    # 見出し
    @_caption[1].flush(true, "center");
    @_caption[1].xy(~~(@_sw * 0.5 - @_caption[1].width() * 0.5), @_photo[2].bottom() + MY.f.getLOVal(100, spGrpMargin));
    @_caption[1].render();
    
    # テキスト
    @_txt[1].width(txtW);
    @_txt[1].xy(@_caption[2].x(), @_caption[1].bottom() + capBottomMargin);
    @_txt[1].render();
    
    
    
    
    
    # asideエリア
    # ----------------------------------------------------------
    
    # ロゴ
    @_logo.update();
    @_logo.setImgWidth(MY.f.getLOVal(170, 100));
    @_logo.xy(~~(@_sw * 0.5 - @_logo.width() * 0.5), @_txt[1].bottom() + MY.f.getLOVal(175, 50));
    @_logo.render();
    
    # テキスト11 PROJECT NAME
    @_aside[0].xy(
      MY.f.getLOVal(@_logo.x() - 267, 20), 
      MY.f.getLOVal(@_txt[1].bottom() + 300, @_txt[1].bottom() + 120)
    );
    @_aside[0].render();
    
    # テキスト12 MASS【マス】~
    @_aside[1].width(~~(conW * 0.6));
    @_aside[1].xy(
      @_logo.x() + MY.f.getLOVal(-46, -10),
      @_aside[0].y()
    );
    @_aside[1].render();
    
    # テキスト13 MEMBERS
    @_aside[2].xy(
      @_aside[0].x(),
      MY.f.getLOVal(@_aside[1].bottom() + 60, @_aside[1].bottom() + 25)
    );
    @_aside[2].render();
    
    
    if @_lo == MY.conf.LO_0
      
      cmnBtmMargin = 14;
      slaMargin = 12;
      
      # テキスト プロデューサー
      @_aside[9].xy(@_aside[1].x() + @_aside[4].width() + 10, @_aside[2].y());
      @_aside[9].render();
      @_aside[3].xy(@_aside[1].x(), @_aside[2].y());
      @_aside[3].render();
      @_aside[15].xy(@_aside[9].x() + @_aside[10].width() + 20, @_aside[2].y());
      @_aside[15].render();
      @_slaTxt[0].xy(@_aside[15].x() - slaMargin, @_aside[15].y());
      @_slaTxt[0].render();
      
      # テキスト アートディレクター
      @_aside[4].xy(@_aside[1].x(), @_aside[3].bottom() + cmnBtmMargin);
      @_aside[4].render();
      @_aside[10].xy(@_aside[9].x(), @_aside[4].y());
      @_aside[10].render();
      @_aside[16].xy(@_aside[15].x(), @_aside[4].y());
      @_aside[16].render();
      @_slaTxt[1].xy(@_aside[16].x() - slaMargin, @_aside[16].y());
      @_slaTxt[1].render();
      
      # テキスト ディレクター
      @_aside[5].xy(@_aside[1].x(), @_aside[4].bottom() + cmnBtmMargin);
      @_aside[5].render();
      @_aside[11].xy(@_aside[9].x(), @_aside[5].y());
      @_aside[11].render();
      @_aside[17].xy(@_aside[15].x(), @_aside[5].y());
      @_aside[17].render();
      @_slaTxt[2].xy(@_aside[17].x() - slaMargin, @_aside[17].y());
      @_slaTxt[2].render();
      
      # テキスト プログラム設定
      @_aside[6].xy(@_aside[1].x(), @_aside[5].bottom() + cmnBtmMargin);
      @_aside[6].render();
      @_aside[12].xy(@_aside[9].x(), @_aside[6].y());
      @_aside[12].render();
      @_aside[18].xy(@_aside[15].x(), @_aside[6].y());
      @_aside[18].render();
      @_slaTxt[3].xy(@_aside[18].x() - slaMargin, @_aside[18].y());
      @_slaTxt[3].render();
      
      # テキスト アドバイザー
      @_aside[7].xy(@_aside[1].x(), @_aside[6].bottom() + cmnBtmMargin);
      @_aside[7].render();
      @_aside[13].xy(@_aside[9].x(), @_aside[7].y());
      @_aside[13].render();
      @_aside[19].xy(@_aside[15].x(), @_aside[7].y());
      @_aside[19].render();
      @_slaTxt[4].xy(@_aside[19].x() - slaMargin, @_aside[19].y());
      @_slaTxt[4].render();
      
      # テキスト 協力
      @_aside[8].xy(@_aside[1].x(), @_aside[7].bottom() + cmnBtmMargin);
      @_aside[8].render();
      @_aside[14].xy(@_aside[9].x(), @_aside[8].y());
      @_aside[14].render();
      
      # 線
      @_lines[0].visible(true);
      @_lines[0].size(1, @_aside[1].height());
      @_lines[0].xy(@_aside[0].right() + (@_aside[1].x() - @_aside[0].right()) * 0.5, @_aside[0].y());
      @_lines[0].render();
      @_lines[1].visible(true);
      @_lines[1].size(1, @_aside[8].bottom() - @_aside[2].y());
      @_lines[1].xy(@_lines[0].x(), @_aside[2].y());
      @_lines[1].render();
    
    else
      
      cmnBtmMargin = 4;
      cmnBtmMargin2 = 15;
      slaMargin = 8;
      
      # テキスト プロデューサー
      @_aside[3].xy(@_aside[1].x(), @_aside[2].y());
      @_aside[3].render();
      @_aside[9].xy(@_aside[3].x(), @_aside[3].bottom() + cmnBtmMargin);
      @_aside[9].render();
      @_aside[15].xy(@_aside[9].x() + @_aside[10].width() + 18, @_aside[9].y());
      @_aside[15].render();
      @_slaTxt[0].xy(@_aside[15].x() - slaMargin, @_aside[15].y());
      @_slaTxt[0].render();
      
      # テキスト アートディレクター
      @_aside[4].xy(@_aside[1].x(), @_aside[9].bottom() + cmnBtmMargin2);
      @_aside[4].render();
      @_aside[10].xy(@_aside[3].x(), @_aside[4].bottom() + cmnBtmMargin);
      @_aside[10].render();
      @_aside[16].xy(@_aside[15].x(), @_aside[10].y());
      @_aside[16].render();
      @_slaTxt[1].xy(@_aside[16].x() - slaMargin, @_aside[16].y());
      @_slaTxt[1].render();
      
      # テキスト ディレクター
      @_aside[5].xy(@_aside[1].x(), @_aside[10].bottom() + cmnBtmMargin2);
      @_aside[5].render();
      @_aside[11].xy(@_aside[3].x(), @_aside[5].bottom() + cmnBtmMargin);
      @_aside[11].render();
      @_aside[17].xy(@_aside[15].x(), @_aside[11].y());
      @_aside[17].render();
      @_slaTxt[2].xy(@_aside[17].x() - slaMargin, @_aside[17].y());
      @_slaTxt[2].render();
      
      # テキスト プログラム設定
      @_aside[6].xy(@_aside[1].x(), @_aside[11].bottom() + cmnBtmMargin2);
      @_aside[6].render();
      @_aside[12].xy(@_aside[3].x(), @_aside[6].bottom() + cmnBtmMargin);
      @_aside[12].render();
      @_aside[18].xy(@_aside[15].x(), @_aside[12].y());
      @_aside[18].render();
      @_slaTxt[3].xy(@_aside[18].x() - slaMargin, @_aside[18].y());
      @_slaTxt[3].render();
      
      # テキスト アドバイザー
      @_aside[7].xy(@_aside[1].x(), @_aside[12].bottom() + cmnBtmMargin2);
      @_aside[7].render();
      @_aside[13].xy(@_aside[3].x(), @_aside[7].bottom() + cmnBtmMargin);
      @_aside[13].render();
      @_aside[19].width(~~(@_sw * 0.5));
      @_aside[19].xy(@_aside[15].x(), @_aside[13].y());
      @_aside[19].render();
      @_slaTxt[4].xy(@_aside[19].x() - slaMargin, @_aside[19].y());
      @_slaTxt[4].render();
      
      # テキスト 協力
      @_aside[8].xy(@_aside[1].x(), @_aside[19].bottom() + cmnBtmMargin2);
      @_aside[8].render();
      @_aside[14].xy(@_aside[3].x(), @_aside[8].bottom() + cmnBtmMargin);
      @_aside[14].render();
      
      # 線
      @_lines[0].visible(false);
      @_lines[0].render();
      @_lines[1].visible(false);
      @_lines[1].render();
    
    # 背景
    @_bg0.size(@_sw, MY.f.getLOVal(@_aside[14].bottom() + 240, @_aside[14].bottom() + MY.f.getLOVal(90, 100)));
    @_bg0.render();
    @_bg1.xy(~~(@_sw * 0.5 - conW * 0.5), MY.f.getLOVal(@_txt[1].bottom() + 110, @_logo.y() - 35));
    @_bg1.size(conW, MY.f.getLOVal(@_aside[14].bottom() + 70, @_aside[14].bottom() + 30) - @_bg1.y());
    @_bg1.render();
    
    # 戻るボタン
    @_topBtn._resize();
    @_topBtn.xy(~~(@_sw * 0.5 - @_topBtn.width() * 0.5), @_bg1.bottom() + MY.f.getLOVal(60, 20));
    @_topBtn.render();
    
    # 全体
    @size(@_sw, @_bg0.height());
    @render();
  
  
  
  # -----------------------------------
  # テキストのサイズ、位置
  # -----------------------------------
  _setTxtSizePos: (txtId, w, capBottomMargin) =>
    
    @_txt[txtId].width(w);
    @_txt[txtId].xy(@_caption[txtId].x(), @_caption[txtId].bottom() + capBottomMargin);
    @_txt[txtId].render();
  
  
  
  # -----------------------------------
  # update
  # -----------------------------------
  _update: =>
    
    super();
    
    if !@isVisible() then return;
    
    a = @_anm[0];
    @translate(0, a.get("y"));
    @render();
    
    # タイトル
    @_ttl.opacity(@_anm[1].get("opacity"));
    @_ttl.translate(0, @_anm[1].get("y"));
    @_ttl.render();
    if @_subTtl?
      @_subTtl.opacity(@_anm[1].get("opacity"));
      @_subTtl.translate(0, @_anm[1].get("y"));
      @_subTtl.render();
    
    # スクロールボタン ちょっとスクロールしたら消す
    s = $(window).scrollTop();
    if s >= @_scrollBtn.height()
      to = 0;
    else
      to = 1;
    o = @_scrollBtn.opacity() + (to - @_scrollBtn.opacity()) * 0.2;
    @_scrollBtn.opacity(o);
    @_scrollBtn.render();























module.exports = About;