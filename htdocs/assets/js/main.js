(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Conf;

Conf = (function() {
  function Conf() {
    var key, ref, val;
    this.RELEASE = true;
    this.FLG = {
      LOG: true,
      PARAM: true,
      STATS: false
    };
    if (this.RELEASE) {
      ref = this.FLG;
      for (key in ref) {
        val = ref[key];
        this.FLG[key] = false;
      }
    }
    this.IMG_PATH = "/assets/img";
    this.META_JSON = "/assets/json/meta.json";
    this.LOGO_JSON = "/assets/json/logo.json";
    this.M_TOP = 0;
    this.M_PROJECTS = 1;
    this.M_ABOUT = 2;
    this.M_PROJECTS_D = 3;
    this.PAGE_TTL = [];
    this.DIR_NAME = [];
    this.DIR_NAME[this.M_TOP] = "";
    this.DIR_NAME[this.M_PROJECTS] = "projects/";
    this.DIR_NAME[this.M_ABOUT] = "about/";
    this.DIR_NAME[this.M_PROJECTS_D] = "projects/";
    this.L_JP = 0;
    this.L_EN = 1;
    this.P_TOP = "top";
    this.P_PJTOP = "pjTop";
    this.P_PHOTO = "photo";
    this.P_PJDETAIL = "pjDetail";
    this.P_ABOUT = "about";
    this.P_ABOUT_C = "aboutCover";
    this.LO_0 = 0;
    this.LO_1 = 1;
    this.BP_0 = 850;
    this.HEADER_HEIGHT = [];
    this.HEADER_HEIGHT[this.LO_0] = 140;
    this.HEADER_HEIGHT[this.LO_1] = 60;
    this.TOP_LEFT_IMG_MARGIN = [];
    this.TOP_LEFT_IMG_MARGIN[this.LO_0] = 290;
    this.TOP_LEFT_IMG_MARGIN[this.LO_1] = 20;
    this.PJ_TOP_LEFT_IMG_MARGIN = [];
    this.PJ_TOP_LEFT_IMG_MARGIN[this.LO_0] = 50;
    this.PJ_TOP_LEFT_IMG_MARGIN[this.LO_1] = 20;
    this.PJ_TOP_IMG_HEIGHT = [];
    this.PJ_TOP_IMG_HEIGHT[this.LO_0] = 500;
    this.PJ_TOP_IMG_HEIGHT[this.LO_1] = 300;
    this.PJ_TOP_IMG_MARGIN = [];
    this.PJ_TOP_IMG_MARGIN[this.LO_0] = 50;
    this.PJ_TOP_IMG_MARGIN[this.LO_1] = 25;
    this.TYPE_PHOTO_TOP = 0;
    this.TYPE_PHOTO_PROJECT_TOP = 1;
    this.TYPE_PHOTO_PROJECT_DETAIL = 2;
    this.TOP_SLIDE_DIST = [];
    this.TOP_SLIDE_DIST[this.LO_0] = 50;
    this.TOP_SLIDE_DIST[this.LO_1] = 50;
    this.TOP_SLIDE_SPEED = 0.1;
    this.PARTS_SHOW_DELAY = 60;
    this.PARTS_HIDE_DELAY = 0;
    this.EASE_PHOTO = 0.05;
    this.PJDETAIL_MAX_WIDTH = 1500;
    this.PJDETAIL_X_MARGIN = [];
    this.PJDETAIL_X_MARGIN[this.LO_0] = 50;
    this.PJDETAIL_X_MARGIN[this.LO_1] = 0;
    this.PJDETAIL_TXT_X_MARGIN = [];
    this.PJDETAIL_TXT_X_MARGIN[this.LO_0] = 180;
    this.PJDETAIL_TXT_X_MARGIN[this.LO_1] = 20;
    this.PJDETAIL_TXT_TOP_MARGIN = [];
    this.PJDETAIL_TXT_TOP_MARGIN[this.LO_0] = 60;
    this.PJDETAIL_TXT_TOP_MARGIN[this.LO_1] = 25;
    this.ABOUT_PARAM = {
      FRAME: 80,
      EASE: "inOutExpo",
      CDELAY: 10
    };
    this.STR_DELAY = 5;
    this.FIRST_SHOW_DELAY = 15;
    this.DETAIL_EXPAND_DELAY = 20;
    this.DETAIL_EXPAND_FRAME = 90;
    this.DETAIL_EXPAND_EASE = "inOutExpo";
    this.PHOTO_RESET_F = 70;
    this.PHOTO_RESET_E = "outExpo";
    this.EFFECT_BAR_COLOR_0 = "#000";
    this.EFFECT_BAR_COLOR_1 = "#FFF";
    this.PJDETAIL_OFFSET_Y = [];
    this.PJDETAIL_OFFSET_Y[this.LO_0] = 180;
    this.PJDETAIL_OFFSET_Y[this.LO_1] = 130;
    this.MASS_VERTEX = window.MASS_LOGO;
    this.PJ_YOUTUBE = '<iframe width="<width>" height="<height>" src="https://www.youtube.com/embed/<ycode>?vq=highres&rel=0&showinfo=0&modestbranding=0&enablejsapi=1" frameborder="0" allowfullscreen></iframe>';
  }

  return Conf;

})();

module.exports = Conf;


},{}],2:[function(require,module,exports){
var About, AboutCover, Contents, Header, Loading, Photo, PjDetail, PjTop, SimpleHeader, SpGnavi, Top,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Header = require('./header/Header');

SimpleHeader = require('./header/SimpleHeader');

SpGnavi = require('./header/SpGnavi');

Loading = require('./parts/Loading');

AboutCover = require('./parts/AboutCover');

Top = require('./top/Top');

PjTop = require('./pj/PjTop');

PjDetail = require('./pjDetail/PjDetail');

Photo = require('./photo/Photo');

About = require('./about/About');

Contents = (function() {
  function Contents() {
    this._update = bind(this._update, this);
    this._resize = bind(this._resize, this);
    this.getSpgnavi = bind(this.getSpgnavi, this);
    this.getHeader = bind(this.getHeader, this);
    this.setPjDetail = bind(this.setPjDetail, this);
    this.setHome = bind(this.setHome, this);
    this.setPageUrl = bind(this.setPageUrl, this);
    this.setPage = bind(this.setPage, this);
    this.getObj = bind(this.getObj, this);
    this.hideParts = bind(this.hideParts, this);
    this.showParts = bind(this.showParts, this);
    this.makeParts = bind(this.makeParts, this);
    this._setCmnParts = bind(this._setCmnParts, this);
    this.setForcePage = bind(this.setForcePage, this);
    this._eCompleteLoading = bind(this._eCompleteLoading, this);
    this._disposeLoading = bind(this._disposeLoading, this);
    this._setLoading = bind(this._setLoading, this);
    this._ePopState = bind(this._ePopState, this);
    this.init = bind(this.init, this);
    this._loading;
    this._header;
    this._simpleHeader;
    this._spgnavi;
    this._parts = {};
  }

  Contents.prototype.init = function() {
    $(".noLink").attr("href", "javascript:void(0)");
    if (MY.u.isWin()) {
      $("body").css({
        overflowX: "hidden"
      });
    }
    $(window).scrollTop(0);
    MY.f.trackPageView(location.href);
    this.makeParts(MY.conf.P_TOP);
    this.makeParts(MY.conf.P_PJTOP);
    this.makeParts(MY.conf.P_PHOTO);
    this.makeParts(MY.conf.P_PJDETAIL);
    this.makeParts(MY.conf.P_ABOUT_C);
    this._setLoading();
    $(window).on("popstate", this._ePopState);
    MY.resize.add(this._resize, true);
    return MY.update.add(this._update);
  };

  Contents.prototype._ePopState = function(e) {
    if (e.originalEvent.state == null) {
      return;
    }
    return this.setForcePage(MY.f.getPage());
  };

  Contents.prototype._setLoading = function() {
    this._loading = new Loading();
    this._loading.onComplete = this._eCompleteLoading;
    return this._loading.init();
  };

  Contents.prototype._disposeLoading = function() {
    if (this._loading != null) {
      this._loading.dispose();
      return this._loading = null;
    }
  };

  Contents.prototype._eCompleteLoading = function() {
    var did, partsDelay;
    this.makeParts(MY.conf.P_ABOUT);
    this._disposeLoading();
    this._setCmnParts();
    partsDelay = MY.conf.FIRST_SHOW_DELAY;
    this._header.show(true, partsDelay);
    switch (MY.f.getPage()) {
      case MY.conf.M_TOP:
        this.getObj(MY.conf.P_PHOTO).setType(MY.conf.TYPE_PHOTO_TOP, false);
        this.showParts(MY.conf.P_PHOTO, false, MY.f.getLOVal(130, 10));
        this.showParts(MY.conf.P_TOP, true, partsDelay + MY.f.getLOVal(0, 30));
        return this._header.setActive(MY.conf.M_TOP);
      case MY.conf.M_PROJECTS:
        this.showParts(MY.conf.P_PHOTO, true, 0);
        this.getObj(MY.conf.P_PHOTO).setType(MY.conf.TYPE_PHOTO_PROJECT_TOP, false);
        this.showParts(MY.conf.P_PJTOP, true, partsDelay + 40);
        return this._header.setActive(MY.conf.M_PROJECTS);
      case MY.conf.M_PROJECTS_D:
        did = MY.f.getPjDetailId();
        if (did != null) {
          this.getObj(MY.conf.P_PHOTO).setDetailParts(false);
          this.showParts(MY.conf.P_PHOTO, true, 0);
          this.setPjDetail(did, true, 0, false, MY.f.getLOType() === MY.conf.LO_0);
          return this._header.setActive(MY.conf.M_PROJECTS);
        }
        break;
      case MY.conf.M_ABOUT:
        this.getObj(MY.conf.P_PHOTO).setType(MY.conf.TYPE_PHOTO_TOP, false);
        this.showParts(MY.conf.P_ABOUT, true, partsDelay);
        return this._header.setActive(MY.conf.M_ABOUT);
    }
  };

  Contents.prototype.setForcePage = function(pageId) {
    var did;
    if (pageId === MY.conf.M_PROJECTS_D) {
      did = MY.f.getPjDetailId();
      return this.setPjDetail(did, false, 0, false);
    } else {
      return this.setPage(pageId, false);
    }
  };

  Contents.prototype._setCmnParts = function() {
    this._header = new Header();
    this._header.init();
    this._simpleHeader = new SimpleHeader();
    this._simpleHeader.init();
    this._spgnavi = new SpGnavi();
    return this._spgnavi.init();
  };

  Contents.prototype.makeParts = function(name) {
    var p;
    if (this._parts[name] != null) {
      return;
    }
    switch (name) {
      case MY.conf.P_TOP:
        p = new Top();
        break;
      case MY.conf.P_PJTOP:
        p = new PjTop();
        break;
      case MY.conf.P_PHOTO:
        p = new Photo();
        break;
      case MY.conf.P_PJDETAIL:
        p = new PjDetail();
        break;
      case MY.conf.P_ABOUT:
        p = new About();
        break;
      case MY.conf.P_ABOUT_C:
        p = new AboutCover();
    }
    p.init();
    return this._parts[name] = p;
  };

  Contents.prototype.showParts = function(name, isAnimate, delay) {
    if (this._parts[name] != null) {
      return this._parts[name].show(isAnimate, delay);
    }
  };

  Contents.prototype.hideParts = function(name, isAnimate, delay) {
    if (this._parts[name] != null) {
      return this._parts[name].hide(isAnimate, delay);
    }
  };

  Contents.prototype.getObj = function(name) {
    return this._parts[name];
  };

  Contents.prototype.setPage = function(pageId, isChangeUrl) {
    if (isChangeUrl == null) {
      isChangeUrl = true;
    }
    this._header.ctrlGnavi(false);
    if (this._simpleHeader.isShow()) {
      this._header.onMouseLeave = null;
      this._header.setPosition("absolute");
      if (!this._header.isShow()) {
        this._header.show(true, 40);
      }
      this._simpleHeader.hide(true, 40);
    }
    this._header.setActive(pageId);
    this._header.setBgOpacity(1);
    MY.scroller.scroll(0, 0, null, false);
    switch (pageId) {
      case MY.conf.M_TOP:
        this.getObj(MY.conf.P_PHOTO).setType(MY.conf.TYPE_PHOTO_TOP);
        this.getObj(MY.conf.P_TOP).setTopId(0);
        this.showParts(MY.conf.P_TOP, true, MY.conf.PARTS_SHOW_DELAY);
        this.hideParts(MY.conf.P_ABOUT_C, false);
        this.hideParts(MY.conf.P_PJTOP, true, MY.conf.PARTS_HIDE_DELAY);
        this.hideParts(MY.conf.P_ABOUT, true, 0);
        this.hideParts(MY.conf.P_PJDETAIL, true, MY.conf.PARTS_HIDE_DELAY);
        break;
      case MY.conf.M_PROJECTS:
        this.getObj(MY.conf.P_PHOTO).setType(MY.conf.TYPE_PHOTO_PROJECT_TOP);
        this.hideParts(MY.conf.P_ABOUT_C, false);
        this.hideParts(MY.conf.P_ABOUT, true, 0);
        this.hideParts(MY.conf.P_TOP, true, MY.conf.PARTS_HIDE_DELAY);
        this.hideParts(MY.conf.P_PJDETAIL, true, MY.conf.PARTS_HIDE_DELAY);
        this.showParts(MY.conf.P_PJTOP, true, 100);
        break;
      case MY.conf.M_ABOUT:
        this.showParts(MY.conf.P_ABOUT_C, true, 0);
        this.showParts(MY.conf.P_ABOUT, true, MY.conf.ABOUT_PARAM.CDELAY);
        this._header.setBgOpacity(0);
    }
    return this.setPageUrl(pageId, null, isChangeUrl);
  };

  Contents.prototype.setPageUrl = function(pageId, pjId, isChangeUrl) {
    var id2;
    if (isChangeUrl == null) {
      isChangeUrl = true;
    }
    if (pageId === MY.conf.M_PROJECTS_D) {
      id2 = MY.f.getConNum() - pjId;
      if (isChangeUrl) {
        MY.f.historyAdd(MY.conf.DIR_NAME[MY.conf.M_PROJECTS_D] + MY.u.numStr(id2, 2) + "/");
        MY.f.trackPageView(location.href);
      }
      return MY.f.setTitle(MY.conf.PAGE_TTL[MY.conf.M_PROJECTS_D][id2 - 1]);
    } else {
      if (isChangeUrl) {
        MY.f.historyAdd(MY.conf.DIR_NAME[pageId]);
        MY.f.trackPageView(location.href);
      }
      return MY.f.setTitle(MY.conf.PAGE_TTL[pageId]);
    }
  };

  Contents.prototype.setHome = function() {
    this.getObj(MY.conf.P_PHOTO).setType(MY.conf.TYPE_PHOTO_TOP, false);
    this.hideParts(MY.conf.P_PHOTO, false, 0);
    this.hideParts(MY.conf.P_TOP, false);
    this.hideParts(MY.conf.P_ABOUT_C, false);
    this.hideParts(MY.conf.P_PJTOP, false);
    return this.hideParts(MY.conf.P_PJDETAIL, false);
  };

  Contents.prototype.setPjDetail = function(pjId, isAnimate, delay, isChangeUrl, isPhotoAnimate) {
    var photo;
    if (isAnimate == null) {
      isAnimate = true;
    }
    delay = delay || MY.conf.PARTS_SHOW_DELAY;
    if (isChangeUrl == null) {
      isChangeUrl = true;
    }
    if (isPhotoAnimate == null) {
      isPhotoAnimate = isAnimate;
    }
    this._header.setBgOpacity(1);
    this._header.setActive(MY.conf.M_PROJECTS);
    photo = this.getObj(MY.conf.P_PHOTO);
    photo.selectImg(pjId);
    photo.setType(MY.conf.TYPE_PHOTO_PROJECT_DETAIL, isPhotoAnimate);
    this.hideParts(MY.conf.P_TOP, isAnimate, MY.conf.PARTS_HIDE_DELAY);
    this.hideParts(MY.conf.P_PJTOP, isAnimate, MY.conf.PARTS_HIDE_DELAY);
    this.hideParts(MY.conf.P_ABOUT_C, isAnimate);
    this.hideParts(MY.conf.P_ABOUT, isAnimate, 0);
    this.getObj(MY.conf.P_PJDETAIL).setPartsId(pjId);
    this.showParts(MY.conf.P_PJDETAIL, isAnimate, delay);
    if (!this._simpleHeader.isShow()) {
      this._header.setFixMode(true);
      this._header.hide(isAnimate, MY.conf.DETAIL_EXPAND_DELAY);
      this._simpleHeader.show(isAnimate, MY.conf.DETAIL_EXPAND_DELAY);
    }
    return this.setPageUrl(MY.conf.M_PROJECTS_D, pjId, isChangeUrl);
  };

  Contents.prototype.getHeader = function() {
    return this._header;
  };

  Contents.prototype.getSpgnavi = function() {
    return this._spgnavi;
  };

  Contents.prototype._resize = function(w, h) {};

  Contents.prototype._update = function() {};

  return Contents;

})();

module.exports = Contents;


},{"./about/About":10,"./header/Header":20,"./header/SimpleHeader":22,"./header/SpGnavi":23,"./parts/AboutCover":39,"./parts/Loading":42,"./photo/Photo":52,"./pj/PjTop":55,"./pjDetail/PjDetail":57,"./top/Top":60}],3:[function(require,module,exports){
var Func,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  slice = [].slice;

Func = (function() {
  function Func() {
    this.goEnPage = bind(this.goEnPage, this);
    this.goJpPage = bind(this.goJpPage, this);
    this.trackPageView = bind(this.trackPageView, this);
    this.setTitle = bind(this.setTitle, this);
    this.historyAdd = bind(this.historyAdd, this);
    this.getLOType = bind(this.getLOType, this);
    this.getLOVal = bind(this.getLOVal, this);
    this.makeRspsvClass = bind(this.makeRspsvClass, this);
    this.makeRspsvImgSrc = bind(this.makeRspsvImgSrc, this);
    this.log = bind(this.log, this);
    this.getPjDetailId = bind(this.getPjDetailId, this);
    this.getPage = bind(this.getPage, this);
    this.getLang = bind(this.getLang, this);
    this.getConNum = bind(this.getConNum, this);
    this._conNum = -1;
  }

  Func.prototype.getConNum = function() {
    if (this._conNum === -1) {
      this._conNum = Number($("#xTop").context.childNodes.length);
    }
    return this._conNum;
  };

  Func.prototype.getLang = function() {
    if (location.href.indexOf("/en") !== -1) {
      return MY.conf.L_EN;
    } else {
      return MY.conf.L_JP;
    }
  };

  Func.prototype.getPage = function() {
    var i, url;
    url = location.href;
    if (url.indexOf("/" + MY.conf.DIR_NAME[MY.conf.M_ABOUT]) !== -1) {
      return MY.conf.M_ABOUT;
    } else if (url.indexOf("/" + MY.conf.DIR_NAME[MY.conf.M_PROJECTS]) !== -1) {
      i = this.getLang() === MY.conf.L_JP ? 6 : 7;
      if ((url.split("/")).length >= i) {
        return MY.conf.M_PROJECTS_D;
      } else {
        return MY.conf.M_PROJECTS;
      }
    } else {
      return MY.conf.M_TOP;
    }
  };

  Func.prototype.getPjDetailId = function() {
    var i, id, url;
    url = location.href;
    i = this.getLang() === MY.conf.L_JP ? 4 : 5;
    id = String(url.split("/")[i]);
    if (id.substr(0, 1) === "0") {
      id = Number(id.substr(1));
    }
    return this.getConNum() - id;
  };

  Func.prototype.log = function() {
    var params;
    params = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    if (MY.conf.FLG.LOG) {
      if ((typeof console !== "undefined" && console !== null) && (console.log != null)) {
        return console.log.apply(console, params);
      }
    }
  };

  Func.prototype.makeRspsvImgSrc = function(src0, src1) {
    var arr;
    arr = [];
    arr[MY.conf.LO_0] = src0;
    arr[MY.conf.LO_1] = src1;
    return arr;
  };

  Func.prototype.makeRspsvClass = function(class0, class1) {
    var arr;
    arr = [];
    arr[MY.conf.LO_0] = class0;
    arr[MY.conf.LO_1] = class1;
    return arr;
  };

  Func.prototype.getLOVal = function(val0, val1) {
    switch (this.getLOType()) {
      case MY.conf.LO_0:
        return val0;
      case MY.conf.LO_1:
        return val1;
    }
  };

  Func.prototype.getLOType = function() {
    var sw;
    if (MY.u.isSmt()) {
      return MY.conf.LO_1;
    }
    sw = MY.resize.sw();
    if (sw > MY.conf.BP_0) {
      return MY.conf.LO_0;
    } else {
      return MY.conf.LO_1;
    }
  };

  Func.prototype.historyAdd = function(dir) {
    var url;
    if (typeof history !== "undefined" && history !== null) {
      if (this.getLang() === MY.conf.L_EN) {
        url = "/en/" + dir;
      } else {
        url = "/" + dir;
      }
      history.replaceState("index", null, null);
      history.pushState(dir, null, url);
      return this.log("historyAdd::", dir);
    }
  };

  Func.prototype.setTitle = function(title) {
    document.title = title;
    return $("title").text(title);
  };

  Func.prototype.trackPageView = function(url) {
    if (typeof ga !== "undefined" && ga !== null) {
      this.log("##################### trackPageView::", url);
      return ga('send', 'pageview', url);
    }
  };

  Func.prototype.goJpPage = function() {
    return location.href = "/";
  };

  Func.prototype.goEnPage = function() {
    return location.href = "/en/";
  };

  return Func;

})();

module.exports = Func;


},{}],4:[function(require,module,exports){
var Conf, Contents, DelayMgr, Func, Main, Mouse, Param, Preloader, Profiler, ResizeMgr, Scroller, UpdateMgr, Utils,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

UpdateMgr = require('./libs/mgr/UpdateMgr');

ResizeMgr = require('./libs/mgr/ResizeMgr');

DelayMgr = require('./libs/mgr/DelayMgr');

Utils = require('./libs/Utils');

Contents = require('./Contents');

Conf = require('./Conf');

Func = require('./Func');

Param = require('./Param');

Profiler = require('./Profiler');

Preloader = require('./Preloader');

Scroller = require('./Scroller');

Mouse = require('./Mouse');

Main = (function() {
  function Main() {
    this._update = bind(this._update, this);
    this.init = bind(this.init, this);
  }

  Main.prototype.init = function() {
    window.MY = {};
    MY.conf = new Conf();
    MY.u = new Utils();
    MY.update = new UpdateMgr();
    MY.update.add(this._update);
    MY.resize = new ResizeMgr();
    MY.delay = new DelayMgr();
    MY.f = new Func();
    MY.scroller = new Scroller();
    MY.param = new Param();
    MY.profiler = new Profiler();
    MY.pre = new Preloader();
    MY.mouse = new Mouse();
    MY.c = new Contents();
    return MY.c.init();
  };

  Main.prototype._update = function() {
    return MY.delay.update();
  };

  return Main;

})();

$(window).ready((function(_this) {
  return function() {
    var app;
    app = new Main();
    app.init();
    return window.MY.main = app;
  };
})(this));


},{"./Conf":1,"./Contents":2,"./Func":3,"./Mouse":5,"./Param":6,"./Preloader":7,"./Profiler":8,"./Scroller":9,"./libs/Utils":25,"./libs/mgr/DelayMgr":34,"./libs/mgr/ResizeMgr":35,"./libs/mgr/UpdateMgr":36}],5:[function(require,module,exports){
var Mouse,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Mouse = (function() {
  function Mouse() {
    this.dist = bind(this.dist, this);
    this._eMouseMove = bind(this._eMouseMove, this);
    this._init = bind(this._init, this);
    this.x = 0;
    this.y = 0;
    this.oldX = 0;
    this.oldY = 0;
    this._init();
  }

  Mouse.prototype._init = function() {
    return $(window).on("mousemove", this._eMouseMove);
  };

  Mouse.prototype._eMouseMove = function(e) {
    this.oldX = this.x;
    this.oldY = this.y;
    this.x = e.clientX;
    return this.y = e.clientY;
  };

  Mouse.prototype.dist = function(tx, ty) {
    var dx, dy;
    dx = tx - this.x;
    dy = ty - this.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  return Mouse;

})();

module.exports = Mouse;


},{}],6:[function(require,module,exports){
var Param,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Param = (function() {
  function Param() {
    this._init = bind(this._init, this);
    this._gui;
    this.appName = "MASS";
    this.zKeisu = 200;
    this.alpha = 40;
    this.rx = 15;
    this.ry = 15;
    this.rz = 50;
    this.camZ = 8;
    this._init();
  }

  Param.prototype._init = function() {
    if (MY.conf.FLG.PARAM) {
      this._gui = new dat.GUI();
      return $(".dg").css({
        zIndex: 99999
      });
    }
  };

  return Param;

})();

module.exports = Param;


},{}],7:[function(require,module,exports){
var ImagesLoader, Preloader,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

ImagesLoader = require('./libs/img/ImagesLoader');

Preloader = (function() {
  function Preloader() {
    this._eLJsonComplete = bind(this._eLJsonComplete, this);
    this._eMJsonComplete = bind(this._eMJsonComplete, this);
    this._eImgComplete = bind(this._eImgComplete, this);
    this._eImgProgress = bind(this._eImgProgress, this);
    this.load = bind(this.load, this);
    this.init = bind(this.init, this);
    this._imgLoader;
    this.onProgress;
    this.onComplete;
  }

  Preloader.prototype.init = function() {};

  Preloader.prototype.load = function() {
    var i, imgList, num;
    imgList = [];
    num = MY.f.getConNum();
    i = 0;
    while (i < num) {
      imgList.push({
        id: imgList.length,
        url: MY.conf.IMG_PATH + "/photo/" + String(i) + ".jpg"
      });
      i++;
    }
    imgList.push({
      id: imgList.length,
      url: MY.conf.IMG_PATH + "/about/0.jpg"
    });
    imgList.push({
      id: imgList.length,
      url: MY.conf.IMG_PATH + "/about/1.jpg"
    });
    imgList.push({
      id: imgList.length,
      url: MY.conf.IMG_PATH + "/about/2.jpg"
    });
    this._imgLoader = new ImagesLoader(imgList, 5);
    this._imgLoader.onComplete = this._eImgComplete;
    this._imgLoader.onProgress = this._eImgProgress;
    return this._imgLoader.start();
  };

  Preloader.prototype._eImgProgress = function(pct) {
    if (this.onProgress != null) {
      return this.onProgress(pct / 100);
    }
  };

  Preloader.prototype._eImgComplete = function() {
    return $.getJSON(MY.conf.META_JSON, this._eMJsonComplete);
  };

  Preloader.prototype._eMJsonComplete = function(e) {
    var add, i, test;
    add = "";
    if (MY.f.getLang() === MY.conf.L_EN) {
      add = "en_";
    }
    MY.conf.PAGE_TTL[MY.conf.M_TOP] = e[add + "home"].title;
    MY.conf.PAGE_TTL[MY.conf.M_PROJECTS] = e[add + "projects"].title;
    MY.conf.PAGE_TTL[MY.conf.M_ABOUT] = e[add + "about"].title;
    MY.conf.PAGE_TTL[MY.conf.M_PROJECTS_D] = [];
    i = 1;
    while (1) {
      test = e[add + "projects" + MY.u.numStr(i, 2)];
      if (test != null) {
        MY.conf.PAGE_TTL[MY.conf.M_PROJECTS_D].push(test.title);
        i++;
      } else {
        break;
      }
    }
    return $.getJSON(MY.conf.LOGO_JSON, this._eLJsonComplete);
  };

  Preloader.prototype._eLJsonComplete = function(e) {
    MY.conf.MASS_VERTEX = e;
    if (this.onComplete != null) {
      return this.onComplete();
    }
  };

  return Preloader;

})();

module.exports = Preloader;


},{"./libs/img/ImagesLoader":31}],8:[function(require,module,exports){
var Profiler,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Profiler = (function() {
  function Profiler() {
    this._update = bind(this._update, this);
    this._init = bind(this._init, this);
    this._stats;
    this._init();
  }

  Profiler.prototype._init = function() {
    if (MY.conf.FLG.STATS) {
      this._stats = new Stats();
      this._stats.domElement.style.position = "fixed";
      this._stats.domElement.style.left = "0px";
      this._stats.domElement.style.bottom = "0px";
      document.body.appendChild(this._stats.domElement);
      return MY.update.add(this._update);
    }
  };

  Profiler.prototype._update = function() {
    if (this._stats != null) {
      return this._stats.update();
    }
  };

  return Profiler;

})();

module.exports = Profiler;


},{}],9:[function(require,module,exports){
var AniParam, Scroller,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

AniParam = require('./base/AniParam');

Scroller = (function() {
  function Scroller() {
    this._update = bind(this._update, this);
    this.scroll = bind(this.scroll, this);
    this._init = bind(this._init, this);
    this._tg;
    this._ap = new AniParam();
    this._isScroll = false;
    this.onComplete;
    this._init();
  }

  Scroller.prototype._init = function() {
    this._tg = $(window);
    this._ap.tEaseE = 0.5;
    return MY.update.add(this._update);
  };

  Scroller.prototype.scroll = function(t, delay, callBack, isAnimate) {
    delay = delay || 0;
    if (isAnimate == null) {
      isAnimate = true;
    }
    this.onComplete = callBack;
    this._isScroll = true;
    this._ap.y = this._tg.scrollTop();
    this._ap.ty = t;
    this._ap.resetE().delay(delay);
    if (Math.abs(this._ap.y - this._ap.ty) < 1) {
      isAnimate = false;
    }
    if (!isAnimate) {
      this._ap.finish();
    }
    return this._update();
  };

  Scroller.prototype._update = function() {
    if (this._isScroll) {
      this._ap.update();
      this._tg.scrollTop(this._ap.y);
      if (this._ap.isFinish()) {
        this._isScroll = false;
        if (this.onComplete != null) {
          return this.onComplete();
        }
      }
    }
  };

  return Scroller;

})();

module.exports = Scroller;


},{"./base/AniParam":14}],10:[function(require,module,exports){
var About, AboutCaption, AboutGra, DisplayImg, MyDisplay, ResponsiveImg, ScrollBtn, ToTopBtn,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MyDisplay = require('../base/MyDisplay');

ResponsiveImg = require('../parts/ResponsiveImg');

DisplayImg = require('../libs/display/DisplayImg');

ToTopBtn = require('../parts/ToTopBtn');

ScrollBtn = require('../parts/ScrollBtn');

AboutGra = require('./AboutGra');

AboutCaption = require('./AboutCaption');

About = (function(superClass) {
  extend(About, superClass);

  function About() {
    this._update = bind(this._update, this);
    this._setTxtSizePos = bind(this._setTxtSizePos, this);
    this._resize = bind(this._resize, this);
    this._eClickScrollBtn = bind(this._eClickScrollBtn, this);
    this.show = bind(this.show, this);
    this.hide = bind(this.hide, this);
    this.isShow = bind(this.isShow, this);
    this._makeLine = bind(this._makeLine, this);
    this._makePartsImg = bind(this._makePartsImg, this);
    this._makeSla = bind(this._makeSla, this);
    this._makeTxt = bind(this._makeTxt, this);
    this.init = bind(this.init, this);
    About.__super__.constructor.call(this, {
      id: "xAbout"
    });
    this._ttl;
    this._subTtl;
    this._bg0;
    this._bg1;
    this._photo = [];
    this._txt = [];
    this._aside = [];
    this._slaTxt = [];
    this._caption = [];
    this._logo;
    this._lines = [];
    this._gra;
    this._scrollBtn;
    this._topBtn;
    this._isShow = false;
  }

  About.prototype.init = function() {
    var aside, caption, i, img, num, txt, txts;
    About.__super__.init.call(this);
    this._bg1 = this._makeDisplay();
    this.unshift(this._bg1);
    this._bg1.bgColor("#f4f4f4");
    this._gra = new AboutGra();
    this._gra.init();
    this._bg0 = this._makeDisplay();
    this.unshift(this._bg0);
    this._bg0.bgColor("#FFF");
    this._ttl = this._makeResponsiveDisplay("xAboutTtl", MY.f.makeRspsvClass("aboutTtl_0", "aboutTtl_1"));
    if (MY.f.getLang() === MY.conf.L_JP) {
      this._subTtl = this._makeResponsiveDisplay("xAboutSubTtl", MY.f.makeRspsvClass("aboutSubTtl_0", "aboutSubTtl_1"));
    }
    i = 0;
    num = 3;
    while (i < num) {
      img = this._makePartsImg(MY.f.makeRspsvImgSrc([MY.conf.IMG_PATH + "/about/" + String(i) + ".jpg", false], [MY.conf.IMG_PATH + "/about/" + String(i) + ".jpg", true]));
      this.add(img);
      this._photo.push(img);
      i++;
    }
    i = 0;
    num = 6;
    while (i < num) {
      txt = this._makeTxt("xAboutTxt" + String(i), "aboutTxt" + String(i));
      this._txt.push(txt);
      i++;
    }
    i = 0;
    num = 5;
    while (i < num) {
      txts = this._makeSla();
      this.add(txts);
      txts.elm().html("/").addClass("bold");
      this._slaTxt.push(txts);
      i++;
    }
    i = 0;
    num = 6;
    while (i < num) {
      caption = new AboutCaption(i);
      caption.init();
      this.add(caption);
      this._caption.push(caption);
      i++;
    }
    i = 0;
    num = 20;
    while (i < num) {
      aside = this._makeTxt("xAboutAside" + String(i), "aboutAside" + String(i));
      this._aside.push(aside);
      i++;
    }
    this._logo = new ResponsiveImg(MY.f.makeRspsvImgSrc([MY.conf.IMG_PATH + "/parts/logo.png", false], [MY.conf.IMG_PATH + "/parts/logo.png", true]));
    this._logo.init();
    this.add(this._logo);
    this._lines.push(this._makeLine("#cccccc"));
    this._lines.push(this._makeLine("#cccccc"));
    this._scrollBtn = new ScrollBtn(MY.f.makeRspsvImgSrc([MY.conf.IMG_PATH + "/about/scroll.png", false], [MY.conf.IMG_PATH + "/about/scroll.png", true]));
    this._scrollBtn.init();
    this._scrollBtn.onClick = this._eClickScrollBtn;
    this.add(this._scrollBtn);
    this._topBtn = new ToTopBtn();
    this._topBtn.init();
    this.add(this._topBtn);
    this._makeAnimation(2);
    this.mask(true);
    this._resize();
    return this.hide(false);
  };

  About.prototype._makeTxt = function(domId, txtId) {
    return this._makeResponsiveDisplay(domId, MY.f.makeRspsvClass(txtId + "_0", txtId + "_1"));
  };

  About.prototype._makeSla = function() {
    return this._makeResponsiveDisplay(null, MY.f.makeRspsvClass("aboutSla_0", "aboutSla_1"));
  };

  About.prototype._makePartsImg = function(imgs) {
    var parts;
    parts = new ResponsiveImg(imgs);
    parts.init();
    return parts;
  };

  About.prototype._makeLine = function(color) {
    var line;
    if (color == null) {
      color = "#000000";
    }
    line = this._makeDisplay();
    this.add(line);
    line.bgColor(color);
    return line;
  };

  About.prototype.isShow = function() {
    return this._isShow;
  };

  About.prototype.hide = function(isAnimate, delay) {
    var a;
    if (isAnimate == null) {
      isAnimate = true;
    }
    delay = delay || 0;
    this._bg0.opacity(1);
    this._bg0.render();
    if (this._gra != null) {
      this._gra.hide();
    }
    this._isShow = false;
    a = this._anm[0];
    a.set({
      y: {
        from: 0,
        to: this._sh
      },
      ease: MY.conf.ABOUT_PARAM.EASE,
      delay: delay,
      frame: MY.conf.ABOUT_PARAM.FRAME * 0.5,
      onComplete: (function(_this) {
        return function() {
          _this.visible(false);
          return _this.render();
        };
      })(this)
    });
    a.start();
    if (!isAnimate) {
      a.finish();
    }
    if (this._gra != null) {
      this._gra.isUpdate = false;
    }
    return this._update();
  };

  About.prototype.show = function(isAnimate, delay) {
    var a, a2;
    if (isAnimate == null) {
      isAnimate = true;
    }
    delay = delay || 0;
    this._isShow = true;
    this.visible(true);
    this.render();
    this._resize();
    a = this._anm[0];
    a.set({
      y: {
        from: this._sh,
        to: 0
      },
      ease: MY.conf.ABOUT_PARAM.EASE,
      delay: delay,
      frame: MY.conf.ABOUT_PARAM.FRAME,
      onComplete: (function(_this) {
        return function() {
          MY.c.setHome();
          _this._bg0.opacity(0);
          _this._bg0.render();
          if (_this._gra != null) {
            return _this._gra.show();
          }
        };
      })(this)
    });
    a.start();
    a2 = this._anm[1];
    a2.set({
      opacity: {
        from: 0,
        to: 1
      },
      y: {
        from: -40,
        to: 0
      },
      ease: "outQuad",
      delay: delay + MY.conf.ABOUT_PARAM.FRAME + 30,
      frame: 80
    });
    a2.start();
    if (!isAnimate) {
      a.finish();
    }
    return this._update();
  };

  About.prototype._eClickScrollBtn = function() {
    var t;
    t = this._sh - 80;
    return MY.scroller.scroll(t, 0);
  };

  About.prototype._resize = function(w, h) {
    var capBottomMargin, cmnBtmMargin, cmnBtmMargin2, conW, i, j, k, l, len, len1, len2, len3, len4, m, n, ref, ref1, ref2, ref3, ref4, slaMargin, spGrpMargin, ttlHeight, txtW, val;
    About.__super__._resize.call(this, w, h);
    if (!this.isVisible()) {
      return;
    }
    conW = this._sw - MY.conf.PJDETAIL_X_MARGIN[this._lo] * 2;
    if (this._lo === MY.conf.LO_0) {
      conW = Math.min(conW, MY.conf.PJDETAIL_MAX_WIDTH);
    }
    txtW = conW - MY.conf.PJDETAIL_TXT_X_MARGIN[this._lo] * 2;
    capBottomMargin = MY.f.getLOVal(10, 12);
    spGrpMargin = 30;
    this._gra.setSize(this._sw, MY.f.getLOVal(this._sh, 180));
    this._gra.xy(~~(this._sw * 0.5 - this._sw * 0.5), MY.f.getLOVal(0, 68));
    this._gra.css().position = MY.f.getLOVal("fixed", "absolute");
    this._gra.render();
    this._scrollBtn._resize();
    this._scrollBtn.visible(this._lo === MY.conf.LO_0);
    this._scrollBtn.xy(~~(this._sw * 0.5 - this._scrollBtn.width() * 0.5), this._sh - this._scrollBtn.height() - 30);
    this._scrollBtn.render();
    this._ttl.update();
    this._ttl.width(conW);
    this._ttl.xy(~~(this._sw * 0.5 - this._ttl.width() * 0.5), ~~(this._gra.y() + this._gra.height() * 0.5 - this._ttl.height() * 0.5));
    this._ttl.render();
    if (this._subTtl != null) {
      this._subTtl.update();
      this._subTtl.width(conW);
      this._subTtl.xy(~~(this._sw * 0.5 - this._subTtl.width() * 0.5), this._ttl.bottom() + MY.f.getLOVal(5, 10));
      this._subTtl.render();
      ttlHeight = this._subTtl.bottom() - this._ttl.y();
      this._ttl.y(~~(this._gra.y() + this._gra.height() * 0.5 - ttlHeight * 0.5));
      this._ttl.render();
      this._subTtl.y(this._ttl.bottom() + MY.f.getLOVal(5, 10));
      this._subTtl.render();
    }
    ref = this._photo;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      val = ref[i];
      val.update();
    }
    ref1 = this._txt;
    for (i = k = 0, len1 = ref1.length; k < len1; i = ++k) {
      val = ref1[i];
      val.update();
    }
    ref2 = this._slaTxt;
    for (i = l = 0, len2 = ref2.length; l < len2; i = ++l) {
      val = ref2[i];
      val.update();
    }
    ref3 = this._caption;
    for (i = m = 0, len3 = ref3.length; m < len3; i = ++m) {
      val = ref3[i];
      val.update();
    }
    ref4 = this._aside;
    for (i = n = 0, len4 = ref4.length; n < len4; i = ++n) {
      val = ref4[i];
      val.update();
    }
    this._photo[0].setImgWidth(MY.f.getLOVal(~~(conW * 0.5), conW));
    this._photo[0].xy(MY.f.getLOVal(~~(this._sw * 0.5 - this._photo[0].width()), 0), this._gra.bottom() + MY.f.getLOVal(0, 40));
    this._photo[0].render();
    this._caption[0].flush(true, MY.f.getLOVal("left", "center"));
    this._caption[0].xy(MY.f.getLOVal(this._photo[0].right() + 90, ~~(this._sw * 0.5 - this._caption[0].width() * 0.5)), MY.f.getLOVal(~~(this._photo[0].y() + this._photo[0].height() * 0.5 - (this._txt[0].height() + this._caption[0].height()) * 0.5), this._photo[0].bottom() + 25));
    this._caption[0].render();
    if (this._lo === MY.conf.LO_0 && this._caption[0].y() < this._gra.bottom()) {
      this._caption[0].y(this._gra.bottom());
      this._caption[0].render();
    }
    this._txt[0].width(MY.f.getLOVal(~~(conW * 0.5 - 100), txtW));
    this._txt[0].render();
    this._txt[0].xy(MY.f.getLOVal(this._caption[0].x(), ~~(this._sw * 0.5 - txtW * 0.5)), this._caption[0].bottom() + capBottomMargin);
    this._txt[0].render();
    if (this._lo === MY.conf.LO_0 && this._caption[0].y() === this._gra.bottom()) {
      this._photo[0].y(~~(this._caption[0].y() + (this._txt[0].bottom() - this._caption[0].y()) * 0.5 - this._photo[0].height() * 0.5));
      this._photo[0].render();
    }
    this._caption[2].flush(this._lo === MY.conf.LO_0);
    this._caption[2].xy(~~(this._sw * 0.5 - txtW * 0.5), Math.max(this._txt[0].bottom(), this._photo[0].bottom()) + MY.f.getLOVal(80, spGrpMargin));
    this._caption[2].render();
    this._setTxtSizePos(2, MY.f.getLOVal(txtW * 0.5 - 30, txtW), capBottomMargin);
    this._caption[3].flush(this._lo === MY.conf.LO_0);
    this._caption[3].xy(MY.f.getLOVal(~~(this._sw * 0.5 + 30), this._caption[2].x()), MY.f.getLOVal(this._caption[2].y(), this._txt[2].bottom() + spGrpMargin));
    this._caption[3].render();
    this._setTxtSizePos(3, this._txt[2].width(), capBottomMargin);
    this._caption[4].flush(this._lo === MY.conf.LO_0);
    this._caption[4].xy(this._caption[2].x(), Math.max(this._txt[2].bottom(), this._txt[3].bottom()) + MY.f.getLOVal(60, spGrpMargin));
    this._caption[4].render();
    this._setTxtSizePos(4, this._txt[2].width(), capBottomMargin);
    this._caption[5].flush(this._lo === MY.conf.LO_0);
    this._caption[5].xy(MY.f.getLOVal(this._caption[3].x(), this._caption[2].x()), MY.f.getLOVal(this._caption[4].y(), this._txt[4].bottom() + spGrpMargin));
    this._caption[5].render();
    this._setTxtSizePos(5, this._txt[2].width(), capBottomMargin);
    if (this._lo === MY.conf.LO_0) {
      this._photo[1].setImgWidth(conW * 0.5);
      this._photo[1].xy(~~(this._sw * 0.5 - this._photo[1].width()), Math.max(this._txt[4].bottom(), this._txt[5].bottom()) + 100);
      this._photo[1].render();
      this._photo[2].setImgWidth(this._photo[1].width());
      this._photo[2].xy(this._photo[1].right(), this._photo[1].y());
      this._photo[2].render();
    } else {
      this._photo[1].setImgWidth(conW);
      this._photo[1].xy(0, Math.max(this._txt[4].bottom(), this._txt[5].bottom()) + spGrpMargin);
      this._photo[1].render();
      this._photo[2].setImgWidth(this._photo[1].width());
      this._photo[2].xy(this._photo[1].x(), this._photo[1].bottom());
      this._photo[2].render();
    }
    this._caption[1].flush(true, "center");
    this._caption[1].xy(~~(this._sw * 0.5 - this._caption[1].width() * 0.5), this._photo[2].bottom() + MY.f.getLOVal(100, spGrpMargin));
    this._caption[1].render();
    this._txt[1].width(txtW);
    this._txt[1].xy(this._caption[2].x(), this._caption[1].bottom() + capBottomMargin);
    this._txt[1].render();
    this._logo.update();
    this._logo.setImgWidth(MY.f.getLOVal(170, 100));
    this._logo.xy(~~(this._sw * 0.5 - this._logo.width() * 0.5), this._txt[1].bottom() + MY.f.getLOVal(175, 50));
    this._logo.render();
    this._aside[0].xy(MY.f.getLOVal(this._logo.x() - 267, 20), MY.f.getLOVal(this._txt[1].bottom() + 300, this._txt[1].bottom() + 120));
    this._aside[0].render();
    this._aside[1].width(~~(conW * 0.6));
    this._aside[1].xy(this._logo.x() + MY.f.getLOVal(-46, -10), this._aside[0].y());
    this._aside[1].render();
    this._aside[2].xy(this._aside[0].x(), MY.f.getLOVal(this._aside[1].bottom() + 60, this._aside[1].bottom() + 25));
    this._aside[2].render();
    if (this._lo === MY.conf.LO_0) {
      cmnBtmMargin = 14;
      slaMargin = 12;
      this._aside[9].xy(this._aside[1].x() + this._aside[4].width() + 10, this._aside[2].y());
      this._aside[9].render();
      this._aside[3].xy(this._aside[1].x(), this._aside[2].y());
      this._aside[3].render();
      this._aside[15].xy(this._aside[9].x() + this._aside[10].width() + 20, this._aside[2].y());
      this._aside[15].render();
      this._slaTxt[0].xy(this._aside[15].x() - slaMargin, this._aside[15].y());
      this._slaTxt[0].render();
      this._aside[4].xy(this._aside[1].x(), this._aside[3].bottom() + cmnBtmMargin);
      this._aside[4].render();
      this._aside[10].xy(this._aside[9].x(), this._aside[4].y());
      this._aside[10].render();
      this._aside[16].xy(this._aside[15].x(), this._aside[4].y());
      this._aside[16].render();
      this._slaTxt[1].xy(this._aside[16].x() - slaMargin, this._aside[16].y());
      this._slaTxt[1].render();
      this._aside[5].xy(this._aside[1].x(), this._aside[4].bottom() + cmnBtmMargin);
      this._aside[5].render();
      this._aside[11].xy(this._aside[9].x(), this._aside[5].y());
      this._aside[11].render();
      this._aside[17].xy(this._aside[15].x(), this._aside[5].y());
      this._aside[17].render();
      this._slaTxt[2].xy(this._aside[17].x() - slaMargin, this._aside[17].y());
      this._slaTxt[2].render();
      this._aside[6].xy(this._aside[1].x(), this._aside[5].bottom() + cmnBtmMargin);
      this._aside[6].render();
      this._aside[12].xy(this._aside[9].x(), this._aside[6].y());
      this._aside[12].render();
      this._aside[18].xy(this._aside[15].x(), this._aside[6].y());
      this._aside[18].render();
      this._slaTxt[3].xy(this._aside[18].x() - slaMargin, this._aside[18].y());
      this._slaTxt[3].render();
      this._aside[7].xy(this._aside[1].x(), this._aside[6].bottom() + cmnBtmMargin);
      this._aside[7].render();
      this._aside[13].xy(this._aside[9].x(), this._aside[7].y());
      this._aside[13].render();
      this._aside[19].xy(this._aside[15].x(), this._aside[7].y());
      this._aside[19].render();
      this._slaTxt[4].xy(this._aside[19].x() - slaMargin, this._aside[19].y());
      this._slaTxt[4].render();
      this._aside[8].xy(this._aside[1].x(), this._aside[7].bottom() + cmnBtmMargin);
      this._aside[8].render();
      this._aside[14].xy(this._aside[9].x(), this._aside[8].y());
      this._aside[14].render();
      this._lines[0].visible(true);
      this._lines[0].size(1, this._aside[1].height());
      this._lines[0].xy(this._aside[0].right() + (this._aside[1].x() - this._aside[0].right()) * 0.5, this._aside[0].y());
      this._lines[0].render();
      this._lines[1].visible(true);
      this._lines[1].size(1, this._aside[8].bottom() - this._aside[2].y());
      this._lines[1].xy(this._lines[0].x(), this._aside[2].y());
      this._lines[1].render();
    } else {
      cmnBtmMargin = 4;
      cmnBtmMargin2 = 15;
      slaMargin = 8;
      this._aside[3].xy(this._aside[1].x(), this._aside[2].y());
      this._aside[3].render();
      this._aside[9].xy(this._aside[3].x(), this._aside[3].bottom() + cmnBtmMargin);
      this._aside[9].render();
      this._aside[15].xy(this._aside[9].x() + this._aside[10].width() + 18, this._aside[9].y());
      this._aside[15].render();
      this._slaTxt[0].xy(this._aside[15].x() - slaMargin, this._aside[15].y());
      this._slaTxt[0].render();
      this._aside[4].xy(this._aside[1].x(), this._aside[9].bottom() + cmnBtmMargin2);
      this._aside[4].render();
      this._aside[10].xy(this._aside[3].x(), this._aside[4].bottom() + cmnBtmMargin);
      this._aside[10].render();
      this._aside[16].xy(this._aside[15].x(), this._aside[10].y());
      this._aside[16].render();
      this._slaTxt[1].xy(this._aside[16].x() - slaMargin, this._aside[16].y());
      this._slaTxt[1].render();
      this._aside[5].xy(this._aside[1].x(), this._aside[10].bottom() + cmnBtmMargin2);
      this._aside[5].render();
      this._aside[11].xy(this._aside[3].x(), this._aside[5].bottom() + cmnBtmMargin);
      this._aside[11].render();
      this._aside[17].xy(this._aside[15].x(), this._aside[11].y());
      this._aside[17].render();
      this._slaTxt[2].xy(this._aside[17].x() - slaMargin, this._aside[17].y());
      this._slaTxt[2].render();
      this._aside[6].xy(this._aside[1].x(), this._aside[11].bottom() + cmnBtmMargin2);
      this._aside[6].render();
      this._aside[12].xy(this._aside[3].x(), this._aside[6].bottom() + cmnBtmMargin);
      this._aside[12].render();
      this._aside[18].xy(this._aside[15].x(), this._aside[12].y());
      this._aside[18].render();
      this._slaTxt[3].xy(this._aside[18].x() - slaMargin, this._aside[18].y());
      this._slaTxt[3].render();
      this._aside[7].xy(this._aside[1].x(), this._aside[12].bottom() + cmnBtmMargin2);
      this._aside[7].render();
      this._aside[13].xy(this._aside[3].x(), this._aside[7].bottom() + cmnBtmMargin);
      this._aside[13].render();
      this._aside[19].width(~~(this._sw * 0.5));
      this._aside[19].xy(this._aside[15].x(), this._aside[13].y());
      this._aside[19].render();
      this._slaTxt[4].xy(this._aside[19].x() - slaMargin, this._aside[19].y());
      this._slaTxt[4].render();
      this._aside[8].xy(this._aside[1].x(), this._aside[19].bottom() + cmnBtmMargin2);
      this._aside[8].render();
      this._aside[14].xy(this._aside[3].x(), this._aside[8].bottom() + cmnBtmMargin);
      this._aside[14].render();
      this._lines[0].visible(false);
      this._lines[0].render();
      this._lines[1].visible(false);
      this._lines[1].render();
    }
    this._bg0.size(this._sw, MY.f.getLOVal(this._aside[14].bottom() + 240, this._aside[14].bottom() + MY.f.getLOVal(90, 100)));
    this._bg0.render();
    this._bg1.xy(~~(this._sw * 0.5 - conW * 0.5), MY.f.getLOVal(this._txt[1].bottom() + 110, this._logo.y() - 35));
    this._bg1.size(conW, MY.f.getLOVal(this._aside[14].bottom() + 70, this._aside[14].bottom() + 30) - this._bg1.y());
    this._bg1.render();
    this._topBtn._resize();
    this._topBtn.xy(~~(this._sw * 0.5 - this._topBtn.width() * 0.5), this._bg1.bottom() + MY.f.getLOVal(60, 20));
    this._topBtn.render();
    this.size(this._sw, this._bg0.height());
    return this.render();
  };

  About.prototype._setTxtSizePos = function(txtId, w, capBottomMargin) {
    this._txt[txtId].width(w);
    this._txt[txtId].xy(this._caption[txtId].x(), this._caption[txtId].bottom() + capBottomMargin);
    return this._txt[txtId].render();
  };

  About.prototype._update = function() {
    var a, o, s, to;
    About.__super__._update.call(this);
    if (!this.isVisible()) {
      return;
    }
    a = this._anm[0];
    this.translate(0, a.get("y"));
    this.render();
    this._ttl.opacity(this._anm[1].get("opacity"));
    this._ttl.translate(0, this._anm[1].get("y"));
    this._ttl.render();
    if (this._subTtl != null) {
      this._subTtl.opacity(this._anm[1].get("opacity"));
      this._subTtl.translate(0, this._anm[1].get("y"));
      this._subTtl.render();
    }
    s = $(window).scrollTop();
    if (s >= this._scrollBtn.height()) {
      to = 0;
    } else {
      to = 1;
    }
    o = this._scrollBtn.opacity() + (to - this._scrollBtn.opacity()) * 0.2;
    this._scrollBtn.opacity(o);
    return this._scrollBtn.render();
  };

  return About;

})(MyDisplay);

module.exports = About;


},{"../base/MyDisplay":16,"../libs/display/DisplayImg":29,"../parts/ResponsiveImg":45,"../parts/ScrollBtn":46,"../parts/ToTopBtn":51,"./AboutCaption":11,"./AboutGra":12}],11:[function(require,module,exports){
var AboutCaption, MyDisplay, Rect, ResponsiveDisplay,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Rect = require('../libs/object/Rect');

MyDisplay = require('../base/MyDisplay');

ResponsiveDisplay = require('../parts/ResponsiveDisplay');

AboutCaption = (function(superClass) {
  extend(AboutCaption, superClass);

  function AboutCaption(txtId) {
    this.flush = bind(this.flush, this);
    this.update = bind(this.update, this);
    this.init = bind(this.init, this);
    AboutCaption.__super__.constructor.call(this);
    this._txtId = txtId;
    this._text;
    this._line;
  }

  AboutCaption.prototype.init = function() {
    AboutCaption.__super__.init.call(this);
    this._text = new ResponsiveDisplay(MY.f.makeRspsvClass("aboutCap" + String(this._txtId) + "_0", "aboutCap" + String(this._txtId) + "_1"), {
      id: "xAboutCap" + String(this._txtId)
    });
    this._text.init();
    this.add(this._text);
    this._line = this._makeLine(null, "#000");
    return this.add(this._line);
  };

  AboutCaption.prototype.update = function() {
    return this._text.update();
  };

  AboutCaption.prototype.flush = function(isLine, align) {
    var x;
    if (isLine == null) {
      isLine = true;
    }
    if (align == null) {
      align = "left";
    }
    if (isLine) {
      this._line.visible(true);
      this._line.size(MY.f.getLOVal(14, 10), MY.f.getLOVal(2, 1));
      switch (align) {
        case "left":
          x = 0;
          break;
        case "center":
          x = ~~(this._text.width() * 0.5 - this._line.width() * 0.5);
          break;
        default:
          x = this._text.width() - this._line.width();
      }
      this._line.xy(x, this._text.bottom() + MY.f.getLOVal(10, 10));
      this._line.render();
      this.size(this._text.width(), this._line.bottom());
      return this.render();
    } else {
      this._line.visible(false);
      this._line.render();
      this.size(this._text.width(), this._text.bottom());
      return this.render();
    }
  };

  return AboutCaption;

})(MyDisplay);

module.exports = AboutCaption;


},{"../base/MyDisplay":16,"../libs/object/Rect":38,"../parts/ResponsiveDisplay":44}],12:[function(require,module,exports){
var AboutGra, AboutGraPoint, MyDisplay, Point, Rect,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Rect = require('../libs/object/Rect');

Point = require('../libs/object/Point');

MyDisplay = require('../base/MyDisplay');

AboutGraPoint = require('./AboutGraPoint');

AboutGra = (function(superClass) {
  extend(AboutGra, superClass);

  function AboutGra() {
    this._makeParticleBox = bind(this._makeParticleBox, this);
    this._getDist = bind(this._getDist, this);
    this._getLogoPosition = bind(this._getLogoPosition, this);
    this._attachUniform = bind(this._attachUniform, this);
    this._createIBO = bind(this._createIBO, this);
    this._attachVBO = bind(this._attachVBO, this);
    this._createVBO = bind(this._createVBO, this);
    this._createProgram = bind(this._createProgram, this);
    this._createShader = bind(this._createShader, this);
    this._updateVPMtx = bind(this._updateVPMtx, this);
    this._updateParticle = bind(this._updateParticle, this);
    this._updateLogo = bind(this._updateLogo, this);
    this._update = bind(this._update, this);
    this.setSize = bind(this.setSize, this);
    this.hide = bind(this.hide, this);
    this.show = bind(this.show, this);
    this._makeParticle = bind(this._makeParticle, this);
    this.init = bind(this.init, this);
    AboutGra.__super__.constructor.call(this, {
      elmName: "canvas",
      resize: false,
      position: "fixed"
    });
    this._c;
    this._gl;
    this._m;
    this._q;
    this._prg;
    this._noise = new ImprovedNoise();
    this._mtx = {};
    this._mdlData;
    this._attId = [];
    this._particle = [];
    this._logoSize;
    this._particleBox;
    this._alpha = 0;
    this._changeCnt = 0;
    this._isFix = true;
    this._qt;
    this._baseMouse = new Point();
    this.isUpdate = true;
  }

  AboutGra.prototype.init = function() {
    AboutGra.__super__.init.call(this);
    this.css().zIndex = -99999;
    this._m = new matIV();
    this._q = new qtnIV();
    this._c = document.getElementById(this._id);
    this._gl = this._c.getContext('webgl') || this._c.getContext('experimental-webgl');
    if (this._gl == null) {
      return;
    }
    this._gl.enable(this._gl.BLEND);
    this._gl.blendFuncSeparate(this._gl.SRC_ALPHA, this._gl.ONE_MINUS_SRC_ALPHA, this._gl.ONE, this._gl.ONE);
    this._mtx.m = this._m.identity(this._m.create());
    this._mtx.v = this._m.identity(this._m.create());
    this._mtx.p = this._m.identity(this._m.create());
    this._mtx.tmp = this._m.identity(this._m.create());
    this._mtx.mvp = this._m.identity(this._m.create());
    this._prg = this._createProgram(this._createShader('vs'), this._createShader('fs'));
    this._logoSize = new Rect(0, 0, 72 * 0.11, 18 * 0.11);
    this._mdlData = {
      p: {
        p: this._getLogoPosition()
      }
    };
    this._qt = this._q.identity(this._q.create());
    this._makeParticle();
    this._baseMouse.x = MY.resize.sw() * 0.5;
    return this._baseMouse.y = MY.resize.sh() * 0.5;
  };

  AboutGra.prototype._makeParticle = function() {
    var i, keisuA, keisuB, len, noise, p, x, y, z;
    keisuA = 1;
    keisuB = 70;
    i = 0;
    len = this._mdlData.p.p.length;
    while (i < len) {
      x = this._mdlData.p.p[i];
      y = this._mdlData.p.p[i + 1];
      z = this._mdlData.p.p[i + 2];
      noise = this._noise.noise((x + this._logoSize.w * 0.5) * keisuA, (y + this._logoSize.h * 0.5) * keisuA, 0) * keisuB;
      p = new AboutGraPoint(this._particle.length, noise, x, y, z);
      this._particle.push(p);
      this._attId[i / 3] = noise;
      i += 3;
    }
    this._attachVBO(this._prg, "position", 3, this._mdlData.p.p);
    this._attachVBO(this._prg, "id", 1, this._attId);
    return this._makeParticleBox();
  };

  AboutGra.prototype.show = function() {
    this.isUpdate = true;
    this._alpha = 0;
    this._update();
    this.visible(true);
    return this.render();
  };

  AboutGra.prototype.hide = function() {
    this.isUpdate = false;
    this.visible(false);
    return this.render();
  };

  AboutGra.prototype.setSize = function(w, h) {
    var scale1, scale2;
    if ((window.devicePixelRatio != null) && window.devicePixelRatio >= 2) {
      scale1 = 2;
      scale2 = 0.5;
    } else {
      scale1 = 1;
      scale2 = 1;
    }
    this._c.width = w * scale1;
    this._c.height = h * scale1;
    $("#" + this._id).css({
      width: this._c.width * scale2,
      height: this._c.height * scale2
    });
    if (this._gl != null) {
      this._gl.viewport(0, 0, this._c.width, this._c.height);
    }
    this.size(w, h);
    return this.render();
  };

  AboutGra.prototype._update = function() {
    var ch, cw, e, qMat, r, sq, wh, x, y;
    AboutGra.__super__._update.call(this);
    if ((this._gl == null) || !this.isVisible() || !this.isUpdate) {
      return;
    }
    this._gl.clearColor(1.0, 1.0, 1.0, 1.0);
    this._gl.clear(this._gl.COLOR_BUFFER_BIT);
    this._updateVPMtx();
    e = 0.1;
    this._baseMouse.x += (MY.mouse.x - this._baseMouse.x) * e;
    this._baseMouse.y += (MY.mouse.y - this._baseMouse.y) * e;
    cw = MY.resize.sw();
    ch = MY.resize.sh();
    wh = 1 / Math.sqrt(cw * cw + ch * ch);
    x = this._baseMouse.x - cw * 0.5;
    y = this._baseMouse.y - ch * 0.5;
    sq = Math.sqrt(x * x + y * y);
    r = sq * 0.1 * Math.PI * wh;
    if (sq !== 1) {
      sq = 1 / sq;
      x *= sq;
      y *= sq;
    }
    if (!MY.u.isSmt()) {
      this._q.rotate(r, [y, x, 0.0], this._qt);
    }
    qMat = this._m.identity(this._m.create());
    this._q.toMatIV(this._qt, qMat);
    MY.param.rx = MY.u.map(sq, 15, 160, 0, Math.sqrt(cw * cw + ch * ch) * 0.5);
    MY.param.ry = MY.u.map(sq, 15, 160, 0, Math.sqrt(cw * cw + ch * ch) * 0.5);
    this._alpha += (MY.param.alpha * 0.01 - this._alpha) * 0.01;
    this._updateLogo(0, qMat);
    this._updateLogo(1, qMat);
    this._updateLogo(2, qMat);
    return this._gl.flush();
  };

  AboutGra.prototype._updateLogo = function(num, qMat) {
    var scale;
    if (MY.f.getLOType() === MY.conf.LO_0) {
      scale = MY.u.map(Math.sin(MY.u.radian(MY.update.cnt * 0.7)), 0.9, 1.1, -1, 1);
    } else {
      scale = MY.u.map(Math.sin(MY.u.radian(MY.update.cnt)), 1.4, 1.6, -1, 1);
    }
    this._m.identity(this._mtx.m);
    this._m.scale(this._mtx.m, [scale, scale, 0], this._mtx.m);
    this._m.multiply(this._mtx.m, qMat, this._mtx.m);
    this._m.multiply(this._mtx.tmp, this._mtx.m, this._mtx.mvp);
    this._attachUniform(this._prg, "alpha", "float", this._alpha);
    this._attachUniform(this._prg, "mvpMatrix", "mat4", this._mtx.mvp);
    this._attachUniform(this._prg, "zKeisu", "float", MY.param.zKeisu * 0.01);
    this._attachUniform(this._prg, "time", "float", num * 90 + MY.update.cnt * 0.9);
    this._attachUniform(this._prg, "rx", "float", MY.param.rx * 0.01);
    this._attachUniform(this._prg, "ry", "float", MY.param.ry * 0.01);
    this._attachUniform(this._prg, "rz", "float", MY.param.rz * 0.01);
    this._attachUniform(this._prg, "rgb", "vec3", [[210 / 255, 210 / 255, 210 / 255], [127 / 255, 229 / 255, 255 / 255], [255 / 255, 170 / 255, 170 / 255]][num]);
    return this._gl.drawArrays(this._gl.POINTS, 0, this._mdlData.p.p.length / 3);
  };

  AboutGra.prototype._updateParticle = function() {
    var i, j, len1, range, ref, tgX, tgY, val;
    this._changeCnt++;
    if (this._changeCnt > 0) {
      this._isFix = !this._isFix;
      this._changeCnt = -MY.u.random(250, 400);
    }
    range = MY.u.random(5, 9);
    tgX = MY.u.random(this._particleBox.x.min, this._particleBox.x.max);
    tgY = MY.u.random(this._particleBox.y.min, this._particleBox.y.max);
    ref = this._particle;
    for (i = j = 0, len1 = ref.length; j < len1; i = ++j) {
      val = ref[i];
      val.change(this._isFix, this._getDist(val.defX, val.defY, tgX, tgY) * 200, range);
      val.update(0, 0);
      this._mdlData.p.p[i * 3 + 0] = val.x;
      this._mdlData.p.p[i * 3 + 1] = val.y;
      this._mdlData.p.p[i * 3 + 2] = val.z;
    }
    return this._attachVBO(this._prg, "position", 3, this._mdlData.p.p);
  };

  AboutGra.prototype._updateVPMtx = function() {
    if (this._gl == null) {
      return;
    }
    this._m.identity(this._mtx.p);
    this._m.identity(this._mtx.v);
    this._m.lookAt([0, 0, MY.param.camZ], [0, 0, 0], [0, 1, 0], this._mtx.v);
    this._m.perspective(45, this._c.width / this._c.height, 0.1, 1000, this._mtx.p);
    return this._m.multiply(this._mtx.p, this._mtx.v, this._mtx.tmp);
  };

  AboutGra.prototype._createShader = function(id) {
    var scriptElement, shader;
    scriptElement = document.getElementById(id);
    shader = this._gl.createShader(scriptElement.type === "x-shader/x-vertex" ? this._gl.VERTEX_SHADER : this._gl.FRAGMENT_SHADER);
    this._gl.shaderSource(shader, scriptElement.text);
    this._gl.compileShader(shader);
    if (this._gl.getShaderParameter(shader, this._gl.COMPILE_STATUS)) {
      return shader;
    } else {
      console.log(this._gl.getShaderInfoLog(shader));
      return null;
    }
  };

  AboutGra.prototype._createProgram = function(vs, fs) {
    var program;
    program = this._gl.createProgram();
    this._gl.attachShader(program, vs);
    this._gl.attachShader(program, fs);
    this._gl.linkProgram(program);
    if (this._gl.getProgramParameter(program, this._gl.LINK_STATUS)) {
      this._gl.useProgram(program);
      return program;
    } else {
      console.log(this._gl.getProgramInfoLog(program));
      return null;
    }
  };

  AboutGra.prototype._createVBO = function(data) {
    var vbo;
    vbo = this._gl.createBuffer();
    this._gl.bindBuffer(this._gl.ARRAY_BUFFER, vbo);
    this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(data), this._gl.STATIC_DRAW);
    this._gl.bindBuffer(this._gl.ARRAY_BUFFER, null);
    return vbo;
  };

  AboutGra.prototype._attachVBO = function(prg, name, attStride, data) {
    var attLocation, vbo;
    attLocation = this._gl.getAttribLocation(prg, name);
    vbo = this._createVBO(data);
    this._gl.bindBuffer(this._gl.ARRAY_BUFFER, vbo);
    this._gl.enableVertexAttribArray(attLocation);
    return this._gl.vertexAttribPointer(attLocation, attStride, this._gl.FLOAT, false, 0, 0);
  };

  AboutGra.prototype._createIBO = function(data) {
    var ibo;
    ibo = this._gl.createBuffer();
    this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, ibo);
    this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, new Int16Array(data), this._gl.STATIC_DRAW);
    this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, null);
    return ibo;
  };

  AboutGra.prototype._attachUniform = function(prg, name, type, data) {
    var uniLocation;
    uniLocation = this._gl.getUniformLocation(prg, name);
    switch (type) {
      case "mat4":
        return this._gl.uniformMatrix4fv(uniLocation, false, data);
      case "vec3":
        return this._gl.uniform3fv(uniLocation, data);
      case "vec4":
        return this._gl.uniform4fv(uniLocation, data);
      case "int":
        return this._gl.uniform1i(uniLocation, data);
      case "float":
        return this._gl.uniform1f(uniLocation, data);
    }
  };

  AboutGra.prototype._getLogoPosition = function() {
    var data, dest, i, j, len1, val;
    dest = [];
    data = MY.conf.MASS_VERTEX;
    for (i = j = 0, len1 = data.length; j < len1; i = ++j) {
      val = data[i];
      if (i % 1 === 0) {
        dest.push(this._logoSize.w * val.x - this._logoSize.w * 0.5);
        dest.push(this._logoSize.h * -val.y + this._logoSize.h * 0.5);
        dest.push(0);
      }
    }
    return dest;
  };

  AboutGra.prototype._getDist = function(x, y, tx, ty) {
    var d, dx, dy;
    tx = tx || 0;
    ty = ty || 0;
    dx = tx - x;
    dy = ty - y;
    d = Math.sqrt(dx * dx + dy * dy);
    return MY.u.map(d, 0, 1, 0, this._particleBox.cross * 1);
  };

  AboutGra.prototype._makeParticleBox = function() {
    var dx, dy, i, j, len1, maxX, maxY, minX, minY, ref, val;
    minX = 9999;
    maxX = -9999;
    minY = 9999;
    maxY = -9999;
    ref = this._particle;
    for (i = j = 0, len1 = ref.length; j < len1; i = ++j) {
      val = ref[i];
      if (val.x > maxX) {
        maxX = val.x;
      }
      if (val.x < minX) {
        minX = val.x;
      }
      if (val.y > maxY) {
        maxY = val.y;
      }
      if (val.y < minY) {
        minY = val.y;
      }
    }
    this._particleBox = {
      x: {
        min: minX,
        max: maxX
      },
      y: {
        min: minY,
        max: maxY
      }
    };
    dx = this._particleBox.x.min - this._particleBox.x.max;
    dy = this._particleBox.y.min - this._particleBox.y.max;
    return this._particleBox.cross = Math.sqrt(dx * dx + dy * dy);
  };

  return AboutGra;

})(MyDisplay);

