/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Scroll)
/* harmony export */ });


// import DisableCover from 'controller/DisableCover';

/**
 * import Scroll from 'utils/Scroll';
 */
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Scroll = /*#__PURE__*/function () {
  function Scroll() {
    _classCallCheck(this, Scroll);
  }
  _createClass(Scroll, null, [{
    key: "to",
    value:
    /**
     * @example Scroll.to(0,1,Power2.easeOut);
     */
    function to(y) {
      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : .3;
      var ease = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Power3.easeInOut;
      TweenMax.to([document.body, document.documentElement], time, {
        scrollTop: y,
        ease: ease
      });

      // DisableCover.timer(time);
    }

    /**
     * @example Scroll.set(0);
     */
  }, {
    key: "set",
    value: function set() {
      var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var tgt;
      if ('scrollingElement' in document) tgt = document.scrollingElement;else if ('WebkitAppearance' in document.documentElement.style) tgt = document.body;else tgt = document.documentElement;
      tgt.scrollTop = y;
    }
  }]);
  return Scroll;
}();


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


// import frag from "./../../assets/shader/main.frag?raw";
// import vert from "./../../assets/shader/main.vert?raw";
var main = /*#__PURE__*/function () {
  function main() {
    var _this = this;
    _classCallCheck(this, main);
    this.width = window.innerWidth;
    this.height = window.innerWidth;
    this.header = document.getElementById('header');
    this.toTop = document.getElementById('to-top');
    this.top = document.getElementById('top');
    this.home = document.getElementById('home');
    this.style01 = document.getElementById('style01');
    this.modal = document.getElementById('modal');
    this.container = document.getElementById('container');
    this.visitor = document.getElementById('visitor');
    this.ceu = document.getElementById('challenge-enthusiasm-unity');
    this.menu = document.getElementById('menu');
    this.footer = document.getElementById('footer');
    this.kv = document.getElementsByClassName('kv-img');
    this.textTarget = document.getElementsByClassName('text-target');
    this.swiperContainer = document.getElementsByClassName('swiper-container');
    this.qa = document.getElementsByClassName('qa-faq');
    this.modalTrigger = document.getElementsByClassName('modal-trigger');
    this.scrollTrigger = document.getElementsByClassName('scroll-trigger');
    this.menuTrigger = document.getElementsByClassName('menu-trigger');
    this.index = 0;
    this.scroller = document.body;
    this.scrollingElement = 'scrollingElement' in document ? document.scrollingElement : window.navigator.userAgent.indexOf('WebKit') != -1 ? body : document.documentElement || body.parentNode;
    gsap.registerPlugin(ScrollTrigger);
    Splitting();
    this.init();
    this.animationScroll();
    for (var i = 0; i < this.menuTrigger.length; i++) {
      this.menuTrigger[i].addEventListener('click', this.triggerMenu.bind(this));
    }
    for (var _i = 0; _i < this.qa.length; _i++) {
      this.qa[_i].addEventListener('click', this.triggerQa.bind(this));
    }
    for (var _i2 = 0; _i2 < this.scrollTrigger.length; _i2++) {
      this.scrollTrigger[_i2].addEventListener('click', this.toScroll.bind(this));
    }
    for (var _i3 = 0; _i3 < this.modalTrigger.length; _i3++) {
      this.modalTrigger[_i3].addEventListener('click', this.triggerModal.bind(this));
    }
    window.onresize = function () {
      _this.resizeEvent();
    };
    window.onscroll = function () {
      _this.scrollAnimation();
    };
  }
  _createClass(main, [{
    key: "gifAnim",
    value: function gifAnim() {
      if (this.index < this.kv.length - 1) {
        this.index++;
      } else {
        this.index = 0;
      }
      for (var i = 0; i < this.kv.length; i++) {
        this.kv[i].classList.remove('active');
      }
      this.kv[this.index].classList.add('active');
    }
  }, {
    key: "animationScroll",
    value: function animationScroll() {
      var _this2 = this;
      var addactive = document.getElementsByClassName('addactive');
      var parallax = document.getElementsByClassName('parallax');
      var vertical = document.getElementById('vertical');
      var targetImg = document.getElementsByClassName('style-imgs-back');
      var scaleUp = document.getElementsByClassName('scale-up');
      gsap.to(vertical, {
        height: '100vh',
        // ease: "power4.inOut",
        scrollTrigger: {
          trigger: this.style01,
          start: "top center",
          // end: `top center`,
          // scrub: 1,
          // invalidateOnRefresh: true,
          onEnter: function onEnter() {
            _this2.vertical.classList.add('active');
          }
        }
      });

      // for (let i = 0; i < scaleUp.length; i++) {
      //   let elm = scaleUp[i];
      //   gsap.set(elm, {scale: 0});
      //   gsap.to(elm, {
      //     scale: 1,
      //     ease: "power1.out",
      //     scrollTrigger: {
      //       trigger: elm,
      //       start: `top bottom`, 
      //       end: `center center`,
      //       scrub: 1,
      //     }
      //   });
      // }
      // for (let i = 0; i < targetImg.length; i++) {
      //   let target = targetImg[i];
      //   let path1 = 'polygon(0px 0px, 100% 0px, 100% 0%, 0% 0%)';
      //   let path2 = "polygon(0% 0px, 100% 0px, 100% 100%, 0% 100%)";

      //   // if (document.getElementsByClassName(`cover${i+1}`)[0].classList.contains('cover-left')) {
      //   //   path1 = 'polygon(100% 0px, 100% 0px, 100% 100%, 100% 100%)';
      //   //   path2 = "polygon(0% 0px, 100% 0px, 100% 100%, 0% 100%)";
      //   // }
      //   let clip_polygon = gsap.timeline({
      //     scrollTrigger: {
      //       trigger: target,
      //       start: "top center",
      //       end: "center center",
      //       scrub: true,
      //     }
      //   });
      //   clip_polygon.fromTo(
      //     target,
      //     {
      //       clipPath: path1
      //     },
      //     {
      //       clipPath: path2,
      //       duration: 1.5
      //     }
      //   );
      // }
      var _loop = function _loop() {
        var elm = parallax[i];
        var amount = elm.getAttribute('data-amount');
        gsap.fromTo(elm, {
          y: function y() {
            return "".concat(amount / -2, "%");
          }
        }, {
          y: function y() {
            return "".concat(amount / 2, "%");
          },
          ease: "power1.out",
          scrollTrigger: {
            trigger: elm,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true
          }
        });
      };
      for (var i = 0; i < parallax.length; i++) {
        _loop();
      }
      ScrollTrigger.create({
        trigger: '#home',
        start: "top top",
        end: "bottom bottom",
        pin: '.pin-home'
      });
      ScrollTrigger.create({
        trigger: '#visitor',
        start: "top top",
        end: "bottom bottom",
        pin: '.pin-visitor'
      });
      gsap.to(this.container, {
        ease: "power4.inOut",
        backgroundColor: "#000000",
        scrollTrigger: {
          trigger: this.visitor,
          start: "top center",
          end: "top top",
          scrub: true
        }
      });
      gsap.to(this.ceu, {
        ease: "power4.inOut",
        backgroundColor: "#ffffff",
        scrollTrigger: {
          trigger: this.ceu,
          start: "top center",
          end: "top top",
          scrub: true
        }
      });
      var _loop2 = function _loop2() {
        var elm = addactive[_i4];
        var start = "top center+=".concat(window.innerHeight / 4);
        if (elm.classList.contains('first')) {
          start = "top center+=".concat(window.innerHeight / 2);
        }
        gsap.to(elm, {
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: elm,
            start: start,
            onEnter: function onEnter() {
              elm.classList.add('active');
              if (elm.classList.contains('show')) {
                setTimeout(function () {
                  elm.classList.add('nowillchange');
                }, 3000);
              }
            }
          }
        });
      };
      for (var _i4 = 0; _i4 < addactive.length; _i4++) {
        _loop2();
      }
    }
  }, {
    key: "initSwiper",
    value: function initSwiper() {
      for (var i = 0; i < this.swiperContainer.length; i++) {
        var thisSwiper = this.swiperContainer[i];
        var space = this.width * .02544529262086514;
        var slides = 1.5;
        var speed = 700;
        var loop = true;
        var center = true;
        var initialSlide = 0;
        var autoplay = {
          delay: 3000,
          // pauseOnMouseEnter: true,
          disableOnInteraction: false
        };
        if (thisSwiper.classList.contains('marquee-slider')) {
          speed = 12000;
          slides = 1;
          autoplay = {
            delay: 0,
            // pauseOnMouseEnter: true,
            disableOnInteraction: false
          };
        }
        new Swiper(thisSwiper, {
          // Optional parameters
          // direction: 'vertical',
          speed: speed,
          initialSlide: initialSlide,
          loop: loop,
          autoplay: autoplay,
          slidesPerView: slides,
          spaceBetween: space
        });
      }
    }
  }, {
    key: "triggerModal",
    value: function triggerModal(e) {
      var _this3 = this;
      var elm = e.currentTarget;
      if (this.modal.classList.contains('active')) {
        this.modal.classList.remove('active');
        setTimeout(function () {
          for (var i = 0; i < _this3.textTarget.length; i++) {
            _this3.textTarget[i].classList.remove('active');
          }
        }, 1000);
      } else {
        var target = document.getElementById(elm.getAttribute('data-target'));
        target.classList.add('active');
        this.modal.classList.add('active');
      }
    }
  }, {
    key: "triggerQa",
    value: function triggerQa(e) {
      var elm = e.currentTarget;
      var a = elm.getElementsByClassName('a')[0];
      var aInner = a.getElementsByClassName('a__inner')[0];
      if (elm.classList.contains('active')) {
        elm.classList.remove('active');
        a.setAttribute('style', "height: 0");
      } else {
        elm.classList.add('active');
        a.setAttribute('style', "height: ".concat(aInner.clientHeight, "px"));
      }
    }
  }, {
    key: "toScroll",
    value: function toScroll(e) {
      var elm = e.currentTarget;
      var target = document.getElementById(elm.getAttribute('data-target'));
      var elemRect = target.getBoundingClientRect();
      var scrollY = window.scrollY || window.pageYOffset;
      var top = elemRect.top + scrollY;

      // top -= this.header.clientHeight;

      _utils_Scroll__WEBPACK_IMPORTED_MODULE_0__["default"].to(top, 2);
    }
  }, {
    key: "init",
    value: function init() {
      var _this4 = this;
      this.resizeEvent();
      this.lenis();
      this.initSwiper();
      window.scrollTo(0, 0);
      document.body.classList.add('loaded');
      setTimeout(function () {
        _this4.interval = setInterval(_this4.gifAnim.bind(_this4), 1500);
      }, 1000);
    }
  }, {
    key: "resizeEvent",
    value: function resizeEvent() {
      var vh = window.innerHeight * 0.01;
      // カスタム変数--vhの値をドキュメントのルートに設定
      document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
      if (this.width < 750) {} else {
        ScrollTrigger.refresh();
      }
      // this.checkBreakPoint();
    }
  }, {
    key: "scrollAnimation",
    value: function scrollAnimation() {
      this.scrollY = this.scrollingElement.scrollTop;

      // if (this.scrollY > this.height) {
      //   this.toTop.classList.add('active');
      // } else {
      //   this.toTop.classList.remove('active');
      // }
    }
  }, {
    key: "lenis",
    value: function lenis() {
      var _this5 = this;
      var lerp = .8;
      var duration = 1.1;
      if (this.width < 750) {
        // lerp = .1;
        // duration = 3;
        // this.lenisInstance = new Lenis({
        //   lerp: lerp,
        //   duration: duration,
        //   smooth: true,
        //   smoothTouch: true,
        // })
      } else {
        if (this.browserName === 'Safari' && parseFloat(this.browserVersion) < 14) {} else {
          this.lenisInstance = new Lenis({
            lerp: lerp,
            duration: duration
          });
        }
      }
      if (this.lenisInstance) {
        gsap.ticker.add(function (time) {
          _this5.lenisInstance.raf(time * 1000);
        });
      }
    }
  }]);
  return main;
}();
window.addEventListener("load", function () {
  new main();
});
})();

/******/ })()
;