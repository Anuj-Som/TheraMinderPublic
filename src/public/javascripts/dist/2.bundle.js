(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/public/stylesheets/scss/index.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/public/stylesheets/scss/index.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=M+PLUS+1p:300,400,700|Raleway:300,400,700);"]);
// Module
exports.push([module.i, "* {\n  font-family: 'Raleway', 'M PLUS 1p', sans-serif; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/public/stylesheets/scss/index.scss":
/*!************************************************!*\
  !*** ./src/public/stylesheets/scss/index.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/public/stylesheets/scss/index.scss");

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

/***/ "./src/views/Index/TherapistScreen.js":
/*!********************************************!*\
  !*** ./src/views/Index/TherapistScreen.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_stylesheets_scss_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/stylesheets/scss/index.scss */ "./src/public/stylesheets/scss/index.scss");
/* harmony import */ var _public_stylesheets_scss_index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_stylesheets_scss_index_scss__WEBPACK_IMPORTED_MODULE_4__);
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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var workoutOptionsMenu = ["Straight Leg Raises", "Standing Quad Stretch", "Squats", "Latersal Leg Raises", "Back Lunges", "Pigeon Stretch", "Single-Leg Hip Circles", "Single-Leg Glute Kicks (Donkey Kicks)", "Plie Squats"];
var durationOptionsMenu = [15, 30, 45, 60, 90, 120, 150, 180, 240, 300];

function listWithNewVal(list, index, key, newVal) {
  var newList = list.map(function (item, currIndex) {
    if (currIndex !== index) {
      return item;
    }

    return _objectSpread(_objectSpread({}, item), {}, _defineProperty({}, key, newVal));
  });
  return newList;
} // https://goshakkk.name/array-form-inputs/


