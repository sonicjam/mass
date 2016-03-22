Rect          = require('../libs/object/Rect');
Point         = require('../libs/object/Point');
MyDisplay     = require('../base/MyDisplay');
AboutGraPoint = require('./AboutGraPoint');


# ---------------------------------------------------
# About / 中央グラフィック部分
# ---------------------------------------------------
class AboutGra extends MyDisplay
  
  
  # -----------------------------------------------
  # コンストラクタ
  # -----------------------------------------------
  constructor: ->
    
    super({
      elmName:"canvas",
      resize:false,
      position:"fixed"
    });
    
    # canvas
    @_c;
    
    # WebGLコンテキスト
    @_gl;
    
    # 行列演算オブジェクト
    @_m;
    
    # クォータニオン計算オブジェクト
    @_q;
    
    # プログラムオブジェクト
    @_prg;
    
    # ノイズ生成オブジェクト
    @_noise = new ImprovedNoise();
    
    # 行列
    @_mtx = {};
    
    # モデルデータ
    @_mdlData;
    
    # att変数 頂点ID
    @_attId = [];
    
    # パーティクル
    @_particle = [];
    
    # ロゴサイズ
    @_logoSize;
    
    # パーティクル全体のサイズ
    @_particleBox;
    
    # 全体の透明度
    @_alpha = 0;
    
    # 
    @_changeCnt = 0;
    @_isFix = true;
    
    @_qt;
    @_baseMouse = new Point();
    
    # 更新フラグ
    @isUpdate = true;
  
  
  
  # -----------------------------------------------
  # 初期化
  # -----------------------------------------------
  init: =>
    
    super();
    
    @css().zIndex = -99999;
    
    # 行列演算オブジェクト
    @_m = new matIV();
    
    # クォータニオンオブジェクト
    @_q = new qtnIV();
    
    # canvas
    @_c = document.getElementById(@_id);
    
    # WebGLコンテキスト
    @_gl = @_c.getContext('webgl') || @_c.getContext('experimental-webgl');
    if !@_gl?
      return;
    
    # ブレンディング有効
    @_gl.enable(@_gl.BLEND);
    @_gl.blendFuncSeparate(@_gl.SRC_ALPHA, @_gl.ONE_MINUS_SRC_ALPHA, @_gl.ONE, @_gl.ONE); # 通常のアルファブレンディング
    #@_gl.blendFuncSeparate(@_gl.SRC_ALPHA, @_gl.ONE_MINUS_CONSTANT_COLOR, @_gl.ONE, @_gl.ONE);
    
    # 各種行列の生成と初期化
    @_mtx.m   = @_m.identity(@_m.create());
    @_mtx.v   = @_m.identity(@_m.create());
    @_mtx.p   = @_m.identity(@_m.create());
    @_mtx.tmp = @_m.identity(@_m.create());
    @_mtx.mvp = @_m.identity(@_m.create());
    
    # プログラムオブジェクトの生成とリンク
    @_prg = @_createProgram(@_createShader('vs'), @_createShader('fs'));
    
    # 基本ロゴサイズ
    @_logoSize = new Rect(0, 0, 72 * 0.11, 18 * 0.11);
    
    # モデルデータ
    @_mdlData = {
      p:{
        p:@_getLogoPosition()
      }
    }
    
    @_qt = @_q.identity(@_q.create());
    
    # パーティクルオブジェクト作成
    @_makeParticle();
    
    @_baseMouse.x = MY.resize.sw() * 0.5;
    @_baseMouse.y = MY.resize.sh() * 0.5;
  
  
  
  # -----------------------------------
  # パーティクルオブジェクト作成
  # -----------------------------------
  _makeParticle: =>
    
    keisuA = 1;
    keisuB = 70;
    i = 0;
    len = @_mdlData.p.p.length;
    while i < len
      
      x = @_mdlData.p.p[i];
      y = @_mdlData.p.p[i+1];
      z = @_mdlData.p.p[i+2];
      
      noise = @_noise.noise((x + @_logoSize.w * 0.5)*keisuA, (y + @_logoSize.h * 0.5)*keisuA, 0) * keisuB;
      #noise = i/3 * 0.01;
      p = new AboutGraPoint(@_particle.length, noise, x, y, z);
      @_particle.push(p);
      
      @_attId[i/3] = noise;
    
      i += 3;
    
    
    # att変数
    @_attachVBO(@_prg, "position", 3, @_mdlData.p.p);
    @_attachVBO(@_prg, "id", 1, @_attId);
    
    # パーティクル全体のサイズ計算
    @_makeParticleBox();
  
  
  
  # -----------------------------------
  # 表示
  # -----------------------------------
  show: =>
    
    @isUpdate = true;
    @_alpha = 0;
    @_update();
    
    #if @_lo == MY.conf.LO_0
    @visible(true);
    @render();
  
  
  
  # -----------------------------------
  # 消す
  # -----------------------------------
  hide: =>
    
    @isUpdate = false;
    
    @visible(false);
    @render();
  
  
  
  # -----------------------------------
  # サイズ変更
  # -----------------------------------
  setSize: (w, h) =>
    
    if window.devicePixelRatio? && window.devicePixelRatio >= 2
      scale1 = 2;
      scale2 = 0.5;
    else
      scale1 = 1;
      scale2 = 1;
    
    # canvasサイズ変更
    @_c.width = w * scale1;
    @_c.height = h * scale1;
    $("#" + @_id).css({
      width:@_c.width * scale2,
      height:@_c.height * scale2
    });
    
    # アスペクト比変更
    if @_gl?
      @_gl.viewport(0, 0, @_c.width, @_c.height);
    
    @size(w, h);
    @render();
  
  
  
  # -----------------------------------
  # update
  # -----------------------------------
  _update: =>
    
    super();
    
    if !@_gl? || !@isVisible() || !@isUpdate then return;
    
    # 初期化
    @_gl.clearColor(1.0, 1.0, 1.0, 1.0);
    @_gl.clear(@_gl.COLOR_BUFFER_BIT);
    
    # ビュー×プロジェクション座標変換行列の更新
    @_updateVPMtx();
    
    # マウスに合わせる
    e = 0.1;
    @_baseMouse.x += (MY.mouse.x - @_baseMouse.x) * e;
    @_baseMouse.y += (MY.mouse.y - @_baseMouse.y) * e;
    cw = MY.resize.sw();
    ch = MY.resize.sh();
    wh = 1 / Math.sqrt(cw * cw + ch * ch);
    x = @_baseMouse.x - cw * 0.5;
    y = @_baseMouse.y - ch * 0.5;
    sq = Math.sqrt(x * x + y * y);
    r = sq * 0.1 * Math.PI * wh;
    if sq != 1
      sq = 1 / sq;
      x *= sq;
      y *= sq;
      
    if !MY.u.isSmt()
      @_q.rotate(r, [y, x, 0.0], @_qt);
    qMat = @_m.identity(@_m.create());
    @_q.toMatIV(@_qt, qMat);
    
    MY.param.rx = MY.u.map(sq, 15, 160, 0, Math.sqrt(cw * cw + ch * ch) * 0.5);
    MY.param.ry = MY.u.map(sq, 15, 160, 0, Math.sqrt(cw * cw + ch * ch) * 0.5);
    
    # 透明度
    @_alpha += (MY.param.alpha*0.01 - @_alpha) * 0.01;
    
    # ロゴ
    @_updateLogo(0, qMat);
    @_updateLogo(1, qMat);
    @_updateLogo(2, qMat);
    
    # コンテキストの再描画
    @_gl.flush();
  
  
  
  # -----------------------------------
  # ロゴ更新
  # -----------------------------------
  _updateLogo: (num, qMat) =>
    
    if MY.f.getLOType() == MY.conf.LO_0
      scale = MY.u.map(Math.sin(MY.u.radian(MY.update.cnt * 0.7)), 0.9, 1.1, -1, 1);
    else
      scale = MY.u.map(Math.sin(MY.u.radian(MY.update.cnt)), 1.4, 1.6, -1, 1);
    
    @_m.identity(@_mtx.m);
    #@_m.rotate(@_mtx.m, MY.u.radian(MY.u.map(Math.sin(MY.update.cnt*0.01), -5, 5, -1, 1)), [0, 0, 1], @_mtx.m);
    @_m.scale(@_mtx.m, [scale, scale, 0], @_mtx.m);
    @_m.multiply(@_mtx.m, qMat, @_mtx.m);
    @_m.multiply(@_mtx.tmp, @_mtx.m, @_mtx.mvp);
    
    # uniform更新
    @_attachUniform(@_prg, "alpha", "float", @_alpha);
    @_attachUniform(@_prg, "mvpMatrix", "mat4", @_mtx.mvp);
    @_attachUniform(@_prg, "zKeisu", "float", MY.param.zKeisu * 0.01);
    @_attachUniform(@_prg, "time", "float", num * 90 + MY.update.cnt * 0.9);
    @_attachUniform(@_prg, "rx", "float", MY.param.rx * 0.01);
    @_attachUniform(@_prg, "ry", "float", MY.param.ry * 0.01);
    @_attachUniform(@_prg, "rz", "float", MY.param.rz * 0.01);
    @_attachUniform(@_prg, "rgb", "vec3", [
#       [192/360, 100/100, 50/100],
#       [0/360, 50/100, 100/100],
#       [0/360, 0/100, 80/100]
      [210/255, 210/255, 210/255],
      [127/255, 229/255, 255/255],
      [255/255, 170/255, 170/255]
      
    ][num]);
    
    # モデルの描画
    @_gl.drawArrays(@_gl.POINTS, 0, @_mdlData.p.p.length / 3);
  
  
  
  # -----------------------------------
  # パーティクル更新
  # -----------------------------------
  _updateParticle: =>
    
    @_changeCnt++;
    if @_changeCnt > 0
      @_isFix = !@_isFix;
      @_changeCnt = -MY.u.random(250, 400);
    
    range = MY.u.random(5, 9);
    tgX = MY.u.random(@_particleBox.x.min, @_particleBox.x.max);
    tgY = MY.u.random(@_particleBox.y.min, @_particleBox.y.max);
    for val,i in @_particle
      val.change(@_isFix, @_getDist(val.defX, val.defY, tgX, tgY) * 200, range);
      val.update(0, 0);
      @_mdlData.p.p[i*3+0] = val.x;
      @_mdlData.p.p[i*3+1] = val.y;
      @_mdlData.p.p[i*3+2] = val.z;
    
    # 頂点更新
    @_attachVBO(@_prg, "position", 3, @_mdlData.p.p);
  
  
  
  # -----------------------------------------------
  # ビュー×プロジェクション座標変換行列の更新
  # -----------------------------------------------
  _updateVPMtx: =>
    
    if !@_gl?
      return;
    
    # ビュー×プロジェクション座標変換行列
    @_m.identity(@_mtx.p);
    @_m.identity(@_mtx.v);
    @_m.lookAt([0, 0, MY.param.camZ], [0, 0, 0], [0, 1, 0], @_mtx.v);
    @_m.perspective(45, @_c.width / @_c.height, 0.1, 1000, @_mtx.p);
    @_m.multiply(@_mtx.p, @_mtx.v, @_mtx.tmp);
  
  
  
  # -----------------------------------------------
  # シェーダーの生成、コンパイル
  # -----------------------------------------------
  _createShader: (id) =>
    
    # HTMLからscriptタグへの参照を取得
    scriptElement = document.getElementById(id);
    
    # シェーダ作成
    shader = @_gl.createShader(if scriptElement.type == "x-shader/x-vertex" then @_gl.VERTEX_SHADER else @_gl.FRAGMENT_SHADER);
    
    # 生成されたシェーダにソースを割り当てる
    @_gl.shaderSource(shader, scriptElement.text);
    
    # シェーダをコンパイルする
    @_gl.compileShader(shader);
    
    # シェーダが正しくコンパイルされたかチェック
    if @_gl.getShaderParameter(shader, @_gl.COMPILE_STATUS)
      return shader;
    else
      console.log(@_gl.getShaderInfoLog(shader));
      return null;
  
  
  
  # -----------------------------------------------
  # プログラムオブジェクトの生成
  # -----------------------------------------------
  _createProgram: (vs, fs) =>
    
    # プログラムオブジェクトの生成
    program = @_gl.createProgram();
    
    # プログラムオブジェクトにシェーダを割り当てる
    @_gl.attachShader(program, vs);
    @_gl.attachShader(program, fs);
    
    # シェーダをリンク
    @_gl.linkProgram(program);
    
    # シェーダのリンクが正しく行なわれたかチェック
    if @_gl.getProgramParameter(program, @_gl.LINK_STATUS)
    
      # 成功していたらプログラムオブジェクトを有効にする
      @_gl.useProgram(program);
      return program;
        
    else
      
      console.log(@_gl.getProgramInfoLog(program));
      return null;
  
  
  
  # -----------------------------------------------
  # VBOの作成
  # -----------------------------------------------
  _createVBO: (data) =>
    
    vbo = @_gl.createBuffer();
    
    # バッファをバインドする
    @_gl.bindBuffer(@_gl.ARRAY_BUFFER, vbo);
    
    # バッファにデータをセット
    @_gl.bufferData(@_gl.ARRAY_BUFFER, new Float32Array(data), @_gl.STATIC_DRAW);
    
    # バッファのバインドを無効化
    @_gl.bindBuffer(@_gl.ARRAY_BUFFER, null);
    
    return vbo;
  
  
  
  # -----------------------------------------------
  # VBOの登録
  # -----------------------------------------------
  _attachVBO: (prg, name, attStride, data) =>
    
    # attributeLocationの取得
    attLocation = @_gl.getAttribLocation(prg, name);
    
    # VBOの生成
    vbo = @_createVBO(data);
    
    # VBOをバインドし登録
    @_gl.bindBuffer(@_gl.ARRAY_BUFFER, vbo);
    @_gl.enableVertexAttribArray(attLocation);
    @_gl.vertexAttribPointer(attLocation, attStride, @_gl.FLOAT, false, 0, 0);
  
  
  
  # -----------------------------------------------
  # IBOの作成
  # -----------------------------------------------
  _createIBO: (data) =>
    
    # バッファオブジェクトの生成
    ibo = @_gl.createBuffer();
    
    # バッファをバインドする
    @_gl.bindBuffer(@_gl.ELEMENT_ARRAY_BUFFER, ibo);
    
    # バッファにデータをセット
    @_gl.bufferData(@_gl.ELEMENT_ARRAY_BUFFER, new Int16Array(data), @_gl.STATIC_DRAW);
    
    # バッファのバインドを無効化
    @_gl.bindBuffer(@_gl.ELEMENT_ARRAY_BUFFER, null);
    
    return ibo;
  
  
  
  # -----------------------------------------------
  # Uniform変数の登録
  # -----------------------------------------------
  _attachUniform: (prg, name, type, data) =>
    
    uniLocation = @_gl.getUniformLocation(prg, name);
    
    switch type
      when "mat4"
        @_gl.uniformMatrix4fv(uniLocation, false, data);
      when "vec3"
        @_gl.uniform3fv(uniLocation, data);
      when "vec4"
        @_gl.uniform4fv(uniLocation, data);
      when "int"
        @_gl.uniform1i(uniLocation, data);
      when "float"
        @_gl.uniform1f(uniLocation, data);
  
  
  
  # -----------------------------------
  # MASSロゴ用頂点データ作成
  # -----------------------------------
  _getLogoPosition: =>
    
    dest = [];
    data = MY.conf.MASS_VERTEX;
    for val,i in data
      if i % 1 == 0
        dest.push(@_logoSize.w * val.x - @_logoSize.w * 0.5);
        dest.push(@_logoSize.h * -val.y + @_logoSize.h * 0.5);
        dest.push(0);
    
    return dest;
  
  
  
  # -----------------------------------
  # 指定値からの距離
  # -----------------------------------
  _getDist: (x, y, tx, ty) =>
    
    tx = tx || 0;
    ty = ty || 0;
    
    dx = tx - x;
    dy = ty - y;
    d = Math.sqrt(dx * dx + dy * dy);
    
    return MY.u.map(d, 0, 1, 0, @_particleBox.cross * 1);
  
  
  
  # -----------------------------------
  # パーティクルのボックス計算
  # -----------------------------------
  _makeParticleBox: =>
    
    minX = 9999;
    maxX = -9999;
    minY = 9999;
    maxY = -9999;
    for val,i in @_particle
      if val.x > maxX
        maxX = val.x;
      if val.x < minX
        minX = val.x;
      if val.y > maxY
        maxY = val.y;
      if val.y < minY
        minY = val.y;
    
    @_particleBox = {
      x:{
        min:minX,
        max:maxX
      },
      y:{
        min:minY,
        max:maxY
      }
    };
    
    dx = @_particleBox.x.min - @_particleBox.x.max;
    dy = @_particleBox.y.min - @_particleBox.y.max;
    @_particleBox.cross = Math.sqrt(dx * dx + dy * dy);






















module.exports = AboutGra;