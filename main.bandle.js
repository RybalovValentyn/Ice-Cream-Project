/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://ice-cream-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://ice-cream-project/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://ice-cream-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _js_mobile_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/mobile-menu.js */ \"./src/js/mobile-menu.js\");\n/* harmony import */ var _js_mobile_menu_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_mobile_menu_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_slider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/slider.js */ \"./src/js/slider.js\");\n/* harmony import */ var _js_slider_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_slider_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack://ice-cream-project/./src/index.js?");

/***/ }),

/***/ "./src/js/mobile-menu.js":
/*!*******************************!*\
  !*** ./src/js/mobile-menu.js ***!
  \*******************************/
/***/ (() => {

eval("(() => {\n  const menuBtnRef = document.querySelector(\"[data-menu-button]\");\n  const mobileMenuRef = document.querySelector(\"[data-menu]\");\n  menuBtnRef.addEventListener('click', () => {\n    const expanded = menuBtnRef.getAttribute(\"aria-expanded\") === \"true\" || false;\n    menuBtnRef.classList.toggle(\"is-opened\");\n    menuBtnRef.setAttribute(\"aria-expanded\", !expanded);\n    mobileMenuRef.classList.toggle(\"is-opened\");\n    document.body.classList.toggle(\"modal-open\");\n  });\n})();\n\n//# sourceURL=webpack://ice-cream-project/./src/js/mobile-menu.js?");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ (() => {

eval("$(document).ready(function () {\n  $('.slider').slick({\n    arrows: true,\n    dots: true\n  });\n});\n\n//# sourceURL=webpack://ice-cream-project/./src/js/slider.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss ***!
  \***************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/making-img/mobile/milk-background@1x.png */ \"./src/images/making-img/mobile/milk-background@1x.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/making-img/mobile/milk-background@2x.png */ \"./src/images/making-img/mobile/milk-background@2x.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/making-img/desktop/milk-background@1x.png */ \"./src/images/making-img/desktop/milk-background@1x.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/making-img/desktop/milk-background@2x.png */ \"./src/images/making-img/desktop/milk-background@2x.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/bucket-milk.svg */ \"./src/images/bucket-milk.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../images/bucket-apple.svg */ \"./src/images/bucket-apple.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../images/sweets.svg */ \"./src/images/sweets.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../images/reviews/left-arrow.svg */ \"./src/images/reviews/left-arrow.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../images/reviews/right-arrow.svg */ \"./src/images/reviews/right-arrow.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../images/reviews/home.svg */ \"./src/images/reviews/home.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../images/reviews/quote.png */ \"./src/images/reviews/quote.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../images/schedule-img/sectionbg-schedule@2x.png */ \"./src/images/schedule-img/sectionbg-schedule@2x.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);\nvar ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);\nvar ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);\nvar ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);\nvar ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@charset \\\"UTF-8\\\";\\n/*\\n * Главный файл стилей.\\n * Все паршалы подключаются сюда.\\n */\\nhtml {\\n  scroll-behavior: smooth; }\\n\\nbody {\\n  font-family: DM sans, sans-serif;\\n  font-weight: 400;\\n  letter-spacing: 0.04em; }\\n\\na {\\n  text-decoration: none; }\\n\\nul {\\n  list-style: none;\\n  margin: 0;\\n  padding: 0; }\\n\\nimg {\\n  display: block;\\n  width: 100%;\\n  height: auto; }\\n\\n.section__title {\\n  font-family: Titan One;\\n  font-size: 34px;\\n  line-height: 1.15;\\n  text-align: center;\\n  text-transform: uppercase;\\n  color: #d41443;\\n  margin-top: 15; }\\n  @media screen and (min-width: 768px) {\\n    .section__title {\\n      font-size: 48px; } }\\n  @media screen and (min-width: 1200px) {\\n    .section__title {\\n      font-size: 58px;\\n      line-height: 1.14; } }\\n\\n.section-subtitle {\\n  margin: 0;\\n  font-family: Titan One;\\n  font-size: 18px;\\n  line-height: 1.17;\\n  text-align: center;\\n  text-transform: uppercase;\\n  color: #ffa5ba; }\\n  @media screen and (min-width: 768px) {\\n    .section-subtitle {\\n      font-size: 26px;\\n      line-height: 1.15; } }\\n  @media screen and (min-width: 1200px) {\\n    .section-subtitle {\\n      font-size: 30px;\\n      line-height: 1.13; } }\\n\\n.container {\\n  margin-left: auto;\\n  margin-right: auto; }\\n  @media screen and (max-width: 319px) {\\n    .container {\\n      max-width: 320px;\\n      padding-left: 20px;\\n      padding-right: 20px; } }\\n  @media screen and (min-width: 320px) {\\n    .container {\\n      width: 320px;\\n      padding-left: 20px;\\n      padding-right: 20px; } }\\n  @media screen and (min-width: 768px) {\\n    .container {\\n      width: 768px;\\n      padding-left: 34px;\\n      padding-right: 34px; } }\\n  @media screen and (min-width: 1200px) {\\n    .container {\\n      width: 1200px;\\n      padding-left: 77px;\\n      padding-right: 77px; } }\\n\\n.visually-hidden {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 1px;\\n  height: 1px;\\n  margin: -1px;\\n  border: 0;\\n  padding: 0;\\n  clip: rect(0 0 0 0);\\n  overflow: hidden; }\\n\\n.page-header {\\n  position: relative; }\\n  @media screen and (min-width: 768px) {\\n    .page-header {\\n      display: -webkit-box;\\n      display: -ms-flexbox;\\n      display: flex;\\n      -webkit-box-pack: justify;\\n          -ms-flex-pack: justify;\\n              justify-content: space-between;\\n      -webkit-box-align: center;\\n          -ms-flex-align: center;\\n              align-items: center; } }\\n\\n.menu-btn {\\n  z-index: 10;\\n  display: -webkit-inline-box;\\n  display: -ms-inline-flexbox;\\n  display: inline-flex;\\n  position: absolute;\\n  top: 19px;\\n  right: 0;\\n  background-color: inherit;\\n  border: none;\\n  padding: 0; }\\n\\n.menu-close__icon {\\n  -webkit-transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\\n  stroke: #fff;\\n  opacity: 0; }\\n\\n.menu-burger__icon {\\n  -webkit-transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\\n  opacity: 1; }\\n\\n@media screen and (min-width: 768px) and (max-width: 1199px) {\\n  .menu-btn.is-opened {\\n    top: -14px; } }\\n\\n.menu-btn.is-opened .menu-burger__icon {\\n  opacity: 0; }\\n\\n.menu-btn.is-opened .menu-close__icon {\\n  opacity: 1; }\\n\\n@media screen and (min-width: 1200px) {\\n  .menu-btn {\\n    display: none; } }\\n\\n.buynow-btn {\\n  border: none;\\n  padding: 0;\\n  border-radius: 22px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  height: 44px;\\n  -webkit-transition-property: background-color;\\n  transition-property: background-color;\\n  -webkit-transition-duration: 250ms;\\n          transition-duration: 250ms;\\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n  background-color: #fff;\\n  color: #d41443;\\n  cursor: pointer;\\n  font-weight: 700;\\n  font-size: 16px;\\n  line-height: 1.31; }\\n  .buynow-btn:hover, .buynow-btn:focus {\\n    background-color: #ecebeb; }\\n  @media screen and (max-width: 767px) {\\n    .buynow-btn--hidden {\\n      width: 209px;\\n      margin-bottom: 34px; } }\\n  @media screen and (min-width: 768px) and (max-width: 1199px) {\\n    .buynow-btn--hidden {\\n      width: 186px;\\n      margin-left: 10px;\\n      margin-bottom: 32px; } }\\n  @media screen and (min-width: 1200px) {\\n    .buynow-btn--hidden {\\n      width: 159px;\\n      margin-left: 110px; } }\\n  .buynow-btn--tablet {\\n    display: none; }\\n    @media screen and (min-width: 768px) and (max-width: 1199px) {\\n      .buynow-btn--tablet {\\n        display: -webkit-box;\\n        display: -ms-flexbox;\\n        display: flex;\\n        width: 160px;\\n        margin-right: 30px;\\n        z-index: 9; } }\\n\\n.buynow-icon {\\n  margin-left: 28px;\\n  stroke: #d41443; }\\n  @media screen and (min-width: 768px) {\\n    .buynow-icon {\\n      margin-left: 20px; } }\\n  @media screen and (min-width: 1200px) {\\n    .buynow-icon {\\n      margin-left: 13px; } }\\n\\n@media screen and (min-width: 1200px) {\\n  .nav-list {\\n    display: -webkit-box;\\n    display: -ms-flexbox;\\n    display: flex;\\n    -webkit-box-pack: justify;\\n        -ms-flex-pack: justify;\\n            justify-content: space-between;\\n    width: 541px; } }\\n\\n.nav-link {\\n  display: inline-block;\\n  color: #fff;\\n  letter-spacing: 0;\\n  font-weight: 700;\\n  font-size: 14px;\\n  line-height: 1.29;\\n  -webkit-transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1); }\\n  .nav-link:hover, .nav-link:focus {\\n    color: #d41443; }\\n  @media screen and (min-width: 1200px) {\\n    .nav-link {\\n      padding-top: 10px;\\n      font-size: 16px;\\n      line-height: 1.31; } }\\n\\n@media screen and (max-width: 1199px) {\\n  .nav-item:not(:last-child) {\\n    margin-bottom: 22px; } }\\n\\n.menu-box {\\n  z-index: 9;\\n  -webkit-transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1), opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1), opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1); }\\n  @media screen and (max-width: 1199px) {\\n    .menu-box {\\n      opacity: 0;\\n      position: absolute;\\n      -webkit-box-shadow: -8px 0px 20px rgba(0, 0, 0, 0.25);\\n              box-shadow: -8px 0px 20px rgba(0, 0, 0, 0.25);\\n      background-color: #e17992; } }\\n  @media screen and (max-width: 767px) {\\n    .menu-box {\\n      top: -6px;\\n      -webkit-transform: translateX(130%);\\n              transform: translateX(130%);\\n      width: 250px;\\n      height: 502px;\\n      padding-top: 58px;\\n      padding-left: 21px; } }\\n  @media screen and (min-width: 768px) and (max-width: 1199px) {\\n    .menu-box {\\n      z-index: 9;\\n      top: -37px;\\n      -webkit-transform: translateX(300%);\\n              transform: translateX(300%);\\n      width: 254px;\\n      height: 1020px;\\n      padding-top: 60px;\\n      padding-left: 24px; } }\\n  @media screen and (max-width: 1199px) {\\n    .menu-box .buynow-btn--hidden {\\n      display: none; }\\n    .menu-box nav {\\n      display: none; } }\\n  @media screen and (min-width: 1200px) {\\n    .menu-box {\\n      display: -webkit-box;\\n      display: -ms-flexbox;\\n      display: flex;\\n      -webkit-box-orient: horizontal;\\n      -webkit-box-direction: reverse;\\n          -ms-flex-direction: row-reverse;\\n              flex-direction: row-reverse;\\n      margin-right: 0;\\n      margin-left: auto;\\n      -webkit-box-align: center;\\n          -ms-flex-align: center;\\n              align-items: center; } }\\n\\n.menu-box.is-opened {\\n  display: block;\\n  opacity: 1;\\n  -webkit-transform: translateX(20%);\\n          transform: translateX(20%); }\\n  @media screen and (min-width: 768px) and (max-width: 1199px) {\\n    .menu-box.is-opened {\\n      -webkit-transform: translateX(190%);\\n              transform: translateX(190%); } }\\n  @media screen and (max-width: 1199px) {\\n    .menu-box.is-opened .buynow-btn--hidden {\\n      display: block; }\\n    .menu-box.is-opened nav {\\n      display: block; } }\\n\\n.hero-container {\\n  position: relative;\\n  padding-top: 6px;\\n  height: 502px; }\\n  @media screen and (min-width: 768px) {\\n    .hero-container {\\n      padding-top: 37px;\\n      height: 399px; } }\\n  @media screen and (min-width: 1200px) {\\n    .hero-container {\\n      height: 665px; } }\\n\\n.hero {\\n  overflow: hidden;\\n  width: 100%;\\n  background-color: #ffb8ca; }\\n\\n.header-logo {\\n  display: -webkit-inline-box;\\n  display: -ms-inline-flexbox;\\n  display: inline-flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center; }\\n  .header-logo__text {\\n    font-family: Titan One;\\n    color: #d41443;\\n    text-transform: uppercase;\\n    font-size: 26px;\\n    line-height: 1.15;\\n    margin-left: 20px; }\\n  @media screen and (min-width: 1200px) {\\n    .header-logo {\\n      position: absolute;\\n      left: -70px;\\n      top: 0; } }\\n\\n.page-title {\\n  position: absolute;\\n  top: 193px;\\n  z-index: 2;\\n  font-family: Titan One;\\n  font-size: 26px;\\n  line-height: 1.15;\\n  text-transform: uppercase;\\n  color: #ffffff;\\n  width: 218px;\\n  margin-top: 0;\\n  margin-bottom: 0; }\\n  @media screen and (min-width: 768px) {\\n    .page-title {\\n      width: 162px;\\n      height: 80px;\\n      left: 34px;\\n      top: 102px;\\n      font-size: 22px;\\n      line-height: 1.14; } }\\n  @media screen and (min-width: 1200px) {\\n    .page-title {\\n      width: 277px;\\n      height: 137px;\\n      left: 77px;\\n      top: 171px;\\n      font-size: 38px;\\n      line-height: 1.13; } }\\n  .page-title__accented {\\n    font-size: 48px;\\n    line-height: 0.96;\\n    color: #d41443; }\\n    @media screen and (min-width: 768px) {\\n      .page-title__accented {\\n        font-size: 34px;\\n        line-height: 1.09; } }\\n    @media screen and (min-width: 1200px) {\\n      .page-title__accented {\\n        font-size: 58px;\\n        line-height: 0.91; } }\\n\\n.icecream-box {\\n  position: absolute;\\n  right: 32px;\\n  bottom: 0;\\n  z-index: 1; }\\n  @media screen and (min-width: 768px) {\\n    .icecream-box {\\n      width: 143px;\\n      height: 336px;\\n      left: 378px;\\n      top: 63px; } }\\n  @media screen and (min-width: 1200px) {\\n    .icecream-box {\\n      width: 236px;\\n      height: 557px;\\n      left: 524px;\\n      top: 108px; } }\\n  .icecream-box::before {\\n    display: inline-block;\\n    content: '';\\n    z-index: -5;\\n    position: absolute;\\n    top: -9px;\\n    left: -81px;\\n    display: inline-block;\\n    width: 346px;\\n    height: 344px;\\n    border-radius: 50%;\\n    background-color: #ffa5ba; }\\n    @media screen and (min-width: 768px) {\\n      .icecream-box::before {\\n        width: 324px;\\n        height: 322px;\\n        left: -71px;\\n        top: -32px; } }\\n    @media screen and (min-width: 1200px) {\\n      .icecream-box::before {\\n        width: 538px;\\n        height: 538px;\\n        left: -119px;\\n        top: -56px; } }\\n\\n.header-buttons__container {\\n  position: absolute;\\n  top: 318px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  z-index: 5; }\\n  @media screen and (min-width: 768px) {\\n    .header-buttons__container {\\n      top: 202px; } }\\n  @media screen and (min-width: 1200px) {\\n    .header-buttons__container {\\n      top: 334px;\\n      left: 77px; } }\\n\\n.hero-prod__btn {\\n  border: none;\\n  padding: 0;\\n  border-radius: 22px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  height: 44px;\\n  -webkit-transition-property: background-color;\\n  transition-property: background-color;\\n  -webkit-transition-duration: 250ms;\\n          transition-duration: 250ms;\\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n  background-color: #d41443;\\n  color: #fff;\\n  cursor: pointer;\\n  font-size: 8px;\\n  line-height: 1.25;\\n  margin-right: 8px;\\n  width: 63px;\\n  height: 24px; }\\n  .hero-prod__btn:hover, .hero-prod__btn:focus {\\n    background-color: #c7133e; }\\n  @media screen and (min-width: 768px) {\\n    .hero-prod__btn {\\n      width: 61.2px;\\n      height: 24px; } }\\n  @media screen and (min-width: 1200px) {\\n    .hero-prod__btn {\\n      font-size: 14px;\\n      line-height: 1.29;\\n      width: 102px;\\n      height: 40px; } }\\n\\n.hero-made__btn {\\n  border: none;\\n  padding: 0;\\n  border-radius: 22px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  height: 44px;\\n  -webkit-transition-property: background-color;\\n  transition-property: background-color;\\n  -webkit-transition-duration: 250ms;\\n          transition-duration: 250ms;\\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n  background-color: #fff;\\n  color: #d41443;\\n  cursor: pointer;\\n  font-size: 8px;\\n  line-height: 1.25;\\n  width: 83px;\\n  height: 24px; }\\n  .hero-made__btn:hover, .hero-made__btn:focus {\\n    background-color: #ecebeb; }\\n  @media screen and (min-width: 768px) {\\n    .hero-made__btn {\\n      width: 82.8px;\\n      height: 24px; } }\\n  @media screen and (min-width: 1200px) {\\n    .hero-made__btn {\\n      font-size: 14px;\\n      line-height: 1.29;\\n      width: 138px;\\n      height: 40px; } }\\n\\n.milk-box {\\n  display: none; }\\n  @media screen and (min-width: 768px) {\\n    .milk-box {\\n      display: block;\\n      position: absolute;\\n      width: 124px;\\n      height: 126px;\\n      left: 34px;\\n      top: 245px; } }\\n  @media screen and (min-width: 1200px) {\\n    .milk-box {\\n      width: 188px;\\n      height: 191px;\\n      left: 27px;\\n      top: 429px; } }\\n\\n.hero-text {\\n  display: none;\\n  margin: 0; }\\n  @media screen and (min-width: 768px) {\\n    .hero-text {\\n      display: block;\\n      position: absolute;\\n      width: 114px;\\n      left: 154px;\\n      top: 292px;\\n      letter-spacing: 0;\\n      font-size: 8px;\\n      line-height: 150%;\\n      color: #ffffff; } }\\n  @media screen and (min-width: 1200px) {\\n    .hero-text {\\n      font-size: 14px;\\n      line-height: 140%;\\n      width: 200px;\\n      left: 235px;\\n      top: 485px; } }\\n\\n.arrow-box {\\n  display: none;\\n  border-radius: 50%;\\n  background-color: #fff; }\\n  @media screen and (min-width: 768px) {\\n    .arrow-box {\\n      display: -webkit-box;\\n      display: -ms-flexbox;\\n      display: flex;\\n      -webkit-box-pack: center;\\n          -ms-flex-pack: center;\\n              justify-content: center;\\n      -webkit-box-align: center;\\n          -ms-flex-align: center;\\n              align-items: center;\\n      position: absolute;\\n      width: 18px;\\n      height: 18px;\\n      top: 347px;\\n      left: 154px; } }\\n  @media screen and (min-width: 1200px) {\\n    .arrow-box {\\n      width: 26px;\\n      height: 26px;\\n      left: 235px;\\n      top: 583px; } }\\n\\n.woman-box {\\n  display: none;\\n  z-index: 5; }\\n  @media screen and (min-width: 768px) {\\n    .woman-box {\\n      display: block;\\n      position: absolute;\\n      width: 168px;\\n      height: 133px;\\n      left: 566px;\\n      top: 266px; } }\\n  @media screen and (min-width: 1200px) {\\n    .woman-box {\\n      width: 293px;\\n      height: 232px;\\n      left: 803px;\\n      top: 433px; } }\\n\\n.cafe16 {\\n  display: none;\\n  z-index: 5;\\n  margin: 0; }\\n  @media screen and (min-width: 768px) {\\n    .cafe16 {\\n      display: block;\\n      position: absolute;\\n      height: 32px;\\n      right: 34px;\\n      top: 96px;\\n      font-family: Titan One;\\n      font-size: 28px;\\n      line-height: 1.14;\\n      text-transform: uppercase;\\n      color: #d41443; } }\\n  @media screen and (min-width: 1200px) {\\n    .cafe16 {\\n      height: 53px;\\n      top: 160px;\\n      right: 77px;\\n      font-size: 46px;\\n      line-height: 1.15; } }\\n\\n.cafe {\\n  margin: 0;\\n  display: none; }\\n  .cafe::before {\\n    position: absolute;\\n    top: -35px;\\n    right: -5px;\\n    z-index: 0;\\n    content: '';\\n    width: 16px;\\n    height: 16px;\\n    border-radius: 50%;\\n    background-color: #fff; }\\n    @media screen and (min-width: 1200px) {\\n      .cafe::before {\\n        width: 30px;\\n        height: 30px;\\n        top: -60px;\\n        right: -10px; } }\\n  @media screen and (min-width: 768px) {\\n    .cafe {\\n      display: block;\\n      position: absolute;\\n      height: 10px;\\n      right: 34px;\\n      top: 128px;\\n      font-size: 8px;\\n      line-height: 1.25;\\n      color: #ffffff; } }\\n  @media screen and (min-width: 1200px) {\\n    .cafe {\\n      height: 18px;\\n      top: 215px;\\n      right: 77px;\\n      font-size: 14px;\\n      line-height: 1.29; } }\\n\\n.food23 {\\n  display: none;\\n  z-index: 5;\\n  margin: 0; }\\n  @media screen and (min-width: 768px) {\\n    .food23 {\\n      display: block;\\n      position: absolute;\\n      height: 32px;\\n      right: 34px;\\n      top: 152px;\\n      font-family: Titan One;\\n      font-size: 28px;\\n      line-height: 1.14;\\n      text-transform: uppercase;\\n      color: #d41443; } }\\n  @media screen and (min-width: 1200px) {\\n    .food23 {\\n      height: 53px;\\n      top: 251px;\\n      right: 77px;\\n      font-size: 46px;\\n      line-height: 1.15; } }\\n\\n.food {\\n  margin: 0;\\n  display: none; }\\n  .food::before {\\n    position: absolute;\\n    top: -35px;\\n    right: -5px;\\n    z-index: 0;\\n    content: '';\\n    width: 16px;\\n    height: 16px;\\n    border-radius: 50%;\\n    background-color: #fff; }\\n    @media screen and (min-width: 1200px) {\\n      .food::before {\\n        width: 30px;\\n        height: 30px;\\n        top: -60px;\\n        right: -10px; } }\\n  @media screen and (min-width: 768px) {\\n    .food {\\n      display: block;\\n      position: absolute;\\n      height: 10px;\\n      right: 34px;\\n      top: 184px;\\n      font-size: 8px;\\n      line-height: 1.25;\\n      color: #ffffff; } }\\n  @media screen and (min-width: 1200px) {\\n    .food {\\n      height: 18px;\\n      top: 306px;\\n      right: 77px;\\n      font-size: 14px;\\n      line-height: 1.29; } }\\n\\n.header-arrow {\\n  fill: #d41443; }\\n\\n.products {\\n  padding-top: 70px;\\n  padding-bottom: 70px; }\\n  @media screen and (min-width: 768px) and (max-width: 1199px) {\\n    .products {\\n      padding-top: 70px;\\n      padding-bottom: 70px; } }\\n  @media screen and (min-width: 1200px) {\\n    .products {\\n      padding-top: 70px;\\n      padding-bottom: 70px; } }\\n\\n.product {\\n  position: relative;\\n  -webkit-transition-property: -webkit-transform;\\n  transition-property: -webkit-transform;\\n  transition-property: transform;\\n  transition-property: transform, -webkit-transform;\\n  -webkit-transition-duration: 250ms;\\n          transition-duration: 250ms;\\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n  border-radius: 24px;\\n  text-align: center; }\\n  .product:first-child {\\n    background-color: #ffb8ca; }\\n  .product:nth-child(2) {\\n    background-color: #f0d1a5; }\\n  .product:last-child {\\n    background-color: #c2e297; }\\n  .product:hover {\\n    -webkit-transform: scale(1.07);\\n            transform: scale(1.07); }\\n  @media screen and (max-width: 767px) {\\n    .product {\\n      width: 280px;\\n      padding-bottom: 41px;\\n      padding-top: 161px;\\n      padding-left: 40px;\\n      padding-right: 40px; }\\n      .product:not(:last-child) {\\n        margin-bottom: 130px; } }\\n  @media screen and (min-width: 768px) and (max-width: 1199px) {\\n    .product {\\n      width: 220px;\\n      padding-bottom: 40px;\\n      padding-top: 152px;\\n      padding-left: 11px;\\n      padding-right: 11px; } }\\n  @media screen and (min-width: 1200px) {\\n    .product {\\n      width: 335px;\\n      padding-bottom: 50px;\\n      padding-top: 163px;\\n      padding-left: 44px;\\n      padding-right: 44px; } }\\n\\n.products .section-subtitle {\\n  display: block;\\n  margin-bottom: 15px; }\\n  @media screen and (max-width: 767px) {\\n    .products .section-subtitle {\\n      font-size: 18px;\\n      line-height: 21px; } }\\n  @media screen and (min-width: 768px) and (max-width: 1199px) {\\n    .products .section-subtitle {\\n      font-size: 26px;\\n      line-height: 30px; } }\\n  @media screen and (min-width: 1200px) {\\n    .products .section-subtitle {\\n      font-size: 30px;\\n      line-height: 34px;\\n      letter-spacing: 0.04em; } }\\n\\n.products .section__title {\\n  margin-left: auto;\\n  margin-right: auto;\\n  width: 200px; }\\n  @media screen and (max-width: 767px) {\\n    .products .section__title {\\n      margin-bottom: 144px;\\n      font-size: 34px;\\n      line-height: 39px;\\n      letter-spacing: 0.04em; } }\\n  @media screen and (min-width: 768px) and (max-width: 1199px) {\\n    .products .section__title {\\n      margin-bottom: 150px;\\n      font-size: 48px;\\n      line-height: 55px;\\n      letter-spacing: 0.04em;\\n      width: 283px; } }\\n  @media screen and (min-width: 1200px) {\\n    .products .section__title {\\n      margin-bottom: 259px;\\n      font-size: 58px;\\n      line-height: 66px;\\n      letter-spacing: 0.06em;\\n      width: 350px; } }\\n\\n.products-list {\\n  width: 100%;\\n  margin-left: auto;\\n  margin-right: auto; }\\n  @media screen and (min-width: 768px) {\\n    .products-list {\\n      display: -webkit-box;\\n      display: -ms-flexbox;\\n      display: flex;\\n      -webkit-box-pack: justify;\\n          -ms-flex-pack: justify;\\n              justify-content: space-between; } }\\n\\n.product-name {\\n  font-family: Titan One;\\n  font-size: 20px;\\n  line-height: 1.15;\\n  text-align: center;\\n  text-transform: uppercase;\\n  color: #ffffff;\\n  margin-top: 0;\\n  margin-bottom: 0; }\\n  @media screen and (min-width: 1200px) {\\n    .product-name {\\n      font-size: 30px;\\n      line-height: 34px;\\n      letter-spacing: 0.04em; } }\\n\\n.products-separator {\\n  width: 26px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between;\\n  margin-left: auto;\\n  margin-right: auto;\\n  margin-top: 30px; }\\n\\n.separation-circle {\\n  display: inline-block;\\n  width: 6px;\\n  height: 6px;\\n  border-radius: 50%;\\n  background-color: #fff; }\\n\\n.product-description {\\n  display: block;\\n  font-weight: 700;\\n  font-size: 14px;\\n  line-height: 1.52;\\n  letter-spacing: 0.04em;\\n  text-align: center;\\n  color: #ffffff; }\\n  @media screen and (max-width: 767px) {\\n    .product-description {\\n      margin-top: 30px;\\n      margin-bottom: 30px; } }\\n  @media screen and (min-width: 768px) and (max-width: 1199px) {\\n    .product-description {\\n      margin-top: 30px;\\n      margin-bottom: 40px;\\n      line-height: 1.76; } }\\n  @media screen and (min-width: 1200px) {\\n    .product-description {\\n      margin-top: 30px;\\n      margin-bottom: 62px;\\n      font-size: 16px;\\n      line-height: 1.76; } }\\n\\n.product-image__container {\\n  position: absolute;\\n  top: -116px;\\n  left: 16px; }\\n  @media screen and (min-width: 768px) and (max-width: 1199px) {\\n    .product-image__container {\\n      width: 100%;\\n      left: 0;\\n      top: -100px;\\n      height: 224; } }\\n  @media screen and (min-width: 1200px) {\\n    .product-image__container {\\n      width: 100%;\\n      left: 0;\\n      top: -200px;\\n      height: 335; } }\\n\\n.product-btn {\\n  border: none;\\n  padding: 0;\\n  background-color: #fff;\\n  border-radius: 50%;\\n  width: 40px;\\n  height: 40px; }\\n\\n.product-button {\\n  fill: #d41443; }\\n\\n@media screen {\\n  .dolore {\\n    display: none; } }\\n\\n.making-section {\\n  background-color: #fff5f6;\\n  background-repeat: no-repeat;\\n  background-position: center;\\n  background-size: contain; }\\n  @media screen and (max-width: 767px) {\\n    .making-section {\\n      padding-top: 125px;\\n      padding-bottom: 97px;\\n      background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \"); } }\\n  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2), screen and (max-width: 767px) and (min-resolution: 2dppx) {\\n    .making-section {\\n      background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \"); } }\\n  @media screen and (min-width: 768px) {\\n    .making-section {\\n      padding-top: 130px;\\n      padding-bottom: 242px; } }\\n  @media screen and (min-width: 1200px) {\\n    .making-section {\\n      padding-top: 125px;\\n      padding-bottom: 300px;\\n      background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \"); } }\\n  @media screen and (min-width: 1200px) and (-webkit-min-device-pixel-ratio: 2), screen and (min-width: 1200px) and (min-resolution: 2dppx) {\\n    .making-section {\\n      background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \"); } }\\n\\n.making-section .section__title {\\n  margin-bottom: 0;\\n  margin-top: 15px; }\\n\\n@media screen and (max-width: 767px) {\\n  .making-picture {\\n    margin-top: 26px; } }\\n\\n@media screen and (min-width: 768px) {\\n  .making-picture {\\n    width: 340px; } }\\n\\n@media screen and (min-width: 1200px) {\\n  .making-picture {\\n    width: 516px; } }\\n\\n@media screen and (min-width: 768px) {\\n  .flex-container {\\n    display: -webkit-box;\\n    display: -ms-flexbox;\\n    display: flex;\\n    margin-top: 50px; } }\\n\\n@media screen and (min-width: 1200px) {\\n  .flex-container {\\n    margin-top: 55px;\\n    -webkit-box-pack: center;\\n        -ms-flex-pack: center;\\n            justify-content: center; } }\\n\\n@media screen and (max-width: 767px) {\\n  .making-describe {\\n    padding: 0 30px;\\n    margin-top: 46px; } }\\n\\n@media screen and (min-width: 768px) {\\n  .making-describe {\\n    margin-top: 50px;\\n    margin-left: 17px;\\n    width: 343px; } }\\n\\n@media screen and (min-width: 1200px) {\\n  .making-describe {\\n    width: 463px;\\n    margin-top: 60px;\\n    margin-left: 74px; } }\\n\\n.making-describe p {\\n  font-weight: 500;\\n  font-style: normal;\\n  text-align: left; }\\n  @media screen and (max-width: 767px) {\\n    .making-describe p {\\n      font-size: 12px;\\n      line-height: 1.58; } }\\n  @media screen and (min-width: 768px) {\\n    .making-describe p {\\n      font-size: 14px;\\n      line-height: 1.79; } }\\n  @media screen and (max-width: 1199px) {\\n    .making-describe p {\\n      letter-spacing: normal; } }\\n  @media screen and (min-width: 1200px) {\\n    .making-describe p {\\n      line-height: 1.93; } }\\n\\n@media screen and (min-width: 768px) {\\n  .br {\\n    display: none; } }\\n\\n.making-describe .making-begin {\\n  color: #000000;\\n  display: block; }\\n  @media screen and (min-width: 1200px) {\\n    .making-describe .making-begin {\\n      font-size: 16px; } }\\n\\n.making-describe .making-middle {\\n  margin-top: 30px;\\n  color: #907e82; }\\n  @media screen and (min-width: 768px) {\\n    .making-describe .making-middle {\\n      letter-spacing: inherit; } }\\n  @media screen and (min-width: 1200px) {\\n    .making-describe .making-middle {\\n      margin-top: 35px; } }\\n\\n.making-describe .making-result {\\n  margin-top: 15px;\\n  color: #907e82; }\\n  @media screen and (min-width: 1200px) {\\n    .making-describe .making-result {\\n      margin-top: 30px; } }\\n\\n.making-button {\\n  border: none;\\n  padding: 0;\\n  border-radius: 22px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  height: 44px;\\n  -webkit-transition-property: background-color;\\n  transition-property: background-color;\\n  -webkit-transition-duration: 250ms;\\n          transition-duration: 250ms;\\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n  background-color: #fff;\\n  color: #d41443;\\n  cursor: pointer;\\n  margin-top: 20px;\\n  width: 176px;\\n  height: 44px;\\n  font-size: 14px;\\n  font-weight: 700;\\n  line-height: 1.29; }\\n  .making-button:hover, .making-button:focus {\\n    background-color: #ecebeb; }\\n  @media screen and (max-width: 767px) {\\n    .making-button {\\n      margin-top: 20px; } }\\n  @media screen and (min-width: 768px) {\\n    .making-button {\\n      margin-top: 55px; } }\\n  @media screen and (min-width: 1200px) {\\n    .making-button {\\n      margin-top: 40px; } }\\n\\n.making-arrow {\\n  stroke: #d41443;\\n  margin-left: 13px; }\\n\\n@media screen and (max-width: 767px) {\\n  .making-statistical {\\n    margin-top: 39px; } }\\n\\n@media screen and (min-width: 768px) {\\n  .making-statistical {\\n    display: -webkit-box;\\n    display: -ms-flexbox;\\n    display: flex;\\n    margin-top: 64px; } }\\n\\n@media screen and (min-width: 1200px) {\\n  .making-statistical {\\n    margin-top: 39px; } }\\n\\n.li-title,\\n.li-description {\\n  margin: 0; }\\n\\n.li-title {\\n  font-family: Titan One;\\n  font-style: normal;\\n  font-weight: 400;\\n  text-transform: uppercase;\\n  letter-spacing: 0.04em;\\n  color: #d41443; }\\n  @media screen and (max-width: 767px) {\\n    .li-title {\\n      font-size: 36px;\\n      line-height: 1.14; } }\\n  @media screen and (min-width: 768px) {\\n    .li-title {\\n      font-size: 48px;\\n      line-height: 1.15; } }\\n  @media screen and (min-width: 1200px) {\\n    .li-title {\\n      font-size: 58px;\\n      line-height: 1.14; } }\\n\\n.making-volume .li-title::before {\\n  content: \\\"\\\";\\n  width: 33px;\\n  height: 50px;\\n  display: block;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\n  background-size: contain; }\\n  @media screen and (max-width: 767px) {\\n    .making-volume .li-title::before {\\n      margin-bottom: 16px; } }\\n  @media screen and (min-width: 768px) {\\n    .making-volume .li-title::before {\\n      margin-bottom: 36px; } }\\n  @media screen and (min-width: 1200px) {\\n    .making-volume .li-title::before {\\n      margin-bottom: 40px; } }\\n\\n.making-weight .li-title::before {\\n  content: \\\"\\\";\\n  width: 50px;\\n  height: 50px;\\n  display: block;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \");\\n  background-size: contain; }\\n  @media screen and (max-width: 767px) {\\n    .making-weight .li-title::before {\\n      margin-bottom: 16px; } }\\n  @media screen and (min-width: 768px) {\\n    .making-weight .li-title::before {\\n      margin-bottom: 36px; } }\\n  @media screen and (min-width: 1200px) {\\n    .making-weight .li-title::before {\\n      margin-bottom: 40px; } }\\n\\n.making-number .li-title::before {\\n  content: \\\"\\\";\\n  width: 44px;\\n  height: 50px;\\n  display: block;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_6___ + \");\\n  background-size: contain; }\\n  @media screen and (max-width: 767px) {\\n    .making-number .li-title::before {\\n      margin-bottom: 16px; } }\\n  @media screen and (min-width: 768px) {\\n    .making-number .li-title::before {\\n      margin-bottom: 36px; } }\\n  @media screen and (min-width: 1200px) {\\n    .making-number .li-title::before {\\n      margin-bottom: 40px; } }\\n\\n.li-description {\\n  margin-top: 20px;\\n  font-weight: 700;\\n  color: #000000; }\\n  @media screen and (max-width: 767px) {\\n    .li-description {\\n      font-size: 12px;\\n      line-height: 1.67;\\n      width: 230px;\\n      letter-spacing: normal; } }\\n  @media screen and (min-width: 768px) {\\n    .li-description {\\n      font-size: 14px;\\n      line-height: 1.71;\\n      width: 180px;\\n      letter-spacing: normal; } }\\n  @media screen and (min-width: 1200px) {\\n    .li-description {\\n      font-size: 16px;\\n      line-height: 1.75;\\n      width: 330px;\\n      letter-spacing: 0.02em; } }\\n\\n@media screen and (max-width: 767px) {\\n  .making-statistical li + li {\\n    margin-top: 38px; } }\\n\\n@media screen and (min-width: 768px) {\\n  .making-statistical li + li {\\n    margin-left: 60px; } }\\n\\n@media screen and (min-width: 1200px) {\\n  .making-statistical li + li {\\n    margin-left: 30px; } }\\n\\n.reviews-gallery {\\n  margin-top: -43px; }\\n  @media screen and (min-width: 768px) {\\n    .reviews-gallery {\\n      margin-top: -96px; } }\\n  @media screen and (min-width: 1200px) {\\n    .reviews-gallery {\\n      margin-top: -145px; } }\\n\\n/* Лента слайдов */\\n.slick-track {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center; }\\n\\n.slider {\\n  position: relative;\\n  overflow: hidden;\\n  margin-top: 80px; }\\n  @media screen and (min-width: 768px) {\\n    .slider {\\n      margin-top: 120px; } }\\n  @media screen and (min-width: 1200px) {\\n    .slider {\\n      margin-top: 125px; } }\\n\\n.slider .slick-arrow {\\n  position: absolute;\\n  bottom: 50%;\\n  padding: 0;\\n  margin: 0;\\n  font-size: 0;\\n  z-index: 10;\\n  width: 35px;\\n  height: 35px;\\n  border-radius: 4px;\\n  border: 1px solid #fff5f6;\\n  outline: none;\\n  cursor: pointer; }\\n\\n.slider .slick-arrow.slick-prev {\\n  left: 0;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_7___ + \");\\n  background-color: transparent;\\n  -webkit-transform: scale(1);\\n          transform: scale(1);\\n  -webkit-transition: -webkit-transform 600ms cubic-bezier(0.075, 0.82, 0.165, 1);\\n  transition: -webkit-transform 600ms cubic-bezier(0.075, 0.82, 0.165, 1);\\n  transition: transform 600ms cubic-bezier(0.075, 0.82, 0.165, 1);\\n  transition: transform 600ms cubic-bezier(0.075, 0.82, 0.165, 1), -webkit-transform 600ms cubic-bezier(0.075, 0.82, 0.165, 1); }\\n  .slider .slick-arrow.slick-prev:hover {\\n    -webkit-transform: scale(1.3);\\n            transform: scale(1.3); }\\n  .slider .slick-arrow.slick-prev:focus {\\n    -webkit-transform: scale(1.3);\\n            transform: scale(1.3); }\\n\\n.slider .slick-arrow.slick-next {\\n  right: 0;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_8___ + \");\\n  background-color: transparent;\\n  -webkit-transform: scale(1);\\n          transform: scale(1);\\n  -webkit-transition: -webkit-transform 600ms cubic-bezier(0.075, 0.82, 0.165, 1);\\n  transition: -webkit-transform 600ms cubic-bezier(0.075, 0.82, 0.165, 1);\\n  transition: transform 600ms cubic-bezier(0.075, 0.82, 0.165, 1);\\n  transition: transform 600ms cubic-bezier(0.075, 0.82, 0.165, 1), -webkit-transform 600ms cubic-bezier(0.075, 0.82, 0.165, 1); }\\n  .slider .slick-arrow.slick-next:hover {\\n    -webkit-transform: scale(1.3);\\n            transform: scale(1.3); }\\n  .slider .slick-arrow.slick-next:focus {\\n    -webkit-transform: scale(1.3);\\n            transform: scale(1.3); }\\n\\n.slider .slick-dots {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  padding-left: 0;\\n  margin-top: 0;\\n  margin-bottom: 0; }\\n  .slider .slick-dots li:not(:last-child) {\\n    margin-right: 18px; }\\n  .slider .slick-dots li {\\n    width: 12px;\\n    height: 12px;\\n    display: -webkit-inline-box;\\n    display: -ms-inline-flexbox;\\n    display: inline-flex; }\\n\\n.slick-dots li button {\\n  font-size: 0;\\n  width: 100%;\\n  height: 100%;\\n  border-radius: 50%;\\n  padding: 0;\\n  cursor: pointer;\\n  border-color: transparent;\\n  background-color: #d9d9d9;\\n  outline: none;\\n  -webkit-transform: scale(1);\\n          transform: scale(1);\\n  -webkit-transition: -webkit-transform 300ms cubic-bezier(0.075, 0.82, 0.165, 1);\\n  transition: -webkit-transform 300ms cubic-bezier(0.075, 0.82, 0.165, 1);\\n  transition: transform 300ms cubic-bezier(0.075, 0.82, 0.165, 1);\\n  transition: transform 300ms cubic-bezier(0.075, 0.82, 0.165, 1), -webkit-transform 300ms cubic-bezier(0.075, 0.82, 0.165, 1); }\\n\\n.slick-dots li.slick-active button {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_9___ + \");\\n  background-repeat: no-repeat;\\n  background-position: center;\\n  background-color: transparent;\\n  border-radius: 20%;\\n  -webkit-transform: scale(1.2);\\n          transform: scale(1.2); }\\n\\n.slider__item .text-box {\\n  position: relative;\\n  max-width: 926px;\\n  min-height: 138px;\\n  margin: 0 auto;\\n  padding: 40px 57px; }\\n\\n.slider__item .text-slide {\\n  margin: 0;\\n  background-image: repeating-linear-gradient(0deg, #e1e1e1 0,#e1e1e1 1px, transparent 1px, transparent 31px);\\n  background-image: repeating-linear-gradient(0deg, #e1e1e1 0 1px, transparent 1px 31px);\\n  font-weight: 500;\\n  font-size: 12px;\\n  line-height: 265%;\\n  text-align: center; }\\n  @media screen and (min-width: 768px) {\\n    .slider__item .text-slide {\\n      font-size: 14px;\\n      line-height: 216%; } }\\n  @media screen and (min-width: 1200px) {\\n    .slider__item .text-slide {\\n      font-size: 16px;\\n      line-height: 186%; } }\\n\\n.text-box::before {\\n  position: absolute;\\n  left: 50px;\\n  top: 25px;\\n  content: '';\\n  display: block;\\n  width: 54px;\\n  height: 40px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_10___ + \");\\n  z-index: -1; }\\n\\n.slider__item .points {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  margin: 15px 0; }\\n\\n.points > .points-icon {\\n  display: block;\\n  width: 8px;\\n  height: 8px;\\n  border-radius: 50%;\\n  background-color: #c7133e; }\\n  .points > .points-icon:not(:last-child) {\\n    margin-right: 10px; }\\n\\n.slider__item .slide-subtitle {\\n  font-weight: 500;\\n  font-size: 20px;\\n  line-height: 186%; }\\n  .slider__item .slide-subtitle .slide-subtitle-item {\\n    margin-top: 0;\\n    margin-bottom: 35px;\\n    text-align: center; }\\n\\n.slider__item img {\\n  margin: 0 auto;\\n  width: 85px;\\n  height: 85px; }\\n\\n.schedule {\\n  position: relative;\\n  color: #907e82;\\n  font-weight: 500;\\n  font-size: 12px;\\n  line-height: 1.5;\\n  padding-top: 86px;\\n  padding-bottom: 113px; }\\n  @media screen and (min-width: 768px) {\\n    .schedule {\\n      padding-top: 119px;\\n      padding-bottom: 158px; } }\\n  @media screen and (min-width: 1200px) {\\n    .schedule {\\n      padding-top: 132px;\\n      padding-bottom: 165px; } }\\n\\n.container-schedule {\\n  margin-left: auto;\\n  margin-right: auto;\\n  position: relative;\\n  z-index: 2; }\\n  @media screen and (max-width: 319px) {\\n    .container-schedule {\\n      max-width: 320px;\\n      padding: 0 50px; } }\\n  @media screen and (min-width: 320px) {\\n    .container-schedule {\\n      width: 320px;\\n      padding: 0 50px; } }\\n  @media screen and (min-width: 768px) {\\n    .container-schedule {\\n      width: 768px;\\n      padding: 0 36px; } }\\n  @media screen and (min-width: 1200px) {\\n    .container-schedule {\\n      width: 1200px;\\n      padding: 0 115px; } }\\n\\n.schedule::before {\\n  content: '';\\n  position: absolute;\\n  bottom: 0;\\n  left: 0;\\n  display: inline-block;\\n  background-color: #fff5f6;\\n  z-index: 1;\\n  width: 100%;\\n  height: 1515px; }\\n  @media screen and (min-width: 768px) {\\n    .schedule::before {\\n      height: 658px; } }\\n  @media screen and (min-width: 1200px) {\\n    .schedule::before {\\n      height: 650px;\\n      background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_11___ + \");\\n      background-repeat: no-repeat;\\n      background-size: contain;\\n      background-position: top; } }\\n\\n.schedule-item {\\n  padding-bottom: 25px;\\n  margin-bottom: 25px;\\n  border-bottom: 1px solid #e1e1e1; }\\n  @media screen and (min-width: 768px) {\\n    .schedule-item {\\n      padding-bottom: 30px;\\n      margin-bottom: 30px; } }\\n  .schedule-item:nth-child(3n) {\\n    padding-bottom: 0;\\n    margin-bottom: 0;\\n    border-bottom: 0; }\\n\\n.card-title {\\n  display: inline-block;\\n  border-radius: 4px;\\n  color: #ffffff;\\n  background-color: #f0d1a5;\\n  margin-bottom: 25px;\\n  margin-top: 0;\\n  padding: 0 25px;\\n  font-weight: 500;\\n  font-size: 12px;\\n  line-height: 1.86; }\\n  @media screen and (min-width: 768px) {\\n    .card-title {\\n      margin-bottom: 30px; } }\\n\\n.schedule-cards {\\n  margin-bottom: 54px; }\\n  @media screen and (min-width: 768px) {\\n    .schedule-cards {\\n      display: -webkit-box;\\n      display: -ms-flexbox;\\n      display: flex;\\n      margin-bottom: 81px; } }\\n  @media screen and (min-width: 1200px) {\\n    .schedule-cards {\\n      -webkit-box-pack: center;\\n          -ms-flex-pack: center;\\n              justify-content: center;\\n      margin-bottom: 86px; } }\\n\\n.schedule-card {\\n  background: #ffffff;\\n  -webkit-box-shadow: 0px 8px 30px rgba(212, 20, 67, 0.1);\\n          box-shadow: 0px 8px 30px rgba(212, 20, 67, 0.1);\\n  border-radius: 24px;\\n  width: 220px;\\n  padding: 43px 20px;\\n  -webkit-transition-property: -webkit-transform;\\n  transition-property: -webkit-transform;\\n  transition-property: transform;\\n  transition-property: transform, -webkit-transform;\\n  -webkit-transition-duration: 250ms;\\n          transition-duration: 250ms;\\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\\n  .schedule-card:nth-child(2) .card-title {\\n    background-color: #c2e297; }\\n  @media screen and (max-width: 767px) {\\n    .schedule-card:not(:last-child) {\\n      margin-bottom: 20px; } }\\n  .schedule-card:hover {\\n    -webkit-transform: scale(1.07);\\n            transform: scale(1.07); }\\n  @media screen and (min-width: 768px) {\\n    .schedule-card {\\n      padding: 50px 31px; }\\n      .schedule-card:not(:last-child) {\\n        margin-right: 20px; } }\\n  @media screen and (min-width: 1200px) {\\n    .schedule-card {\\n      width: 330px;\\n      padding: 51px 43px 62px;\\n      margin-right: 30px;\\n      -webkit-transition-property: -webkit-transform;\\n      transition-property: -webkit-transform;\\n      transition-property: transform;\\n      transition-property: transform, -webkit-transform;\\n      -webkit-transition-duration: 250ms;\\n              transition-duration: 250ms;\\n      -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n              transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\\n      .schedule-card:nth-child(3n) {\\n        margin-right: 0; }\\n      .schedule-card:hover {\\n        -webkit-transform: scale(1.07);\\n                transform: scale(1.07); } }\\n\\n.item-city {\\n  display: block;\\n  color: black;\\n  font-size: 12px;\\n  line-height: 1.86;\\n  margin-top: 0;\\n  margin-bottom: 10px; }\\n  @media screen and (min-width: 768px) {\\n    .item-city {\\n      font-size: 14px; } }\\n  @media screen and (min-width: 1200px) {\\n    .item-city {\\n      font-size: 16px; } }\\n\\n.item-title {\\n  color: black;\\n  line-height: 1.86;\\n  margin: 0; }\\n  @media screen and (min-width: 768px) {\\n    .item-title {\\n      font-size: 14px; } }\\n  @media screen and (min-width: 1200px) {\\n    .item-title {\\n      font-size: 16px; } }\\n\\n.paragraph-time {\\n  color: #ffa5ba;\\n  line-height: 1.83;\\n  margin: 0; }\\n  @media screen and (min-width: 768px) {\\n    .paragraph-time {\\n      font-size: 14px;\\n      line-height: 1.86; } }\\n  @media screen and (min-width: 1200px) {\\n    .paragraph-time {\\n      font-size: 16px;\\n      line-height: 1.87; } }\\n  .paragraph-time--first {\\n    margin-bottom: 10px; }\\n\\n.paragraph-address {\\n  color: #907e82;\\n  font-weight: 500;\\n  margin: 0; }\\n  @media screen and (min-width: 768px) {\\n    .paragraph-address {\\n      font-size: 14px;\\n      line-height: 1.86; } }\\n  @media screen and (min-width: 1200px) {\\n    .paragraph-address {\\n      font-size: 16px;\\n      line-height: 1.81; } }\\n\\n@media screen and (max-width: 767px) {\\n  .schedule-buttons {\\n    width: 161px;\\n    margin-left: auto;\\n    margin-right: auto; } }\\n\\n@media screen and (min-width: 768px) {\\n  .schedule-buttons {\\n    display: -webkit-box;\\n    display: -ms-flexbox;\\n    display: flex;\\n    -webkit-box-pack: center;\\n        -ms-flex-pack: center;\\n            justify-content: center; } }\\n\\n.schedule-button:nth-child(2n) {\\n  margin-bottom: 0; }\\n\\n@media screen and (max-width: 767px) {\\n  .schedule-button:first-child {\\n    margin-bottom: 10px; } }\\n\\n@media screen and (min-width: 768px) {\\n  .schedule-button:first-child {\\n    margin-right: 15px; } }\\n\\n.schedule-locations_btn {\\n  border: none;\\n  padding: 0;\\n  border-radius: 22px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  height: 44px;\\n  -webkit-transition-property: background-color;\\n  transition-property: background-color;\\n  -webkit-transition-duration: 250ms;\\n          transition-duration: 250ms;\\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n  background-color: #d41443;\\n  color: #fff;\\n  cursor: pointer;\\n  width: 161px; }\\n  .schedule-locations_btn:hover, .schedule-locations_btn:focus {\\n    background-color: #c7133e; }\\n  @media screen and (min-width: 768px) {\\n    .schedule-locations_btn {\\n      width: 191px; } }\\n  @media screen and (min-width: 1200px) {\\n    .schedule-locations_btn {\\n      width: 198px; } }\\n\\n.schedule-franshise_btn {\\n  border: none;\\n  padding: 0;\\n  border-radius: 22px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  height: 44px;\\n  -webkit-transition-property: background-color;\\n  transition-property: background-color;\\n  -webkit-transition-duration: 250ms;\\n          transition-duration: 250ms;\\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n  background-color: #fff;\\n  color: #d41443;\\n  cursor: pointer;\\n  width: 161px; }\\n  .schedule-franshise_btn:hover, .schedule-franshise_btn:focus {\\n    background-color: #ecebeb; }\\n  @media screen and (min-width: 768px) {\\n    .schedule-franshise_btn {\\n      width: 174px; } }\\n  @media screen and (min-width: 1200px) {\\n    .schedule-franshise_btn {\\n      width: 180px; } }\\n\\n.button-schedule {\\n  font-weight: 700;\\n  font-size: 16px;\\n  line-height: 1.31; }\\n\\n.schedule-arrow {\\n  margin-left: 15px;\\n  stroke: currentColor; }\\n  .schedule-arrow--white {\\n    stroke: #ffffff; }\\n\\n.footer-bg {\\n  background-color: #fff5f6; }\\n\\n@media screen and (min-width: 768px) {\\n  .footer-bg .container {\\n    display: -webkit-box;\\n    display: -ms-flexbox;\\n    display: flex; } }\\n\\n.footer-bg .box-inner {\\n  margin-bottom: 43px; }\\n  @media screen and (min-width: 768px) {\\n    .footer-bg .box-inner {\\n      width: 300px;\\n      display: inline-block;\\n      margin-left: auto;\\n      margin-bottom: 0; } }\\n  @media screen and (min-width: 1200px) {\\n    .footer-bg .box-inner {\\n      width: 335px; } }\\n\\n.footer-subtitle {\\n  display: block;\\n  margin-bottom: 16px;\\n  font-size: 18px;\\n  color: #ffa5ba; }\\n  @media screen and (min-width: 768px) {\\n    .footer-subtitle {\\n      font-size: 26px; } }\\n  @media screen and (min-width: 1200px) {\\n    .footer-subtitle {\\n      font-size: 30px; } }\\n\\n.footer-title {\\n  max-width: 234px;\\n  margin-top: 0;\\n  margin-bottom: 43px;\\n  font-family: Titan One;\\n  font-size: 34px;\\n  font-weight: 400;\\n  line-height: 1.14;\\n  text-transform: uppercase;\\n  color: #d41443; }\\n  @media screen and (min-width: 768px) {\\n    .footer-title {\\n      max-width: 340px;\\n      margin-bottom: 91px;\\n      font-size: 48px; } }\\n  @media screen and (min-width: 1200px) {\\n    .footer-title {\\n      max-width: 474px;\\n      margin-bottom: 97px;\\n      font-size: 58px; } }\\n\\n.footer-social {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: end;\\n      -ms-flex-pack: end;\\n          justify-content: flex-end;\\n  margin-bottom: 46px; }\\n\\n.footer-social .social-link:hover,\\n.footer-social .social-link:focus {\\n  background-color: #d41443; }\\n\\n.footer-social .social-list:not(:last-child) {\\n  margin-right: 28px; }\\n\\n.footer-social .social-link {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  width: 32px;\\n  height: 32px;\\n  border-radius: 50%;\\n  background-color: #fea5bb;\\n  -webkit-transition-property: background-color;\\n  transition-property: background-color;\\n  -webkit-transition-duration: 250ms;\\n          transition-duration: 250ms;\\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\\n\\n.footer-social .social-item {\\n  fill: #ffffff;\\n  display: block;\\n  width: 20px;\\n  height: 20px; }\\n\\n.footer-address {\\n  display: block; }\\n\\n.footer-contact {\\n  display: block;\\n  text-align: right;\\n  font-style: normal;\\n  font-size: 12px; }\\n  @media screen and (min-width: 768px) {\\n    .footer-contact {\\n      font-size: 14px; } }\\n  @media screen and (min-width: 1200px) {\\n    .footer-contact {\\n      font-size: 16px; } }\\n\\n.footer-contact .contact-link {\\n  font-weight: 700;\\n  line-height: 1.83;\\n  color: #d41443; }\\n\\n.footer-copy {\\n  margin-top: 0;\\n  margin-bottom: 0;\\n  padding-bottom: 25px;\\n  padding-top: 22px;\\n  border-top: 1px solid #e1e1e1;\\n  font-weight: 700;\\n  font-size: 14px;\\n  line-height: 1.5;\\n  text-align: center;\\n  color: #907e82; }\\n  @media screen and (min-width: 768px) {\\n    .footer-copy {\\n      padding-bottom: 18px;\\n      padding-top: 29px; } }\\n  @media screen and (min-width: 1200px) {\\n    .footer-copy {\\n      padding-bottom: 10px;\\n      padding-top: 10px; } }\\n\\n.footer-copy .text {\\n  display: inline-block;\\n  width: 150px; }\\n  @media screen and (min-width: 768px) {\\n    .footer-copy .text {\\n      width: 300px; } }\\n\\n.backUp {\\n  z-index: 10;\\n  position: fixed;\\n  bottom: 20px;\\n  right: 20px;\\n  background-color: #ffa5ba;\\n  border: none;\\n  border-radius: 24px;\\n  font-family: Titan One;\\n  font-size: 20px;\\n  padding: 10px;\\n  color: #fff;\\n  -webkit-box-shadow: -8px 0px 20px rgba(0, 0, 0, 0.25);\\n          box-shadow: -8px 0px 20px rgba(0, 0, 0, 0.25); }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://ice-cream-project/./src/sass/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n    module.hot.accept(\n      /*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss\",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss\");\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://ice-cream-project/./src/sass/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://ice-cream-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://ice-cream-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://ice-cream-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://ice-cream-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://ice-cream-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://ice-cream-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/images/bucket-apple.svg":
/*!*************************************!*\
  !*** ./src/images/bucket-apple.svg ***!
  \*************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CjxyZWN0IHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0idXJsKCNwYXR0ZXJuMCkiLz4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJwYXR0ZXJuMCIgcGF0dGVybkNvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPgo8dXNlIHhsaW5rOmhyZWY9IiNpbWFnZTAiIHRyYW5zZm9ybT0ic2NhbGUoMC4wMikiLz4KPC9wYXR0ZXJuPgo8aW1hZ2UgaWQ9ImltYWdlMCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQU1BQUFBcDRYaURBQUFBbGxCTVZFVUFBQUQvcGJyL3Bici9wYnIvcGJyL3Bici9wYnIvcGJyL3Bici9wYnIvcGJyL3Bici9wYnIvcGJyL3Bici9wYnIvcGJyL3Bici9wYnIvcGJyL3Bici9wYnIvcGJyL3Bici9wYnIvcGJyL3Bici9wYnIvcGJyL3Bici9wYnIvcGJyL3Bici9wYnIvcGJyL3Bici9wYnIvcGJyL3Bici9wYnIvcGJyL3Bici9wYnIvcGJyL3Bici9wYnIvcGJyL3Bici9wYnIvcGJwYllVN0xBQUFBTVhSU1RsTUFEMDlnOVBqUS9Na1ZzUVBWaDNsak5PL3NXUmtKdkpVc0J0M0RqRWMrNWVLc3BvS0FiV2dsNkxkelZSNmhucHFRMTFxb1BnQUFBcHRKUkVGVVNNZU5sdXQycWpBVWhJTU5keEJFcVNLaVZpM2VUenZ2LzNJbkYxTmlJQzYvSHlxNkpudXpNeE1rQWlkd3g2VEhZa212eEVZTFVHSXlPd0dCVmJJQ05zVGtDOEN2VmZJREpQdzl2R1pOcGRvQ1VGZFdTUXBNQ0RsR1BvQWkrL3NPQzJKbHluOGVVVWptaEpNQW44Uk9DT0RzUXBGT3IzbnBBNWNGK3hCYk5KOFFmT1Z4OWxBV0FFVFp5YW9jVXBRcE9QOWtreVpCWCtQTUtRUXpjUm5CWkdVcWprc0kxTmFzQVZ4YXlodjdEc01SKzlWMWpCcEtvUVlVRjd6RnRRdC9yVllZOWZZRXlicWF0WHZXbCtxc0pxUzVqK1FLTG1BWWNNc1V6NFYvQVUrNzNBQUhvaE1EYUFmdG82Qm1sY3BublkrZVNBQ3Z1OHI0eUVKakU5OWdvbXZ3SG10TnNzUmJIRFhKam8vZGVjbE9SS05qRE9DYnZDUXdZdEJ3QTc5VU9MN2hzaERTUTNZeUFGTno5ekYrSmZGNmlZN2sySzE4QUtEUDBUemc1ZDNjQ3ZTT3N4RTRlOXU5ZStvQVdlVGRNaENrZzRxWlVDQmptNkh2UlFIQmVkWlhOQ2NJY3RGTFJCUm5nUHBnTHdkakNIa0VpVjlWMjZkc3BnQnRSQ2wzTjFXbDRzVWxrT211ZWVDbWVNclpsYnZ1cGxiYzFORjlkL1lvQkhRY0wxbWV1Qk9MVWp0aDVPNDJBVXpjbnh0eGhBZFBmR3JWVTFKVDBmdDhBNDNnRXJJaC80SVY0QzE0Ry9oSittaTg3cHg2bkthN2MxMUhQK01tRk5kYk01NjVPbEVLTWtpVndPVGtLQmZkckE4Ujc1TGRmV0dxN0ZJckN5L1V6SWVlZmFkU21FcnVmZXdCZ1R3UGJSNUwrSUE1cmJkWEhuWlZVanN6R0ZuYTkrS21qc2ZOb0dRcFRkd3hWbFZhQUlNaE81dFIyYW16TndmUURFa09nSzhidkp3QWQvbkp0OFEvTng1aDM5MXNQVnVVQThEVjBzaUtiQjlPdXdQTFFjbWNPNHl0Rzg5aVF0YmNQYTFXTVBzWUlKSEc4aWFnM2tsN09ESTkzaVJ3dERQVVNrUzcvT2ovR3ZaV3pXZnBYTlA1UGp2TVZ4OXk3LzREUjJxbHQzbXRHazRBQUFBQVNVVk9SSzVDWUlJPSIvPgo8L2RlZnM+Cjwvc3ZnPgo=\";\n\n//# sourceURL=webpack://ice-cream-project/./src/images/bucket-apple.svg?");

/***/ }),

/***/ "./src/images/bucket-milk.svg":
/*!************************************!*\
  !*** ./src/images/bucket-milk.svg ***!
  \************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCAzMyA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CjxyZWN0IHdpZHRoPSIzMyIgaGVpZ2h0PSI1MCIgZmlsbD0idXJsKCNwYXR0ZXJuMCkiLz4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJwYXR0ZXJuMCIgcGF0dGVybkNvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPgo8dXNlIHhsaW5rOmhyZWY9IiNpbWFnZTAiIHRyYW5zZm9ybT0ic2NhbGUoMC4wMzAzMDMgMC4wMikiLz4KPC9wYXR0ZXJuPgo8aW1hZ2UgaWQ9ImltYWdlMCIgd2lkdGg9IjMzIiBoZWlnaHQ9IjUwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNFQUFBQXlDQU1BQUFEbGVFSm9BQUFBaDFCTVZFVUFBQUQvcGJyL3Bici9wYnIvcGJyL3Bici9wYnIvcGJyL3Bici9wYnIvcGJyL3Bici9wYnIvcGJyL3Bici9wYnIvcGJyL3Bici9wYnIvcGJyL3Bici9wYnIvcGJyL3Bici9wYnIvcGJyL3Bici9wYnIvcGJyL3Bici9wYnIvcGJyL3Bici9wYnIvcGJyL3Bici9wYnIvcGJyL3Bici9wYnIvcGJyL3Bici9wYnIvcGJyL3BiclM4TitCQUFBQUxIUlNUbE1Bc0ZDZytwcDlsQ2tjeUlSMVZoUHc2dG5Nd2JlbGprdzJKQTRKOVdidDUrSFV2YWhnV0VVNkxtdGNGMGQ2OE40QUFBSFJTVVJCVkRqTGxkVHJkcUl3RkFYZ3pSaEFRRkN3TFlxWFdxKzluUGQvdnRrSnBMSjZHdGZNOXdPejRsRWcyU2VnU0VJaU9GTUptLzVqeGNhSUhQOW9SeEd6Z1JOeHlPSWZwbVo0RG5vWGtZbXFtSEQyZlJnL2NaeXFpcFN6VDNCS0R2Tk9WWFE1NTB0WXp5SjFoVFpQSzNoVm5MZW9hcEZuZjVNWXJSR1pGOFByRjNNUjB5TDJ0M2tSa2FVUjV5MUQ5aWFPV2ZMeUFtdHQ1RzZHbWR5WjlmQ290c1NjVnlkK0prZzRQcTNPYnE3RUlFdml4Rll2aDRxbC9XZk9aZmlKRlFVS1d4SEM5ejdzRHZZZFEwcnBsUWlLZkc3Q1p2VzJudUYvM2VMSkkvRU5yL0xZSzdieTJCWTU5elFLbVRNNWRvc1hDRm5ZWU94YzVqWGZKenVzZUMwQ0ZRVy9XMkhENjc3RGI3bzl2MlBIMUtPazY3VFgvRHdKWGFCZGhFNUFuenB6MFFWR3lHN1NWWnkwdzFpWGluUGwrRXQ2aTFIb3NtUWh2UzhRZDRhTFp6WHBCM3YrSTIzRW1rZDJWM3hIWlpFK2Y3THZqaXI0WTZZZ011TkdpVzVBNDlleTVBU29Pc2ZOd2o1UUU1OHJrUEdKWGJ1RFFyUEh5dEJ6ak1nbnRFOGJqbDV1TzFoangrZjM5VDlDTzk3M2l4SFpROXZiY0RndUlycUpNeGNPZkIrb3JhcG8vWEZxOGRSSlZFWENFMm5jODVIdTRmRVp3SWdjMUtGOXNPSHdydks3Szd3cVVGR05sMC96Qy8wWGtwQm9LaXpiSnBZQUFBQUFTVVZPUks1Q1lJST0iLz4KPC9kZWZzPgo8L3N2Zz4K\";\n\n//# sourceURL=webpack://ice-cream-project/./src/images/bucket-milk.svg?");

/***/ }),

/***/ "./src/images/reviews/home.svg":
/*!*************************************!*\
  !*** ./src/images/reviews/home.svg ***!
  \*************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMyAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjg0NDkgNS44NTQ4NEMxMy4wNjk2IDUuNjA3NzIgMTMuMDQ3OSA1LjIyODk3IDEyLjc5NjQgNS4wMDkwOEw3LjI1Njg3IDAuMTYxOTM1QzcuMDA1NDMgLTAuMDU3OTQ5MSA2LjYwMjMxIC0wLjA1MzM0MjkgNi4zNTYxNiAwLjE3MjMxOUwwLjc5Nzc2MSA1LjI2NzUxQzAuNTUxNjEzIDUuNDkzMTggMC41Mzk1MzIgNS44NzE0NSAwLjc3MTAxMyA2LjExMjA2TDAuOTEwMzcgNi4yNTcxOUMxLjE0MTU3IDYuNDk3ODEgMS41MTUyNyA2LjUyNjQ5IDEuNzQ0NTMgNi4zMjEwN0wyLjE1OTk0IDUuOTQ5MDdWMTEuMzk1M0MyLjE1OTk0IDExLjcyOTUgMi40MzA2OSAxMiAyLjc2NDYgMTJINC45MzEyN0M1LjI2NTE4IDEyIDUuNTM1OTQgMTEuNzI5NSA1LjUzNTk0IDExLjM5NTNWNy41ODUxNUg4LjI5OTU2VjExLjM5NTNDOC4yOTQ3NSAxMS43MjkyIDguNTMzNjcgMTEuOTk5OCA4Ljg2NzU3IDExLjk5OThIMTEuMTYzN0MxMS40OTc2IDExLjk5OTggMTEuNzY4NCAxMS43MjkyIDExLjc2ODQgMTEuMzk1MVY2LjAyNTc1QzExLjc2ODQgNi4wMjU3NSAxMS44ODMxIDYuMTI2MjggMTIuMDI0NyA2LjI1MDY5QzEyLjE2NiA2LjM3NDg1IDEyLjQ2MjcgNi4yNzUzIDEyLjY4NzQgNi4wMjc5NEwxMi44NDQ5IDUuODU0ODRaIiBmaWxsPSIjRDMxMzQyIi8+Cjwvc3ZnPgo=\";\n\n//# sourceURL=webpack://ice-cream-project/./src/images/reviews/home.svg?");

/***/ }),

