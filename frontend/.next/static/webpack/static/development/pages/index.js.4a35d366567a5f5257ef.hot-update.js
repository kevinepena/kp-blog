webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Posts */ "./components/Posts/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Hero */ "./components/Hero/index.js");


var _jsxFileName = "/Users/kevinpena/Documents/computerScience/self/kp-blog/frontend/pages/index.js";


function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    background: ", ";\n    transform: skewX(0deg) skewY(-15deg);\n    /* transform-style: rotateY preserve-3d; */\n    div > div{\n            transition: all .5s ease-in-out;\n            /* transform-style: preserve-3d; */\n            transform: skewX(0deg) skewY(15deg) scale(.6);\n        }\n    div > div:hover{\n            transition: all .5s ease-in-out;\n        }\n\n    div > div:nth-of-type(3):hover {\n        transform: skewY(15deg) skewX(0deg) scale(.66);\n        background-image: url(\"../static/us.jpg\");\n        background-position: center;\n    }\n\n    div > div:nth-of-type(2):hover {\n        transform: skewY(15deg) skewX(0deg) scale(.77);\n        background-image: url(\"https://res.cloudinary.com/kevinpena/image/upload/v1552189513/kpblog/eibbi1speacak0sxrunx.jpg\");\n        background-position: 0;\n    }\n\n\n    @media (min-width: 500) {\n        div > div:nth-of-type(1):hover {\n        transform: skewY(15deg) skewX(0deg) rotateY(-180deg)  scale(.66);\n        background-image: url(\"https://res.cloudinary.com/kevinpena/image/upload/v1552189523/kpblog/jixklxjrghsgzipiwqfo.jpg\");\n        background-position: -210px;\n    }\n    }\n\n    @media all and (min-width: 500px) and (max-width: 900px) {\n        div > div:nth-of-type(2):hover {\n        transform: skewY(15deg) skewX(0deg) scale(.66);\n        background-image: url(\"https://res.cloudinary.com/kevinpena/image/upload/v1552189513/kpblog/eibbi1speacak0sxrunx.jpg\");\n        background-position: -59px 0px;\n    }\n    }\n\n    @media(max-width: 500px) {\n        div > div:nth-of-type(1) {\n        transform: skewY(15deg) skewX(0deg) rotateY(-180deg)  scale(.6);\n        background-image: url(\"https://res.cloudinary.com/kevinpena/image/upload/v1552189523/kpblog/jixklxjrghsgzipiwqfo.jpg\");\n        background-position: center;\n    }\n    }\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    transform: skewX(-6deg);\n    font-family: 'coalbrush';\n    position: absolute;\n    font-size: 100px;\n    text-shadow: 1px 1px 1px rgba(30,30,30,.2);\n    top: 475px;\n    right: 170px;\n\n    span {\n        position: absolute;\n        right: 20px;\n        top: 80px;\n    }\n\n    @media(max-width: 1140px) {\n        transform: skewX(0deg);\n        line-height: 200px;\n        margin-top: 10px;\n        top: 495px;\n        right: 50px;\n    }\n\n    @media(max-width: 600px) {\n        transform: skewX(0deg);\n        line-height: 200px;\n        font-size: 75px;\n        margin-top: 10px;\n        right: 20px;\n    }\n\n    @media(max-width: 360px) {\n        transform: skewX(0deg);\n        line-height: 200px;\n        font-size: 60px;\n        margin-top: 10px;\n        right: 20px;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    transform: skewX(-6deg);\n    font-family: 'coalbrush';\n    position: absolute;\n    font-size: 100px;\n    text-shadow: 1px 1px 1px rgba(30,30,30,.2);\n\n    @media(max-width: 700px) {\n        transform: skewX(0deg);\n        top: 115px;\n        line-height: 80px;\n        font-size: 80px;\n    }\n\n    @media(max-width: 360px) {\n        transform: skewX(0deg);\n        top: 115px;\n        line-height: 80px;\n        font-size: 60px;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Follow = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());
var Journey = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject2());
var Skew = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject3(), function (props) {
  return "linear-gradient(130deg, ".concat(props.theme.skyBlue, " 0%, ").concat(props.theme.blue, " 100%)");
});

var Home = function Home(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      paddingBottom: '50px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Follow, {
    className: "fadein",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "Follow me"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Journey, {
    className: "fadein",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "On"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }), "my journey"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      paddingTop: '50px',
      overflow: 'hidden',
      minHeight: '720px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Skew, {
    className: "fadein",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Hero__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "https://res.cloudinary.com/kevinpena/image/upload/v1552189532/kpblog/iymyjyjmsacyv7bdriec.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "https://res.cloudinary.com/kevinpena/image/upload/v1552189534/kpblog/nzklhp9svft52jcqeoii.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "https://res.cloudinary.com/kevinpena/image/upload/v1552189536/kpblog/mgal9lzl5rolqfokz6xe.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Posts__WEBPACK_IMPORTED_MODULE_3__["default"], {
    page: _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(props.query.page) || 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.4a35d366567a5f5257ef.hot-update.js.map