module.exports = AboutGra;


},{"../base/MyDisplay":16,"../libs/object/Point":37,"../libs/object/Rect":38,"./AboutGraPoint":13}],13:[function(require,module,exports){
var AboutGraPoint,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

AboutGraPoint = (function() {
  function AboutGraPoint(pId, id, x, y, z) {
    this._updateTg = bind(this._updateTg, this);
    this.update = bind(this.update, this);
    this.change = bind(this.change, this);
    this._init = bind(this._init, this);
    this.pId = pId;
    this.id = id;
    this.x = x;
    this.y = y;
    this.z = z;
    this.tx = x;
    this.ty = y;
    this.tz = z;
    this.defX = x;
    this.defY = y;
    this.defZ = z;
    this.delay = -this.id * 0.1;
    this.ang = this.id;
    this.speed = 2.5;
    this.range = 0;
    this.range2 = 0;
    this.tRange = 0;
    this.vRange = 0;
    this._isFix = true;
    this._ease = 0;
    this._tEase = 0.1;
    this.fixDelay = 0;
    this._init();
  }

  AboutGraPoint.prototype._init = function() {};

  AboutGraPoint.prototype.change = function(bool, delay, range) {
    if (this._isFix !== bool) {
      this._isFix = bool;
      this.fixDelay = -delay;
      if (this._isFix) {
        return this.tRange = 0;
      } else {
        return this.tRange = range * 0.05;
      }
    }
  };

  AboutGraPoint.prototype.update = function(offsetX, offsetY) {
    var e;
    e = 0.1;
    this.x += ((this.tx + offsetX) - this.x) * e;
    this.y += ((this.ty + offsetY) - this.y) * e;
    this.z += (this.tz - this.z) * e;
    return this._updateTg();
  };

  AboutGraPoint.prototype._updateTg = function() {
    var p, rad;
    if (++this.fixDelay > 0) {
      p = 0.4;
      this.vRange += (this.tRange - this.range) * p;
      this.range += (this.vRange *= p);
    }
    this.ang += this.speed;
    rad = MY.u.radian(this.ang);
    this.tz = this.defZ + Math.sin(rad) * (1 + this.range);
    this.tx = this.defX + Math.sin(rad) * (Math.abs(this.z) * 0.5 + this.range);
    return this.ty = this.defY + Math.cos(rad) * (Math.abs(this.z) * 0.5 + this.range);
  };

  return AboutGraPoint;

})();

module.exports = AboutGraPoint;


},{}],14:[function(require,module,exports){
var AniParam,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

AniParam = (function() {
  function AniParam() {
    this.update = bind(this.update, this);
    this.isFinish = bind(this.isFinish, this);
    this.finish = bind(this.finish, this);
    this.delay = bind(this.delay, this);
    this.resetE = bind(this.resetE, this);
    this.x = 0;
    this.y = 0;
    this.tx = 0;
    this.ty = 0;
    this._tEase = 0.15;
    this.tEaseE = 0.15;
    this.ease = 0.15;
    this._cnt = 0;
    this._delay = 0;
  }

  AniParam.prototype.resetE = function() {
    this.ease = 0;
    return this;
  };

  AniParam.prototype.delay = function(d) {
    this._delay = d || 0;
    this._cnt = 0;
    return this;
  };

  AniParam.prototype.finish = function() {
    this.x = this.tx;
    this.y = this.ty;
    return this;
  };

  AniParam.prototype.isFinish = function() {
    if (this._cnt >= this._delay && Math.abs(this.tx - this.x) < 0.5 && Math.abs(this.ty - this.y) < 0.5) {
      return true;
    } else {
      return false;
    }
  };

  AniParam.prototype.update = function() {
    if (this._cnt++ >= this._delay) {
      this.ease += (this._tEase - this.ease) * this.tEaseE;
      this.x += (this.tx - this.x) * this.ease;
      this.y += (this.ty - this.y) * this.ease;
      if (Math.abs(this.tx - this.x) < 0.5) {
        this.x = this.tx;
      }
      if (Math.abs(this.ty - this.y) < 0.5) {
        return this.y = this.ty;
      }
    }
  };

  return AniParam;

})();

module.exports = AniParam;


},{}],15:[function(require,module,exports){
var Display, MyBtn, MyDisplay, ResponsiveDisplay,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Display = require('../libs/display/Display');

MyDisplay = require('./MyDisplay');

ResponsiveDisplay = require('../parts/ResponsiveDisplay');

MyBtn = (function(superClass) {
  extend(MyBtn, superClass);

  function MyBtn(option) {
    this._resize = bind(this._resize, this);
    this._update = bind(this._update, this);
    this.setBtnSize = bind(this.setBtnSize, this);
    this._eClick = bind(this._eClick, this);
    this._eRollOut = bind(this._eRollOut, this);
    this._eRollOver = bind(this._eRollOver, this);
    this.dispose = bind(this.dispose, this);
    this._makeBtn = bind(this._makeBtn, this);
    this.makeBtn = bind(this.makeBtn, this);
    this.init = bind(this.init, this);
    MyBtn.__super__.constructor.call(this, option);
    this._btn;
    this.onRollOver;
    this.onRollOut;
    this.onClick;
  }

  MyBtn.prototype.init = function() {
    return MyBtn.__super__.init.call(this);
  };

  MyBtn.prototype.makeBtn = function() {
    return this._makeBtn();
  };

  MyBtn.prototype._makeBtn = function() {
    this._btn = new Display();
    this._btn.init();
    this.add(this._btn);
    this._btn.opacity(0);
    this._btn.bgColor("#FF0000");
    if (MY.u.isSmt()) {
      return this._btn.elm().on("touchend").on("click", this._eClick);
    } else {
      return this._btn.elm().on("mouseover", this._eRollOver).on("mouseout", this._eRollOut).on("click", this._eClick);
    }
  };

  MyBtn.prototype.dispose = function() {
    if (this._btn != null) {
      this._btn.dispose();
      this._btn = null;
    }
    this.onRollOver = null;
    this.onRollOut = null;
    this.onClick = null;
    return MyBtn.__super__.dispose.call(this);
  };

  MyBtn.prototype._eRollOver = function(e) {
    MY.u.buttonMode(true);
    if (this.onRollOver != null) {
      return this.onRollOver();
    }
  };

  MyBtn.prototype._eRollOut = function(e) {
    MY.u.buttonMode(false);
    if (this.onRollOut != null) {
      return this.onRollOut();
    }
  };

  MyBtn.prototype._eClick = function(e) {
    MY.u.buttonMode(false);
    if (this.onClick != null) {
      return this.onClick();
    }
  };

  MyBtn.prototype.setBtnSize = function(w, h) {
    if (this._btn != null) {
      this._btn.size(w, h);
      this._btn.render();
      this.size(w, h);
      return this.render();
    }
  };

  MyBtn.prototype._update = function() {
    return MyBtn.__super__._update.call(this);
  };

  MyBtn.prototype._resize = function(w, h) {
    return MyBtn.__super__._resize.call(this, w, h);
  };

  return MyBtn;

})(MyDisplay);

module.exports = MyBtn;


},{"../libs/display/Display":28,"../parts/ResponsiveDisplay":44,"./MyDisplay":16}],16:[function(require,module,exports){
var Animation, Btn, DisplayTransform, MyDisplay, ResponsiveDisplay,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

DisplayTransform = require('../libs/display/DisplayTransform');

Animation = require('../libs/animation/Animation');

ResponsiveDisplay = require('../parts/ResponsiveDisplay');

Btn = require('../parts/Btn');

MyDisplay = (function(superClass) {
  extend(MyDisplay, superClass);

  function MyDisplay(option) {
    this._resize = bind(this._resize, this);
    this._update = bind(this._update, this);
    this._makeResponsiveDisplay = bind(this._makeResponsiveDisplay, this);
    this._makeLine = bind(this._makeLine, this);
    this._makeBtn = bind(this._makeBtn, this);
    this._makeDisplay = bind(this._makeDisplay, this);
    this._makeAnimation = bind(this._makeAnimation, this);
    this.dispose = bind(this.dispose, this);
    this.init = bind(this.init, this);
    MyDisplay.__super__.constructor.call(this, option);
    this._sw = 0;
    this._sh = 0;
    this._lo = -1;
    this._anm = [];
  }

  MyDisplay.prototype.init = function() {
    MyDisplay.__super__.init.call(this);
    this.elm().removeClass("hide");
    if (((this._option.resize != null) && this._option.resize) || (this._option.resize == null)) {
      MY.resize.add(this._resize);
    }
    if (((this._option.update != null) && this._option.update) || (this._option.update == null)) {
      return MY.update.add(this._update);
    }
  };

  MyDisplay.prototype.dispose = function() {
    var i, j, len, ref, val;
    MY.resize.remove(this._resize);
    MY.update.remove(this._update);
    if (this._anm != null) {
      ref = this._anm;
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        val = ref[i];
        val.dispose();
      }
      this._anm = null;
    }
    return MyDisplay.__super__.dispose.call(this);
  };

  MyDisplay.prototype._makeAnimation = function(num) {
    var i, results;
    i = 0;
    results = [];
    while (i < num) {
      this._anm.push(new Animation());
      results.push(i++);
    }
    return results;
  };

  MyDisplay.prototype._makeDisplay = function(id) {
    var d;
    d = new DisplayTransform({
      id: id
    });
    d.init();
    return d;
  };

  MyDisplay.prototype._makeBtn = function(id, onClick, onOver, onOut) {
    var btn;
    btn = new Btn({
      id: id
    });
    btn.init();
    btn.onClick = onClick;
    btn.onRollOver = onOver;
    btn.onRollOut = onOut;
    return btn;
  };

  MyDisplay.prototype._makeLine = function(id, color) {
    var d;
    d = this._makeDisplay(id);
    d.bgColor(color);
    return d;
  };

  MyDisplay.prototype._makeResponsiveDisplay = function(id, classList) {
    var d;
    d = new ResponsiveDisplay(classList, {
      id: id
    });
    d.init();
    return d;
  };

  MyDisplay.prototype._update = function() {
    var i, j, len, ref, results, val;
    if (this._anm != null) {
      ref = this._anm;
      results = [];
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        val = ref[i];
        results.push(val.update());
      }
      return results;
    }
  };

  MyDisplay.prototype._resize = function(w, h) {
    this._sw = w || MY.resize.sw();
    this._sh = h || MY.resize.sh();
    return this._lo = MY.f.getLOType();
  };

  return MyDisplay;

})(DisplayTransform);

