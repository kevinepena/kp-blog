webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Meta */ "./components/Meta.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");






var _jsxFileName = "/Users/kevinpena/Documents/computerScience/self/kp-blog/frontend/components/Page.js";

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n    @font-face {\n        font-family: 'radnika_next';\n        src: url('/static/radnikanext-medium-webfont.woff2')\n        format('woff2');\n        font-weight: normal;\n        font-style: normal;\n    }\n    @font-face {\n        font-family: 'Lato';\n        src: url('/static/Lato-Regular.ttf')\n        format('truetype');\n        font-weight: lighter;\n        font-style: normal;\n    }\n    @font-face {\n        font-family: 'coalbrush';\n        src: url('/static/coalbrush.otf')\n        format('opentype');\n        font-weight: lighter;\n        font-style: normal;\n    }\n    /* @font-face {\n        font-family: 'Lato';\n        src: url('/static/Lato-Regular.ttf')\n        format('truetype');\n        font-weight: normal;\n        font-style: normal;\n    }\n    @font-face {\n        font-family: 'Lato';\n        src: url('/static/Lato-Bold.ttf')\n        format('truetype');\n        font-weight: bold;\n        font-style: normal;\n    } */\n    html {\n        box-sizing: border-box;\n        font-size: 10px;\n    }\n    *, *:before, *:after {\n            box-sizing: inherit;\n    }\n    body {\n            padding: 0;\n            margin: 0;\n            font-size: 1.5rem;\n            line-height: 2;\n            font-family: 'radnika_next';\n            outline: none;\n            /* background-color: rgba(52,56,56, 1); */\n    }\n    a {\n        text-decoration: none;\n        color: ", "\n    }\n\n    img {\n    animation: 2s ease-out 0s 1 fadeIn;\n    }\n    @keyframes heartBeat {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n\n  14% {\n    -webkit-transform: scale(1.3);\n    transform: scale(1.3);\n  }\n\n  28% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n\n  42% {\n    -webkit-transform: scale(1.3);\n    transform: scale(1.3);\n  }\n\n  70% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n@keyframes fadeIn {\n    0% {\n      /* transform: translateY(-100%); */\n      opacity: 0;\n    }\n    100% {\n      /* transform: translateY(0); */\n      opacity: 1;\n    }\n  }\n\n  .fadein {\n    animation: 1s ease-out 0s 1 fadeIn;\n  }\n\n.heartbeat {\n    -webkit-animation-name: heartBeat;\n  animation-name: heartBeat;\n  -webkit-animation-duration: 1.3s;\n  animation-duration: 1.3s;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  animation-iteration-count: 2;\n}\n\n.heartbeatinf {\n  -webkit-animation-name: heartBeat;\n  animation-name: heartBeat;\n  -webkit-animation-duration: 1.3s;\n  animation-duration: 1.3s;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  animation-iteration-count: infinite;\n}\n    \n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n    max-width: ", ";\n    margin: 0 auto;\n    padding: 2rem;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n    background: white;\n    color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  mintGreen: 'rgba(182,216,192, 1)',
  // flashBlue: 'rgba(0,223,252, 1)',
  // blue: 'rgba(0,180,204, 1)',
  // skyBlue: '#4E6E9D',
  blue: '#2c3e50',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
};
var StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject(), function (props) {
  return props.theme.black;
});
var Inner = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject2(), function (props) {
  return props.theme.maxWidth;
});
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["createGlobalStyle"])(_templateObject3(), theme.black);

var Page =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Page, _Component);

  function Page() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Page);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Page).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Page, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_6__["ThemeProvider"], {
        theme: theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(StyledPage, {
        className: "fadein",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(GlobalStyle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Meta__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Inner, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      })));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=_app.js.cb93a68eb78f7defa65b.hot-update.js.map