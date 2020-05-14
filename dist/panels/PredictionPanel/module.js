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
/******/ 	return __webpack_require__(__webpack_require__.s = "./panels/PredictionPanel/module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
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
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
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

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
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
    var opt = _panels_PredictionPanel_strategies_strategies__WEBPACK_IMPORTED_MODULE_0__["options"][json.algorithm]; // if (!json.algorithm || !json.coefficients) {
    //     throw Error('Error reading file');
    // }

    var predictor = new Predictor(json.algorithm, json.coefficients, json.predFun || '', opt.fromJSON(json.opt || {}), json.accuracy);
    return predictor;
  };

  Predictor.prototype.toJSON = function () {
    var textFile = JSON.stringify({
      GroupName: 'ProApes',
      Version: '3.0.0-1.9',
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

/***/ "./panels/PredictionPanel/EditorView.tsx":
/*!***********************************************!*\
  !*** ./panels/PredictionPanel/EditorView.tsx ***!
  \***********************************************/
/*! exports provided: EditorView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorView", function() { return EditorView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _strategies_strategies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./strategies/strategies */ "./panels/PredictionPanel/strategies/strategies.ts");
/* harmony import */ var common_Predictor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/Predictor */ "./common/Predictor.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }







var EditorView =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EditorView, _super);

  function EditorView() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  EditorView.prototype.importPredictor = function (target) {
    var _this = this;

    var reader = new FileReader();

    if (target.files == null) {
      throw new Error('File not selected');
    }

    reader.readAsText(target.files[0]);

    reader.onload = function (event) {
      var _a, _b;

      try {
        _this.props.options.predictor = common_Predictor__WEBPACK_IMPORTED_MODULE_4__["default"].fromJSON((_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.toString());
      } catch (e) {
        alert(e);
      }

      _this.render();
    };
  };

  EditorView.prototype.parsePredictor = function () {
    var _a;

    try {
      (_a = this.props.options.predictor) === null || _a === void 0 ? void 0 : _a.getAlgorithm();
    } catch (e) {
      var json = this.props.options.predictor;
      this.props.options.predictor = common_Predictor__WEBPACK_IMPORTED_MODULE_4__["default"].fromJSON(json);
    }
  };

  EditorView.prototype.render = function () {
    var _this = this;

    this.parsePredictor();
    var predictor = this.props.options.predictor;
    var algorithm = predictor === null || predictor === void 0 ? void 0 : predictor.getAlgorithm();
    var Config;

    if (algorithm && _strategies_strategies__WEBPACK_IMPORTED_MODULE_3__["configs"][algorithm]) {
      Config = _strategies_strategies__WEBPACK_IMPORTED_MODULE_3__["configs"][algorithm];
    } else {
      Config = _typeof(react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent);
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["PanelOptionsGrid"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["PanelOptionsGroup"], {
      title: "Import predictor"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      className: "input gf-input gf-file",
      type: "file",
      name: "Import",
      id: "import",
      onChange: function onChange(event) {
        return _this.importPredictor(event.target);
      }
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Config, {
      data: this.props.data,
      options: this.props.options
    })));
  };

  return EditorView;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



/***/ }),

/***/ "./panels/PredictionPanel/Model.ts":
/*!*****************************************!*\
  !*** ./panels/PredictionPanel/Model.ts ***!
  \*****************************************/
/*! exports provided: Model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _strategies_strategies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strategies/strategies */ "./panels/PredictionPanel/strategies/strategies.ts");



var Model =
/** @class */
function () {
  function Model() {}

  Model.prototype.setData = function (data) {
    this.data = data;
  };

  Model.prototype.setPredictor = function (predictor) {
    this.predictor = predictor;

    if (!_strategies_strategies__WEBPACK_IMPORTED_MODULE_1__["strategies"][predictor.getAlgorithm()]) {
      throw Error('Wrong algorithm');
    }

    this.strategy = _strategies_strategies__WEBPACK_IMPORTED_MODULE_1__["strategies"][predictor.getAlgorithm()];
  };

  Model.prototype.predict = function () {
    var _a;

    if (!this.data || !this.predictor) {
      throw Error('Predictor not found');
    }

    this.predicted = (_a = this.strategy) === null || _a === void 0 ? void 0 : _a.predict(this.data, this.predictor);

    if (!this.predicted || this.predicted.size() < 1) {
      throw Error('Data not predicted');
    }

    return this.predicted.getAt(this.predicted.size() - 1).value;
  };

  Model.prototype.saveToInflux = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        if (!this.predicted) {
          throw Error('Predicted data not found');
        }

        if (!this.strategy) {
          throw Error('Algorithm not found');
        }

        this.strategy.saveToInflux();
        return [2
        /*return*/
        ];
      });
    });
  };

  return Model;
}();



