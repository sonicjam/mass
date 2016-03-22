MyDisplay = require('../base/MyDisplay');
Animation = require('../libs/animation/Animation');
ResponsiveImg     = require('../parts/ResponsiveImg');


# ---------------------------------------------------
# SVGロゴ
# ---------------------------------------------------
class SvgLogo extends MyDisplay
  
  
  # -----------------------------------------------
  # コンストラクタ
  # -----------------------------------------------
  constructor: (defWidth, strokeWidth) ->
    
    super();
    
    @_defWidth = defWidth || 124;
    @_strokeWidth = strokeWidth || 0.75;
    
    @_svg = '<svg version="1.1" id="&#x30EC;&#x30A4;&#x30E4;&#x30FC;_1"        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="124px" viewBox="0 0 362.72 147.033"        style="enable-background:new 0 0 362.72 147.033;" xml:space="preserve">        <g>            <g>                <g>                    <path class="path" d="M1.695,145.033l14.752-31.923c0.142-0.284,0.379-0.522,0.806-0.522h0.474c0.474,0,0.664,0.238,0.806,0.522l14.609,31.923                    c0.285,0.616-0.095,1.233-0.806,1.233H28.21c-0.711,0-1.043-0.285-1.375-0.949l-2.324-5.123H10.328l-2.324,5.123                    c-0.19,0.475-0.616,0.949-1.375,0.949H2.502C1.79,146.266,1.411,145.649,1.695,145.033z M22.186,134.929l-4.743-10.435h-0.142                    l-4.649,10.435H22.186z"/>                    <path class="path" d="M39.358,113.964c0-0.474,0.379-0.901,0.901-0.901h13.566c5.692,0,10.34,4.554,10.34,10.198                    c0,4.364-2.893,7.921-7.02,9.581l6.498,12.048c0.332,0.617,0,1.376-0.806,1.376h-4.981c-0.427,0-0.664-0.237-0.759-0.427                    l-6.309-12.57h-5.265v12.096c0,0.474-0.427,0.901-0.901,0.901h-4.364c-0.522,0-0.901-0.427-0.901-0.901V113.964z M53.304,128.193                    c2.514,0,4.696-2.182,4.696-4.838c0-2.514-2.182-4.601-4.696-4.601h-7.732v9.439H53.304z"/>                    <path class="path" d="M79.203,118.754h-7.257c-0.522,0-0.901-0.427-0.901-0.901v-3.89c0-0.474,0.379-0.901,0.901-0.901h20.728                    c0.522,0,0.901,0.427,0.901,0.901v3.89c0,0.474-0.379,0.901-0.901,0.901h-7.257v26.61c0,0.474-0.427,0.901-0.902,0.901h-4.411                    c-0.474,0-0.901-0.427-0.901-0.901V118.754z"/>                    <path class="path" d="M117.53,113.964c0-0.474,0.379-0.901,0.901-0.901h11.147c5.834,0,10.625,4.743,10.625,10.482                    c0,5.882-4.791,10.673-10.578,10.673h-5.929v11.147c0,0.474-0.427,0.901-0.902,0.901h-4.364c-0.522,0-0.901-0.427-0.901-0.901                    V113.964z M129.198,128.431c2.657,0,4.886-2.135,4.886-4.933c0-2.609-2.23-4.601-4.886-4.601h-5.502v9.534H129.198z"/>                    <path class="path" d="M148.456,113.964c0-0.474,0.379-0.901,0.901-0.901h13.566c5.692,0,10.341,4.554,10.341,10.198                    c0,4.364-2.894,7.921-7.02,9.581l6.498,12.048c0.332,0.617,0,1.376-0.807,1.376h-4.981c-0.426,0-0.664-0.237-0.759-0.427                    l-6.308-12.57h-5.265v12.096c0,0.474-0.427,0.901-0.902,0.901h-4.364c-0.522,0-0.901-0.427-0.901-0.901V113.964z                    M162.401,128.193c2.515,0,4.696-2.182,4.696-4.838c0-2.514-2.182-4.601-4.696-4.601h-7.731v9.439H162.401z"/>                    <path class="path" d="M197.551,112.588c9.486,0,17.076,7.637,17.076,17.123c0,9.487-7.589,17.028-17.076,17.028                    c-9.486,0-17.028-7.541-17.028-17.028C180.522,120.225,188.064,112.588,197.551,112.588z M197.551,140.574                    c5.976,0,10.91-4.886,10.91-10.863c0-5.976-4.933-10.957-10.91-10.957c-5.976,0-10.862,4.981-10.862,10.957                    C186.689,135.688,191.574,140.574,197.551,140.574z"/>                    <path class="path" d="M238.344,112.588c4.269,0,8.348,1.661,11.574,4.412c0.379,0.38,0.427,0.949,0.047,1.328l-2.941,3.084                    c-0.379,0.379-0.806,0.379-1.233,0c-2.04-1.803-4.554-2.752-7.162-2.752c-5.929,0-10.625,5.075-10.625,11.005                    c0,5.882,4.696,10.862,10.672,10.862c2.657,0,4.696-0.806,5.644-1.186v-4.032h-3.795c-0.522,0-0.901-0.38-0.901-0.854v-3.748                    c0-0.521,0.379-0.901,0.901-0.901h9.107c0.474,0,0.854,0.427,0.854,0.901v12.143c0,0.38-0.19,0.617-0.38,0.76                    c0,0-4.886,3.083-11.763,3.083c-9.439,0-17.028-7.494-17.028-16.981C221.315,120.225,228.904,112.588,238.344,112.588z"/>                    <path class="path" d="M259.358,113.964c0-0.474,0.379-0.901,0.901-0.901h13.566c5.692,0,10.341,4.554,10.341,10.198                    c0,4.364-2.894,7.921-7.02,9.581l6.498,12.048c0.332,0.617,0,1.376-0.807,1.376h-4.981c-0.427,0-0.664-0.237-0.759-0.427                    l-6.308-12.57h-5.265v12.096c0,0.474-0.427,0.901-0.902,0.901h-4.364c-0.522,0-0.901-0.427-0.901-0.901V113.964z                    M273.303,128.193c2.515,0,4.696-2.182,4.696-4.838c0-2.514-2.182-4.601-4.696-4.601h-7.731v9.439H273.303z"/>                    <path class="path" d="M288.529,145.033l14.752-31.923c0.142-0.284,0.38-0.522,0.806-0.522h0.475c0.474,0,0.664,0.238,0.806,0.522l14.61,31.923                    c0.285,0.616-0.095,1.233-0.806,1.233h-4.127c-0.712,0-1.044-0.285-1.376-0.949l-2.325-5.123h-14.182l-2.325,5.123                    c-0.19,0.475-0.616,0.949-1.376,0.949h-4.127C288.624,146.266,288.244,145.649,288.529,145.033z M309.02,134.929l-4.743-10.435                    h-0.142l-4.649,10.435H309.02z"/>                    <path class="path" d="M329.655,113.3c0.047-0.38,0.332-0.712,0.854-0.712h0.759c0.379,0,0.664,0.19,0.806,0.475l10.435,22.388                    c0.095,0,0.095,0,0.143,0l10.435-22.388c0.142-0.285,0.379-0.475,0.806-0.475h0.759c0.522,0,0.807,0.332,0.854,0.712                    l5.597,31.875c0.142,0.664-0.237,1.091-0.854,1.091h-4.317c-0.427,0-0.806-0.38-0.901-0.712l-2.799-17.976                    c-0.047,0-0.142,0-0.142,0l-8.301,18.641c-0.095,0.284-0.379,0.521-0.806,0.521h-0.854c-0.427,0-0.664-0.237-0.807-0.521                    l-8.395-18.641c0,0-0.095,0-0.142,0l-2.752,17.976c-0.047,0.332-0.427,0.712-0.854,0.712h-4.269                    c-0.617,0-0.996-0.427-0.901-1.091L329.655,113.3z"/>                </g>            </g>            <g>                <g>                    <g>                        <path class="path" d="M220.389,77.728l4.555-7.843c1.012-1.772,3.163-1.772,4.302-0.887c0.633,0.381,10.881,7.846,19.105,7.846                        c6.579,0,11.514-4.302,11.514-9.744c0-6.452-5.44-10.88-16.07-15.182c-11.893-4.809-23.787-12.4-23.787-27.33                        c0-11.261,8.351-24.293,28.469-24.293c12.905,0,22.775,6.581,25.305,8.478c1.265,0.759,1.645,2.908,0.759,4.174l-4.808,7.213                        c-1.013,1.517-2.911,2.53-4.428,1.517c-1.013-0.633-10.629-6.959-17.588-6.959c-7.212,0-11.135,4.809-11.135,8.856                        c0,5.948,4.682,9.996,14.93,14.172c12.274,4.935,26.444,12.274,26.444,28.596c0,13.033-11.261,25.052-29.101,25.052                        c-15.942,0-25.306-7.465-27.837-9.87C219.884,80.387,219.251,79.754,220.389,77.728z"/>                    </g>                </g>                <g>                    <g>                        <path class="path" d="M303.434,77.728l4.555-7.843c1.012-1.772,3.163-1.772,4.302-0.887c0.633,0.381,10.881,7.846,19.105,7.846                        c6.579,0,11.514-4.302,11.514-9.744c0-6.452-5.44-10.88-16.07-15.182c-11.893-4.809-23.787-12.4-23.787-27.33                        c0-11.261,8.351-24.293,28.469-24.293c12.905,0,22.775,6.581,25.305,8.478c1.265,0.759,1.645,2.908,0.759,4.174l-4.807,7.213                        c-1.013,1.517-2.911,2.53-4.428,1.517c-1.013-0.633-10.629-6.959-17.588-6.959c-7.212,0-11.135,4.809-11.135,8.856                        c0,5.948,4.681,9.996,14.93,14.172c12.274,4.935,26.444,12.274,26.444,28.596c0,13.033-11.261,25.052-29.101,25.052                        c-15.942,0-25.306-7.465-27.837-9.87C302.929,80.387,302.296,79.754,303.434,77.728z"/>                    </g>                </g>                <g>                    <path class="path" d="M16.143,0.963c-0.429-0.433-0.998-0.67-1.603-0.67c-0.004,0-0.009,0-0.012,0H3.865c-1.256,0-2.277,1.021-2.277,2.277                    v85.28c0,1.256,1.021,2.277,2.277,2.277h10.66c1.256,0,2.277-1.021,2.277-2.277V23.133l22.681,22.683                    c0.858,0.858,2.358,0.858,3.221,0l7.538-7.536c0.887-0.889,0.887-2.334,0-3.223L16.143,0.963z"/>                    <path class="path" d="M89.149,0.293c-0.607,0-1.179,0.237-1.609,0.667L76.21,12.289V87.85c0,1.256,1.023,2.277,2.279,2.277h10.659                    c1.256,0,2.279-1.021,2.279-2.277V2.571C91.426,1.476,90.555,0.293,89.149,0.293z"/>                </g>                <path class="path" d="M200.286,86.839l-38.97-85.154c-0.288-0.606-0.941-1.391-2.151-1.391c0,0-0.356,0-1.645,0                c-1.383,0-1.961,1.009-2.151,1.391l-38.97,85.154c-0.76,1.646,0.252,3.289,2.151,3.289h11.007c1.898,0,2.784-0.759,3.67-2.53                l6.2-13.665c0,0,18.301,0,19.747,0c1.626,0,2.703-1.68,2.079-3.115l-4.058-8.97c-0.689-1.413-1.985-1.958-3.041-1.958                c-0.006,0-8.527,0-8.527,0l12.719-27.837l25.114,55.545c0.886,1.772,1.772,2.53,3.67,2.53h11.007                C200.034,90.128,201.046,88.485,200.286,86.839z"/>            </g>        </g>    </svg>';
    
    @_svgTg;
    @_pathTg;
    
    @_ease = "inOutQuad";
    
  
  
  
  # -----------------------------------------------
  # 初期化
  # -----------------------------------------------
  init: =>
    
    super();
    
    @elm().html(@_svg);
    
    @_svgTg  = $("#" + @_id + " svg");
    @_pathTg = $("#" + @_id + " .path");
    
