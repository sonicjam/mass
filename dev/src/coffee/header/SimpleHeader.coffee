MyDisplay = require('../base/MyDisplay');
Rect      = require('../libs/object/Rect');
SimpleBtn = require('../parts/SimpleBtn');


# ---------------------------------------------------
# 簡易ヘッダー 詳細画面で出てくるやつ
# ---------------------------------------------------
class SimpleHeader extends MyDisplay
  
  
  # -----------------------------------------------
  # コンストラクタ
  # -----------------------------------------------
  constructor: ->
    
    super();
    
    # メニューボタン
    @_menuBtn;
    
    # 次へボタン
    @_nextBtn;
    
    # 表示フラグ
    @_isShow = false;
  
  
  
  # -----------------------------------------------
  # 初期化
  # -----------------------------------------------
  init: =>
    
    super();
    
    # メニューボタン
    @_menuBtn = new SimpleBtn(MY.f.makeRspsvImgSrc(
      [MY.conf.IMG_PATH + "/header/menuBtn0.png", false], 
      [MY.conf.IMG_PATH + "/header/menuBtn1.png", true]
    ));
    @_menuBtn.init();
    @_menuBtn.onClick = @_eClickMenuBtn;
    @add(@_menuBtn);
    
    # 次へボタン
    @_nextBtn = new SimpleBtn(MY.f.makeRspsvImgSrc(
      [MY.conf.IMG_PATH + "/header/nextBtn0.png", false], 
      [MY.conf.IMG_PATH + "/header/nextBtn1.png", true]
    ));
    @_nextBtn.init();
    @_nextBtn.onClick = @_eClickNextBtn;
    @add(@_nextBtn);
    
    @_makeAnimation(1);
    
    @mask(true);
    @_resize();
    @hide(false);
  
  
  
  # -----------------------------------------------
  # イベント メニューボタンクリック
  # -----------------------------------------------
  _eClickMenuBtn: =>
    
    # ヘッダー出す
    if @_lo == MY.conf.LO_0
      MY.c.getHeader().show(true, 0, 40);
      MY.c.getHeader().onMouseLeave = @_eMouseLeaveMenu; # メニューからマウス離れたら消す
    else
      MY.c.getHeader().ctrlGnavi(true);
  
  
  
  # -----------------------------------------------
  # イベント メニューからマウスが離れた
  # -----------------------------------------------
  _eMouseLeaveMenu: =>
    
    MY.c.getHeader().hide(true, 0, 40);
    MY.c.getHeader().onMouseLeave = null; # 解除しておく
  
  
  
  # -----------------------------------------------
  # イベント 次へボタンクリック
  # -----------------------------------------------
  _eClickNextBtn: =>
    
    # 大きさ戻してから
    MY.c.getObj(MY.conf.P_PHOTO).resetParts(=>
      # プロジェクトTOPへ
      MY.c.setPage(MY.conf.M_PROJECTS);
    );
    
    
    
#     # スクロール位置を一番上に
#     MY.scroller.scroll(0, 0, null, false);
#     MY.c.getObj(MY.conf.P_PHOTO).setOffset(0, 0, false);
#     
#     # 次の詳細記事へ
#     MY.delay.add(=>
#       next = MY.c.getObj(MY.conf.P_PJDETAIL).getNextId();
#       MY.c.setPjDetail(next, true);
#     , 2);
  
  
  
  # -----------------------------------------------
  # 表示されてるかどうか
  # -----------------------------------------------
  isShow: =>
    
    return @_isShow;
  
  
  
  # -----------------------------------------------
  # 表示
  # -----------------------------------------------
  show: (isAnimate, delay) =>
    
    if !isAnimate? then isAnimate = true;
    delay = delay || 0;
    @_isShow = true;
    
    @visible(true);
    
    a = @_anm[0];
    a.set({
      y:{from:-@height(), to:0},
      frame:MY.conf.DETAIL_EXPAND_FRAME,
      delay:delay,
      ease:MY.conf.DETAIL_EXPAND_EASE
    });
    a.start();
    
    if !isAnimate then a.finish();
    @_update();
  
  
  
  # -----------------------------------------------
  # 消す
  # -----------------------------------------------
  hide: (isAnimate, delay) =>
    
    if !isAnimate? then isAnimate = true;
    delay = delay || 0;
    @_isShow = false;
    
    a = @_anm[0];
    a.set({
      y:{from:0, to:-@height()},
      frame:MY.conf.DETAIL_EXPAND_FRAME,
      delay:delay,
      ease:MY.conf.DETAIL_EXPAND_EASE
    });
    a.start();
    
    if !isAnimate then a.finish();
    @_update();
  
  
  
  # -----------------------------------
  # resize
  # -----------------------------------
  _resize: (w, h) =>
    
    super(w, h);
    
    # メニューボタン
    @_menuBtn.xy(MY.f.getLOVal(@_sw - 100, @_sw - 50), MY.f.getLOVal(50, 10));
    @_menuBtn.render();
    
    # 次へボタン
    @_nextBtn.xy(MY.f.getLOVal(@_sw - 160, 10), @_menuBtn.y());
    @_nextBtn.render();
    
    # 全体
    @css().position = MY.f.getLOVal("fixed", "absolute");
    @size(@_sw, MY.f.getLOVal(100, 50));
    @render();
  
  
  
  # -----------------------------------
  # update
  # -----------------------------------
  _update: =>
    
    super();
    
    @translate(0, @_anm[0].get("y"));
    @render();
    
    if !@_isShow && @_anm[0].isComplete()
      @visible(false);
      @render();
  
  
  
  # -----------------------------------------------
  # 破棄
  # -----------------------------------------------
  dispose: =>
    
    
    super();













module.exports = SimpleHeader;