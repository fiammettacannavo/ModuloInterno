define(["@grafana/data","@grafana/ui","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/lib/loader.js!./Training/App.css":
/*!******************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--8-1!../node_modules/postcss-loader/src??ref--8-2!../node_modules/sass-loader/lib/loader.js!./Training/App.css ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".main h1 {\n  text-align: center; }\n\n.container {\n  width: 100%;\n  margin: auto;\n  padding: 0; }\n\n.container > div {\n  width: 100%;\n  padding: 1em;\n  background: #292a2d;\n  border-radius: 4px;\n  border: 1px solid #343436; }\n\n.button {\n  border: 1px solid #818181;\n  margin-right: .5em;\n  margin-bottom: .5em;\n  padding-left: 1em;\n  cursor: pointer; }\n\n.button input {\n  display: none; }\n\nbutton, .button {\n  display: inline-flex;\n  align-items: center;\n  font-weight: 500;\n  font-size: 14px;\n  font-family: \"Roboto\", \"Helvetica Neue\", Arial, sans-serif;\n  line-height: 1;\n  padding: 8px 16px;\n  vertical-align: middle;\n  cursor: pointer;\n  border: medium none;\n  height: 32px;\n  border-radius: 2px;\n  background: rgba(0, 0, 0, 0) linear-gradient(180deg, #3f84ac, #38779b) repeat scroll 0% 0%;\n  color: white;\n  text-shadow: rgba(0, 0, 0, 0.1) 0px -1px; }\n\nbutton:hover, .button:hover {\n  background: #3f84ac none repeat scroll 0% 0%;\n  color: white; }\n\nselect {\n  border: none;\n  border-radius: 4px; }\n\n/* Correzioni */\n.gf-form-label {\n  padding: 7px; }\n\n.mb-2 {\n  margin-bottom: 2px; }\n\n.mr-0 {\n  margin-right: 0px !important; }\n\n@media screen and (max-width: 767px) {\n  .page-sidebar-section {\n    margin-top: 1em;\n    margin-left: 1em; }\n  .page-header__select-nav {\n    margin-left: 1em; }\n  .sidebar-content {\n    margin-left: 1em;\n    width: calc(100% - 105px); }\n  .gf-form-select-wrapper .gf-form-select-icon + .gf-form-input {\n    padding-left: 1em; } }\n\n@media screen and (max-width: 480px) {\n  .page-sidebar-section {\n    margin-top: 1em;\n    margin-left: 1em; }\n  .page-header__select-nav {\n    margin-left: 1em; }\n  .sidebar-content {\n    width: 100%; }\n  .gf-form-select-wrapper .gf-form-select-icon + .gf-form-input {\n    padding-left: 1em; } }\n", "",{"version":3,"sources":["App.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB,EAAE;;AAEtB;EACE,WAAW;EACX,YAAY;EACZ,UAAU,EAAE;;AAEd;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,yBAAyB,EAAE;;AAE7B;EACE,yBAAyB;EACzB,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,eAAe,EAAE;;AAEnB;EACE,aAAa,EAAE;;AAEjB;EACE,oBAAoB;EAEpB,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;EACf,0DAA0D;EAC1D,cAAc;EACd,iBAAiB;EACjB,sBAAsB;EACtB,eAAe;EACf,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;EAClB,0FAA0F;EAC1F,YAAY;EACZ,wCAAwC,EAAE;;AAE5C;EACE,4CAA4C;EAC5C,YAAY,EAAE;;AAEhB;EACE,YAAY;EACZ,kBAAkB,EAAE;;AAEtB,eAAe;AACf;EACE,YAAY,EAAE;;AAEhB;EACE,kBAAkB,EAAE;;AAEtB;EACE,4BAA4B,EAAE;;AAEhC;EACE;IACE,eAAe;IACf,gBAAgB,EAAE;EACpB;IACE,gBAAgB,EAAE;EACpB;IACE,gBAAgB;IAChB,yBAAyB,EAAE;EAC7B;IACE,iBAAiB,EAAE,EAAE;;AAEzB;EACE;IACE,eAAe;IACf,gBAAgB,EAAE;EACpB;IACE,gBAAgB,EAAE;EACpB;IACE,WAAW,EAAE;EACf;IACE,iBAAiB,EAAE,EAAE","file":"App.css","sourcesContent":[".main h1 {\n  text-align: center; }\n\n.container {\n  width: 100%;\n  margin: auto;\n  padding: 0; }\n\n.container > div {\n  width: 100%;\n  padding: 1em;\n  background: #292a2d;\n  border-radius: 4px;\n  border: 1px solid #343436; }\n\n.button {\n  border: 1px solid #818181;\n  margin-right: .5em;\n  margin-bottom: .5em;\n  padding-left: 1em;\n  cursor: pointer; }\n\n.button input {\n  display: none; }\n\nbutton, .button {\n  display: inline-flex;\n  -moz-box-align: center;\n  align-items: center;\n  font-weight: 500;\n  font-size: 14px;\n  font-family: \"Roboto\", \"Helvetica Neue\", Arial, sans-serif;\n  line-height: 1;\n  padding: 8px 16px;\n  vertical-align: middle;\n  cursor: pointer;\n  border: medium none;\n  height: 32px;\n  border-radius: 2px;\n  background: rgba(0, 0, 0, 0) linear-gradient(180deg, #3f84ac, #38779b) repeat scroll 0% 0%;\n  color: white;\n  text-shadow: rgba(0, 0, 0, 0.1) 0px -1px; }\n\nbutton:hover, .button:hover {\n  background: #3f84ac none repeat scroll 0% 0%;\n  color: white; }\n\nselect {\n  border: none;\n  border-radius: 4px; }\n\n/* Correzioni */\n.gf-form-label {\n  padding: 7px; }\n\n.mb-2 {\n  margin-bottom: 2px; }\n\n.mr-0 {\n  margin-right: 0px !important; }\n\n@media screen and (max-width: 767px) {\n  .page-sidebar-section {\n    margin-top: 1em;\n    margin-left: 1em; }\n  .page-header__select-nav {\n    margin-left: 1em; }\n  .sidebar-content {\n    margin-left: 1em;\n    width: calc(100% - 105px); }\n  .gf-form-select-wrapper .gf-form-select-icon + .gf-form-input {\n    padding-left: 1em; } }\n\n@media screen and (max-width: 480px) {\n  .page-sidebar-section {\n    margin-top: 1em;\n    margin-left: 1em; }\n  .page-header__select-nav {\n    margin-left: 1em; }\n  .sidebar-content {\n    width: 100%; }\n  .gf-form-select-wrapper .gf-form-select-icon + .gf-form-input {\n    padding-left: 1em; } }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../node_modules/file-saver/dist/FileSaver.min.js":
/*!********************************************************!*\
  !*** ../node_modules/file-saver/dist/FileSaver.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}});f.saveAs=a.saveAs=a, true&&(module.exports=a)});

//# sourceMappingURL=FileSaver.min.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/regression/dist/regression.js":
/*!*****************************************************!*\
  !*** ../node_modules/regression/dist/regression.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (module) {
  'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  var DEFAULT_OPTIONS = { order: 2, precision: 2, period: null };

  /**
  * Determine the coefficient of determination (r^2) of a fit from the observations
  * and predictions.
  *
  * @param {Array<Array<number>>} data - Pairs of observed x-y values
  * @param {Array<Array<number>>} results - Pairs of observed predicted x-y values
  *
  * @return {number} - The r^2 value, or NaN if one cannot be calculated.
  */
  function determinationCoefficient(data, results) {
    var predictions = [];
    var observations = [];

    data.forEach(function (d, i) {
      if (d[1] !== null) {
        observations.push(d);
        predictions.push(results[i]);
      }
    });

    var sum = observations.reduce(function (a, observation) {
      return a + observation[1];
    }, 0);
    var mean = sum / observations.length;

    var ssyy = observations.reduce(function (a, observation) {
      var difference = observation[1] - mean;
      return a + difference * difference;
    }, 0);

    var sse = observations.reduce(function (accum, observation, index) {
      var prediction = predictions[index];
      var residual = observation[1] - prediction[1];
      return accum + residual * residual;
    }, 0);

    return 1 - sse / ssyy;
  }

  /**
  * Determine the solution of a system of linear equations A * x = b using
  * Gaussian elimination.
  *
  * @param {Array<Array<number>>} input - A 2-d matrix of data in row-major form [ A | b ]
  * @param {number} order - How many degrees to solve for
  *
  * @return {Array<number>} - Vector of normalized solution coefficients matrix (x)
  */
  function gaussianElimination(input, order) {
    var matrix = input;
    var n = input.length - 1;
    var coefficients = [order];

    for (var i = 0; i < n; i++) {
      var maxrow = i;
      for (var j = i + 1; j < n; j++) {
        if (Math.abs(matrix[i][j]) > Math.abs(matrix[i][maxrow])) {
          maxrow = j;
        }
      }

      for (var k = i; k < n + 1; k++) {
        var tmp = matrix[k][i];
        matrix[k][i] = matrix[k][maxrow];
        matrix[k][maxrow] = tmp;
      }

      for (var _j = i + 1; _j < n; _j++) {
        for (var _k = n; _k >= i; _k--) {
          matrix[_k][_j] -= matrix[_k][i] * matrix[i][_j] / matrix[i][i];
        }
      }
    }

    for (var _j2 = n - 1; _j2 >= 0; _j2--) {
      var total = 0;
      for (var _k2 = _j2 + 1; _k2 < n; _k2++) {
        total += matrix[_k2][_j2] * coefficients[_k2];
      }

      coefficients[_j2] = (matrix[n][_j2] - total) / matrix[_j2][_j2];
    }

    return coefficients;
  }

  /**
  * Round a number to a precision, specificed in number of decimal places
  *
  * @param {number} number - The number to round
  * @param {number} precision - The number of decimal places to round to:
  *                             > 0 means decimals, < 0 means powers of 10
  *
  *
  * @return {numbr} - The number, rounded
  */
  function round(number, precision) {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  }

  /**
  * The set of all fitting methods
  *
  * @namespace
  */
  var methods = {
    linear: function linear(data, options) {
      var sum = [0, 0, 0, 0, 0];
      var len = 0;

      for (var n = 0; n < data.length; n++) {
        if (data[n][1] !== null) {
          len++;
          sum[0] += data[n][0];
          sum[1] += data[n][1];
          sum[2] += data[n][0] * data[n][0];
          sum[3] += data[n][0] * data[n][1];
          sum[4] += data[n][1] * data[n][1];
        }
      }

      var run = len * sum[2] - sum[0] * sum[0];
      var rise = len * sum[3] - sum[0] * sum[1];
      var gradient = run === 0 ? 0 : round(rise / run, options.precision);
      var intercept = round(sum[1] / len - gradient * sum[0] / len, options.precision);

      var predict = function predict(x) {
        return [round(x, options.precision), round(gradient * x + intercept, options.precision)];
      };

      var points = data.map(function (point) {
        return predict(point[0]);
      });

      return {
        points: points,
        predict: predict,
        equation: [gradient, intercept],
        r2: round(determinationCoefficient(data, points), options.precision),
        string: intercept === 0 ? 'y = ' + gradient + 'x' : 'y = ' + gradient + 'x + ' + intercept
      };
    },
    exponential: function exponential(data, options) {
      var sum = [0, 0, 0, 0, 0, 0];

      for (var n = 0; n < data.length; n++) {
        if (data[n][1] !== null) {
          sum[0] += data[n][0];
          sum[1] += data[n][1];
          sum[2] += data[n][0] * data[n][0] * data[n][1];
          sum[3] += data[n][1] * Math.log(data[n][1]);
          sum[4] += data[n][0] * data[n][1] * Math.log(data[n][1]);
          sum[5] += data[n][0] * data[n][1];
        }
      }

      var denominator = sum[1] * sum[2] - sum[5] * sum[5];
      var a = Math.exp((sum[2] * sum[3] - sum[5] * sum[4]) / denominator);
      var b = (sum[1] * sum[4] - sum[5] * sum[3]) / denominator;
      var coeffA = round(a, options.precision);
      var coeffB = round(b, options.precision);
      var predict = function predict(x) {
        return [round(x, options.precision), round(coeffA * Math.exp(coeffB * x), options.precision)];
      };

      var points = data.map(function (point) {
        return predict(point[0]);
      });

      return {
        points: points,
        predict: predict,
        equation: [coeffA, coeffB],
        string: 'y = ' + coeffA + 'e^(' + coeffB + 'x)',
        r2: round(determinationCoefficient(data, points), options.precision)
      };
    },
    logarithmic: function logarithmic(data, options) {
      var sum = [0, 0, 0, 0];
      var len = data.length;

      for (var n = 0; n < len; n++) {
        if (data[n][1] !== null) {
          sum[0] += Math.log(data[n][0]);
          sum[1] += data[n][1] * Math.log(data[n][0]);
          sum[2] += data[n][1];
          sum[3] += Math.pow(Math.log(data[n][0]), 2);
        }
      }

      var a = (len * sum[1] - sum[2] * sum[0]) / (len * sum[3] - sum[0] * sum[0]);
      var coeffB = round(a, options.precision);
      var coeffA = round((sum[2] - coeffB * sum[0]) / len, options.precision);

      var predict = function predict(x) {
        return [round(x, options.precision), round(round(coeffA + coeffB * Math.log(x), options.precision), options.precision)];
      };

      var points = data.map(function (point) {
        return predict(point[0]);
      });

      return {
        points: points,
        predict: predict,
        equation: [coeffA, coeffB],
        string: 'y = ' + coeffA + ' + ' + coeffB + ' ln(x)',
        r2: round(determinationCoefficient(data, points), options.precision)
      };
    },
    power: function power(data, options) {
      var sum = [0, 0, 0, 0, 0];
      var len = data.length;

      for (var n = 0; n < len; n++) {
        if (data[n][1] !== null) {
          sum[0] += Math.log(data[n][0]);
          sum[1] += Math.log(data[n][1]) * Math.log(data[n][0]);
          sum[2] += Math.log(data[n][1]);
          sum[3] += Math.pow(Math.log(data[n][0]), 2);
        }
      }

      var b = (len * sum[1] - sum[0] * sum[2]) / (len * sum[3] - Math.pow(sum[0], 2));
      var a = (sum[2] - b * sum[0]) / len;
      var coeffA = round(Math.exp(a), options.precision);
      var coeffB = round(b, options.precision);

      var predict = function predict(x) {
        return [round(x, options.precision), round(round(coeffA * Math.pow(x, coeffB), options.precision), options.precision)];
      };

      var points = data.map(function (point) {
        return predict(point[0]);
      });

      return {
        points: points,
        predict: predict,
        equation: [coeffA, coeffB],
        string: 'y = ' + coeffA + 'x^' + coeffB,
        r2: round(determinationCoefficient(data, points), options.precision)
      };
    },
    polynomial: function polynomial(data, options) {
      var lhs = [];
      var rhs = [];
      var a = 0;
      var b = 0;
      var len = data.length;
      var k = options.order + 1;

      for (var i = 0; i < k; i++) {
        for (var l = 0; l < len; l++) {
          if (data[l][1] !== null) {
            a += Math.pow(data[l][0], i) * data[l][1];
          }
        }

        lhs.push(a);
        a = 0;

        var c = [];
        for (var j = 0; j < k; j++) {
          for (var _l = 0; _l < len; _l++) {
            if (data[_l][1] !== null) {
              b += Math.pow(data[_l][0], i + j);
            }
          }
          c.push(b);
          b = 0;
        }
        rhs.push(c);
      }
      rhs.push(lhs);

      var coefficients = gaussianElimination(rhs, k).map(function (v) {
        return round(v, options.precision);
      });

      var predict = function predict(x) {
        return [round(x, options.precision), round(coefficients.reduce(function (sum, coeff, power) {
          return sum + coeff * Math.pow(x, power);
        }, 0), options.precision)];
      };

      var points = data.map(function (point) {
        return predict(point[0]);
      });

      var string = 'y = ';
      for (var _i = coefficients.length - 1; _i >= 0; _i--) {
        if (_i > 1) {
          string += coefficients[_i] + 'x^' + _i + ' + ';
        } else if (_i === 1) {
          string += coefficients[_i] + 'x + ';
        } else {
          string += coefficients[_i];
        }
      }

      return {
        string: string,
        points: points,
        predict: predict,
        equation: [].concat(_toConsumableArray(coefficients)).reverse(),
        r2: round(determinationCoefficient(data, points), options.precision)
      };
    }
  };

  function createWrapper() {
    var reduce = function reduce(accumulator, name) {
      return _extends({
        _round: round
      }, accumulator, _defineProperty({}, name, function (data, supplied) {
        return methods[name](data, _extends({}, DEFAULT_OPTIONS, supplied));
      }));
    };

    return Object.keys(methods).reduce(reduce, {});
  }

  module.exports = createWrapper();
});


/***/ }),

