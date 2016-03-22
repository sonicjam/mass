MyDisplay = require('../base/MyDisplay');


# ---------------------------------------------------
# プロジェクト詳細 / youtube映像
# ---------------------------------------------------
class PjDetailMovie extends MyDisplay
  
  
  # -----------------------------------------------
  # コンストラクタ
  # -----------------------------------------------
  constructor: (yCode) ->
    
    super({
      resize:false,
      update:false
    });
    
    # youtubeID
    @_yCode = yCode;
  
  
  
  # -----------------------------------------------
  # 初期化
  # -----------------------------------------------
  init: =>
    
    super();
    
    # youtubeタグ追加
    @_addYTTag();
    
    @mask(true);
  
  
  
  # -----------------------------------------------
  # youtubeタグ追加
  # -----------------------------------------------
  _addYTTag: (w, h) =>
    
    if !w?
      w = h = 100;
    
    # 一旦消す
    @elm().empty();
    
    # 幅基準で16:9
    h = ~~(9 * w / 16);
    
    # パラメータ設定
    html = MY.conf.PJ_YOUTUBE;
    html = html.replace("<width>", w);
    html = html.replace("<height>", h);
    html = html.replace("<ycode>", @_yCode);
    
    # DOMに追加
    @elm().html(html);
  
  
  
  # -----------------------------------
  # サイズ変更
  # -----------------------------------
  setSize: (w) =>
    
    # 幅同じならスルー
    if @width() == w
      return

    # 幅基準で16:9
    h = ~~(9 * w / 16);
    
    elm = $("#" + @_id + " iframe");
    elm.attr({
      width:w,
      height:h
    });
    
    # サイズ
    @size(w, h);
    @render();
  
  
  
  # -----------------------------------
  # 作り直し
  # -----------------------------------
  remake: =>
    
    @_addYTTag(@width(), @height());
  
  
  
  # -----------------------------------
  # 停止
  # -----------------------------------
  stop: =>
    
    # 一旦消す
    @elm().empty();
    
    #y = $("#" + @_id + " iframe")[0].contentWindow;
    #y.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
























module.exports = PjDetailMovie;