/***/ }),

/***/ "./panels/PredictionPanel/PanelController.tsx":
/*!****************************************************!*\
  !*** ./panels/PredictionPanel/PanelController.tsx ***!
  \****************************************************/
/*! exports provided: PanelController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelController", function() { return PanelController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_Data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/Data */ "./panels/PredictionPanel/utils/Data.ts");
/* harmony import */ var _Model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Model */ "./panels/PredictionPanel/Model.ts");
/* harmony import */ var _PanelView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PanelView */ "./panels/PredictionPanel/PanelView.tsx");
/* harmony import */ var _common_Predictor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/Predictor */ "./common/Predictor.ts");







var PanelController =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PanelController, _super);

  function PanelController(props) {
    var _this = _super.call(this, props) || this;

    _this.paused = false;
    _this.model = new _Model__WEBPACK_IMPORTED_MODULE_3__["Model"]();
    return _this;
  }

  PanelController.prototype.setData = function () {
    var d = _utils_Data__WEBPACK_IMPORTED_MODULE_2__["Data"].fromSeries(this.props.data.series);
    this.model.setData(d);
  };

  PanelController.prototype.setPredictor = function () {
    if (this.props.options.predictor) {
      this.model.setPredictor(this.props.options.predictor);
    }
  };

  PanelController.prototype.predict = function () {
    this.lastValue = this.model.predict();
  };

  PanelController.prototype.saveToInflux = function () {
    this.model.saveToInflux();
  };

  PanelController.prototype.pause = function () {
    this.paused = true;
  };

  PanelController.prototype.start = function () {
    this.paused = false;
  };

  PanelController.prototype.updatePrediction = function () {
    this.setData();
    this.setPredictor();
    this.predict();
    this.saveToInflux();
  };

  PanelController.prototype.parsePredictor = function () {
    var _a;

    try {
      (_a = this.props.options.predictor) === null || _a === void 0 ? void 0 : _a.getAlgorithm();
    } catch (e) {
      var json = this.props.options.predictor;
      this.props.options.predictor = _common_Predictor__WEBPACK_IMPORTED_MODULE_5__["default"].fromJSON(json);
    }
  };

  PanelController.prototype.render = function () {
    var _this = this;

    this.parsePredictor();

    if (!this.props.options.predictor) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, " Select a predictor ");
    }

    if (!this.paused) {
      this.updatePrediction();
    }

    var predictor = this.props.options.predictor;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PanelView__WEBPACK_IMPORTED_MODULE_4__["PanelView"], {
      algorithm: predictor.getAlgorithm(),
      coefficients: predictor.getCoefficients(),
      opt: predictor.getOpt(),
      accuracy: predictor.getAcc(),
      lastValue: this.lastValue,
      pause: function pause() {
        return _this.pause();
      },
      start: function start() {
        return _this.start();
      }
    }));
  };

  return PanelController;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



/***/ }),

/***/ "./panels/PredictionPanel/PanelView.tsx":
/*!**********************************************!*\
  !*** ./panels/PredictionPanel/PanelView.tsx ***!
  \**********************************************/
/*! exports provided: PanelView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelView", function() { return PanelView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var PanelView =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PanelView, _super);

  function PanelView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.pause = function () {
      _this.props.pause();

      if (_this.btn_stop) {
        _this.btn_stop.hidden = true;
      }

      if (_this.btn_start) {
        _this.btn_start.hidden = false;
      }
    };

    _this.start = function () {
      _this.props.start();

      if (_this.btn_stop) {
        _this.btn_stop.hidden = false;
      }

      if (_this.btn_start) {
        _this.btn_start.hidden = true;
      }
    };

    return _this;
  }

  PanelView.prototype.componentDidMount = function () {
    this.btn_stop = document.getElementById('btn_stop');
    this.btn_start = document.getElementById('btn_start');
  };

  PanelView.prototype.render = function () {
    var _a = this.props,
        algorithm = _a.algorithm,
        coefficients = _a.coefficients,
        opt = _a.opt,
        lastValue = _a.lastValue,
        accuracy = _a.accuracy;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("pre", null, "- Algorithm: ", algorithm + '\n', "- Coefficients: ", coefficients + '\n', opt ? '- Options: ' + JSON.stringify(opt, null, 4) + '\n' : '', "- Accuracy: ", accuracy + '\n'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, lastValue), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      id: "btn_stop",
      className: "btn btn-danger",
      onClick: this.pause
    }, 'Stop'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      id: "btn_start",
      className: "btn btn-success",
      onClick: this.start,
      hidden: true
    }, 'Start')));
  };

  return PanelView;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



/***/ }),