/***/ "../node_modules/style-loader/lib/addStyles.js":
/*!*****************************************************!*\
  !*** ../node_modules/style-loader/lib/addStyles.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "../node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "../node_modules/style-loader/lib/urls.js":
/*!************************************************!*\
  !*** ../node_modules/style-loader/lib/urls.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "../node_modules/svm/lib/svm.js":
/*!**************************************!*\
  !*** ../node_modules/svm/lib/svm.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// MIT License
// Andrej Karpathy

var svmjs = (function(exports){

  /*
    This is a binary SVM and is trained using the SMO algorithm.
    Reference: "The Simplified SMO Algorithm" (http://math.unt.edu/~hsp0009/smo.pdf)
    
    Simple usage example:
    svm = svmjs.SVM();
    svm.train(data, labels);
    testlabels = svm.predict(testdata);
  */
  var SVM = function(options) {
  }

  SVM.prototype = {
    
    // data is NxD array of floats. labels are 1 or -1.
    train: function(data, labels, options) {
      
      // we need these in helper functions
      this.data = data;
      this.labels = labels;

      // parameters
      options = options || {};
      var C = options.C || 1.0; // C value. Decrease for more regularization
      var tol = options.tol || 1e-4; // numerical tolerance. Don't touch unless you're pro
      var alphatol = options.alphatol || 1e-7; // non-support vectors for space and time efficiency are truncated. To guarantee correct result set this to 0 to do no truncating. If you want to increase efficiency, experiment with setting this little higher, up to maybe 1e-4 or so.
      var maxiter = options.maxiter || 10000; // max number of iterations
      var numpasses = options.numpasses || 10; // how many passes over data with no change before we halt? Increase for more precision.
      
      // instantiate kernel according to options. kernel can be given as string or as a custom function
      var kernel = linearKernel;
      this.kernelType = "linear";
      if("kernel" in options) {
        if(typeof options.kernel === "string") {
          // kernel was specified as a string. Handle these special cases appropriately
          if(options.kernel === "linear") { 
            this.kernelType = "linear"; 
            kernel = linearKernel; 
          }
          if(options.kernel === "rbf") { 
            var rbfSigma = options.rbfsigma || 0.5;
            this.rbfSigma = rbfSigma; // back this up
            this.kernelType = "rbf";
            kernel = makeRbfKernel(rbfSigma);
          }
        } else {
          // assume kernel was specified as a function. Let's just use it
          this.kernelType = "custom";
          kernel = options.kernel;
        }
      }

      // initializations
      this.kernel = kernel;
      this.N = data.length; var N = this.N;
      this.D = data[0].length; var D = this.D;
      this.alpha = zeros(N);
      this.b = 0.0;
      this.usew_ = false; // internal efficiency flag

      // run SMO algorithm
      var iter = 0;
      var passes = 0;
      while(passes < numpasses && iter < maxiter) {
        
        var alphaChanged = 0;
        for(var i=0;i<N;i++) {
        
          var Ei= this.marginOne(data[i]) - labels[i];
          if( (labels[i]*Ei < -tol && this.alpha[i] < C)
           || (labels[i]*Ei > tol && this.alpha[i] > 0) ){
            
            // alpha_i needs updating! Pick a j to update it with
            var j = i;
            while(j === i) j= randi(0, this.N);
            var Ej= this.marginOne(data[j]) - labels[j];
            
            // calculate L and H bounds for j to ensure we're in [0 C]x[0 C] box
            ai= this.alpha[i];
            aj= this.alpha[j];
            var L = 0; var H = C;
            if(labels[i] === labels[j]) {
              L = Math.max(0, ai+aj-C);
              H = Math.min(C, ai+aj);
            } else {
              L = Math.max(0, aj-ai);
              H = Math.min(C, C+aj-ai);
            }
            
            if(Math.abs(L - H) < 1e-4) continue;
            
            var eta = 2*kernel(data[i],data[j]) - kernel(data[i],data[i]) - kernel(data[j],data[j]);
            if(eta >= 0) continue;
            
            // compute new alpha_j and clip it inside [0 C]x[0 C] box
            // then compute alpha_i based on it.
            var newaj = aj - labels[j]*(Ei-Ej) / eta;
            if(newaj>H) newaj = H;
            if(newaj<L) newaj = L;
            if(Math.abs(aj - newaj) < 1e-4) continue; 
            this.alpha[j] = newaj;
            var newai = ai + labels[i]*labels[j]*(aj - newaj);
            this.alpha[i] = newai;
            
            // update the bias term
            var b1 = this.b - Ei - labels[i]*(newai-ai)*kernel(data[i],data[i])
                     - labels[j]*(newaj-aj)*kernel(data[i],data[j]);
            var b2 = this.b - Ej - labels[i]*(newai-ai)*kernel(data[i],data[j])
                     - labels[j]*(newaj-aj)*kernel(data[j],data[j]);
            this.b = 0.5*(b1+b2);
            if(newai > 0 && newai < C) this.b= b1;
            if(newaj > 0 && newaj < C) this.b= b2;
            
            alphaChanged++;
            
          } // end alpha_i needed updating
        } // end for i=1..N
        
        iter++;
        //console.log("iter number %d, alphaChanged = %d", iter, alphaChanged);
        if(alphaChanged == 0) passes++;
        else passes= 0;
        
      } // end outer loop
      
      // if the user was using a linear kernel, lets also compute and store the
      // weights. This will speed up evaluations during testing time
      if(this.kernelType === "linear") {

        // compute weights and store them
        this.w = new Array(this.D);
        for(var j=0;j<this.D;j++) {
          var s= 0.0;
          for(var i=0;i<this.N;i++) {
            s+= this.alpha[i] * labels[i] * data[i][j];
          }
          this.w[j] = s;
          this.usew_ = true;
        }
      } else {

        // okay, we need to retain all the support vectors in the training data,
        // we can't just get away with computing the weights and throwing it out

        // But! We only need to store the support vectors for evaluation of testing
        // instances. So filter here based on this.alpha[i]. The training data
        // for which this.alpha[i] = 0 is irrelevant for future. 
        var newdata = [];
        var newlabels = [];
        var newalpha = [];
        for(var i=0;i<this.N;i++) {
          //console.log("alpha=%f", this.alpha[i]);
          if(this.alpha[i] > alphatol) {
            newdata.push(this.data[i]);
            newlabels.push(this.labels[i]);
            newalpha.push(this.alpha[i]);
          }
        }

        // store data and labels
        this.data = newdata;
        this.labels = newlabels;
        this.alpha = newalpha;
        this.N = this.data.length;
        //console.log("filtered training data from %d to %d support vectors.", data.length, this.data.length);
      }

      var trainstats = {};
      trainstats.iters= iter;
      return trainstats;
    }, 
    
    // inst is an array of length D. Returns margin of given example
    // this is the core prediction function. All others are for convenience mostly
    // and end up calling this one somehow.
    marginOne: function(inst) {

      var f = this.b;
      // if the linear kernel was used and w was computed and stored,
      // (i.e. the svm has fully finished training)
      // the internal class variable usew_ will be set to true.
      if(this.usew_) {

        // we can speed this up a lot by using the computed weights
        // we computed these during train(). This is significantly faster
        // than the version below
        for(var j=0;j<this.D;j++) {
          f += inst[j] * this.w[j];
        }

      } else {

        for(var i=0;i<this.N;i++) {
          f += this.alpha[i] * this.labels[i] * this.kernel(inst, this.data[i]);
        }
      }

      return f;
    },
    
    predictOne: function(inst) { 
      return this.marginOne(inst) > 0 ? 1 : -1; 
    },
    
    // data is an NxD array. Returns array of margins.
    margins: function(data) {
      
      // go over support vectors and accumulate the prediction. 
      var N = data.length;
      var margins = new Array(N);
      for(var i=0;i<N;i++) {
        margins[i] = this.marginOne(data[i]);
      }
      return margins;
      
    },
    
    // data is NxD array. Returns array of 1 or -1, predictions
    predict: function(data) {
      var margs = this.margins(data);
      for(var i=0;i<margs.length;i++) {
        margs[i] = margs[i] > 0 ? 1 : -1;
      }
      return margs;
    },
    
    // THIS FUNCTION IS NOW DEPRECATED. WORKS FINE BUT NO NEED TO USE ANYMORE. 
    // LEAVING IT HERE JUST FOR BACKWARDS COMPATIBILITY FOR A WHILE.
    // if we trained a linear svm, it is possible to calculate just the weights and the offset
    // prediction is then yhat = sign(X * w + b)
    getWeights: function() {
      
      // DEPRECATED
      var w= new Array(this.D);
      for(var j=0;j<this.D;j++) {
        var s= 0.0;
        for(var i=0;i<this.N;i++) {
          s+= this.alpha[i] * this.labels[i] * this.data[i][j];
        }
        w[j]= s;
      }
      return {w: w, b: this.b};
    },

    toJSON: function() {
      
      if(this.kernelType === "custom") {
        console.log("Can't save this SVM because it's using custom, unsupported kernel...");
        return {};
      }

      json = {}
      json.N = this.N;
      json.D = this.D;
      json.b = this.b;

      json.kernelType = this.kernelType;
      if(this.kernelType === "linear") { 
        // just back up the weights
        json.w = this.w; 
      }
      if(this.kernelType === "rbf") { 
        // we need to store the support vectors and the sigma
        json.rbfSigma = this.rbfSigma; 
        json.data = this.data;
        json.labels = this.labels;
        json.alpha = this.alpha;
      }

      return json;
    },
    
    fromJSON: function(json) {
      
      this.N = json.N;
      this.D = json.D;
      this.b = json.b;

      this.kernelType = json.kernelType;
      if(this.kernelType === "linear") { 

        // load the weights! 
        this.w = json.w; 
        this.usew_ = true; 
        this.kernel = linearKernel; // this shouldn't be necessary
      }
      else if(this.kernelType == "rbf") {

        // initialize the kernel
        this.rbfSigma = json.rbfSigma; 
        this.kernel = makeRbfKernel(this.rbfSigma);

        // load the support vectors
        this.data = json.data;
        this.labels = json.labels;
        this.alpha = json.alpha;
      } else {
        console.log("ERROR! unrecognized kernel type." + this.kernelType);
      }
    }
  }
  
  // Kernels
  function makeRbfKernel(sigma) {
    return function(v1, v2) {
      var s=0;
      for(var q=0;q<v1.length;q++) { s += (v1[q] - v2[q])*(v1[q] - v2[q]); } 
      return Math.exp(-s/(2.0*sigma*sigma));
    }
  }
  
  function linearKernel(v1, v2) {
    var s=0; 
    for(var q=0;q<v1.length;q++) { s += v1[q] * v2[q]; } 
    return s;
  }

  // Misc utility functions
  // generate random floating point number between a and b
  function randf(a, b) {
    return Math.random()*(b-a)+a;
  }

  // generate random integer between a and b (b excluded)
  function randi(a, b) {
     return Math.floor(Math.random()*(b-a)+a);
  }

  // create vector of zeros of length n
  function zeros(n) {
    var arr= new Array(n);
    for(var i=0;i<n;i++) { arr[i]= 0; }
    return arr;
  }

  // export public members
  exports = exports || {};
  exports.SVM = SVM;
  exports.makeRbfKernel = makeRbfKernel;
  exports.linearKernel = linearKernel;
  return exports;

})( true && module.exports);  // add exports to module.exports if in node.js