module.exports = MyDisplay;


},{"../libs/animation/Animation":26,"../libs/display/DisplayTransform":30,"../parts/Btn":40,"../parts/ResponsiveDisplay":44}],17:[function(require,module,exports){
var Gnavi, GnaviMenuParts, MyDisplay, ResponsiveImg,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MyDisplay = require('../base/MyDisplay');

ResponsiveImg = require('../parts/ResponsiveImg');

GnaviMenuParts = require('./GnaviMenuParts');

Gnavi = (function(superClass) {
  extend(Gnavi, superClass);

  function Gnavi() {
    this._update = bind(this._update, this);
    this.resize = bind(this.resize, this);
    this.setActive = bind(this.setActive, this);
    this.init = bind(this.init, this);
    Gnavi.__super__.constructor.call(this, {
      id: "xGnavi",
      resize: false,
      isDefault3d: false
    });
    this._menus = [];
    this._line;
    this._lang = [];
  }

  Gnavi.prototype.init = function() {
    var arr, en, i, j, jp, len, menu, val;
    Gnavi.__super__.init.call(this);
    arr = [MY.conf.M_TOP, MY.conf.M_PROJECTS, MY.conf.M_ABOUT];
    for (i = j = 0, len = arr.length; j < len; i = ++j) {
      val = arr[i];
      menu = new GnaviMenuParts(val);
      menu.init();
      this.add(menu);
      this._menus[val] = menu;
    }
    this._line = this._makeDisplay();
    this.add(this._line);
    this._line.bgColor("#000000");
    this._line.size(1, 14);
    $("#xGnaviLang" + String(MY.conf.L_JP) + " a").attr("id", "xGnaviLang" + String(MY.conf.L_JP) + "_txt");
    $("#xGnaviLang" + String(MY.conf.L_EN) + " a").attr("id", "xGnaviLang" + String(MY.conf.L_EN) + "_txt");
    jp = this._makeResponsiveDisplay("xGnaviLang" + String(MY.conf.L_JP) + "_txt", MY.f.makeRspsvClass("gnaviLang_0", "gnaviLang_1"));
    en = this._makeResponsiveDisplay("xGnaviLang" + String(MY.conf.L_EN) + "_txt", MY.f.makeRspsvClass("gnaviLang_0", "gnaviLang_1"));
    this._lang[MY.conf.L_JP] = jp;
    this._lang[MY.conf.L_EN] = en;
    this._lang[MY.f.getLang()].elm().addClass("centerLine");
    jp.elm().on("click", MY.f.goJpPage);
    en.elm().on("click", MY.f.goEnPage);
    return this.resize();
  };

  Gnavi.prototype.setActive = function(pageId) {
    var i, j, len, ref, results, val;
    ref = this._menus;
    results = [];
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      val = ref[i];
      results.push(val.setActive(i === pageId));
    }
    return results;
  };

  Gnavi.prototype.resize = function(w, h) {
    var i, j, k, len, len1, margin, menuX, ref, ref1, val;
    this._resize(w, h);
    menuX = 0;
    margin = 35;
    ref = this._menus;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      val = ref[i];
      val.resize(this._sw, this._sh);
      val.xy(menuX, 0);
      val.render();
      menuX = val.right() + margin;
    }
    this._line.xy(menuX, 0);
    this._line.render();
    menuX = this._line.right() + 35;
    ref1 = this._lang;
    for (i = k = 0, len1 = ref1.length; k < len1; i = ++k) {
      val = ref1[i];
      val.update();
      val.xy(menuX, 2);
      val.render();
      menuX = val.right() + 20;
    }
    this.size(menuX + 30, 30);
    return this.render();
  };

  Gnavi.prototype._update = function() {
    return Gnavi.__super__._update.call(this);
  };

  return Gnavi;

})(MyDisplay);