/***/ "./src/images/reviews/left-arrow.svg":
/*!*******************************************!*\
  !*** ./src/images/reviews/left-arrow.svg ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMzA2IDMwNiIgIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnIGlkPSJjaGV2cm9uLWxlZnQiPgoJCTxwb2x5Z29uIHBvaW50cz0iMjQ3LjM1LDM1LjcgMjExLjY1LDAgNTguNjUsMTUzIDIxMS42NSwzMDYgMjQ3LjM1LDI3MC4zIDEzMC4wNSwxNTMgCQkiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K\";\n\n//# sourceURL=webpack://ice-cream-project/./src/images/reviews/left-arrow.svg?");

/***/ }),

/***/ "./src/images/reviews/right-arrow.svg":
/*!********************************************!*\
  !*** ./src/images/reviews/right-arrow.svg ***!
  \********************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSAgdmlld0JveD0iMCAwIDMwNiAzMDYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMwNiAzMDY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0iY2hldnJvbi1yaWdodCI+CgkJPHBvbHlnb24gcG9pbnRzPSI5NC4zNSwwIDU4LjY1LDM1LjcgMTc1Ljk1LDE1MyA1OC42NSwyNzAuMyA5NC4zNSwzMDYgMjQ3LjM1LDE1MyAJCSIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=\";\n\n//# sourceURL=webpack://ice-cream-project/./src/images/reviews/right-arrow.svg?");

/***/ }),