/***/ }),

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./AppView.tsx":
/*!*********************!*\
  !*** ./AppView.tsx ***!
  \*********************/
/*! exports provided: AppView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppView", function() { return AppView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
 // Libraries




var AppView =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AppView, _super);

  function AppView() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AppView.prototype.makeDashboard = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var data;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        data = {
          dashboard: __webpack_require__(/*! dashboards/sample.json */ "./dashboards/sample.json"),
          overwrite: true
        };
        $.post({
          url: '/api/dashboards/db',
          contentType: 'application/json',
          dataType: 'application/json',
          data: JSON.stringify(data),
          complete: function complete(res) {
            alert('Dashboard: ' + data.dashboard.title + '\nStatus: ' + res.statusText);
            location.replace('/d/' + data.dashboard.uid);
          }
        });
        return [2
        /*return*/
        ];
      });
    });
  };

  AppView.prototype.render = function () {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: function onClick() {
        return _this.makeDashboard();
      }
    }, "Sample Dashboard"));
  };

  return AppView;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



/***/ }),

/***/ "./Training/App.css":
/*!**************************!*\
  !*** ./Training/App.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--8-1!../../node_modules/postcss-loader/src??ref--8-2!../../node_modules/sass-loader/lib/loader.js!./App.css */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/lib/loader.js!./Training/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./Training/Model.ts":
/*!***************************!*\
  !*** ./Training/Model.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _strategies_Strategies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./strategies/Strategies */ "./Training/strategies/Strategies.ts");
/* harmony import */ var _common_Predictor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Predictor */ "./common/Predictor.ts");



var Model =
/** @class */
function () {
  function Model() {}

  Model.prototype.getData = function () {
    return this.data;
  };

  Model.prototype.getPredictor = function () {
    return this.predictor;
  };
  /** Load file and save it in data */


  Model.prototype.setData = function (input) {
    if (this.data) {
      this.data.setValue(input);
    }
  };
  /** Set the algorithm to use thanks to the Context*/


  Model.prototype.setAlgorithm = function (alg) {
    this.predictor = new _common_Predictor__WEBPACK_IMPORTED_MODULE_1__["default"](alg, [], '', _strategies_Strategies__WEBPACK_IMPORTED_MODULE_0__["opt"][alg]);
    this.strategy = _strategies_Strategies__WEBPACK_IMPORTED_MODULE_0__["strategies"][alg];
    this.data = _strategies_Strategies__WEBPACK_IMPORTED_MODULE_0__["data"][alg];
  };

  Model.prototype.setPredictorOptions = function (config) {
    var _a;

    (_a = this.predictor) === null || _a === void 0 ? void 0 : _a.setOpt(config);
  };
  /** Save the predictor in function */


  Model.prototype.train = function () {
    var _a;

    var opt = (_a = this.predictor) === null || _a === void 0 ? void 0 : _a.getOpt();

    if (this.strategy && this.data && opt) {
      this.predictor = this.strategy.train(this.data, opt);
    }
  };
  /** Download predictor as JSON */


  Model.prototype.downloadPredictor = function () {
    if (this.predictor) {
      var FileSaver = __webpack_require__(/*! file-saver */ "../node_modules/file-saver/dist/FileSaver.min.js"); // import file saver


      var text = this.predictor.toJSON();
      var file = new File([text], 'Training.json', {
        type: 'text/json;charset=utf-8'
      });
      FileSaver.saveAs(file); // download
    }
  };

  return Model;
}();

/* harmony default export */ __webpack_exports__["default"] = (Model);

/***/ }),

/***/ "./Training/View.tsx":
/*!***************************!*\
  !*** ./Training/View.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ "./Training/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);




var View =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(View, _super);

  function View() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  View.prototype.renderAlgorithmView = function () {
    if (this.props.AlgView) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(this.props.AlgView, {
        options: this.props.options
      });
    } else {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
    }
  };

  View.prototype.render = function () {
    var _a = this.props,
        buttonSelectAlg = _a.buttonSelectAlg,
        selectAlg = _a.selectAlg,
        buttonInputData = _a.buttonInputData,
        buttonInputOpt = _a.buttonInputOpt,
        buttonTrain = _a.buttonTrain,
        predictor = _a.predictor,
        nameAcc = _a.nameAcc,
        accuracy = _a.accuracy,
        buttonDownload = _a.buttonDownload;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "main"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "container"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Training Module"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      htmlFor: "alg",
      className: "gf-form-label width-15"
    }, "Choose the algorithm:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-select-wrapper max-width-20"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
      className: "input-small gf-form-input",
      disabled: false,
      id: "alg",
      onChange: selectAlg
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: "RL"
    }, "Regressione Lineare (RL)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: "SVM"
    }, "Support Vector Machine (SVM)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: "RLOG"
    }, "Regressione Logaritmica (RLOG)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: "REXP"
    }, "Regressione Esponenziale (REXP)")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "css-370vzt-button",
      onClick: buttonSelectAlg
    }, "Confirm"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "graph"
    }, this.renderAlgorithmView())), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "import",
      style: {
        display: 'none'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "container"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "button"
    }, "Import data (.csv)", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      className: "form-input",
      type: "file",
      name: "data",
      id: "data",
      onChange: buttonInputData,
      accept: ".csv,.txt"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "button"
    }, "Import previous options (.json)", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      className: "form-input",
      type: "file",
      name: "opt",
      id: "opt",
      onChange: buttonInputOpt,
      accept: ".json"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      className: "button",
      id: "train",
      type: "button",
      value: "Train \uD83D\uDE82",
      onClick: function onClick() {
        buttonTrain();
      },
      style: {
        display: 'none'
      }
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "container"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Results"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "function gf-form-label mr-0",
      style: {
        display: 'none'
      }
    }, "Function: ", predictor), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "function gf-form-label mr-0",
      style: {
        display: 'none'
      }
    }, nameAcc, ": ", accuracy), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      className: "button",
      type: "button",
      value: "Download Predictor",
      id: "download",
      onClick: buttonDownload,
      style: {
        display: 'none'
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      className: "button",
      id: "reset",
      type: "button",
      value: "Reset",
      onClick: function onClick() {
        window.location.reload(false);
      },
      style: {
        display: 'none'
      }
    }))))));
  };

  return View;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (View);

/***/ }),

