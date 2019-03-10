webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Nav */ "./components/Nav/index.js");
/* harmony import */ var _styled_kpLogo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styled/kpLogo */ "./components/styled/kpLogo.js");
/* harmony import */ var _styled_hamburgerButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./styled/hamburgerButton */ "./components/styled/hamburgerButton.js");








var _jsxFileName = "/Users/kevinpena/Documents/computerScience/self/kp-blog/frontend/components/Header.js";


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    background-position: top;\n    background-repeat: no-repeat;\n    background-size: cover;\n    width: 100%;\n\n    .navbtn {\n        display: none;\n    }\n\n    ul {\n        width: 100%;\n    }\n\n    > .bar {\n        \n        border-bottom: 5px solid #494e52 ;\n        display: grid;\n        grid-template-rows: auto 1fr;\n        justify-content:  space-between;\n        align-items: stretch;\n        background-color: ", ";\n        grid-template-columns: 1fr;\n        justify-content: center;\n\n        @media(max-width: 700px) {\n            grid-template-columns: repeat(2, 1fr);\n            > div:nth-of-type(1) {\n                justify-content: left;\n                margin: 0 0 0 5px;\n            }   \n            .navbtn {\n                justify-self: right;\n                display: block;\n                margin: 0px;\n                z-index: 9;\n            }\n            ul {\n            transform: translateY(-105%);\n            position: absolute;\n            top: 0;\n            transition: all .5s;\n            height: 100vh;\n        a, button {\n            position: relative;\n            text-align: center;\n            /* background-color: rgba(220, 220, 220, .6); */\n            text-align: center;\n        }\n        }\n\n\n}\n.open {\n    transform: translateY(0%);\n    height: 100vh;\n    transition: all .5s;\n    position: absolute;\n    top: 0;\n    z-index: 8;\n    overflow: hidden;\n}\n\n    }\n\n    ", "\n    @media(max-width: 700px) {\n            ", "\n\nul {\n            display: grid;\n            text-shadow: 1px 1px 1px rgba(0,0,0,.9);\n        }\n\n        }\n    \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










next_router__WEBPACK_IMPORTED_MODULE_11___default.a.onRouteChangeStart = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_12___default.a.start(); // console.log('OnRouterChangeStart')
};

next_router__WEBPACK_IMPORTED_MODULE_11___default.a.onRouteChangeComplete = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_12___default.a.done(); // console.log('OnRouterChangeComplete')
};

next_router__WEBPACK_IMPORTED_MODULE_11___default.a.onRouteChangeError = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_12___default.a.done(); // console.log('OnRouterChangeError')
};

var StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].header(_templateObject(), function (props) {
  return props.theme.offWhite;
}, function (props) {
  return props.scroll && "\n        padding: 0 0 53px 0;\n        ";
}, function (props) {
  return props.scroll && "\n            padding: 0;\n        ";
});

var Header =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      scroll: false,
      mobile: false,
      open: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "resize", function (e) {
      if (e.path[0].screen.availWidth < 700) {
        _this.setState({
          mobile: true
        });
      } else {
        _this.setState({
          mobile: false
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "scroll", function (e) {
      if (e.path[1].scrollY > 75) {
        _this.setState({
          scroll: true
        });
      } else {
        _this.setState({
          scroll: false
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "openMobile", function () {
      _this.setState({
        open: !_this.state.open
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.scroll);
      window.addEventListener('resize', this.resize);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.scroll);
      window.addEventListener('resize', this.resize);
    }
  }, {
    key: "render",
    value: function render() {
      return (// <AnimationStyles>
        //     <TransitionGroup>
        //         <CSSTransition
        //             unmountOnExit
        //             className="count"
        //             classNames="count"
        //             timeout={{ enter: 400, exit: 400 }}>
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(StyledHeader, {
          className: "fadein",
          scroll: this.state.scroll,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "bar",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "/",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_styled_kpLogo__WEBPACK_IMPORTED_MODULE_14__["default"], {
          scroll: this.state.scroll,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          onClick: this.openMobile,
          className: "navbtn",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_styled_hamburgerButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          },
          __self: this
        }, "=")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_13__["default"], {
          openMobile: this.openMobile,
          open: this.state.open,
          mobile: this.state.mobile,
          scroll: this.state.scroll,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          },
          __self: this
        }))) //         </CSSTransition>
        //     </TransitionGroup>
        // </AnimationStyles> 

      );
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.467d65b4ffdf0c2f5901.hot-update.js.map