(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

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
/* harmony import */ var _mui_icons_material_AddCircleOutline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/AddCircleOutline */ "./node_modules/@mui/icons-material/AddCircleOutline.js");
/* harmony import */ var _mui_icons_material_AddCircleOutline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AddCircleOutline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_stylesheets_scss_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/stylesheets/scss/index.scss */ "./src/public/stylesheets/scss/index.scss");
/* harmony import */ var _public_stylesheets_scss_index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_stylesheets_scss_index_scss__WEBPACK_IMPORTED_MODULE_6__);
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












var workoutOptionsMenu = ["Straight Leg Raises", "Standing Quad Stretch", "Squats", "Lateral Leg Raises", "Back Lunges", "Pigeon Stretch", "Single-Leg Hip Circles", "Single-Leg Glute Kicks (Donkey Kicks)", "Plie Squats"];
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

      axios__WEBPACK_IMPORTED_MODULE_5___default()({
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
      }).then(function (data) {
        _this.setState({
          loading: false
        });

        alert(data.data.message);
        window.location.href = "/".concat(_this.state.phone);
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

      var loading = this.state.loading === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_2__["default"], null) : null;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "therapistScreenContainer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        flex: "50%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "therapistScreenCardContainer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
        variant: "h2",
        gutterBottom: true,
        style: {
          marginTop: 20
        },
        className: "therapistScreenTitle"
      }, "TheraMinder"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Instructions:"), " Assign a weekly workout routine for your client. Your client will receive reminders along with instructions on how to do the exercises"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "msg"
      }, "Your client will only recieve text messages if subscribed via Twilio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
        variant: "h6",
        gutterBottom: true,
        style: {
          marginTop: 20
        }
      }, "Patient Info"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
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
          xs: 3,
          sm: 3,
          alignItems: "right"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          color: "primary",
          onClick: _this2.deleteExercise(index)
        }, "Remove")));
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        container: true,
        justify: "center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        item: true,
        xs: 12,
        sm: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: this.addExercise,
        color: "primary",
        disabled: this.state.maxSensors,
        endIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_AddCircleOutline__WEBPACK_IMPORTED_MODULE_4___default.a, null)
      }, "Add Exercise")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "therapstScreenSubmit"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActions"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        fullWidth: true,
        type: "submit",
        color: "primary",
        variant: "contained",
        className: "button-submit",
        onClick: this.handleNext,
        disabled: this.state.noDisplayName || this.state.noSensors || this.state.noTimeColumn || this.state.loading
      }, "Submit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", null, loading))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL3N0eWxlc2hlZXRzL3Njc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL3N0eWxlc2hlZXRzL3Njc3MvaW5kZXguc2Nzcz9iNWMyIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9JbmRleC9UaGVyYXBpc3RTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL0luZGV4L2luZGV4LmpzeCJdLCJuYW1lcyI6WyJ3b3Jrb3V0T3B0aW9uc01lbnUiLCJkdXJhdGlvbk9wdGlvbnNNZW51IiwibGlzdFdpdGhOZXdWYWwiLCJsaXN0IiwiaW5kZXgiLCJrZXkiLCJuZXdWYWwiLCJuZXdMaXN0IiwibWFwIiwiaXRlbSIsImN1cnJJbmRleCIsIlRoZXJhcGlzdFNjcmVlbiIsImhhbmRsZU5leHQiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJleGVyY2lzZU5hbWVzIiwiZXhlcmNpc2VEdXJhdGlvbiIsImkiLCJleGVyY2lzZXMiLCJsZW5ndGgiLCJwdXNoIiwiZGF0YVR5cGUiLCJkdXJhdGlvbiIsInNldFN0YXRlIiwibG9hZGluZyIsImF4aW9zIiwibWV0aG9kIiwidXJsIiwiZGF0YSIsImZ1bGxfbmFtZSIsIm5hbWUiLCJwaG9uZSIsIndvcmtvdXRzIiwiZXJyIiwiYWxlcnQiLCJ0aGVuIiwibWVzc2FnZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImFkZEV4ZXJjaXNlIiwibm9EaXNwbGF5TmFtZSIsImNvbmNhdCIsIm5vU2Vuc29ycyIsIm1heFNlbnNvcnMiLCJwcmludFN0YXRlIiwicHJvcHMiLCJ2ZXJib3NlIiwiZGVsZXRlRXhlcmNpc2UiLCJyZW1vdmVkSW5kZXgiLCJmaWx0ZXIiLCJzZW5zb3IiLCJoYW5kbGVQaG9uZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJub1RpbWVDb2x1bW4iLCJoYW5kbGVEdXJhdGlvbkNoYW5nZSIsImhhbmRsZUV4ZXJjaXNlQ2hhbmdlIiwiaGFuZGxlTmFtZUNoYW5nZSIsInVuZGVmaW5lZCIsIm5leHQiLCJtYXJnaW5Ub3AiLCJ0eXBlTmFtZSIsImlucHV0UHJvcHMiLCJpZCIsIm1pbiIsInBsYWNlaG9sZGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJhcHBDb25maWciLCJhcGlLZXkiLCJJbmRleCIsImZldGNoTmFtZSIsImdldCIsInJlc3BvbnNlIiwiZXJyb3IiLCJjb21wb25lbnREaWRNb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyw4R0FBeUQ7QUFDbkc7QUFDQSxjQUFjLFFBQVMsa0dBQWtHO0FBQ3pIO0FBQ0EsY0FBYyxRQUFTLE1BQU0sb0RBQW9ELEVBQUU7QUFDbkY7QUFDQTs7Ozs7Ozs7Ozs7O0FDUEEsVUFBVSxtQkFBTyxDQUFDLDRKQUFpRjtBQUNuRywwQkFBMEIsbUJBQU8sQ0FBQyw2T0FBaUg7O0FBRW5KOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxrQkFBa0IsR0FBRyxDQUFDLHFCQUFELEVBQXdCLHVCQUF4QixFQUNQLFFBRE8sRUFDRSxvQkFERixFQUVQLGFBRk8sRUFFUSxnQkFGUixFQUUwQix3QkFGMUIsRUFHUCx1Q0FITyxFQUdrQyxhQUhsQyxDQUEzQjtBQUtBLElBQU1DLG1CQUFtQixHQUFHLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixHQUFyQixFQUEwQixHQUExQixFQUErQixHQUEvQixFQUFvQyxHQUFwQyxFQUF5QyxHQUF6QyxDQUE1Qjs7QUFFQSxT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bUI7O0FBQUEsVUFpQnBCQyxpQkFqQm9CLEdBaUJBLFlBQU07QUFDeEIsWUFBS0osU0FBTDtBQUNELEtBbkJtQjs7QUFFbEIsVUFBSzlELEtBQUwsR0FBYTtBQUNYZ0IsVUFBSSxFQUFFO0FBREssS0FBYjtBQUZrQjtBQUtuQjs7OztXQWdCRCxrQkFBVTtBQUNSLDBCQUNJLDJEQUFDLDJEQUFELE9BREo7QUFHRDs7OztFQTFCaUJ1QywrQzs7QUE2QkxNLG9FQUFmLEUiLCJmaWxlIjoiMC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1NK1BMVVMrMXA6MzAwLDQwMCw3MDB8UmFsZXdheTozMDAsNDAwLDcwMCk7XCJdKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCAnTSBQTFVTIDFwJywgc2Fucy1zZXJpZjsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBNZW51SXRlbSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IEdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tICdAbXVpL21hdGVyaWFsL0NpcmN1bGFyUHJvZ3Jlc3MnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgQ2FyZEFjdGlvbnN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBBZGRDaXJjbGVPdXRsaW5lSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0FkZENpcmNsZU91dGxpbmUnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCAnLi4vLi4vcHVibGljL3N0eWxlc2hlZXRzL3Njc3MvaW5kZXguc2NzcydcblxuXG5jb25zdCB3b3Jrb3V0T3B0aW9uc01lbnUgPSBbXCJTdHJhaWdodCBMZWcgUmFpc2VzXCIsIFwiU3RhbmRpbmcgUXVhZCBTdHJldGNoXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiU3F1YXRzXCIsXCJMYXRlcmFsIExlZyBSYWlzZXNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJCYWNrIEx1bmdlc1wiLCBcIlBpZ2VvbiBTdHJldGNoXCIsIFwiU2luZ2xlLUxlZyBIaXAgQ2lyY2xlc1wiLCBcbiAgICAgICAgICAgICAgICAgICAgXCJTaW5nbGUtTGVnIEdsdXRlIEtpY2tzIChEb25rZXkgS2lja3MpXCIsIFwiUGxpZSBTcXVhdHNcIl1cblxuY29uc3QgZHVyYXRpb25PcHRpb25zTWVudSA9IFsxNSwgMzAsIDQ1LCA2MCwgOTAsIDEyMCwgMTUwLCAxODAsIDI0MCwgMzAwXVxuXG5mdW5jdGlvbiBsaXN0V2l0aE5ld1ZhbChsaXN0LCBpbmRleCwga2V5LCBuZXdWYWwpIHtcbiAgY29uc3QgbmV3TGlzdCA9IGxpc3QubWFwKChpdGVtLCBjdXJySW5kZXgpID0+IHtcbiAgICBpZiAoY3VyckluZGV4ICE9PSBpbmRleCkge1xuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuICAgIHJldHVybiB7IC4uLml0ZW0sIFtrZXldOiBuZXdWYWwgfTtcbiAgfSk7XG4gIHJldHVybiBuZXdMaXN0O1xufVxuXG4vLyBodHRwczovL2dvc2hha2trLm5hbWUvYXJyYXktZm9ybS1pbnB1dHMvXG5jbGFzcyBUaGVyYXBpc3RTY3JlZW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmFtZTogXCJcIixcbiAgICAgIGV4ZXJjaXNlczogW3sgZGF0YVR5cGU6IHdvcmtvdXRPcHRpb25zTWVudVswXSwgZHVyYXRpb246IGR1cmF0aW9uT3B0aW9uc01lbnVbMF19XSxcbiAgICAgIHBob25lOiAwLFxuICAgICAgbm9EaXNwbGF5TmFtZTogdHJ1ZSxcbiAgICAgIG5vU2Vuc29yczogZmFsc2UsXG4gICAgICBub1RpbWVDb2x1bW46IHRydWUsXG4gICAgICBtYXhTZW5zb3JzOiBmYWxzZSxcbiAgICAgIG5leHQ6IGZhbHNlLFxuICAgICAgbG9hZGluZzogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlTmV4dCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKVxuICAgIGxldCBleGVyY2lzZU5hbWVzID0gW11cbiAgICBsZXQgZXhlcmNpc2VEdXJhdGlvbiA9IFtdXG4gICAgZm9yKHZhciBpPTA7aTx0aGlzLnN0YXRlLmV4ZXJjaXNlcy5sZW5ndGg7aSsrKVxuICAgIHtcbiAgICAgIGV4ZXJjaXNlTmFtZXMucHVzaCh0aGlzLnN0YXRlLmV4ZXJjaXNlc1tpXS5kYXRhVHlwZSlcbiAgICAgIGV4ZXJjaXNlRHVyYXRpb24ucHVzaCh0aGlzLnN0YXRlLmV4ZXJjaXNlc1tpXS5kdXJhdGlvbilcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhleGVyY2lzZU5hbWVzKVxuICAgIGNvbnNvbGUubG9nKGV4ZXJjaXNlRHVyYXRpb24pXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxvYWRpbmc6IHRydWVcbiAgICB9KVxuXG4gICAgYXhpb3Moe1xuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICB1cmw6ICcvYXBpL3ByZXNjcmliZScsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGZ1bGxfbmFtZTogdGhpcy5zdGF0ZS5uYW1lLFxuICAgICAgICBwaG9uZTogdGhpcy5zdGF0ZS5waG9uZSxcbiAgICAgICAgd29ya291dHM6IHtcbiAgICAgICAgICBcIndvcmtvdXRcIjogZXhlcmNpc2VOYW1lcyxcbiAgICAgICAgICBcImR1cmF0aW9uXCI6IGV4ZXJjaXNlRHVyYXRpb25cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLmNhdGNoKChlcnIpID0+e1xuICAgICAgYWxlcnQoJ0Vycm9yOiBTb21ldGhpbmcgd2VudCB3cm9uZyB3aXRoIHN1Ym1pdHRpbmcgZm9ybScpXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZyhlcnIpOyBcbiAgICB9KVxuICAgIC50aGVuKChkYXRhKSA9PntcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgfSlcbiAgICAgIGFsZXJ0KGRhdGEuZGF0YS5tZXNzYWdlKTsgXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAvJHt0aGlzLnN0YXRlLnBob25lfWBcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEV4ZXJjaXNlID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubm9EaXNwbGF5TmFtZSlcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLm5hbWUpXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBleGVyY2lzZXM6IHRoaXMuc3RhdGUuZXhlcmNpc2VzLmNvbmNhdChbeyBkYXRhVHlwZTogd29ya291dE9wdGlvbnNNZW51WzBdLCBkdXJhdGlvbjogZHVyYXRpb25PcHRpb25zTWVudVswXX1dKSxcbiAgICAgIG5vU2Vuc29yczogZmFsc2UsXG4gICAgICBtYXhTZW5zb3JzOiAodGhpcy5zdGF0ZS5leGVyY2lzZXMubGVuZ3RoKzEgPT0gNSlcbiAgICAgIFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubm9EaXNwbGF5TmFtZSlcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLm5hbWUpXG4gIH1cblxuICBwcmludFN0YXRlID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLnZlcmJvc2UpIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZXhlcmNpc2VzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gUmVtb3ZlcyBzZW5zb3IgZnJvbSBmb3JtIGFuZCB1cGRhdGVzIHRoZSBib25lIHNlbGVjdGlvbiBkcm9wZG93biBsaXN0c1xuICAgKi9cbiAgZGVsZXRlRXhlcmNpc2UgPSAocmVtb3ZlZEluZGV4KSA9PiAoKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMudmVyYm9zZSkgY29uc29sZS5sb2coYERlbGV0aW5nIHNlbnNvciB3aXRoIGluZGV4ICR7cmVtb3ZlZEluZGV4fWApO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZXhlcmNpc2VzOiB0aGlzLnN0YXRlLmV4ZXJjaXNlcy5maWx0ZXIoKHNlbnNvciwgY3VyckluZGV4KSA9PiBjdXJySW5kZXggIT09IHJlbW92ZWRJbmRleCksXG4gICAgICBcbiAgICAgICAgbm9TZW5zb3JzOiAodGhpcy5zdGF0ZS5leGVyY2lzZXMubGVuZ3RoLTEgPCAxKSxcbiAgICAgICAgbWF4U2Vuc29yczogZmFsc2VcbiAgICAgIFxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVQaG9uZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcGhvbmU6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0sICgpPT4ge1xuICAgICAgaWYodGhpcy5zdGF0ZS5waG9uZS5sZW5ndGggPT09IDEwKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe25vVGltZUNvbHVtbjogZmFsc2V9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bm9UaW1lQ29sdW1uOiB0cnVlfSlcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUR1cmF0aW9uQ2hhbmdlID0gKGluZGV4KSA9PiAoZXZlbnQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZXhlcmNpc2VzOiBsaXN0V2l0aE5ld1ZhbCh0aGlzLnN0YXRlLmV4ZXJjaXNlcywgaW5kZXgsIFwiZHVyYXRpb25cIiwgZXZlbnQudGFyZ2V0LnZhbHVlKSB9KTtcbiAgfVxuXG4gIGhhbmRsZUV4ZXJjaXNlQ2hhbmdlID0gKGluZGV4KSA9PiAoZXZlbnQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZXhlcmNpc2VzOiBsaXN0V2l0aE5ld1ZhbCh0aGlzLnN0YXRlLmV4ZXJjaXNlcywgaW5kZXgsIFwiZGF0YVR5cGVcIiwgZXZlbnQudGFyZ2V0LnZhbHVlKSB9KTtcbiAgfVxuXG4gIGhhbmRsZU5hbWVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0sICgpPT57XG4gICAgICBpZih0aGlzLnN0YXRlLm5hbWUgPT0gJycgfHwgdGhpcy5zdGF0ZS5uYW1lID09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtub0Rpc3BsYXlOYW1lOiB0cnVlfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe25vRGlzcGxheU5hbWU6IGZhbHNlfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgTm9FeGVyY2lzZXNFcnJvcihwcm9wcykge1xuICAgIGlmIChwcm9wcy5ub1NlbnNvcnMpIHtcbiAgICAgIHJldHVybiA8aD5QbGVhc2UgYWRkIGF0IGxlYXN0IG9uZSBleGVyY2lzZS48L2g+O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBsb2FkaW5nID0gdGhpcy5zdGF0ZS5sb2FkaW5nID09PSB0cnVlID8gPENpcmN1bGFyUHJvZ3Jlc3MgLz4gOiBudWxsOyBcbiAgICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGhlcmFwaXN0U2NyZWVuQ29udGFpbmVyXCI+XG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPENhcmQgZmxleD17XCI1MCVcIn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhlcmFwaXN0U2NyZWVuQ2FyZENvbnRhaW5lclwiPlxuICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiIGd1dHRlckJvdHRvbSBzdHlsZT17e21hcmdpblRvcDoyMH19IGNsYXNzTmFtZT1cInRoZXJhcGlzdFNjcmVlblRpdGxlXCI+XG4gICAgICAgICAgVGhlcmFNaW5kZXJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgIDxwPjxiPkluc3RydWN0aW9uczo8L2I+IEFzc2lnbiBhIHdlZWtseSB3b3Jrb3V0IHJvdXRpbmUgZm9yIHlvdXIgY2xpZW50LiBZb3VyIGNsaWVudCB3aWxsIHJlY2VpdmUgcmVtaW5kZXJzIGFsb25nIHdpdGggaW5zdHJ1Y3Rpb25zIG9uIGhvdyB0byBkbyB0aGUgZXhlcmNpc2VzPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtc2dcIj5Zb3VyIGNsaWVudCB3aWxsIG9ubHkgcmVjaWV2ZSB0ZXh0IG1lc3NhZ2VzIGlmIHN1YnNjcmliZWQgdmlhIFR3aWxpbzwvcD5cbiAgICAgICAgXG5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgZ3V0dGVyQm90dG9tIHN0eWxlPXt7bWFyZ2luVG9wOjIwfX0+XG4gICAgICAgICAgICBQYXRpZW50IEluZm9cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgbGFiZWw9XCJQYXRpZW50IE5hbWVcIlxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlTmFtZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlBhdGllbnQgUGhvbmUgTnVtYmVyXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUGhvbmVDaGFuZ2V9XG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLm5vVGltZUNvbHVtbn1cbiAgICAgICAgICAgICAgaGVscGVyVGV4dD17dGhpcy5zdGF0ZS5ub1RpbWVDb2x1bW4gPyAnRm9ybWF0IEVycm9yOiBtdXN0IGJlIDEwIGRpZ2l0cyAoaS5lIDMyMTQyMzEyNDEpJyA6ICcgJ31cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGd1dHRlckJvdHRvbSBzdHlsZT17e21hcmdpblRvcDoyMH19PlxuICAgICAgICAgICAgRXhlcmNpc2VzXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cblxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgIDx0aGlzLk5vRXhlcmNpc2VzRXJyb3Igbm9TZW5zb3JzPXt0aGlzLnN0YXRlLm5vU2Vuc29yc30+PC90aGlzLk5vRXhlcmNpc2VzRXJyb3I+XG4gICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAge3RoaXMuc3RhdGUuZXhlcmNpc2VzLm1hcCgoc2Vuc29yLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSB4cz17MTJ9IHNwYWNpbmc9ezN9IGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJkYXRhdHlwZV9zZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFeGVyY2lzZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZW5zb3IuZGF0YVR5cGV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUV4ZXJjaXNlQ2hhbmdlKGluZGV4KX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3dvcmtvdXRPcHRpb25zTWVudS5tYXAoKHR5cGVOYW1lKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17dHlwZU5hbWV9IHZhbHVlPXt0eXBlTmFtZX0+e3R5cGVOYW1lfTwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9UZXh0RmllbGQ+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRHVyYXRpb24gKHMpXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRHVyYXRpb25DaGFuZ2UoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2Vuc29yLmR1cmF0aW9ufVxuICAgICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZHVyYXRpb25cIitpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZHVyYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJTdGFydCBjb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgICAge2R1cmF0aW9uT3B0aW9uc01lbnUubWFwKCh0eXBlTmFtZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e3R5cGVOYW1lfSB2YWx1ZT17dHlwZU5hbWV9Pnt0eXBlTmFtZX08L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cblxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IHNtPXszfSBhbGlnbkl0ZW1zPVwicmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZGVsZXRlRXhlcmNpc2UoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFJlbW92ZVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICkpfVxuICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgIDxjZW50ZXI+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezEyfT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmFkZEV4ZXJjaXNlfVxuICAgICAgICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5tYXhTZW5zb3JzfVxuICAgICAgICAgICAgICAgICAgZW5kSWNvbj17PEFkZENpcmNsZU91dGxpbmVJY29uIC8+fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQWRkIEV4ZXJjaXNlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9jZW50ZXI+XG5cbiAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aGVyYXBzdFNjcmVlblN1Ym1pdFwiPlxuICAgICAgICAgIDxDYXJkQWN0aW9ucz5cbiAgICAgICAgICAgIDxCdXR0b24gZnVsbFdpZHRoIHR5cGU9XCJzdWJtaXRcIiBjb2xvcj1cInByaW1hcnlcIiB2YXJpYW50PVwiY29udGFpbmVkXCIgY2xhc3NOYW1lPVwiYnV0dG9uLXN1Ym1pdFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTmV4dH0gZGlzYWJsZWQ9eyh0aGlzLnN0YXRlLm5vRGlzcGxheU5hbWUgfHwgdGhpcy5zdGF0ZS5ub1NlbnNvcnMgfHwgdGhpcy5zdGF0ZS5ub1RpbWVDb2x1bW4gfHwgdGhpcy5zdGF0ZS5sb2FkaW5nKX0+U3VibWl0PC9CdXR0b24+XG4gICAgICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICAgICAgICA8Y2VudGVyPlxuICAgICAgICAgICAge2xvYWRpbmd9XG4gICAgICAgICAgPC9jZW50ZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ2FyZD5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIDwvZGl2PlxuICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZXJhcGlzdFNjcmVlbjsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgVGhlcmFwaXN0U2NyZWVuIGZyb20gJy4vVGhlcmFwaXN0U2NyZWVuLmpzJ1xuXG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gJy4uLy4uLy4uL2FwcC5jb25maWcuanMnXG5cbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydhcGkta2V5J10gPSBhcHBDb25maWcuYXBpS2V5XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5hbWU6ICcnXG4gICAgfVxuICB9XG5cbiAgZmV0Y2hOYW1lID0gKCkgPT4ge1xuICAgIGF4aW9zLmdldCgnL2FwaS9uYW1lJykudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBuYW1lOiByZXNwb25zZS5kYXRhLm5hbWVcbiAgICAgIH0pXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgdGhpcy5mZXRjaE5hbWUoKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8VGhlcmFwaXN0U2NyZWVuLz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdLCJzb3VyY2VSb290IjoiIn0=