/***/ "./Training/ViewModel.tsx":
/*!********************************!*\
  !*** ./Training/ViewModel.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ "./Training/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./View */ "./Training/View.tsx");
/* harmony import */ var _Model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Model */ "./Training/Model.ts");
/* harmony import */ var _strategies_Strategies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./strategies/Strategies */ "./Training/strategies/Strategies.ts");







var ViewModel =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ViewModel, _super);

  function ViewModel(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      algView: undefined,
      options: {},
      fun: '',
      acc: 0
    };
    _this.model = new _Model__WEBPACK_IMPORTED_MODULE_4__["default"]();
    _this.algorithm = 'RL';
    return _this;
  }

  ViewModel.validateFile = function (text) {
    var fileReg = /^[-?\d.\d?,-?\d.\d?\n]+/;

    if (!text.match(fileReg)) {
      throw new Error('Data has wrong formattation!');
    }
  };
  /** Data parsed from string to Array */


  ViewModel.parseCSVtoData = function (text) {
    /* csv delimiters */
    var row = '\n';
    var field = ',';
    var result = []; //output

    text.trim() //remove white spaces
    .split(row) //separate rows
    .forEach(function (element) {
      var sPoint = element.split(field);
      var point = [];
      sPoint.forEach(function (e) {
        point.push(parseFloat(e));
      });
      result.push(point);
    });
    return result;
  };

  ViewModel.prototype.loadData = function (input) {
    var _this = this;

    var reader = new FileReader(); // declare file reader

    if (input) {
      reader.readAsText(input); // read file

      try {
        reader.onload = function (event) {
          // when loaded
          ViewModel.validateFile(event.target ? event.target.result ? event.target.result.toString() : '' : '');
          var data = ViewModel.parseCSVtoData(event.target ? event.target.result ? event.target.result.toString() : '' : '');

          _this.model.setData(data);

          var t = document.getElementById('train');

          if (t) {
            t.setAttribute('style', 'display: block');
          }
        };
      } catch (e) {
        alert(e);
      }
    }
  };

  ViewModel.prototype.loadOpt = function (input) {
    var _this = this;

    if (input) {
      var reader = new FileReader(); // declare file reader

      var exstension = input.name.split('.').pop();

      if (exstension === 'json') {
        reader.readAsText(input); // read file

        try {
          reader.onload = function (event) {
            var _a; // when loaded


            var config = event.target ? event.target.result ? event.target.result.toString() : '' : '';

            _this.model.setPredictorOptions(config);

            _this.setState({
              options: (_a = _this.model.getPredictor()) === null || _a === void 0 ? void 0 : _a.getOpt()
            });

            _this.setState({
              fun: ''
            });

            _this.setState({
              acc: 0
            });
          };
        } catch (e) {
          alert(e);
        }
      } else {
        alert('File extension is not json!');
      }
    }
  };

  ViewModel.prototype.setAlgorithm = function (alg) {
    this.algorithm = alg;
  };

  ViewModel.prototype.selectAlgorithm = function () {
    this.model.setAlgorithm(this.algorithm);
    this.setState({
      algView: _strategies_Strategies__WEBPACK_IMPORTED_MODULE_5__["algview"][this.algorithm]
    });
    this.setState({
      options: _strategies_Strategies__WEBPACK_IMPORTED_MODULE_5__["opt"][this.algorithm]
    });
    var a = document.getElementById('alg');

    if (a) {
      a.setAttribute('disabled', 'true');
    }

    var i = document.getElementById('import');

    if (i) {
      i.setAttribute('style', 'display: block');
    }
  };

  ViewModel.prototype.train = function () {
    var _a, _b, _c;

    if (this.model.getData()) {
      this.model.train();

      if (!((_a = this.model.getPredictor()) === null || _a === void 0 ? void 0 : _a.getPredFun().match(/NaN/))) {
        var f = document.getElementsByClassName('function')[0];
        var f1 = document.getElementsByClassName('function')[1];

        if (f && f1) {
          f.setAttribute('style', 'display: block');
          f1.setAttribute('style', 'display: block');
        }

        var r = document.getElementById('reset');

        if (r) {
          r.setAttribute('style', 'display: block');
        }

        var d = document.getElementById('download');

        if (d) {
          d.setAttribute('style', 'display: block');
        }

        this.setState({
          fun: (_b = this.model.getPredictor()) === null || _b === void 0 ? void 0 : _b.getPredFun()
        });
        this.setState({
          acc: (_c = this.model.getPredictor()) === null || _c === void 0 ? void 0 : _c.getAcc()
        });
      } else {
        alert('Dataset is not relevant to the algorithm!');
      }
    }
  };

  ViewModel.prototype.render = function () {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_View__WEBPACK_IMPORTED_MODULE_3__["default"], {
      selectAlg: function selectAlg(event) {
        _this.setAlgorithm(event.target.value);
      },
      buttonSelectAlg: function buttonSelectAlg() {
        _this.selectAlgorithm();
      },
      buttonInputData: function buttonInputData(e) {
        _this.loadData(e.target ? e.target.files ? e.target.files[0] : null : null);
      },
      buttonInputOpt: function buttonInputOpt(e) {
        _this.loadOpt(e.target ? e.target.files ? e.target.files[0] : null : null);
      },
      buttonTrain: function buttonTrain() {
        return _this.train();
      },
      predictor: this.state.fun,
      nameAcc: this.algorithm === 'RL' || 'RLOG' || 'REXP' ? 'R^2' : 'F-Measure',
      accuracy: this.state.acc,
      buttonDownload: function buttonDownload() {
        _this.model.downloadPredictor();
      },
      AlgView: this.state.algView,
      options: this.state.options
    });
  };

  return ViewModel;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (ViewModel);

/***/ }),

/***/ "./Training/strategies/Regression/AlgorithmViewRegression.tsx":
/*!********************************************************************!*\
  !*** ./Training/strategies/Regression/AlgorithmViewRegression.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var AlgorithmViewRegression =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AlgorithmViewRegression, _super);

  function AlgorithmViewRegression() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.state = {
      prec: 2
    };
    return _this;
  }

  AlgorithmViewRegression.prototype.render = function () {
    var _this = this;

    var options = this.props.options;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "container"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Options"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "RLopt",
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "gf-form-label width-10"
    }, "Precision:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-select-wrapper max-width-15"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
      className: "input-small gf-form-input",
      value: options.getPrecision(),
      onChange: function onChange(event) {
        options.setPrecision(Number(event.target.value));

        _this.setState({
          prec: options.getPrecision()
        });
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: "1"
    }, "1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: "2"
    }, "2"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: "3"
    }, "3"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: "4"
    }, "4"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: "5"
    }, "5")))));
  };

  return AlgorithmViewRegression;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AlgorithmViewRegression);

/***/ }),

/***/ "./Training/strategies/Regression/DataRegression.ts":
/*!**********************************************************!*\
  !*** ./Training/strategies/Regression/DataRegression.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var DataRegression =
/** @class */
function () {
  function DataRegression() {
    this.points = [];
  }

  DataRegression.prototype.setValue = function (dataset) {
    var _this = this;

    this.points = [];
    dataset.forEach(function (p) {
      var point = [0, 0];
      point[0] = p[0];
      point[1] = p[1];

      _this.points.push(point);
    });
  };

  DataRegression.prototype.getPoints = function () {
    return this.points;
  };

  return DataRegression;
}();

/* harmony default export */ __webpack_exports__["default"] = (DataRegression);

/***/ }),

/***/ "./Training/strategies/Regression/REXP/StrategyRegExp.ts":
/*!***************************************************************!*\
  !*** ./Training/strategies/Regression/REXP/StrategyRegExp.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regression */ "../node_modules/regression/dist/regression.js");
/* harmony import */ var regression__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regression__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Predictor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/Predictor */ "./common/Predictor.ts");



var StrategyRegExp =
/** @class */
function () {
  function StrategyRegExp() {}

  StrategyRegExp.prototype.train = function (dataset, options) {
    return new _common_Predictor__WEBPACK_IMPORTED_MODULE_1__["default"]('REXP', regression__WEBPACK_IMPORTED_MODULE_0___default.a.exponential(dataset.getPoints(), {
      order: options.getOrder(),
      precision: options.getPrecision()
    }).equation, regression__WEBPACK_IMPORTED_MODULE_0___default.a.exponential(dataset.getPoints(), {
      order: options.getOrder(),
      precision: options.getPrecision()
    }).string, options, regression__WEBPACK_IMPORTED_MODULE_0___default.a.exponential(dataset.getPoints(), {
      order: options.getOrder(),
      precision: options.getPrecision()
    }).r2);
  };

  return StrategyRegExp;
}();

/* harmony default export */ __webpack_exports__["default"] = (StrategyRegExp);

/***/ }),

/***/ "./Training/strategies/Regression/RL/StrategyRL.ts":
/*!*********************************************************!*\
  !*** ./Training/strategies/Regression/RL/StrategyRL.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regression */ "../node_modules/regression/dist/regression.js");
/* harmony import */ var regression__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regression__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Predictor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/Predictor */ "./common/Predictor.ts");



var StrategyRL =
/** @class */
function () {
  function StrategyRL() {}

  StrategyRL.prototype.train = function (dataset, options) {
    return new _common_Predictor__WEBPACK_IMPORTED_MODULE_1__["default"]('RL', regression__WEBPACK_IMPORTED_MODULE_0___default.a.linear(dataset.getPoints(), {
      order: options.getOrder(),
      precision: options.getPrecision()
    }).equation, regression__WEBPACK_IMPORTED_MODULE_0___default.a.linear(dataset.getPoints(), {
      order: options.getOrder(),
      precision: options.getPrecision()
    }).string, options, regression__WEBPACK_IMPORTED_MODULE_0___default.a.linear(dataset.getPoints(), {
      order: options.getOrder(),
      precision: options.getPrecision()
    }).r2);
  };

  return StrategyRL;
}();

/* harmony default export */ __webpack_exports__["default"] = (StrategyRL);

/***/ }),

/***/ "./Training/strategies/Regression/RLOG/StrategyRegLog.ts":
/*!***************************************************************!*\
  !*** ./Training/strategies/Regression/RLOG/StrategyRegLog.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regression */ "../node_modules/regression/dist/regression.js");
/* harmony import */ var regression__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regression__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Predictor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/Predictor */ "./common/Predictor.ts");



var StrategyRegLog =
/** @class */
function () {
  function StrategyRegLog() {}

  StrategyRegLog.prototype.train = function (dataset, options) {
    return new _common_Predictor__WEBPACK_IMPORTED_MODULE_1__["default"]('RLOG', regression__WEBPACK_IMPORTED_MODULE_0___default.a.logarithmic(dataset.getPoints(), {
      order: options.getOrder(),
      precision: options.getPrecision()
    }).equation, regression__WEBPACK_IMPORTED_MODULE_0___default.a.logarithmic(dataset.getPoints(), {
      order: options.getOrder(),
      precision: options.getPrecision()
    }).string, options, regression__WEBPACK_IMPORTED_MODULE_0___default.a.logarithmic(dataset.getPoints(), {
      order: options.getOrder(),
      precision: options.getPrecision()
    }).r2);
  };

  return StrategyRegLog;
}();

