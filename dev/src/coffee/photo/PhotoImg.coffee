MyDisplay = require('../base/MyDisplay');
ResponsiveImg = require('../parts/ResponsiveImg');


# ---------------------------------------------------
# 写真 / 画像単体
# ---------------------------------------------------
class PhotoImg extends MyDisplay
  
  
  # -----------------------------------------------
  # コンストラクタ
  # -----------------------------------------------
  constructor: (imgId) ->
    
    super({
      resize:false
    });
    
    # 画像ID
    @_imgId = imgId;
    
    # 画像
    @_img;
    
    # スライド用パラメータ
    @sp = {
      x:0,
      baseX:0
    };
  
  
  
  # -----------------------------------------------
  # 初期化
  # -----------------------------------------------
  init: =>
    
    super();
    
    # 写真
    src = MY.conf.IMG_PATH + "/photo/" + String(@_imgId) + ".jpg";
    @_img = new ResponsiveImg(
      MY.f.makeRspsvImgSrc(
        [src, false], 
        [src, true]
      )
    );
    @_img.init();
    @add(@_img);
    
    
    @mask(true);
    @render();
    
    @_resize();
  
  
  
  # -----------------------------------
  # resize 外部から
  # -----------------------------------
  resize: (w, h) =>
    
    @_resize(w, h);
    
    @_img.update();
    
    # 大きさ変更
    # プロジェクト詳細時の大きさをベースに
    baseW = @_sw + MY.conf.TOP_SLIDE_DIST[@_lo];
    img = @_img.getNowImg();
    imgSize = img.orgSize();
    imgW = baseW;
    imgH = ~~(imgSize.h * (imgW / imgSize.w));
    if imgH < @_sh
      imgH = @_sh;
      imgW = ~~(imgSize.w * (imgH / imgSize.h));
    img.size(imgW, imgH);
    img.render();
    
    @size(baseW, @_sh);
    @render();
    
    # 画像真ん中に
    @_img.xy(~~(@width() * 0.5 - imgW * 0.5), ~~(@height() * 0.5 - imgH * 0.5));
    @_img.render();
  
  
  
  # -----------------------------------
  # update
  # -----------------------------------
  _update: =>
    
    super();





















module.exports = PhotoImg;