#     @_pathTg.css({
#       stroke:"#000",
#       fill:"#000",
#       "stroke-width":@_strokeWidth,
#       "stroke-dasharray":3000,
#       "stroke-dashoffset":1000
#     });
    
    @_makeAnimation(2);
    @_resize();
    @_update();
    
  
  
  # -----------------------------------
  # ライン表示
  # -----------------------------------
  showLine: (delay, frame, isAnimate) =>
    
    delay = delay || 0;
    frame = frame || 400;
    if !isAnimate? then isAnimate = true;
    
    a = @_anm[0];
    a.set({
      r:{from:1, to:0},
      frame:frame,
      delay:delay,
      ease:@_ease
    });
    a.start();
    
    if !isAnimate then a.finish();
    @_update();
  
  
  
  # -----------------------------------
  # ライン消す
  # -----------------------------------
  hideLine: (delay, frame, isAnimate) =>
    
    delay = delay || 0;
    frame = frame || 400;
    if !isAnimate? then isAnimate = true;
    
    a = @_anm[0];
    a.set({
      r:{from:0, to:1},
      frame:frame,
      delay:delay,
      ease:@_ease
    });
    a.start();
    
    if !isAnimate then a.finish();
    @_update();
  
  
  
  # -----------------------------------
  # 塗り表示
  # -----------------------------------
  showFill: (delay, frame, isAnimate) =>
    
    delay = delay || 0;
    frame = frame || 400;
    if !isAnimate? then isAnimate = true;
    
    a = @_anm[1];
    a.set({
      r:{from:1, to:0},
      frame:frame,
      delay:delay,
      ease:@_ease
    });
    a.start();
    
    if !isAnimate then a.finish();
    @_update();
  
  
  
  # -----------------------------------
  # 塗り消す
  # -----------------------------------
  hideFill: (delay, frame, isAnimate) =>
    
    delay = delay || 0;
    frame = frame || 400;
    if !isAnimate? then isAnimate = true;
    
    a = @_anm[1];
    a.set({
      r:{from:0, to:1},
      frame:frame,
      delay:delay,
      ease:@_ease
    });
    a.start();
    
    if !isAnimate then a.finish();
    @_update();
  
  
  
  # -----------------------------------
  # サイズの設定
  # -----------------------------------
  _setSvgSize: =>
    
    @_svgTg.attr("width", MY.f.getLOVal(@_defWidth, @_defWidth * 0.5));
    @size(@_svgTg.width(), @_svgTg.height());
    @render();
  
  
  
  # -----------------------------------
  # resize
  # -----------------------------------
  _resize: (w, h) =>
    
    super(w, h);
    @_setSvgSize();
  
  
  
  # -----------------------------------
  # update
  # -----------------------------------
  _update: =>
    
    super();
    
    if @_anm?
    
      color = @_anm[1].get("r") * 255;
      hex = MY.u.getHexColor(color, color, color);
      
      dist = 400;
      dash = @_anm[0].get("r") * dist;
      @_pathTg.css({
        stroke:"#000",
        fill:hex,
        "stroke-width":@_strokeWidth,
        "stroke-dasharray":dist,
        "stroke-dashoffset":dash
      });
  
  
  
  # -----------------------------------------------
  # 破棄
  # -----------------------------------------------
  dispose: =>
    
    @_svgTg = null;
    @_pathTg = null;
    
    super();













module.exports = SvgLogo;