module.exports = Gnavi;


},{"../base/MyDisplay":16,"../parts/ResponsiveImg":45,"./GnaviMenuParts":18}],18:[function(require,module,exports){
var GnaviMenuParts, MyDisplay, ResponsiveImg,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MyDisplay = require('../base/MyDisplay');

ResponsiveImg = require('../parts/ResponsiveImg');

GnaviMenuParts = (function(superClass) {
  extend(GnaviMenuParts, superClass);

  function GnaviMenuParts(menuId) {
    this._update = bind(this._update, this);
    this.resize = bind(this.resize, this);
    this.setActive = bind(this.setActive, this);
    this._eClick = bind(this._eClick, this);
    this._eRollOut = bind(this._eRollOut, this);
    this._eRollOver = bind(this._eRollOver, this);
    this._setHoverAnm = bind(this._setHoverAnm, this);
    this.init = bind(this.init, this);
    GnaviMenuParts.__super__.constructor.call(this, {
      id: "xGnaviMenu" + String(menuId),
      resize: false,
      isDefault3d: true
    });
    this._menuId = menuId;
    this._txt;
    this._btn;
    this._color = 0;
    this._lineCon;
    this._line;
    this._isActive = false;
    this.onClick;
  }

  GnaviMenuParts.prototype.init = function() {
    GnaviMenuParts.__super__.init.call(this);
    $("#" + this._id + " a").attr("id", this._id + "_txt");
    this._txt = this._makeResponsiveDisplay(this._id + "_txt", MY.f.makeRspsvClass("gnaviTxt_0", "gnaviTxt_1"));
    this._lineCon = this._makeDisplay();
    this._lineCon.init();
    this.add(this._lineCon);
    this._lineCon.mask(true);
    this._line = this._makeDisplay();
    this._line.init();
    this._lineCon.add(this._line);
    this._line.bgColor("#000");
    this._btn = this._makeBtn(null, this._eClick, this._eRollOver, this._eRollOut);
    this.add(this._btn);
    this._makeAnimation(2);
    return this.resize();
  };

  GnaviMenuParts.prototype._setHoverAnm = function(param) {
    var a;
    if (this._lo === MY.conf.LO_0) {
      a = this._anm[0];
      a.set(param);
      a.start();
      return this._update();
    }
  };

  GnaviMenuParts.prototype._eRollOver = function() {
    if (this._isActive) {
      return;
    }
    return this._setHoverAnm({
      r: {
        from: 0,
        to: 1
      },
      frame: 30,
      ease: "outExpo"
    });
  };

  GnaviMenuParts.prototype._eRollOut = function() {
    if (this._isActive) {
      return;
    }
    return this._setHoverAnm({
      r: {
        from: this._anm[0].get("r"),
        to: 0
      },
      frame: 40
    });
  };

  GnaviMenuParts.prototype._eClick = function() {
    if (this._isActive) {
      return;
    }
    MY.scroller.scroll(0, 0, null, false);
    return MY.delay.add((function(_this) {
      return function() {
        return MY.c.getObj(MY.conf.P_PHOTO).resetParts(function() {
          return MY.c.setPage(_this._menuId);
        });
      };
    })(this), 10);
  };

  GnaviMenuParts.prototype.setActive = function(bool) {
    var a, s, x;
    if (this._isActive && bool) {
      return;
    }
    this._eRollOut();
    this._isActive = bool;
    if (this._isActive) {
      s = {
        from: this._anm[1].get("scale"),
        to: 1
      };
      x = {
        from: 0,
        to: 0
      };
    } else {
      s = {
        from: this._anm[1].get("scale"),
        to: 0
      };
      x = {
        from: this._anm[1].get("x"),
        to: this._lineCon.width()
      };
    }
    a = this._anm[1];
    a.set({
      scale: s,
      x: x,
      frame: 60,
      ease: "inOutExpo"
    });
    a.start();
    return this._update();
  };

  GnaviMenuParts.prototype.resize = function(w, h) {
    this._resize(w, h);
    this._txt.update();
    this._lineCon.xy(0, this._txt.bottom() + 4);
    this._lineCon.size(this._txt.width() - 1, 1);
    this._lineCon.render();
    this._line.height(1);
    this._line.render();
    this.size(this._txt.width(), this._txt.height());
    this.render();
    this._btn.size(this.width() * 1.2, this.height() * 2);
    this._btn.xy(~~(this.width() * 0.5 - this._btn.width() * 0.5), ~~(this.height() * 0.5 - this._btn.height() * 0.5));
    return this._btn.render();
  };

  GnaviMenuParts.prototype._update = function() {
    var r;
    GnaviMenuParts.__super__._update.call(this);
    if (this._lo === MY.conf.LO_0) {
      r = this._anm[0].get("r");
      this._color = r * 200;
      this._txt.elm().css({
        color: MY.u.getHexColor(this._color, this._color, this._color)
      });
      this._line.translate(this._anm[1].get("x"), 0);
      this._line.width(this._lineCon.width() * this._anm[1].get("scale"));
      return this._line.render();
    }
  };

  return GnaviMenuParts;

})(MyDisplay);

module.exports = GnaviMenuParts;


},{"../base/MyDisplay":16,"../parts/ResponsiveImg":45}],19:[function(require,module,exports){
var HbBtn, MyDisplay, Rect,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MyDisplay = require('../base/MyDisplay');

Rect = require('../libs/object/Rect');

HbBtn = (function(superClass) {
  extend(HbBtn, superClass);

  function HbBtn() {
    this.dispose = bind(this.dispose, this);
    this._update = bind(this._update, this);
    this.setNormal = bind(this.setNormal, this);
    this.setClose = bind(this.setClose, this);
    this.setLine = bind(this.setLine, this);
    this._eClick = bind(this._eClick, this);
    this.init = bind(this.init, this);
    HbBtn.__super__.constructor.call(this, {
      resize: false
    });
    this._btn;
    this._lineTop;
    this._lineCenter;
    this._lineBtm;
    this._lineBox;
    this.onClick;
  }

  HbBtn.prototype.init = function() {
    HbBtn.__super__.init.call(this);
    this._lineTop = this._makeLine(null, "#000000");
    this._lineCenter = this._makeLine(null, "#000000");
    this._lineBtm = this._makeLine(null, "#000000");
    this.add(this._lineTop);
    this.add(this._lineCenter);
    this.add(this._lineBtm);
    this._lineTop.pivot("50% 0%");
    this._lineCenter.pivot("50% 50%");
    this._lineBtm.pivot("50% 50%");
    this._btn = this._makeBtn(null, this._eClick);
    this.add(this._btn);
    this._btn.size(60, 60);
    this._btn.render();
    this.size(this._btn.width(), this._btn.height());
    this.render();
    return this.setLine();
  };

  HbBtn.prototype._eClick = function() {
    if (this.onClick != null) {
      return this.onClick();
    }
  };

  HbBtn.prototype.setLine = function(lineW, lineH, lineMargin, lineColor) {
    lineW = lineW || 20;
    lineH = lineH || 2;
    lineMargin = lineMargin || 5;
    lineColor = lineColor || "#000000";
    this._lineTop.bgColor(lineColor);
    this._lineCenter.bgColor(lineColor);
    this._lineBtm.bgColor(lineColor);
    this._lineBox = new Rect(~~(this.width() * 0.5 - lineW * 0.5), ~~(this.height() * 0.5 - (lineH * 3 + lineMargin * 2) * 0.5), lineW, lineH * 3 + lineMargin * 2);
    this._lineTop.xy(this._lineBox.x, this._lineBox.y);
    this._lineTop.size(lineW, lineH);
    this._lineTop.render();
    this._lineCenter.xy(this._lineTop.x(), this._lineTop.bottom() + lineMargin);
    this._lineCenter.size(lineW, lineH);
    this._lineCenter.render();
    this._lineBtm.xy(this._lineTop.x(), this._lineCenter.bottom() + lineMargin);
    this._lineBtm.size(lineW, lineH);
    return this._lineBtm.render();
  };

  HbBtn.prototype.setClose = function() {
    this._lineTop.rotate(0, 0, 90);
    this._lineTop.translate(1, this._lineBox.h * 0.5);
    this._lineTop.render();
    this._lineBtm.visible(false);
    this._lineBtm.render();
    this.rotate(0, 0, 45);
    return this.render();
  };

  HbBtn.prototype.setNormal = function() {
    this._lineTop.rotate(0, 0, 0);
    this._lineTop.translate(0, 0);
    this._lineTop.render();
    this._lineBtm.visible(true);
    this._lineBtm.render();
    this.rotate(0, 0, 0);
    return this.render();
  };

  HbBtn.prototype._update = function() {
    return HbBtn.__super__._update.call(this);
  };

  HbBtn.prototype.dispose = function() {
    return HbBtn.__super__.dispose.call(this);
  };

  return HbBtn;

})(MyDisplay);

module.exports = HbBtn;


},{"../base/MyDisplay":16,"../libs/object/Rect":38}],20:[function(require,module,exports){
var DisplayTransform, Gnavi, HbBtn, Header, HeaderTtl, MyDisplay, SvgLogo,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MyDisplay = require('../base/MyDisplay');

DisplayTransform = require('../libs/display/DisplayTransform');

HeaderTtl = require('./HeaderTtl');

Gnavi = require('./Gnavi');

HbBtn = require('./HbBtn');

SvgLogo = require('../parts/SvgLogo');

Header = (function(superClass) {
  extend(Header, superClass);

  function Header() {
    this._update = bind(this._update, this);
    this._resize = bind(this._resize, this);
    this.setActive = bind(this.setActive, this);
    this.hide = bind(this.hide, this);
    this.show = bind(this.show, this);
    this.isShow = bind(this.isShow, this);
    this.setFixMode = bind(this.setFixMode, this);
    this.setPosition = bind(this.setPosition, this);
    this.ctrlGnavi = bind(this.ctrlGnavi, this);
    this._eClickHBBtn = bind(this._eClickHBBtn, this);
    this._eMouseLeave = bind(this._eMouseLeave, this);
    this.setBgOpacity = bind(this.setBgOpacity, this);
    this.init = bind(this.init, this);
    Header.__super__.constructor.call(this, {
      id: "xHeader",
      isDefault3d: false
    });
    this._bg;
    this._ttl;
    this._gnavi;
    this._isFix = false;
    this._isShow = false;
    this._hbBtn;
    this.onMouseLeave;
  }

  Header.prototype.init = function() {
    Header.__super__.init.call(this);
    this.elm().css({
      zIndex: 9999
    });
    this._bg = new DisplayTransform();
    this._bg.init();
    this.unshift(this._bg);
    this._bg.bgColor("#FFFFFF");
    this._bg.opacity(0);
    this._ttl = new SvgLogo(124, 0.7);
    this._ttl.init();
    this.add(this._ttl);
    this._ttl.elm().on("mouseenter", (function(_this) {
      return function() {
        if (!MY.u.isSmt()) {
          MY.u.buttonMode(true);
          _this._ttl.showLine(0, 60);
          return _this._ttl.showFill(40, 50);
        }
      };
    })(this)).on("mouseleave", (function(_this) {
      return function() {
        return MY.u.buttonMode(false);
      };
    })(this)).on("click", (function(_this) {
      return function() {
        return _this._gnavi._menus[0]._eClick();
      };
    })(this));
    this._gnavi = new Gnavi();
    this._gnavi.init();
    this._hbBtn = new HbBtn();
    this._hbBtn.init();
    this._hbBtn.onClick = this._eClickHBBtn;
    this.add(this._hbBtn);
    this.elm().on("mouseleave", this._eMouseLeave);
    this._makeAnimation(1);
    this._resize();
    return this.hide(false);
  };

  Header.prototype.setBgOpacity = function(val) {
    this._bg.opacity(val);
    return this._bg.render();
  };

  Header.prototype._eMouseLeave = function() {
    if (this.onMouseLeave != null) {
      return this.onMouseLeave();
    }
  };

  Header.prototype._eClickHBBtn = function() {
    return this.ctrlGnavi(!MY.c.getSpgnavi().isShow);
  };

  Header.prototype.ctrlGnavi = function(isOpen) {
    if (isOpen) {
      return MY.c.getSpgnavi().open();
    } else {
      return MY.c.getSpgnavi().close();
    }
  };

  Header.prototype.setPosition = function(val) {
    if (val == null) {
      val = "absolute";
    }
    this.css().position = val;
    return this.render();
  };

  Header.prototype.setFixMode = function(bool) {
    if (bool) {
      this._isFix = true;
      if (this._lo === MY.conf.LO_0) {
        return this.setPosition("fixed");
      }
    } else {
      this._isFix = false;
      return this.setPosition();
    }
  };

  Header.prototype.isShow = function() {
    return this._isShow;
  };

  Header.prototype.show = function(isAnimate, delay, frame) {
    var a;
    if (isAnimate == null) {
      isAnimate = true;
    }
    delay = delay || 0;
    frame = frame || MY.conf.DETAIL_EXPAND_FRAME;
    this._isShow = true;
    a = this._anm[0];
    a.set({
      y: {
        from: -this._bg.height(),
        to: 0
      },
      frame: frame,
      delay: delay,
      ease: MY.conf.DETAIL_EXPAND_EASE
    });
    a.start();
    if (!isAnimate) {
      a.finish();
    }
    this.opacity(1);
    return this._update();
  };

  Header.prototype.hide = function(isAnimate, delay, frame) {
    var a;
    if (isAnimate == null) {
      isAnimate = true;
    }
    delay = delay || 0;
    frame = frame || MY.conf.DETAIL_EXPAND_FRAME;
    this._isShow = false;
    a = this._anm[0];
    a.set({
      y: {
        from: 0,
        to: -this._bg.height()
      },
      frame: frame,
      delay: delay,
      ease: MY.conf.DETAIL_EXPAND_EASE,
      onComplete: (function(_this) {
        return function() {
          _this.opacity(0);
          return _this.render();
        };
      })(this)
    });
    a.start();
    if (!isAnimate) {
      a.finish();
    }
    return this._update();
  };

  Header.prototype.setActive = function(pageId) {
    return this._gnavi.setActive(pageId);
  };

  Header.prototype._resize = function(w, h) {
    Header.__super__._resize.call(this, w, h);
    this.size(this._sw, MY.conf.HEADER_HEIGHT[this._lo]);
    this.render();
    this._bg.size(this.width(), MY.conf.HEADER_HEIGHT[this._lo]);
    this._bg.render();
    this._ttl.xy(MY.f.getLOVal(50, 20), MY.f.getLOVal(40, 17));
    this._ttl.render();
    this._gnavi.visible(this._lo === MY.conf.LO_0);
    this._gnavi.render();
    this._gnavi.resize(this._sw, this._sh);
    this._gnavi.xy(this._sw - this._gnavi.width(), 70);
    this._gnavi.render();
    this._hbBtn.visible(this._lo === MY.conf.LO_1);
    this._hbBtn.xy(MY.f.getLOVal(0, this._sw - this._hbBtn.width()), ~~(this._bg.height() * 0.5 - this._hbBtn.height() * 0.5));
    this._hbBtn.render();
    if (this._isFix && this._lo === MY.conf.LO_0) {
      return this.setPosition("fixed");
    } else {
      return this.setPosition();
    }
  };

  Header.prototype._update = function() {
    Header.__super__._update.call(this);
    this.translate(0, this._anm[0].get("y"));
    return this.render();
  };

  return Header;

})(MyDisplay);

module.exports = Header;


},{"../base/MyDisplay":16,"../libs/display/DisplayTransform":30,"../parts/SvgLogo":50,"./Gnavi":17,"./HbBtn":19,"./HeaderTtl":21}],21:[function(require,module,exports){
var HeaderTtl, MyDisplay, ResponsiveImg, SvgLogo,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MyDisplay = require('../base/MyDisplay');

ResponsiveImg = require('../parts/ResponsiveImg');

SvgLogo = require('../parts/SvgLogo');

HeaderTtl = (function(superClass) {
  extend(HeaderTtl, superClass);

  function HeaderTtl() {
    this._update = bind(this._update, this);
    this._resize = bind(this._resize, this);
    this.init = bind(this.init, this);
    HeaderTtl.__super__.constructor.call(this, {
      id: "xHeaderTtl"
    });
    this._img;
  }

  HeaderTtl.prototype.init = function() {
    HeaderTtl.__super__.init.call(this);
    this._img = new SvgLogo(124);
    this._img.init();
    this.add(this._img);
    this._img.showLine(0, 100, false);
    this._img.showFill(0, 100, false);
    return this._resize();
  };

  HeaderTtl.prototype._resize = function(w, h) {
    HeaderTtl.__super__._resize.call(this, w, h);
    this._img._resize();
    this.size(this._img.width(), this._img.height());
    return this.render();
  };

  HeaderTtl.prototype._update = function() {
    return HeaderTtl.__super__._update.call(this);
  };

  return HeaderTtl;

})(MyDisplay);

module.exports = HeaderTtl;


},{"../base/MyDisplay":16,"../parts/ResponsiveImg":45,"../parts/SvgLogo":50}],22:[function(require,module,exports){
var MyDisplay, Rect, SimpleBtn, SimpleHeader,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MyDisplay = require('../base/MyDisplay');

Rect = require('../libs/object/Rect');

SimpleBtn = require('../parts/SimpleBtn');

SimpleHeader = (function(superClass) {
  extend(SimpleHeader, superClass);

  function SimpleHeader() {
    this.dispose = bind(this.dispose, this);
    this._update = bind(this._update, this);
    this._resize = bind(this._resize, this);
    this.hide = bind(this.hide, this);
    this.show = bind(this.show, this);
    this.isShow = bind(this.isShow, this);
    this._eClickNextBtn = bind(this._eClickNextBtn, this);
    this._eMouseLeaveMenu = bind(this._eMouseLeaveMenu, this);
    this._eClickMenuBtn = bind(this._eClickMenuBtn, this);
    this.init = bind(this.init, this);
    SimpleHeader.__super__.constructor.call(this);
    this._menuBtn;
    this._nextBtn;
    this._isShow = false;
  }

  SimpleHeader.prototype.init = function() {
    SimpleHeader.__super__.init.call(this);
    this._menuBtn = new SimpleBtn(MY.f.makeRspsvImgSrc([MY.conf.IMG_PATH + "/header/menuBtn0.png", false], [MY.conf.IMG_PATH + "/header/menuBtn1.png", true]));
    this._menuBtn.init();
    this._menuBtn.onClick = this._eClickMenuBtn;
    this.add(this._menuBtn);
    this._nextBtn = new SimpleBtn(MY.f.makeRspsvImgSrc([MY.conf.IMG_PATH + "/header/nextBtn0.png", false], [MY.conf.IMG_PATH + "/header/nextBtn1.png", true]));
    this._nextBtn.init();
    this._nextBtn.onClick = this._eClickNextBtn;
    this.add(this._nextBtn);
    this._makeAnimation(1);
    this.mask(true);
    this._resize();
    return this.hide(false);
  };

  SimpleHeader.prototype._eClickMenuBtn = function() {
    if (this._lo === MY.conf.LO_0) {
      MY.c.getHeader().show(true, 0, 40);
      return MY.c.getHeader().onMouseLeave = this._eMouseLeaveMenu;
    } else {
      return MY.c.getHeader().ctrlGnavi(true);
    }
  };

  SimpleHeader.prototype._eMouseLeaveMenu = function() {
    MY.c.getHeader().hide(true, 0, 40);
    return MY.c.getHeader().onMouseLeave = null;
  };

  SimpleHeader.prototype._eClickNextBtn = function() {
    return MY.c.getObj(MY.conf.P_PHOTO).resetParts((function(_this) {
      return function() {
        return MY.c.setPage(MY.conf.M_PROJECTS);
      };
    })(this));
  };

  SimpleHeader.prototype.isShow = function() {
    return this._isShow;
  };

  SimpleHeader.prototype.show = function(isAnimate, delay) {
    var a;
    if (isAnimate == null) {
      isAnimate = true;
    }
    delay = delay || 0;
    this._isShow = true;
    this.visible(true);
    a = this._anm[0];
    a.set({
      y: {
        from: -this.height(),
        to: 0
      },
      frame: MY.conf.DETAIL_EXPAND_FRAME,
      delay: delay,
      ease: MY.conf.DETAIL_EXPAND_EASE
    });
    a.start();
    if (!isAnimate) {
      a.finish();
    }
    return this._update();
  };

  SimpleHeader.prototype.hide = function(isAnimate, delay) {
    var a;
    if (isAnimate == null) {
      isAnimate = true;
    }
    delay = delay || 0;
    this._isShow = false;
    a = this._anm[0];
    a.set({
      y: {
        from: 0,
        to: -this.height()
      },
      frame: MY.conf.DETAIL_EXPAND_FRAME,
      delay: delay,
      ease: MY.conf.DETAIL_EXPAND_EASE
    });
    a.start();
    if (!isAnimate) {
      a.finish();
    }
    return this._update();
  };

  SimpleHeader.prototype._resize = function(w, h) {
    SimpleHeader.__super__._resize.call(this, w, h);
    this._menuBtn.xy(MY.f.getLOVal(this._sw - 100, this._sw - 50), MY.f.getLOVal(50, 10));
    this._menuBtn.render();
    this._nextBtn.xy(MY.f.getLOVal(this._sw - 160, 10), this._menuBtn.y());
    this._nextBtn.render();
    this.css().position = MY.f.getLOVal("fixed", "absolute");
    this.size(this._sw, MY.f.getLOVal(100, 50));
    return this.render();
  };

  SimpleHeader.prototype._update = function() {
    SimpleHeader.__super__._update.call(this);
    this.translate(0, this._anm[0].get("y"));
    this.render();
    if (!this._isShow && this._anm[0].isComplete()) {
      this.visible(false);
      return this.render();
    }
  };

  SimpleHeader.prototype.dispose = function() {
    return SimpleHeader.__super__.dispose.call(this);
  };

  return SimpleHeader;

})(MyDisplay);

module.exports = SimpleHeader;


},{"../base/MyDisplay":16,"../libs/object/Rect":38,"../parts/SimpleBtn":49}],23:[function(require,module,exports){
var HbBtn, MyDisplay, SpGnavi, SpGnaviParts,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MyDisplay = require('../base/MyDisplay');

SpGnaviParts = require('./SpGnaviParts');

HbBtn = require('./HbBtn');

SpGnavi = (function(superClass) {
  extend(SpGnavi, superClass);

  function SpGnavi() {
    this._update = bind(this._update, this);
    this._resize = bind(this._resize, this);
    this.close = bind(this.close, this);
    this.open = bind(this.open, this);
    this._eClickClose = bind(this._eClickClose, this);
    this.init = bind(this.init, this);
    SpGnavi.__super__.constructor.call(this, {
      position: "fixed"
    });
    this._bg;
    this._parts;
    this._openParam = {
      frame: 40,
      ease: "outExpo"
    };
    this._closeBtn;
    this.isShow = false;
  }

  SpGnavi.prototype.init = function() {
    SpGnavi.__super__.init.call(this);
    this.elm().css({
      zIndex: 10000
    });
    this._bg = this._makeDisplay();
    this.add(this._bg);
    this._bg.bgColor("#FF0000");
    this._bg.opacity(0);
    this._bg.elm().on("click", this._eClickClose);
    this._parts = new SpGnaviParts();
    this._parts.init();
    this.add(this._parts);
    this._closeBtn = new HbBtn();
    this._closeBtn.init();
    this._closeBtn.setLine(null, null, null, "#FFFFFF");
    this._closeBtn.setClose();
    this._closeBtn.onClick = this._eClickClose;
    this.add(this._closeBtn);
    this._makeAnimation(1);
    this.mask(true);
    this._resize();
    return this.close(false);
  };

  SpGnavi.prototype._eClickClose = function() {
    if (this.isShow) {
      return this.close();
    }
  };

  SpGnavi.prototype.open = function(isAnimate, callBack) {
    var a;
    if (isAnimate == null) {
      isAnimate = true;
    }
    this.isShow = true;
    this.visible(true);
    this.render();
    this._resize();
    this._closeBtn.visible(true);
    this._closeBtn.render();
    a = this._anm[0];
    a.set({
      x: {
        from: ~~(this.width() * 0.5),
        to: 0
      },
      ease: this._openParam.ease,
      frame: this._openParam.frame,
      onComplete: callBack
    });
    a.start();
    if (!isAnimate) {
      a.finish();
    }
    return this._update();
  };

  SpGnavi.prototype.close = function(isAnimate, callBack) {
    var a;
    if (isAnimate == null) {
      isAnimate = true;
    }
    this.isShow = false;
    this._closeBtn.visible(false);
    this._closeBtn.render();
    a = this._anm[0];
    a.set({
      x: {
        from: 0,
        to: this.width() * 0.5 + 10
      },
      ease: this._openParam.ease,
      frame: this._openParam.frame,
      onComplete: callBack
    });
    a.start();
    if (!isAnimate) {
      a.finish();
    }
    return this._update();
  };

  SpGnavi.prototype._resize = function(w, h) {
    SpGnavi.__super__._resize.call(this, w, h);
    this.size(this._sw, this._sh + 200);
    this.render();
    this._parts.resize(this._sw, this._sh);
    this._parts.xy(~~(this.width() * 0.5), 0);
    this._parts.render();
    this._bg.size(this.width(), this.height());
    this._bg.render();
    this._closeBtn.xy(this._sw - this._closeBtn.width(), ~~(MY.conf.HEADER_HEIGHT[this._lo] * 0.5 - this._closeBtn.height() * 0.5));
    return this._closeBtn.render();
  };

  SpGnavi.prototype._update = function() {
    SpGnavi.__super__._update.call(this);
    this._parts.translate(this._anm[0].get("x"), 0);
    this._parts.render();
    if (!this.isShow && this._anm[0].isComplete()) {
      this.visible(false);
      return this.render();
    }
  };

  return SpGnavi;

})(MyDisplay);

module.exports = SpGnavi;


},{"../base/MyDisplay":16,"./HbBtn":19,"./SpGnaviParts":24}],24:[function(require,module,exports){
var MyDisplay, Rect, SimpleBtn, SpGnaviParts,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MyDisplay = require('../base/MyDisplay');

Rect = require('../libs/object/Rect');

SimpleBtn = require('../parts/SimpleBtn');

SpGnaviParts = (function(superClass) {
  extend(SpGnaviParts, superClass);

  function SpGnaviParts() {
    this._update = bind(this._update, this);
    this.resize = bind(this.resize, this);
    this._makeTextParts = bind(this._makeTextParts, this);
    this._eClickAbout = bind(this._eClickAbout, this);
    this._eClickPj = bind(this._eClickPj, this);
    this._eClickHome = bind(this._eClickHome, this);
    this._updateActLine = bind(this._updateActLine, this);
    this.init = bind(this.init, this);
    SpGnaviParts.__super__.constructor.call(this);
    this._menus = [];
    this._lang = [];
    this._menuTxt;
    this._menuTxtLine;
    this._bg;
    this._actLine;
  }

  SpGnaviParts.prototype.init = function() {
    SpGnaviParts.__super__.init.call(this);
    this._bg = this._makeDisplay();
    this.add(this._bg);
    this._bg.bgColor("#000");
    this._menuTxt = this._makeTextParts("MENU", "headerTxt massFont");
    this._menuTxtLine = this._makeLine(null, "#FFF");
    this.add(this._menuTxtLine);
    this._menuTxtLine.size(6, 1);
    this._menus[0] = this._makeTextParts($("#xGnaviMenu0 a").html(), "gnaviTxt_1 massFont", this._eClickHome);
    this._menus[1] = this._makeTextParts($("#xGnaviMenu1 a").html(), "gnaviTxt_1 massFont", this._eClickPj);
    this._menus[2] = this._makeTextParts($("#xGnaviMenu2 a").html(), "gnaviTxt_1 massFont", this._eClickAbout);
    this._lang[0] = this._makeTextParts($("#xGnaviLang0 a").html(), "gnaviLang_1 massFont", MY.f.goJpPage);
    this._lang[1] = this._makeTextParts($("#xGnaviLang1 a").html(), "gnaviLang_1 massFont", MY.f.goEnPage);
    if (MY.f.getLang() === MY.conf.L_EN) {
      this._lang[1].elm().addClass("centerLine");
    } else {
      this._lang[0].elm().addClass("centerLine");
    }
    this._actLine = this._makeLine(null, "#FFF");
    this.add(this._actLine);
    this._actLine.size(0, 2);
    this.resize();
    return this._updateActLine();
  };

  SpGnaviParts.prototype._updateActLine = function() {
    var menu, pid;
    pid = MY.f.getPage();
    if (pid === MY.conf.M_PROJECTS_D) {
      pid = MY.conf.M_PROJECTS;
    }
    menu = this._menus[pid];
    if (menu != null) {
      this._actLine.width(menu.width());
      this._actLine.xy(menu.x(), menu.bottom() + 4);
      return this._actLine.render();
    }
  };

  SpGnaviParts.prototype._eClickHome = function() {
    MY.c.setPage(MY.conf.M_TOP);
    return this._updateActLine();
  };

  SpGnaviParts.prototype._eClickPj = function() {
    MY.c.setPage(MY.conf.M_PROJECTS);
    return this._updateActLine();
  };

  SpGnaviParts.prototype._eClickAbout = function() {
    MY.c.setPage(MY.conf.M_ABOUT);
    return this._updateActLine();
  };

  SpGnaviParts.prototype._makeTextParts = function(txt, className, onClick) {
    var t;
    t = this._makeDisplay();
    this.add(t);
    t.elm().addClass(className);
    t.text(txt);
    if (onClick != null) {
      t.elm().on("click", onClick);
    }
    return t;
  };

  SpGnaviParts.prototype.resize = function(w, h) {
    var i, j, k, len, len1, menuX, menuY, ref, ref1, val;
    this._resize(w, h);
    this.size(~~(this._sw * 0.5) + 5, this._sh + 200);
    this.render();
    this._bg.size(this.width(), this.height());
    this._bg.render();
    this._menuTxt.xy(30, MY.conf.HEADER_HEIGHT[this._lo]);
    this._menuTxt.render();
    this._menuTxtLine.xy(this._menuTxt.x(), this._menuTxt.bottom() + 4);
    this._menuTxtLine.render();
    menuY = 100;
    ref = this._menus;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      val = ref[i];
      val.xy(this._menuTxt.x(), menuY);
      val.render();
      menuY = val.bottom() + 36;
    }
    menuX = this._menuTxt.x();
    ref1 = this._lang;
    for (i = k = 0, len1 = ref1.length; k < len1; i = ++k) {
      val = ref1[i];
      val.xy(menuX, this._sh - 40);
      val.render();
      menuX = val.right() + 15;
    }
    return this._updateActLine();
  };

  SpGnaviParts.prototype._update = function() {
    return SpGnaviParts.__super__._update.call(this);
  };

  return SpGnaviParts;

})(MyDisplay);

module.exports = SpGnaviParts;


},{"../base/MyDisplay":16,"../libs/object/Rect":38,"../parts/SimpleBtn":49}],25:[function(require,module,exports){
var Utils,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Utils = (function() {
  function Utils() {
    this.price = bind(this.price, this);
    this.getHexColor = bind(this.getHexColor, this);
    this.scrollTop = bind(this.scrollTop, this);
    this.windowHeight = bind(this.windowHeight, this);
    this.numStr = bind(this.numStr, this);
    this._A = Math.PI / 180;
  }

  Utils.prototype.random = function(min, max) {
    if (min < 0) {
      min--;
    }
    return ~~(Math.random() * ((max + 1) - min) + min);
  };

  Utils.prototype.hit = function(range) {
    return this.random(0, range - 1) === 0;
  };

  Utils.prototype.range = function(val) {
    return this.random(-val, val);
  };

  Utils.prototype.arrRand = function(arr) {
    return arr[this.random(0, arr.length - 1)];
  };

  Utils.prototype.map = function(num, resMin, resMax, baseMin, baseMax) {
    var p;
    if (num < baseMin) {
      return resMin;
    }
    if (num > baseMax) {
      return resMax;
    }
    p = (resMax - resMin) / (baseMax - baseMin);
    return ((num - baseMin) * p) + resMin;
  };

  Utils.prototype.radian = function(degree) {
    return degree * this._A;
  };

  Utils.prototype.degree = function(radian) {
    return radian / this._A;
  };

  Utils.prototype.decimal = function(num, n) {
    var i, pos;
    num = String(num);
    pos = num.indexOf(".");
    if (n === 0) {
      return num.split(".")[0];
    }
    if (pos === -1) {
      num += ".";
      i = 0;
      while (i < n) {
        num += "0";
        i++;
      }
      return num;
    }
    num = num.substr(0, pos) + num.substr(pos, n + 1);
    return num;
  };

  Utils.prototype.floor = function(num, min, max) {
    return Math.min(max, Math.max(num, min));
  };

  Utils.prototype.strReverse = function(str) {
    var i, len, res;
    res = "";
    len = str.length;
    i = 1;
    while (i <= len) {
      res += str.substr(-i, 1);
      i++;
    }
    return res;
  };

  Utils.prototype.shuffle = function(arr) {
    var i, j, k, results;
    i = arr.length;
    results = [];
    while (--i) {
      j = Math.floor(Math.random() * (i + 1));
      if (i === j) {
        continue;
      }
      k = arr[i];
      arr[i] = arr[j];
      results.push(arr[j] = k);
    }
    return results;
  };

  Utils.prototype.sliceNull = function(arr) {
    var i, l, len1, newArr, val;
    newArr = [];
    for (i = l = 0, len1 = arr.length; l < len1; i = ++l) {
      val = arr[i];
      if (val !== null) {
        newArr.push(val);
      }
    }
    return newArr;
  };

  Utils.prototype.replaceAll = function(val, org, dest) {
    return val.split(org).join(dest);
  };

  Utils.prototype.sort = function(arr, para, desc) {
    if (desc === void 0) {
      desc = false;
    }
    if (desc) {
      return arr.sort(function(a, b) {
        return b[para] - a[para];
      });
    } else {
      return arr.sort(function(a, b) {
        return a[para] - b[para];
      });
    }
  };

  Utils.prototype.unique = function() {
    return new Date().getTime();
  };

  Utils.prototype.numStr = function(num, keta) {
    var i, len, str;
    str = String(num);
    if (str.length >= keta) {
      return str;
    }
    len = keta - str.length;
    i = 0;
    while (i < len) {
      str = "0" + str;
      i++;
    }
    return str;
  };

  Utils.prototype.buttonMode = function(flg) {
    if (flg) {
      return $("body").css("cursor", "pointer");
    } else {
      return $("body").css("cursor", "default");
    }
  };

  Utils.prototype.getQuery = function(key) {
    var qs, regex;
    key = key.replace(/[€[]/, "€€€[").replace(/[€]]/, "€€€]");
    regex = new RegExp("[€€?&]" + key + "=([^&#]*)");
    qs = regex.exec(window.location.href);
    if (qs === null) {
      return "";
    } else {
      return qs[1];
    }
  };

  Utils.prototype.hash = function() {
    return location.hash.replace("#", "");
  };

  Utils.prototype.isSmt = function() {
    return navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0;
  };

  Utils.prototype.isAndroid = function() {
    var u;
    u = navigator.userAgent;
    return u.indexOf('BlackBerry') > 0 || u.indexOf('Android') > 0 || u.indexOf('Windows Phone') > 0;
  };

  Utils.prototype.isIos = function() {
    return navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0;
  };

  Utils.prototype.isPs3 = function() {
    var u;
    u = navigator.userAgent;
    return u.indexOf('PLAYSTATION 3') > 0;
  };

  Utils.prototype.isVita = function() {
    var u;
    u = navigator.userAgent;
    return u.indexOf('PlayStation Vita') > 0;
  };

  Utils.prototype.isIe8Under = function() {
    var msie;
    msie = navigator.appVersion.toLowerCase();
    msie = msie.indexOf('msie') > -1 ? parseInt(msie.replace(/.*msie[ ]/, '').match(/^[0-9]+/)) : 0;
    return msie <= 8 && msie !== 0;
  };

  Utils.prototype.isIe9Under = function() {
    var msie;
    msie = navigator.appVersion.toLowerCase();
    msie = msie.indexOf('msie') > -1 ? parseInt(msie.replace(/.*msie[ ]/, '').match(/^[0-9]+/)) : 0;
    return msie <= 9 && msie !== 0;
  };

  Utils.prototype.isIe = function() {
    var ua;
    ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('msie') !== -1 || ua.indexOf('trident/7') !== -1;
  };

  Utils.prototype.isIpad = function() {
    return navigator.userAgent.indexOf('iPad') > 0;
  };

  Utils.prototype.isTablet = function() {
    return this.isIpad() || (this.isAndroid() && navigator.userAgent.indexOf('Mobile') === -1);
  };

  Utils.prototype.isWin = function() {
    return navigator.platform.indexOf("Win") !== -1;
  };

  Utils.prototype.isChrome = function() {
    return navigator.userAgent.indexOf('Chrome') > 0;
  };

  Utils.prototype.isFF = function() {
    return window.navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  };

  Utils.prototype.isIOSUiView = function() {
    var a;
    a = window.navigator.userAgent.toLowerCase();
    return (this.isIos() && a.indexOf('safari') === -1) || (this.isIos() && a.indexOf('crios') > 0) || (this.isIos() && a.indexOf('gsa') > 0);
  };

  Utils.prototype.getCookie = function(key) {
    var a, arr, i, l, len1, val;
    if (document.cookie === void 0 || document.cookie === null) {
      return null;
    }
    arr = document.cookie.split("; ");
    for (i = l = 0, len1 = arr.length; l < len1; i = ++l) {
      val = arr[i];
      a = val.split("=");
      if (a[0] === key) {
        return a[1];
      }
    }
    return null;
  };

  Utils.prototype.setCookie = function(key, val) {
    return document.cookie = key + "=" + val;
  };

  Utils.prototype.windowHeight = function() {
    return $(document).height();
  };

  Utils.prototype.scrollTop = function() {
    return Math.max($(window).scrollTop(), $(document).scrollTop());
  };

  Utils.prototype.getHexColor = function(r, g, b) {
    var str;
    str = (r << 16 | g << 8 | b).toString(16);
    return "#" + new Array(7 - str.length).join("0") + str;
  };

  Utils.prototype.price = function(num) {
    return String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
  };

  return Utils;

})();

module.exports = Utils;


},{}],26:[function(require,module,exports){
var Animation, Easing,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Easing = require('./Easing');

Animation = (function() {
  function Animation() {
    this.finish = bind(this.finish, this);
    this.to = bind(this.to, this);
    this.get = bind(this.get, this);
    this.rate = bind(this.rate, this);
    this.update = bind(this.update, this);
    this.isCompleted = bind(this.isCompleted, this);
    this.isSet = bind(this.isSet, this);
    this.isComplete = bind(this.isComplete, this);
    this.isStart = bind(this.isStart, this);
    this.start = bind(this.start, this);
    this.set = bind(this.set, this);
    this.reset = bind(this.reset, this);
    this.dispose = bind(this.dispose, this);
    this._init = bind(this._init, this);
    this._cnt = 0;
    this._delay = 0;
    this._frame = 0;
    this._param;
    this._onStart;
    this._onComplete;
    this._isUpdate = false;
    this._isStart = false;
    this._isComplete = false;
    this._isSet = false;
    this._isCompleted = false;
    this._init();
  }

  Animation.prototype._init = function() {};

  Animation.prototype.dispose = function() {
    return this.reset();
  };

  Animation.prototype.reset = function() {
    this._isUpdate = false;
    this._isStart = false;
    this._isComplete = false;
    this._isSet = false;
    this._isCompleted = false;
    this._param = null;
    this._onStart = null;
    return this._onComplete = null;
  };

  Animation.prototype.set = function(param) {
    var key, results, val;
    this.reset();
    if (param.ease == null) {
      param.ease = "linear";
    }
    this._isSet = true;
    this._cnt = 0;
    this._delay = param.delay == null ? 0 : param.delay;
    this._frame = param.frame == null ? 0 : param.frame;
    this._onStart = param.onStart;
    this._onComplete = param.onComplete;
    this._param = {};
    results = [];
    for (key in param) {
      val = param[key];
      if (key !== "delay" && key !== "frame" && key !== "onStart" && key !== "onComplete" && key !== "ease" && key !== "s") {
        val.val = val.from;
        val.easing = new Easing();
        val.easeMethod = val.easing[param.ease];
        if (val.easeMethod == null) {
          console.error(param.ease + "はねーよ");
        }
        val.t = 0;
        val.easeSpeed = 1 / this._frame;
        results.push(this._param[key] = val);
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  Animation.prototype.start = function() {
    return this._isUpdate = true;
  };

  Animation.prototype.isStart = function() {
    return this._isStart;
  };

  Animation.prototype.isComplete = function() {
    return this._isComplete;
  };

  Animation.prototype.isSet = function() {
    return this._isSet;
  };

  Animation.prototype.isCompleted = function() {
    return this._isCompleted;
  };

  Animation.prototype.update = function() {
    var key, rate, ref, val;
    if (!this._isUpdate) {
      return;
    }
    if (!this._isComplete && ++this._cnt > this._delay) {
      if (!this._isStart) {
        if (this._onStart != null) {
          this._onStart();
        }
        this._isStart = true;
      }
      ref = this._param;
      for (key in ref) {
        val = ref[key];
        val.t += val.easeSpeed;
        rate = val.easeMethod(val.t, val.s);
        val.val = (val.from * (1 - rate)) + (val.to * rate);
        if (val.t >= 1) {
          this._isComplete = true;
        }
      }
      if (this._isComplete) {
        if (this._onComplete != null) {
          return this._onComplete();
        }
      }
    }
  };

  Animation.prototype.rate = function(r) {
    var key, rate, ref, results, val;
    r = this._floor(r, 0, 1);
    ref = this._param;
    results = [];
    for (key in ref) {
      val = ref[key];
      rate = val.easeMethod(r, val.s);
      results.push(val.val = (val.from * (1 - rate)) + (val.to * rate));
    }
    return results;
  };

  Animation.prototype.get = function(key) {
    if (this._isComplete) {
      this._isCompleted = true;
    }
    if ((this._param != null) && (this._param[key] != null)) {
      return this._param[key].val;
    } else {
      return 0;
    }
  };

  Animation.prototype.to = function(key) {
    if ((this._param != null) && (this._param[key] != null)) {
      return this._param[key].to;
    } else {
      return null;
    }
  };

  Animation.prototype._floor = function(num, min, max) {
    return Math.min(max, Math.max(num, min));
  };

  Animation.prototype.finish = function() {
    var key, rate, ref, results, val;
    ref = this._param;
    results = [];
    for (key in ref) {
      val = ref[key];
      val.easing.t = val.easing.val = 1;
      rate = 1;
      val.val = (val.from * (1 - rate)) + (val.to * rate);
      this._isComplete = true;
      if (this._onComplete != null) {
        results.push(this._onComplete());
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  return Animation;

})();

module.exports = Animation;


},{"./Easing":27}],27:[function(require,module,exports){
var Easing,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Easing = (function() {
  function Easing() {
    this.inOutSine = bind(this.inOutSine, this);
    this.inOutQuint = bind(this.inOutQuint, this);
    this.inOutQuart = bind(this.inOutQuart, this);
    this.inOutQuad = bind(this.inOutQuad, this);
    this.inOutExpo = bind(this.inOutExpo, this);
    this.inOutCubic = bind(this.inOutCubic, this);
    this.inOutCirc = bind(this.inOutCirc, this);
    this.inOutBounce = bind(this.inOutBounce, this);
    this.inOutBack = bind(this.inOutBack, this);
    this.outSine = bind(this.outSine, this);
    this.outQuint = bind(this.outQuint, this);
    this.outQuart = bind(this.outQuart, this);
    this.outQuad = bind(this.outQuad, this);
    this.outExpo = bind(this.outExpo, this);
    this.outElastic = bind(this.outElastic, this);
    this.outCubic = bind(this.outCubic, this);
    this.outCirc = bind(this.outCirc, this);
    this.outBounce = bind(this.outBounce, this);
    this.outBack = bind(this.outBack, this);
    this.inSine = bind(this.inSine, this);
    this.inQuint = bind(this.inQuint, this);
    this.inQuart = bind(this.inQuart, this);
    this.inQuad = bind(this.inQuad, this);
    this.inExpo = bind(this.inExpo, this);
    this.inElastic = bind(this.inElastic, this);
    this.inCubic = bind(this.inCubic, this);
    this.inCirc = bind(this.inCirc, this);
    this.inBounce = bind(this.inBounce, this);
    this.inBack = bind(this.inBack, this);
    this.linear = bind(this.linear, this);
  }

  Easing.prototype.linear = function(t) {
    return t;
  };

  Easing.prototype.inBack = function(t) {
    var s;
    s = 1.70158;
    return t * t * ((s + 1) * t - s);
  };

  Easing.prototype.inBounce = function(t) {
    t = 1.0 - t;
    if (t < 1 / 2.75) {
      return 1.0 - (7.5625 * t * t);
    }
    if (t < 2 / 2.75) {
      t -= 1.5 / 2.75;
      return 1.0 - (7.5625 * t * t + 0.75);
    }
    if (t < 2.5 / 2.75) {
      t -= 2.25 / 2.75;
      return 1.0 - (7.5625 * t * t + 0.9375);
    }
    t -= 2.625 / 2.75;
    return 1.0 - (7.5625 * t * t + 0.984375);
  };

  Easing.prototype.inCirc = function(t) {
    if (t >= 1) {
      return 1;
    } else {
      return -(Math.sqrt(1 - t * t) - 1);
    }
  };

  Easing.prototype.inCubic = function(t) {
    return t * t * t;
  };

  Easing.prototype.inElastic = function(t, s) {
    var a, p;
    p = 0.3;
    a = 1.0;
    s = s || 1.70158;
    if (t === 0) {
      return 0;
    }
    if (t === 1.0) {
      return 1.0;
    }
    if (a < 1.0) {
      a = 1.0;
      s = p / 4;
    } else {
      s = p / (2 * 3.1419) * Math.asin(1.0 / a);
    }
    --t;
    return -(a * Math.pow(2, 10 * t) * Math.sin((t - s) * (2 * 3.1419) / p));
  };

  Easing.prototype.inExpo = function(t) {
    if (t === 0) {
      return 0;
    } else {
      return Math.pow(2, 10 * (t - 1));
    }
  };

  Easing.prototype.inQuad = function(t) {
    return t * t;
  };

  Easing.prototype.inQuart = function(t) {
    return t * t * t * t;
  };

  Easing.prototype.inQuint = function(t) {
    return t * t * t * t * t;
  };

  Easing.prototype.inSine = function(t) {
    return -Math.cos(t * (Math.PI / 2)) + 1.0;
  };

  Easing.prototype.outBack = function(t, s) {
    s = s || 1.70158;
    --t;
    return t * t * ((s + 1.0) * t + s) + 1.0;
  };

  Easing.prototype.outBounce = function(t) {
    if (t < 1 / 2.75) {
      return 7.5625 * t * t;
    }
    if (t < 2 / 2.75) {
      t -= 1.5 / 2.75;
      return 7.5625 * t * t + 0.75;
    }
    if (t < 2.5 / 2.75) {
      t -= 2.25 / 2.75;
      return 7.5625 * t * t + 0.9375;
    }
    t -= 2.625 / 2.75;
    return 7.5625 * t * t + 0.984375;
  };

  Easing.prototype.outCirc = function(t) {
    --t;
    return Math.sqrt(1 - t * t);
  };

  Easing.prototype.outCubic = function(t) {
    --t;
    return t * t * t + 1;
  };

  Easing.prototype.outElastic = function(t, s) {
    var a, p;
    p = s || 0.3;
    a = 1.0;
    if (t === 0) {
      return 0;
    }
    if (t === 1.0) {
      return 1.0;
    }
    if (a < 1.0) {
      a = 1.0;
      s = p / 4;
    } else {
      s = p / (2 * 3.1419) * Math.asin(1.0 / a);
    }
    return a * Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * 3.1419) / p) + 1.0;
  };

  Easing.prototype.outExpo = function(t) {
    if (t === 1.0) {
      return 1;
    } else {
      return -Math.pow(2, -10 * t) + 1;
    }
  };

  Easing.prototype.outQuad = function(t) {
    return -t * (t - 2);
  };

  Easing.prototype.outQuart = function(t) {
    --t;
    return 1.0 - t * t * t * t;
  };

  Easing.prototype.outQuint = function(t) {
    --t;
    return t * t * t * t * t + 1;
  };

  Easing.prototype.outSine = function(t) {
    return Math.sin(t * (Math.PI / 2));
  };

  Easing.prototype.inOutBack = function(t, s) {
    var k;
    s = s || 1.70158;
    k = 1.525;
    t *= 2;
    s *= k;
    if (t < 1) {
      return 0.5 * (t * t * ((s + 1) * t - s));
    }
    t -= 2;
    return 0.5 * (t * t * ((s + 1) * t + s) + 2);
  };

  Easing.prototype.inOutBounce = function(t) {
    if (t < 0.5) {
      return this.inBounce(t * 2) * 0.5;
    } else {
      return this.outBounce(t * 2 - 1.0) * 0.5 + 0.5;
    }
  };

  Easing.prototype.inOutCirc = function(t) {
    t *= 2;
    if (t < 1) {
      return -0.5 * (Math.sqrt(1 - t * t) - 1);
    }
    t -= 2;
    return 0.5 * (Math.sqrt(1 - t * t) + 1);
  };

  Easing.prototype.inOutCubic = function(t) {
    t *= 2;
    if (t < 1) {
      return 0.5 * t * t * t;
    }
    t -= 2;
    return 0.5 * (t * t * t + 2);
  };

  Easing.prototype.inOutExpo = function(t) {
    if (t === 0) {
      return 0;
    }
    if (t === 1.0) {
      return 1.0;
    }
    t *= 2;
    if (t < 1) {
      return 0.5 * Math.pow(2, 10 * (t - 1));
    }
    --t;
    return 0.5 * (-Math.pow(2, -10 * t) + 2);
  };

  Easing.prototype.inOutQuad = function(t) {
    t *= 2;
    if (t < 1) {
      return 0.5 * t * t * t * t;
    }
    t -= 2;
    return -0.5 * (t * t * t * t - 2);
  };

  Easing.prototype.inOutQuart = function(t) {
    t *= 2;
    if (t < 1) {
      return 0.5 * t * t * t * t;
    }
    t -= 2;
    return -0.5 * (t * t * t * t - 2);
  };

  Easing.prototype.inOutQuint = function(t) {
    t *= 2;
    if (t < 1) {
      return 0.5 * t * t * t * t * t;
    }
    t -= 2;
    return 0.5 * (t * t * t * t * t + 2);
  };

  Easing.prototype.inOutSine = function(t) {
    return -0.5 * (Math.cos(Math.PI * t) - 1);
  };

  return Easing;

})();

module.exports = Easing;


},{}],28:[function(require,module,exports){
var AniParam, Display,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

AniParam = require('../../base/AniParam');

Display = (function() {
  function Display(option) {
    this.text = bind(this.text, this);
    this.elm = bind(this.elm, this);
    this.id = bind(this.id, this);
    this.dispose = bind(this.dispose, this);
    this._isUpdateCss = bind(this._isUpdateCss, this);
    this.css = bind(this.css, this);
    this.isVisible = bind(this.isVisible, this);
    this.brightness = bind(this.brightness, this);
    this.visible = bind(this.visible, this);
    this.mask = bind(this.mask, this);
    this.opacity = bind(this.opacity, this);
    this.bgColor = bind(this.bgColor, this);
    this.right = bind(this.right, this);
    this.bottom = bind(this.bottom, this);
    this.y = bind(this.y, this);
    this.x = bind(this.x, this);
    this.xy = bind(this.xy, this);
    this.height = bind(this.height, this);
    this.width = bind(this.width, this);
    this.size = bind(this.size, this);
    this.render = bind(this.render, this);
    this.unshift = bind(this.unshift, this);
    this.add = bind(this.add, this);
    this.init = bind(this.init, this);
    this._option = option || {};
    this._id = this._option.id || "";
    this._elm;
    this._elmName = this._option.elmName || "div";
    this._css = {
      position: this._option.position || "absolute",
      top: 0,
      left: 0,
      width: this._option.width || -1,
      height: this._option.height || -1
    };
    this._oldCss = {};
    this._etc = {};
    this.ap = new AniParam();
  }

  Display.prototype.init = function() {
    if (window.MY_DISPLAY_ID == null) {
      window.MY_DISPLAY_ID = 0;
    }
    if (this._id === "") {
      this._id = "display" + String(window.MY_DISPLAY_ID++);
    }
    if ($("#" + this._id).length > 0) {
      this._elm = $("#" + this._id);
    } else {
      $("body").append("<" + this._elmName + " id='" + this._id + "'></" + this._elmName + ">");
      this._elm = $("#" + this._id);
    }
    if (this._css.width === -1) {
      this._css.width = this._elm.width();
    }
    if (this._css.height === -1) {
      this._css.height = this._elm.height();
    }
    return this.render();
  };

  Display.prototype.add = function(display) {
    return display.elm().appendTo("#" + this.id());
  };

  Display.prototype.unshift = function(display) {
    return display.elm().prependTo("#" + this.id());
  };

  Display.prototype.render = function() {
    var key, ref, results, value;
    if (this._isUpdateCss()) {
      this._elm.css(this._css);
    }
    ref = this._css;
    results = [];
    for (key in ref) {
      value = ref[key];
      results.push(this._oldCss[key] = value);
    }
    return results;
  };

  Display.prototype.size = function(width, height) {
    this._css.width = width;
    return this._css.height = height;
  };

  Display.prototype.width = function(width) {
    if (width != null) {
      return this._css.width = width;
    } else {
      if (this._css.width === "auto") {
        return this._elm.width();
      } else {
        return this._css.width;
      }
    }
  };

  Display.prototype.height = function(height) {
    if (height != null) {
      return this._css.height = height;
    } else {
      if (this._css.height === "auto") {
        return this._elm.height();
      } else {
        return this._css.height;
      }
    }
  };

  Display.prototype.xy = function(x, y) {
    this._css.top = y;
    return this._css.left = x;
  };

  Display.prototype.x = function(x) {
    if (x != null) {
      return this._css.left = x;
    } else {
      return this._css.left;
    }
  };

  Display.prototype.y = function(y) {
    if (y != null) {
      return this._css.top = y;
    } else {
      return this._css.top;
    }
  };

  Display.prototype.bottom = function() {
    return this.y() + this.height();
  };

  Display.prototype.right = function() {
    return this.x() + this.width();
  };

  Display.prototype.bgColor = function(color) {
    if (color != null) {
      return this._css.backgroundColor = color;
    } else {
      return this._css.backgroundColor;
    }
  };

  Display.prototype.opacity = function(val) {
    if (val != null) {
      return this._css.opacity = val;
    } else {
      return this._css.opacity || 1;
    }
  };

  Display.prototype.mask = function(val) {
    return this._css.overflow = val ? "hidden" : "visible";
  };

  Display.prototype.visible = function(bool) {
    if (bool) {
      return this._css.display = "block";
    } else {
      return this._css.display = "none";
    }
  };

  Display.prototype.brightness = function(val) {
    if (val != null) {
      this._etc.brightness = val;
      if (val === 1) {
        this._css["-webkit-filter"] = "none";
        this._css["-moz-filter"] = "none";
        this._css["-o-filter"] = "none";
        this._css["-ms-filter"] = "none";
        return this._css["filter"] = "none";
      } else {
        this._css["-webkit-filter"] = "contrast(" + val + "%)";
        this._css["-moz-filter"] = "contrast(" + val + "%)";
        this._css["-o-filter"] = "contrast(" + val + "%)";
        this._css["-ms-filter"] = "contrast(" + val + "%)";
        return this._css["filter"] = "contrast(" + val + "%)";
      }
    } else {
      if (this._etc.brightness == null) {
        this._etc.brightness = 1;
      }
      return this._etc.brightness;
    }
  };

  Display.prototype.isVisible = function() {
    if (this._css.display === "none") {
      return false;
    } else {
      return true;
    }
  };

  Display.prototype.css = function() {
    return this._css;
  };

  Display.prototype._isUpdateCss = function() {
    var key, ref, value;
    ref = this._css;
    for (key in ref) {
      value = ref[key];
      if (value !== this._oldCss[key]) {
        return true;
      }
    }
    return false;
  };

  Display.prototype.dispose = function() {
    var i, len;
    if ((this._elm != null) && this._elm.length > 0) {
      i = 0;
      len = this._elm.queue().length;
      while (i < len) {
        this._elm.stop();
        i++;
      }
    }
    if (this._elm != null) {
      this._elm.off();
      if ((this._option.isRemove == null) || this._option.isRemove) {
        this._elm.remove();
      } else {
        this._elm.removeAttr('style');
      }
      this._elm = null;
    }
    this._css = null;
    this._option = null;
    this._oldCss = null;
    return this.ap = null;
  };

  Display.prototype.id = function() {
    return this._id;
  };

  Display.prototype.elm = function() {
    return this._elm;
  };

  Display.prototype.text = function(val) {
    this._elm.css({
      width: "auto",
      height: "auto"
    });
    if (val != null) {
      this._elm.html(val);
    } else {
      this._elm.html(this._elm.html());
    }
    this._css.width = "auto";
    this._css.height = "auto";
    return this.render();
  };

  return Display;

})();

module.exports = Display;


},{"../../base/AniParam":14}],29:[function(require,module,exports){
var Display, DisplayImg, DisplayTransform, ImgData,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Display = require('./Display');

DisplayTransform = require('./DisplayTransform');

ImgData = require('../img/ImgData');

DisplayImg = (function(superClass) {
  extend(DisplayImg, superClass);

  function DisplayImg(option) {
    this.changeImgSrc = bind(this.changeImgSrc, this);
    this.orgSize = bind(this.orgSize, this);
    this.size = bind(this.size, this);
    this.setImg = bind(this.setImg, this);
    this.setRetina = bind(this.setRetina, this);
    this._eLoadImg = bind(this._eLoadImg, this);
    this.dispose = bind(this.dispose, this);
    this.init = bind(this.init, this);
    DisplayImg.__super__.constructor.call(this, option);
    if (this._option.retina == null) {
      this._option.retina = false;
    }
    this._imgData;
    this.onLoad;
  }

  DisplayImg.prototype.init = function() {
    DisplayImg.__super__.init.call(this);
    this._imgData = new ImgData(this._option.src, 0, 0, this._option.retina);
    this._imgData.onLoad = this._eLoadImg;
    return this._imgData.load();
  };

  DisplayImg.prototype.dispose = function() {
    if (this._imgData != null) {
      this._imgData.dispose();
      this._imgData = null;
    }
    this.onLoad = null;
    return DisplayImg.__super__.dispose.call(this);
  };

  DisplayImg.prototype._eLoadImg = function() {
    if (this._imgData != null) {
      this.setImg();
    }
    if (this.onLoad != null) {
      return this.onLoad();
    }
  };

  DisplayImg.prototype.setRetina = function(bool) {
    this._option.retina = bool;
    if (this._imgData != null) {
      this._imgData.setRetina(bool);
      return this.setImg();
    }
  };

  DisplayImg.prototype.setImg = function() {
    this.elm().css({
      backgroundImage: "url('" + this._imgData.src + "')",
      backgroundRepeat: "no-repeat"
    });
    this.size(this._imgData.width, this._imgData.height);
    return this.render();
  };

  DisplayImg.prototype.size = function(width, height) {
    this._imgData.width = width;
    this._imgData.height = height;
    this.elm().css({
      backgroundSize: this._imgData.width + "px " + this._imgData.height + "px"
    });
    return DisplayImg.__super__.size.call(this, width, height);
  };

  DisplayImg.prototype.orgSize = function() {
    if (this._option.retina) {
      return {
        w: ~~(this._imgData.orgWidth * 0.5),
        h: ~~(this._imgData.orgHeight * 0.5)
      };
    } else {
      return {
        w: this._imgData.orgWidth,
        h: this._imgData.orgHeight
      };
    }
  };

  DisplayImg.prototype.changeImgSrc = function(src) {
    this._imgData.src = src;
    return this.setImg();
  };

  return DisplayImg;

})(DisplayTransform);

module.exports = DisplayImg;


},{"../img/ImgData":32,"./Display":28,"./DisplayTransform":30}],30:[function(require,module,exports){
var Display, DisplayTransform,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Display = require('./Display');

DisplayTransform = (function(superClass) {
  extend(DisplayTransform, superClass);

  function DisplayTransform(option) {
    this._isUpdateTransform = bind(this._isUpdateTransform, this);
    this._isInit = bind(this._isInit, this);
    this.perspective = bind(this.perspective, this);
    this.pivot = bind(this.pivot, this);
    this.render = bind(this.render, this);
    this.useTransform = bind(this.useTransform, this);
    this.rotate = bind(this.rotate, this);
    this.scale = bind(this.scale, this);
    this.translate = bind(this.translate, this);
    this.dispose = bind(this.dispose, this);
    this.init = bind(this.init, this);
    DisplayTransform.__super__.constructor.call(this, option);
    if (this._option.isDefault3d == null) {
      this._option.isDefault3d = true;
    }
    this._transform = {
      dx: 0,
      dy: 0,
      dz: 0,
      scaleX: 1,
      scaleY: 1,
      scaleZ: 1,
      rotX: 0,
      rotY: 0,
      rotZ: 0
    };
    this._isNone = false;
    this._oldTransform = {};
  }

  DisplayTransform.prototype.init = function() {
    DisplayTransform.__super__.init.call(this);
    if (this._option.isDefault3d) {
      this.perspective();
      return this.pivot();
    }
  };

  DisplayTransform.prototype.dispose = function() {
    this._oldTransform = null;
    this._transform = null;
    return DisplayTransform.__super__.dispose.call(this);
  };

  DisplayTransform.prototype.translate = function(x, y, z) {
    if ((x == null) && (y == null) && (z == null)) {
      return this._transform;
    } else {
      x = x || 0;
      y = y || 0;
      z = z || 0;
      this._transform.dx = x;
      this._transform.dy = y;
      return this._transform.dz = z;
    }
  };

  DisplayTransform.prototype.scale = function(x, y, z) {
    if ((x == null) && (y == null) && (z == null)) {
      return this._transform;
    } else {
      x = x || 1;
      y = y || 1;
      z = z || 1;
      this._transform.scaleX = x;
      this._transform.scaleY = y;
      return this._transform.scaleZ = z;
    }
  };

  DisplayTransform.prototype.rotate = function(x, y, z) {
    if ((x == null) && (y == null) && (z == null)) {
      return this._transform;
    } else {
      x = x || 0;
      y = y || 0;
      z = z || 0;
      this._transform.rotX = x;
      this._transform.rotY = y;
      return this._transform.rotZ = z;
    }
  };

  DisplayTransform.prototype.useTransform = function(bool) {
    return this._isNone = !bool;
  };

  DisplayTransform.prototype.render = function() {
    var key, ref, results, value;
    DisplayTransform.__super__.render.call(this);
    if (this._isUpdateTransform()) {
      this._elm.css(this._getVendorCss("transform", this._translate3d(this._transform.dx, this._transform.dy, this._transform.dz) + " " + this._rotateX(this._transform.rotX) + " " + this._rotateY(this._transform.rotY) + " " + this._rotateZ(this._transform.rotZ) + " " + this._scale3d(this._transform.scaleX, this._transform.scaleY, this._transform.scaleZ)));
    }
    if (this._isInit()) {
      this._elm.css(this._getVendorCss("transform", "none"));
    }
    ref = this._transform;
    results = [];
    for (key in ref) {
      value = ref[key];
      results.push(this._oldTransform[key] = value);
    }
    return results;
  };

  DisplayTransform.prototype.pivot = function(val) {
    val = val || "50% 50%";
    return this.elm().css(this._getVendorCss("transform-origin", val));
  };

  DisplayTransform.prototype.perspective = function(val) {
    val = val || 800;
    return this.elm().css(this._getVendorCss("transform-style", "preserve-3d")).css(this._getVendorCss("perspective", val)).css(this._getVendorCss("backface-visibility", "hidden"));
  };

  DisplayTransform.prototype._isInit = function() {
    if (this._transform.dx === 0 && this._transform.dy === 0 && this._transform.dz === 0 && this._transform.scaleX === 1 && this._transform.scaleY === 1 && this._transform.scaleZ === 1 && this._transform.rotX === 0 && this._transform.rotY === 0 && this._transform.rotZ === 0) {
      return true;
    } else {
      return false;
    }
  };

  DisplayTransform.prototype._isUpdateTransform = function() {
    var key, ref, value;
    ref = this._transform;
    for (key in ref) {
      value = ref[key];
      if (value !== this._oldTransform[key]) {
        return true;
      }
    }
    return false;
  };

  DisplayTransform.prototype._getVendorCss = function(prop, val) {
    var res;
    res = {};
    res["-webkit-" + prop] = val;
    res["-o-" + prop] = val;
    res["-khtml-" + prop] = val;
    res["-ms-" + prop] = val;
    res[prop] = val;
    return res;
  };

  DisplayTransform.prototype._translate3d = function(x, y, z) {
    y = y || 0;
    z = z || 0;
    return 'translate3d(' + x + 'px,' + y + 'px,' + z + 'px)';
  };

  DisplayTransform.prototype._rotateX = function(val) {
    if (val === void 0) {
      val = 0;
    }
    return 'rotate3d(1,0,0,' + val + 'deg)';
  };

  DisplayTransform.prototype._rotateY = function(val) {
    if (val === void 0) {
      val = 0;
    }
    return 'rotate3d(0,1,0,' + val + 'deg)';
  };

  DisplayTransform.prototype._rotateZ = function(val) {
    if (val === void 0) {
      val = 0;
    }
    return 'rotate3d(0,0,1,' + val + 'deg)';
  };

  DisplayTransform.prototype._scale3d = function(x, y, z) {
    if (x === void 0) {
      x = 1;
    }
    if (y === void 0) {
      y = 1;
    }
    if (z === void 0) {
      z = 1;
    }
    return 'scale3d(' + x + ',' + y + ',' + z + ')';
  };

  return DisplayTransform;

})(Display);

module.exports = DisplayTransform;


},{"./Display":28}],31:[function(require,module,exports){
var ImagesLoader,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

ImagesLoader = (function() {
  function ImagesLoader(list, num) {
    this.dispose = bind(this.dispose, this);
    this._list = list;
    this._num = num == null ? 1 : num;
    this.imgList = {};
    this.loadedNum = 0;
    this.loaded = false;
    this.onComplete;
    this.onProgress;
  }

  ImagesLoader.prototype.start = function() {
    return this._load();
  };

  ImagesLoader.prototype.dispose = function() {
    this._list = null;
    this.imgList = null;
    this.onComplete = null;
    return this.onProgress = null;
  };

  ImagesLoader.prototype.getImg = function(id) {
    return this.imgList[id];
  };

  ImagesLoader.prototype.imgNum = function() {
    return this.imgList.length;
  };

  ImagesLoader.prototype._load = function() {
    var end, i, img, o, results, start;
    start = this.loadedNum;
    end = Math.min(start + this._num, this._list.length);
    i = start;
    results = [];
    while (i < end) {
      img = new Image();
      o = this._list[i];
      img.src = o.url;
      img.imgLoader = this;
      img.imgLoaderId = o.id;
      img.onload = function() {
        this.orgWidth = this.width;
        this.orgHeight = this.height;
        return this.imgLoader._loadedImg(this.imgLoaderId);
      };
      this.imgList[o.id] = img;
      results.push(i++);
    }
    return results;
  };

  ImagesLoader.prototype._loadedImg = function() {
    this.loadedNum++;
    if (this.onProgress != null) {
      this.onProgress((this.loadedNum / this._list.length) * 100);
    }
    if (this.loadedNum >= this._list.length) {
      this.loaded = true;
      if (this.onComplete != null) {
        this.onComplete();
      }
      return;
    }
    if (this.loadedNum % this._num === 0) {
      return this._load();
    }
  };

  return ImagesLoader;

})();

module.exports = ImagesLoader;


},{}],32:[function(require,module,exports){
var ImgData,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

ImgData = (function() {
  function ImgData(src, width, height, isRetina) {
    this.setRetina = bind(this.setRetina, this);
    this._eLoad = bind(this._eLoad, this);
    this.getTag = bind(this.getTag, this);
    this.load = bind(this.load, this);
    this.data = bind(this.data, this);
    this.dispose = bind(this.dispose, this);
    this.src = src;
    this.orgSrc = this.src;
    this.width = width || 0;
    this.height = height || 0;
    this.orgWidth = this.width;
    this.orgHeight = this.height;
    if (isRetina == null) {
      isRetina = false;
    }
    this._isRetina = isRetina;
    if (this._isRetina) {
      this.width = ~~(this.width * 0.5);
      this.height = ~~(this.height * 0.5);
    }
    this._image;
    this.onLoad;
  }

  ImgData.prototype.dispose = function() {
    this._image = null;
    return this.onLoad = null;
  };

  ImgData.prototype.data = function() {
    return this._image;
  };

  ImgData.prototype.load = function() {
    this._image = new Image();
    this._image.onload = this._eLoad;
    return this._image.src = this.src;
  };

  ImgData.prototype.getTag = function() {
    return "<img src='" + this.src + "' width='" + this.width + "' height='" + this.height + "' alt=''>";
  };

  ImgData.prototype._eLoad = function() {
    if (this._image != null) {
      this.width = this._image.width;
      this.height = this._image.height;
      this.orgWidth = this._image.width;
      this.orgHeight = this._image.height;
      if (this._isRetina) {
        this.width = ~~(this.orgWidth * 0.5);
        this.height = ~~(this.orgHeight * 0.5);
      }
      if (this.onLoad != null) {
        return this.onLoad();
      }
    }
  };

  ImgData.prototype.setRetina = function(bool) {
    this._isRetina = bool;
    if (this._isRetina) {
      this.width = ~~(this.orgWidth * 0.5);
      return this.height = ~~(this.orgHeight * 0.5);
    } else {
      this.width = this.orgWidth;
      return this.height = this.orgHeight;
    }
  };

  return ImgData;

})();

module.exports = ImgData;


},{}],33:[function(require,module,exports){
var BaseMgr, Utils,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Utils = require('../Utils');

BaseMgr = (function() {
  function BaseMgr() {
    this._init = bind(this._init, this);
    this._u = new Utils();
  }

  BaseMgr.prototype._init = function() {};

  return BaseMgr;

})();

module.exports = BaseMgr;


},{"../Utils":25}],34:[function(require,module,exports){
var BaseMgr, DelayMgr,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

BaseMgr = require('./BaseMgr');

DelayMgr = (function(superClass) {
  extend(DelayMgr, superClass);

  function DelayMgr() {
    this.update = bind(this.update, this);
    this._init = bind(this._init, this);
    DelayMgr.__super__.constructor.call(this);
    this._registFunc = [];
    this._init();
  }

  DelayMgr.prototype._init = function() {
    return DelayMgr.__super__._init.call(this);
  };

  DelayMgr.prototype.add = function(func, delay) {
    this._registFunc = this._sliceNull(this._registFunc);
    return this._registFunc.push({
      f: func,
      d: delay
    });
  };

  DelayMgr.prototype.remove = function(func) {
    var arr, i, j, len, ref, val;
    arr = [];
    ref = this._registFunc;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      val = ref[i];
      if (val.f !== func) {
        arr.push(val);
      }
    }
    return this._registFunc = arr;
  };

  DelayMgr.prototype.update = function() {
    var i, j, len, ref, results, val;
    ref = this._registFunc;
    results = [];
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      val = ref[i];
      if ((val != null) && --val.d <= 0) {
        val.f();
        results.push(this._registFunc[i] = null);
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  DelayMgr.prototype._sliceNull = function(arr) {
    var i, j, len, newArr, val;
    newArr = [];
    for (i = j = 0, len = arr.length; j < len; i = ++j) {
      val = arr[i];
      if (val !== null) {
        newArr.push(val);
      }
    }
    return newArr;
  };

  return DelayMgr;

})(BaseMgr);

module.exports = DelayMgr;


},{"./BaseMgr":33}],35:[function(require,module,exports){
var BaseMgr, ResizeMgr,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

BaseMgr = require('./BaseMgr');

ResizeMgr = (function(superClass) {
  extend(ResizeMgr, superClass);

  function ResizeMgr() {
    this.sh = bind(this.sh, this);
    this.sw = bind(this.sw, this);
    this._setStageSize = bind(this._setStageSize, this);
    this._call = bind(this._call, this);
    this._eResize = bind(this._eResize, this);
    this.refresh = bind(this.refresh, this);
    this._init = bind(this._init, this);
    ResizeMgr.__super__.constructor.call(this);
    this._resizeList = [];
    this.ws = {
      w: 0,
      h: 0,
      oldW: -1,
      oldH: -1
    };
    this._t;
    this._init();
  }

  ResizeMgr.prototype._init = function() {
    ResizeMgr.__super__._init.call(this);
    $(window).bind("resize", this._eResize);
    return this._setStageSize();
  };

  ResizeMgr.prototype.add = function(func, isCall) {
    this._resizeList.push(func);
    if ((isCall != null) && isCall) {
      return func(this.ws.w, this.ws.h);
    }
  };

  ResizeMgr.prototype.remove = function(func) {
    var arr, i, j, len, ref, val;
    arr = [];
    ref = this._resizeList;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      val = ref[i];
      if (val !== func) {
        arr.push(val);
      }
    }
    return this._resizeList = arr;
  };

  ResizeMgr.prototype.refresh = function() {
    return this._eResize();
  };

  ResizeMgr.prototype._eResize = function(e) {
    var i, j, len, ref, val;
    this._setStageSize();
    if (this._t != null) {
      ref = this._t;
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        val = ref[i];
        clearInterval(val);
      }
      this._t = null;
    }
    this._t = [];
    return this._t[0] = setTimeout(this._call, 200);
  };

  ResizeMgr.prototype._call = function() {
    var i, j, len, ref, results, val;
    ref = this._resizeList;
    results = [];
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      val = ref[i];
      results.push(val(this.ws.w, this.ws.h));
    }
    return results;
  };

  ResizeMgr.prototype._setStageSize = function() {
    var h, w;
    if (this._u.isSmt()) {
      w = window.innerWidth;
      h = $(window).height();
    } else {
      if (this._u.isIe8Under()) {
        w = $(window).width();
        h = $(window).height();
      } else {
        w = window.innerWidth;
        h = window.innerHeight;
      }
    }
    this.ws.oldW = this.ws.w;
    this.ws.oldH = this.ws.h;
    this.ws.w = w;
    return this.ws.h = h;
  };

  ResizeMgr.prototype.sw = function() {
    return this.ws.w;
  };

  ResizeMgr.prototype.sh = function() {
    return this.ws.h;
  };

  return ResizeMgr;

})(BaseMgr);

module.exports = ResizeMgr;


},{"./BaseMgr":33}],36:[function(require,module,exports){
var BaseMgr, UpdateMgr,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

BaseMgr = require('./BaseMgr');

UpdateMgr = (function(superClass) {
  extend(UpdateMgr, superClass);

  function UpdateMgr(isRAF) {
    this._update = bind(this._update, this);
    this._init = bind(this._init, this);
    UpdateMgr.__super__.constructor.call(this);
    this.cnt = 0;
    this._isRAF = isRAF || true;
    this._updateList = [];
    this._init();
  }

  UpdateMgr.prototype._init = function() {
    var requestAnimationFrame;
    UpdateMgr.__super__._init.call(this);
    requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
    if (this._isRAF && (window.requestAnimationFrame != null)) {
      return window.requestAnimationFrame(this._update);
    } else {
      return setInterval(this._update, 1000 / 60);
    }
  };

  UpdateMgr.prototype.add = function(func) {
    return this._updateList.push(func);
  };

  UpdateMgr.prototype.remove = function(func) {
    var arr, i, j, len, ref, val;
    arr = [];
    ref = this._updateList;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      val = ref[i];
      if (val !== func) {
        arr.push(val);
      }
    }
    return this._updateList = arr;
  };

  UpdateMgr.prototype._update = function() {
    var i, j, len, ref, t, val;
    this.cnt++;
    ref = this._updateList;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      val = ref[i];
      if (val != null) {
        val();
      }
    }
    if (this._isRAF && (window.requestAnimationFrame != null)) {
      return t = window.requestAnimationFrame(this._update);
    }
  };

  return UpdateMgr;

})(BaseMgr);

module.exports = UpdateMgr;


},{"./BaseMgr":33}],37:[function(require,module,exports){
var Point,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Point = (function() {
  function Point(x, y) {
    this.subtract = bind(this.subtract, this);
    this.reset = bind(this.reset, this);
    this.x = x || 0;
    this.y = y || 0;
  }

  Point.prototype.reset = function() {
    return this.x = this.y = 0;
  };

  Point.prototype.subtract = function(pt) {
    return new Point(this.x - pt.x, this.y - pt.y);
  };

  return Point;

})();

module.exports = Point;


},{}],38:[function(require,module,exports){
var Rect,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Rect = (function() {
  function Rect(x, y, w, h) {
    this.center = bind(this.center, this);
    this.bottom = bind(this.bottom, this);
    this.right = bind(this.right, this);
    this.x = x || 0;
    this.y = y || 0;
    this.w = w || 0;
    this.h = h || 0;
  }

  Rect.prototype.right = function() {
    return this.x + this.w;
  };

  Rect.prototype.bottom = function() {
    return this.y + this.h;
  };

  Rect.prototype.center = function() {
    return {
      x: ~~(this.x + this.w * 0.5),
      y: ~~(this.y + this.h * 0.5)
    };
  };

  return Rect;

})();

module.exports = Rect;


},{}],39:[function(require,module,exports){
var AboutCover, MyDisplay,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MyDisplay = require('../base/MyDisplay');

AboutCover = (function(superClass) {
  extend(AboutCover, superClass);

  function AboutCover() {
    this._update = bind(this._update, this);
    this._resize = bind(this._resize, this);
    this.show = bind(this.show, this);
    this.hide = bind(this.hide, this);
    this.init = bind(this.init, this);
    AboutCover.__super__.constructor.call(this, {
      id: "xAboutCover"
    });
  }

  AboutCover.prototype.init = function() {
    AboutCover.__super__.init.call(this);
    this.bgColor("#FFFFFF");
    this.opacity(0.5);
    this._makeAnimation(1);
    this._resize();
    return this.hide(false);
  };

  AboutCover.prototype.hide = function(isAnimate, delay) {
    var a;
    if (isAnimate == null) {
      isAnimate = true;
    }
    delay = delay || 0;
    a = this._anm[0];
    a.set({
      y: {
        from: 0,
        to: this._sh
      },
      opacity: {
        from: 1,
        to: 0
      },
      ease: MY.conf.ABOUT_PARAM.EASE,
      delay: delay,
      frame: MY.conf.ABOUT_PARAM.FRAME,
      onComplete: (function(_this) {
        return function() {
          _this.visible(false);
          return _this.render();
        };
      })(this)
    });
    a.start();
    if (!isAnimate) {
      a.finish();
    }
    return this._update();
  };

  AboutCover.prototype.show = function(isAnimate, delay) {
    var a;
    if (isAnimate == null) {
      isAnimate = true;
    }
    delay = delay || 0;
    this.visible(true);
    a = this._anm[0];
    a.set({
      y: {
        from: -this._sh,
        to: 0
      },
      opacity: {
        from: 0.5,
        to: 0.5
      },
      ease: MY.conf.ABOUT_PARAM.EASE,
      delay: delay,
      frame: MY.conf.ABOUT_PARAM.FRAME
    });
    a.start();
    if (!isAnimate) {
      a.finish();
    }
    return this._update();
  };

  AboutCover.prototype._resize = function(w, h) {
    AboutCover.__super__._resize.call(this, w, h);
    this.size(this._sw, this._sh);
    return this.render();
  };

  AboutCover.prototype._update = function() {
    var a;
    AboutCover.__super__._update.call(this);
    a = this._anm[0];
    this.translate(0, a.get("y"));
    this.opacity(a.get("opacity"));
    return this.render();
  };

  return AboutCover;

})(MyDisplay);

module.exports = AboutCover;


},{"../base/MyDisplay":16}],40:[function(require,module,exports){
var Btn, DisplayTransform,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

DisplayTransform = require('../libs/display/DisplayTransform');

Btn = (function(superClass) {
  extend(Btn, superClass);

  function Btn(option) {
    this._eClick = bind(this._eClick, this);
    this._eRollOut = bind(this._eRollOut, this);
    this._eRollOver = bind(this._eRollOver, this);
    this._eTouchStart = bind(this._eTouchStart, this);
    this._update = bind(this._update, this);
    this.dispose = bind(this.dispose, this);
    this.init = bind(this.init, this);
    Btn.__super__.constructor.call(this, option);
    this.onRollOver;
    this.onRollOut;
    this.onClick;
    this._cnt = 0;
    this._tapCnt = 5;
    this._isTouchStart = false;
  }

  Btn.prototype.init = function() {
    Btn.__super__.init.call(this);
    this.bgColor("#FF0000");
    this.opacity(0);
    if (MY.u.isSmt()) {
      return this.elm().on("click", this._eClick);
    } else {
      return this.elm().on("mouseover", this._eRollOver).on("mouseout", this._eRollOut).on("click", this._eClick);
    }
  };

  Btn.prototype.dispose = function() {
    this.onRollOver = null;
    this.onRollOut = null;
    this.onClick = null;
    return Btn.__super__.dispose.call(this);
  };

  Btn.prototype._update = function() {
    if (this._isTouchStart) {
      return this._cnt++;
    }
  };

  Btn.prototype._eTouchStart = function(e) {
    this._cnt = 0;
    return this._isTouchStart = true;
  };

  Btn.prototype._eRollOver = function(e) {
    MY.u.buttonMode(true);
    if (this.onRollOver != null) {
      return this.onRollOver();
    }
  };

  Btn.prototype._eRollOut = function(e) {
    MY.u.buttonMode(false);
    if (this.onRollOut != null) {
      return this.onRollOut();
    }
  };

  Btn.prototype._eClick = function(e) {
    MY.u.buttonMode(false);
    if (this.onClick != null) {
      return this.onClick();
    }
  };

  return Btn;

})(DisplayTransform);

module.exports = Btn;


},{"../libs/display/DisplayTransform":30}],41:[function(require,module,exports){
var EffectBar, MyDisplay, Point,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MyDisplay = require('../base/MyDisplay');

Point = require('../libs/object/Point');

EffectBar = (function(superClass) {
  extend(EffectBar, superClass);

  function EffectBar(option, barColor, offsetDelay, anmFrame) {
    this._update = bind(this._update, this);
    this._resize = bind(this._resize, this);
    this.start = bind(this.start, this);
    this.hide = bind(this.hide, this);
    this.setBarSize = bind(this.setBarSize, this);
    this.init = bind(this.init, this);
    EffectBar.__super__.constructor.call(this, option);
    this._barColor = barColor || MY.conf.EFFECT_BAR_COLOR_0;
    this._bar;
    this._anmFrame = anmFrame || 70;
    this._offsetSpeed = 0;
    this._delayCnt = 0;
    this._offsetDelay = offsetDelay || 40;
    this._barPos = new Point();
    this._isStart = false;
  }

  EffectBar.prototype.init = function() {
    EffectBar.__super__.init.call(this);
    this._bar = this._makeDisplay();
    this.add(this._bar);
    this._bar.bgColor(this._barColor);
    this._bar.pivot("100% 0%");
    this._makeAnimation(1);
    return this.setBarSize(0, 0);
  };

  EffectBar.prototype.setBarSize = function(w, h) {
    var offsetDist;
    offsetDist = Math.abs(this._offsetDelay * this._offsetSpeed);
    offsetDist = 0;
    this._bar.size(w + 4, h);
    this._bar.x(-offsetDist);
    this._bar.render();
    this.size(w, this._bar.height());
    return this.render();
  };

  EffectBar.prototype.hide = function() {
    this.visible(false);
    return this.render();
  };

  EffectBar.prototype.start = function(delay, isAnimate) {
    var a;
    this._isStart = true;
    this._delayCnt = -delay || 0;
    this._barPos.reset();
    this.visible(true);
    this.render();
    this._bar.opacity(1);
    this._bar.scale(1, 1);
    this._bar.render();
    a = this._anm[0];
    a.set({
      scaleX: {
        from: 1,
        to: 0
      },
      ease: "inOutExpo",
      frame: this._anmFrame,
      delay: delay + this._offsetDelay,
      onComplete: (function(_this) {
        return function() {
          _this.visible(false);
          return _this.render();
        };
      })(this)
    });
    a.start();
    return this._update();
  };

  EffectBar.prototype._resize = function(w, h) {
    return EffectBar.__super__._resize.call(this, w, h);
  };

  EffectBar.prototype._update = function() {
    var a;
    EffectBar.__super__._update.call(this);
    if (this._isStart) {
      if (++this._delayCnt > 0) {
        this._barPos.x += this._offsetSpeed;
        this._bar.translate(this._barPos.x, this._barPos.y);
        a = this._anm[0];
        this._bar.scale(a.get("scaleX"), 1);
        return this._bar.render();
      }
    }
  };

  return EffectBar;

})(MyDisplay);

module.exports = EffectBar;


},{"../base/MyDisplay":16,"../libs/object/Point":37}],42:[function(require,module,exports){
var Animation, Loading, MyDisplay, ResponsiveImg, SvgLogo,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MyDisplay = require('../base/MyDisplay');

Animation = require('../libs/animation/Animation');

ResponsiveImg = require('./ResponsiveImg');

SvgLogo = require('./SvgLogo');

Loading = (function(superClass) {
  extend(Loading, superClass);

  function Loading() {
    this.dispose = bind(this.dispose, this);
    this._update = bind(this._update, this);
    this._resize = bind(this._resize, this);
    this._hideTtl = bind(this._hideTtl, this);
    this._eComplete = bind(this._eComplete, this);
    this._eProgress = bind(this._eProgress, this);
    this.init = bind(this.init, this);
    Loading.__super__.constructor.call(this);
    this._line;
    this._lineA = new Animation();
    this._ttl;
    this._ttlScale = 0.85;
    this._ttlA = new Animation();
    this._isTtlHide = false;
    this._startRate = MY.u.random(70, 90) * 0.01;
    this._rate = this._startRate;
    this._isLoaded = false;
    this.onComplete;
  }

  Loading.prototype.init = function() {
    Loading.__super__.init.call(this);
    this._line = this._makeDisplay();
    this.add(this._line);
    this._line.bgColor("#000000");
    this._line.pivot("0% 0%");
    this._line.ap.x = 0;
    this._ttl = new SvgLogo(250);
    this._ttl.init();
    this.add(this._ttl);
    this._ttlA.set({
      opacity: {
        from: 0,
        to: 1
      },
      frame: 20,
      delay: 2,
      onComplete: (function(_this) {
        return function() {
          MY.pre.onProgress = _this._eProgress;
          MY.pre.onComplete = _this._eComplete;
          return MY.delay.add(MY.pre.load, 120);
        };
      })(this)
    });
    this._ttlA.start();
    this._ttl.showLine(0, 120);
    this._ttl.showFill(90, 90);
    this._resize();
    return this._update();
  };

  Loading.prototype._eProgress = function(r) {
    return this._rate = MY.u.map(r, this._startRate, 1, 0, 1);
  };

  Loading.prototype._eComplete = function() {
    this._rate = 1;
    return this._isLoaded = true;
  };

  Loading.prototype._hideTtl = function() {
    if (this._isTtlHide) {
      return;
    }
    this._isTtlHide = true;
    this._ttlA.set({
      opacity: {
        from: this._ttlA.get("opacity"),
        to: 0
      },
      frame: 70,
      delay: 50,
      onComplete: (function(_this) {
        return function() {
          if (_this.onComplete != null) {
            return _this.onComplete();
          }
        };
      })(this)
    });
    this._ttlA.start();
    this._line.pivot("100% 0%");
    this._lineA.set({
      scaleX: {
        from: 1,
        to: -0.01
      },
      frame: 100,
      delay: 10,
      ease: "inOutExpo"
    });
    this._lineA.start();
    return this._update();
  };

  Loading.prototype._resize = function(w, h) {
    Loading.__super__._resize.call(this, w, h);
    this._line.size(this._sw, MY.f.getLOVal(4, 2));
    this._line.render();
    this._ttl._resize();
    this._ttl.xy(~~(this._sw * 0.5 - this._ttl.width() * 0.5), ~~(this._sh * 0.5 - this._ttl.height() * 0.5));
    return this._ttl.render();
  };

  Loading.prototype._update = function() {
    Loading.__super__._update.call(this);
    if ((this._line == null) || (this._ttl == null)) {
      return;
    }
    if (this._isTtlHide) {
      this._lineA.update();
      if (this._line == null) {
        return;
      }
      this._line.scale(this._lineA.get("scaleX"), 1);
    } else {
      this._line.ap.x += (this._rate - this._line.ap.x) * 0.1;
      this._line.scale(this._line.ap.x, 1);
    }
    this._line.render();
    this._ttlA.update();
    if (this._ttl != null) {
      this._ttlScale += 0.00035;
      this._ttlScale = Math.min(this._ttlScale, 1);
      this._ttl.opacity(this._ttlA.get("opacity"));
      this._ttl.scale(this._ttlScale, this._ttlScale);
      this._ttl.render();
    }
    if ((this._line != null) && this._rate === 1 && Math.abs(this._rate - this._line.ap.x) < 0.5 && this._isLoaded) {
      return this._hideTtl();
    }
  };

  Loading.prototype.dispose = function() {
    if (this._line != null) {
      this._line.dispose();
      this._line = null;
    }
    if (this._lineA != null) {
      this._lineA.dispose();
      this._lineA = null;
    }
    if (this._ttl != null) {
      this._ttl.dispose();
      this._ttl = null;
    }
    if (this._ttlA != null) {
      this._ttlA.dispose();
      this._ttlA = null;
    }
    this.onComplete = null;
    return Loading.__super__.dispose.call(this);
  };

  return Loading;

})(MyDisplay);

module.exports = Loading;


},{"../base/MyDisplay":16,"../libs/animation/Animation":26,"./ResponsiveImg":45,"./SvgLogo":50}],43:[function(require,module,exports){
var Animation, MyDisplay, NextBtn, ResponsiveImg,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MyDisplay = require('../base/MyDisplay');

Animation = require('../libs/animation/Animation');

ResponsiveImg = require('../parts/ResponsiveImg');

NextBtn = (function(superClass) {
  extend(NextBtn, superClass);

  function NextBtn(isNext) {
    this.dispose = bind(this.dispose, this);
    this._update = bind(this._update, this);
    this.resize = bind(this.resize, this);
    this._eClick = bind(this._eClick, this);
    this._eRollOut = bind(this._eRollOut, this);
    this._eRollOver = bind(this._eRollOver, this);
    this._makeResponsiveImg = bind(this._makeResponsiveImg, this);
    this.init = bind(this.init, this);
    NextBtn.__super__.constructor.call(this);
    this._isNext = isNext;
    this._arw;
    this._img;
    this._btn;
    this.onClick;
  }

  NextBtn.prototype.init = function() {
    NextBtn.__super__.init.call(this);
    this._arw = this._makeResponsiveImg(null, MY.f.makeRspsvImgSrc([MY.conf.IMG_PATH + "/parts/" + (this._isNext ? "nextarw" : "prevarw") + ".png", false], [MY.conf.IMG_PATH + "/parts/" + (this._isNext ? "nextarw" : "prevarw") + ".png", true]));
    this.add(this._arw);
    this._img = this._makeResponsiveImg(null, MY.f.makeRspsvImgSrc([MY.conf.IMG_PATH + "/parts/" + (this._isNext ? "nextpj" : "prevpj") + ".png", false], [MY.conf.IMG_PATH + "/parts/" + (this._isNext ? "nextpj" : "prevpj") + ".png", true]));
    this.add(this._img);
    this._btn = this._makeBtn(null, this._eClick, this._eRollOver, this._eRollOut);
    this.add(this._btn);
    this._makeAnimation(1);
    this.resize();
    return this._update();
  };

  NextBtn.prototype._makeResponsiveImg = function(id, imgs) {
    var d;
    d = new ResponsiveImg(imgs, {
      id: id
    });
    d.init();
    return d;
  };

  NextBtn.prototype._eRollOver = function() {
    var a;
    this.brightness(30);
    this.render();
    a = this._anm[0];
    a.set({
      r: {
        from: 0,
        to: 1
      },
      frame: 30,
      ease: "outExpo"
    });
    return a.start();
  };

  NextBtn.prototype._eRollOut = function() {
    var a;
    this.brightness(1);
    this.render();
    a = this._anm[0];
    a.set({
      r: {
        from: 1,
        to: 0
      },
      frame: 30,
      ease: "outExpo"
    });
    return a.start();
  };

  NextBtn.prototype._eClick = function() {
    if (this.onClick != null) {
      return this.onClick();
    }
  };

  NextBtn.prototype.resize = function(w, h) {
    this._resize(w, h);
    this._arw.update();
    this._img.update();
    if (this._isNext) {
      this._img.xy(0, 0);
      this._img.render();
      this._arw.xy(this._img.right() + MY.f.getLOVal(20, 10), ~~(this._img.height() * 0.5 - this._arw.height() * 0.5));
      this._arw.render();
      this.size(this._arw.right(), this._img.bottom());
      this.render();
    } else {
      this._arw.xy(0, ~~(this._img.height() * 0.5 - this._arw.height() * 0.5));
      this._arw.render();
      this._img.xy(this._arw.right() + MY.f.getLOVal(20, 10), 0);
      this._img.render();
      this.size(this._img.right(), this._img.bottom());
      this.render();
    }
    this._btn.size(this.width() * 1, this.height() * 3);
    this._btn.xy(~~(this.width() * 0.5 - this._btn.width() * 0.5), ~~(this.height() * 0.5 - this._btn.height() * 0.5));
    return this._btn.render();
  };

  NextBtn.prototype._update = function() {
    var dist;
    NextBtn.__super__._update.call(this);
    if (!MY.u.isFF()) {
      dist = this._anm[0].get("r") * 8;
      if (!this._isNext) {
        dist *= -1;
      }
      this._arw.translate(dist, 0);
      return this._arw.render();
    }
  };

  NextBtn.prototype.dispose = function() {
    return NextBtn.__super__.dispose.call(this);
  };

  return NextBtn;

})(MyDisplay);

module.exports = NextBtn;


},{"../base/MyDisplay":16,"../libs/animation/Animation":26,"../parts/ResponsiveImg":45}],44:[function(require,module,exports){
var DisplayTransform, ResponsiveDisplay,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

DisplayTransform = require('../libs/display/DisplayTransform');

ResponsiveDisplay = (function(superClass) {
  extend(ResponsiveDisplay, superClass);

  function ResponsiveDisplay(classList, option) {
    this.update = bind(this.update, this);
    this.init = bind(this.init, this);
    ResponsiveDisplay.__super__.constructor.call(this, option);
    this._classList = classList;
  }

  ResponsiveDisplay.prototype.init = function() {
    return ResponsiveDisplay.__super__.init.call(this);
  };

  ResponsiveDisplay.prototype.update = function() {
    var i, j, len, ref, type, val;
    type = MY.f.getLOType();
    ref = this._classList;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      val = ref[i];
      if (val != null) {
        this.elm().removeClass(val);
      }
    }
    this.elm().addClass(this._classList[type]);
    return this.text();
  };

  return ResponsiveDisplay;

})(DisplayTransform);

module.exports = ResponsiveDisplay;


},{"../libs/display/DisplayTransform":30}],45:[function(require,module,exports){
var DisplayImg, MyDisplay, ResponsiveImg,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MyDisplay = require('../base/MyDisplay');

DisplayImg = require('../libs/display/DisplayImg');

ResponsiveImg = (function(superClass) {
  extend(ResponsiveImg, superClass);

  function ResponsiveImg(src, option) {
    this.setImgWidth = bind(this.setImgWidth, this);
    this.update = bind(this.update, this);
    this.getNowImg = bind(this.getNowImg, this);
    this._makeImg = bind(this._makeImg, this);
    this.init = bind(this.init, this);
    if (option == null) {
      option = {};
    }
    option.resize = false;
    option.update = false;
    ResponsiveImg.__super__.constructor.call(this, option);
    this._srcList = src;
    this._img = [];
  }

  ResponsiveImg.prototype.init = function() {
    return ResponsiveImg.__super__.init.call(this);
  };

  ResponsiveImg.prototype._makeImg = function(type) {
    var img;
    img = new DisplayImg({
      src: this._srcList[type][0],
      retina: this._srcList[type][1]
    });
    img.onLoad = MY.resize.refresh;
    img.init();
    img.useTransform(false);
    this.add(img);
    return this._img[type] = img;
  };

  ResponsiveImg.prototype.getNowImg = function() {
    return this._img[MY.f.getLOType()];
  };

  ResponsiveImg.prototype.update = function() {
    var i, j, len, ref, results, type, val;
    type = MY.f.getLOType();
    if (this._img[type] == null) {
      this._makeImg(type);
    }
    ref = this._img;
    results = [];
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      val = ref[i];
      if (val != null) {
        val.visible(i === type);
        val.render();
        if (i === type) {
          this.size(val.width(), val.height());
          results.push(this.render());
        } else {
          results.push(void 0);
        }
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  ResponsiveImg.prototype.setImgWidth = function(w) {
    var imgH, imgW, nowImg, nowSize;
    nowImg = this.getNowImg();
    if (nowImg != null) {
      nowSize = nowImg.orgSize();
      imgW = w;
      imgH = ~~(nowSize.h * (imgW / nowSize.w));
      nowImg.size(imgW, imgH);
      nowImg.render();
      this.size(nowImg.width(), nowImg.height());
      return this.render();
    }
  };

  return ResponsiveImg;

})(MyDisplay);

module.exports = ResponsiveImg;


},{"../base/MyDisplay":16,"../libs/display/DisplayImg":29}],46:[function(require,module,exports){
var Animation, MyDisplay, ResponsiveImg, ScrollBtn,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MyDisplay = require('../base/MyDisplay');

Animation = require('../libs/animation/Animation');

ResponsiveImg = require('../parts/ResponsiveImg');

ScrollBtn = (function(superClass) {
  extend(ScrollBtn, superClass);

  function ScrollBtn(srcList) {
    this.dispose = bind(this.dispose, this);
    this._update = bind(this._update, this);
    this._resize = bind(this._resize, this);
    this._eClick = bind(this._eClick, this);
    this._eRollOut = bind(this._eRollOut, this);
    this._eRollOver = bind(this._eRollOver, this);
    this._makeResponsiveImg = bind(this._makeResponsiveImg, this);
    this.init = bind(this.init, this);
    ScrollBtn.__super__.constructor.call(this);
    this._srcList = srcList;
    this._arw;
    this._btn;
    this.onClick;
  }

  ScrollBtn.prototype.init = function() {
    ScrollBtn.__super__.init.call(this);
    this._arw = this._makeResponsiveImg(null, this._srcList);
    this.add(this._arw);
    this._btn = this._makeBtn(null, this._eClick, this._eRollOver, this._eRollOut);
    this.add(this._btn);
    this._makeAnimation(1);
    this._resize();
    return this._update();
  };

  ScrollBtn.prototype._makeResponsiveImg = function(id, imgs) {
    var d;
    d = new ResponsiveImg(imgs, {
      id: id
    });
    d.init();
    return d;
  };

  ScrollBtn.prototype._eRollOver = function() {
    var a;
    this.brightness(30);
    this.render();
    a = this._anm[0];
    a.set({
      r: {
        from: 0,
        to: 1
      },
      frame: 30,
      ease: "outExpo"
    });
    return a.start();
  };

  ScrollBtn.prototype._eRollOut = function() {
    var a;
    this.brightness(1);
    this.render();
    a = this._anm[0];
    a.set({
      r: {
        from: 1,
        to: 0
      },
      frame: 30,
      ease: "outExpo"
    });
    return a.start();
  };

  ScrollBtn.prototype._eClick = function() {
    if (this.onClick != null) {
      return this.onClick();
    }
  };

  ScrollBtn.prototype._resize = function(w, h) {
    ScrollBtn.__super__._resize.call(this, w, h);
    this._arw.update();
    this._arw.xy(0, 0);
    this._arw.render();
    this.size(this._arw.width(), this._arw.bottom());
    this.render();
    this._btn.size(this.width() * 1, this.height() * 1);
    this._btn.xy(~~(this.width() * 0.5 - this._btn.width() * 0.5), ~~(this.height() * 0.5 - this._btn.height() * 0.5));
    return this._btn.render();
  };

  ScrollBtn.prototype._update = function() {
    var y;
    ScrollBtn.__super__._update.call(this);
    y = this._anm[0].get("r") * 8;
    this._arw.translate(0, y);
    return this._arw.render();
  };

  ScrollBtn.prototype.dispose = function() {
    return ScrollBtn.__super__.dispose.call(this);
  };

  return ScrollBtn;

})(MyDisplay);

module.exports = ScrollBtn;


},{"../base/MyDisplay":16,"../libs/animation/Animation":26,"../parts/ResponsiveImg":45}],47:[function(require,module,exports){
var Animation, ScrollImgMgr,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Animation = require('../libs/animation/Animation');

ScrollImgMgr = (function() {
  function ScrollImgMgr(tg) {
    this._update = bind(this._update, this);
    this.updateScroll = bind(this.updateScroll, this);
    this.setTriggerVal = bind(this.setTriggerVal, this);
    this.reset = bind(this.reset, this);
    this.mgrScroll = bind(this.mgrScroll, this);
    this._init = bind(this._init, this);
    this._tg = tg;
    this._isMgr = false;
    this._triggerVal = 0;
    this._isShow = false;
    this._anm;
    this._init();
  }

  ScrollImgMgr.prototype._init = function() {
    this._anm = new Animation();
    return MY.update.add(this._update);
  };

  ScrollImgMgr.prototype.mgrScroll = function(isMgr) {
    this._isMgr = isMgr;
    if (!this._isMgr) {
      this._tg.opacity(1);
      this._tg.translate(0, 0);
      return this._tg.render();
    }
  };

  ScrollImgMgr.prototype.reset = function() {
    this._isShow = false;
    this._anm.reset();
    return this._update();
  };

  ScrollImgMgr.prototype.setTriggerVal = function(val) {
    return this._triggerVal = val;
  };

  ScrollImgMgr.prototype.updateScroll = function(top) {
    if (this._isMgr && top >= this._triggerVal && !this._isShow) {
      this._isShow = true;
      this._anm.set({
        y: {
          from: 30,
          to: 0
        },
        opacity: {
          from: 0,
          to: 1
        },
        frame: 20,
        ease: "inOutQuad"
      });
      this._anm.start();
      return this._update();
    }
  };

  ScrollImgMgr.prototype._update = function() {
    if (!this._isMgr) {
      return;
    }
    this._anm.update();
    this._tg.opacity(this._anm.get("opacity"));
    this._tg.translate(0, this._anm.get("y"));
    return this._tg.render();
  };

  return ScrollImgMgr;

})();

module.exports = ScrollImgMgr;


},{"../libs/animation/Animation":26}],48:[function(require,module,exports){
var DisplayImg, DisplayTransform, MyBtn, ResponsiveDisplay, SeeMoreBtn,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MyBtn = require('../base/MyBtn');

DisplayTransform = require('../libs/display/DisplayTransform');

ResponsiveDisplay = require('./ResponsiveDisplay');

DisplayImg = require('../libs/display/DisplayImg');

SeeMoreBtn = (function(superClass) {
  extend(SeeMoreBtn, superClass);

  function SeeMoreBtn(id) {
    this._resize = bind(this._resize, this);
    this._update = bind(this._update, this);
    this._eClick = bind(this._eClick, this);
    this._eRollOut = bind(this._eRollOut, this);
    this._eRollOver = bind(this._eRollOver, this);
    this.init = bind(this.init, this);
    SeeMoreBtn.__super__.constructor.call(this, {
      id: id
    });
    this._txt;
    this._icon;
    this._over;
    this._line;
    this._arw;
    this._bg;
  }

  SeeMoreBtn.prototype.init = function() {
    SeeMoreBtn.__super__.init.call(this);
    this._txt = this._makeDisplay();
    this.add(this._txt);
    this._txt.elm().addClass("moreBtn massFont bold noBr");
    this._txt.text("See More");
    this._line = this._makeDisplay();
    this.add(this._line);
    this._line.bgColor("#000000");
    this._line.size(150, 4);
    this._makeBtn();
    this.setBtnSize(150, 40);
    this._txt.xy(8, ~~(this.height() * 0.5 - this._txt.height() * 0.5));
    this._txt.render();
    this._line.xy(0, this.height() - this._line.height());
    this._line.render();
    this._arw = new DisplayImg({
      src: MY.conf.IMG_PATH + "/parts/seemoreArw0.png"
    });
    this._arw.onLoad = this._resize;
    this._arw.init();
    this.add(this._arw);
    this._bg = this._makeDisplay();
    this.unshift(this._bg);
    this._bg.bgColor("#000");
    this._bg.pivot("0% 0%");
    this._bg.xy(0, 0);
    this._bg.size(this.width(), this.height());
    this._bg.render();
    this._makeAnimation(1);
    return this._update();
  };

  SeeMoreBtn.prototype._eRollOver = function(e) {
    var a;
    SeeMoreBtn.__super__._eRollOver.call(this);
    a = this._anm[0];
    a.set({
      scale: {
        from: 0,
        to: 1
      },
      y: {
        from: this.height(),
        to: 0
      },
      offset: {
        from: 0,
        to: 1
      },
      frame: 40,
      ease: "outExpo"
    });
    a.start();
    this._txt.elm().css("color", "#FFF");
    return this._arw.changeImgSrc(MY.conf.IMG_PATH + "/parts/seemoreArw1.png");
  };

  SeeMoreBtn.prototype._eRollOut = function(e) {
    var a;
    SeeMoreBtn.__super__._eRollOut.call(this);
    a = this._anm[0];
    a.set({
      scale: {
        from: 1,
        to: 0
      },
      y: {
        from: 0,
        to: this.height()
      },
      offset: {
        from: 1,
        to: 0
      },
      frame: 40,
      ease: "outExpo"
    });
    a.start();
    this._txt.elm().css("color", "#000");
    return this._arw.changeImgSrc(MY.conf.IMG_PATH + "/parts/seemoreArw0.png");
  };

  SeeMoreBtn.prototype._eClick = function(e) {
    return SeeMoreBtn.__super__._eClick.call(this);
  };

  SeeMoreBtn.prototype._update = function() {
    var offset, scale;
    SeeMoreBtn.__super__._update.call(this);
    scale = this._anm[0].get("scale");
    this._bg.visible(scale !== 0);
    this._bg.scale(1, scale);
    this._bg.translate(0, this._anm[0].get("y"));
    this._bg.render();
    offset = this._anm[0].get("offset") * 10;
    this._txt.translate(offset, 0);
    this._txt.render();
    this._arw.translate(-offset, 0);
    return this._arw.render();
  };

  SeeMoreBtn.prototype._resize = function(w, h) {
    SeeMoreBtn.__super__._resize.call(this, w, h);
    this._arw.xy(this.width() - 10, ~~(this.height() * 0.5 - this._arw.height() * 0.5));
    return this._arw.render();
  };

  return SeeMoreBtn;

})(MyBtn);

module.exports = SeeMoreBtn;


},{"../base/MyBtn":15,"../libs/display/DisplayImg":29,"../libs/display/DisplayTransform":30,"./ResponsiveDisplay":44}],49:[function(require,module,exports){
var Btn, MyDisplay, ResponsiveImg, SimpleBtn,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MyDisplay = require('../base/MyDisplay');

Btn = require('./Btn');

ResponsiveImg = require('./ResponsiveImg');

SimpleBtn = (function(superClass) {
  extend(SimpleBtn, superClass);

  function SimpleBtn(imgs) {
    this._resize = bind(this._resize, this);
    this._eRollOut = bind(this._eRollOut, this);
    this._eRollOver = bind(this._eRollOver, this);
    this._eClick = bind(this._eClick, this);
    this.init = bind(this.init, this);
    SimpleBtn.__super__.constructor.call(this, {
      update: false
    });
    this._imgs = imgs;
    this._btnImg;
    this._btn;
    this.type = 0;
    this.onClick;
  }

  SimpleBtn.prototype.init = function() {
    SimpleBtn.__super__.init.call(this);
    this._btnImg = new ResponsiveImg(this._imgs);
    this._btnImg.init();
    this.add(this._btnImg);
    this._btn = this._makeBtn(null, this._eClick, this._eRollOver, this._eRollOut);
    this.add(this._btn);
    return this._resize();
  };

  SimpleBtn.prototype._eClick = function() {
    if (this.onClick != null) {
      return this.onClick();
    }
  };

  SimpleBtn.prototype._eRollOver = function() {
    if (this.type === 0) {
      this.brightness(90);
    } else {
      this._btnImg.opacity(0.5);
      this._btnImg.render();
    }
    return this.render();
  };

  SimpleBtn.prototype._eRollOut = function() {
    if (this.type === 0) {
      this.brightness(1);
    } else {
      this._btnImg.opacity(1);
      this._btnImg.render();
    }
    return this.render();
  };

  SimpleBtn.prototype._resize = function(w, h) {
    SimpleBtn.__super__._resize.call(this, w, h);
    this._btnImg.update();
    this._btn.size(this._btnImg.width(), this._btnImg.height());
    this._btn.render();
    this.size(this._btn.width(), this._btn.height());
    return this.render();
  };

  return SimpleBtn;

})(MyDisplay);

module.exports = SimpleBtn;


},{"../base/MyDisplay":16,"./Btn":40,"./ResponsiveImg":45}],50:[function(require,module,exports){
var Animation, MyDisplay, ResponsiveImg, SvgLogo,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MyDisplay = require('../base/MyDisplay');

Animation = require('../libs/animation/Animation');

ResponsiveImg = require('../parts/ResponsiveImg');

SvgLogo = (function(superClass) {
  extend(SvgLogo, superClass);

  function SvgLogo(defWidth, strokeWidth) {
    this.dispose = bind(this.dispose, this);
    this._update = bind(this._update, this);
    this._resize = bind(this._resize, this);
    this._setSvgSize = bind(this._setSvgSize, this);
    this.hideFill = bind(this.hideFill, this);
    this.showFill = bind(this.showFill, this);
    this.hideLine = bind(this.hideLine, this);
    this.showLine = bind(this.showLine, this);
    this.init = bind(this.init, this);
    SvgLogo.__super__.constructor.call(this);
    this._defWidth = defWidth || 124;
    this._strokeWidth = strokeWidth || 0.75;
    this._svg = '<svg version="1.1" id="&#x30EC;&#x30A4;&#x30E4;&#x30FC;_1"        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="124px" viewBox="0 0 362.72 147.033"        style="enable-background:new 0 0 362.72 147.033;" xml:space="preserve">        <g>            <g>                <g>                    <path class="path" d="M1.695,145.033l14.752-31.923c0.142-0.284,0.379-0.522,0.806-0.522h0.474c0.474,0,0.664,0.238,0.806,0.522l14.609,31.923                    c0.285,0.616-0.095,1.233-0.806,1.233H28.21c-0.711,0-1.043-0.285-1.375-0.949l-2.324-5.123H10.328l-2.324,5.123                    c-0.19,0.475-0.616,0.949-1.375,0.949H2.502C1.79,146.266,1.411,145.649,1.695,145.033z M22.186,134.929l-4.743-10.435h-0.142                    l-4.649,10.435H22.186z"/>                    <path class="path" d="M39.358,113.964c0-0.474,0.379-0.901,0.901-0.901h13.566c5.692,0,10.34,4.554,10.34,10.198                    c0,4.364-2.893,7.921-7.02,9.581l6.498,12.048c0.332,0.617,0,1.376-0.806,1.376h-4.981c-0.427,0-0.664-0.237-0.759-0.427                    l-6.309-12.57h-5.265v12.096c0,0.474-0.427,0.901-0.901,0.901h-4.364c-0.522,0-0.901-0.427-0.901-0.901V113.964z M53.304,128.193                    c2.514,0,4.696-2.182,4.696-4.838c0-2.514-2.182-4.601-4.696-4.601h-7.732v9.439H53.304z"/>                    <path class="path" d="M79.203,118.754h-7.257c-0.522,0-0.901-0.427-0.901-0.901v-3.89c0-0.474,0.379-0.901,0.901-0.901h20.728                    c0.522,0,0.901,0.427,0.901,0.901v3.89c0,0.474-0.379,0.901-0.901,0.901h-7.257v26.61c0,0.474-0.427,0.901-0.902,0.901h-4.411                    c-0.474,0-0.901-0.427-0.901-0.901V118.754z"/>                    <path class="path" d="M117.53,113.964c0-0.474,0.379-0.901,0.901-0.901h11.147c5.834,0,10.625,4.743,10.625,10.482                    c0,5.882-4.791,10.673-10.578,10.673h-5.929v11.147c0,0.474-0.427,0.901-0.902,0.901h-4.364c-0.522,0-0.901-0.427-0.901-0.901                    V113.964z M129.198,128.431c2.657,0,4.886-2.135,4.886-4.933c0-2.609-2.23-4.601-4.886-4.601h-5.502v9.534H129.198z"/>                    <path class="path" d="M148.456,113.964c0-0.474,0.379-0.901,0.901-0.901h13.566c5.692,0,10.341,4.554,10.341,10.198                    c0,4.364-2.894,7.921-7.02,9.581l6.498,12.048c0.332,0.617,0,1.376-0.807,1.376h-4.981c-0.426,0-0.664-0.237-0.759-0.427                    l-6.308-12.57h-5.265v12.096c0,0.474-0.427,0.901-0.902,0.901h-4.364c-0.522,0-0.901-0.427-0.901-0.901V113.964z                    M162.401,128.193c2.515,0,4.696-2.182,4.696-4.838c0-2.514-2.182-4.601-4.696-4.601h-7.731v9.439H162.401z"/>                    <path class="path" d="M197.551,112.588c9.486,0,17.076,7.637,17.076,17.123c0,9.487-7.589,17.028-17.076,17.028                    c-9.486,0-17.028-7.541-17.028-17.028C180.522,120.225,188.064,112.588,197.551,112.588z M197.551,140.574                    c5.976,0,10.91-4.886,10.91-10.863c0-5.976-4.933-10.957-10.91-10.957c-5.976,0-10.862,4.981-10.862,10.957                    C186.689,135.688,191.574,140.574,197.551,140.574z"/>                    <path class="path" d="M238.344,112.588c4.269,0,8.348,1.661,11.574,4.412c0.379,0.38,0.427,0.949,0.047,1.328l-2.941,3.084                    c-0.379,0.379-0.806,0.379-1.233,0c-2.04-1.803-4.554-2.752-7.162-2.752c-5.929,0-10.625,5.075-10.625,11.005                    c0,5.882,4.696,10.862,10.672,10.862c2.657,0,4.696-0.806,5.644-1.186v-4.032h-3.795c-0.522,0-0.901-0.38-0.901-0.854v-3.748                    c0-0.521,0.379-0.901,0.901-0.901h9.107c0.474,0,0.854,0.427,0.854,0.901v12.143c0,0.38-0.19,0.617-0.38,0.76                    c0,0-4.886,3.083-11.763,3.083c-9.439,0-17.028-7.494-17.028-16.981C221.315,120.225,228.904,112.588,238.344,112.588z"/>                    <path class="path" d="M259.358,113.964c0-0.474,0.379-0.901,0.901-0.901h13.566c5.692,0,10.341,4.554,10.341,10.198                    c0,4.364-2.894,7.921-7.02,9.581l6.498,12.048c0.332,0.617,0,1.376-0.807,1.376h-4.981c-0.427,0-0.664-0.237-0.759-0.427                    l-6.308-12.57h-5.265v12.096c0,0.474-0.427,0.901-0.902,0.901h-4.364c-0.522,0-0.901-0.427-0.901-0.901V113.964z                    M273.303,128.193c2.515,0,4.696-2.182,4.696-4.838c0-2.514-2.182-4.601-4.696-4.601h-7.731v9.439H273.303z"/>                    <path class="path" d="M288.529,145.033l14.752-31.923c0.142-0.284,0.38-0.522,0.806-0.522h0.475c0.474,0,0.664,0.238,0.806,0.522l14.61,31.923                    c0.285,0.616-0.095,1.233-0.806,1.233h-4.127c-0.712,0-1.044-0.285-1.376-0.949l-2.325-5.123h-14.182l-2.325,5.123                    c-0.19,0.475-0.616,0.949-1.376,0.949h-4.127C288.624,146.266,288.244,145.649,288.529,145.033z M309.02,134.929l-4.743-10.435                    h-0.142l-4.649,10.435H309.02z"/>                    <path class="path" d="M329.655,113.3c0.047-0.38,0.332-0.712,0.854-0.712h0.759c0.379,0,0.664,0.19,0.806,0.475l10.435,22.388                    c0.095,0,0.095,0,0.143,0l10.435-22.388c0.142-0.285,0.379-0.475,0.806-0.475h0.759c0.522,0,0.807,0.332,0.854,0.712                    l5.597,31.875c0.142,0.664-0.237,1.091-0.854,1.091h-4.317c-0.427,0-0.806-0.38-0.901-0.712l-2.799-17.976                    c-0.047,0-0.142,0-0.142,0l-8.301,18.641c-0.095,0.284-0.379,0.521-0.806,0.521h-0.854c-0.427,0-0.664-0.237-0.807-0.521                    l-8.395-18.641c0,0-0.095,0-0.142,0l-2.752,17.976c-0.047,0.332-0.427,0.712-0.854,0.712h-4.269                    c-0.617,0-0.996-0.427-0.901-1.091L329.655,113.3z"/>                </g>            </g>            <g>                <g>                    <g>                        <path class="path" d="M220.389,77.728l4.555-7.843c1.012-1.772,3.163-1.772,4.302-0.887c0.633,0.381,10.881,7.846,19.105,7.846                        c6.579,0,11.514-4.302,11.514-9.744c0-6.452-5.44-10.88-16.07-15.182c-11.893-4.809-23.787-12.4-23.787-27.33                        c0-11.261,8.351-24.293,28.469-24.293c12.905,0,22.775,6.581,25.305,8.478c1.265,0.759,1.645,2.908,0.759,4.174l-4.808,7.213                        c-1.013,1.517-2.911,2.53-4.428,1.517c-1.013-0.633-10.629-6.959-17.588-6.959c-7.212,0-11.135,4.809-11.135,8.856                        c0,5.948,4.682,9.996,14.93,14.172c12.274,4.935,26.444,12.274,26.444,28.596c0,13.033-11.261,25.052-29.101,25.052                        c-15.942,0-25.306-7.465-27.837-9.87C219.884,80.387,219.251,79.754,220.389,77.728z"/>                    </g>                </g>                <g>                    <g>                        <path class="path" d="M303.434,77.728l4.555-7.843c1.012-1.772,3.163-1.772,4.302-0.887c0.633,0.381,10.881,7.846,19.105,7.846                        c6.579,0,11.514-4.302,11.514-9.744c0-6.452-5.44-10.88-16.07-15.182c-11.893-4.809-23.787-12.4-23.787-27.33                        c0-11.261,8.351-24.293,28.469-24.293c12.905,0,22.775,6.581,25.305,8.478c1.265,0.759,1.645,2.908,0.759,4.174l-4.807,7.213                        c-1.013,1.517-2.911,2.53-4.428,1.517c-1.013-0.633-10.629-6.959-17.588-6.959c-7.212,0-11.135,4.809-11.135,8.856                        c0,5.948,4.681,9.996,14.93,14.172c12.274,4.935,26.444,12.274,26.444,28.596c0,13.033-11.261,25.052-29.101,25.052                        c-15.942,0-25.306-7.465-27.837-9.87C302.929,80.387,302.296,79.754,303.434,77.728z"/>                    </g>                </g>                <g>                    <path class="path" d="M16.143,0.963c-0.429-0.433-0.998-0.67-1.603-0.67c-0.004,0-0.009,0-0.012,0H3.865c-1.256,0-2.277,1.021-2.277,2.277                    v85.28c0,1.256,1.021,2.277,2.277,2.277h10.66c1.256,0,2.277-1.021,2.277-2.277V23.133l22.681,22.683                    c0.858,0.858,2.358,0.858,3.221,0l7.538-7.536c0.887-0.889,0.887-2.334,0-3.223L16.143,0.963z"/>                    <path class="path" d="M89.149,0.293c-0.607,0-1.179,0.237-1.609,0.667L76.21,12.289V87.85c0,1.256,1.023,2.277,2.279,2.277h10.659                    c1.256,0,2.279-1.021,2.279-2.277V2.571C91.426,1.476,90.555,0.293,89.149,0.293z"/>                </g>                <path class="path" d="M200.286,86.839l-38.97-85.154c-0.288-0.606-0.941-1.391-2.151-1.391c0,0-0.356,0-1.645,0                c-1.383,0-1.961,1.009-2.151,1.391l-38.97,85.154c-0.76,1.646,0.252,3.289,2.151,3.289h11.007c1.898,0,2.784-0.759,3.67-2.53                l6.2-13.665c0,0,18.301,0,19.747,0c1.626,0,2.703-1.68,2.079-3.115l-4.058-8.97c-0.689-1.413-1.985-1.958-3.041-1.958                c-0.006,0-8.527,0-8.527,0l12.719-27.837l25.114,55.545c0.886,1.772,1.772,2.53,3.67,2.53h11.007                C200.034,90.128,201.046,88.485,200.286,86.839z"/>            </g>        </g>    </svg>';
    this._svgTg;
    this._pathTg;
    this._ease = "inOutQuad";
  }

  SvgLogo.prototype.init = function() {
    SvgLogo.__super__.init.call(this);
    this.elm().html(this._svg);
    this._svgTg = $("#" + this._id + " svg");
    this._pathTg = $("#" + this._id + " .path");
    this._makeAnimation(2);
    this._resize();
    return this._update();
  };

  SvgLogo.prototype.showLine = function(delay, frame, isAnimate) {
    var a;
    delay = delay || 0;
    frame = frame || 400;
    if (isAnimate == null) {
      isAnimate = true;
    }
    a = this._anm[0];
    a.set({
      r: {
        from: 1,
        to: 0
      },
      frame: frame,
      delay: delay,
      ease: this._ease
    });
    a.start();
    if (!isAnimate) {
      a.finish();
    }
    return this._update();
  };

  SvgLogo.prototype.hideLine = function(delay, frame, isAnimate) {
    var a;
    delay = delay || 0;
    frame = frame || 400;
    if (isAnimate == null) {
      isAnimate = true;
    }
    a = this._anm[0];
    a.set({
      r: {
        from: 0,
        to: 1
      },
      frame: frame,
      delay: delay,
      ease: this._ease
    });
    a.start();
    if (!isAnimate) {
      a.finish();
    }
    return this._update();
  };

  SvgLogo.prototype.showFill = function(delay, frame, isAnimate) {
    var a;
    delay = delay || 0;
    frame = frame || 400;
    if (isAnimate == null) {
      isAnimate = true;
    }
    a = this._anm[1];
    a.set({
      r: {
        from: 1,
        to: 0
      },
      frame: frame,
      delay: delay,
      ease: this._ease
    });
    a.start();
    if (!isAnimate) {
      a.finish();
    }
    return this._update();
  };

  SvgLogo.prototype.hideFill = function(delay, frame, isAnimate) {
    var a;
    delay = delay || 0;
    frame = frame || 400;
    if (isAnimate == null) {
      isAnimate = true;
    }
    a = this._anm[1];
    a.set({
      r: {
        from: 0,
        to: 1
      },
      frame: frame,
      delay: delay,
      ease: this._ease
    });
    a.start();
    if (!isAnimate) {
      a.finish();
    }
    return this._update();
  };

  SvgLogo.prototype._setSvgSize = function() {
    this._svgTg.attr("width", MY.f.getLOVal(this._defWidth, this._defWidth * 0.5));
    this.size(this._svgTg.width(), this._svgTg.height());
    return this.render();
  };

  SvgLogo.prototype._resize = function(w, h) {
    SvgLogo.__super__._resize.call(this, w, h);
    return this._setSvgSize();
  };

  SvgLogo.prototype._update = function() {
    var color, dash, dist, hex;
    SvgLogo.__super__._update.call(this);
    if (this._anm != null) {
      color = this._anm[1].get("r") * 255;
      hex = MY.u.getHexColor(color, color, color);
      dist = 400;
      dash = this._anm[0].get("r") * dist;
      return this._pathTg.css({
        stroke: "#000",
        fill: hex,
        "stroke-width": this._strokeWidth,
        "stroke-dasharray": dist,
        "stroke-dashoffset": dash
      });
    }
  };

  SvgLogo.prototype.dispose = function() {
    this._svgTg = null;
    this._pathTg = null;
    return SvgLogo.__super__.dispose.call(this);
  };

  return SvgLogo;

})(MyDisplay);

module.exports = SvgLogo;


},{"../base/MyDisplay":16,"../libs/animation/Animation":26,"../parts/ResponsiveImg":45}],51:[function(require,module,exports){
var Animation, MyDisplay, ResponsiveImg, ToTopBtn,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MyDisplay = require('../base/MyDisplay');

Animation = require('../libs/animation/Animation');

ResponsiveImg = require('../parts/ResponsiveImg');

ToTopBtn = (function(superClass) {
  extend(ToTopBtn, superClass);

  function ToTopBtn() {
    this.dispose = bind(this.dispose, this);
    this._update = bind(this._update, this);
    this._resize = bind(this._resize, this);
    this._eClick = bind(this._eClick, this);
    this._eRollOut = bind(this._eRollOut, this);
    this._eRollOver = bind(this._eRollOver, this);
    this._makeResponsiveImg = bind(this._makeResponsiveImg, this);
    this.init = bind(this.init, this);
    ToTopBtn.__super__.constructor.call(this);
    this._arw;
    this._img;
    this._btn;
    this.onClick;
  }

  ToTopBtn.prototype.init = function() {
    ToTopBtn.__super__.init.call(this);
    this._arw = this._makeResponsiveImg(null, MY.f.makeRspsvImgSrc([MY.conf.IMG_PATH + "/parts/toTop1.png", false], [MY.conf.IMG_PATH + "/parts/toTop1.png", true]));
    this.add(this._arw);
    this._img = this._makeResponsiveImg(null, MY.f.makeRspsvImgSrc([MY.conf.IMG_PATH + "/parts/toTop0.png", false], [MY.conf.IMG_PATH + "/parts/toTop0.png", true]));
    this.add(this._img);
    this._btn = this._makeBtn(null, this._eClick, this._eRollOver, this._eRollOut);
    this.add(this._btn);
    this._makeAnimation(1);
    this._resize();
    return this._update();
  };

  ToTopBtn.prototype._makeResponsiveImg = function(id, imgs) {
    var d;
    d = new ResponsiveImg(imgs, {
      id: id
    });
    d.init();
    return d;
  };

  ToTopBtn.prototype._eRollOver = function() {
    var a;
    this.brightness(30);
    this.render();
    a = this._anm[0];
    a.set({
      r: {
        from: 0,
        to: 1
      },
      frame: 30,
      ease: "outExpo"
    });
    return a.start();
  };

  ToTopBtn.prototype._eRollOut = function() {
    var a;
    this.brightness(1);
    this.render();
    a = this._anm[0];
    a.set({
      r: {
        from: 1,
        to: 0
      },
      frame: 30,
      ease: "outExpo"
    });
    return a.start();
  };

  ToTopBtn.prototype._eClick = function() {
    if (this.onClick != null) {
      this.onClick();
    }
    return MY.scroller.scroll(0, 0, null, true);
  };

  ToTopBtn.prototype._resize = function(w, h) {
    ToTopBtn.__super__._resize.call(this, w, h);
    this._arw.update();
    this._img.update();
    this._arw.xy(0, 0);
    this._arw.render();
    this._img.xy(0, this._arw.bottom());
    this._img.render();
    this.size(this._img.width(), this._img.bottom());
    this.render();
    this._btn.size(this.width() * 1.5, this.height() * 1.5);
    this._btn.xy(~~(this.width() * 0.5 - this._btn.width() * 0.5), ~~(this.height() * 0.5 - this._btn.height() * 0.5));
    return this._btn.render();
  };

  ToTopBtn.prototype._update = function() {
    var y;
    ToTopBtn.__super__._update.call(this);
    y = this._anm[0].get("r") * -8;
    this._arw.translate(0, y);
    return this._arw.render();
  };

  ToTopBtn.prototype.dispose = function() {
    return ToTopBtn.__super__.dispose.call(this);
  };

  return ToTopBtn;

})(MyDisplay);

module.exports = ToTopBtn;


},{"../base/MyDisplay":16,"../libs/animation/Animation":26,"../parts/ResponsiveImg":45}],52:[function(require,module,exports){
var AniParam, EffectBar, MyDisplay, Photo, PhotoParts,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MyDisplay = require('../base/MyDisplay');

AniParam = require('../base/AniParam');

PhotoParts = require('./PhotoParts');

EffectBar = require('../parts/EffectBar');

Photo = (function(superClass) {
  extend(Photo, superClass);

  function Photo() {
    this._update = bind(this._update, this);
    this.setOffset = bind(this.setOffset, this);
    this._setArea = bind(this._setArea, this);
    this._resize = bind(this._resize, this);
    this._setPosition = bind(this._setPosition, this);
    this.hide = bind(this.hide, this);
    this.show = bind(this.show, this);
    this._setEffectBar = bind(this._setEffectBar, this);
    this._getPjDetailScale = bind(this._getPjDetailScale, this);
    this._resetParts = bind(this._resetParts, this);
    this.resetParts = bind(this.resetParts, this);
    this.setDetailParts = bind(this.setDetailParts, this);
    this.setType = bind(this.setType, this);
    this._setPartsPosition = bind(this._setPartsPosition, this);
    this.selectImg = bind(this.selectImg, this);
    this.changeTopImg = bind(this.changeTopImg, this);
    this.init = bind(this.init, this);
    Photo.__super__.constructor.call(this, {
      id: "xPhoto"
    });
    this._type = -1;
    this._selectId = 0;
    this._isShow = false;
    this._partsCon;
    this._parts = [];
    this._effectBar;
    this._offset = new AniParam();
  }

  Photo.prototype.init = function() {
    var i, parts;
    Photo.__super__.init.call(this);
    this.ap.tEaseE = MY.conf.EASE_PHOTO;
    this._partsCon = this._makeDisplay();
    this.add(this._partsCon);
    i = 0;
    while (i < MY.f.getConNum()) {
      parts = new PhotoParts(i);
      parts.init();
      this._partsCon.unshift(parts);
      this._parts.push(parts);
      i++;
    }
    this._effectBar = new EffectBar(null, MY.conf.EFFECT_BAR_COLOR_1);
    this._effectBar.init();
    this.add(this._effectBar);
    this._effectBar.opacity(1);
    this._resize();
    return this.hide(false);
  };

  Photo.prototype.changeTopImg = function(imgId, isAnimate) {
    if (isAnimate == null) {
      isAnimate = true;
    }
    return this._parts[0].changeTopImg(imgId, isAnimate);
  };

  Photo.prototype.selectImg = function(imgId) {
    return this._selectId = imgId;
  };

  Photo.prototype._setPartsPosition = function(isResize) {
    var i, j, len, ref, results, val;
    if (isResize == null) {
      isResize = false;
    }
    ref = this._parts;
    results = [];
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      val = ref[i];
      if (isResize) {
        val._resize();
      }
      val.xy(0, (MY.conf.PJ_TOP_IMG_HEIGHT[this._lo] + MY.conf.PJ_TOP_IMG_MARGIN[this._lo]) * i);
      results.push(val.render());
    }
    return results;
  };

  Photo.prototype.setType = function(type, isAnimate) {
    var i, j, len, ref, val;
    if (isAnimate == null) {
      isAnimate = true;
    }
    this._type = type;
    if (!this._isShow) {
      this.show(false);
    }
    this._setPartsPosition();
    ref = this._parts;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      val = ref[i];
      val.setType(this._type, isAnimate);
      switch (this._type) {
        case MY.conf.TYPE_PHOTO_TOP:
          if (i === 0) {
            val.changeTopImg(0, isAnimate);
            val.show(60, isAnimate);
            this._resetParts(val, isAnimate);
          } else {
            val.hide(0, isAnimate);
          }
          break;
        case MY.conf.TYPE_PHOTO_PROJECT_TOP:
          val.changeTopImg(i, isAnimate);
          if (this._lo === MY.conf.LO_0) {
            val.show(60 + i * 30, isAnimate);
          } else {
            val.show(MY.conf.PARTS_SHOW_DELAY, isAnimate);
          }
          if (i === 0) {
            this._resetParts(val, isAnimate);
          }
          break;
        case MY.conf.TYPE_PHOTO_PROJECT_DETAIL:
          if (i === 0) {
            val.changeTopImg(this._selectId, isAnimate, MY.f.getLOVal(0, 0));
            val.show(40, isAnimate);
            val.scaleAnimation(this._getPjDetailScale(), true, MY.conf.DETAIL_EXPAND_DELAY);
            val.posYAnimation(-MY.conf.HEADER_HEIGHT[this._lo] * 0.5, true, MY.conf.DETAIL_EXPAND_DELAY);
          } else {
            val.hide(0, isAnimate);
          }
      }
    }
    this._setEffectBar();
    this._setPosition();
    this._setArea();
    return this._update();
  };

  Photo.prototype.setDetailParts = function(isAnimate) {
    var val;
    if (isAnimate == null) {
      isAnimate = true;
    }
    val = this._parts[0];
    val.scaleAnimation(this._getPjDetailScale(), isAnimate, MY.conf.DETAIL_EXPAND_DELAY);
    return val.posYAnimation(-MY.conf.HEADER_HEIGHT[this._lo] * 0.5, isAnimate, MY.conf.DETAIL_EXPAND_DELAY);
  };

  Photo.prototype.resetParts = function(callBack) {
    return this._resetParts(this._parts[0], true, callBack);
  };

  Photo.prototype._resetParts = function(val, isAnimate, callBack) {
    var e, f;
    if (isAnimate == null) {
      isAnimate = true;
    }
    f = MY.conf.PHOTO_RESET_F;
    e = MY.conf.PHOTO_RESET_E;
    val.scaleAnimation(1, isAnimate, 0, f, e);
    return val.posYAnimation(0, isAnimate, 0, f, e, callBack);
  };

  Photo.prototype._getPjDetailScale = function() {
    var nowH, tgH;
    nowH = this._sh - MY.conf.HEADER_HEIGHT[this._lo];
    tgH = this._sh;
    return tgH / nowH;
  };

  Photo.prototype._setEffectBar = function() {
    var h, w, x, y;
    w = 0;
    h = 0;
    x = 0;
    y = 0;
    switch (this._type) {
      case MY.conf.TYPE_PHOTO_TOP:
        w = this._sw - MY.conf.TOP_LEFT_IMG_MARGIN[this._lo];
        h = this._sh - MY.conf.HEADER_HEIGHT[this._lo];
        x = MY.conf.TOP_LEFT_IMG_MARGIN[this._lo];
        y = MY.conf.HEADER_HEIGHT[this._lo];
    }
    this._effectBar.xy(x, y);
    return this._effectBar.setBarSize(w, h);
  };

  Photo.prototype.show = function(isAnimate, delay) {
    delay = delay || 0;
    if (isAnimate == null) {
      isAnimate = true;
    }
    this._isShow = true;
    this.visible(true);
    this.ap.tx = 0;
    this.ap.resetE().delay(delay);
    this._effectBar._offsetDelay = 0;
    this._effectBar.start(delay + 0, true);
    if (!isAnimate) {
      this.ap.finish();
    }
    return this._update();
  };

  Photo.prototype.hide = function(isAnimate, delay) {
    delay = delay || 0;
    if (isAnimate == null) {
      isAnimate = true;
    }
    this._isShow = false;
    this.ap.tx = -this._sw;
    this.ap.resetE().delay(delay);
    this._effectBar.visible(false);
    this._effectBar.render();
    if (!isAnimate) {
      this.ap.finish();
    }
    return this._update();
  };

  Photo.prototype._setPosition = function() {
    if (this._type === MY.conf.TYPE_PHOTO_PROJECT_DETAIL && this._lo === MY.conf.LO_0) {
      return this.css().position = "fixed";
    } else {
      return this.css().position = "absolute";
    }
  };

  Photo.prototype._resize = function(w, h) {
    var parts;
    Photo.__super__._resize.call(this, w, h);
    this._setPartsPosition(true);
    this._partsCon.ap.update();
    this._partsCon.translate(0, MY.conf.HEADER_HEIGHT[this._lo]);
    this._partsCon.render();
    this._setPosition();
    this._setEffectBar();
    this._setArea();
    if (this._type === MY.conf.TYPE_PHOTO_PROJECT_DETAIL) {
      parts = this._parts[0];
      parts.scaleAnimation(this._getPjDetailScale(), false, MY.conf.DETAIL_EXPAND_DELAY);
      return parts.posYAnimation(-MY.conf.HEADER_HEIGHT[this._lo] * 0.5, false, MY.conf.DETAIL_EXPAND_DELAY);
    }
  };

  Photo.prototype._setArea = function() {
    switch (this._type) {
      case MY.conf.TYPE_PHOTO_TOP:
        this.mask(true);
        this.size(this._sw, this._sh);
        return this.render();
      case MY.conf.TYPE_PHOTO_PROJECT_TOP:
        this.mask(true);
        this.size(this._sw, MY.conf.HEADER_HEIGHT[this._lo] + this._parts[this._parts.length - 1].y() + MY.conf.PJ_TOP_IMG_HEIGHT[this._lo]);
        return this.render();
      case MY.conf.TYPE_PHOTO_PROJECT_DETAIL:
        this.mask(true);
        this.size(this._sw, this._sh);
        return this.render();
    }
  };

  Photo.prototype.setOffset = function(x, y, isAnimate) {
    if (isAnimate == null) {
      isAnimate = true;
    }
    this._offset.tx = x;
    this._offset.ty = y;
    if (!isAnimate) {
      this._offset.finish();
      return this._update();
    }
  };

  Photo.prototype._update = function() {
    Photo.__super__._update.call(this);
    this._offset.update();
    this.ap.update();
    this.translate(this.ap.x, this.ap.y + this._offset.y);
    if (!this._isShow && this.ap.isFinish()) {
      this.visible(false);
    }
    return this.render();
  };

  return Photo;

})(MyDisplay);

module.exports = Photo;


},{"../base/AniParam":14,"../base/MyDisplay":16,"../parts/EffectBar":41,"./PhotoParts":54}],53:[function(require,module,exports){
var MyDisplay, PhotoImg, ResponsiveImg,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MyDisplay = require('../base/MyDisplay');

ResponsiveImg = require('../parts/ResponsiveImg');

PhotoImg = (function(superClass) {
  extend(PhotoImg, superClass);

  function PhotoImg(imgId) {
    this._update = bind(this._update, this);
    this.resize = bind(this.resize, this);
    this.init = bind(this.init, this);
    PhotoImg.__super__.constructor.call(this, {
      resize: false
    });
    this._imgId = imgId;
    this._img;
    this.sp = {
      x: 0,
      baseX: 0
    };
  }

  PhotoImg.prototype.init = function() {
    var src;
    PhotoImg.__super__.init.call(this);
    src = MY.conf.IMG_PATH + "/photo/" + String(this._imgId) + ".jpg";
    this._img = new ResponsiveImg(MY.f.makeRspsvImgSrc([src, false], [src, true]));
    this._img.init();
    this.add(this._img);
    this.mask(true);
    this.render();
    return this._resize();
  };

  PhotoImg.prototype.resize = function(w, h) {
    var baseW, img, imgH, imgSize, imgW;
    this._resize(w, h);
    this._img.update();
    baseW = this._sw + MY.conf.TOP_SLIDE_DIST[this._lo];
    img = this._img.getNowImg();
    imgSize = img.orgSize();
    imgW = baseW;
    imgH = ~~(imgSize.h * (imgW / imgSize.w));
    if (imgH < this._sh) {
      imgH = this._sh;
      imgW = ~~(imgSize.w * (imgH / imgSize.h));
    }
    img.size(imgW, imgH);
    img.render();
    this.size(baseW, this._sh);
    this.render();
    this._img.xy(~~(this.width() * 0.5 - imgW * 0.5), ~~(this.height() * 0.5 - imgH * 0.5));
    return this._img.render();
  };

  PhotoImg.prototype._update = function() {
    return PhotoImg.__super__._update.call(this);
  };

  return PhotoImg;

})(MyDisplay);

module.exports = PhotoImg;


},{"../base/MyDisplay":16,"../parts/ResponsiveImg":45}],54:[function(require,module,exports){
var AniParam, MyDisplay, PhotoImg, PhotoParts,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MyDisplay = require('../base/MyDisplay');

AniParam = require('../base/AniParam');

PhotoImg = require('./PhotoImg');

PhotoParts = (function(superClass) {
  extend(PhotoParts, superClass);

  function PhotoParts(key) {
    this._update = bind(this._update, this);
    this._setBtnSize = bind(this._setBtnSize, this);
    this._resize = bind(this._resize, this);
    this._setRepeatImg = bind(this._setRepeatImg, this);
    this._setNextImg = bind(this._setNextImg, this);
    this._setTopImg = bind(this._setTopImg, this);
    this.changeTopImg = bind(this.changeTopImg, this);
    this._setLeftParts = bind(this._setLeftParts, this);
    this._setPartsHeight = bind(this._setPartsHeight, this);
    this.setType = bind(this.setType, this);
    this.hide = bind(this.hide, this);
    this.show = bind(this.show, this);
    this.posYAnimation = bind(this.posYAnimation, this);
    this.scaleAnimation = bind(this.scaleAnimation, this);
    this._isButton = bind(this._isButton, this);
    this._eRollOutAll = bind(this._eRollOutAll, this);
    this._eRollOverAll = bind(this._eRollOverAll, this);
    this._eClickAll = bind(this._eClickAll, this);
    this.init = bind(this.init, this);
    PhotoParts.__super__.constructor.call(this);
    this._type = -1;
    this._key = key;
    this._topImgId = 0;
    this._imgCon;
    this._imgs = [];
    this._left;
    this._hoverCover;
    this._btn;
    this._nowSlideDist = 0;
    this._sizeAP = new AniParam();
    this._posAP = new AniParam();
    this._isShow = false;
  }

  PhotoParts.prototype.init = function() {
    var i, img, num;
    PhotoParts.__super__.init.call(this);
    this._imgCon = this._makeDisplay();
    this.add(this._imgCon);
    i = 0;
    num = MY.f.getConNum();
    while (i < num) {
      img = new PhotoImg(num - (1 + i));
      img.init();
      this._imgCon.add(img);
      this._imgs.push(img);
      img.ap.tEaseE = MY.conf.EASE_PHOTO;
      i++;
    }
    this._hoverCover = this._makeDisplay();
    this.add(this._hoverCover);
    this._hoverCover.bgColor("#000");
    this._left = this._makeDisplay();
    this.add(this._left);
    this._left.bgColor("#FFFFFF");
    this._btn = this._makeBtn(null, this._eClickAll, this._eRollOverAll, this._eRollOutAll);
    this.add(this._btn);
    this._makeAnimation(3);
    this.hide(0, false);
    this.mask(true);
    return this._resize();
  };

  PhotoParts.prototype._eClickAll = function() {
    if (!this._isButton()) {
      return;
    }
    if (this._type === MY.conf.TYPE_PHOTO_PROJECT_TOP) {
      MY.scroller.scroll(0, 0, (function(_this) {
        return function() {
          return MY.c.setPjDetail(_this._key, true);
        };
      })(this));
    }
    if (this._type === MY.conf.TYPE_PHOTO_TOP) {
      return MY.c.setPjDetail(this._topImgId, true);
    }
  };

  PhotoParts.prototype._eRollOverAll = function() {
    var a, s;
    if (this._type !== MY.conf.TYPE_PHOTO_PROJECT_TOP || !this._isButton()) {
      return;
    }
    s = 0.975;
    this.scaleAnimation(s, true, 0, 60, "outExpo");
    a = this._anm[2];
    a.set({
      opacity: {
        from: 0,
        to: 0.05
      },
      frame: 10,
      ease: "outExpo"
    });
    a.start();
    return this._update();
  };

  PhotoParts.prototype._eRollOutAll = function() {
    var a;
    if (this._type !== MY.conf.TYPE_PHOTO_PROJECT_TOP || !this._isButton()) {
      return;
    }
    this.scaleAnimation(1, true, 0, 20, "outQuad");
    a = this._anm[2];
    a.set({
      opacity: {
        from: 0.05,
        to: 0
      },
      frame: 10,
      ease: "outExpo"
    });
    a.start();
    return this._update();
  };

  PhotoParts.prototype._isButton = function() {
    if (!this._sizeAP.isFinish() || !this._posAP.isFinish()) {
      return false;
    } else {
      return true;
    }
  };

  PhotoParts.prototype.scaleAnimation = function(scale, isAnimate, delay, frame, ease) {
    var a, nowScale;
    if (isAnimate == null) {
      isAnimate = true;
    }
    delay = delay || 0;
    frame = frame || MY.conf.DETAIL_EXPAND_FRAME;
    ease = ease || MY.conf.DETAIL_EXPAND_EASE;
    a = this._anm[0];
    nowScale = a.get("scale");
    if (nowScale === 0) {
      nowScale = 1;
    }
    a.set({
      scale: {
        from: nowScale,
        to: scale
      },
      frame: frame,
      ease: ease,
      delay: delay
    });
    a.start();
    if (!isAnimate) {
      a.finish();
    }
    return this._update();
  };

  PhotoParts.prototype.posYAnimation = function(y, isAnimate, delay, frame, ease, callBack) {
    var a, nowY;
    if (isAnimate == null) {
      isAnimate = true;
    }
    delay = delay || 0;
    frame = frame || MY.conf.DETAIL_EXPAND_FRAME;
    ease = ease || MY.conf.DETAIL_EXPAND_EASE;
    a = this._anm[1];
    nowY = a.get("y");
    a.set({
      y: {
        from: nowY,
        to: y
      },
      frame: frame,
      ease: ease,
      delay: delay,
      onComplete: callBack
    });
    a.start();
    if (nowY === y) {
      a.finish();
    }
    if (!isAnimate) {
      a.finish();
    }
    return this._update();
  };

  PhotoParts.prototype.show = function(delay, isAnimate) {
    delay = delay || 0;
    if (isAnimate == null) {
      isAnimate = true;
    }
    this._isShow = true;
    this.visible(true);
    this._setPartsHeight();
    this._sizeAP.tx = this._sw;
    this._sizeAP.delay(delay).resetE();
    if (this._lo === MY.conf.LO_1) {
      this._sizeAP.finish();
    }
    this._posAP.tx = 0;
    this._posAP.delay(delay).resetE();
    if (!isAnimate) {
      this._sizeAP.finish();
      this._posAP.finish();
    }
    return this._update();
  };

  PhotoParts.prototype.hide = function(delay, isAnimate) {
    delay = delay || 0;
    if (isAnimate == null) {
      isAnimate = true;
    }
    this._isShow = false;
    this._sizeAP.tx = 0;
    this._sizeAP.delay(delay).resetE();
    if (this._lo === MY.conf.LO_1) {
      this._sizeAP.finish();
    }
    this._posAP.tx = this._sw;
    this._posAP.delay(delay).resetE();
    if (!isAnimate) {
      this._sizeAP.finish();
      this._posAP.finish();
    }
    return this._update();
  };

  PhotoParts.prototype.setType = function(type, isAnimate) {
    if (isAnimate == null) {
      isAnimate = true;
    }
    this._type = type;
    this._setPartsHeight();
    this._setLeftParts();
    if (isAnimate) {
      this._imgCon.ap.resetE();
      this._left.ap.resetE();
      this._sizeAP.resetE();
      this._posAP.resetE();
    } else {
      this._imgCon.ap.finish();
      this._left.ap.finish();
      this._sizeAP.finish();
      this._posAP.finish();
    }
    return this._setBtnSize();
  };

  PhotoParts.prototype._setPartsHeight = function(delay) {
    var maxH;
    delay = delay || 0;
    this._sizeAP.tx = this._sw;
    maxH = this._sh - MY.conf.HEADER_HEIGHT[this._lo];
    switch (this._type) {
      case MY.conf.TYPE_PHOTO_TOP:
        this._sizeAP.ty = maxH;
        break;
      case MY.conf.TYPE_PHOTO_PROJECT_TOP:
        this._sizeAP.ty = MY.conf.PJ_TOP_IMG_HEIGHT[this._lo];
        break;
      case MY.conf.TYPE_PHOTO_PROJECT_DETAIL:
        this._sizeAP.ty = maxH;
    }
    this._imgCon.ap.ty = ~~(maxH * 0.5 - this._imgCon.height() * 0.5);
    return this._sizeAP.delay(delay);
  };

  PhotoParts.prototype._setLeftParts = function() {
    switch (this._type) {
      case MY.conf.TYPE_PHOTO_TOP:
        this._left.ap.tx = MY.conf.TOP_LEFT_IMG_MARGIN[this._lo];
        return this._imgCon.ap.tx = this._left.ap.tx * 0.5;
      case MY.conf.TYPE_PHOTO_PROJECT_TOP:
        this._left.ap.tx = MY.conf.PJ_TOP_LEFT_IMG_MARGIN[this._lo];
        return this._imgCon.ap.tx = this._left.ap.tx * 0.5;
      case MY.conf.TYPE_PHOTO_PROJECT_DETAIL:
        this._imgCon.ap.tx = 0;
        return this._left.ap.tx = 0;
    }
  };

  PhotoParts.prototype.changeTopImg = function(imgId, isAnimate, delay) {
    if (this._type === MY.conf.TYPE_PHOTO_TOP) {
      this._imgs[this._topImgId].sp.x = 0;
    }
    if (imgId === this._topImgId) {
      return;
    }
    if (isAnimate == null) {
      isAnimate = true;
    }
    delay = delay || 0;
    this._setTopImg(imgId, isAnimate, delay);
    this._topImgId = imgId;
    if (this._type === MY.conf.TYPE_PHOTO_TOP) {
      return MY.c.getObj(MY.conf.P_TOP).setTopParts(this._topImgId, true);
    }
  };

  PhotoParts.prototype._setTopImg = function(imgId, isAnimate, delay) {
    var i, imgW, j, len, ref, val;
    delay = delay || 0;
    if (isAnimate == null) {
      isAnimate = true;
    }
    imgW = this._imgs[0].width();
    ref = this._imgs;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      val = ref[i];
      if (this._topImgId > imgId && i === this._topImgId) {
        val.ap.tx = (i * imgW) - (this._topImgId * imgW) - imgW;
      } else {
        val.ap.tx = (i * imgW) - (imgId * imgW);
      }
      if (i !== this._topImgId) {
        val.ap.x = val.ap.tx + val.width() + this._nowSlideDist;
      } else {
        val.ap.x += this._nowSlideDist;
      }
      val.ap.resetE().delay(delay);
      val.sp.x = 0;
      if (!isAnimate) {
        val.ap.finish();
      }
    }
    return this._update();
  };

  PhotoParts.prototype._setNextImg = function() {
    var nextId;
    nextId = this._topImgId + 1;
    if (nextId >= this._imgs.length) {
      nextId = 0;
    }
    return this.changeTopImg(nextId, true);
  };

  PhotoParts.prototype._setRepeatImg = function(imgId) {
    var img, next, nextImg, x;
    next = imgId - 1;
    if (next < 0) {
      next = this._imgs.length - 1;
    }
    nextImg = this._imgs[next];
    img = this._imgs[imgId];
    img.ap.x = img.ap.tx = img.sp.baseX = nextImg.sp.baseX + nextImg.width() + nextImg.sp.x;
    img.sp.x = 0;
    x = img.sp.baseX + img.sp.x;
    img.translate(x, 0);
    return img.render();
  };

  PhotoParts.prototype._resize = function(w, h) {
    var bfx, i, j, len, ref, val;
    PhotoParts.__super__._resize.call(this, w, h);
    bfx = 0;
    ref = this._imgs;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      val = ref[i];
      val.resize(this._sw, this._sh);
      val.sp.baseX = val.ap.x = val.ap.tx = bfx;
      bfx = bfx + val.width();
    }
    this._imgCon.size(bfx, val.height());
    this._imgCon.render();
    this._setTopImg(this._topImgId, false);
    this._left.size(MY.conf.TOP_LEFT_IMG_MARGIN[this._lo], this._sh + 2);
    this._left.xy(-this._left.width(), -2);
    this._left.render();
    this._setPartsHeight();
    this._setLeftParts();
    this._sizeAP.finish();
    this._posAP.finish();
    this._imgCon.ap.finish();
    this._left.ap.finish();
    this._setBtnSize();
    return this._update();
  };

  PhotoParts.prototype._setBtnSize = function() {
    this._anm[2].reset();
    if (this._type === MY.conf.TYPE_PHOTO_PROJECT_TOP || this._type === MY.conf.TYPE_PHOTO_TOP) {
      this._btn.visible(true);
      this._btn.size(this._sizeAP.tx, this._sizeAP.ty);
      this._hoverCover.visible(true);
      this._hoverCover.opacity(0);
      this._hoverCover.size(this._sizeAP.tx, this._sizeAP.ty);
    } else {
      this._btn.visible(false);
      this._hoverCover.visible(false);
    }
    this._btn.render();
    this._hoverCover.render();
    if (this._type === MY.conf.TYPE_PHOTO_TOP) {
      this._hoverCover.visible(false);
      return this._hoverCover.render();
    }
  };

  PhotoParts.prototype._update = function() {
    var i, j, len, ref, scale, val, x;
    PhotoParts.__super__._update.call(this);
    this._nowSlideDist = 0;
    ref = this._imgs;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      val = ref[i];
      val.ap.update();
      val.sp.baseX = val.ap.x;
      if (this._type === MY.conf.TYPE_PHOTO_TOP && this._key === 0 && !MY.c.getObj(MY.conf.P_ABOUT).isShow()) {
        val.sp.x -= MY.conf.TOP_SLIDE_SPEED;
      }
      if (this._type !== MY.conf.TYPE_PHOTO_TOP) {
        val.sp.x += (0 - val.sp.x) * 0.1;
      }
      x = val.sp.baseX + val.sp.x;
      val.translate(x, 0);
      val.render();
      if (i === this._topImgId) {
        this._nowSlideDist = val.sp.x;
      }
      if (x <= -val.width()) {
        this._setRepeatImg(i);
      }
    }
    if (this._key === 0 && this._type === MY.conf.TYPE_PHOTO_TOP && Math.abs(this._nowSlideDist) >= MY.conf.TOP_SLIDE_DIST[this._lo]) {
      this._setNextImg();
    }
    this._imgCon.ap.update();
    this._imgCon.translate(this._imgCon.ap.x, this._imgCon.ap.y);
    this._imgCon.render();
    this._left.ap.update();
    this._left.translate(this._left.ap.x, this._left.ap.y);
    this._left.render();
    if (this._hoverCover.isVisible()) {
      this._hoverCover.opacity(this._anm[2].get("opacity"));
      this._hoverCover.render();
    }
    this._sizeAP.update();
    this._posAP.update();
    scale = this._anm[0].get("scale");
    if (scale === 0) {
      scale = 1;
    }
    this.scale(scale, scale);
    this.translate(this._posAP.x, this._anm[1].get("y"));
    this.size(this._sizeAP.x, this._sizeAP.y);
    this.render();
    if (!this._isShow && this._sizeAP.isFinish()) {
      this.visible(false);
      return this.render();
    }
  };

  return PhotoParts;

})(MyDisplay);