/***/ "./src/images/sweets.svg":
/*!*******************************!*\
  !*** ./src/images/sweets.svg ***!
  \*******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA0NCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CjxyZWN0IHdpZHRoPSI0NCIgaGVpZ2h0PSI1MCIgZmlsbD0idXJsKCNwYXR0ZXJuMCkiLz4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJwYXR0ZXJuMCIgcGF0dGVybkNvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPgo8dXNlIHhsaW5rOmhyZWY9IiNpbWFnZTAiIHRyYW5zZm9ybT0ic2NhbGUoMC4wMjI3MjczIDAuMDIpIi8+CjwvcGF0dGVybj4KPGltYWdlIGlkPSJpbWFnZTAiIHdpZHRoPSI0NCIgaGVpZ2h0PSI1MCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDd0FBQUF5Q0FNQUFBQVFoc25ZQUFBQWpWQk1WRVVBQUFEL3Bici9wYnIvcGJyL3Bici9wYnIvcGJyL3Bici9wYnIvcGJyL3Bici9wYnIvcGJyL3Bici9wYnIvcGJyL3Bici9wYnIvcGJyL3Bici9wYnIvcGJyL3Bici9wYnIvcGJyL3Bici9wYnIvcGJyL3Bici9wYnIvcGJyL3Bici9wYnIvcGJyL3Bici9wYnIvcGJyL3Bici9wYnIvcGJyL3Bici9wYnIvcGJyL3Bici9wYnIvcGJyL3Bib1BjRXFvQUFBQUxuUlNUbE1BY0pBRFVBZjU5UzBYOGVsNDFiR2FpWU5MRHMzQnZLeWpsVnNURUFyajNkTEt4NlJtWUVjbDlrTTlPQjhwREtUSE5nQUFBbFZKUkVGVVNNZnRWTnR5b2tBUWJSa0dFSkFFTUY3QVN3U1VxTW44LytkdG41N0FvdEhWcW4zYXFqMHY5blFkdWsvZnBHK2NuZW1ITVp0NW9hbUhMdVliWXo2bXpwbUdDTjVNaDJqZk9mZFI3M3dMcUVmam1RSG1hL2pXODZIUGF6cHVqT2Zpc0NJVnhJZzIweXhoaGl4eG9HaDFXQmhHVEFLWHpmY3Zzc2hmK0ZVVDFmenprcFBGMXp1L1hGaGx4SnFRZVpDbnFuN0hFazF2bktaazQ1V2JVTklBaUkyNFExL0piWG5sdkQ0eURLRWNjQjAxOUVHcm4xTmh6SVN1TUhiZDhiVnZZa3hCWEdwS1R5RGxodUdMMHpQa0V4VHdrQ1dsUG1lZjlJM1Y4YmpxN00vc3JFVWFENTY0Rm9VQ01JMmtsQUpUajBlV0t1bENndG00OExJQk1wdVpFVXdSeExHMmczUlRhMmRFUWd3aEE4b2pMTk9lODJLZ0dCbXIybU9KSXFpRmpKRDQyd01zZnl3RkM2RlNxc0tIdGxWakgvRU9uSmVXR0Ewc2FYeENOSUlDYUJrUkpSaVl4TU9nbDJCRTZRYlR2VWZHL0RkcEJGT0hkbUhiKytUV3JudW9zVWd3VU8rUksxRldsODJxdU80amVvV0E4SXIrbWN3Zzk5aGEyRTVsdUljWlo4eGxTalBwZ0YxZ0w0Q0JjTUJPRWFrZExJUURBcTliYjgxTjNVcG90WlRybEJCanVlR2xrc0JiYnIwbVFRQWgxbTZiMGFsZm5WSFQybWdRMGQ5M2dadFdkQWNLZDE1Y0xLdXA5VzJ1cnMzVnlrTnNzcjdGWFNlUWZwa0tWMXFWUDdsbGhkdTlsb2pGM0FiWDNHQXJ5L29ETWJ2OTR0SlgrUEwvY1FPdWo0enJnVnhvODEwUzNNdzVDZnJueENxN2d4d2Q5V0lsSmNjZXVwL1RmVFNRc3N2eVBOdEJRa04vUk11a0RydVdIa0RWSGJkVzlBaTRsSkNCUzNtRS9xeitrLzlsc2hlRzN0Tms0Sy9KdndBdExXd0JFZGxTVWdBQUFBQkpSVTVFcmtKZ2dnPT0iLz4KPC9kZWZzPgo8L3N2Zz4K\";\n\n//# sourceURL=webpack://ice-cream-project/./src/images/sweets.svg?");

/***/ }),

