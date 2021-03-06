AniParam = require('../../base/AniParam');


# ------------------------------------
# DOM要素管理クラス
# ------------------------------------
class Display
  
  # ------------------------------------
  # コンストラクタ
  # ------------------------------------
  # @option.id       : 管理するDOMのID名 無い場合新たにdiv要素を作成
  # @option.isRemove : dispose時に要素自体を削除するかどうかのフラグ def..true
  # @option.position : 初期position(CSS)の値 def.."absolute"
  # ------------------------------------
  constructor: (option) ->
    
    @_option = option || {};
    
    # ID
    @_id = @_option.id || "";
    
    # jQuery要素
    @_elm;
    
    # 要素名
    @_elmName = @_option.elmName || "div";
    
    # 要素に反映させるCSSパラメータ
    @_css = {
      position:@_option.position || "absolute",
      top:0,
      left:0,
      width:@_option.width || -1,
      height:@_option.height || -1
    };
    
    # レンダリングしたCSSパラメータ保持
    @_oldCss = {};
    
    # その他保存しておく値
    @_etc = {};
    
    # MASS専用 アニメーションパラメータ
    @ap = new AniParam();
    
    
    
  # -----------------------------------
  # 初期化
  # -----------------------------------
  init: =>
    
    # ここの数値を使ってIDを作成
    if !window.MY_DISPLAY_ID?
      window.MY_DISPLAY_ID = 0;
    if @_id == ""
      @_id = "display" + String(window.MY_DISPLAY_ID++);
    
    # jQuery要素を保持
    # 要素がなかったら作成
    if $("#" + @_id).length > 0
      @_elm = $("#" + @_id);
    else
      $("body").append("<" + @_elmName + " id='" + @_id + "'></" + @_elmName + ">");
      @_elm = $("#" + @_id);
    
    # サイズはデフォルトのセット
    if @_css.width == -1
      @_css.width = @_elm.width();
    if @_css.height == -1
      @_css.height = @_elm.height();
    
    @render();
  
  
  # -----------------------------------
  # 指定displayを子要素として最前面に移動
  # -----------------------------------
  add: (display) =>
    
    display.elm().appendTo("#" + @id());
  
  
  # -----------------------------------
  # 指定displayを子要素として最背面に移動
  # -----------------------------------
  unshift : (display) =>
    
    display.elm().prependTo("#" + @id());
  
  
  # -----------------------------------
  # DOMにレンダリング
  # -----------------------------------
  render: =>
    
    if @_isUpdateCss()
      @_elm.css(@_css);
    
    # 値をコピー
    for key,value of @_css
      @_oldCss[key] = value;
  
  
  # -----------------------------------
  # サイズ設定
  # -----------------------------------
  size: (width, height) =>
    
    @_css.width = width;
    @_css.height = height;
  
  
  # -----------------------------------
  # 幅の設定、取得
  # -----------------------------------
  width: (width) =>
    
    if width?
      @_css.width = width;
    else
      if @_css.width == "auto"
        return @_elm.width();
      else
        return @_css.width;
  
  
  # -----------------------------------
  # 高さの設定、取得
  # -----------------------------------
  height: (height) =>
    
    if height?
      @_css.height = height;
    else
      if @_css.height == "auto"
        return @_elm.height();
      else
        return @_css.height;
  
  
  # -----------------------------------
  # 位置設定
  # -----------------------------------
  xy: (x, y) =>
    
    @_css.top = y;
    @_css.left = x;
    
  
  # -----------------------------------
  # X位置の設定、取得
  # -----------------------------------
  x: (x) =>
    
    if x?
      @_css.left = x;
    else
      return @_css.left;
  
  
  # -----------------------------------
  # Y位置の設定、取得
  # -----------------------------------
  y: (y) =>
    
    if y?
      @_css.top = y;
    else
      return @_css.top;
  
  
  # -----------------------------------
  # Y + height
  # -----------------------------------
  bottom: =>
    
    return @y() + @height();
    
  
  # -----------------------------------
  # X + width
  # -----------------------------------
  right: =>
    
    return @x() + @width();
  
  
  # -----------------------------------
  # 背景色の設定、取得
  # -----------------------------------
  bgColor: (color) =>
    
    if color?
      @_css.backgroundColor = color;
    else
      return @_css.backgroundColor;
  
  
  # -----------------------------------
  # 透明度の取得、設定
  # -----------------------------------
  opacity: (val) =>
    
    if val?
      @_css.opacity = val;
    else
      return @_css.opacity || 1;
  
  
  # -----------------------------------
  # マスク設定 overflow:hidden
  # @val : true overflow=hidden
  #        false overflow=visible
  # -----------------------------------
  mask: (val) =>
    
    @_css.overflow = if val then "hidden" else "visible";
  
  
  # -----------------------------------
  # 表示
  # -----------------------------------
  visible: (bool) =>
    
    if bool
      @_css.display = "block";
    else
      @_css.display = "none";
  
  
  
  # -----------------------------------
  # 明るさ
  # -----------------------------------
  brightness: (val) =>
  
    if val?
      @_etc.brightness = val;
      if val == 1
        @_css["-webkit-filter"] = "none";
        @_css["-moz-filter"]    = "none";
        @_css["-o-filter"]      = "none";
        @_css["-ms-filter"]     = "none";
        @_css["filter"]         = "none";
      else
        @_css["-webkit-filter"] = "contrast(" + val + "%)";
        @_css["-moz-filter"]    = "contrast(" + val + "%)";
        @_css["-o-filter"]      = "contrast(" + val + "%)";
        @_css["-ms-filter"]     = "contrast(" + val + "%)";
        @_css["filter"]         = "contrast(" + val + "%)";
    else
      if !@_etc.brightness? then @_etc.brightness = 1;
      return @_etc.brightness;
  
  
  
  # -----------------------------------
  # 表示されてるかどうか
  # -----------------------------------
  isVisible: =>
    
    if @_css.display == "none"
      return false;
    else
      return true;
  
  
  # -----------------------------------
  # renderメソッド内で変更したいCSS
  # -----------------------------------
  css: =>
    
    return @_css;
    
    
  
  # -----------------------------------
  # 以前のCSSから更新されてるかチェック
  # -----------------------------------
  _isUpdateCss: =>
    
    for key,value of @_css
      if value != @_oldCss[key]
        return true;
    
    return false;
  
  
  # -----------------------------------
  # 破棄
  # -----------------------------------
  dispose: =>
    
    # 実行中のjQueryアニメーションを全て停止
    if @_elm? && @_elm.length > 0 
      i = 0;
      len = @_elm.queue().length;
      while i < len
        @_elm.stop();
        i++;
    
    if @_elm?
      @_elm.off();
      if !@_option.isRemove? || @_option.isRemove
        @_elm.remove();
      else
        @_elm.removeAttr('style');
        #@_elm.empty();
      @_elm = null;
    
    @_css = null;
    @_option = null;
    @_oldCss = null;
    @ap = null;
    
    
  # -----------------------------------
  # ID
  # -----------------------------------
  id: =>
    
    return @_id;
  
  
  # -----------------------------------
  # jQuery要素
  # -----------------------------------
  elm: =>
    
    return @_elm;
  
  
  
  # -----------------------------------
  # テキスト設定
  # 引数なしの場合高さを再計算
  # -----------------------------------
  text: (val) =>
    
    # 要素の高さを正しく取得できるように
    @_elm.css({
      width:"auto",
      height:"auto"
    });
    
    if val?
      @_elm.html(val);
    else
      @_elm.html(@_elm.html());
    
    
    @_css.width = "auto";
    @_css.height = "auto";
    @render();












module.exports = Display;