/* harmony default export */ __webpack_exports__["default"] = (StrategyRegLog);

/***/ }),

/***/ "./Training/strategies/SVM/AlgorithmViewSVM.tsx":
/*!******************************************************!*\
  !*** ./Training/strategies/SVM/AlgorithmViewSVM.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var AlgrithmViewSVM =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AlgrithmViewSVM, _super);

  function AlgrithmViewSVM() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    /** Options:
    {
        C = 1.0; For C, Higher = you trust your data more. Lower = more regularization. Should be in range of around 1e-2 ... 1e5 at most.
        tol = 1e-4; // do not touch this unless you're pro
        alphatol = 1e-7; // used for pruning non-support vectors. do not touch unless you're pro
        maxiter // if you have a larger problem, you may need to increase this
        kernel // kernel type
        numpasses = 10; // increase this for higher precision of the result. (but slower)
    }
     */


    _this.state = {
      opt: 0
    };
    return _this;
  }

  AlgrithmViewSVM.prototype.render = function () {
    var _this = this;

    var options = this.props.options;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "container"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      id: "options"
    }, "Options"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "SVMopt",
      className: "mb-2"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "gf-form-label width-10 mb-2"
    }, "Kernel type: linear"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "gf-form-label width-10 mb-2"
    }, "Alpha Tollerance: 1e-7"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "gf-form-label width-10 mb-2"
    }, "Tollerance: 1e-4"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "gf-form-label width-10"
    }, "C:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      className: "input-small gf-form-input width-15",
      type: "number",
      id: "C",
      value: options.getC(),
      onChange: function onChange(event) {
        options.setC(Number(event.target.value));

        _this.setState({
          opt: options.getC()
        });
      }
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "gf-form-label width-10"
    }, "Max iterations:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      className: "input-small gf-form-input width-15",
      type: "number",
      id: "maxiter",
      value: options.getMaxIter(),
      onChange: function onChange(event) {
        options.setMaxIter(Number(event.target.value));

        _this.setState({
          opt: options.getMaxIter()
        });
      }
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "gf-form-label width-10"
    }, "Number passes:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      className: "input-small gf-form-input width-15",
      type: "number",
      id: "numpas",
      value: options.getNumPass(),
      onChange: function onChange(event) {
        options.setNumPass(Number(event.target.value));

        _this.setState({
          opt: options.getNumPass()
        });
      }
    }))));
  };

  return AlgrithmViewSVM;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AlgrithmViewSVM);

/***/ }),

/***/ "./Training/strategies/SVM/DataSVM.ts":
/*!********************************************!*\
  !*** ./Training/strategies/SVM/DataSVM.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var DataSVM =
/** @class */
function () {
  function DataSVM() {
    this.points = [];
    this.labels = [];
  }

  DataSVM.prototype.setValue = function (dataset) {
    var _this = this;

    this.points = [];
    this.labels = [];
    dataset.forEach(function (triple) {
      _this.points.push([triple[0], triple[1]]);

      _this.labels.push(triple[2]);
    });
  };

  DataSVM.prototype.getPoints = function () {
    return this.points;
  };

  DataSVM.prototype.getLabels = function () {
    return this.labels;
  };

  return DataSVM;
}();

/* harmony default export */ __webpack_exports__["default"] = (DataSVM);

/***/ }),

/***/ "./Training/strategies/SVM/StrategySVM.ts":
/*!************************************************!*\
  !*** ./Training/strategies/SVM/StrategySVM.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_Predictor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/Predictor */ "./common/Predictor.ts");


var StrategySVM =
/** @class */
function () {
  function StrategySVM() {}
  /** SVM predictor:
      {
       N: numero di punti
       D: dimensione dei punti (es. 2,3..)
       b: c della retta in forma implicita
       kernerlType: tipo di kernel
       w: a e b della retta in forma implicita
      }
   */


  StrategySVM.prototype.train = function (dataset, options) {
    var svm = __webpack_require__(/*! svm */ "../node_modules/svm/lib/svm.js");

    var SVM = new svm.SVM();
    SVM.train(dataset.getPoints(), dataset.getLabels(), {
      C: options.getC(),
      maxiter: options.getMaxIter(),
      numpass: options.getNumPass()
    });
    var pred = SVM.predict(dataset.getPoints());
    var CM = [[0, 0], [0, 0]];

    for (var i = 0; i < dataset.getLabels().length; i++) {
      if (pred[i] > 0) {
        //predicted positive
        if (dataset.getLabels()[i] === 1) {
          //is positive
          CM[0][0]++;
        } else {
          //is negative
          CM[0][1]++;
        }
      } else {
        //predicted negative
        if (dataset.getLabels()[i] === 1) {
          //is positive
          CM[1][0]++;
        } else {
          //is negative
          CM[1][1]++;
        }
      }
    }

    var tp, fp, fn;
    tp = CM[0][0]; // tn = CM[1][1];

    fp = CM[0][1];
    fn = CM[1][0]; //precision

    var precision = tp / (tp + fp); //recall/sensitivity

    var recall = tp / (tp + fn); //F-measure

    var fMeasure = 2 * (precision * recall) / (precision + recall);

    if (tp + fp === 0 || tp + fn === 0) {
      fMeasure = 0;
    }

    return new _common_Predictor__WEBPACK_IMPORTED_MODULE_0__["default"]('SVM', [SVM.b, SVM.w[0], SVM.w[1]], // [ w0, w1, w2 ] = [ c, a, b ]
    "y = " + -SVM.w[0] / SVM.w[1] + "x + " + -SVM.b / SVM.w[0], options, fMeasure);
  };

  return StrategySVM;
}();

/* harmony default export */ __webpack_exports__["default"] = (StrategySVM);

/***/ }),

/***/ "./Training/strategies/Strategies.ts":
/*!*******************************************!*\
  !*** ./Training/strategies/Strategies.ts ***!
  \*******************************************/
/*! exports provided: strategies, algview, data, opt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strategies", function() { return strategies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "algview", function() { return algview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opt", function() { return opt; });
/* harmony import */ var _Regression_RL_StrategyRL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Regression/RL/StrategyRL */ "./Training/strategies/Regression/RL/StrategyRL.ts");
/* harmony import */ var _SVM_StrategySVM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SVM/StrategySVM */ "./Training/strategies/SVM/StrategySVM.ts");
/* harmony import */ var _SVM_AlgorithmViewSVM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SVM/AlgorithmViewSVM */ "./Training/strategies/SVM/AlgorithmViewSVM.tsx");
/* harmony import */ var _SVM_DataSVM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SVM/DataSVM */ "./Training/strategies/SVM/DataSVM.ts");
/* harmony import */ var _common_OptionsRegression__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/OptionsRegression */ "./common/OptionsRegression.ts");
/* harmony import */ var _common_OptionsSVM__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/OptionsSVM */ "./common/OptionsSVM.ts");
/* harmony import */ var _Regression_DataRegression__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Regression/DataRegression */ "./Training/strategies/Regression/DataRegression.ts");
/* harmony import */ var _Regression_AlgorithmViewRegression__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Regression/AlgorithmViewRegression */ "./Training/strategies/Regression/AlgorithmViewRegression.tsx");
/* harmony import */ var _Regression_RLOG_StrategyRegLog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Regression/RLOG/StrategyRegLog */ "./Training/strategies/Regression/RLOG/StrategyRegLog.ts");
/* harmony import */ var _Regression_REXP_StrategyRegExp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Regression/REXP/StrategyRegExp */ "./Training/strategies/Regression/REXP/StrategyRegExp.ts");










var strategies = {
  RL: new _Regression_RL_StrategyRL__WEBPACK_IMPORTED_MODULE_0__["default"](),
  SVM: new _SVM_StrategySVM__WEBPACK_IMPORTED_MODULE_1__["default"](),
  RLOG: new _Regression_RLOG_StrategyRegLog__WEBPACK_IMPORTED_MODULE_8__["default"](),
  REXP: new _Regression_REXP_StrategyRegExp__WEBPACK_IMPORTED_MODULE_9__["default"]()
};
var algview = {
  RL: _Regression_AlgorithmViewRegression__WEBPACK_IMPORTED_MODULE_7__["default"],
  SVM: _SVM_AlgorithmViewSVM__WEBPACK_IMPORTED_MODULE_2__["default"],
  RLOG: _Regression_AlgorithmViewRegression__WEBPACK_IMPORTED_MODULE_7__["default"],
  REXP: _Regression_AlgorithmViewRegression__WEBPACK_IMPORTED_MODULE_7__["default"]
};
var data = {
  RL: new _Regression_DataRegression__WEBPACK_IMPORTED_MODULE_6__["default"](),
  SVM: new _SVM_DataSVM__WEBPACK_IMPORTED_MODULE_3__["default"](),
  RLOG: new _Regression_DataRegression__WEBPACK_IMPORTED_MODULE_6__["default"](),
  REXP: new _Regression_DataRegression__WEBPACK_IMPORTED_MODULE_6__["default"]()
};
var opt = {
  RL: new _common_OptionsRegression__WEBPACK_IMPORTED_MODULE_4__["default"](),
  SVM: new _common_OptionsSVM__WEBPACK_IMPORTED_MODULE_5__["default"](),
  RLOG: new _common_OptionsRegression__WEBPACK_IMPORTED_MODULE_4__["default"](),
  REXP: new _common_OptionsRegression__WEBPACK_IMPORTED_MODULE_4__["default"]()
};

/***/ }),

/***/ "./common/OptionsRegression.ts":
/*!*************************************!*\
  !*** ./common/OptionsRegression.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var OptionRegression =
/** @class */
function () {
  function OptionRegression() {
    this.order = 2;
    this.precision = 2;
    this.toPredict = 0;
  }

  OptionRegression.prototype.fromJSON = function (json) {
    this.order = json.order;
    this.precision = json.precision;
    this.toPredict = json.toPredict || 0;
    return this;
  };

  OptionRegression.prototype.setValueFile = function (config) {
    try {
      var predictor = JSON.parse(config);
      this.order = predictor.opt.order;
      this.precision = predictor.opt.precision;
    } catch (e) {
      throw new Error('Predictor bad formatted');
    }
  };

  OptionRegression.prototype.getOrder = function () {
    return this.order;
  };

  OptionRegression.prototype.getPrecision = function () {
    return this.precision;
  };

  OptionRegression.prototype.getToPredict = function () {
    return this.toPredict;
  };

  OptionRegression.prototype.setPrecision = function (p) {
    this.precision = p;
  };

  OptionRegression.prototype.setToPredict = function (toPredict) {
    this.toPredict = toPredict;
  };

  return OptionRegression;
}();

/* harmony default export */ __webpack_exports__["default"] = (OptionRegression);

/***/ }),