module.exports = PhotoParts;


},{"../base/AniParam":14,"../base/MyDisplay":16,"./PhotoImg":53}],55:[function(require,module,exports){
var MyDisplay, PjTop, PjTopParts, ToTopBtn,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MyDisplay = require('../base/MyDisplay');

PjTopParts = require('./PjTopParts');

ToTopBtn = require('../parts/ToTopBtn');

PjTop = (function(superClass) {
  extend(PjTop, superClass);

  function PjTop() {
    this._update = bind(this._update, this);
    this._resize = bind(this._resize, this);
    this.show = bind(this.show, this);
    this.hide = bind(this.hide, this);
    this.init = bind(this.init, this);
    PjTop.__super__.constructor.call(this, {
      id: "xPjTop"
    });
    this._parts = [];
    this._topBtn;
    this._isShow = false;
  }

  PjTop.prototype.init = function() {
    var i, id, num, parts;
    PjTop.__super__.init.call(this);
    num = MY.f.getConNum();
    i = 0;
    while (i < num) {
      id = (num - 1) - i;
      parts = new PjTopParts(i, "xPjTopParts" + String(id));
      parts.init();
      parts.hide(false);
      this._parts.push(parts);
      i++;
    }
    this._topBtn = new ToTopBtn();
    this._topBtn.init();
    this.add(this._topBtn);
    this._resize();
    return this.hide(false);
  };

  PjTop.prototype.hide = function(isAnimate, delay) {
    var i, j, len, ref, val;
    ref = this._parts;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      val = ref[i];
      val.hide(isAnimate, delay);
    }
    this._isShow = false;
    this._topBtn.visible(false);
    this._topBtn.render();
    return this._resize();
  };

  PjTop.prototype.show = function(isAnimate, delay) {
    var i, j, len, ref, val;
    ref = this._parts;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      val = ref[i];
      val.show(isAnimate, delay);
    }
    this._isShow = true;
    this._topBtn.visible(true);
    this._topBtn.render();
    return this._resize();
  };

  PjTop.prototype._resize = function(w, h) {
    var i, j, len, ref, val;
    PjTop.__super__._resize.call(this, w, h);
    ref = this._parts;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      val = ref[i];
      val.resize(this._sw, this._sh);
      val.xy(MY.conf.PJ_TOP_LEFT_IMG_MARGIN[this._lo] - 1, MY.conf.HEADER_HEIGHT[this._lo] + (MY.conf.PJ_TOP_IMG_HEIGHT[this._lo] + MY.conf.PJ_TOP_IMG_MARGIN[this._lo]) * i);
      val.render();
    }
    this._topBtn._resize();
    this._topBtn.xy(~~(this._sw * 0.5 - this._topBtn.width() * 0.5), MY.conf.HEADER_HEIGHT[this._lo] + (MY.conf.PJ_TOP_IMG_HEIGHT[this._lo] + MY.conf.PJ_TOP_IMG_MARGIN[this._lo]) * this._parts.length + MY.f.getLOVal(10, -10));
    this._topBtn.render();
    this.width(1);
    if (this._isShow) {
      this.height(this._topBtn.bottom() + MY.f.getLOVal(60, 30));
    } else {
      this.height("auto");
    }
    return this.render();
  };

  PjTop.prototype._update = function() {
    return PjTop.__super__._update.call(this);
  };

  return PjTop;

})(MyDisplay);

