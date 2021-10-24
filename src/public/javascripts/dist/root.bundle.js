/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"root": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".bundle.js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/javascripts/dist/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/views/Root.jsx","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.config.js":
/*!***********************!*\
  !*** ./app.config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  name: 'TheraMinder',
  port: 3000,
  apiKey: 'yIgwpmuewandQtLJsoctcA1lbYIkPto7'
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/public/stylesheets/scss/main.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/public/stylesheets/scss/main.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=M+PLUS+1p:300,400,700|Raleway:300,400,700);"]);
// Module
exports.push([module.i, "* {\n  font-family: 'Raleway', 'M PLUS 1p', sans-serif; }\n\n* {\n  box-sizing: border-box; }\n\nbody {\n  background: #e3d4ff; }\n\n.home {\n  font-weight: 300;\n  color: #fff;\n  background: #000;\n  text-align: center;\n  display: block;\n  width: 800px;\n  margin: 50px auto;\n  padding: 20px 20px;\n  border-radius: 5px;\n  letter-spacing: 0.05em;\n  word-wrap: break-word; }\n\n.therapistScreenTitle {\n  color: #5e0a7d; }\n\n.exerciseTile {\n  margin-bottom: 50px; }\n\n.instructions {\n  margin-top: 20px; }\n\n.msg {\n  color: #fa73b4;\n  margin-bottom: 50px; }\n\n.therapistScreenContainer {\n  margin-left: 100px;\n  margin-right: 100px;\n  margin-top: 50px; }\n\n.name {\n  color: white; }\n\n.therapistScreenMain {\n  padding: 1000; }\n\n.therapistScreenCardContainer {\n  padding: 20px;\n  padding-bottom: 20px; }\n\n.therapstScreenSubmit {\n  margin-top: 50px; }\n\n/* For Mobile */\n@media screen and (max-width: 540px) {\n  .therapistScreenContainer {\n    margin-left: 0px;\n    margin-right: 0px;\n    margin-top: 10px; }\n  .therapistScreenCardContainer {\n    padding: 0px;\n    padding-bottom: 20px; }\n  .home {\n    width: 100%;\n    padding: 20px 20px; } }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/public/stylesheets/scss/main.scss":
/*!***********************************************!*\
  !*** ./src/public/stylesheets/scss/main.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/public/stylesheets/scss/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/static/exercise_data.js":
/*!*************************************!*\
  !*** ./src/static/exercise_data.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const exerciseData = {
    'Straight Leg Raises' : {image_url: 'https://nitrocdn.com/QzGGscDMiJlGMMXpePTfcfhfuBWLvgjT/assets/static/optimized/rev-1f403b7/wp-content/uploads/2019/09/Straight-Leg-Raises-Knee-100.jpg', 
    instructions: '1. Lie on your back on the floor.\n2. Bend one knee so your foot is flat on the floor. Keep the other knee straight.\n3. Flex the straight knee and lift your leg to the level of your bent knee.\n4. Hold until you feel the stretch.\n5. '
    },
    
    'Standing Quad Stretch' : {image_url: 'https://nitrocdn.com/QzGGscDMiJlGMMXpePTfcfhfuBWLvgjT/assets/static/optimized/rev-1f403b7/wp-content/uploads/2019/09/Standing-Quad-Stretch-100.jpg', 
    instructions: '1. Using a chair or wall for support, stand on one foot.\n2. Bend your knee and bring your heel to your buttock.\n3. Grasp your ankle with the opposite hand.\n4. Pull your ankle in toward your body until you feel a stretch.\n5. Hold for 30 seconds.\n6. '
    },
    
    'Squats' : {image_url: 'https://nitrocdn.com/QzGGscDMiJlGMMXpePTfcfhfuBWLvgjT/assets/static/optimized/rev-1f403b7/wp-content/uploads/2019/09/Squats-100.jpg', 
    instructions: '1. Stand up straight, feet placed slightly apart.\n2. Slowly bend at the knees and waist so that your quads are almost parallel to the floor.\n3. Keep your back straight and knees lined up over your ankles.\n4. Stand back up straight.\n5. '
    },
    
    'Lateral Leg Raises' : {image_url: 'https://nitrocdn.com/QzGGscDMiJlGMMXpePTfcfhfuBWLvgjT/assets/static/optimized/rev-1f403b7/wp-content/uploads/2019/09/Floor-Lateral-Leg-Raises-100.jpg', 
    instructions: '1. Lie on your side with your legs stacked on top of each other and your arm resting under your head for support.\n2. Raise your top leg as high as you comfortably can and pause until you feel tension.\n3. Lower it back down slowly.\n4. '
    },
    
    'Back Lunges' : {image_url: 'https://nitrocdn.com/QzGGscDMiJlGMMXpePTfcfhfuBWLvgjT/assets/static/optimized/rev-1f403b7/wp-content/uploads/2019/09/Squats-100.jpg', 
    instructions: '1. Stand tall with your hands on your waist.\n2. Take a step backward with your left foot.\n3. Bend your right knee and lower until your thigh is parallel with the floor and your left heel is lifted.\n4. Return to the standing position.\n5. '
    },
    
    'Pigeon Stretch' : {image_url: 'https://nitrocdn.com/QzGGscDMiJlGMMXpePTfcfhfuBWLvgjT/assets/static/optimized/rev-1f403b7/wp-content/uploads/2019/09/Pigeon-Hip-Stretch-100.jpg', 
    instructions: '1. While sitting on the floor, bend your right leg and extend your left leg behind you.\n2. Pull your right heel in while keeping your left hip pointed downward.\n3. Rest your right hand on your thing.\n4. Alternately, you can walk your hands forward until your chest is resting on your knee.\n5. '
    },
    
    'Single-Leg Hip Circles' : {image_url: 'https://nitrocdn.com/QzGGscDMiJlGMMXpePTfcfhfuBWLvgjT/assets/static/optimized/rev-1f403b7/wp-content/uploads/2019/09/Single-Leg-Hip-Circles-100.jpg', 
    instructions: '1. Get down on all fours with hands under shoulder, knees under hips, and toes pointed.\n2. Tighten your core muscles and lift one leg to the side.\n3. Holding your knee up to the side and front, move it in a circle.\n4. Repeat ten times forward, then ten times back.\n5. '
    },
    
    'Single-Leg Glute Kicks (Donkey Kicks)' : {image_url: 'https://nitrocdn.com/QzGGscDMiJlGMMXpePTfcfhfuBWLvgjT/assets/static/optimized/rev-1f403b7/wp-content/uploads/2019/09/Donkey-Kicks-100.jpg', 
    instructions: '1. In the all-fours position on the floor, extend your thigh upward 90 degrees in a kicking motion.\n2. Repeat slowly or rapidly as desired.\n3. Return to the starting position and repeat on the other side.\n4. This can be done with your knee straight or bent to shift your weight.\n5. '
    },
    
    'Plie Squats' : {image_url: 'https://nitrocdn.com/QzGGscDMiJlGMMXpePTfcfhfuBWLvgjT/assets/static/optimized/rev-1f403b7/wp-content/uploads/2019/09/Pli%C3%A9-Squats-100.jpg', 
    instructions: '1. Spread your feet wider than your hips and point your toes at a 45-degree angle.\n2. With your hands on your waist or clasped in front of you, bend your knees at a 90-degree angle, and hold the position.\n3. Lift back to the standing position.\n4. '
    }
  }

/* harmony default export */ __webpack_exports__["default"] = (exerciseData);