/***/ "./common/OptionsSVM.ts":
/*!******************************!*\
  !*** ./common/OptionsSVM.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var OptionSVM =
/** @class */
function () {
  function OptionSVM() {
    this.C = 1;
    this.maxiter = 10000;
    this.numpass = 10;
    this.firstQuery = 0;
  }

  OptionSVM.prototype.fromJSON = function (json) {
    this.C = json.C;
    this.maxiter = json.maxiter;
    this.numpass = json.numpass;
    this.firstQuery = json.firstQuery || 0;
    return this;
  };

  OptionSVM.prototype.setValueFile = function (config) {
    try {
      var predictor = JSON.parse(config);
      this.C = predictor.opt.C;
      this.maxiter = predictor.opt.maxiter;
      this.numpass = predictor.opt.numpass;
    } catch (e) {
      throw new Error('Predictor bad formatted');
    }
  };

  OptionSVM.prototype.getC = function () {
    return this.C;
  };

  OptionSVM.prototype.getMaxIter = function () {
    return this.maxiter;
  };

  OptionSVM.prototype.getNumPass = function () {
    return this.numpass;
  };

  OptionSVM.prototype.getFirstQuery = function () {
    return this.firstQuery;
  };

  OptionSVM.prototype.setC = function (c) {
    this.C = c;
  };

  OptionSVM.prototype.setMaxIter = function (m) {
    this.maxiter = m;
  };

  OptionSVM.prototype.setNumPass = function (n) {
    this.numpass = n;
  };

  OptionSVM.prototype.setFirstQuery = function (firstQuery) {
    this.firstQuery = firstQuery;
  };

  return OptionSVM;
}();

/* harmony default export */ __webpack_exports__["default"] = (OptionSVM);

/***/ }),

/***/ "./common/Predictor.ts":
/*!*****************************!*\
  !*** ./common/Predictor.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _panels_PredictionPanel_strategies_strategies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../panels/PredictionPanel/strategies/strategies */ "./panels/PredictionPanel/strategies/strategies.ts");
/**
 * Project: Predire in Grafana
 * File: Predictor.ts
 * Author: Federico Carboni
 * Created: 2020-04-16
 * Version: 0.1
 * -----------------------------------------------------------------------------------------
 * Copyright 2020 ProApesGroup.
 * Licensed under the MIT License. See LICENSE in the project root for license informations.
 * -----------------------------------------------------------------------------------------
 * Changelog:
 * 0.1 - Writing Predictor class for incpsulation of pred info.
 */


var Predictor =
/** @class */
function () {
  function Predictor(algorithm, coefficients, predFun, opt, acc) {
    this.algorithm = algorithm;
    this.coefficients = coefficients;
    this.predFun = predFun;
    this.opt = opt;

    if (acc) {
      this.accuracy = acc;
    }
  }

  Predictor.prototype.getAlgorithm = function () {
    return this.algorithm;
  };

  Predictor.prototype.getCoefficients = function () {
    return this.coefficients;
  };

  Predictor.prototype.getPredFun = function () {
    return this.predFun;
  };

  Predictor.prototype.getOpt = function () {
    return this.opt;
  };

  Predictor.prototype.getAcc = function () {
    return this.accuracy;
  };

  Predictor.prototype.setOpt = function (conf) {
    var _a;

    (_a = this.opt) === null || _a === void 0 ? void 0 : _a.setValueFile(conf);
  };

  Predictor.fromJSON = function (str) {
    if (!str) {
      throw Error('No file found');
    }

    var json = JSON.parse(str);
    var opt = _panels_PredictionPanel_strategies_strategies__WEBPACK_IMPORTED_MODULE_0__["options"][json.algorithm];
    console.log(str);
    console.log(json); // if (!json.algorithm || !json.coefficients) {
    //     throw Error('Error reading file');
    // }

    var predictor = new Predictor(json.algorithm, json.coefficients, json.predFun || '', opt.fromJSON(json.opt || {}), json.accuracy);
    return predictor;
  };

  Predictor.prototype.toJSON = function () {
    var textFile = JSON.stringify({
      GroupName: 'ProApes',
      Version: '1.5',
      PluginName: 'PredireInGrafana',
      algorithm: this.algorithm,
      coefficients: this.coefficients,
      predFun: this.predFun,
      opt: this.opt,
      accuracy: this.accuracy
    }, null, 2); // string output

    return textFile;
  };

  return Predictor;
}();

/* harmony default export */ __webpack_exports__["default"] = (Predictor);

/***/ }),

/***/ "./dashboards/sample.json":
/*!********************************!*\
  !*** ./dashboards/sample.json ***!
  \********************************/
/*! exports provided: annotations, editable, gnetId, graphTooltip, id, links, panels, refresh, schemaVersion, style, tags, templating, time, timepicker, timezone, title, uid, variables, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"annotations\":{\"list\":[{\"builtIn\":1,\"datasource\":\"-- Grafana --\",\"enable\":true,\"hide\":true,\"iconColor\":\"rgba(0, 211, 255, 1)\",\"name\":\"Annotations & Alerts\",\"type\":\"dashboard\"}]},\"editable\":true,\"gnetId\":null,\"graphTooltip\":0,\"id\":null,\"links\":[],\"panels\":[{\"datasource\":null,\"gridPos\":{\"h\":9,\"w\":10,\"x\":0,\"y\":0},\"id\":2,\"options\":{\"predictor\":\"{\\n  \\\"GroupName\\\": \\\"ProApes\\\",\\n  \\\"Version\\\": \\\"1.5\\\",\\n  \\\"PluginName\\\": \\\"PredireInGrafana\\\",\\n  \\\"algorithm\\\": \\\"RL\\\",\\n  \\\"coefficients\\\": [\\n    1.07,\\n    0.46\\n  ],\\n  \\\"predFun\\\": \\\"y = 1.07x + 0.46\\\",\\n  \\\"opt\\\": {\\n    \\\"order\\\": 2,\\n    \\\"precision\\\": 2,\\n    \\\"toPredict\\\": 0\\n  },\\n  \\\"accuracy\\\": 0.29\\n}\"},\"targets\":[{\"groupBy\":[{\"params\":[\"$__interval\"],\"type\":\"time\"},{\"params\":[\"null\"],\"type\":\"fill\"}],\"measurement\":\"cpu\",\"orderByTime\":\"ASC\",\"policy\":\"default\",\"query\":\"SELECT mean(\\\"usage_system\\\") FROM \\\"cpu\\\" WHERE (\\\"cpu\\\" = 'cpu0') AND $timeFilter GROUP BY time($__interval) fill(null)\",\"rawQuery\":false,\"refId\":\"A\",\"resultFormat\":\"time_series\",\"select\":[[{\"params\":[\"usage_system\"],\"type\":\"field\"},{\"params\":[],\"type\":\"mean\"}]],\"tags\":[{\"key\":\"cpu\",\"operator\":\"=\",\"value\":\"cpu0\"}]},{\"groupBy\":[{\"params\":[\"$__interval\"],\"type\":\"time\"},{\"params\":[\"null\"],\"type\":\"fill\"}],\"measurement\":\"cpu\",\"orderByTime\":\"ASC\",\"policy\":\"default\",\"query\":\"SELECT mean(\\\"usage_system\\\") FROM \\\"cpu\\\" WHERE (\\\"cpu\\\" = 'cpu0') AND $timeFilter GROUP BY time($__interval) fill(null)\",\"rawQuery\":false,\"refId\":\"B\",\"resultFormat\":\"time_series\",\"select\":[[{\"params\":[\"usage_system\"],\"type\":\"field\"},{\"params\":[],\"type\":\"mean\"}]],\"tags\":[{\"key\":\"cpu\",\"operator\":\"=\",\"value\":\"cpu1\"}]}],\"timeFrom\":null,\"timeShift\":null,\"title\":\"Prediction Panel\",\"type\":\"prediction-panel\"},{\"alert\":{\"alertRuleTags\":{},\"conditions\":[{\"evaluator\":{\"params\":[10],\"type\":\"gt\"},\"operator\":{\"type\":\"and\"},\"query\":{\"params\":[\"A\",\"5m\",\"now\"]},\"reducer\":{\"params\":[],\"type\":\"avg\"},\"type\":\"query\"}],\"executionErrorState\":\"alerting\",\"for\":\"5m\",\"frequency\":\"5s\",\"handler\":1,\"name\":\"Diff alert\",\"noDataState\":\"no_data\",\"notifications\":[]},\"aliasColors\":{},\"bars\":false,\"dashLength\":10,\"dashes\":false,\"datasource\":null,\"fill\":1,\"fillGradient\":0,\"gridPos\":{\"h\":9,\"w\":12,\"x\":10,\"y\":0},\"hiddenSeries\":false,\"id\":4,\"legend\":{\"avg\":false,\"current\":false,\"max\":false,\"min\":false,\"show\":true,\"total\":false,\"values\":false},\"lines\":true,\"linewidth\":1,\"nullPointMode\":\"null\",\"options\":{\"dataLinks\":[]},\"percentage\":false,\"pointradius\":2,\"points\":false,\"renderer\":\"flot\",\"seriesOverrides\":[],\"spaceLength\":10,\"stack\":false,\"steppedLine\":false,\"targets\":[{\"groupBy\":[{\"params\":[\"$__interval\"],\"type\":\"time\"},{\"params\":[\"linear\"],\"type\":\"fill\"}],\"measurement\":\"predictionDiffRL\",\"orderByTime\":\"ASC\",\"policy\":\"default\",\"refId\":\"A\",\"resultFormat\":\"time_series\",\"select\":[[{\"params\":[\"value\"],\"type\":\"field\"},{\"params\":[],\"type\":\"mean\"}]],\"tags\":[]}],\"thresholds\":[{\"colorMode\":\"critical\",\"fill\":true,\"line\":true,\"op\":\"gt\",\"value\":10}],\"timeFrom\":null,\"timeRegions\":[],\"timeShift\":null,\"title\":\"Prediction diff\",\"tooltip\":{\"shared\":true,\"sort\":0,\"value_type\":\"individual\"},\"type\":\"graph\",\"xaxis\":{\"buckets\":null,\"mode\":\"time\",\"name\":null,\"show\":true,\"values\":[]},\"yaxes\":[{\"format\":\"short\",\"label\":null,\"logBase\":1,\"max\":null,\"min\":null,\"show\":true},{\"format\":\"short\",\"label\":null,\"logBase\":1,\"max\":null,\"min\":null,\"show\":true}],\"yaxis\":{\"align\":false,\"alignLevel\":null}}],\"refresh\":\"5s\",\"schemaVersion\":22,\"style\":\"dark\",\"tags\":[],\"templating\":{\"list\":[]},\"time\":{\"from\":\"now-5m\",\"to\":\"now\"},\"timepicker\":{\"refresh_intervals\":[\"5s\",\"10s\",\"30s\",\"1m\",\"5m\",\"15m\",\"30m\",\"1h\",\"2h\",\"1d\"]},\"timezone\":\"\",\"title\":\"Sample Panel\",\"uid\":\"sample-panel\",\"variables\":{\"list\":[]},\"version\":11}");

/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! exports provided: ConfigCtrl, plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigCtrl", function() { return ConfigCtrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var AppView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! AppView */ "./AppView.tsx");
/* harmony import */ var Training_ViewModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Training/ViewModel */ "./Training/ViewModel.tsx");




var ConfigCtrl =
/** @class */
function () {
  function ConfigCtrl() {}

  return ConfigCtrl;
}(); // Placeholer class just for enable app.. waiting for grafana updates



var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["AppPlugin"]().addConfigPage({
  title: 'Wizard',
  icon: 'fa fa-magic',
  body: AppView__WEBPACK_IMPORTED_MODULE_1__["AppView"],
  id: 'import'
}).addConfigPage({
  title: 'Training',
  icon: 'fa fa-arrow-down',
  body: Training_ViewModel__WEBPACK_IMPORTED_MODULE_2__["default"],
  id: 'training'
});

/***/ }),