var TherapistScreen = /*#__PURE__*/function (_React$Component) {
  _inherits(TherapistScreen, _React$Component);

  var _super = _createSuper(TherapistScreen);

  function TherapistScreen() {
    var _this;

    _classCallCheck(this, TherapistScreen);

    _this = _super.call(this);

    _this.handleNext = function () {
      console.log(_this.state);
      var exerciseNames = [];
      var exerciseDuration = [];

      for (var i = 0; i < _this.state.exercises.length; i++) {
        exerciseNames.push(_this.state.exercises[i].dataType);
        exerciseDuration.push(_this.state.exercises[i].duration);
      }

      console.log(exerciseNames);
      console.log(exerciseDuration);

      _this.setState({
        loading: true
      });

      axios__WEBPACK_IMPORTED_MODULE_3___default()({
        method: 'post',
        url: '/api/prescribe',
        data: {
          full_name: _this.state.name,
          phone: _this.state.phone,
          workouts: {
            "workout": exerciseNames,
            "duration": exerciseDuration
          }
        }
      })["catch"](function (err) {
        alert('Error: Something went wrong with submitting form');

        _this.setState({
          loading: false
        });

        console.log(err);
      }).then(function () {
        _this.setState({
          loading: false
        });

        alert("You've successfully saved the workout for ".concat(_this.state.name));
        window.location.href = "/".concat(_this.state.phone.replaceAll("-", ""));
      });
    };

    _this.addExercise = function () {
      console.log(_this.state.noDisplayName);
      console.log(_this.state.name);

      _this.setState({
        exercises: _this.state.exercises.concat([{
          dataType: workoutOptionsMenu[0],
          duration: durationOptionsMenu[0]
        }]),
        noSensors: false,
        maxSensors: _this.state.exercises.length + 1 == 5
      });

      console.log(_this.state.noDisplayName);
      console.log(_this.state.name);
    };

    _this.printState = function () {
      if (_this.props.verbose) console.log(_this.state.exercises);
    };

    _this.deleteExercise = function (removedIndex) {
      return function () {
        if (_this.props.verbose) console.log("Deleting sensor with index ".concat(removedIndex));

        _this.setState({
          exercises: _this.state.exercises.filter(function (sensor, currIndex) {
            return currIndex !== removedIndex;
          }),
          noSensors: _this.state.exercises.length - 1 < 1,
          maxSensors: false
        });
      };
    };

    _this.handlePhoneChange = function (event) {
      _this.setState({
        phone: event.target.value
      }, function () {
        if (_this.state.phone.length === 10) {
          _this.setState({
            noTimeColumn: false
          });
        } else {
          _this.setState({
            noTimeColumn: true
          });
        }
      });
    };

    _this.handleDurationChange = function (index) {
      return function (event) {
        _this.setState({
          exercises: listWithNewVal(_this.state.exercises, index, "duration", event.target.value)
        });
      };
    };

    _this.handleExerciseChange = function (index) {
      return function (event) {
        _this.setState({
          exercises: listWithNewVal(_this.state.exercises, index, "dataType", event.target.value)
        });
      };
    };

    _this.handleNameChange = function (event) {
      _this.setState({
        name: event.target.value
      }, function () {
        if (_this.state.name == '' || _this.state.name == undefined) {
          _this.setState({
            noDisplayName: true
          });
        } else {
          _this.setState({
            noDisplayName: false
          });
        }
      });
    };

    _this.state = {
      name: "",
      exercises: [{
        dataType: workoutOptionsMenu[0],
        duration: durationOptionsMenu[0]
      }],
      phone: 0,
      noDisplayName: true,
      noSensors: false,
      noTimeColumn: true,
      maxSensors: false,
      next: false,
      loading: false
    };
    return _this;
  }

  _createClass(TherapistScreen, [{
    key: "NoExercisesError",
    value: function NoExercisesError(props) {
      if (props.noSensors) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h", null, "Please add at least one exercise.");
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "therapistScreenContainer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        flex: "50%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
        variant: "h2",
        gutterBottom: true,
        style: {
          marginTop: 20
        },
        className: "therapistScreenTitle"
      }, "TheraMinder"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        container: true,
        spacing: 3
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        item: true,
        xs: 12,
        sm: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
        required: true,
        label: "Patient Name",
        fullWidth: true,
        onChange: this.handleNameChange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        item: true,
        xs: 12,
        sm: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
        fullWidth: true,
        type: "number",
        label: "Patient Phone Number",
        onChange: this.handlePhoneChange,
        required: true,
        error: this.state.noTimeColumn,
        helperText: this.state.noTimeColumn ? 'Format Error: must be 10 digits (i.e 3214231241)' : ' '
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
        variant: "h6",
        gutterBottom: true,
        style: {
          marginTop: 20
        }
      }, "Exercises"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        container: true,
        spacing: 3
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        item: true,
        xs: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(this.NoExercisesError, {
        noSensors: this.state.noSensors
      })), this.state.exercises.map(function (sensor, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          container: true,
          item: true,
          xs: 12,
          spacing: 3,
          justify: "flex-start",
          alignItems: "center"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          item: true,
          xs: 6
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
          fullWidth: true,
          id: "datatype_select",
          select: true,
          label: "Exercise",
          value: sensor.dataType,
          onChange: _this2.handleExerciseChange(index)
        }, workoutOptionsMenu.map(function (typeName) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
            key: typeName,
            value: typeName
          }, typeName);
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          item: true,
          xs: 3
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
          fullWidth: true,
          type: "number",
          select: true,
          label: "Duration (s)",
          onChange: _this2.handleDurationChange(index),
          value: sensor.duration,
          InputProps: {
            inputProps: {
              id: "duration" + index,
              name: "duration",
              min: "0",
              placeholder: "Start column"
            }
          },
          required: true
        }, durationOptionsMenu.map(function (typeName) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
            key: typeName,
            value: typeName
          }, typeName);
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          item: true,
          xs: 3
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          color: "primary",
          onClick: _this2.deleteExercise(index)
        }, "Remove Exercise")));
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        container: true,
        justify: "center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        item: true,
        xs: 3
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: this.addExercise,
        color: "primary",
        disabled: this.state.maxSensors
      }, "Add Exercise"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActions"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        fullWidth: true,
        type: "submit",
        color: "primary",
        variant: "contained",
        className: "button-submit",
        onClick: this.handleNext,
        disabled: this.state.noDisplayName || this.state.noSensors || this.state.noTimeColumn
      }, "Submit")))));
    }
  }]);

  return TherapistScreen;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TherapistScreen);

