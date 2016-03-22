# ==============================
# node-v v0.12.3
# ==============================
# HTML
# - ejs使用
# - "src/ejs/"以下にejsファイル 
# - "src/ejs/_inc/"は共通ファイル
# - "src/ejs/meta.json"にメタ情報 jsでも使用するので"htdocs/assets/json/"にそのままコピー
#
# Javascript
# - coffeescript使用
# - ライブラリ系はlibs.jsとして結合
# - 全ページでmain.jsとして同じjsを使用
# ==============================

# 開発ディレクトリ
SRC_DIR = './src'

# 公開ディレクトリ
PUBLISH_DIR = "../htdocs";

gulp = require('gulp');

# gulp-系
$ = require('gulp-load-plugins')();

# browserify
browserify = require('browserify');
source = require('vinyl-source-stream');

# ejs
ejs = require("gulp-ejs");

# メタタグ用JSON
metaJson = SRC_DIR + '/ejs/meta.json';
metaData = require(metaJson);

# HTML
# srcと出力先
htmlSrc = [
  {src:SRC_DIR + '/ejs/index.ejs', dest:PUBLISH_DIR + '/'},
  {src:SRC_DIR + '/ejs/projects/index.ejs', dest:PUBLISH_DIR + '/projects/'},
  {src:SRC_DIR + '/ejs/about/index.ejs', dest:PUBLISH_DIR + '/about/'},
  {src:SRC_DIR + '/ejs/projects/01/index.ejs', dest:PUBLISH_DIR + '/projects/01/'},
  {src:SRC_DIR + '/ejs/projects/02/index.ejs', dest:PUBLISH_DIR + '/projects/02/'},
#   {src:SRC_DIR + '/ejs/projects/03/index.ejs', dest:PUBLISH_DIR + '/projects/03/'},
  # ここから英語
  {src:SRC_DIR + '/ejs/en/index.ejs', dest:PUBLISH_DIR + '/en/'},
  {src:SRC_DIR + '/ejs/en/projects/index.ejs', dest:PUBLISH_DIR + '/en/projects/'},
  {src:SRC_DIR + '/ejs/en/about/index.ejs', dest:PUBLISH_DIR + '/en/about/'},
  {src:SRC_DIR + '/ejs/en/projects/01/index.ejs', dest:PUBLISH_DIR + '/en/projects/01/'},
  {src:SRC_DIR + '/ejs/en/projects/02/index.ejs', dest:PUBLISH_DIR + '/en/projects/02/'}
#   {src:SRC_DIR + '/ejs/en/projects/03/index.ejs', dest:PUBLISH_DIR + '/en/projects/03/'}
];

# libs以下のライブラリ系は全部結合
concatJs = [
  PUBLISH_DIR + "/assets/js/libs/*.js"
];


# -------------------------------------------------------------------
# coffee
# -------------------------------------------------------------------
gulp.task 'coffee', ->
  return browserify({
    entries: [SRC_DIR + '/coffee/Main.coffee']
    extensions: ['.coffee', '.js']})
      .bundle()
      .pipe(source('main.js'))
      .pipe(gulp.dest(PUBLISH_DIR + '/assets/js/'))



# -------------------------------------------------------------------
# ejs HTML
# -------------------------------------------------------------------
gulp.task 'ejs', ->
  for val,i in htmlSrc
    gulp.src val.src
      .pipe ejs(metaData)
      .pipe gulp.dest val.dest



# -------------------------------------------------------------------
# connect
# -------------------------------------------------------------------
gulp.task 'connect', ->
  $.connect.server({
    root: PUBLISH_DIR
    port:50000})



# -------------------------------------------------------------------
# メタタグ用JSONのコピー
# -------------------------------------------------------------------
gulp.task 'copymetajson', ->
  gulp.src(metaJson)
    .pipe(gulp.dest(PUBLISH_DIR + "/assets/json/"));



# -------------------------------------------------------------------
# js結合 ライブラリは結合して使用
# -------------------------------------------------------------------
gulp.task 'concatjs', ->
  gulp.src(concatJs)
    .pipe($.concat('libs.js'))
    .pipe(gulp.dest(PUBLISH_DIR + '/assets/js'));



# -------------------------------------------------------------------
# watch
# coffee,ejsファイルを監視
# -------------------------------------------------------------------
gulp.task 'watch', ->
  gulp.watch([SRC_DIR + '/**/*.coffee', SRC_DIR + '/**/*.ejs'], ['coffee', 'ejs', 'copymetajson', 'concatjs'])



# -------------------------------------------------------------------
# task設定
# -------------------------------------------------------------------
gulp.task('default', ['coffee', 'ejs', 'copymetajson', 'concatjs', 'watch', 'connect']);