/***/ "./panels/PredictionPanel/strategies/Config.ts":
/*!*****************************************************!*\
  !*** ./panels/PredictionPanel/strategies/Config.ts ***!
  \*****************************************************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var Config =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Config, _super);

  function Config() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return Config;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



/***/ }),

/***/ "./panels/PredictionPanel/strategies/Regression/ConfigRegression.tsx":
/*!***************************************************************************!*\
  !*** ./panels/PredictionPanel/strategies/Regression/ConfigRegression.tsx ***!
  \***************************************************************************/
/*! exports provided: ConfigRegression */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigRegression", function() { return ConfigRegression; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Config */ "./panels/PredictionPanel/strategies/Config.ts");





var ConfigRegression =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ConfigRegression, _super);

  function ConfigRegression() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ConfigRegression.prototype.getSeriesNames = function () {
    return this.props.data.series.map(function (serie) {
      return serie.name || 'unknown';
    });
  };

  ConfigRegression.prototype.renderQueryOptions = function () {
    var e_1, _a;

    var _b;

    var seriesName = this.getSeriesNames();
    var options = [];

    try {
      for (var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(seriesName.keys()), _d = _c.next(); !_d.done; _d = _c.next()) {
        var i = _d.value;
        options.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: i,
          selected: ((_b = this.predictor) === null || _b === void 0 ? void 0 : _b.getOpt().getToPredict()) === i
        }, seriesName[i]));
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
      } finally {
        if (e_1) throw e_1.error;
      }
    }

    return options;
  };

  ConfigRegression.prototype.setToPredict = function (value) {
    var _a;

    var opt = (_a = this.props.options.predictor) === null || _a === void 0 ? void 0 : _a.getOpt();
    opt.setToPredict(Number.parseInt(value, 10));
    this.render();
  };

  ConfigRegression.prototype.render = function () {
    var _this = this;

    var _a, _b, _c, _d, _e;

    this.predictor = this.props.options.predictor;

    if (!((_a = this.predictor) === null || _a === void 0 ? void 0 : _a.getOpt().getToPredict())) {
      (_b = this.predictor) === null || _b === void 0 ? void 0 : _b.getOpt().setToPredict(0);
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["PanelOptionsGroup"], {
      title: 'Regression - ' + ((_c = this.predictor) === null || _c === void 0 ? void 0 : _c.getAlgorithm())
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, ((_d = this.predictor) === null || _d === void 0 ? void 0 : _d.getPredFun()) ? 'Function: ' + ((_e = this.predictor) === null || _e === void 0 ? void 0 : _e.getPredFun()) : ''), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "gf-form-label width-10",
      style: {
        display: 'inline-block'
      }
    }, ' ', "y (value to predict)", ' '), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-select-wrapper width-10",
      style: {
        display: 'inline-block'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
      className: "input-small gf-form-input",
      onChange: function onChange(event) {
        return _this.setToPredict(event.target.value);
      }
    }, this.renderQueryOptions())));
  };

  return ConfigRegression;
}(_Config__WEBPACK_IMPORTED_MODULE_3__["Config"]);



/***/ }),

/***/ "./panels/PredictionPanel/strategies/Regression/REXP/StrategyREXP.ts":
/*!***************************************************************************!*\
  !*** ./panels/PredictionPanel/strategies/Regression/REXP/StrategyREXP.ts ***!
  \***************************************************************************/
/*! exports provided: StrategyREXP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrategyREXP", function() { return StrategyREXP; });
/* harmony import */ var _utils_Data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/Data */ "./panels/PredictionPanel/utils/Data.ts");
/* harmony import */ var _utils_Predicted__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/Predicted */ "./panels/PredictionPanel/utils/Predicted.ts");



var StrategyREXP =
/** @class */
function () {
  function StrategyREXP() {
    this.predicted = new _utils_Predicted__WEBPACK_IMPORTED_MODULE_1__["Predicted"]();
  }

  StrategyREXP.prototype.predict = function (data, predictor) {
    this.predicted.clear();
    this.toPredict = predictor.getOpt().getToPredict();
    var base = 1 - (this.toPredict || 0); //the other one

    var coeff = predictor.getCoefficients();

    var f = function f(x) {
      return coeff[0] * Math.exp(coeff[1] * x);
    };

    if (!data) {
      throw Error('Data not found');
    }

    this.data = data;
    var it = new _utils_Data__WEBPACK_IMPORTED_MODULE_0__["DataIterator"](this.data);
    var val;

    while (val = it.next()) {
      if (val.a || val.b) {
        this.predicted.addValues({
          value: f(base === 0 ? val.a : val.b),
          time: val.time
        });
      }
    }

    return this.predicted;
  };

  StrategyREXP.prototype.saveToInflux = function () {
    var index = this.predicted.size() - 1;
    $.post({
      url: 'http://localhost:8086/write?db=telegraf',
      data: 'predictionREXP value=' + this.predicted.getAt(index).value + ' ' + this.predicted.getAt(index).time + '000000'
    });
    var time = this.predicted.getAt(index).time;
    var diff;

    if (!this.toPredict || this.toPredict === 0) {
      diff = this.data.getAt(index).a - this.predicted.getAt(index).value;
    } else {
      diff = this.data.getAt(index).b - this.predicted.getAt(index).value;
    }

    $.post({
      url: 'http://localhost:8086/write?db=telegraf',
      data: 'predictionDiffREXP value=' + Math.abs(diff) + ' ' + time + '000000'
    });
  };

  return StrategyREXP;
}();



/***/ }),

/***/ "./panels/PredictionPanel/strategies/Regression/RL/StrategyRL.ts":
/*!***********************************************************************!*\
  !*** ./panels/PredictionPanel/strategies/Regression/RL/StrategyRL.ts ***!
  \***********************************************************************/
/*! exports provided: StrategyRL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrategyRL", function() { return StrategyRL; });
/* harmony import */ var _utils_Data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/Data */ "./panels/PredictionPanel/utils/Data.ts");
/* harmony import */ var _utils_Predicted__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/Predicted */ "./panels/PredictionPanel/utils/Predicted.ts");



var StrategyRL =
/** @class */
function () {
  function StrategyRL() {
    this.predicted = new _utils_Predicted__WEBPACK_IMPORTED_MODULE_1__["Predicted"]();
  }

  StrategyRL.prototype.predict = function (data, predictor) {
    this.predicted.clear();
    this.toPredict = predictor.getOpt().getToPredict();
    var base = 1 - (this.toPredict || 0); //the other one

    var coeff = predictor.getCoefficients();

    var f = function f(x) {
      return x ? x * coeff[0] + coeff[1] : 0;
    };

    if (!data) {
      throw Error('Data not found');
    }

    this.data = data;
    var it = new _utils_Data__WEBPACK_IMPORTED_MODULE_0__["DataIterator"](this.data);
    var val;

    while (val = it.next()) {
      if (val.a || val.b) {
        this.predicted.addValues({
          value: f(base === 0 ? val.a : val.b),
          time: val.time
        });
      }
    }

    return this.predicted;
  };

  StrategyRL.prototype.saveToInflux = function () {
    var index = this.predicted.size() - 1;
    $.post({
      url: 'http://localhost:8086/write?db=telegraf',
      data: 'predictionRL value=' + this.predicted.getAt(index).value + ' ' + this.predicted.getAt(index).time + '000000'
    });
    var time = this.predicted.getAt(index).time;
    var diff;

    if (!this.toPredict || this.toPredict === 0) {
      diff = this.data.getAt(index).a - this.predicted.getAt(index).value;
    } else {
      diff = this.data.getAt(index).b - this.predicted.getAt(index).value;
    }

    $.post({
      url: 'http://localhost:8086/write?db=telegraf',
      data: 'predictionDiffRL value=' + Math.abs(diff) + ' ' + time + '000000'
    });
  };

  return StrategyRL;
}();



/***/ }),

/***/ "./panels/PredictionPanel/strategies/Regression/RLOG/StrategyRLOG.ts":
/*!***************************************************************************!*\
  !*** ./panels/PredictionPanel/strategies/Regression/RLOG/StrategyRLOG.ts ***!
  \***************************************************************************/
/*! exports provided: StrategyRLOG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrategyRLOG", function() { return StrategyRLOG; });
/* harmony import */ var _utils_Data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/Data */ "./panels/PredictionPanel/utils/Data.ts");
/* harmony import */ var _utils_Predicted__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/Predicted */ "./panels/PredictionPanel/utils/Predicted.ts");



var StrategyRLOG =
/** @class */
function () {
  function StrategyRLOG() {
    this.predicted = new _utils_Predicted__WEBPACK_IMPORTED_MODULE_1__["Predicted"]();
  }

  StrategyRLOG.prototype.predict = function (data, predictor) {
    this.predicted.clear();
    this.toPredict = predictor.getOpt().getToPredict();
    var base = 1 - (this.toPredict || 0); //the other one

    var coeff = predictor.getCoefficients();

    var f = function f(x) {
      return coeff[0] + coeff[1] * Math.log(x);
    };

    if (!data) {
      throw Error('Data not found');
    }

    this.data = data;
    var it = new _utils_Data__WEBPACK_IMPORTED_MODULE_0__["DataIterator"](this.data);
    var val;

    while (val = it.next()) {
      if (val.a || val.b) {
        this.predicted.addValues({
          value: f(base === 0 ? val.a : val.b),
          time: val.time
        });
      }
    }

    return this.predicted;
  };

  StrategyRLOG.prototype.saveToInflux = function () {
    var index = this.predicted.size() - 1;
    $.post({
      url: 'http://localhost:8086/write?db=telegraf',
      data: 'predictionRLOG value=' + this.predicted.getAt(index).value + ' ' + this.predicted.getAt(index).time + '000000'
    });
    var time = this.predicted.getAt(index).time;
    var diff;

    if (!this.toPredict || this.toPredict === 0) {
      diff = this.data.getAt(index).a - this.predicted.getAt(index).value;
    } else {
      diff = this.data.getAt(index).b - this.predicted.getAt(index).value;
    }

    $.post({
      url: 'http://localhost:8086/write?db=telegraf',
      data: 'predictionDiffRLOG value=' + Math.abs(diff) + ' ' + time + '000000'
    });
  };

  return StrategyRLOG;
}();



/***/ }),

/***/ "./panels/PredictionPanel/strategies/SVM/ConfigSVM.tsx":
/*!*************************************************************!*\
  !*** ./panels/PredictionPanel/strategies/SVM/ConfigSVM.tsx ***!
  \*************************************************************/
/*! exports provided: ConfigSVM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigSVM", function() { return ConfigSVM; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Config */ "./panels/PredictionPanel/strategies/Config.ts");





