(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

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
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/CircularProgress */ "./node_modules/@mui/material/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_stylesheets_scss_index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/stylesheets/scss/index.scss */ "./src/public/stylesheets/scss/index.scss");
/* harmony import */ var _public_stylesheets_scss_index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_stylesheets_scss_index_scss__WEBPACK_IMPORTED_MODULE_5__);
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

      axios__WEBPACK_IMPORTED_MODULE_4___default()({
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL3N0eWxlc2hlZXRzL3Njc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL3N0eWxlc2hlZXRzL3Njc3MvaW5kZXguc2Nzcz9iNWMyIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9JbmRleC9UaGVyYXBpc3RTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL0luZGV4L2luZGV4LmpzeCJdLCJuYW1lcyI6WyJ3b3Jrb3V0T3B0aW9uc01lbnUiLCJkdXJhdGlvbk9wdGlvbnNNZW51IiwibGlzdFdpdGhOZXdWYWwiLCJsaXN0IiwiaW5kZXgiLCJrZXkiLCJuZXdWYWwiLCJuZXdMaXN0IiwibWFwIiwiaXRlbSIsImN1cnJJbmRleCIsIlRoZXJhcGlzdFNjcmVlbiIsImhhbmRsZU5leHQiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJleGVyY2lzZU5hbWVzIiwiZXhlcmNpc2VEdXJhdGlvbiIsImkiLCJleGVyY2lzZXMiLCJsZW5ndGgiLCJwdXNoIiwiZGF0YVR5cGUiLCJkdXJhdGlvbiIsInNldFN0YXRlIiwibG9hZGluZyIsImF4aW9zIiwibWV0aG9kIiwidXJsIiwiZGF0YSIsImZ1bGxfbmFtZSIsIm5hbWUiLCJwaG9uZSIsIndvcmtvdXRzIiwiZXJyIiwiYWxlcnQiLCJ0aGVuIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicmVwbGFjZUFsbCIsImFkZEV4ZXJjaXNlIiwibm9EaXNwbGF5TmFtZSIsImNvbmNhdCIsIm5vU2Vuc29ycyIsIm1heFNlbnNvcnMiLCJwcmludFN0YXRlIiwicHJvcHMiLCJ2ZXJib3NlIiwiZGVsZXRlRXhlcmNpc2UiLCJyZW1vdmVkSW5kZXgiLCJmaWx0ZXIiLCJzZW5zb3IiLCJoYW5kbGVQaG9uZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJub1RpbWVDb2x1bW4iLCJoYW5kbGVEdXJhdGlvbkNoYW5nZSIsImhhbmRsZUV4ZXJjaXNlQ2hhbmdlIiwiaGFuZGxlTmFtZUNoYW5nZSIsInVuZGVmaW5lZCIsIm5leHQiLCJtYXJnaW5Ub3AiLCJ0eXBlTmFtZSIsImlucHV0UHJvcHMiLCJpZCIsIm1pbiIsInBsYWNlaG9sZGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJhcHBDb25maWciLCJhcGlLZXkiLCJJbmRleCIsImZldGNoTmFtZSIsImdldCIsInJlc3BvbnNlIiwiZXJyb3IiLCJjb21wb25lbnREaWRNb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyw4R0FBeUQ7QUFDbkc7QUFDQSxjQUFjLFFBQVMsa0dBQWtHO0FBQ3pIO0FBQ0EsY0FBYyxRQUFTLE1BQU0sb0RBQW9ELEVBQUU7QUFDbkY7QUFDQTs7Ozs7Ozs7Ozs7O0FDUEEsVUFBVSxtQkFBTyxDQUFDLDRKQUFpRjtBQUNuRywwQkFBMEIsbUJBQU8sQ0FBQyw2T0FBaUg7O0FBRW5KOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLGtCQUFrQixHQUFHLENBQUMscUJBQUQsRUFBd0IsdUJBQXhCLEVBQ1AsUUFETyxFQUNFLHFCQURGLEVBRVAsYUFGTyxFQUVRLGdCQUZSLEVBRTBCLHdCQUYxQixFQUdQLHVDQUhPLEVBR2tDLGFBSGxDLENBQTNCO0FBS0EsSUFBTUMsbUJBQW1CLEdBQUcsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLEVBQStCLEdBQS9CLEVBQW9DLEdBQXBDLEVBQXlDLEdBQXpDLENBQTVCOztBQUVBLFNBQVND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Ozs7Ozs7OztBQ3BSQTtBQUNBO0FBQ0E7QUFFQTtBQUVBZSw0Q0FBSyxDQUFDNkMsUUFBTixDQUFlQyxPQUFmLENBQXVCQyxNQUF2QixDQUE4QixTQUE5QixJQUEyQ0MscURBQVMsQ0FBQ0MsTUFBckQ7O0lBRU1DLEs7Ozs7O0FBQ0osaUJBQWE3QixLQUFiLEVBQW9CO0FBQUE7O0FBQUE7O0FBQ2xCLDhCQUFNQSxLQUFOOztBQURrQixVQU9wQjhCLFNBUG9CLEdBT1IsWUFBTTtBQUNoQm5ELGtEQUFLLENBQUNvRCxHQUFOLENBQVUsV0FBVixFQUF1QjFDLElBQXZCLENBQTRCLFVBQUMyQyxRQUFELEVBQWM7QUFDeEMsY0FBS3ZELFFBQUwsQ0FBYztBQUNaTyxjQUFJLEVBQUVnRCxRQUFRLENBQUNsRCxJQUFULENBQWNFO0FBRFIsU0FBZDtBQUdELE9BSkQsV0FJUyxVQUFDaUQsS0FBRCxFQUFXO0FBQ2xCbkUsZUFBTyxDQUFDQyxHQUFSLENBQVlrRSxLQUFaO0FBQ0QsT0FORDtBQU9ELEtBZm1COztBQUFBLFVBaUJwQkMsaUJBakJvQixHQWlCQSxZQUFNO0FBQ3hCLFlBQUtKLFNBQUw7QUFDRCxLQW5CbUI7O0FBRWxCLFVBQUs5RCxLQUFMLEdBQWE7QUFDWGdCLFVBQUksRUFBRTtBQURLLEtBQWI7QUFGa0I7QUFLbkI7Ozs7V0FnQkQsa0JBQVU7QUFDUiwwQkFDSSwyREFBQywyREFBRCxPQURKO0FBR0Q7Ozs7RUExQmlCdUMsK0M7O0FBNkJMTSxvRUFBZixFIiwiZmlsZSI6IjEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TStQTFVTKzFwOjMwMCw0MDAsNzAwfFJhbGV3YXk6MzAwLDQwMCw3MDApO1wiXSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5JywgJ00gUExVUyAxcCcsIHNhbnMtc2VyaWY7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgTWVudUl0ZW0gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG11aS9tYXRlcmlhbC9DaXJjdWxhclByb2dyZXNzJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIENhcmRBY3Rpb25zfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0ICcuLi8uLi9wdWJsaWMvc3R5bGVzaGVldHMvc2Nzcy9pbmRleC5zY3NzJ1xuXG5cbmNvbnN0IHdvcmtvdXRPcHRpb25zTWVudSA9IFtcIlN0cmFpZ2h0IExlZyBSYWlzZXNcIiwgXCJTdGFuZGluZyBRdWFkIFN0cmV0Y2hcIixcbiAgICAgICAgICAgICAgICAgICAgXCJTcXVhdHNcIixcIkxhdGVyc2FsIExlZyBSYWlzZXNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJCYWNrIEx1bmdlc1wiLCBcIlBpZ2VvbiBTdHJldGNoXCIsIFwiU2luZ2xlLUxlZyBIaXAgQ2lyY2xlc1wiLCBcbiAgICAgICAgICAgICAgICAgICAgXCJTaW5nbGUtTGVnIEdsdXRlIEtpY2tzIChEb25rZXkgS2lja3MpXCIsIFwiUGxpZSBTcXVhdHNcIl1cblxuY29uc3QgZHVyYXRpb25PcHRpb25zTWVudSA9IFsxNSwgMzAsIDQ1LCA2MCwgOTAsIDEyMCwgMTUwLCAxODAsIDI0MCwgMzAwXVxuXG5mdW5jdGlvbiBsaXN0V2l0aE5ld1ZhbChsaXN0LCBpbmRleCwga2V5LCBuZXdWYWwpIHtcbiAgY29uc3QgbmV3TGlzdCA9IGxpc3QubWFwKChpdGVtLCBjdXJySW5kZXgpID0+IHtcbiAgICBpZiAoY3VyckluZGV4ICE9PSBpbmRleCkge1xuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuICAgIHJldHVybiB7IC4uLml0ZW0sIFtrZXldOiBuZXdWYWwgfTtcbiAgfSk7XG4gIHJldHVybiBuZXdMaXN0O1xufVxuXG4vLyBodHRwczovL2dvc2hha2trLm5hbWUvYXJyYXktZm9ybS1pbnB1dHMvXG5jbGFzcyBUaGVyYXBpc3RTY3JlZW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmFtZTogXCJcIixcbiAgICAgIGV4ZXJjaXNlczogW3sgZGF0YVR5cGU6IHdvcmtvdXRPcHRpb25zTWVudVswXSwgZHVyYXRpb246IGR1cmF0aW9uT3B0aW9uc01lbnVbMF19XSxcbiAgICAgIHBob25lOiAwLFxuICAgICAgbm9EaXNwbGF5TmFtZTogdHJ1ZSxcbiAgICAgIG5vU2Vuc29yczogZmFsc2UsXG4gICAgICBub1RpbWVDb2x1bW46IHRydWUsXG4gICAgICBtYXhTZW5zb3JzOiBmYWxzZSxcbiAgICAgIG5leHQ6IGZhbHNlLFxuICAgICAgbG9hZGluZzogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlTmV4dCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKVxuICAgIGxldCBleGVyY2lzZU5hbWVzID0gW11cbiAgICBsZXQgZXhlcmNpc2VEdXJhdGlvbiA9IFtdXG4gICAgZm9yKHZhciBpPTA7aTx0aGlzLnN0YXRlLmV4ZXJjaXNlcy5sZW5ndGg7aSsrKVxuICAgIHtcbiAgICAgIGV4ZXJjaXNlTmFtZXMucHVzaCh0aGlzLnN0YXRlLmV4ZXJjaXNlc1tpXS5kYXRhVHlwZSlcbiAgICAgIGV4ZXJjaXNlRHVyYXRpb24ucHVzaCh0aGlzLnN0YXRlLmV4ZXJjaXNlc1tpXS5kdXJhdGlvbilcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhleGVyY2lzZU5hbWVzKVxuICAgIGNvbnNvbGUubG9nKGV4ZXJjaXNlRHVyYXRpb24pXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxvYWRpbmc6IHRydWVcbiAgICB9KVxuXG4gICAgYXhpb3Moe1xuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICB1cmw6ICcvYXBpL3ByZXNjcmliZScsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGZ1bGxfbmFtZTogdGhpcy5zdGF0ZS5uYW1lLFxuICAgICAgICBwaG9uZTogdGhpcy5zdGF0ZS5waG9uZSxcbiAgICAgICAgd29ya291dHM6IHtcbiAgICAgICAgICBcIndvcmtvdXRcIjogZXhlcmNpc2VOYW1lcyxcbiAgICAgICAgICBcImR1cmF0aW9uXCI6IGV4ZXJjaXNlRHVyYXRpb25cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLmNhdGNoKChlcnIpID0+e1xuICAgICAgYWxlcnQoJ0Vycm9yOiBTb21ldGhpbmcgd2VudCB3cm9uZyB3aXRoIHN1Ym1pdHRpbmcgZm9ybScpXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZyhlcnIpOyBcbiAgICB9KVxuICAgIC50aGVuKCgpID0+e1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICB9KVxuICAgICAgYWxlcnQoYFlvdSd2ZSBzdWNjZXNzZnVsbHkgc2F2ZWQgdGhlIHdvcmtvdXQgZm9yICR7dGhpcy5zdGF0ZS5uYW1lfWApOyBcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYC8ke3RoaXMuc3RhdGUucGhvbmUucmVwbGFjZUFsbChcIi1cIiwgXCJcIil9YFxuICAgIH0pO1xuICB9XG5cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEFkZHMgc2Vuc29yIHRvIGZvcm0gYW5kIHVwZGF0ZXMgdGhlIGJvbmUgc2VsZWN0aW9uIGRyb3Bkb3duIGxpc3RzXG4gICAqL1xuICBhZGRFeGVyY2lzZSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLm5vRGlzcGxheU5hbWUpXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5uYW1lKVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZXhlcmNpc2VzOiB0aGlzLnN0YXRlLmV4ZXJjaXNlcy5jb25jYXQoW3sgZGF0YVR5cGU6IHdvcmtvdXRPcHRpb25zTWVudVswXSwgZHVyYXRpb246IGR1cmF0aW9uT3B0aW9uc01lbnVbMF19XSksXG4gICAgICBub1NlbnNvcnM6IGZhbHNlLFxuICAgICAgbWF4U2Vuc29yczogKHRoaXMuc3RhdGUuZXhlcmNpc2VzLmxlbmd0aCsxID09IDUpXG4gICAgICBcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLm5vRGlzcGxheU5hbWUpXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5uYW1lKVxuICB9XG5cbiAgcHJpbnRTdGF0ZSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy52ZXJib3NlKSBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmV4ZXJjaXNlcyk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFJlbW92ZXMgc2Vuc29yIGZyb20gZm9ybSBhbmQgdXBkYXRlcyB0aGUgYm9uZSBzZWxlY3Rpb24gZHJvcGRvd24gbGlzdHNcbiAgICovXG4gIGRlbGV0ZUV4ZXJjaXNlID0gKHJlbW92ZWRJbmRleCkgPT4gKCkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLnZlcmJvc2UpIGNvbnNvbGUubG9nKGBEZWxldGluZyBzZW5zb3Igd2l0aCBpbmRleCAke3JlbW92ZWRJbmRleH1gKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGV4ZXJjaXNlczogdGhpcy5zdGF0ZS5leGVyY2lzZXMuZmlsdGVyKChzZW5zb3IsIGN1cnJJbmRleCkgPT4gY3VyckluZGV4ICE9PSByZW1vdmVkSW5kZXgpLFxuICAgICAgXG4gICAgICAgIG5vU2Vuc29yczogKHRoaXMuc3RhdGUuZXhlcmNpc2VzLmxlbmd0aC0xIDwgMSksXG4gICAgICAgIG1heFNlbnNvcnM6IGZhbHNlXG4gICAgICBcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlUGhvbmVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHBob25lOiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9LCAoKT0+IHtcbiAgICAgIGlmKHRoaXMuc3RhdGUucGhvbmUubGVuZ3RoID09PSAxMCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtub1RpbWVDb2x1bW46IGZhbHNlfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe25vVGltZUNvbHVtbjogdHJ1ZX0pXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVEdXJhdGlvbkNoYW5nZSA9IChpbmRleCkgPT4gKGV2ZW50KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGV4ZXJjaXNlczogbGlzdFdpdGhOZXdWYWwodGhpcy5zdGF0ZS5leGVyY2lzZXMsIGluZGV4LCBcImR1cmF0aW9uXCIsIGV2ZW50LnRhcmdldC52YWx1ZSkgfSk7XG4gIH1cblxuICBoYW5kbGVFeGVyY2lzZUNoYW5nZSA9IChpbmRleCkgPT4gKGV2ZW50KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGV4ZXJjaXNlczogbGlzdFdpdGhOZXdWYWwodGhpcy5zdGF0ZS5leGVyY2lzZXMsIGluZGV4LCBcImRhdGFUeXBlXCIsIGV2ZW50LnRhcmdldC52YWx1ZSkgfSk7XG4gIH1cblxuICBoYW5kbGVOYW1lQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9LCAoKT0+e1xuICAgICAgaWYodGhpcy5zdGF0ZS5uYW1lID09ICcnIHx8IHRoaXMuc3RhdGUubmFtZSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bm9EaXNwbGF5TmFtZTogdHJ1ZX0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtub0Rpc3BsYXlOYW1lOiBmYWxzZX0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIE5vRXhlcmNpc2VzRXJyb3IocHJvcHMpIHtcbiAgICBpZiAocHJvcHMubm9TZW5zb3JzKSB7XG4gICAgICByZXR1cm4gPGg+UGxlYXNlIGFkZCBhdCBsZWFzdCBvbmUgZXhlcmNpc2UuPC9oPjtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRoZXJhcGlzdFNjcmVlbkNvbnRhaW5lclwiPlxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxDYXJkIGZsZXg9e1wiNTAlXCJ9PlxuICAgICAgICA8Q2FyZENvbnRlbnQ+XG5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCIgZ3V0dGVyQm90dG9tIHN0eWxlPXt7bWFyZ2luVG9wOjIwfX0gY2xhc3NOYW1lPVwidGhlcmFwaXN0U2NyZWVuVGl0bGVcIj5cbiAgICAgICAgICBUaGVyYU1pbmRlclxuICAgICAgICA8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIGxhYmVsPVwiUGF0aWVudCBOYW1lXCJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU5hbWVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuXG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJQYXRpZW50IFBob25lIE51bWJlclwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVBob25lQ2hhbmdlfVxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5ub1RpbWVDb2x1bW59XG4gICAgICAgICAgICAgIGhlbHBlclRleHQ9e3RoaXMuc3RhdGUubm9UaW1lQ29sdW1uID8gJ0Zvcm1hdCBFcnJvcjogbXVzdCBiZSAxMCBkaWdpdHMgKGkuZSAzMjE0MjMxMjQxKScgOiAnICd9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBndXR0ZXJCb3R0b20gc3R5bGU9e3ttYXJnaW5Ub3A6MjB9fT5cbiAgICAgICAgICBFeGVyY2lzZXNcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cblxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgIDx0aGlzLk5vRXhlcmNpc2VzRXJyb3Igbm9TZW5zb3JzPXt0aGlzLnN0YXRlLm5vU2Vuc29yc30+PC90aGlzLk5vRXhlcmNpc2VzRXJyb3I+XG4gICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAge3RoaXMuc3RhdGUuZXhlcmNpc2VzLm1hcCgoc2Vuc29yLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSB4cz17MTJ9IHNwYWNpbmc9ezN9IGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJkYXRhdHlwZV9zZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFeGVyY2lzZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZW5zb3IuZGF0YVR5cGV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUV4ZXJjaXNlQ2hhbmdlKGluZGV4KX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3dvcmtvdXRPcHRpb25zTWVudS5tYXAoKHR5cGVOYW1lKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17dHlwZU5hbWV9IHZhbHVlPXt0eXBlTmFtZX0+e3R5cGVOYW1lfTwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9UZXh0RmllbGQ+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRHVyYXRpb24gKHMpXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRHVyYXRpb25DaGFuZ2UoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2Vuc29yLmR1cmF0aW9ufVxuICAgICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZHVyYXRpb25cIitpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZHVyYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJTdGFydCBjb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgICAge2R1cmF0aW9uT3B0aW9uc01lbnUubWFwKCh0eXBlTmFtZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e3R5cGVOYW1lfSB2YWx1ZT17dHlwZU5hbWV9Pnt0eXBlTmFtZX08L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZGVsZXRlRXhlcmNpc2UoaW5kZXgpfT5cbiAgICAgICAgICAgICAgICAgICAgUmVtb3ZlIEV4ZXJjaXNlXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgKSl9XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuYWRkRXhlcmNpc2V9XG4gICAgICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUubWF4U2Vuc29yc30+XG4gICAgICAgICAgICAgICAgQWRkIEV4ZXJjaXNlXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9DYXJkQ29udGVudD5cblxuICAgICAgICA8Q2FyZEFjdGlvbnM+XG4gICAgICAgICAgPEJ1dHRvbiBmdWxsV2lkdGggdHlwZT1cInN1Ym1pdFwiIGNvbG9yPVwicHJpbWFyeVwiIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjbGFzc05hbWU9XCJidXR0b24tc3VibWl0XCIgb25DbGljaz17dGhpcy5oYW5kbGVOZXh0fSBkaXNhYmxlZD17KHRoaXMuc3RhdGUubm9EaXNwbGF5TmFtZSB8fCB0aGlzLnN0YXRlLm5vU2Vuc29ycyB8fCB0aGlzLnN0YXRlLm5vVGltZUNvbHVtbil9PlN1Ym1pdDwvQnV0dG9uPlxuICAgICAgICA8L0NhcmRBY3Rpb25zPlxuICAgICAgPC9DYXJkPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgPC9kaXY+XG4gICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlcmFwaXN0U2NyZWVuOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBUaGVyYXBpc3RTY3JlZW4gZnJvbSAnLi9UaGVyYXBpc3RTY3JlZW4uanMnXG5cbmltcG9ydCBhcHBDb25maWcgZnJvbSAnLi4vLi4vLi4vYXBwLmNvbmZpZy5qcydcblxuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ2FwaS1rZXknXSA9IGFwcENvbmZpZy5hcGlLZXlcblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmFtZTogJydcbiAgICB9XG4gIH1cblxuICBmZXRjaE5hbWUgPSAoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KCcvYXBpL25hbWUnKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG5hbWU6IHJlc3BvbnNlLmRhdGEubmFtZVxuICAgICAgfSlcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH0pXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICB0aGlzLmZldGNoTmFtZSgpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVyYXBpc3RTY3JlZW4vPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuIl0sInNvdXJjZVJvb3QiOiIifQ==