webpackHotUpdate("static/development/pages/tag.js",{

/***/ "./components/Tags/index.js":
/*!**********************************!*\
  !*** ./components/Tags/index.js ***!
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
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _Posts_post__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Posts/post */ "./components/Posts/post.js");






var _jsxFileName = "/Users/kevinpena/Documents/computerScience/self/kp-blog/frontend/components/Tags/index.js";

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n    margin-top: 130px;\n    grid-template-rows: repeat(auto-fit, minmax(0px, 1fr));\n    grid-template-columns: repeat(3, 1fr);\n    display: grid;\n    grid-gap: 60px;\n    max-width: ", ";\n    margin: 0 auto;\n\n    @media(max-width: 500px) {\n    grid-template-columns: 1fr;\n    margin: 15px auto 0 auto;\n\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n    text-align: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n    query SOME_POSTS_QUERY($hash: String!) {\n        posts( where: { tags_some : {\n            hash: $hash\n        }}) {\n            id\n            title\n            description\n            images\n            largeImages\n            tags {\n                id\n                hash\n            }\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var SOME_POSTS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_9___default()(_templateObject());
var Center = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject2());
var PostsList = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject3(), function (props) {
  return props.theme.maxWidth;
});

var Tags =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Tags, _Component);

  function Tags() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Tags);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Tags).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Tags, [{
    key: "render",
    value: function render() {
      var _this = this;

      // console.log(this.props.hash.length);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_7__["Query"], {
        query: SOME_POSTS_QUERY,
        variables: {
          hash: this.props.hash
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, function (_ref) {
        var error = _ref.error,
            loading = _ref.loading,
            data = _ref.data;
        if (error) return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_10__["default"], {
          error: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        });
        if (loading) return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, "Loading...");
        if (!data.posts) return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, "No posts found for #", _this.props.hash);
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Center, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(PostsList, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, data.posts.map(function (post, i) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            key: i,
            className: i % 3,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Posts_post__WEBPACK_IMPORTED_MODULE_11__["default"], {
            post: post,
            key: post.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }));
        })));
      });
    }
  }]);

  return Tags;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Tags);

/***/ })

})
//# sourceMappingURL=tag.js.9e4a3b52e7bb678d1b2b.hot-update.js.map