/***/ }),

/***/ "./src/views/Index/ExerciseTile.js":
/*!*****************************************!*\
  !*** ./src/views/Index/ExerciseTile.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExerciseCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");







function ExerciseCard(props) {
  var duration = props.duration;
  var duration_text = "";
  var minutes = parseInt(duration / 60);
  var seconds = duration % 60;
  console.log(minutes);
  console.log(seconds);

  if (minutes > 0) {
    duration_text += "".concat(minutes, " minute(s) ");
  }

  if (seconds > 0) {
    duration_text += "".concat(seconds, " second(s)");
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "exerciseTile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    sx: {
      maxWidth: 345
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gutterBottom: true,
    variant: "h5",
    component: "div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("b", null, props.name, " for ", duration_text)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardMedia"], {
    component: "img",
    height: "200",
    image: props.image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "instructions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "body2",
    color: "text.secondary"
  }, props.instructions)))));
}

/***/ }),

/***/ "./src/views/Index/workout.jsx":
/*!*************************************!*\
  !*** ./src/views/Index/workout.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _ExerciseTile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ExerciseTile.js */ "./src/views/Index/ExerciseTile.js");
/* harmony import */ var _app_config_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app.config.js */ "./app.config.js");
/* harmony import */ var _app_config_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_app_config_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _static_exercise_data_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../static/exercise_data.js */ "./src/static/exercise_data.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




 //import Stack from '@mui/material/Stack'



axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.headers.common['api-key'] = _app_config_js__WEBPACK_IMPORTED_MODULE_4___default.a.apiKey;

