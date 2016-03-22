UpdateMgr = require('./libs/mgr/UpdateMgr');
ResizeMgr = require('./libs/mgr/ResizeMgr');
DelayMgr  = require('./libs/mgr/DelayMgr');
Utils     = require('./libs/Utils');
Contents  = require('./Contents');
Conf      = require('./Conf');
Func      = require('./Func');
Param     = require('./Param');
Profiler  = require('./Profiler');
Preloader = require('./Preloader');
Scroller  = require('./Scroller');
Mouse     = require('./Mouse');



# ------------------------------------
# メイン
# ------------------------------------
class Main
  
  # ------------------------------------
  # コンストラクタ
  # ------------------------------------
  constructor: ->
  
  
  
  # ------------------------------------
  # 初期化
  # ------------------------------------
  init: =>
    
    # app専用オブジェクト
    window.MY = {};
    
    # コンフィグ
    MY.conf = new Conf();
    
    # ユーティリティー
    MY.u = new Utils();
    
    # 画面更新管理
    MY.update = new UpdateMgr();
    MY.update.add(@_update);
    
    # リサイズ管理
    MY.resize = new ResizeMgr();
    
    # 遅延実行管理
    MY.delay = new DelayMgr();
    
    # 共通関数
    MY.f = new Func();
    
    # スクロール管理
    MY.scroller = new Scroller();
    
    # パラメータ管理
    MY.param = new Param();
    
    # プロファイラー
    MY.profiler = new Profiler();
    
    # プリローダー
    MY.pre = new Preloader();
    
    # マウス位置
    MY.mouse = new Mouse();
    
    # コンテンツ
    MY.c = new Contents();
    MY.c.init();
  
  
  
  # ------------------------------------
  # 更新
  # ------------------------------------
  _update: =>
    
    MY.delay.update();









$(window).ready(=>
  app = new Main();
  app.init();
  window.MY.main = app;
);