var ConfigSVM =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ConfigSVM, _super);

  function ConfigSVM() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ConfigSVM.prototype.getSeriesNames = function () {
    return this.props.data.series.map(function (serie) {
      return serie.name || 'unknown';
    });
  };

  ConfigSVM.prototype.renderQueryOptions = function () {
    var e_1, _a;

    var _b;

    var seriesName = this.getSeriesNames();
    var options = [];

    try {
      for (var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(seriesName.keys()), _d = _c.next(); !_d.done; _d = _c.next()) {
        var i = _d.value;
        options.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: i,
          selected: ((_b = this.predictor) === null || _b === void 0 ? void 0 : _b.getOpt().getFirstQuery()) === i
        }, seriesName[i]));
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
      } finally {
        if (e_1) throw e_1.error;
      }
    }

    return options;
  };

  ConfigSVM.prototype.setFirstQuery = function (value) {
    var _a;

    var opt = (_a = this.props.options.predictor) === null || _a === void 0 ? void 0 : _a.getOpt();
    opt.setFirstQuery(Number.parseInt(value, 10));
    this.render();
  };

  ConfigSVM.prototype.render = function () {
    var _this = this;

    var _a, _b, _c, _d;

    this.predictor = this.props.options.predictor;

    if (!((_a = this.predictor) === null || _a === void 0 ? void 0 : _a.getOpt().getFirstQuery())) {
      (_b = this.predictor) === null || _b === void 0 ? void 0 : _b.getOpt().setFirstQuery(0);
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["PanelOptionsGroup"], {
      title: "SVM"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, ((_c = this.predictor) === null || _c === void 0 ? void 0 : _c.getPredFun()) ? 'Function: ' + ((_d = this.predictor) === null || _d === void 0 ? void 0 : _d.getPredFun()) : ''), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "gf-form-label width-10",
      style: {
        display: 'inline-block'
      }
    }, ' ', "x1 (first query)", ' '), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-select-wrapper width-10",
      style: {
        display: 'inline-block'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
      className: "input-small gf-form-input",
      onChange: function onChange(event) {
        return _this.setFirstQuery(event.target.value);
      }
    }, this.renderQueryOptions())));
  };

  return ConfigSVM;
}(_Config__WEBPACK_IMPORTED_MODULE_3__["Config"]);



/***/ }),

/***/ "./panels/PredictionPanel/strategies/SVM/StrategySVM.ts":
/*!**************************************************************!*\
  !*** ./panels/PredictionPanel/strategies/SVM/StrategySVM.ts ***!
  \**************************************************************/
/*! exports provided: StrategySVM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrategySVM", function() { return StrategySVM; });
/* harmony import */ var _utils_Data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Data */ "./panels/PredictionPanel/utils/Data.ts");
/* harmony import */ var _utils_Predicted__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/Predicted */ "./panels/PredictionPanel/utils/Predicted.ts");



var StrategySVM =
/** @class */
function () {
  function StrategySVM() {
    this.predicted = new _utils_Predicted__WEBPACK_IMPORTED_MODULE_1__["Predicted"]();
  }

  StrategySVM.prototype.predict = function (data, predictor) {
    this.predicted.clear();
    var first = predictor.getOpt().getFirstQuery() || 0;
    var coeff = predictor.getCoefficients();

    var f = function f(x1, x2) {
      return x1 * coeff[0] + x2 * coeff[1] + coeff[2];
    };

    if (!data) {
      throw Error('Data not found');
    }

    var it = new _utils_Data__WEBPACK_IMPORTED_MODULE_0__["DataIterator"](data);
    var val;

    while (val = it.next()) {
      if (val.a || val.b) {
        var v = first === 0 ? f(val.a, val.b) : f(val.b, val.a);
        var cls = v === 0 ? 0 : v > 0 ? 1 : -1; //classification 1 / -1

        this.predicted.addValues({
          value: cls,
          time: val.time
        });
      }
    }

    return this.predicted;
  };

  StrategySVM.prototype.saveToInflux = function () {
    var meas = this.predicted.getAt(this.predicted.size() - 1);
    $.post({
      url: 'http://localhost:8086/write?db=telegraf',
      data: 'predictionSVM value=' + meas.value + ' ' + meas.time + '000000'
    });
  };

  return StrategySVM;
}();



/***/ }),

/***/ "./panels/PredictionPanel/strategies/strategies.ts":
/*!*********************************************************!*\
  !*** ./panels/PredictionPanel/strategies/strategies.ts ***!
  \*********************************************************/
/*! exports provided: strategies, configs, options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strategies", function() { return strategies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configs", function() { return configs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony import */ var _Regression_RL_StrategyRL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Regression/RL/StrategyRL */ "./panels/PredictionPanel/strategies/Regression/RL/StrategyRL.ts");
/* harmony import */ var _Regression_REXP_StrategyREXP__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Regression/REXP/StrategyREXP */ "./panels/PredictionPanel/strategies/Regression/REXP/StrategyREXP.ts");
/* harmony import */ var _Regression_RLOG_StrategyRLOG__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Regression/RLOG/StrategyRLOG */ "./panels/PredictionPanel/strategies/Regression/RLOG/StrategyRLOG.ts");
/* harmony import */ var _SVM_StrategySVM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SVM/StrategySVM */ "./panels/PredictionPanel/strategies/SVM/StrategySVM.ts");
/* harmony import */ var _Regression_ConfigRegression__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Regression/ConfigRegression */ "./panels/PredictionPanel/strategies/Regression/ConfigRegression.tsx");
/* harmony import */ var _SVM_ConfigSVM__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SVM/ConfigSVM */ "./panels/PredictionPanel/strategies/SVM/ConfigSVM.tsx");
/* harmony import */ var _common_OptionsRegression__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/OptionsRegression */ "./common/OptionsRegression.ts");
/* harmony import */ var _common_OptionsSVM__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/OptionsSVM */ "./common/OptionsSVM.ts");








var strategies = {
  RL: new _Regression_RL_StrategyRL__WEBPACK_IMPORTED_MODULE_0__["StrategyRL"](),
  SVM: new _SVM_StrategySVM__WEBPACK_IMPORTED_MODULE_3__["StrategySVM"](),
  REXP: new _Regression_REXP_StrategyREXP__WEBPACK_IMPORTED_MODULE_1__["StrategyREXP"](),
  RLOG: new _Regression_RLOG_StrategyRLOG__WEBPACK_IMPORTED_MODULE_2__["StrategyRLOG"]()
};
var configs = {
  RL: _Regression_ConfigRegression__WEBPACK_IMPORTED_MODULE_4__["ConfigRegression"],
  SVM: _SVM_ConfigSVM__WEBPACK_IMPORTED_MODULE_5__["ConfigSVM"],
  REXP: _Regression_ConfigRegression__WEBPACK_IMPORTED_MODULE_4__["ConfigRegression"],
  RLOG: _Regression_ConfigRegression__WEBPACK_IMPORTED_MODULE_4__["ConfigRegression"]
};
var options = {
  RL: new _common_OptionsRegression__WEBPACK_IMPORTED_MODULE_6__["default"](),
  SVM: new _common_OptionsSVM__WEBPACK_IMPORTED_MODULE_7__["default"](),
  REXP: new _common_OptionsRegression__WEBPACK_IMPORTED_MODULE_6__["default"](),
  RLOG: new _common_OptionsRegression__WEBPACK_IMPORTED_MODULE_6__["default"]()
};

/***/ }),

/***/ "./panels/PredictionPanel/utils/AbstractData.ts":
/*!******************************************************!*\
  !*** ./panels/PredictionPanel/utils/AbstractData.ts ***!
  \******************************************************/
/*! exports provided: AbstractData, Iterator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractData", function() { return AbstractData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Iterator", function() { return Iterator; });
/**
 * Project: Predire in Grafana
 * File: AbstractData.ts
 * Author: Federico Carboni
 * Created: 2020-04-27
 * Version: 0.1
 * -----------------------------------------------------------------------------------------
 * Copyright 2020 ProApesGroup.
 * Licensed under the MIT License. See LICENSE in the project root for license informations.
 * -----------------------------------------------------------------------------------------
 * Changelog:
 * 0.1 - Abstract class for Data and Predicted.
 */
var AbstractData =
/** @class */
function () {
  function AbstractData() {
    this.data = [];
  }

  AbstractData.prototype.clear = function () {
    this.data = [];
  };

  AbstractData.prototype.size = function () {
    return this.data.length;
  };

  return AbstractData;
}();



var Iterator =
/** @class */
function () {
  function Iterator(data) {
    this.index = 0;
    this.data = data;
  }

  Iterator.prototype.next = function () {
    return this.index < this.data.size() ? this.data.getAt(this.index++) : null;
  };

  return Iterator;
}();



/***/ }),

/***/ "./panels/PredictionPanel/utils/Data.ts":
/*!**********************************************!*\
  !*** ./panels/PredictionPanel/utils/Data.ts ***!
  \**********************************************/
/*! exports provided: Data, DataIterator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataIterator", function() { return DataIterator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AbstractData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractData */ "./panels/PredictionPanel/utils/AbstractData.ts");
/**
 * Project: Predire in Grafana
 * File: Data.ts
 * Author: Federico Carboni
 * Created: 2020-04-15
 * Version: 0.1
 * -----------------------------------------------------------------------------------------
 * Copyright 2020 ProApesGroup.
 * Licensed under the MIT License. See LICENSE in the project root for license informations.
 * -----------------------------------------------------------------------------------------
 * Changelog:
 * 0.1 - Writing Data class for incpsulation of measured data.
 */



var Data =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Data, _super);

  function Data() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Data.prototype.addValues = function (val) {
    this.data.push([val.a, val.b, val.time]);
  };

  Data.prototype.getAt = function (index) {
    return {
      a: this.data[index][0],
      b: this.data[index][1],
      time: this.data[index][2]
    };
  };

  Data.fromSeries = function (series) {
    var e_1, _a;

    if (!series[0] || !series[1]) {
      throw Error('Set at least 2 query before');
    }

    var time = series[0].fields[1].values.toArray();
    var s = []; // [ [valA, valA ...] [valB, valB ...] ]

    series.forEach(function (serie) {
      s.push(serie.fields[0].values.toArray());
    });
    var data = new Data();

    try {
      for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(time.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var i = _c.value;
        data.addValues({
          a: s[0][i],
          b: s[1][i],
          time: time[i]
        });
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    }

    return data;
  };

  return Data;
}(_AbstractData__WEBPACK_IMPORTED_MODULE_1__["AbstractData"]);



var DataIterator =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DataIterator, _super);

  function DataIterator() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return DataIterator;
}(_AbstractData__WEBPACK_IMPORTED_MODULE_1__["Iterator"]);



/***/ }),

/***/ "./panels/PredictionPanel/utils/Predicted.ts":
/*!***************************************************!*\
  !*** ./panels/PredictionPanel/utils/Predicted.ts ***!
  \***************************************************/
/*! exports provided: Predicted, PredIterator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Predicted", function() { return Predicted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredIterator", function() { return PredIterator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AbstractData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractData */ "./panels/PredictionPanel/utils/AbstractData.ts");
/**
 * Project: Predire in Grafana
 * File: Predicted.ts
 * Author: Federico Carboni
 * Created: 2020-04-15
 * Version: 0.1
 * -----------------------------------------------------------------------------------------
 * Copyright 2020 ProApesGroup.
 * Licensed under the MIT License. See LICENSE in the project root for license informations.
 * -----------------------------------------------------------------------------------------
 * Changelog:
 * 0.1 - Writing Predicted class for incpsulation of predicted data.
 */



var Predicted =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Predicted, _super);

  function Predicted() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Predicted.prototype.addValues = function (val) {
    this.data.push([val.value, val.time]);
  };

  Predicted.prototype.getAt = function (index) {
    return {
      value: this.data[index][0],
      time: this.data[index][1]
    };
  };

  return Predicted;
}(_AbstractData__WEBPACK_IMPORTED_MODULE_1__["AbstractData"]);



var PredIterator =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PredIterator, _super);

  function PredIterator() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return PredIterator;
}(_AbstractData__WEBPACK_IMPORTED_MODULE_1__["Iterator"]);



/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map