var Workout = /*#__PURE__*/function (_Component) {
  _inherits(Workout, _Component);

  var _super = _createSuper(Workout);

  function Workout(props) {
    var _this;

    _classCallCheck(this, Workout);

    _this = _super.call(this, props);

    _this.fetchPrescriptions = function () {
      var params = {
        phone_number: _this.state.phone
      };
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/get/prescribe', {
        params: params
      }).then(function (response) {
        _this.setState({
          data: response.data
        });
      })["catch"](function (error) {
        _this.setState({
          error: 'Something went wrong'
        });
      });
    };

    _this.componentDidMount = function () {
      _this.fetchPrescriptions();
    };

    _this.state = {
      phone: _this.props.match.params.phone,
      data: null,
      error: null
    };
    return _this;
  }

  _createClass(Workout, [{
    key: "render",
    value: function render() {
      var patient = this.state.data;
      var render = null;
      var error = null;
      console.log(patient);

      if (patient != null) {
        render = "".concat(patient.full_name, "\n");
      }

      if (this.state.error != null) {
        error = 'Something went wrong';
        render = null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "home"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "name"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Welcome ", render), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], null, patient ? patient.workouts.map(function (typeName) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ExerciseTile_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
          name: typeName,
          image: _static_exercise_data_js__WEBPACK_IMPORTED_MODULE_5__["default"][typeName.toString()].image_url,
          duration: patient.durations[patient.workouts.indexOf(typeName)],
          instructions: _static_exercise_data_js__WEBPACK_IMPORTED_MODULE_5__["default"][typeName.toString()].instructions.concat("\nContinue exercising for ".concat(patient.durations[patient.workouts.indexOf(typeName)], " seconds."))
        }));
      }) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\xA9 TheraMinder, 2021"));
    }
  }]);

  return Workout;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Workout);

/***/ }),

/***/ "./src/views/Root.jsx":
/*!****************************!*\
  !*** ./src/views/Root.jsx ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Index_workout_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Index/workout.jsx */ "./src/views/Index/workout.jsx");
/* harmony import */ var _public_stylesheets_scss_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/stylesheets/scss/main.scss */ "./src/public/stylesheets/scss/main.scss");
/* harmony import */ var _public_stylesheets_scss_main_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_stylesheets_scss_main_scss__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var Index = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, /*! ./Index/index.jsx */ "./src/views/Index/index.jsx"));
}); // <IMPORTS> DON'T CHANGE THIS LINE - Component file imports will be added above here.