module.exports = PjTop;


},{"../base/MyDisplay":16,"../parts/ToTopBtn":51,"./PjTopParts":56}],56:[function(require,module,exports){
var AniParam, DisplayTransform, EffectBar, MyDisplay, PjTopParts, ResponsiveDisplay, SeeMoreBtn,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MyDisplay = require('../base/MyDisplay');

AniParam = require('../base/AniParam');

DisplayTransform = require('../libs/display/DisplayTransform');

ResponsiveDisplay = require('../parts/ResponsiveDisplay');

SeeMoreBtn = require('../parts/SeeMoreBtn');

EffectBar = require('../parts/EffectBar');

PjTopParts = (function(superClass) {
  extend(PjTopParts, superClass);

  function PjTopParts(partsId, domId) {
    this._update = bind(this._update, this);
    this.resize = bind(this.resize, this);
    this._setAnimation = bind(this._setAnimation, this);
    this.show = bind(this.show, this);
    this.hide = bind(this.hide, this);
    this._updateEffectBarPos = bind(this._updateEffectBarPos, this);
    this._setEffectBarSize = bind(this._setEffectBarSize, this);
    this._makeEffectBar = bind(this._makeEffectBar, this);
    this._eClickMore = bind(this._eClickMore, this);
    this.init = bind(this.init, this);
    PjTopParts.__super__.constructor.call(this, {
      id: domId,
      resize: false
    });
    this._partsId = partsId;
    this._vol;
    this._volBtmLine;
    this._workTtl;
    this._ttl0;
    this._ttl1;
    this._subTtl;
    this._moreBtn;
    this._bg;
    this._effectBar = {};
    this._isShow = false;
  }

  PjTopParts.prototype.init = function() {
    PjTopParts.__super__.init.call(this);
    $("#" + this._id + " .pjTopVol").attr("id", this._id + "_0");
    $("#" + this._id + " .pjTopTtl0").attr("id", this._id + "_1");
    $("#" + this._id + " .pjTopTtl1").attr("id", this._id + "_2");
    $("#" + this._id + " .pjTopSubTtl").attr("id", this._id + "_3");
    $("#" + this._id + " .pjTopDetail").attr("id", this._id + "_4");
    $("#" + this._id + " .pjTopWorkTtl").attr("id", this._id + "_5");
    this._vol = this._makeResponsiveDisplay(this._id + "_0", MY.f.makeRspsvClass("pjTopVol_0", "pjTopVol_1"));
    this._volBtmLine = this._makeDisplay();
    this.add(this._volBtmLine);
    this._volBtmLine.bgColor("#000000");
    this._workTtl = this._makeResponsiveDisplay(this._id + "_5", MY.f.makeRspsvClass("pjTopWorkTtl_0", "pjTopWorkTtl_1"));
    this._ttl0 = this._makeResponsiveDisplay(this._id + "_1", MY.f.makeRspsvClass("pjTopTtl0_0", "pjTopTtl0_1"));
    this._ttl1 = this._makeResponsiveDisplay(this._id + "_2", MY.f.makeRspsvClass("pjTopTtl1_0", "pjTopTtl1_1"));
    this._subTtl = this._makeResponsiveDisplay(this._id + "_3", MY.f.makeRspsvClass("pjTopSubTtl1_0", "pjTopSubTtl1_1"));
    this._moreBtn = new SeeMoreBtn(this._id + "_4");
    this._moreBtn.init();
    this._moreBtn.onClick = this._eClickMore;
    this._bg = this._makeDisplay();
    this.unshift(this._bg);
    this._bg.bgColor("#FFFFFF");
    this._makeEffectBar();
    if (!MY.u.isSmt()) {
      this.mask(true);
    }
    return this.resize();
  };

  PjTopParts.prototype._eClickMore = function() {
    return MY.scroller.scroll(0, 0, (function(_this) {
      return function() {
        return MY.c.setPjDetail(_this._partsId, true);
      };
    })(this));
  };

  PjTopParts.prototype._makeEffectBar = function() {
    var arr, bar, i, j, len, results, val;
    arr = ["vol", "volBtmLine", "workTtl", "ttl0", "ttl1", "subTtl", "moreBtn"];
    results = [];
    for (i = j = 0, len = arr.length; j < len; i = ++j) {
      val = arr[i];
      bar = new EffectBar(null, null, 0, 60);
      bar.init();
      this.add(bar);
      results.push(this._effectBar[val] = bar);
    }
    return results;
  };

  PjTopParts.prototype._setEffectBarSize = function() {
    var display, key, ref, results, val;
    ref = this._effectBar;
    results = [];
    for (key in ref) {
      val = ref[key];
      display = this["_" + key];
      val.xy(display.x(), display.y());
      results.push(val.setBarSize(display.width(), display.height()));
    }
    return results;
  };

  PjTopParts.prototype._updateEffectBarPos = function() {
    var base, key, ref, results, val;
    ref = this._effectBar;
    results = [];
    for (key in ref) {
      val = ref[key];
      base = this["_" + key];
      val.translate(base.ap.x, base.ap.y);
      results.push(val.render());
    }
    return results;
  };

  PjTopParts.prototype.hide = function(isAnimate, delay) {
    var bgDelay;
    if (isAnimate == null) {
      isAnimate = true;
    }
    delay = delay || 0;
    if (this._lo === MY.conf.LO_1) {
      isAnimate = false;
    }
    this._isShow = false;
    this._setAnimation(0, -this.width() * 1.5, isAnimate, delay + 5, false);
    bgDelay = delay + 0;
    this._bg.ap.tx = -this._bg.width() - this._bg.x() - MY.conf.PJ_TOP_LEFT_IMG_MARGIN[this._lo];
    this._bg.ap.ty = 0;
    this._bg.ap.delay(bgDelay).resetE();
    if (!isAnimate) {
      this._bg.ap.finish();
    }
    return this._update();
  };

  PjTopParts.prototype.show = function(isAnimate, delay, isEffectBar) {
    var bgDelay;
    if (isAnimate == null) {
      isAnimate = true;
    }
    delay = delay || 0;
    this._isShow = true;
    this.visible(true);
    this.render();
    this.resize();
    this._setAnimation(-this._bg.width() - this._bg.x() - 4, 0, isAnimate, delay + MY.f.getLOVal(30, 0));
    bgDelay = delay + MY.f.getLOVal(0, 50);
    this._bg.ap.x = -this._bg.width() - MY.conf.PJ_TOP_LEFT_IMG_MARGIN[this._lo];
    this._bg.ap.y = 0;
    this._bg.ap.tx = 0;
    this._bg.ap.ty = 0;
    this._bg.ap.delay(bgDelay).resetE();
    if (!isAnimate) {
      this._bg.ap.finish();
    }
    return this._update();
  };

  PjTopParts.prototype._setAnimation = function(from, to, isAnimate, delay, isEffectBar) {
    var arr, bar, d, delay2, i, j, len, o, start, val;
    if (isAnimate == null) {
      isAnimate = true;
    }
    delay = delay || 0;
    if (isEffectBar == null) {
      isEffectBar = true;
    }
    arr = ["vol", "volBtmLine", "workTtl", "ttl0", "ttl1", "subTtl", "moreBtn"];
    if (this._lo === MY.conf.LO_1) {
      isEffectBar = false;
    }
    start = delay;
    d = MY.conf.STR_DELAY;
    d = 5;
    for (i = j = 0, len = arr.length; j < len; i = ++j) {
      val = arr[i];
      o = this["_" + val];
      delay2 = start + d * i;
      o.ap.delay(delay2).resetE();
      o.ap.x = from;
      o.ap.tx = to;
      if (!isAnimate) {
        o.ap.finish();
      }
      bar = this._effectBar[val];
      if (bar != null) {
        if (isEffectBar) {
          bar.start(delay2, isAnimate);
        } else {
          bar.hide();
        }
      }
    }
    return this._update();
  };

  PjTopParts.prototype.resize = function(w, h) {
    this._resize(w, h);
    this._vol.update();
    this._vol.xy(0, MY.f.getLOVal(30, 15));
    this._vol.render();
    this._volBtmLine.size(MY.f.getLOVal(14, 7), MY.f.getLOVal(2, 1));
    this._volBtmLine.xy(0, this._vol.bottom() + MY.f.getLOVal(6, 4));
    this._volBtmLine.render();
    this._workTtl.update();
    this._workTtl.xy(0, this._volBtmLine.bottom() + MY.f.getLOVal(15, 7));
    this._workTtl.render();
    this._ttl0.update();
    this._ttl1.update();
    this._ttl0.xy(0, this._workTtl.bottom() + MY.f.getLOVal(3, 3));
    this._ttl0.render();
    this._ttl1.xy(0, this._ttl0.bottom() + MY.f.getLOVal(2, 3));
    this._ttl1.render();
    this._subTtl.update();
    this._subTtl.xy(0, this._ttl1.bottom() + MY.f.getLOVal(18, 9));
    this._subTtl.render();
    if (this._lo === MY.conf.LO_0) {
      this._moreBtn.visible(true);
      this._moreBtn.xy(0, this._subTtl.bottom() + 20);
      this._moreBtn.render();
    } else {
      this._moreBtn.visible(false);
      this._moreBtn.render();
    }
    this._bg.size(Math.max(this._ttl0.width(), this._subTtl.width()) + MY.f.getLOVal(50, 20), MY.f.getLOVal(this._moreBtn.bottom(), this._subTtl.bottom()));
    this._bg.xy(-1, 1);
    this._bg.render();
    this._setEffectBarSize();
    this.size(this._bg.width(), this._bg.height());
    this.translate(0, MY.conf.PJ_TOP_IMG_HEIGHT[this._lo] - this.height());
    return this.render();
  };

  PjTopParts.prototype._update = function() {
    PjTopParts.__super__._update.call(this);
    this._bg.ap.update();
    this._bg.translate(this._bg.ap.x, this._bg.ap.y);
    this._bg.render();
    this._vol.ap.update();
    this._volBtmLine.ap.update();
    this._workTtl.ap.update();
    this._ttl0.ap.update();
    this._ttl1.ap.update();
    this._subTtl.ap.update();
    this._moreBtn.ap.update();
    this._vol.translate(this._vol.ap.x, this._vol.ap.y);
    this._vol.render();
    this._volBtmLine.translate(this._volBtmLine.ap.x, this._volBtmLine.ap.y);
    this._volBtmLine.render();
    this._workTtl.translate(this._workTtl.ap.x, this._workTtl.ap.y);
    this._workTtl.render();
    this._ttl0.translate(this._ttl0.ap.x, this._ttl0.ap.y);
    this._ttl0.render();
    this._ttl1.translate(this._ttl1.ap.x, this._ttl1.ap.y);
    this._ttl1.render();
    this._subTtl.translate(this._subTtl.ap.x, this._subTtl.ap.y);
    this._subTtl.render();
    this._moreBtn.translate(this._moreBtn.ap.x, this._moreBtn.ap.y);
    this._moreBtn.render();
    this._updateEffectBarPos();
    if (!this._isShow && this._moreBtn.ap.isFinish()) {
      this.visible(false);
      return this.render();
    }
  };

  return PjTopParts;

})(MyDisplay);

module.exports = PjTopParts;


},{"../base/AniParam":14,"../base/MyDisplay":16,"../libs/display/DisplayTransform":30,"../parts/EffectBar":41,"../parts/ResponsiveDisplay":44,"../parts/SeeMoreBtn":48}],57:[function(require,module,exports){
var MyDisplay, PjDetail, PjDetailParts,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MyDisplay = require('../base/MyDisplay');

PjDetailParts = require('./PjDetailParts');

PjDetail = (function(superClass) {
  extend(PjDetail, superClass);

  function PjDetail() {
    this._update = bind(this._update, this);
    this._resize = bind(this._resize, this);
    this.show = bind(this.show, this);
    this.hide = bind(this.hide, this);
    this.setPartsId = bind(this.setPartsId, this);
    this.getNextId = bind(this.getNextId, this);
    this.init = bind(this.init, this);
    PjDetail.__super__.constructor.call(this, {
      id: "xPjDetail"
    });
    this._parts = [];
    this._nowPartsId = -1;
    this._isShow = false;
  }

  PjDetail.prototype.init = function() {
    var i, id, num, parts;
    PjDetail.__super__.init.call(this);
    num = MY.f.getConNum();
    i = 0;
    while (i < num) {
      id = (num - 1) - i;
      parts = new PjDetailParts(i, "xPjDetailParts" + String(id));
      parts.init();
      parts.hide(false);
      this._parts.push(parts);
      i++;
    }
    this._makeAnimation(1);
    this.hide(false);
    return this._resize();
  };

  PjDetail.prototype.getNextId = function() {
    var next;
    next = this._nowPartsId + 1;
    if (next >= this._parts.length) {
      next = 0;
    }
    return next;
  };

  PjDetail.prototype.setPartsId = function(partsId) {
    return this._nowPartsId = partsId;
  };

  PjDetail.prototype.hide = function(isAnimate, delay) {
    var a, i, j, len, ref, val;
    if (isAnimate == null) {
      isAnimate = true;
    }
    delay = delay || 0;
    if (this._lo === MY.conf.LO_1) {
      isAnimate = false;
    }
    this._isShow = false;
    MY.c.getObj(MY.conf.P_PHOTO).setOffset(0, 0);
    a = this._anm[0];
    a.set({
      y: {
        from: 0,
        to: MY.conf.PJDETAIL_OFFSET_Y[this._lo]
      },
      opacity: {
        from: 1,
        to: 1
      },
      ease: "outExpo",
      delay: delay,
      frame: 60,
      onComplete: (function(_this) {
        return function() {
          _this.visible(false);
          return _this.render();
        };
      })(this)
    });
    a.start();
    ref = this._parts;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      val = ref[i];
      if (this._nowPartsId !== i) {
        val.stopMovie();
      }
    }
    if (!isAnimate) {
      a.finish();
    }
    return this._update();
  };

  PjDetail.prototype.show = function(isAnimate, delay) {
    var a, i, j, len, ref, val;
    if (isAnimate == null) {
      isAnimate = true;
    }
    delay = delay || 0;
    if (MY.u.isSmt()) {
      delay += 60;
    }
    this._isShow = true;
    this.visible(true);
    this.render();
    a = this._anm[0];
    a.set({
      y: {
        from: MY.conf.PJDETAIL_OFFSET_Y[this._lo],
        to: 0
      },
      opacity: {
        from: 1,
        to: 1
      },
      ease: "outExpo",
      delay: delay,
      frame: 60,
      onComplete: (function(_this) {
        return function() {
          var i, j, len, ref, results, val;
          ref = _this._parts;
          results = [];
          for (i = j = 0, len = ref.length; j < len; i = ++j) {
            val = ref[i];
            if (_this._nowPartsId === i) {
              results.push(val.remakeMovie());
            } else {
              results.push(void 0);
            }
          }
          return results;
        };
      })(this)
    });
    a.start();
    if (!isAnimate) {
      a.finish();
    }
    ref = this._parts;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      val = ref[i];
      if (this._nowPartsId === i) {
        val.show();
      } else {
        val.hide();
      }
    }
    return this._update();
  };

  PjDetail.prototype._resize = function(w, h) {
    var i, j, len, ref, val;
    PjDetail.__super__._resize.call(this, w, h);
    ref = this._parts;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      val = ref[i];
      val.resize(this._sw, this._sh);
    }
    this.width(this._sw);
    this.y(this._sh - MY.conf.PJDETAIL_OFFSET_Y[this._lo]);
    return this.render();
  };

  PjDetail.prototype._update = function() {
    var a, s;
    PjDetail.__super__._update.call(this);
    a = this._anm[0];
    this.opacity(a.get("opacity"));
    this.translate(0, a.get("y"));
    this.render();
    if (this._isShow && this._lo === MY.conf.LO_0) {
      s = $(window).scrollTop();
      return MY.c.getObj(MY.conf.P_PHOTO).setOffset(0, MY.u.map(s, 0, -(this._sh + MY.conf.HEADER_HEIGHT[this._lo]), 0, this._parts[this._nowPartsId].height() * 0.1));
    }
  };

  return PjDetail;

})(MyDisplay);

