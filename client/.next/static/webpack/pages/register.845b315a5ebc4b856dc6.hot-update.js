"use strict";
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "E:\\e_learning(MERN)\\client\\pages\\register.js",
    _this = undefined,
    _s = $RefreshSig$();



var Register = function Register() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      password = _useState3[0],
      setPassword = _useState3[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    console.table({
      name: name,
      email: email,
      password: password
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: "jumbotron text-center bg-primary square p-5",
      children: "Register"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container text-center col-md-4 offset-md-4 pb-5",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          className: "form-control mb-4 p-4",
          value: name,
          onChange: function onChange(e) {
            return setName(e.target.value);
          },
          placeholder: "Enter name",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "email",
          className: "form-control mb-4 p-4",
          value: email,
          onChange: function onChange(e) {
            return setEmail(e.target.value);
          },
          placeholder: "Enter email",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "password",
          className: "form-control mb-4 p-4",
          value: password,
          onChange: function onChange(e) {
            return setPassword(e.target.value);
          },
          placeholder: "Enter password",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "submit",
          "class": "btn btn-primary btn-lg",
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(Register, "y7AVIb+2dT29WONRxO7d74XBSmc=");

_c = Register;
/* harmony default export */ __webpack_exports__["default"] = (Register);

var _c;

$RefreshReg$(_c, "Register");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0ZXIuODQ1YjMxNWE1ZWJjNGI4NTZkYzYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUNHRCwrQ0FBUSxDQUFDLEVBQUQsQ0FEWDtBQUFBLE1BQ2JFLElBRGE7QUFBQSxNQUNQQyxPQURPOztBQUFBLG1CQUVLSCwrQ0FBUSxDQUFDLEVBQUQsQ0FGYjtBQUFBLE1BRWJJLEtBRmE7QUFBQSxNQUVOQyxRQUZNOztBQUFBLG1CQUdXTCwrQ0FBUSxDQUFDLEVBQUQsQ0FIbkI7QUFBQSxNQUdiTSxRQUhhO0FBQUEsTUFHSEMsV0FIRzs7QUFLbkIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsQ0FBQyxFQUFHO0FBQ3ZCQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQUMsSUFBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWM7QUFBQ1YsTUFBQUEsSUFBSSxFQUFKQSxJQUFEO0FBQU9FLE1BQUFBLEtBQUssRUFBTEEsS0FBUDtBQUFjRSxNQUFBQSxRQUFRLEVBQVJBO0FBQWQsS0FBZDtBQUNELEdBSEQ7O0FBSUEsc0JBQ0k7QUFBQSw0QkFDSTtBQUFJLGVBQVMsRUFBRyw2Q0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUdJO0FBQUssZUFBUyxFQUFDLGlEQUFmO0FBQUEsNkJBQ0k7QUFBTSxnQkFBUSxFQUFFRSxZQUFoQjtBQUFBLGdDQUNJO0FBQU8sY0FBSSxFQUFDLE1BQVo7QUFDRSxtQkFBUyxFQUFDLHVCQURaO0FBRUUsZUFBSyxFQUFJTixJQUZYO0FBR0Usa0JBQVEsRUFBSSxrQkFBQ08sQ0FBRDtBQUFBLG1CQUFPTixPQUFPLENBQUNNLENBQUMsQ0FBQ0ksTUFBRixDQUFTQyxLQUFWLENBQWQ7QUFBQSxXQUhkO0FBSUUscUJBQVcsRUFBRSxZQUpmO0FBS0Usa0JBQVE7QUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBUUk7QUFBTyxjQUFJLEVBQUMsT0FBWjtBQUNFLG1CQUFTLEVBQUMsdUJBRFo7QUFFRSxlQUFLLEVBQUlWLEtBRlg7QUFHRSxrQkFBUSxFQUFJLGtCQUFDSyxDQUFEO0FBQUEsbUJBQU9KLFFBQVEsQ0FBQ0ksQ0FBQyxDQUFDSSxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBLFdBSGQ7QUFJRSxxQkFBVyxFQUFFLGFBSmY7QUFLRSxrQkFBUTtBQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkosZUFlSTtBQUFPLGNBQUksRUFBQyxVQUFaO0FBQ0UsbUJBQVMsRUFBQyx1QkFEWjtBQUVFLGVBQUssRUFBSVIsUUFGWDtBQUdFLGtCQUFRLEVBQUksa0JBQUNHLENBQUQ7QUFBQSxtQkFBT0YsV0FBVyxDQUFDRSxDQUFDLENBQUNJLE1BQUYsQ0FBU0MsS0FBVixDQUFsQjtBQUFBLFdBSGQ7QUFJRSxxQkFBVyxFQUFFLGdCQUpmO0FBS0Usa0JBQVE7QUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWZKLGVBc0JJO0FBQVEsY0FBSSxFQUFHLFFBQWY7QUFBd0IsbUJBQU0sd0JBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXRCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEo7QUFBQSxrQkFESjtBQW9DSCxDQTdDRDs7R0FBTWI7O0tBQUFBO0FBOENOLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3JlZ2lzdGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgUmVnaXN0ZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdFtuYW1lLCBzZXROYW1lXSA9dXNlU3RhdGUoJycpXHJcbiAgICBjb25zdFtlbWFpbCwgc2V0RW1haWxdID11c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0W3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPXVzZVN0YXRlKCcnKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGUgPT57XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc29sZS50YWJsZSh7bmFtZSwgZW1haWwsIHBhc3N3b3JkfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0gXCJqdW1ib3Ryb24gdGV4dC1jZW50ZXIgYmctcHJpbWFyeSBzcXVhcmUgcC01XCI+UmVnaXN0ZXI8L2gxPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgdGV4dC1jZW50ZXIgY29sLW1kLTQgb2Zmc2V0LW1kLTQgcGItNVwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTQgcC00XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtuYW1lfSBcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID17IChlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID1cIkVudGVyIG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAvPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTQgcC00XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtlbWFpbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9eyAoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPVwiRW50ZXIgZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi00IHAtNFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7cGFzc3dvcmR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPXsgKGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID1cIkVudGVyIHBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGUgPSBcInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICBcclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlJlZ2lzdGVyIiwibmFtZSIsInNldE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJ0YWJsZSIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==