var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);

  var _super = _createSuper(App);

  function App() {
    _classCallCheck(this, App);

    return _super.apply(this, arguments);
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
        fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading...")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        exact: true,
        path: "/",
        component: Index
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        exact: true,
        path: "/:phone",
        component: _Index_workout_jsx__WEBPACK_IMPORTED_MODULE_3__["default"]
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById('root'));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL3N0eWxlc2hlZXRzL3Njc3MvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9wdWJsaWMvc3R5bGVzaGVldHMvc2Nzcy9tYWluLnNjc3M/NmFjOSIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2V4ZXJjaXNlX2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL0luZGV4L0V4ZXJjaXNlVGlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvSW5kZXgvd29ya291dC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL1Jvb3QuanN4Il0sIm5hbWVzIjpbIkV4ZXJjaXNlQ2FyZCIsInByb3BzIiwiZHVyYXRpb24iLCJkdXJhdGlvbl90ZXh0IiwibWludXRlcyIsInBhcnNlSW50Iiwic2Vjb25kcyIsImNvbnNvbGUiLCJsb2ciLCJtYXhXaWR0aCIsIm5hbWUiLCJpbWFnZSIsImluc3RydWN0aW9ucyIsImF4aW9zIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiYXBwQ29uZmlnIiwiYXBpS2V5IiwiV29ya291dCIsImZldGNoUHJlc2NyaXB0aW9ucyIsInBhcmFtcyIsInBob25lX251bWJlciIsInN0YXRlIiwicGhvbmUiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJzZXRTdGF0ZSIsImRhdGEiLCJlcnJvciIsImNvbXBvbmVudERpZE1vdW50IiwibWF0Y2giLCJwYXRpZW50IiwicmVuZGVyIiwiZnVsbF9uYW1lIiwid29ya291dHMiLCJtYXAiLCJ0eXBlTmFtZSIsImV4ZXJjaXNlRGF0YSIsInRvU3RyaW5nIiwiaW1hZ2VfdXJsIiwiZHVyYXRpb25zIiwiaW5kZXhPZiIsImNvbmNhdCIsIkNvbXBvbmVudCIsIkluZGV4IiwibGF6eSIsIkFwcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVu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QUFBOUMsUUFGRixDQURGLENBREYsQ0FERjtBQVdEOzs7O0VBYmUwQiwrQzs7QUFnQmxCWCx3REFBTSxlQUFDLDJEQUFDLEdBQUQsT0FBRCxFQUFVZSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBVixDQUFOLEMiLCJmaWxlIjoicm9vdC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicm9vdFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIHNjcmlwdCBwYXRoIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBqc29ucFNjcmlwdFNyYyhjaHVua0lkKSB7XG4gXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmJ1bmRsZS5qc1wiXG4gXHR9XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG4gXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuIFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF07XG4gXHRcdFx0XHR9KTtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cbiBcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0XHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0XHRcdHZhciBvblNjcmlwdENvbXBsZXRlO1xuXG4gXHRcdFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcbiBcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG4gXHRcdFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHNjcmlwdC5zcmMgPSBqc29ucFNjcmlwdFNyYyhjaHVua0lkKTtcblxuIFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuIFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG4gXHRcdFx0XHRvblNjcmlwdENvbXBsZXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gXHRcdFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbiBcdFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdFx0XHR2YXIgY2h1bmsgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG4gXHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuIFx0XHRcdFx0XHRcdFx0Y2h1bmtbMV0oZXJyb3IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH07XG4gXHRcdFx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiBcdFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSh7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSk7XG4gXHRcdFx0XHR9LCAxMjAwMDApO1xuIFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZTtcbiBcdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvamF2YXNjcmlwdHMvZGlzdC9cIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL3ZpZXdzL1Jvb3QuanN4XCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIG5hbWU6ICdUaGVyYU1pbmRlcicsXG4gIHBvcnQ6IDMwMDAsXG4gIGFwaUtleTogJ3lJZ3dwbXVld2FuZFF0TEpzb2N0Y0ExbGJZSWtQdG83J1xufVxuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TStQTFVTKzFwOjMwMCw0MDAsNzAwfFJhbGV3YXk6MzAwLDQwMCw3MDApO1wiXSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5JywgJ00gUExVUyAxcCcsIHNhbnMtc2VyaWY7IH1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6ICNlM2Q0ZmY7IH1cXG5cXG4uaG9tZSB7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiAjMDAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogODAwcHg7XFxuICBtYXJnaW46IDUwcHggYXV0bztcXG4gIHBhZGRpbmc6IDIwcHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7IH1cXG5cXG4udGhlcmFwaXN0U2NyZWVuVGl0bGUge1xcbiAgY29sb3I6ICM1ZTBhN2Q7IH1cXG5cXG4uZXhlcmNpc2VUaWxlIHtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7IH1cXG5cXG4uaW5zdHJ1Y3Rpb25zIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7IH1cXG5cXG4ubXNnIHtcXG4gIGNvbG9yOiAjZmE3M2I0O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDsgfVxcblxcbi50aGVyYXBpc3RTY3JlZW5Db250YWluZXIge1xcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcXG4gIG1hcmdpbi10b3A6IDUwcHg7IH1cXG5cXG4ubmFtZSB7XFxuICBjb2xvcjogd2hpdGU7IH1cXG5cXG4udGhlcmFwaXN0U2NyZWVuTWFpbiB7XFxuICBwYWRkaW5nOiAxMDAwOyB9XFxuXFxuLnRoZXJhcGlzdFNjcmVlbkNhcmRDb250YWluZXIge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4OyB9XFxuXFxuLnRoZXJhcHN0U2NyZWVuU3VibWl0IHtcXG4gIG1hcmdpbi10b3A6IDUwcHg7IH1cXG5cXG4vKiBGb3IgTW9iaWxlICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTQwcHgpIHtcXG4gIC50aGVyYXBpc3RTY3JlZW5Db250YWluZXIge1xcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDsgfVxcbiAgLnRoZXJhcGlzdFNjcmVlbkNhcmRDb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4OyB9XFxuICAuaG9tZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHg7IH0gfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiY29uc3QgZXhlcmNpc2VEYXRhID0ge1xuICAgICdTdHJhaWdodCBMZWcgUmFpc2VzJyA6IHtpbWFnZV91cmw6ICdodHRwczovL25pdHJvY2RuLmNvbS9RekdHc2NETWlKbEdNTVhwZVBUZmNmaGZ1QldMdmdqVC9hc3NldHMvc3RhdGljL29wdGltaXplZC9yZXYtMWY0MDNiNy93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOS9TdHJhaWdodC1MZWctUmFpc2VzLUtuZWUtMTAwLmpwZycsIFxuICAgIGluc3RydWN0aW9uczogJzEuIExpZSBvbiB5b3VyIGJhY2sgb24gdGhlIGZsb29yLlxcbjIuIEJlbmQgb25lIGtuZWUgc28geW91ciBmb290IGlzIGZsYXQgb24gdGhlIGZsb29yLiBLZWVwIHRoZSBvdGhlciBrbmVlIHN0cmFpZ2h0LlxcbjMuIEZsZXggdGhlIHN0cmFpZ2h0IGtuZWUgYW5kIGxpZnQgeW91ciBsZWcgdG8gdGhlIGxldmVsIG9mIHlvdXIgYmVudCBrbmVlLlxcbjQuIEhvbGQgdW50aWwgeW91IGZlZWwgdGhlIHN0cmV0Y2guXFxuNS4gJ1xuICAgIH0sXG4gICAgXG4gICAgJ1N0YW5kaW5nIFF1YWQgU3RyZXRjaCcgOiB7aW1hZ2VfdXJsOiAnaHR0cHM6Ly9uaXRyb2Nkbi5jb20vUXpHR3NjRE1pSmxHTU1YcGVQVGZjZmhmdUJXTHZnalQvYXNzZXRzL3N0YXRpYy9vcHRpbWl6ZWQvcmV2LTFmNDAzYjcvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDkvU3RhbmRpbmctUXVhZC1TdHJldGNoLTEwMC5qcGcnLCBcbiAgICBpbnN0cnVjdGlvbnM6ICcxLiBVc2luZyBhIGNoYWlyIG9yIHdhbGwgZm9yIHN1cHBvcnQsIHN0YW5kIG9uIG9uZSBmb290LlxcbjIuIEJlbmQgeW91ciBrbmVlIGFuZCBicmluZyB5b3VyIGhlZWwgdG8geW91ciBidXR0b2NrLlxcbjMuIEdyYXNwIHlvdXIgYW5rbGUgd2l0aCB0aGUgb3Bwb3NpdGUgaGFuZC5cXG40LiBQdWxsIHlvdXIgYW5rbGUgaW4gdG93YXJkIHlvdXIgYm9keSB1bnRpbCB5b3UgZmVlbCBhIHN0cmV0Y2guXFxuNS4gSG9sZCBmb3IgMzAgc2Vjb25kcy5cXG42LiAnXG4gICAgfSxcbiAgICBcbiAgICAnU3F1YXRzJyA6IHtpbWFnZV91cmw6ICdodHRwczovL25pdHJvY2RuLmNvbS9RekdHc2NETWlKbEdNTVhwZVBUZmNmaGZ1QldMdmdqVC9hc3NldHMvc3RhdGljL29wdGltaXplZC9yZXYtMWY0MDNiNy93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOS9TcXVhdHMtMTAwLmpwZycsIFxuICAgIGluc3RydWN0aW9uczogJzEuIFN0YW5kIHVwIHN0cmFpZ2h0LCBmZWV0IHBsYWNlZCBzbGlnaHRseSBhcGFydC5cXG4yLiBTbG93bHkgYmVuZCBhdCB0aGUga25lZXMgYW5kIHdhaXN0IHNvIHRoYXQgeW91ciBxdWFkcyBhcmUgYWxtb3N0IHBhcmFsbGVsIHRvIHRoZSBmbG9vci5cXG4zLiBLZWVwIHlvdXIgYmFjayBzdHJhaWdodCBhbmQga25lZXMgbGluZWQgdXAgb3ZlciB5b3VyIGFua2xlcy5cXG40LiBTdGFuZCBiYWNrIHVwIHN0cmFpZ2h0LlxcbjUuICdcbiAgICB9LFxuICAgIFxuICAgICdMYXRlcmFsIExlZyBSYWlzZXMnIDoge2ltYWdlX3VybDogJ2h0dHBzOi8vbml0cm9jZG4uY29tL1F6R0dzY0RNaUpsR01NWHBlUFRmY2ZoZnVCV0x2Z2pUL2Fzc2V0cy9zdGF0aWMvb3B0aW1pemVkL3Jldi0xZjQwM2I3L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA5L0Zsb29yLUxhdGVyYWwtTGVnLVJhaXNlcy0xMDAuanBnJywgXG4gICAgaW5zdHJ1Y3Rpb25zOiAnMS4gTGllIG9uIHlvdXIgc2lkZSB3aXRoIHlvdXIgbGVncyBzdGFja2VkIG9uIHRvcCBvZiBlYWNoIG90aGVyIGFuZCB5b3VyIGFybSByZXN0aW5nIHVuZGVyIHlvdXIgaGVhZCBmb3Igc3VwcG9ydC5cXG4yLiBSYWlzZSB5b3VyIHRvcCBsZWcgYXMgaGlnaCBhcyB5b3UgY29tZm9ydGFibHkgY2FuIGFuZCBwYXVzZSB1bnRpbCB5b3UgZmVlbCB0ZW5zaW9uLlxcbjMuIExvd2VyIGl0IGJhY2sgZG93biBzbG93bHkuXFxuNC4gJ1xuICAgIH0sXG4gICAgXG4gICAgJ0JhY2sgTHVuZ2VzJyA6IHtpbWFnZV91cmw6ICdodHRwczovL25pdHJvY2RuLmNvbS9RekdHc2NETWlKbEdNTVhwZVBUZmNmaGZ1QldMdmdqVC9hc3NldHMvc3RhdGljL29wdGltaXplZC9yZXYtMWY0MDNiNy93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOS9TcXVhdHMtMTAwLmpwZycsIFxuICAgIGluc3RydWN0aW9uczogJzEuIFN0YW5kIHRhbGwgd2l0aCB5b3VyIGhhbmRzIG9uIHlvdXIgd2Fpc3QuXFxuMi4gVGFrZSBhIHN0ZXAgYmFja3dhcmQgd2l0aCB5b3VyIGxlZnQgZm9vdC5cXG4zLiBCZW5kIHlvdXIgcmlnaHQga25lZSBhbmQgbG93ZXIgdW50aWwgeW91ciB0aGlnaCBpcyBwYXJhbGxlbCB3aXRoIHRoZSBmbG9vciBhbmQgeW91ciBsZWZ0IGhlZWwgaXMgbGlmdGVkLlxcbjQuIFJldHVybiB0byB0aGUgc3RhbmRpbmcgcG9zaXRpb24uXFxuNS4gJ1xuICAgIH0sXG4gICAgXG4gICAgJ1BpZ2VvbiBTdHJldGNoJyA6IHtpbWFnZV91cmw6ICdodHRwczovL25pdHJvY2RuLmNvbS9RekdHc2NETWlKbEdNTVhwZVBUZmNmaGZ1QldMdmdqVC9hc3NldHMvc3RhdGljL29wdGltaXplZC9yZXYtMWY0MDNiNy93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOS9QaWdlb24tSGlwLVN0cmV0Y2gtMTAwLmpwZycsIFxuICAgIGluc3RydWN0aW9uczogJzEuIFdoaWxlIHNpdHRpbmcgb24gdGhlIGZsb29yLCBiZW5kIHlvdXIgcmlnaHQgbGVnIGFuZCBleHRlbmQgeW91ciBsZWZ0IGxlZyBiZWhpbmQgeW91LlxcbjIuIFB1bGwgeW91ciByaWdodCBoZWVsIGluIHdoaWxlIGtlZXBpbmcgeW91ciBsZWZ0IGhpcCBwb2ludGVkIGRvd253YXJkLlxcbjMuIFJlc3QgeW91ciByaWdodCBoYW5kIG9uIHlvdXIgdGhpbmcuXFxuNC4gQWx0ZXJuYXRlbHksIHlvdSBjYW4gd2FsayB5b3VyIGhhbmRzIGZvcndhcmQgdW50aWwgeW91ciBjaGVzdCBpcyByZXN0aW5nIG9uIHlvdXIga25lZS5cXG41LiAnXG4gICAgfSxcbiAgICBcbiAgICAnU2luZ2xlLUxlZyBIaXAgQ2lyY2xlcycgOiB7aW1hZ2VfdXJsOiAnaHR0cHM6Ly9uaXRyb2Nkbi5jb20vUXpHR3NjRE1pSmxHTU1YcGVQVGZjZmhmdUJXTHZnalQvYXNzZXRzL3N0YXRpYy9vcHRpbWl6ZWQvcmV2LTFmNDAzYjcvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDkvU2luZ2xlLUxlZy1IaXAtQ2lyY2xlcy0xMDAuanBnJywgXG4gICAgaW5zdHJ1Y3Rpb25zOiAnMS4gR2V0IGRvd24gb24gYWxsIGZvdXJzIHdpdGggaGFuZHMgdW5kZXIgc2hvdWxkZXIsIGtuZWVzIHVuZGVyIGhpcHMsIGFuZCB0b2VzIHBvaW50ZWQuXFxuMi4gVGlnaHRlbiB5b3VyIGNvcmUgbXVzY2xlcyBhbmQgbGlmdCBvbmUgbGVnIHRvIHRoZSBzaWRlLlxcbjMuIEhvbGRpbmcgeW91ciBrbmVlIHVwIHRvIHRoZSBzaWRlIGFuZCBmcm9udCwgbW92ZSBpdCBpbiBhIGNpcmNsZS5cXG40LiBSZXBlYXQgdGVuIHRpbWVzIGZvcndhcmQsIHRoZW4gdGVuIHRpbWVzIGJhY2suXFxuNS4gJ1xuICAgIH0sXG4gICAgXG4gICAgJ1NpbmdsZS1MZWcgR2x1dGUgS2lja3MgKERvbmtleSBLaWNrcyknIDoge2ltYWdlX3VybDogJ2h0dHBzOi8vbml0cm9jZG4uY29tL1F6R0dzY0RNaUpsR01NWHBlUFRmY2ZoZnVCV0x2Z2pUL2Fzc2V0cy9zdGF0aWMvb3B0aW1pemVkL3Jldi0xZjQwM2I3L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA5L0RvbmtleS1LaWNrcy0xMDAuanBnJywgXG4gICAgaW5zdHJ1Y3Rpb25zOiAnMS4gSW4gdGhlIGFsbC1mb3VycyBwb3NpdGlvbiBvbiB0aGUgZmxvb3IsIGV4dGVuZCB5b3VyIHRoaWdoIHVwd2FyZCA5MCBkZWdyZWVzIGluIGEga2lja2luZyBtb3Rpb24uXFxuMi4gUmVwZWF0IHNsb3dseSBvciByYXBpZGx5IGFzIGRlc2lyZWQuXFxuMy4gUmV0dXJuIHRvIHRoZSBzdGFydGluZyBwb3NpdGlvbiBhbmQgcmVwZWF0IG9uIHRoZSBvdGhlciBzaWRlLlxcbjQuIFRoaXMgY2FuIGJlIGRvbmUgd2l0aCB5b3VyIGtuZWUgc3RyYWlnaHQgb3IgYmVudCB0byBzaGlmdCB5b3VyIHdlaWdodC5cXG41LiAnXG4gICAgfSxcbiAgICBcbiAgICAnUGxpZSBTcXVhdHMnIDoge2ltYWdlX3VybDogJ2h0dHBzOi8vbml0cm9jZG4uY29tL1F6R0dzY0RNaUpsR01NWHBlUFRmY2ZoZnVCV0x2Z2pUL2Fzc2V0cy9zdGF0aWMvb3B0aW1pemVkL3Jldi0xZjQwM2I3L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA5L1BsaSVDMyVBOS1TcXVhdHMtMTAwLmpwZycsIFxuICAgIGluc3RydWN0aW9uczogJzEuIFNwcmVhZCB5b3VyIGZlZXQgd2lkZXIgdGhhbiB5b3VyIGhpcHMgYW5kIHBvaW50IHlvdXIgdG9lcyBhdCBhIDQ1LWRlZ3JlZSBhbmdsZS5cXG4yLiBXaXRoIHlvdXIgaGFuZHMgb24geW91ciB3YWlzdCBvciBjbGFzcGVkIGluIGZyb250IG9mIHlvdSwgYmVuZCB5b3VyIGtuZWVzIGF0IGEgOTAtZGVncmVlIGFuZ2xlLCBhbmQgaG9sZCB0aGUgcG9zaXRpb24uXFxuMy4gTGlmdCBiYWNrIHRvIHRoZSBzdGFuZGluZyBwb3NpdGlvbi5cXG40LiAnXG4gICAgfVxuICB9XG5cbmV4cG9ydCBkZWZhdWx0IGV4ZXJjaXNlRGF0YSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IE1lbnVJdGVtIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIENhcmRBY3Rpb25zLCBDYXJkTWVkaWF9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXhlcmNpc2VDYXJkKHByb3BzKSB7XG4gIGxldCBkdXJhdGlvbiA9IHByb3BzLmR1cmF0aW9uXG4gIGxldCBkdXJhdGlvbl90ZXh0ID0gXCJcIlxuXG4gIGxldCBtaW51dGVzID0gcGFyc2VJbnQoZHVyYXRpb24gLyA2MClcbiAgbGV0IHNlY29uZHMgPSAoZHVyYXRpb24gJSA2MClcblxuICBjb25zb2xlLmxvZyhtaW51dGVzKVxuICBjb25zb2xlLmxvZyhzZWNvbmRzKVxuXG4gIGlmKG1pbnV0ZXMgPiAwKXtcbiAgICBkdXJhdGlvbl90ZXh0ICs9IGAke21pbnV0ZXN9IG1pbnV0ZShzKSBgXG4gIH1cbiAgaWYoc2Vjb25kcyA+IDApe1xuICAgIGR1cmF0aW9uX3RleHQgKz0gYCR7c2Vjb25kc30gc2Vjb25kKHMpYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImV4ZXJjaXNlVGlsZVwiPlxuICAgICAgPENhcmQgc3g9e3sgbWF4V2lkdGg6IDM0NSB9fT5cbiAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJkaXZcIj5cbiAgICAgICAgICAgIDxiPlxuICAgICAgICAgICAgICB7cHJvcHMubmFtZX0gZm9yIHtkdXJhdGlvbl90ZXh0fVxuICAgICAgICAgICAgPC9iPlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8Q2FyZE1lZGlhXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMjAwXCJcbiAgICAgICAgICAgIGltYWdlPXtwcm9wcy5pbWFnZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zdHJ1Y3Rpb25zXCI+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgIHtwcm9wcy5pbnN0cnVjdGlvbnN9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICA8L0NhcmQ+XG4gICAgPC9kaXY+XG4gICk7XG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBFeGVyY2lzZUNhcmQgZnJvbSAnLi9FeGVyY2lzZVRpbGUuanMnO1xuLy9pbXBvcnQgU3RhY2sgZnJvbSAnQG11aS9tYXRlcmlhbC9TdGFjaydcblxuaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuLi8uLi8uLi9hcHAuY29uZmlnLmpzJ1xuaW1wb3J0IGV4ZXJjaXNlRGF0YSBmcm9tICcuLi8uLi9zdGF0aWMvZXhlcmNpc2VfZGF0YS5qcydcblxuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ2FwaS1rZXknXSA9IGFwcENvbmZpZy5hcGlLZXlcbiAgXG5jbGFzcyBXb3Jrb3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBob25lOiB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5waG9uZSwgXG4gICAgICBkYXRhOiBudWxsLFxuICAgICAgZXJyb3I6IG51bGxcbiAgICB9XG4gIH1cblxuICBmZXRjaFByZXNjcmlwdGlvbnMgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgcGhvbmVfbnVtYmVyOiB0aGlzLnN0YXRlLnBob25lXG4gICAgfVxuXG4gICAgYXhpb3MuZ2V0KCcvYXBpL2dldC9wcmVzY3JpYmUnLCB7IHBhcmFtcyB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGFcbiAgICAgIH0pXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZXJyb3I6ICdTb21ldGhpbmcgd2VudCB3cm9uZydcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIHRoaXMuZmV0Y2hQcmVzY3JpcHRpb25zKClcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgbGV0IHBhdGllbnQgPSB0aGlzLnN0YXRlLmRhdGFcbiAgICBsZXQgcmVuZGVyID0gbnVsbDsgXG4gICAgbGV0IGVycm9yID0gbnVsbDsgXG5cbiAgICBjb25zb2xlLmxvZyhwYXRpZW50KVxuICAgIGlmKHBhdGllbnQgIT0gbnVsbCl7XG4gICAgICByZW5kZXIgPSBgJHtwYXRpZW50LmZ1bGxfbmFtZX1cXG5gXG4gICAgfVxuXG4gICAgaWYodGhpcy5zdGF0ZS5lcnJvciAhPSBudWxsKXtcbiAgICAgIGVycm9yID0gJ1NvbWV0aGluZyB3ZW50IHdyb25nJ1xuICAgICAgcmVuZGVyID0gbnVsbDsgXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdob21lJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hbWUnPlxuICAgICAgICAgIDxoMT5XZWxjb21lIHtyZW5kZXJ9PC9oMT5cbiAgICAgICAgICA8aDE+e2Vycm9yfTwvaDE+XG4gICAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgICB7IHBhdGllbnQgPyBwYXRpZW50LndvcmtvdXRzLm1hcCgodHlwZU5hbWUpID0+IChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxoMT57dHlwZU5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2V4ZXJjaXNlRGF0YVt0eXBlTmFtZS50b1N0cmluZygpXS5pbWFnZV91cmx9PjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICA8Yj57ZXhlcmNpc2VEYXRhW3R5cGVOYW1lLnRvU3RyaW5nKCldLmluc3RydWN0aW9uc308L2I+ICovfVxuICAgICAgICAgICAgICAgICAgICA8RXhlcmNpc2VDYXJkIG5hbWU9e3R5cGVOYW1lfSBpbWFnZT17ZXhlcmNpc2VEYXRhW3R5cGVOYW1lLnRvU3RyaW5nKCldLmltYWdlX3VybH0gZHVyYXRpb249e3BhdGllbnQuZHVyYXRpb25zW3BhdGllbnQud29ya291dHMuaW5kZXhPZih0eXBlTmFtZSldfVxuICAgICAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbnM9e2V4ZXJjaXNlRGF0YVt0eXBlTmFtZS50b1N0cmluZygpXS5pbnN0cnVjdGlvbnMuY29uY2F0KGBcXG5Db250aW51ZSBleGVyY2lzaW5nIGZvciAke3BhdGllbnQuZHVyYXRpb25zW3BhdGllbnQud29ya291dHMuaW5kZXhPZih0eXBlTmFtZSldfSBzZWNvbmRzLmApfS8+XG5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKSA6IG51bGx9XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHA+wqkgVGhlcmFNaW5kZXIsIDIwMjE8L3A+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV29ya291dFxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgbGF6eSwgU3VzcGVuc2UgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZSwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBXb3Jrb3V0IGZyb20gJy4vSW5kZXgvd29ya291dC5qc3gnXG5cbmltcG9ydCAnLi4vcHVibGljL3N0eWxlc2hlZXRzL3Njc3MvbWFpbi5zY3NzJ1xuXG5jb25zdCBJbmRleCA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL0luZGV4L2luZGV4LmpzeCcpKVxuXG5cbi8vIDxJTVBPUlRTPiBET04nVCBDSEFOR0UgVEhJUyBMSU5FIC0gQ29tcG9uZW50IGZpbGUgaW1wb3J0cyB3aWxsIGJlIGFkZGVkIGFib3ZlIGhlcmUuXG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5Mb2FkaW5nLi4uPC9kaXY+fT5cbiAgICAgICAgPFJvdXRlcj5cbiAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy8nIGNvbXBvbmVudD17SW5kZXh9IC8+XG4gICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD0nLzpwaG9uZScgY29tcG9uZW50PXtXb3Jrb3V0fSAvPlxuICAgICAgICAgICAgey8qIDxST1VURVM+IERPTidUIENIQU5HRSBUSElTIExJTkUgLSBSb3V0ZSB0YWdzIHdpbGwgYmUgYWRkZWQgYWJvdmUgaGVyZS4gKi99XG4gICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgIDwvUm91dGVyPlxuICAgICAgPC9TdXNwZW5zZT5cbiAgICApXG4gIH1cbn1cblxucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpXG4iXSwic291cmNlUm9vdCI6IiJ9