/***/ }),

/***/ "./src/views/Index/index.jsx":
/*!***********************************!*\
  !*** ./src/views/Index/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TherapistScreen_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TherapistScreen.js */ "./src/views/Index/TherapistScreen.js");
/* harmony import */ var _app_config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.config.js */ "./app.config.js");
/* harmony import */ var _app_config_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_config_js__WEBPACK_IMPORTED_MODULE_3__);
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





axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.headers.common['api-key'] = _app_config_js__WEBPACK_IMPORTED_MODULE_3___default.a.apiKey;

var Index = /*#__PURE__*/function (_Component) {
  _inherits(Index, _Component);

  var _super = _createSuper(Index);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _super.call(this, props);

    _this.fetchName = function () {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/name').then(function (response) {
        _this.setState({
          name: response.data.name
        });
      })["catch"](function (error) {
        console.log(error);
      });
    };

    _this.componentDidMount = function () {
      _this.fetchName();
    };

    _this.state = {
      name: ''
    };
    return _this;
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TherapistScreen_js__WEBPACK_IMPORTED_MODULE_2__["default"], null);
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL3N0eWxlc2hlZXRzL3Njc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL3N0eWxlc2hlZXRzL3Njc3MvaW5kZXguc2Nzcz9iNWMyIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9JbmRleC9UaGVyYXBpc3RTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL0luZGV4L2luZGV4LmpzeCJdLCJuYW1lcyI6WyJ3b3Jrb3V0T3B0aW9uc01lbnUiLCJkdXJhdGlvbk9wdGlvbnNNZW51IiwibGlzdFdpdGhOZXdWYWwiLCJsaXN0IiwiaW5kZXgiLCJrZXkiLCJuZXdWYWwiLCJuZXdMaXN0IiwibWFwIiwiaXRlbSIsImN1cnJJbmRleCIsIlRoZXJhcGlzdFNjcmVlbiIsImhhbmRsZU5leHQiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJleGVyY2lzZU5hbWVzIiwiZXhlcmNpc2VEdXJhdGlvbiIsImkiLCJleGVyY2lzZXMiLCJsZW5ndGgiLCJwdXNoIiwiZGF0YVR5cGUiLCJkdXJhdGlvbiIsInNldFN0YXRlIiwibG9hZGluZyIsImF4aW9zIiwibWV0aG9kIiwidXJsIiwiZGF0YSIsImZ1bGxfbmFtZSIsIm5hbWUiLCJwaG9uZSIsIndvcmtvdXRzIiwiZXJyIiwiYWxlcnQiLCJ0aGVuIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicmVwbGFjZUFsbCIsImFkZEV4ZXJjaXNlIiwibm9EaXNwbGF5TmFtZSIsImNvbmNhdCIsIm5vU2Vuc29ycyIsIm1heFNlbnNvcnMiLCJwcmludFN0YXRlIiwicHJvcHMiLCJ2ZXJib3NlIiwiZGVsZXRlRXhlcmNpc2UiLCJyZW1vdmVkSW5kZXgiLCJmaWx0ZXIiLCJzZW5zb3IiLCJoYW5kbGVQaG9uZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJub1RpbWVDb2x1bW4iLCJoYW5kbGVEdXJhdGlvbkNoYW5nZSIsImhhbmRsZUV4ZXJjaXNlQ2hhbmdlIiwiaGFuZGxlTmFtZUNoYW5nZSIsInVuZGVmaW5lZCIsIm5leHQiLCJtYXJnaW5Ub3AiLCJ0eXBlTmFtZSIsImlucHV0UHJvcHMiLCJpZCIsIm1pbiIsInBsYWNlaG9sZGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJhcHBDb25maWciLCJhcGlLZXkiLCJJbmRleCIsImZldGNoTmFtZSIsImdldCIsInJlc3BvbnNlIiwiZXJyb3IiLCJjb21wb25lbnREaWRNb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyw4R0FBeUQ7QUFDbkc7QUFDQSxjQUFjLFFBQVMsa0dBQWtHO0FBQ3pIO0FBQ0EsY0FBYyxRQUFTLE1BQU0sb0RBQW9ELEVBQUU7QUFDbkY7QUFDQTs7Ozs7Ozs7Ozs7O0FDUEEsVUFBVSxtQkFBTyxDQUFDLDRKQUFpRjtBQUNuRywwQkFBMEIsbUJBQU8sQ0FBQyw2T0FBaUg7O0FBRW5KOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLGtCQUFrQixHQUFHLENBQUMscUJBQUQsRUFBd0IsdUJBQXhCLEVBQ1AsUUFETyxFQUNFLHFCQURGLEVBRVAsYUFGTyxFQUVRLGdCQUZSLEVBRTBCLHdCQUYxQixFQUdQLHVDQUhPLEVBR2tDLGFBSGxDLENBQTNCO0FBS0EsSUFBTUMsbUJBQW1CLEdBQUcsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLEVBQStCLEdBQS9CLEVBQW9DLEdBQXBDLEVBQXlDLEdBQXpDLENBQTVCOztBQUVBLFNBQVNDLGNBQVQs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OztBQ25SQTtBQUNBO0FBQ0E7QUFFQTtBQUVBZSw0Q0FBSyxDQUFDNkMsUUFBTixDQUFlQyxPQUFmLENBQXVCQyxNQUF2QixDQUE4QixTQUE5QixJQUEyQ0MscURBQVMsQ0FBQ0MsTUFBckQ7O0lBRU1DLEs7Ozs7O0FBQ0osaUJBQWE3QixLQUFiLEVBQW9CO0FBQUE7O0FBQUE7O0FBQ2xCLDhCQUFNQSxLQUFOOztBQURrQixVQU9wQjhCLFNBUG9CLEdBT1IsWUFBTTtBQUNoQm5ELGtEQUFLLENBQUNvRCxHQUFOLENBQVUsV0FBVixFQUF1QjFDLElBQXZCLENBQTRCLFVBQUMyQyxRQUFELEVBQWM7QUFDeEMsY0FBS3ZELFFBQUwsQ0FBYztBQUNaTyxjQUFJLEVBQUVnRCxRQUFRLENBQUNsRCxJQUFULENBQWNFO0FBRFIsU0FBZDtBQUdELE9BSkQsV0FJUyxVQUFDaUQsS0FBRCxFQUFXO0FBQ2xCbkUsZUFBTyxDQUFDQyxHQUFSLENBQVlrRSxLQUFaO0FBQ0QsT0FORDtBQU9ELEtBZm1COztBQUFBLFVBaUJwQkMsaUJBakJvQixHQWlCQSxZQUFNO0FBQ3hCLFlBQUtKLFNBQUw7QUFDRCxLQW5CbUI7O0FBRWxCLFVBQUs5RCxLQUFMLEdBQWE7QUFDWGdCLFVBQUksRUFBRTtBQURLLEtBQWI7QUFGa0I7QUFLbkI7Ozs7V0FnQkQsa0JBQVU7QUFDUiwwQkFDSSwyREFBQywyREFBRCxPQURKO0FBR0Q7Ozs7RUExQmlCdUMsK0M7O0FBNkJMTSxvRUFBZixFIiwiZmlsZSI6IjIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TStQTFVTKzFwOjMwMCw0MDAsNzAwfFJhbGV3YXk6MzAwLDQwMCw3MDApO1wiXSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5JywgJ00gUExVUyAxcCcsIHNhbnMtc2VyaWY7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgTWVudUl0ZW0gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgQ2FyZEFjdGlvbnN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgJy4uLy4uL3B1YmxpYy9zdHlsZXNoZWV0cy9zY3NzL2luZGV4LnNjc3MnXG5cblxuY29uc3Qgd29ya291dE9wdGlvbnNNZW51ID0gW1wiU3RyYWlnaHQgTGVnIFJhaXNlc1wiLCBcIlN0YW5kaW5nIFF1YWQgU3RyZXRjaFwiLFxuICAgICAgICAgICAgICAgICAgICBcIlNxdWF0c1wiLFwiTGF0ZXJzYWwgTGVnIFJhaXNlc1wiLFxuICAgICAgICAgICAgICAgICAgICBcIkJhY2sgTHVuZ2VzXCIsIFwiUGlnZW9uIFN0cmV0Y2hcIiwgXCJTaW5nbGUtTGVnIEhpcCBDaXJjbGVzXCIsIFxuICAgICAgICAgICAgICAgICAgICBcIlNpbmdsZS1MZWcgR2x1dGUgS2lja3MgKERvbmtleSBLaWNrcylcIiwgXCJQbGllIFNxdWF0c1wiXVxuXG5jb25zdCBkdXJhdGlvbk9wdGlvbnNNZW51ID0gWzE1LCAzMCwgNDUsIDYwLCA5MCwgMTIwLCAxNTAsIDE4MCwgMjQwLCAzMDBdXG5cbmZ1bmN0aW9uIGxpc3RXaXRoTmV3VmFsKGxpc3QsIGluZGV4LCBrZXksIG5ld1ZhbCkge1xuICBjb25zdCBuZXdMaXN0ID0gbGlzdC5tYXAoKGl0ZW0sIGN1cnJJbmRleCkgPT4ge1xuICAgIGlmIChjdXJySW5kZXggIT09IGluZGV4KSB7XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG4gICAgcmV0dXJuIHsgLi4uaXRlbSwgW2tleV06IG5ld1ZhbCB9O1xuICB9KTtcbiAgcmV0dXJuIG5ld0xpc3Q7XG59XG5cbi8vIGh0dHBzOi8vZ29zaGFra2submFtZS9hcnJheS1mb3JtLWlucHV0cy9cbmNsYXNzIFRoZXJhcGlzdFNjcmVlbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIFxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgZXhlcmNpc2VzOiBbeyBkYXRhVHlwZTogd29ya291dE9wdGlvbnNNZW51WzBdLCBkdXJhdGlvbjogZHVyYXRpb25PcHRpb25zTWVudVswXX1dLFxuICAgICAgcGhvbmU6IDAsXG4gICAgICBub0Rpc3BsYXlOYW1lOiB0cnVlLFxuICAgICAgbm9TZW5zb3JzOiBmYWxzZSxcbiAgICAgIG5vVGltZUNvbHVtbjogdHJ1ZSxcbiAgICAgIG1heFNlbnNvcnM6IGZhbHNlLFxuICAgICAgbmV4dDogZmFsc2UsXG4gICAgICBsb2FkaW5nOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICBoYW5kbGVOZXh0ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXG4gICAgbGV0IGV4ZXJjaXNlTmFtZXMgPSBbXVxuICAgIGxldCBleGVyY2lzZUR1cmF0aW9uID0gW11cbiAgICBmb3IodmFyIGk9MDtpPHRoaXMuc3RhdGUuZXhlcmNpc2VzLmxlbmd0aDtpKyspXG4gICAge1xuICAgICAgZXhlcmNpc2VOYW1lcy5wdXNoKHRoaXMuc3RhdGUuZXhlcmNpc2VzW2ldLmRhdGFUeXBlKVxuICAgICAgZXhlcmNpc2VEdXJhdGlvbi5wdXNoKHRoaXMuc3RhdGUuZXhlcmNpc2VzW2ldLmR1cmF0aW9uKVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGV4ZXJjaXNlTmFtZXMpXG4gICAgY29uc29sZS5sb2coZXhlcmNpc2VEdXJhdGlvbilcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbG9hZGluZzogdHJ1ZVxuICAgIH0pXG5cbiAgICBheGlvcyh7XG4gICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgIHVybDogJy9hcGkvcHJlc2NyaWJlJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZnVsbF9uYW1lOiB0aGlzLnN0YXRlLm5hbWUsXG4gICAgICAgIHBob25lOiB0aGlzLnN0YXRlLnBob25lLFxuICAgICAgICB3b3Jrb3V0czoge1xuICAgICAgICAgIFwid29ya291dFwiOiBleGVyY2lzZU5hbWVzLFxuICAgICAgICAgIFwiZHVyYXRpb25cIjogZXhlcmNpc2VEdXJhdGlvblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkuY2F0Y2goKGVycikgPT57XG4gICAgICBhbGVydCgnRXJyb3I6IFNvbWV0aGluZyB3ZW50IHdyb25nIHdpdGggc3VibWl0dGluZyBmb3JtJylcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgfSlcbiAgICAgIGNvbnNvbGUubG9nKGVycik7IFxuICAgIH0pXG4gICAgLnRoZW4oKCkgPT57XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgIH0pXG4gICAgICBhbGVydChgWW91J3ZlIHN1Y2Nlc3NmdWxseSBzYXZlZCB0aGUgd29ya291dCBmb3IgJHt0aGlzLnN0YXRlLm5hbWV9YCk7IFxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgLyR7dGhpcy5zdGF0ZS5waG9uZS5yZXBsYWNlQWxsKFwiLVwiLCBcIlwiKX1gXG4gICAgfSk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQWRkcyBzZW5zb3IgdG8gZm9ybSBhbmQgdXBkYXRlcyB0aGUgYm9uZSBzZWxlY3Rpb24gZHJvcGRvd24gbGlzdHNcbiAgICovXG4gIGFkZEV4ZXJjaXNlID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubm9EaXNwbGF5TmFtZSlcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLm5hbWUpXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBleGVyY2lzZXM6IHRoaXMuc3RhdGUuZXhlcmNpc2VzLmNvbmNhdChbeyBkYXRhVHlwZTogd29ya291dE9wdGlvbnNNZW51WzBdLCBkdXJhdGlvbjogZHVyYXRpb25PcHRpb25zTWVudVswXX1dKSxcbiAgICAgIG5vU2Vuc29yczogZmFsc2UsXG4gICAgICBtYXhTZW5zb3JzOiAodGhpcy5zdGF0ZS5leGVyY2lzZXMubGVuZ3RoKzEgPT0gNSlcbiAgICAgIFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubm9EaXNwbGF5TmFtZSlcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLm5hbWUpXG4gIH1cblxuICBwcmludFN0YXRlID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLnZlcmJvc2UpIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZXhlcmNpc2VzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gUmVtb3ZlcyBzZW5zb3IgZnJvbSBmb3JtIGFuZCB1cGRhdGVzIHRoZSBib25lIHNlbGVjdGlvbiBkcm9wZG93biBsaXN0c1xuICAgKi9cbiAgZGVsZXRlRXhlcmNpc2UgPSAocmVtb3ZlZEluZGV4KSA9PiAoKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMudmVyYm9zZSkgY29uc29sZS5sb2coYERlbGV0aW5nIHNlbnNvciB3aXRoIGluZGV4ICR7cmVtb3ZlZEluZGV4fWApO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZXhlcmNpc2VzOiB0aGlzLnN0YXRlLmV4ZXJjaXNlcy5maWx0ZXIoKHNlbnNvciwgY3VyckluZGV4KSA9PiBjdXJySW5kZXggIT09IHJlbW92ZWRJbmRleCksXG4gICAgICBcbiAgICAgICAgbm9TZW5zb3JzOiAodGhpcy5zdGF0ZS5leGVyY2lzZXMubGVuZ3RoLTEgPCAxKSxcbiAgICAgICAgbWF4U2Vuc29yczogZmFsc2VcbiAgICAgIFxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVQaG9uZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcGhvbmU6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0sICgpPT4ge1xuICAgICAgaWYodGhpcy5zdGF0ZS5waG9uZS5sZW5ndGggPT09IDEwKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe25vVGltZUNvbHVtbjogZmFsc2V9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bm9UaW1lQ29sdW1uOiB0cnVlfSlcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUR1cmF0aW9uQ2hhbmdlID0gKGluZGV4KSA9PiAoZXZlbnQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZXhlcmNpc2VzOiBsaXN0V2l0aE5ld1ZhbCh0aGlzLnN0YXRlLmV4ZXJjaXNlcywgaW5kZXgsIFwiZHVyYXRpb25cIiwgZXZlbnQudGFyZ2V0LnZhbHVlKSB9KTtcbiAgfVxuXG4gIGhhbmRsZUV4ZXJjaXNlQ2hhbmdlID0gKGluZGV4KSA9PiAoZXZlbnQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZXhlcmNpc2VzOiBsaXN0V2l0aE5ld1ZhbCh0aGlzLnN0YXRlLmV4ZXJjaXNlcywgaW5kZXgsIFwiZGF0YVR5cGVcIiwgZXZlbnQudGFyZ2V0LnZhbHVlKSB9KTtcbiAgfVxuXG4gIGhhbmRsZU5hbWVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0sICgpPT57XG4gICAgICBpZih0aGlzLnN0YXRlLm5hbWUgPT0gJycgfHwgdGhpcy5zdGF0ZS5uYW1lID09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtub0Rpc3BsYXlOYW1lOiB0cnVlfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe25vRGlzcGxheU5hbWU6IGZhbHNlfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgTm9FeGVyY2lzZXNFcnJvcihwcm9wcykge1xuICAgIGlmIChwcm9wcy5ub1NlbnNvcnMpIHtcbiAgICAgIHJldHVybiA8aD5QbGVhc2UgYWRkIGF0IGxlYXN0IG9uZSBleGVyY2lzZS48L2g+O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGhlcmFwaXN0U2NyZWVuQ29udGFpbmVyXCI+XG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPENhcmQgZmxleD17XCI1MCVcIn0+XG4gICAgICAgIDxDYXJkQ29udGVudD5cblxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIiBndXR0ZXJCb3R0b20gc3R5bGU9e3ttYXJnaW5Ub3A6MjB9fSBjbGFzc05hbWU9XCJ0aGVyYXBpc3RTY3JlZW5UaXRsZVwiPlxuICAgICAgICAgIFRoZXJhTWluZGVyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgbGFiZWw9XCJQYXRpZW50IE5hbWVcIlxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlTmFtZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlBhdGllbnQgUGhvbmUgTnVtYmVyXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUGhvbmVDaGFuZ2V9XG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLm5vVGltZUNvbHVtbn1cbiAgICAgICAgICAgICAgaGVscGVyVGV4dD17dGhpcy5zdGF0ZS5ub1RpbWVDb2x1bW4gPyAnRm9ybWF0IEVycm9yOiBtdXN0IGJlIDEwIGRpZ2l0cyAoaS5lIDMyMTQyMzEyNDEpJyA6ICcgJ31cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGd1dHRlckJvdHRvbSBzdHlsZT17e21hcmdpblRvcDoyMH19PlxuICAgICAgICAgIEV4ZXJjaXNlc1xuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxuXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgPHRoaXMuTm9FeGVyY2lzZXNFcnJvciBub1NlbnNvcnM9e3RoaXMuc3RhdGUubm9TZW5zb3JzfT48L3RoaXMuTm9FeGVyY2lzZXNFcnJvcj5cbiAgICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5leGVyY2lzZXMubWFwKChzZW5zb3IsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHhzPXsxMn0gc3BhY2luZz17M30ganVzdGlmeT1cImZsZXgtc3RhcnRcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICBpZD1cImRhdGF0eXBlX3NlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkV4ZXJjaXNlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbnNvci5kYXRhVHlwZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRXhlcmNpc2VDaGFuZ2UoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7d29ya291dE9wdGlvbnNNZW51Lm1hcCgodHlwZU5hbWUpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXt0eXBlTmFtZX0gdmFsdWU9e3R5cGVOYW1lfT57dHlwZU5hbWV9PC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L1RleHRGaWVsZD5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEdXJhdGlvbiAocylcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVEdXJhdGlvbkNoYW5nZShpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZW5zb3IuZHVyYXRpb259XG4gICAgICAgICAgICAgICAgICAgIElucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJkdXJhdGlvblwiK2luZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJkdXJhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlN0YXJ0IGNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICAgICAgICB7ZHVyYXRpb25PcHRpb25zTWVudS5tYXAoKHR5cGVOYW1lKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17dHlwZU5hbWV9IHZhbHVlPXt0eXBlTmFtZX0+e3R5cGVOYW1lfTwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9UZXh0RmllbGQ+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5kZWxldGVFeGVyY2lzZShpbmRleCl9PlxuICAgICAgICAgICAgICAgICAgICBSZW1vdmUgRXhlcmNpc2VcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICApKX1cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5hZGRFeGVyY2lzZX1cbiAgICAgICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5tYXhTZW5zb3JzfT5cbiAgICAgICAgICAgICAgICBBZGQgRXhlcmNpc2VcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0NhcmRDb250ZW50PlxuXG4gICAgICAgIDxDYXJkQWN0aW9ucz5cbiAgICAgICAgICA8QnV0dG9uIGZ1bGxXaWR0aCB0eXBlPVwic3VibWl0XCIgY29sb3I9XCJwcmltYXJ5XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiIGNsYXNzTmFtZT1cImJ1dHRvbi1zdWJtaXRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZU5leHR9IGRpc2FibGVkPXsodGhpcy5zdGF0ZS5ub0Rpc3BsYXlOYW1lIHx8IHRoaXMuc3RhdGUubm9TZW5zb3JzIHx8IHRoaXMuc3RhdGUubm9UaW1lQ29sdW1uKX0+U3VibWl0PC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICA8L0NhcmQ+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICA8L2Rpdj5cbiAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVyYXBpc3RTY3JlZW47IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IFRoZXJhcGlzdFNjcmVlbiBmcm9tICcuL1RoZXJhcGlzdFNjcmVlbi5qcydcblxuaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuLi8uLi8uLi9hcHAuY29uZmlnLmpzJ1xuXG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnYXBpLWtleSddID0gYXBwQ29uZmlnLmFwaUtleVxuXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiAnJ1xuICAgIH1cbiAgfVxuXG4gIGZldGNoTmFtZSA9ICgpID0+IHtcbiAgICBheGlvcy5nZXQoJy9hcGkvbmFtZScpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbmFtZTogcmVzcG9uc2UuZGF0YS5uYW1lXG4gICAgICB9KVxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIHRoaXMuZmV0Y2hOYW1lKClcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRoZXJhcGlzdFNjcmVlbi8+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG4iXSwic291cmNlUm9vdCI6IiJ9