webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Hero/index.js":
/*!**********************************!*\
  !*** ./components/Hero/index.js ***!
  \**********************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");






var _jsxFileName = "/Users/kevinpena/Documents/computerScience/self/kp-blog/frontend/components/Hero/index.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n    /* background-image: url(\"../static/mts.jpg\"); */\n    /* background: #141e30;  */\n    /* background: -webkit-linear-gradient(to top, #141e30, #243b55); */\n    /* background: linear-gradient(to top, #141e30, #243b55);  */\n    grid-gap: 5px;\n    /* padding: 0 15px; */\n    min-height: 414px;\n    margin: 86px auto 0 auto;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    /* grid-template-rows: repeat(auto-fit, minmax(150px, 250px)); */    \n    /* grid-template-rows: 250px; */\n    padding: 0px 5px 5px 5px;\n    text-align: center;\n    background-attachment: fixed;\n    /* background-position: top; */\n    background-repeat: no-repeat;\n    background-size: cover;\n    /* border-bottom-left-radius: 1%; */\n    /* border-bottom-right-radius: 1%; */\n    /* border-bottom-right-radius: 100% 60%; */\n    /* border-bottom-left-radius: 100% 60%; */\n    /* clip-path: ellipse(100% 100% at 50% 0%); */\n\n    >div {\n        background-color: rgba(50,50,50, .1);\n        border: 1px solid #3A3A3A;\n        border-radius: 5px;\n        }\n\n    div:nth-of-type(1) {\n            background-image: url(\"https://res.cloudinary.com/kevinpena/image/upload/v1552189532/kpblog/iymyjyjmsacyv7bdriec.jpg\");\n            background-repeat: no-repeat;\n            background-size: cover;\n            /* grid-row: 1 / 3; */\n        }\n\n    div:nth-of-type(2) {\n        background-image: url(\"https://res.cloudinary.com/kevinpena/image/upload/v1552189518/kpblog/anzkugtq9tqczpysm8qr.jpg\");\n        background-position: 0px;\n        background-repeat: no-repeat;\n        background-size: cover;\n        background-position: -110px 0px;\n\n    }\n    div:nth-of-type(3) {\n        background-image: url(\"https://res.cloudinary.com/kevinpena/image/upload/v1552189528/kpblog/swyjxkfar9vhrapxefd5.jpg\");\n        background-position: 0px;\n        background-repeat: no-repeat;\n        background-size: cover;\n    } \n\n    \n    \n    \n    @media(max-width: 500px) {\n        grid-template-columns: repeat(2, 1fr);\n        \n            div:nth-of-type(1) {\n                grid-column: 1 / -1;\n                background-position: 0px ;\n                background-repeat: no-repeat;\n                background-size: cover;\n                background-image: url(\"https://res.cloudinary.com/kevinpena/image/upload/v1552189523/kpblog/jixklxjrghsgzipiwqfo.jpg\");\n            }\n            div:nth-of-type(1):hover {\n                grid-column: 1 / -1;\n                background-position: 0px ;\n                background-repeat: no-repeat;\n                background-size: cover;\n                background-image: url(\"https://res.cloudinary.com/kevinpena/image/upload/v1552189523/kpblog/jixklxjrghsgzipiwqfo.jpg\");\n            }\n            div:nth-of-type(2) {\n                background-image: url(\"https://res.cloudinary.com/kevinpena/image/upload/v1552189518/kpblog/anzkugtq9tqczpysm8qr.jpg\");\n                background-position: 0px;\n                background-repeat: no-repeat;\n                background-size: cover;\n            }\n        }\n    @media(max-width: 700px) {\n        >div {\n            background-color: rgba(50,50,50, .1);\n        border: 1px solid #3A3A3A;\n        border-radius: 5px;\n        background-position: center;\n        }\n        }\n\n        @media(min-width: 500px) {\n            div:nth-of-type(3) {\n        background-image: url(\"https://res.cloudinary.com/kevinpena/image/upload/v1552189528/kpblog/swyjxkfar9vhrapxefd5.jpg\");\n        background-position: -70px;\n        background-repeat: no-repeat;\n        background-size: cover;\n    } \n        }\n    \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Paralax = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject());

var Hero =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Hero, _Component);

  function Hero() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Hero);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Hero).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Hero, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Paralax, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "me",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "dogs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "us",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      })));
    }
  }]);

  return Hero;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ })

})
//# sourceMappingURL=index.js.aa92a15533f9dc4e3513.hot-update.js.map