/***/ "./src/images/making-img/desktop/milk-background@1x.png":
/*!**************************************************************!*\
  !*** ./src/images/making-img/desktop/milk-background@1x.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"950260f8304e29ff797f.png\";\n\n//# sourceURL=webpack://ice-cream-project/./src/images/making-img/desktop/milk-background@1x.png?");

/***/ }),

/***/ "./src/images/making-img/desktop/milk-background@2x.png":
/*!**************************************************************!*\
  !*** ./src/images/making-img/desktop/milk-background@2x.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"17c3e31876d74052ad8d.png\";\n\n//# sourceURL=webpack://ice-cream-project/./src/images/making-img/desktop/milk-background@2x.png?");

/***/ }),

/***/ "./src/images/making-img/mobile/milk-background@1x.png":
/*!*************************************************************!*\
  !*** ./src/images/making-img/mobile/milk-background@1x.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"ebb5dbbc326555b1ed93.png\";\n\n//# sourceURL=webpack://ice-cream-project/./src/images/making-img/mobile/milk-background@1x.png?");

/***/ }),

/***/ "./src/images/making-img/mobile/milk-background@2x.png":
/*!*************************************************************!*\
  !*** ./src/images/making-img/mobile/milk-background@2x.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"43a7d7d13f253edc2af1.png\";\n\n//# sourceURL=webpack://ice-cream-project/./src/images/making-img/mobile/milk-background@2x.png?");

/***/ }),

/***/ "./src/images/reviews/quote.png":
/*!**************************************!*\
  !*** ./src/images/reviews/quote.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a63082c3993dbd9eee73.png\";\n\n//# sourceURL=webpack://ice-cream-project/./src/images/reviews/quote.png?");

/***/ }),

/***/ "./src/images/schedule-img/sectionbg-schedule@2x.png":
/*!***********************************************************!*\
  !*** ./src/images/schedule-img/sectionbg-schedule@2x.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"f2b9f80201a356f842cc.png\";\n\n//# sourceURL=webpack://ice-cream-project/./src/images/schedule-img/sectionbg-schedule@2x.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("8b1a9c30dc861b253a79")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "ice-cream-project:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						return setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						blockingPromises = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdateice_cream_project"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;