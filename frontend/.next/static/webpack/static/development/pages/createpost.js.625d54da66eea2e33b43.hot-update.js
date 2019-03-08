webpackHotUpdate("static/development/pages/createpost.js",{

/***/ "./components/Posts/create.js":
/*!************************************!*\
  !*** ./components/Posts/create.js ***!
  \************************************/
/*! exports provided: default, CREATE_ITEM_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_ITEM_MUTATION", function() { return CREATE_ITEM_MUTATION; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _styled_Form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../styled/Form */ "./components/styled/Form.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../ErrorMessage */ "./components/ErrorMessage.js");











var _jsxFileName = "/Users/kevinpena/Documents/computerScience/self/kp-blog/frontend/components/Posts/create.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_10__["default"])(["\n    mutation CREATE_ITEM_MUTATION(\n        $title: String!\n        $description: String!\n        $image: String\n        $largeImage: String\n        $tags: [String!]!\n    ) {\n        createPost(\n            title: $title\n            description: $description\n            image: $image\n            largeImage: $largeImage\n            tags: $tags\n        ) {\n            id\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






 // import { ALL_ITEMS_QUERY } from './Items';

var CREATE_ITEM_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_14___default()(_templateObject());

var CreateItem =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(CreateItem, _Component);

  function CreateItem() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, CreateItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(CreateItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {
      title: '',
      description: '',
      image: '',
      largeImage: '',
      content: '',
      tags: []
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          type = _e$target.type,
          value = _e$target.value;
      var val = type === 'number' ? _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2___default()(value) : value; // if(name === 'tags') {
      //     this.setState({tags: [...this.state.tags, ...value.split('#')]});
      //     return
      // }

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])({}, name, val));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "uploadFile",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var files, filesArr, i, _files, data, res, file;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(e.target.files);
                files = e.target.files;

                if (!(e.target.files.length > 1)) {
                  _context.next = 8;
                  break;
                }

                filesArr = [];

                for (i = 0; i < e.target.files.length; i++) {
                  filesArr.push(files[i]);
                }

                console.log(filesArr);
                _context.next = 21;
                break;

              case 8:
                console.log('Uploading');
                console.log(e);
                _files = e.target.files;
                data = new FormData();
                data.append('file', _files[0]);
                data.append('upload_preset', 'kpblog');
                _context.next = 16;
                return fetch('https://api.cloudinary.com/v1_1/kevinpena/image/upload', {
                  method: 'POST',
                  body: data
                });

              case 16:
                res = _context.sent;
                _context.next = 19;
                return res.json();

              case 19:
                file = _context.sent;

                _this.setState({
                  image: file.secure_url,
                  largeImage: file.eager[0].secure_url
                });

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(CreateItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_12__["Mutation"], {
        mutation: CREATE_ITEM_MUTATION,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, function (createPost, _ref2) {
        var loading = _ref2.loading,
            error = _ref2.error;
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_styled_Form__WEBPACK_IMPORTED_MODULE_15__["default"], {
          onSubmit:
          /*#__PURE__*/
          function () {
            var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
            /*#__PURE__*/
            _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
              var words, res;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      e.preventDefault();
                      _context2.next = 3;
                      return _this2.state.tags.split('#');

                    case 3:
                      words = _context2.sent;
                      _context2.next = 6;
                      return words.shift();

                    case 6:
                      _context2.next = 8;
                      return words.slice();

                    case 8:
                      words = _context2.sent;
                      _context2.next = 11;
                      return words.map(function (word) {
                        return word.toLowerCase();
                      });

                    case 11:
                      words = _context2.sent;
                      _context2.next = 14;
                      return words.map(function (word) {
                        return word.trim();
                      });

                    case 14:
                      words = _context2.sent;
                      _context2.next = 17;
                      return createPost({
                        variables: {
                          title: _this2.state.title,
                          description: _this2.state.description,
                          image: _this2.state.image,
                          largeImage: _this2.state.largeImage,
                          content: _this2.state.content,
                          tags: words
                        }
                      });

                    case 17:
                      res = _context2.sent;
                      next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push({
                        pathname: '/post',
                        query: {
                          id: res.data.createPost.id
                        }
                      });

                    case 19:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            return function (_x2) {
              return _ref3.apply(this, arguments);
            };
          }(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_16__["default"], {
          error: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("fieldset", {
          disabled: loading,
          "aria-busy": loading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("label", {
          htmlFor: "File",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        }, "Image", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
          type: "file",
          id: "file",
          name: "file",
          multiple: true,
          placeholder: "Upload an image" // value={this.state.image}
          ,
          onChange: _this2.uploadFile,
          required: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        }), _this2.state.image && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("img", {
          style: {
            width: '200px'
          },
          src: _this2.state.image,
          alt: "Upload Preview",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("label", {
          htmlFor: "title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }, "Title", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
          type: "text",
          id: "title",
          name: "title",
          placeholder: "Title",
          value: _this2.state.title,
          onChange: _this2.handleChange,
          required: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("label", {
          htmlFor: "description",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        }, "Description", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("textarea", {
          id: "description",
          name: "description",
          placeholder: "Enter a description",
          value: _this2.state.description,
          onChange: _this2.handleChange,
          required: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("label", {
          htmlFor: "content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154
          },
          __self: this
        }, "Content", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("textarea", {
          id: "content",
          name: "content",
          placeholder: "Content",
          value: _this2.state.content,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("label", {
          htmlFor: "tags",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164
          },
          __self: this
        }, "Tags", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
          type: "text",
          id: "tags",
          name: "tags",
          placeholder: "Tag",
          value: _this2.state.tags,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 166
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("button", {
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175
          },
          __self: this
        }, "Submit")));
      });
    }
  }]);

  return CreateItem;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CreateItem);


/***/ })

})
//# sourceMappingURL=createpost.js.625d54da66eea2e33b43.hot-update.js.map