module.exports = PjDetail;


},{"../base/MyDisplay":16,"./PjDetailParts":59}],58:[function(require,module,exports){
var MyDisplay, PjDetailMovie,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MyDisplay = require('../base/MyDisplay');

PjDetailMovie = (function(superClass) {
  extend(PjDetailMovie, superClass);

  function PjDetailMovie(yCode) {
    this.stop = bind(this.stop, this);
    this.remake = bind(this.remake, this);
    this.setSize = bind(this.setSize, this);
    this._addYTTag = bind(this._addYTTag, this);
    this.init = bind(this.init, this);
    PjDetailMovie.__super__.constructor.call(this, {
      resize: false,
      update: false
    });
    this._yCode = yCode;
  }

  PjDetailMovie.prototype.init = function() {
    PjDetailMovie.__super__.init.call(this);
    this._addYTTag();
    return this.mask(true);
  };

  PjDetailMovie.prototype._addYTTag = function(w, h) {
    var html;
    if (w == null) {
      w = h = 100;
    }
    this.elm().empty();
    h = ~~(9 * w / 16);
    html = MY.conf.PJ_YOUTUBE;
    html = html.replace("<width>", w);
    html = html.replace("<height>", h);
    html = html.replace("<ycode>", this._yCode);
    return this.elm().html(html);
  };

  PjDetailMovie.prototype.setSize = function(w) {
    var elm, h;
    if (this.width() === w) {
      return;
    }
    h = ~~(9 * w / 16);
    elm = $("#" + this._id + " iframe");
    elm.attr({
      width: w,
      height: h
    });
    this.size(w, h);
    return this.render();
  };

  PjDetailMovie.prototype.remake = function() {
    return this._addYTTag(this.width(), this.height());
  };

  PjDetailMovie.prototype.stop = function() {
    return this.elm().empty();
  };

  return PjDetailMovie;

})(MyDisplay);

module.exports = PjDetailMovie;


},{"../base/MyDisplay":16}],59:[function(require,module,exports){
var MyDisplay, NextBtn, PjDetailMovie, PjDetailParts, ResponsiveImg, ScrollImgMgr, SimpleBtn, ToTopBtn,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MyDisplay = require('../base/MyDisplay');

ResponsiveImg = require('../parts/ResponsiveImg');

ToTopBtn = require('../parts/ToTopBtn');

NextBtn = require('../parts/NextBtn');

ScrollImgMgr = require('../parts/ScrollImgMgr');

SimpleBtn = require('../parts/SimpleBtn');

PjDetailMovie = require('./PjDetailMovie');

PjDetailParts = (function(superClass) {
  extend(PjDetailParts, superClass);

  function PjDetailParts(partsId, domId) {
    this._update = bind(this._update, this);
    this.resize = bind(this.resize, this);
    this.show = bind(this.show, this);
    this.hide = bind(this.hide, this);
    this.stopMovie = bind(this.stopMovie, this);
    this.remakeMovie = bind(this.remakeMovie, this);
    this._makeLine = bind(this._makeLine, this);
    this._makePartsImg = bind(this._makePartsImg, this);
    this._makeParts = bind(this._makeParts, this);
    this._makeScrollImgs = bind(this._makeScrollImgs, this);
    this._ePrevDetail = bind(this._ePrevDetail, this);
    this._eNextDetail = bind(this._eNextDetail, this);
    this._eClickScrollBtn = bind(this._eClickScrollBtn, this);
    this.init = bind(this.init, this);
    PjDetailParts.__super__.constructor.call(this, {
      id: domId,
      resize: false
    });
    this._partsId = partsId;
    this._bg;
    this._line = [];
    this._vol;
    this._ttl0;
    this._ttl1;
    this._date;
    this._shareTxt;
    this._fb;
    this._tw;
    this._sBtn;
    this._txt0;
    this._txt1;
    this._txt2;
    this._videoThumb;
    this._sub0;
    this._sub1;
    this._prfImg;
    this._prfName;
    this._prfTxt;
    this._photo = [];
    this._lines = [];
    this._topBtn;
    this._nextBtn;
    this._prevBtn;
    this._scrollImgs = [];
  }

  PjDetailParts.prototype.init = function() {
    var i, imgPath, num, photo;
    PjDetailParts.__super__.init.call(this);
    imgPath = MY.conf.IMG_PATH + "/pjDetail/" + String(MY.f.getConNum() - 1 - this._partsId);
    this._bg = this._makeDisplay();
    this.unshift(this._bg);
    this._bg.bgColor("#FFF");
    this._vol = this._makeParts("Vol");
    this._ttl0 = this._makeParts("Ttl0");
    this._ttl1 = this._makeParts("Ttl1");
    this._date = this._makeParts("Date");
    this._shareTxt = this._makeResponsiveDisplay(null, MY.f.makeRspsvClass("pjDetailShareTxt_0", "pjDetailShareTxt_1"));
    this.add(this._shareTxt);
    this._shareTxt.elm().addClass("massFont noBr bold");
    this._shareTxt.text("SHARE");
    this._fb = this._makePartsImg("Fb", MY.f.makeRspsvImgSrc([MY.conf.IMG_PATH + "/pjDetail/fb0.png", false], [MY.conf.IMG_PATH + "/pjDetail/fb1.png", true]));
    this._tw = this._makePartsImg("Tw", MY.f.makeRspsvImgSrc([MY.conf.IMG_PATH + "/pjDetail/tw0.png", false], [MY.conf.IMG_PATH + "/pjDetail/tw1.png", true]));
    this._sBtn = new SimpleBtn(MY.f.makeRspsvImgSrc([MY.conf.IMG_PATH + "/parts/scroll.png", false], [MY.conf.IMG_PATH + "/parts/scroll.png", true]));
    this._sBtn.init();
    this.add(this._sBtn);
    this._sBtn.onClick = this._eClickScrollBtn;
    this._sBtn.type = 1;
    this._txt0 = this._makeParts("Txt0");
    this._txt1 = this._makeParts("Txt1");
    this._txt2 = this._makeParts("Txt2");
    this._videoThumb = new PjDetailMovie(this.elm().attr("data-ycode"));
    this._videoThumb.init();
    this.add(this._videoThumb);
    this._sub0 = this._makeParts("Sub0");
    this._sub1 = this._makeParts("Sub1");
    this._prfImg = this._makePartsImg("ProfImg", MY.f.makeRspsvImgSrc([imgPath + "/prof.jpg", false], [imgPath + "/prof.jpg", true]));
    this._prfName = this._makeParts("ProfName");
    this._prfTxt = this._makeParts("ProfTxt");
    i = 0;
    num = Number(this.elm().attr("data-photoNum"));
    while (i < num) {
      photo = new ResponsiveImg(MY.f.makeRspsvImgSrc([imgPath + "/photo" + String(i) + ".jpg", false], [imgPath + "/photo" + String(i) + ".jpg", true]));
      photo.init();
      this.add(photo);
      this._photo.push(photo);
      i++;
    }
    this._lines.push(this._makeLine("#000"));
    this._lines.push(this._makeLine("#cccccc"));
    this._lines.push(this._makeLine("#cccccc"));
    this._lines.push(this._makeLine());
    this._lines.push(this._makeLine());
    this._lines.push(this._makeLine("#000"));
    this._topBtn = new ToTopBtn();
    this._topBtn.init();
    this.add(this._topBtn);
    this._nextBtn = new NextBtn(true);
    this._nextBtn.init();
    this._nextBtn.onClick = this._eNextDetail;
    this.add(this._nextBtn);
    this._prevBtn = new NextBtn(false);
    this._prevBtn.init();
    this._prevBtn.onClick = this._ePrevDetail;
    this.add(this._prevBtn);
    if (this._partsId === 0) {
      this._nextBtn.visible(false);
      this._nextBtn.render();
    }
    if (this._partsId === MY.f.getConNum() - 1) {
      this._prevBtn.visible(false);
      this._prevBtn.render();
    }
    this._makeScrollImgs();
    return this.resize();
  };

  PjDetailParts.prototype._eClickScrollBtn = function() {
    var t;
    t = $(window).scrollTop() + this._sh - MY.conf.PJDETAIL_OFFSET_Y[this._lo];
    return MY.scroller.scroll(t, 0);
  };

  PjDetailParts.prototype._eNextDetail = function() {
    MY.scroller.scroll(0, 0, (function(_this) {
      return function() {
        return MY.delay.add(function() {
          var next;
          next = _this._partsId - 1;
          return MY.c.setPjDetail(next, true);
        }, 10);
      };
    })(this), true);
    return MY.c.getObj(MY.conf.P_PHOTO).setOffset(0, 0, false);
  };

  PjDetailParts.prototype._ePrevDetail = function() {
    MY.scroller.scroll(0, 0, (function(_this) {
      return function() {
        return MY.delay.add(function() {
          var next;
          next = _this._partsId + 1;
          return MY.c.setPjDetail(next, true);
        }, 10);
      };
    })(this), true);
    return MY.c.getObj(MY.conf.P_PHOTO).setOffset(0, 0, false);
  };

  PjDetailParts.prototype._makeScrollImgs = function() {
    var i, j, len, ref, results, val;
    ref = this._photo;
    results = [];
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      val = ref[i];
      val.scrollImgMgr = new ScrollImgMgr(val);
      results.push(this._scrollImgs.push(val));
    }
    return results;
  };

  PjDetailParts.prototype._makeParts = function(name) {
    var addId, obj;
    obj = $("#" + this._id + " .pjDetail" + name);
    if ((obj == null) || obj.length <= 0) {
      return null;
    } else {
      addId = this._id + "_" + name;
      obj.attr("id", addId);
      return this._makeResponsiveDisplay(addId, MY.f.makeRspsvClass("pjDetail" + name + "_0", "pjDetail" + name + "_1"));
    }
  };

  PjDetailParts.prototype._makePartsImg = function(name, imgs) {
    var addId, obj, parts;
    obj = $("#" + this._id + " .pjDetail" + name);
    if ((obj == null) || obj.length <= 0) {
      return null;
    } else {
      addId = this._id + "_" + name;
      obj.attr("id", addId);
      parts = new ResponsiveImg(imgs, {
        id: addId
      });
      parts.init();
      return parts;
    }
  };

  PjDetailParts.prototype._makeLine = function(color) {
    var line;
    if (color == null) {
      color = "#000000";
    }
    line = this._makeDisplay();
    this.add(line);
    line.bgColor(color);
    return line;
  };

  PjDetailParts.prototype.remakeMovie = function() {
    return this._videoThumb.remake();
  };

  PjDetailParts.prototype.stopMovie = function() {
    return this._videoThumb.stop();
  };

  PjDetailParts.prototype.hide = function(isAnimate, delay) {
    this.stopMovie();
    this.visible(false);
    return this.render();
  };

  PjDetailParts.prototype.show = function(isAnimate, delay) {
    var i, j, len, ref, val;
    this.visible(true);
    this.render();
    ref = this._scrollImgs;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      val = ref[i];
      val.scrollImgMgr.reset();
    }
    return this.resize();
  };

  PjDetailParts.prototype.resize = function(w, h) {
    var conW, i, j, k, len, len1, photoY, profAllTxtHeight, profBaseH, profStartY, ref, ref1, results, txtW, val;
    this._resize(w, h);
    if (!this.isVisible()) {
      return;
    }
    conW = this._sw - MY.conf.PJDETAIL_X_MARGIN[this._lo] * 2;
    if (this._lo === MY.conf.LO_0) {
      conW = Math.min(conW, MY.conf.PJDETAIL_MAX_WIDTH);
    }
    txtW = conW - MY.conf.PJDETAIL_TXT_X_MARGIN[this._lo] * 2;
    this._vol.update();
    if (this._lo === MY.conf.LO_0) {
      this._vol.xy(60, MY.conf.PJDETAIL_TXT_TOP_MARGIN[this._lo]);
    } else {
      this._vol.xy(20, MY.conf.PJDETAIL_TXT_X_MARGIN[this._lo]);
    }
    this._vol.render();
    this._ttl0.update();
    this._ttl1.update();
    if (this._lo === MY.conf.LO_0) {
      this._ttl0.xy(MY.conf.PJDETAIL_TXT_X_MARGIN[this._lo], this._vol.y() - 4);
      this._ttl0.render();
      this._ttl1.xy(this._ttl0.x(), this._ttl0.bottom() + 10);
      this._ttl1.render();
    } else {
      this._ttl0.xy(this._vol.x(), this._vol.bottom() + 18);
      this._ttl0.render();
      this._ttl1.xy(this._vol.x(), this._ttl0.bottom() + 9);
      this._ttl1.render();
    }
    this._date.update();
    this._date.render();
    if (this._lo === MY.conf.LO_0) {
      this._date.xy(conW - MY.conf.PJDETAIL_TXT_X_MARGIN[this._lo] - this._date.width(), this._vol.y() - 3);
    } else {
      this._date.xy(this._vol.x(), this._ttl1.bottom() + 10);
    }
    this._date.render();
    this._txt0.update();
    if (this._lo === MY.conf.LO_0) {
      this._txt0.width(txtW);
      this._txt0.xy(~~(conW * 0.5 - this._txt0.width() * 0.5), this._ttl1.bottom() + 60);
      this._txt0.render();
    } else {
      this._txt0.width(txtW);
      this._txt0.xy(~~(conW * 0.5 - this._txt0.width() * 0.5), this._date.bottom() + 30);
      this._txt0.render();
    }
    this._videoThumb.setSize(txtW);
    this._videoThumb.xy(~~(conW * 0.5 - this._videoThumb.width() * 0.5), this._txt0.bottom() + MY.f.getLOVal(60, 30));
    this._videoThumb.render();
    this._txt1.update();
    this._txt2.update();
    if (this._lo === MY.conf.LO_0) {
      this._txt1.width(this._txt0.width());
      this._txt1.xy(this._txt0.x(), this._videoThumb.bottom() + 60);
      this._txt1.render();
      this._txt2.width(this._txt0.width());
      this._txt2.xy(this._txt0.x(), this._txt1.bottom() + 40);
      this._txt2.render();
    } else {
      this._txt1.width(this._txt0.width());
      this._txt1.xy(this._txt0.x(), this._videoThumb.bottom() + 30);
      this._txt1.render();
      this._txt2.width(this._txt0.width());
      this._txt2.xy(this._txt0.x(), this._txt1.bottom() + 30);
      this._txt2.render();
    }
    this._sub0.update();
    this._sub0.xy(~~(conW * 0.5 - this._sub0.width() * 0.5), this._txt2.bottom() + MY.f.getLOVal(160, 80));
    this._sub0.render();
    this._prfImg.update();
    this._prfName.update();
    this._prfTxt.update();
    this._prfImg.setImgWidth(MY.f.getLOVal(~~(conW * 0.5), txtW));
    this._prfName.width(this._prfImg.width() - MY.f.getLOVal(100, 0));
    this._prfName.render();
    this._prfTxt.width(this._prfName.width());
    this._prfTxt.render();
    profAllTxtHeight = this._prfName.height() + 20 + this._prfTxt.height();
    profBaseH = Math.max(profAllTxtHeight, this._prfImg.height());
    profStartY = this._sub0.bottom() + 120;
    this._prfImg.xy(MY.f.getLOVal(0, MY.conf.PJDETAIL_TXT_X_MARGIN[this._lo]), MY.f.getLOVal(~~(profStartY + profBaseH * 0.5 - this._prfImg.height() * 0.5), this._sub0.bottom() + 50));
    this._prfImg.render();
    this._prfName.xy(MY.f.getLOVal(this._prfImg.right() + 60, this._prfImg.x()), MY.f.getLOVal(~~(profStartY + profBaseH * 0.5 - profAllTxtHeight * 0.5), this._prfImg.bottom() + 25));
    this._prfName.render();
    this._prfTxt.xy(this._prfName.x(), this._prfName.bottom() + MY.f.getLOVal(20, 15));
    this._prfTxt.render();
    this._sub1.update();
    this._sub1.xy(~~(conW * 0.5 - this._sub1.width() * 0.5), MY.f.getLOVal(Math.max(this._prfImg.bottom(), this._prfTxt.bottom()) + 150, this._prfTxt.bottom() + 75));
    this._sub1.render();
    photoY = this._sub1.bottom() + MY.f.getLOVal(120, 50);
    ref = this._photo;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      val = ref[i];
      val.update();
      val.setImgWidth(conW);
      val.xy(0, photoY);
      val.render();
      photoY = val.bottom() + MY.f.getLOVal(50, 10);
    }
    this._fb.update();
    this._tw.update();
    this._fb.xy(~~(conW * 0.5 - this._fb.width() * 0.5) - MY.f.getLOVal(36, 40), this._photo[this._photo.length - 1].bottom() + MY.f.getLOVal(146, 80));
    this._fb.render();
    this._tw.xy(~~(conW * 0.5 - this._tw.width() * 0.5) + MY.f.getLOVal(36, 40), this._fb.y());
    this._tw.render();
    this._shareTxt.update();
    this._shareTxt.xy(~~(conW * 0.5 - this._shareTxt.width() * 0.5), this._photo[this._photo.length - 1].bottom() + MY.f.getLOVal(100, 50));
    this._shareTxt.render();
    if (this._lo === MY.conf.LO_0) {
      this._lines[0].size(14, 2);
      this._lines[0].xy(this._vol.x(), this._vol.bottom() + 9);
      this._lines[0].render();
      this._lines[1].visible(false);
      this._lines[1].size(this._lines[0].width(), this._lines[0].height());
      this._lines[1].xy(this._date.x() - 40, this._lines[0].y());
      this._lines[1].render();
      this._lines[2].visible(true);
      this._lines[2].size(1, this._date.height() + 6);
      this._lines[2].xy(this._date.x() - 40, this._date.y());
      this._lines[2].render();
      this._lines[5].size(14, 2);
      this._lines[5].xy(~~(conW * 0.5 - this._lines[5].width() * 0.5), this._fb.y() - 16);
      this._lines[5].render();
      this._lines[3].size(1, 60);
      this._lines[3].xy(this._sub0.x() + ~~(this._sub0.width() * 0.5), this._sub0.bottom() + 30);
      this._lines[3].render();
      this._lines[4].size(this._lines[3].width(), this._lines[3].height());
      this._lines[4].xy(this._sub1.x() + ~~(this._sub1.width() * 0.5), this._sub1.bottom() + 30);
      this._lines[4].render();
    } else {
      this._lines[0].size(7, 1);
      this._lines[0].xy(this._vol.x(), this._vol.bottom() + 5);
      this._lines[0].render();
      this._lines[1].visible(false);
      this._lines[1].xy(0, 0);
      this._lines[1].size(0, 0);
      this._lines[1].render();
      this._lines[2].visible(false);
      this._lines[2].render();
      this._lines[3].size(1, 30);
      this._lines[3].xy(this._sub0.x() + ~~(this._sub0.width() * 0.5), this._sub0.bottom() + 10);
      this._lines[3].render();
      this._lines[4].size(this._lines[3].width(), this._lines[3].height());
      this._lines[4].xy(this._sub1.x() + ~~(this._sub1.width() * 0.5), this._sub1.bottom() + 10);
      this._lines[4].render();
      this._lines[5].size(10, 1);
      this._lines[5].xy(~~(conW * 0.5 - this._lines[5].width() * 0.5), this._shareTxt.bottom() + 10);
      this._lines[5].render();
    }
    this._sBtn._resize();
    this._sBtn.visible(this._lo === MY.conf.LO_0);
    this._sBtn.xy(MY.f.getLOVal(conW - this._sBtn.width() - 40, 0), this._vol.y());
    this._sBtn.render();
    this._bg.size(conW, this._photo[this._photo.length - 1].bottom() + MY.f.getLOVal(420, 234));
    this._bg.render();
    this._topBtn._resize();
    this._topBtn.xy(~~(conW * 0.5 - this._topBtn.width() * 0.5), this._photo[this._photo.length - 1].bottom() + MY.f.getLOVal(313, 174));
    this._topBtn.render();
    this._nextBtn.resize(this._sw, this._sh);
    this._nextBtn.xy(conW - (this._nextBtn.width() + MY.f.getLOVal(0, 10)), this._topBtn.bottom() - this._nextBtn.height());
    this._nextBtn.render();
    this._prevBtn.resize(this._sw, this._sh);
    this._prevBtn.xy(MY.f.getLOVal(0, 10), this._topBtn.bottom() - this._prevBtn.height());
    this._prevBtn.render();
    if (MY.u.isFF()) {
      this.mask(true);
    }
    this.size(conW, this._bg.height());
    this.xy(~~(this._sw * 0.5 - conW * 0.5), 0);
    this.render();
    ref1 = this._scrollImgs;
    results = [];
    for (i = k = 0, len1 = ref1.length; k < len1; i = ++k) {
      val = ref1[i];
      val.scrollImgMgr.mgrScroll(this._lo === MY.conf.LO_0);
      results.push(val.scrollImgMgr.setTriggerVal(val.y() + this._sh - MY.conf.PJDETAIL_OFFSET_Y[this._lo]));
    }
    return results;
  };

  PjDetailParts.prototype._update = function() {
    var i, j, len, o, ref, s, st, to, val;
    PjDetailParts.__super__._update.call(this);
    if (!this.isVisible()) {
      return;
    }
    st = $(window).scrollTop();
    s = st + this._sh * 0.6;
    ref = this._scrollImgs;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      val = ref[i];
      val.scrollImgMgr.updateScroll(s);
    }
    if (st >= this._sh * 0.15) {
      to = 0;
    } else {
      to = 1;
    }
    o = this._sBtn.opacity() + (to - this._sBtn.opacity()) * 0.2;
    this._sBtn.opacity(o);
    return this._sBtn.render();
  };

  return PjDetailParts;

})(MyDisplay);

