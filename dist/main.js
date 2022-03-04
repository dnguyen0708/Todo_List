/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,*::before,*::after{\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    box-sizing: border-box;\\r\\n    /* border:1px solid black; */\\r\\n}\\r\\n\\r\\n:root{\\r\\n    font-family: 'Roboto', sans-serif;\\r\\n    --header-height: 100px;\\r\\n    --footer-height:75px;\\r\\n    --side-bg-color:#ddd;\\r\\n    --header-bg-color:#b32134;\\r\\n    --footer-bg-color:#C13450;\\r\\n    --main-content-wrapper-bg-color:#e6d0c8;\\r\\n}\\r\\n/* \\r\\nbody{\\r\\n\\r\\n} */\\r\\nul {\\r\\n    list-style:none;\\r\\n}\\r\\n#header{\\r\\n    height: var(--header-height);\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    background-color: var(--header-bg-color);\\r\\n}\\r\\n\\r\\n/* content components */\\r\\n#content{\\r\\n    min-height: calc(100vh - var(--footer-height) - var(--header-height));\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr 6fr;\\r\\n}\\r\\n.side-content{\\r\\n    padding: 16px;\\r\\n    background-color: var(--side-bg-color);\\r\\n}\\r\\n.home{\\r\\n    margin-bottom: 50px;\\r\\n}\\r\\n.projects{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap:16px;\\r\\n    margin: 15px 0;\\r\\n}\\r\\n.add-project-btn{\\r\\n    width: 100%;\\r\\n    display: flex;\\r\\n    justify-content: start;\\r\\n    align-items: center;\\r\\n}\\r\\n.add-project-btn{\\r\\n    text-align: center;\\r\\n}\\r\\n.main-content-wrapper{\\r\\n    background-color: var(--main-content-wrapper-bg-color);\\r\\n    padding: 22px;\\r\\n}\\r\\n.main-content{\\r\\n    color:rgb(15, 15, 15);\\r\\n}\\r\\n.main-content h2{\\r\\n    text-align: center;\\r\\n    margin-bottom: 20px;\\r\\n    font-size: 25px;\\r\\n}\\r\\n/* todo styling */\\r\\n.todo-wrapper{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\n/* .todo-content{\\r\\n    \\r\\n} */\\r\\n.todo{\\r\\n    position: relative;\\r\\n    font-size: 20px;\\r\\n    border:1px solid red;\\r\\n    margin-bottom: 5px;\\r\\n    padding: 12px;\\r\\n    border-radius: 1rem;\\r\\n}\\r\\n.todo .fa-solid.fa-xmark{\\r\\n    position: absolute;\\r\\n    right:10px;\\r\\n    top: 10px;;\\r\\n}\\r\\n.todo_form{\\r\\n    display: none;\\r\\n    flex-direction: column;\\r\\n    min-height: 20%;\\r\\n    background-color: var(--side-bg-color);\\r\\n    padding:12px;\\r\\n    gap:12px;\\r\\n \\r\\n    border-radius: 1rem;\\r\\n}\\r\\n.todo_form.active{\\r\\n    display: flex;\\r\\n}\\r\\n.priority-title{\\r\\n    display: inline-block;\\r\\n}\\r\\n.main-content-wrapper .add-todo-btn{\\r\\n    width: 10%;\\r\\n    background-color: var(--main-content-wrapper-bg-color);\\r\\n    color: purple;\\r\\n    text-align: left;\\r\\n}\\r\\n#footer{\\r\\n    height: var(--footer-height);\\r\\n    background-color: var(--footer-bg-color);\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n}\\r\\n.btn{\\r\\n    background-color: #54fa2a;\\r\\n    border: none;\\r\\n    color: white;\\r\\n    min-width: 100px;\\r\\n    padding: 15px 32px;\\r\\n    text-align: center;\\r\\n    text-decoration: none;\\r\\n    display: inline-block;\\r\\n    font-size: 16px;\\r\\n    border-radius: .5rem;\\r\\n    cursor: pointer;\\r\\n}\\r\\n.project-input-field{\\r\\n    display: none;\\r\\n    grid-template-columns: repeat(2,1fr);\\r\\n    grid-template-rows: repeat(2,1fr);\\r\\n    align-items: center;\\r\\n    gap:6px;\\r\\n}\\r\\n.project-input-field.active{\\r\\n    display: grid;\\r\\n}\\r\\n.project{\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    gap: 10px;\\r\\n}\\r\\n.side-content > h2{\\r\\n    margin-bottom: 10px;\\r\\n}\\r\\n.project h2{\\r\\n    width: 80%;\\r\\n}\\r\\n.project .fa-xmark{\\r\\n    display: none;\\r\\n}\\r\\n.project:hover .fa-xmark{\\r\\n    display: inline-block;\\r\\n}\\r\\n.form-control input[type=\\\"text\\\"]{\\r\\n    display: block;\\r\\n    width:100%;\\r\\n    height: 40px;\\r\\n    border: 1px solid var(--default-border-color);\\r\\n    border-radius: .3rem;\\r\\n    font-size: large;\\r\\n    padding: 6px;\\r\\n    grid-column: 1/3;\\r\\n    /* margin-bottom: 12px; */\\r\\n}\\r\\nlabel{\\r\\n    font-size: 20px;\\r\\n    font-weight: 500;\\r\\n}\\r\\n.btn.close{\\r\\n    background-color: red;\\r\\n    \\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://Todo_List/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://Todo_List/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://Todo_List/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://Todo_List/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://Todo_List/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://Todo_List/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://Todo_List/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://Todo_List/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://Todo_List/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://Todo_List/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/formController.js":
/*!*******************************!*\
  !*** ./src/formController.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleProjectForm\": () => (/* binding */ toggleProjectForm),\n/* harmony export */   \"toggleTodoForm\": () => (/* binding */ toggleTodoForm),\n/* harmony export */   \"closeForm\": () => (/* binding */ closeForm),\n/* harmony export */   \"closeTodo\": () => (/* binding */ closeTodo)\n/* harmony export */ });\nconst toggleProjectFormBtn = document.querySelector('.add-project-btn');\r\nconst toggleTodoFormBtn = document.querySelector('.add-todo-btn');\r\nconst closeProjectBtn = document.querySelector('.project-input-field > .btn.close');\r\nconst closeTodoBtn = document.querySelector('.btn-container > .btn.close');\r\nconst todoForm = document.querySelector('.todo_form');\r\n\r\nconst closeForm = function () {\r\n    const form = document.querySelector('.project-input-field');\r\n    form.classList.toggle('active');\r\n    toggleProjectFormBtn.style.display = 'block';\r\n}\r\nconst closeTodo = function () {\r\n    const form = document.querySelector('.todo_form');\r\n    form.classList.toggle('active');\r\n    toggleTodoFormBtn.style.display = 'block';\r\n    todoForm.reset();\r\n}\r\n\r\nconst toggleProjectForm = function () {\r\n    const form = document.querySelector('.project-input-field');\r\n    form.classList.toggle('active');\r\n    toggleProjectFormBtn.style.display = 'none';\r\n}\r\nconst toggleTodoForm = function () {\r\n    const form = document.querySelector('.todo_form');\r\n    form.classList.toggle('active');\r\n    toggleTodoFormBtn.style.display = 'none';\r\n}\r\ntoggleProjectFormBtn.addEventListener(\"click\", toggleProjectForm);\r\ntoggleTodoFormBtn.addEventListener('click', toggleTodoForm);\r\ncloseProjectBtn.addEventListener(\"click\", closeForm);\r\ncloseTodoBtn.addEventListener(\"click\", closeTodo);\r\n\r\n// export default formController;\r\n\n\n//# sourceURL=webpack://Todo_List/./src/formController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _projectController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectController */ \"./src/projectController.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _formController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formController */ \"./src/formController.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst addProjectBtn = document.querySelector('.project-input-field > .btn.add');\r\nconst projectsList = document.querySelector('.projects');\r\nconst todoForm = document.querySelector('.todo_form');\r\n\r\nconst projectController = new _projectController__WEBPACK_IMPORTED_MODULE_1__[\"default\"](projectsList);\r\nconst p1 = new _project__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('test project');\r\nconst todo1 = new _todo__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('todo1', 'todo1', '3/3/2022', 'red');\r\nconst todo2 = new _todo__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('todo2', 'todo2', '3/3/2022', 'green');\r\nconst todo3 = new _todo__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('todo3', 'todo3', '3/3/2022', 'yellow');\r\nconst todo4 = new _todo__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('todo4', 'todo4', '3/3/2022', 'red');\r\np1.addTodo(todo1);\r\np1.addTodo(todo2);\r\np1.addTodo(todo3);\r\np1.addTodo(todo4);\r\nprojectController.addProject(p1);\r\nprojectController.populate();\r\n\r\n\r\nconst addProject = function () {\r\n    const inputForm = document.querySelector('#project_name');\r\n    if (inputForm.value) {\r\n        const newProject = new _project__WEBPACK_IMPORTED_MODULE_2__[\"default\"](inputForm.value);\r\n        projectController.addProject(newProject);\r\n        newProject.display();\r\n        projectController.populate();\r\n        inputForm.value = '';\r\n        insertProjectEventListener();\r\n        (0,_formController__WEBPACK_IMPORTED_MODULE_4__.closeForm)();\r\n    } else {\r\n        alert(\"project name can't be blank\")\r\n    }\r\n}\r\n\r\nconst addTodo = function (e) {\r\n    e.preventDefault();\r\n    const title = document.querySelector('#title');\r\n    const desc = document.querySelector('#desc');\r\n    const date = document.querySelector('#date');\r\n    const prioritySelector = document.querySelectorAll(\"[type='radio']\");\r\n    let priority;\r\n    prioritySelector.forEach(p => {\r\n        if (p.checked)\r\n            priority = p.value;\r\n    })\r\n    const newTodo = new _todo__WEBPACK_IMPORTED_MODULE_3__[\"default\"](title.value, desc.value, date.value, priority);\r\n    const currentActiveProject = document.querySelector('.project.active');\r\n    const project = projectController.projects[currentActiveProject.dataset.index];\r\n    project.addTodo(newTodo);\r\n    project.display();\r\n    (0,_formController__WEBPACK_IMPORTED_MODULE_4__.closeTodo)();\r\n    insertTodoEventListener();\r\n\r\n}\r\nconst removeProject = function (e) {\r\n    e.stopPropagation();\r\n    // displayNextAvailableProject(e);\r\n    e.target.parentNode.remove();\r\n    projectController.removeProject(this.parentNode.dataset.index);\r\n    if (!projectController.projects.length) {\r\n        const todoWrapper = document.querySelector('.todo-wrapper');\r\n        todoWrapper.parentNode.removeChild(todoWrapper);\r\n        return;\r\n    }\r\n    projectController.populate();\r\n    insertProjectEventListener();\r\n\r\n}\r\nconst displayProject = function () {\r\n    const project = projectController.projects[this.dataset.index];\r\n    const activeProject = document.querySelector('.project.active');\r\n    activeProject.classList.remove('active');\r\n    this.classList.add('active');\r\n    project.display();\r\n    insertTodoEventListener();\r\n}\r\nconst insertProjectEventListener = () => {\r\n    const allprojects = document.querySelectorAll('.project');\r\n    allprojects.forEach(p => {\r\n        p.addEventListener('click', displayProject);\r\n    })\r\n    const removeIcons = document.querySelectorAll('.project > .fa-solid.fa-xmark');\r\n    removeIcons.forEach(icon => {\r\n        icon.addEventListener('click', removeProject);\r\n    })\r\n    insertTodoEventListener();\r\n}\r\nconst removeTodo = function (e) {\r\n    e.stopPropagation();\r\n    const currentActiveProject = document.querySelector('.project.active');\r\n    const project = projectController.projects[currentActiveProject.dataset.index];\r\n    project.removeTodo(e.target.parentNode.dataset.index);\r\n    e.target.parentNode.remove();\r\n    project.display();\r\n    insertTodoEventListener();\r\n}\r\nconst selectTodo = function (e) {\r\n    // console.log(this);\r\n}\r\nconst insertTodoEventListener = () => {\r\n    const allTodos = document.querySelectorAll('.todo');\r\n    allTodos.forEach((td) => {\r\n        td.addEventListener('click', selectTodo)\r\n    })\r\n    const removeIcons = document.querySelectorAll('.todo > .fa-solid.fa-xmark');\r\n    removeIcons.forEach(icon => {\r\n        icon.addEventListener('click', removeTodo);\r\n    })\r\n}\r\n\r\naddProjectBtn.addEventListener(\"click\", addProject);\r\ntodoForm.addEventListener(\"submit\", addTodo);\r\n// closeProjectBtn.addEventListener(\"click\", closeForm);\r\n// closeTodoBtn.addEventListener(\"click\", closeTodo);\r\n\r\ninsertProjectEventListener();\n\n//# sourceURL=webpack://Todo_List/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nclass Project {\r\n    constructor(name) {\r\n        this.name = name;\r\n        this.todo = [];\r\n    }\r\n\r\n    static createTodo(td, index) {\r\n        const todoContainer = document.createElement('div');\r\n        const h3 = document.createElement('h3');\r\n        const desc = document.createElement('p');\r\n        const date = document.createElement('p');\r\n        const xmark = document.createElement('i');\r\n\r\n        todoContainer.className = \"todo\";\r\n        xmark.className = \"fa-solid fa-xmark\";\r\n\r\n        h3.textContent = td.title;\r\n        desc.textContent = td.desc;\r\n        date.textContent = td.dueDate;\r\n        todoContainer.style.border = `2px solid ${td.priority}`;\r\n        todoContainer.dataset.index = index;\r\n        todoContainer.append(h3, date, desc, xmark);\r\n\r\n        return todoContainer;\r\n    }\r\n\r\n    display() {\r\n        const mainContent = document.querySelector(\".main-content\");\r\n        if (mainContent.firstChild) {\r\n            mainContent.removeChild(mainContent.firstChild);\r\n        }\r\n        if (!mainContent.firstChild) {\r\n            const projectTitle = document.createElement('h2');\r\n            const todoContent = document.createElement('div');\r\n            const todoWrapper = document.createElement('div')\r\n\r\n            todoContent.className = \"todo-content\";\r\n            todoWrapper.className = \"todo-wrapper\";\r\n\r\n            projectTitle.textContent = this.name;\r\n            todoWrapper.append(projectTitle, todoContent);\r\n            mainContent.appendChild(todoWrapper);\r\n            this.populate();\r\n        }\r\n    }\r\n\r\n    populate() {\r\n        //reset list\r\n        const todoContent = document.querySelector('.todo-content');\r\n        while (todoContent.firstChild) {\r\n            todoContent.removeChild(todoContent.firstChild);\r\n        }\r\n\r\n        this.todo.forEach((td, index) => {\r\n            todoContent.append(Project.createTodo(td, index));\r\n        });\r\n    }\r\n\r\n    addTodo(todo) {\r\n        this.todo.push(todo);\r\n    }\r\n\r\n    removeTodo(index) {\r\n        this.todo.splice(index, 1);\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://Todo_List/./src/project.js?");

