MyDisplay    = require('../base/MyDisplay');
SpGnaviParts = require('./SpGnaviParts');
HbBtn        = require('./HbBtn');


# ---------------------------------------------------
# SP画面用グロナビ
# ---------------------------------------------------
class SpGnavi extends MyDisplay
  
  
  # -----------------------------------------------
  # コンストラクタ
  # -----------------------------------------------
  constructor: ->
    
    super({
      position:"fixed"
    });
    
    # 背景
    @_bg;
    
    # 本体
    @_parts;
    
    # アニパラ
    @_openParam = {
      frame:40,
      ease:"outExpo"
    };
    
    # 閉じるボタン
    @_closeBtn;
    
    # 表示フラグ
    @isShow = false;
  
  
  
  # -----------------------------------------------
  # 初期化
  # -----------------------------------------------
  init: =>
    
    super();
    
    @elm().css({
      zIndex:10000
    });
    
    # 背景
    @_bg = @_makeDisplay();
    @add(@_bg);
    @_bg.bgColor("#FF0000");
    @_bg.opacity(0);
    @_bg.elm().on("click", @_eClickClose);
    
    # 本体
    @_parts = new SpGnaviParts();
    @_parts.init();
    @add(@_parts);
    
    # 閉じるボタン
    @_closeBtn = new HbBtn();
    @_closeBtn.init();
    @_closeBtn.setLine(null, null, null, "#FFFFFF");
    @_closeBtn.setClose();
    @_closeBtn.onClick = @_eClickClose;
    @add(@_closeBtn);
    
    @_makeAnimation(1);
    
    @mask(true);
    @_resize();
    @close(false);
  
  
  
  # -----------------------------------
  # イベント 閉じるボタン
  # -----------------------------------
  _eClickClose: =>
    
    if @isShow
      @close();
  
  
  
  # -----------------------------------
  # 開く
  # -----------------------------------
  open: (isAnimate, callBack) =>
    
    if !isAnimate? then isAnimate = true;
    @isShow = true;
    
    @visible(true);
    @render();
    @_resize();
    
    # 閉じるボタン
    @_closeBtn.visible(true);
    @_closeBtn.render();
    
    a = @_anm[0];
    a.set({
      x:{from:~~(@width() * 0.5), to:0},
      ease:@_openParam.ease,
      frame:@_openParam.frame,
      onComplete:callBack
    });
    a.start();
    
    if !isAnimate then a.finish();
    @_update();
  
  
  
  # -----------------------------------
  # 閉じる
  # -----------------------------------
  close: (isAnimate, callBack) =>
    
    if !isAnimate? then isAnimate = true;
    @isShow = false;
    
    # 閉じるボタン
    @_closeBtn.visible(false);
    @_closeBtn.render();
    
    a = @_anm[0];
    a.set({
      x:{from:0, to:@width() * 0.5 + 10},
      ease:@_openParam.ease,
      frame:@_openParam.frame,
      onComplete:callBack
    });
    a.start();
    
    if !isAnimate then a.finish();
    @_update();
  
  
  
  # -----------------------------------
  # resize
  # -----------------------------------
  _resize: (w, h) =>
    
    super(w, h);
    
    # 全体
    @size(@_sw, @_sh + 200);
    @render();
    
    # パーツ
    @_parts.resize(@_sw, @_sh);
    @_parts.xy(~~(@width() * 0.5), 0);
    @_parts.render();
    
    # 背景
    @_bg.size(@width(), @height());
    @_bg.render();
    
    # 閉じるボタン
    @_closeBtn.xy(@_sw - @_closeBtn.width(), ~~(MY.conf.HEADER_HEIGHT[@_lo] * 0.5 - @_closeBtn.height() * 0.5));
    @_closeBtn.render();
  
  
  
  # -----------------------------------
  # update
  # -----------------------------------
  _update: =>
    
    super();
    
    @_parts.translate(@_anm[0].get("x"), 0);
    @_parts.render();
    
    if !@isShow && @_anm[0].isComplete()
      @visible(false);
      @render();













module.exports = SpGnavi;