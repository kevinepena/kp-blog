webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Nav/index.js":
/*!*********************************!*\
  !*** ./components/Nav/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nav; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../User */ "./components/User/index.js");
/* harmony import */ var _Login_SignOut__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Login/SignOut */ "./components/Login/SignOut.js");






var _jsxFileName = "/Users/kevinpena/Documents/computerScience/self/kp-blog/frontend/components/Nav/index.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\nz-index: 9;\nbackground-color: #2c3e50;\n/* background-color: linear-gradient(to right, #2c3e50, #4E6E9D); */\n/* background: linear-gradient(to right, #2c3e50, #4E6E9D) url('../../static/__7.jpg'); */\n/* background-color: ", "; */\nbackground-image: url('../../static/__7.jpg');\nbackground-repeat: no-repeat;\nbackground-attachment: fixed;\nbackground-size: cover;\nwidth: 100%;\njustify-content: center;\nfont-size: 1.5rem;\nmargin: 0;\npadding: 0;\ndisplay: flex;\njustify-self: end;\nfont-size: 2rem;\nbox-shadow: 1px 1px 1px rgba(0,0,0, 0.4), inset 1px 1px 1px rgba(0,0,0, 0.4);\na,\nbutton {\n  /* + */\n  font-family: 'radnika_next';\n  color: ", ";\n  text-shadow: 1px 1px 1px rgba(20,20,20,.4);\n  /* + */\n  padding: 1rem 3rem;\n  display: flex;\n  align-items: center;\n  position: relative;\n  text-transform: uppercase;\n  font-weight: 900;\n  font-size: 1em;\n  background: none;\n  border: 0;\n  cursor: pointer;\n  &:before {\n    height: 2px;\n    background: ", ";\n    content: '';\n    width: 0;\n    position: absolute;\n    transform: translateX(50%);\n    transition: width 0.4s;\n    transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);\n    left: 50%;\n    margin-top: 2rem;\n  }\n  &:after {\n    height: 2px;\n    background: ", ";\n    /* background: ", "; */\n    content: '';\n    width: 0;\n    position: absolute;\n    transform: translateX(-50%);\n    transition: width 0.4s;\n    transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);\n    left: 50%;\n    margin-top: 2rem;\n  }\n  \n  &:hover,\n  &:focus {\n    outline: none;\n    &:after {\n      width: calc(100% - 60px);\n    }\n  @media (max-width: 700px) {\n      width: calc(100% - 10px);\n  }\n  }\n}\n\n\n@media (max-width: 700px) {\n  flex-direction: column;\n  align-content: center;\n  justify-content: center;\n  /* position: relative; */\n  position: absolute;\n  top: -300px;\n  font-size: 10px;\n  padding: 0 10px;\n  box-shadow: 1px 1px 1px rgba(0,0,0, 0.4);\n}\n\n@media(max-width: 900px) {\n  font-size: 1.3rem;\n}\n@media(max-width: 1500px) {\n  font-size: 1.5rem;\n  ", "\n}\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







function hasPermission(user, permissionsNeeded) {
  var matchedPermissions = user.permissions.filter(function (permissionTheyHave) {
    return permissionsNeeded.includes(permissionTheyHave);
  });

  if (!matchedPermissions.length) {
    return false;
  } else {
    return true;
  }
}

var NavStyles = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].ul(_templateObject(), function (props) {
  return props.scroll && "rgba(20,20,20,.4)";
}, function (props) {
  return props.theme.lightgrey;
}, function (props) {
  return props.theme.blue;
}, function (props) {
  return props.theme.blue;
}, function (props) {
  return props.theme.blue;
}, function (props) {
  return props.scroll && "\nposition: fixed;\ntop: 0;\nborder-bottom: 5px solid #494e52;\n";
});

var Nav =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Nav, _Component);

  function Nav() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Nav);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Nav).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Nav, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, function (_ref) {
        var me = _ref.data.me;
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(NavStyles, {
          onClick: _this.props.openMobile,
          scroll: _this.props.scroll,
          mobile: _this.props.mobile,
          className: "".concat(_this.props.mobile ? 'mobile' : '', " ").concat(_this.props.open ? 'open' : ''),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "/work",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          },
          __self: this
        }, "Work")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "/lifestyle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }, "Lifestyle")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "/travel",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          },
          __self: this
        }, "Travel")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "/family",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        }, "Family")), me && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, hasPermission(me, ['ADMIN']) ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "/createpost",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154
          },
          __self: this
        }, "Post")) : '', react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Login_SignOut__WEBPACK_IMPORTED_MODULE_10__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          },
          __self: this
        })), !me && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "/login",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          },
          __self: this
        }, "Login")));
      });
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ })

})
//# sourceMappingURL=_app.js.0af1c1e8da5311864b96.hot-update.js.map