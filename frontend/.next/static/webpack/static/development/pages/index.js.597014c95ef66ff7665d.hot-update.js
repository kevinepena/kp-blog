webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Posts/index.js":
/*!***********************************!*\
  !*** ./components/Posts/index.js ***!
  \***********************************/
/*! exports provided: default, ALL_POSTS_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_POSTS_QUERY", function() { return ALL_POSTS_QUERY; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./post */ "./components/Posts/post.js");
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Pagination */ "./components/Pagination.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../config.js */ "./config.js");






var _jsxFileName = "/Users/kevinpena/Documents/computerScience/self/kp-blog/frontend/components/Posts/index.js";

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n    margin-top: 130px;\n    grid-template-rows: repeat(auto-fit);\n    grid-template-columns: repeat(3, 1fr);\n    display: grid;\n    grid-gap: 60px;\n    max-width: ", ";\n    margin: 0 auto;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n    text-align: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n    margin-top: 130px;\n    display: grid;\n    grid-template-rows: repeat(auto-fit, minmax(150px, 250px));\n    grid-template-columns: repeat(3, 1fr);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n    query ALL_POSTS_QUERY($skip: Int = 0, $first: Int = ", ") {\n        posts(first: $first, skip: $skip, orderBy: createdAt_DESC) {\n            id\n            title\n            description\n            image\n            largeImage\n            tags {\n                id\n                hash\n            }\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var ALL_POSTS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_9___default()(_templateObject(), _config_js__WEBPACK_IMPORTED_MODULE_12__["perPage"]);
var Grid = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject2());
var Center = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject3());
var PostsList = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject4(), function (props) {
  return props.theme.maxWidth;
});

var Posts =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Posts, _Component);

  function Posts() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Posts);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Posts).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Posts, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Center, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_8__["Query"], {
        query: ALL_POSTS_QUERY,
        variables: {
          skip: this.props.page * _config_js__WEBPACK_IMPORTED_MODULE_12__["perPage"] - _config_js__WEBPACK_IMPORTED_MODULE_12__["perPage"]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, function (_ref) {
        var loading = _ref.loading,
            error = _ref.error,
            data = _ref.data;
        if (loading) return "Loading...";
        if (error) return "Error: ".concat(error.message);
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(PostsList, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, data.posts.map(function (post) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_post__WEBPACK_IMPORTED_MODULE_10__["default"], {
            post: post,
            key: post.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            },
            __self: this
          });
        }));
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Pagination__WEBPACK_IMPORTED_MODULE_11__["default"], {
        page: this.props.page,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }));
    }
  }]);

  return Posts;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Posts);


/***/ })

})
//# sourceMappingURL=index.js.597014c95ef66ff7665d.hot-update.js.map