/***/ "./panels/PredictionPanel/module.ts":
/*!******************************************!*\
  !*** ./panels/PredictionPanel/module.ts ***!
  \******************************************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PanelController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PanelController */ "./panels/PredictionPanel/PanelController.tsx");
/* harmony import */ var _EditorView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditorView */ "./panels/PredictionPanel/EditorView.tsx");



var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["PanelPlugin"](_PanelController__WEBPACK_IMPORTED_MODULE_1__["PanelController"]).setEditor(_EditorView__WEBPACK_IMPORTED_MODULE_2__["EditorView"]);

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

/***/ "./panels/PredictionPanel/strategies/Regression/REXP/StrategyRegExp.ts":
/*!*****************************************************************************!*\
  !*** ./panels/PredictionPanel/strategies/Regression/REXP/StrategyRegExp.ts ***!
  \*****************************************************************************/
/*! exports provided: StrategyRegExp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrategyRegExp", function() { return StrategyRegExp; });
/* harmony import */ var _utils_Data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/Data */ "./panels/PredictionPanel/utils/Data.ts");
/* harmony import */ var _utils_Predicted__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/Predicted */ "./panels/PredictionPanel/utils/Predicted.ts");



var StrategyRegExp =
/** @class */
function () {
  function StrategyRegExp() {
    this.predicted = new _utils_Predicted__WEBPACK_IMPORTED_MODULE_1__["Predicted"]();
  }

  StrategyRegExp.prototype.predict = function (data, predictor) {
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

  StrategyRegExp.prototype.saveToInflux = function () {
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

  return StrategyRegExp;
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

/***/ "./panels/PredictionPanel/strategies/Regression/RLOG/StrategyRegLog.ts":
/*!*****************************************************************************!*\
  !*** ./panels/PredictionPanel/strategies/Regression/RLOG/StrategyRegLog.ts ***!
  \*****************************************************************************/
/*! exports provided: StrategyRegLog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrategyRegLog", function() { return StrategyRegLog; });
/* harmony import */ var _utils_Data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/Data */ "./panels/PredictionPanel/utils/Data.ts");
/* harmony import */ var _utils_Predicted__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/Predicted */ "./panels/PredictionPanel/utils/Predicted.ts");



var StrategyRegLog =
/** @class */
function () {
  function StrategyRegLog() {
    this.predicted = new _utils_Predicted__WEBPACK_IMPORTED_MODULE_1__["Predicted"]();
  }

  StrategyRegLog.prototype.predict = function (data, predictor) {
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

  StrategyRegLog.prototype.saveToInflux = function () {
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

  return StrategyRegLog;
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
/* harmony import */ var _Regression_REXP_StrategyRegExp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Regression/REXP/StrategyRegExp */ "./panels/PredictionPanel/strategies/Regression/REXP/StrategyRegExp.ts");
/* harmony import */ var _Regression_RLOG_StrategyRegLog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Regression/RLOG/StrategyRegLog */ "./panels/PredictionPanel/strategies/Regression/RLOG/StrategyRegLog.ts");
/* harmony import */ var _SVM_StrategySVM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SVM/StrategySVM */ "./panels/PredictionPanel/strategies/SVM/StrategySVM.ts");
/* harmony import */ var _Regression_ConfigRegression__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Regression/ConfigRegression */ "./panels/PredictionPanel/strategies/Regression/ConfigRegression.tsx");
/* harmony import */ var _SVM_ConfigSVM__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SVM/ConfigSVM */ "./panels/PredictionPanel/strategies/SVM/ConfigSVM.tsx");
/* harmony import */ var _common_OptionsRegression__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/OptionsRegression */ "./common/OptionsRegression.ts");
/* harmony import */ var _common_OptionsSVM__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/OptionsSVM */ "./common/OptionsSVM.ts");








var strategies = {
  RL: new _Regression_RL_StrategyRL__WEBPACK_IMPORTED_MODULE_0__["StrategyRL"](),
  SVM: new _SVM_StrategySVM__WEBPACK_IMPORTED_MODULE_3__["StrategySVM"](),
  REXP: new _Regression_REXP_StrategyRegExp__WEBPACK_IMPORTED_MODULE_1__["StrategyRegExp"](),
  RLOG: new _Regression_RLOG_StrategyRegLog__WEBPACK_IMPORTED_MODULE_2__["StrategyRegLog"]()
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