module.exports = PjDetailParts;


},{"../base/MyDisplay":16,"../parts/NextBtn":43,"../parts/ResponsiveImg":45,"../parts/ScrollImgMgr":47,"../parts/SimpleBtn":49,"../parts/ToTopBtn":51,"./PjDetailMovie":58}],60:[function(require,module,exports){
var DisplayImg, MyDisplay, Top, TopIndi, TopParts,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MyDisplay = require('../base/MyDisplay');

DisplayImg = require('../libs/display/DisplayImg');

TopParts = require('./TopParts');

TopIndi = require('./TopIndi');

Top = (function(superClass) {
  extend(Top, superClass);

  function Top() {
    this._update = bind(this._update, this);
    this._resize = bind(this._resize, this);
    this.setTopParts = bind(this.setTopParts, this);
    this.show = bind(this.show, this);
    this.hide = bind(this.hide, this);
    this.setTopId = bind(this.setTopId, this);
    this._eClickIndi = bind(this._eClickIndi, this);
    this.init = bind(this.init, this);
    Top.__super__.constructor.call(this, {
      id: "xTop"
    });
    this._parts = [];
    this._topPartsId = 0;
    this._indi;
    this._copy;
    this._isShow = false;
  }

  Top.prototype.init = function() {
    var i, id, num, parts;
    Top.__super__.init.call(this);
    num = MY.f.getConNum();
    i = 0;
    while (i < num) {
      id = (num - 1) - i;
      parts = new TopParts(i, "xTopParts" + String(id));
      parts.init();
      this._parts.push(parts);
      i++;
    }
    this._indi = new TopIndi();
    this._indi.init();
    this.add(this._indi);
    this._indi.onClick = this._eClickIndi;
    $("#xTopCopyright").html("");
    this._copy = new DisplayImg({
      src: MY.conf.IMG_PATH + "/parts/copyright.png",
      id: "xTopCopyright"
    });
    this._copy.onLoad = this._resize;
    this._copy.init();
    this._resize();
    return this.hide(false);
  };

  Top.prototype._eClickIndi = function(id) {
    return MY.c.getObj(MY.conf.P_PHOTO).changeTopImg(id);
  };

  Top.prototype.setTopId = function(topId) {
    this._topPartsId = topId;
    return this._indi.setActive(this._topPartsId);
  };

  Top.prototype.hide = function(isAnimate, delay) {
    var i, j, len, ref, val;
    if (isAnimate == null) {
      isAnimate = true;
    }
    delay = delay || 0;
    this._isShow = false;
    ref = this._parts;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      val = ref[i];
      val.hide(isAnimate, delay);
    }
    this._copy.ap.tx = -30;
    this._copy.ap.delay(delay + 0).resetE();
    if (!isAnimate) {
      this._copy.ap.finish();
    }
    this._indi.visible(false);
    this._indi.render();
    return this._update();
  };

  Top.prototype.show = function(isAnimate, delay) {
    var i, j, len, ref, val;
    if (isAnimate == null) {
      isAnimate = true;
    }
    delay = delay || 0;
    this._isShow = true;
    ref = this._parts;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      val = ref[i];
      if (i === this._topPartsId) {
        val.show(isAnimate, delay);
      } else {
        val.hide(false);
      }
    }
    this._resize();
    this._copy.ap.tx = 0;
    this._copy.ap.delay(delay + 40).resetE();
    if (!isAnimate) {
      this._copy.ap.finish();
    }
    this._indi.visible(true);
    this._indi.render();
    this._indi.setActive(this._topPartsId);
    return this._update();
  };

  Top.prototype.setTopParts = function(partsId, isAnimate) {
    var i, j, len, ref, val;
    if (isAnimate == null) {
      isAnimate = true;
    }
    if (this._parts[partsId] != null) {
      this._parts[partsId].readyPartsChange();
    }
    ref = this._parts;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      val = ref[i];
      if (partsId === i) {
        val.show(isAnimate, 30);
      } else {
        val.hide(isAnimate, 0);
      }
    }
    this._topPartsId = partsId;
    this._indi.setActive(this._topPartsId);
    return this._resize();
  };

  Top.prototype._resize = function(w, h) {
    var i, j, k, len, len1, maxTextY, partsBtmMargin, ref, ref1, val;
    Top.__super__._resize.call(this, w, h);
    partsBtmMargin = this._sh > 900 ? 100 : 60;
    maxTextY = MY.conf.HEADER_HEIGHT[this._lo] + 20;
    ref = this._parts;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      val = ref[i];
      if (val != null) {
        val.resize(this._sw, this._sh);
        val.xy(MY.f.getLOVal(80, 18), Math.max(maxTextY, this._sh - val.height() - MY.f.getLOVal(partsBtmMargin, 0)));
        val.render();
      }
    }
    if (this._lo === MY.conf.LO_1) {
      ref1 = this._parts;
      for (i = k = 0, len1 = ref1.length; k < len1; i = ++k) {
        val = ref1[i];
        val.setOffset(0, false);
      }
    }
    this._indi.resize(this._sw, this._sh);
    this._indi.xy(MY.f.getLOVal(this._sw - this._indi.width() - 30, this._sw - this._indi.width() - 15), MY.f.getLOVal(~~(MY.conf.HEADER_HEIGHT[this._lo] + (this._sh - MY.conf.HEADER_HEIGHT[this._lo]) * 0.5 - this._indi.height() * 0.5), this._sh - this._indi.height() - 15));
    this._indi.render();
    if (this._isShow) {
      this._copy.visible(this._lo === MY.conf.LO_0);
      this._copy.xy(20, this._parts[this._topPartsId].y() + this._parts[this._topPartsId].getTtlY() + 13);
      this._copy.render();
    }
    this.size(1, 1);
    return this.render();
  };

  Top.prototype._update = function() {
    Top.__super__._update.call(this);
    this._copy.ap.update();
    this._copy.translate(this._copy.ap.x, this._copy.ap.y);
    this._copy.render();
    if (!this._isShow && this._copy.ap.isFinish()) {
      this._copy.visible(false);
      return this._copy.render();
    }
  };

  return Top;

})(MyDisplay);

module.exports = Top;


},{"../base/MyDisplay":16,"../libs/display/DisplayImg":29,"./TopIndi":61,"./TopParts":63}],61:[function(require,module,exports){
var MyDisplay, TopIndi, TopIndiParts,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MyDisplay = require('../base/MyDisplay');

TopIndiParts = require('./TopIndiParts');

TopIndi = (function(superClass) {
  extend(TopIndi, superClass);

  function TopIndi() {
    this._update = bind(this._update, this);
    this.resize = bind(this.resize, this);
    this.setActive = bind(this.setActive, this);
    this._eClick = bind(this._eClick, this);
    this.init = bind(this.init, this);
    TopIndi.__super__.constructor.call(this);
    this._btns = [];
    this.onClick;
  }

  TopIndi.prototype.init = function() {
    var btn, i, num;
    TopIndi.__super__.init.call(this);
    i = 0;
    num = MY.f.getConNum();
    while (i < num) {
      btn = new TopIndiParts(i);
      btn.init();
      this.add(btn);
      btn.onClick = this._eClick;
      this._btns.push(btn);
      i++;
    }
    return this.resize();
  };

  TopIndi.prototype._eClick = function(partsId) {
    if (this.onClick != null) {
      return this.onClick(partsId);
    }
  };

  TopIndi.prototype.setActive = function(partsId) {
    var i, j, len, ref, results, val;
    ref = this._btns;
    results = [];
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      val = ref[i];
      results.push(val.setActive(i === partsId));
    }
    return results;
  };

  TopIndi.prototype.resize = function(w, h) {
    var i, j, len, ref, val;
    this._resize(w, h);
    ref = this._btns;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      val = ref[i];
      val.resize();
      if (this._lo === MY.conf.LO_0) {
        val.xy(0, i * (val.height() + 15));
        val.render();
      } else {
        val.xy(i * (val.width() + 10), 0);
        val.render();
      }
    }
    if (this._lo === MY.conf.LO_0) {
      this.size(val.width(), this._btns[this._btns.length - 1].bottom());
    } else {
      this.size(this._btns[this._btns.length - 1].right(), val.height());
    }
    return this.render();
  };

  TopIndi.prototype._update = function() {
    return TopIndi.__super__._update.call(this);
  };

  return TopIndi;

})(MyDisplay);

module.exports = TopIndi;


},{"../base/MyDisplay":16,"./TopIndiParts":62}],62:[function(require,module,exports){
var AniParam, DisplayTransform, EffectBar, MyDisplay, ResponsiveDisplay, SeeMoreBtn, TopIndiParts,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MyDisplay = require('../base/MyDisplay');

DisplayTransform = require('../libs/display/DisplayTransform');

ResponsiveDisplay = require('../parts/ResponsiveDisplay');

SeeMoreBtn = require('../parts/SeeMoreBtn');

EffectBar = require('../parts/EffectBar');

AniParam = require('../base/AniParam');

TopIndiParts = (function(superClass) {
  extend(TopIndiParts, superClass);

  function TopIndiParts(partsId) {
    this._update = bind(this._update, this);
    this.resize = bind(this.resize, this);
    this._makeDot = bind(this._makeDot, this);
    this._eClick = bind(this._eClick, this);
    this.setActive = bind(this.setActive, this);
    this.init = bind(this.init, this);
    TopIndiParts.__super__.constructor.call(this);
    this._partsId = partsId;
    this._dot;
    this._btn;
    this._isActive = false;
    this.onClick;
  }

  TopIndiParts.prototype.init = function() {
    TopIndiParts.__super__.init.call(this);
    this._dot = this._makeDisplay();
    this.add(this._dot);
    this._btn = this._makeBtn(null, this._eClick);
    this.add(this._btn);
    this.mask(true);
    return this.resize();
  };

  TopIndiParts.prototype.setActive = function(bool) {
    this._isActive = bool;
    return this.resize();
  };

  TopIndiParts.prototype._eClick = function() {
    if (this._isActive) {
      return;
    }
    if (this.onClick != null) {
      return this.onClick(this._partsId);
    }
  };

  TopIndiParts.prototype._makeDot = function(radius) {
    var color;
    if (this._isActive) {
      color = "#000";
    } else {
      color = "#FFF";
    }
    this._dot.elm().css({
      "-webkit-border-radius": radius,
      "-moz-border-radius": radius,
      "border-radius": radius
    });
    this._dot.size(radius * 2, radius * 2);
    this._dot.bgColor(color);
    return this._dot.render();
  };

  TopIndiParts.prototype.resize = function(w, h) {
    var radius;
    this._resize(w, h);
    radius = MY.f.getLOVal(4, 3);
    this._makeDot(radius);
    this._btn.size(this._dot.width() * 1.5, this._dot.height() * 1.5);
    this._btn.xy(~~(this._dot.width() * 0.5 - this._btn.width() * 0.5), ~~(this._dot.height() * 0.5 - this._btn.height() * 0.5));
    this._btn.render();
    this.size(this._dot.width(), this._dot.height());
    return this.render();
  };

  TopIndiParts.prototype._update = function() {
    return TopIndiParts.__super__._update.call(this);
  };

  return TopIndiParts;

})(MyDisplay);

module.exports = TopIndiParts;


},{"../base/AniParam":14,"../base/MyDisplay":16,"../libs/display/DisplayTransform":30,"../parts/EffectBar":41,"../parts/ResponsiveDisplay":44,"../parts/SeeMoreBtn":48}],63:[function(require,module,exports){
var AniParam, DisplayTransform, EffectBar, MyDisplay, ResponsiveDisplay, SeeMoreBtn, TopParts,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MyDisplay = require('../base/MyDisplay');

DisplayTransform = require('../libs/display/DisplayTransform');

ResponsiveDisplay = require('../parts/ResponsiveDisplay');

SeeMoreBtn = require('../parts/SeeMoreBtn');

EffectBar = require('../parts/EffectBar');

AniParam = require('../base/AniParam');

TopParts = (function(superClass) {
  extend(TopParts, superClass);

  function TopParts(partsId, domId) {
    this._update = bind(this._update, this);
    this.setOffset = bind(this.setOffset, this);
    this.resize = bind(this.resize, this);
    this.getTtlY = bind(this.getTtlY, this);
    this._setAnimation = bind(this._setAnimation, this);
    this.show = bind(this.show, this);
    this.hide = bind(this.hide, this);
    this.readyPartsChange = bind(this.readyPartsChange, this);
    this._eClick = bind(this._eClick, this);
    this._updateEffectBarPos = bind(this._updateEffectBarPos, this);
    this._setEffectBarSize = bind(this._setEffectBarSize, this);
    this._makeEffectBar = bind(this._makeEffectBar, this);
    this.init = bind(this.init, this);
    TopParts.__super__.constructor.call(this, {
      id: domId,
      resize: false
    });
    this._partsId = partsId;
    this._vol0;
    this._vol1;
    this._volBtmLine;
    this._ttl0;
    this._ttl1;
    this._workTtl;
    this._subTtl;
    this._moreBtn;
    this._bg;
    this._btn;
    this._effectBar = {};
    this._offset = {};
    this._isShow = false;
  }

  TopParts.prototype.init = function() {
    TopParts.__super__.init.call(this);
    $("#" + this._id + " .topVol0").attr("id", this._id + "_0");
    $("#" + this._id + " .topVol1").attr("id", this._id + "_5");
    $("#" + this._id + " .topTtl0").attr("id", this._id + "_1");
    $("#" + this._id + " .topTtl1").attr("id", this._id + "_2");
    $("#" + this._id + " .topSubTtl").attr("id", this._id + "_3");
    $("#" + this._id + " .topDetail").attr("id", this._id + "_4");
    $("#" + this._id + " .topWorkTtl").attr("id", this._id + "_6");
    this._bg = this._makeDisplay();
    this.unshift(this._bg);
    this._bg.bgColor("#FFFFFF");
    this._vol0 = this._makeResponsiveDisplay(this._id + "_0", MY.f.makeRspsvClass("topVol0_0", "topVol0_1"));
    this._vol1 = this._makeResponsiveDisplay(this._id + "_5", MY.f.makeRspsvClass("topVol1_0", "topVol1_1"));
    this._volBtmLine = this._makeDisplay();
    this.add(this._volBtmLine);
    this._volBtmLine.bgColor("#000000");
    this._ttl0 = this._makeResponsiveDisplay(this._id + "_1", MY.f.makeRspsvClass("topTtl0_0", "topTtl0_1"));
    this._ttl1 = this._makeResponsiveDisplay(this._id + "_2", MY.f.makeRspsvClass("topTtl1_0", "topTtl1_1"));
    this._subTtl = this._makeResponsiveDisplay(this._id + "_3", MY.f.makeRspsvClass("topSubTtl1_0", "topSubTtl1_1"));
    this._workTtl = this._makeResponsiveDisplay(this._id + "_6", MY.f.makeRspsvClass("topWorkTtl_0", "topWorkTtl_1"));
    this._moreBtn = new SeeMoreBtn(this._id + "_4");
    this._moreBtn.init();
    this._moreBtn.onClick = this._eClick;
    this._btn = this._makeBtn(null, this._eClick);
    this.add(this._btn);
    this._makeEffectBar();
    this._offset["vol"] = new AniParam();
    this._offset["ttl"] = new AniParam();
    this._offset["subTtl"] = new AniParam();
    this._offset["moreBtn"] = new AniParam();
    if (!MY.u.isSmt()) {
      this.mask(true);
    }
    return this.resize();
  };

  TopParts.prototype._makeEffectBar = function() {
    var arr, bar, i, j, len, results, val;
    arr = ["vol0", "vol1", "volBtmLine", "workTtl", "ttl0", "ttl1", "subTtl", "moreBtn"];
    results = [];
    for (i = j = 0, len = arr.length; j < len; i = ++j) {
      val = arr[i];
      bar = new EffectBar();
      bar.init();
      this.add(bar);
      results.push(this._effectBar[val] = bar);
    }
    return results;
  };

  TopParts.prototype._setEffectBarSize = function(key, display) {
    var bar;
    bar = this._effectBar[key];
    if (bar != null) {
      bar.xy(display.x(), display.y());
      return bar.setBarSize(display.width(), display.height());
    }
  };

  TopParts.prototype._updateEffectBarPos = function() {
    var base, key, ref, results, val;
    ref = this._effectBar;
    results = [];
    for (key in ref) {
      val = ref[key];
      base = this["_" + key];
      val.translate(base.ap.x, base.ap.y);
      results.push(val.render());
    }
    return results;
  };

  TopParts.prototype._eClick = function() {
    return MY.c.setPjDetail(this._partsId, true);
  };

  TopParts.prototype.readyPartsChange = function() {
    this.visible(true);
    this.render();
    this.resize();
    return this._setAnimation(0, this.width() * 1.5, false, 0, false);
  };

  TopParts.prototype.hide = function(isAnimate, delay) {
    this._isShow = false;
    if (this._lo === MY.conf.LO_1) {
      isAnimate = false;
    }
    return this._setAnimation(0, -this.width() * 1.2, isAnimate, delay, false);
  };

  TopParts.prototype.show = function(isAnimate, delay) {
    this._isShow = true;
    this.visible(true);
    this.render();
    this.resize();
    return this._setAnimation(-this.width() * 1.5, 0, isAnimate, delay, true);
  };

  TopParts.prototype._setAnimation = function(to, from, isAnimate, delay, isEffectBar) {
    var arr, bar, d, delay2, i, j, len, o, start, val;
    if (isAnimate == null) {
      isAnimate = true;
    }
    if (isEffectBar == null) {
      isEffectBar = true;
    }
    arr = ["vol0", "vol1", "volBtmLine", "workTtl", "ttl0", "ttl1", "subTtl", "moreBtn"];
    if (this._lo === MY.conf.LO_1) {
      arr.push("bg");
      isEffectBar = false;
    }
    start = delay;
    d = MY.conf.STR_DELAY;
    d = 10;
    if (!isEffectBar) {
      d = 0;
    }
    for (i = j = 0, len = arr.length; j < len; i = ++j) {
      val = arr[i];
      o = this["_" + val];
      delay2 = start + d * i;
      o.ap.delay(delay2).resetE();
      o.ap.x = to;
      o.ap.tx = from;
      if (!isAnimate) {
        o.ap.finish();
      }
      bar = this._effectBar[val];
      if (bar != null) {
        if (isEffectBar) {
          bar.start(delay2, isAnimate);
        } else {
          bar.hide();
        }
      }
    }
    return this._update();
  };

  TopParts.prototype.getTtlY = function() {
    return this._workTtl.y() - 5;
  };

  TopParts.prototype.resize = function(w, h) {
    this._resize(w, h);
    this._vol0.update();
    this._vol1.update();
    this._vol0.xy(0, MY.f.getLOVal(0, 15));
    this._vol0.render();
    this._vol1.xy(0, this._vol0.bottom());
    this._vol1.render();
    this._setEffectBarSize("vol0", this._vol0);
    this._setEffectBarSize("vol1", this._vol1);
    this._volBtmLine.size(MY.f.getLOVal(14, 7), MY.f.getLOVal(2, 1));
    this._volBtmLine.xy(0, this._vol1.bottom() + MY.f.getLOVal(7, 6));
    this._volBtmLine.render();
    this._setEffectBarSize("volBtmLine", this._volBtmLine);
    this._workTtl.update();
    this._workTtl.xy(0, this._volBtmLine.bottom() + MY.f.getLOVal(20, 12));
    this._workTtl.render();
    this._setEffectBarSize("workTtl", this._workTtl);
    this._ttl0.update();
    this._ttl1.update();
    this._ttl0.xy(1, this._workTtl.bottom() + MY.f.getLOVal(5, 5));
    this._ttl0.render();
    this._ttl1.xy(this._ttl0.x(), this._ttl0.bottom() + MY.f.getLOVal(0, 10));
    this._ttl1.render();
    this._setEffectBarSize("ttl0", this._ttl0);
    this._setEffectBarSize("ttl1", this._ttl1);
    this._subTtl.update();
    this._subTtl.xy(0, this._ttl1.bottom() + MY.f.getLOVal(46, 10));
    this._subTtl.render();
    this._setEffectBarSize("subTtl", this._subTtl);
    if (this._lo === MY.conf.LO_0) {
      this._moreBtn.visible(true);
      this._moreBtn.xy(0, this._subTtl.bottom() + 30);
      this._moreBtn.render();
    } else {
      this._moreBtn.visible(false);
      this._moreBtn.render();
    }
    this._setEffectBarSize("moreBtn", this._moreBtn);
    if (this._lo === MY.conf.LO_1) {
      this._bg.visible(true);
      this._bg.size(this._ttl0.width() + 25, this._subTtl.bottom() + 20);
      this._bg.render();
    } else {
      this._bg.visible(false);
      this._bg.render();
    }
    this._btn.visible(this._lo === MY.conf.LO_1);
    this._btn.size(this._bg.width(), this._bg.height());
    this._btn.xy(0, 0);
    this._btn.render();
    this.size(this._ttl0.width() + 80, MY.f.getLOVal(this._moreBtn.bottom(), this._bg.height()));
    return this.render();
  };

  TopParts.prototype.setOffset = function(r, isAnimate) {
    var range0, range1, range2, range3;
    if (isAnimate == null) {
      isAnimate = true;
    }
    range0 = 50;
    range1 = 80;
    range2 = 60;
    range3 = 30;
    this._offset["vol"].tx = range0 * r;
    this._offset["ttl"].tx = range1 * r;
    this._offset["subTtl"].tx = range2 * r;
    this._offset["moreBtn"].tx = range3 * r;
    if (!isAnimate) {
      this._offset["vol"].finish();
      this._offset["ttl"].finish();
      this._offset["subTtl"].finish();
      return this._offset["moreBtn"].finish();
    }
  };

  TopParts.prototype._update = function() {
    TopParts.__super__._update.call(this);
    this._vol0.ap.update();
    this._vol1.ap.update();
    this._volBtmLine.ap.update();
    this._workTtl.ap.update();
    this._ttl0.ap.update();
    this._ttl1.ap.update();
    this._subTtl.ap.update();
    this._moreBtn.ap.update();
    this._bg.ap.update();
    this._vol0.translate(this._vol0.ap.x, this._vol0.ap.y);
    this._vol0.render();
    this._vol1.translate(this._vol1.ap.x, this._vol1.ap.y);
    this._vol1.render();
    this._volBtmLine.translate(this._volBtmLine.ap.x, this._volBtmLine.ap.y);
    this._volBtmLine.render();
    this._workTtl.translate(this._workTtl.ap.x, this._workTtl.ap.y);
    this._workTtl.render();
    this._ttl0.translate(this._ttl0.ap.x, this._ttl0.ap.y);
    this._ttl0.render();
    this._ttl1.translate(this._ttl1.ap.x, this._ttl1.ap.y);
    this._ttl1.render();
    this._subTtl.translate(this._subTtl.ap.x, this._subTtl.ap.y);
    this._subTtl.render();
    this._moreBtn.translate(this._moreBtn.ap.x, this._moreBtn.ap.y);
    this._moreBtn.render();
    this._updateEffectBarPos();
    this._bg.translate(this._bg.ap.x, this._bg.ap.y);
    this._bg.render();
    if (!this._isShow && this._moreBtn.ap.isFinish()) {
      this.visible(false);
      return this.render();
    }
  };

  return TopParts;

})(MyDisplay);

module.exports = TopParts;


},{"../base/AniParam":14,"../base/MyDisplay":16,"../libs/display/DisplayTransform":30,"../parts/EffectBar":41,"../parts/ResponsiveDisplay":44,"../parts/SeeMoreBtn":48}]},{},[4]);
