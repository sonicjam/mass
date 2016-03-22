MyDisplay  = require('../base/MyDisplay');
DisplayImg = require('../libs/display/DisplayImg');


# ---------------------------------------------------
# レスポンシブ用画像オブジェクト
# ---------------------------------------------------
class ResponsiveImg extends MyDisplay
  
  
  # -----------------------------------------------
  # コンストラクタ
  # @src : レスポンシブ用画像src [][src, isRetina]
  # -----------------------------------------------
  constructor: (src, option) ->
    
    if !option?
      option = {};
    
    option.resize = false;
    option.update = false;
    
    super(option);
    
    @_srcList = src;
    @_img = [];
  
  
  
  # -----------------------------------------------
  # 初期化
  # -----------------------------------------------
  init: =>
    
    super();
  
  
  
  # -----------------------------------------------
  # 画像作成
  # -----------------------------------------------
  _makeImg: (type) =>
    
    img = new DisplayImg({
      src:@_srcList[type][0],
      retina:@_srcList[type][1]
    });
    img.onLoad = MY.resize.refresh;
    img.init();
    img.useTransform(false);
    @add(img);
    
    @_img[type] = img;
  
  
  # -----------------------------------------------
  # レイアウトタイプに合わせて更新
  # -----------------------------------------------
  getNowImg: =>
    
    return @_img[MY.f.getLOType()];
  
  
  
  # -----------------------------------------------
  # レイアウトタイプに合わせて更新
  # -----------------------------------------------
  update: =>
    
    type = MY.f.getLOType();
    
    # なかったら作成
    if !@_img[type]?
      @_makeImg(type);
    
    for val,i in @_img
      if val?
        val.visible((i == type));
        val.render();
        
        if i == type
          @size(val.width(), val.height());
          @render();
  
  
  
  # -----------------------------------------------
  # 画像のサイズを幅基準で設定
  # -----------------------------------------------
  setImgWidth: (w) =>
    
    nowImg = @getNowImg();
    if nowImg?
      nowSize = nowImg.orgSize();
      imgW = w;
      imgH = ~~(nowSize.h * (imgW / nowSize.w));
      nowImg.size(imgW, imgH);
      nowImg.render();
      @size(nowImg.width(), nowImg.height());
      @render();


















module.exports = ResponsiveImg;