/***/ }),

/***/ "./src/projectController.js":
/*!**********************************!*\
  !*** ./src/projectController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ProjectController {\r\n    constructor(element) {\r\n        this.element = element;\r\n        this.projects = [];\r\n    }\r\n\r\n\r\n    static createItem(text, index, active = false) {\r\n        const li = document.createElement('li');\r\n        const projectName = document.createElement('h2');\r\n        const bookIcon = document.createElement('i');\r\n        const removeIcon = document.createElement('i');\r\n\r\n\r\n        projectName.textContent = text;\r\n        bookIcon.className = \"fa-solid fa-book-open\";\r\n        removeIcon.className = \"fa-solid fa-xmark\";\r\n        li.className = \"project\";\r\n        if (active) {\r\n            li.classList.add('active');\r\n        }\r\n        li.dataset.index = index;\r\n\r\n\r\n        li.append(bookIcon, projectName, removeIcon);\r\n\r\n        return li;\r\n    }\r\n\r\n    populate() {\r\n        /* remove existing li */\r\n        while (this.element.firstChild) {\r\n            this.element.removeChild(this.element.firstChild);\r\n        }\r\n\r\n        //populate ul\r\n        this.projects.forEach((p, i) => {\r\n            if (i === this.projects.length - 1) {\r\n                this.element.append(ProjectController.createItem(p.name, i, true));\r\n                p.display();\r\n            } else {\r\n                this.element.append(ProjectController.createItem(p.name, i));\r\n            }\r\n\r\n        })\r\n    }\r\n\r\n    addProject(p) {\r\n        this.projects.push(p);\r\n    }\r\n\r\n    removeProject(index) {\r\n        this.projects.splice(index, 1);\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectController);\n\n//# sourceURL=webpack://Todo_List/./src/projectController.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Todo {\r\n    constructor(title, desc, dueDate, priority) {\r\n        this.title = title;\r\n        this.desc = desc;\r\n        this.dueDate = dueDate;\r\n        this.priority = priority;\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n//# sourceURL=webpack://Todo_List/./src/todo.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;