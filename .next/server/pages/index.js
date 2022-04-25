/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/common/style/table.module.css":
/*!*********************************************!*\
  !*** ./pages/common/style/table.module.css ***!
  \*********************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"table\": \"table_table__F6P35\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21tb24vc3R5bGUvdGFibGUubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NvY2Nlci1hcHAvLi9wYWdlcy9jb21tb24vc3R5bGUvdGFibGUubW9kdWxlLmNzcz84NTBjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRhYmxlXCI6IFwidGFibGVfdGFibGVfX0Y2UDM1XCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/common/style/table.module.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_style_table_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/style/table.module.css */ \"./pages/common/style/table.module.css\");\n/* harmony import */ var _common_style_table_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_common_style_table_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction Home() {\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const loginUser = localStorage.getItem(\"loginUser\");\n        const user = JSON.parse(loginUser);\n        if (loginUser === null) {\n            axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"http://localhost:5000/api/now\").then((res)=>{\n                var data = res.data;\n                document.getElementById(\"timeZone\").innerHTML = '<h1>현재시간: ' + data.now + '<h1>';\n            });\n        } else {\n            document.getElementById(\"timeZone\").innerHTML = '<h1>환영합니다: ' + user.name + '<h1>';\n        }\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        className: (_common_style_table_module_css__WEBPACK_IMPORTED_MODULE_3___default().table),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"HOME\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bitcamp\\\\soccer\\\\soccer-next\\\\pages\\\\index.js\",\n                            lineNumber: 24,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bitcamp\\\\soccer\\\\soccer-next\\\\pages\\\\index.js\",\n                        lineNumber: 24,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bitcamp\\\\soccer\\\\soccer-next\\\\pages\\\\index.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bitcamp\\\\soccer\\\\soccer-next\\\\pages\\\\index.js\",\n                lineNumber: 22,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: \"timeZone\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bitcamp\\\\soccer\\\\soccer-next\\\\pages\\\\index.js\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bitcamp\\\\soccer\\\\soccer-next\\\\pages\\\\index.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bitcamp\\\\soccer\\\\soccer-next\\\\pages\\\\index.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bitcamp\\\\soccer\\\\soccer-next\\\\pages\\\\index.js\",\n                lineNumber: 27,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bitcamp\\\\soccer\\\\soccer-next\\\\pages\\\\index.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ2lCO0FBQ2hDO0FBRVYsUUFBUSxDQUFDSSxJQUFJLEdBQUcsQ0FBQztJQUU5QkgsZ0RBQVMsS0FBTyxDQUFDO1FBQ2YsS0FBSyxDQUFDSSxTQUFTLEdBQUdDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLENBQVc7UUFDbEQsS0FBSyxDQUFDQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDTCxTQUFTO1FBQ2pDLEVBQUUsRUFBRUEsU0FBUyxLQUFLLElBQUksRUFBQyxDQUFDO1lBQ3RCRixnREFBUyxDQUFDLENBQStCLGdDQUFFUyxJQUFJLEVBQUVDLEdBQUcsR0FBSyxDQUFDO2dCQUN4RCxHQUFHLENBQUNDLElBQUksR0FBR0QsR0FBRyxDQUFDQyxJQUFJO2dCQUNuQkMsUUFBUSxDQUFDQyxjQUFjLENBQUMsQ0FBVSxXQUFFQyxTQUFTLEdBQUcsQ0FBWSxzQkFBU0gsSUFBSSxDQUFDSSxHQUFHO1lBQ3ZFLENBQVA7UUFDSCxDQUFDLE1BQUksQ0FBQztZQUNKSCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxDQUFVLFdBQUVDLFNBQVMsR0FBRyxDQUFhLHlCQUFDVCxJQUFJLENBQUNXLElBQUk7UUFDekUsQ0FBQztJQUVILENBQUMsRUFBQyxDQUFDLENBQUM7SUFDSixNQUFNLDZFQUNIQyxDQUFLO1FBQUNDLFNBQVMsRUFBRW5CLDZFQUFpQjs7d0ZBQ2xDb0IsQ0FBSztzR0FDREMsQ0FBRTswR0FDRUMsQ0FBRTs4R0FBRUMsQ0FBRTtzQ0FBQyxDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBR25CQyxDQUFLO3NHQUNESCxDQUFFOzBHQUNGSSxDQUFFOzhHQUNFQyxDQUFHOzRCQUFDQyxFQUFFLEVBQUMsQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzlCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2NjZXItYXBwLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHRhYmxlU3R5bGVzIGZyb20gJy4vY29tbW9uL3N0eWxlL3RhYmxlLm1vZHVsZS5jc3MnXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsb2dpblVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvZ2luVXNlclwiKVxuICAgIGNvbnN0IHVzZXIgPSBKU09OLnBhcnNlKGxvZ2luVXNlcilcbiAgICBpZiggbG9naW5Vc2VyID09PSBudWxsKXtcbiAgICAgIGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvbm93XCIpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICB2YXIgZGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpbWVab25lXCIpLmlubmVySFRNTCA9ICc8aDE+7ZiE7J6s7Iuc6rCEOiAnK2RhdGEubm93Kyc8aDE+J1xuICAgICAgfSk7XG4gICAgfWVsc2V7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpbWVab25lXCIpLmlubmVySFRNTCA9ICc8aDE+7ZmY7JiB7ZWp64uI64ukOiAnK3VzZXIubmFtZSsnPGgxPidcbiAgICB9XG4gICAgXG4gIH0sW10pO1xuICByZXR1cm4gKFxuICAgIDx0YWJsZSBjbGFzc05hbWU9e3RhYmxlU3R5bGVzLnRhYmxlfT5cbiAgICA8dGhlYWQ+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD48aDI+SE9NRTwvaDI+PC90aD5cbiAgICAgICAgPC90cj5cbiAgICA8L3RoZWFkPlxuICAgIDx0Ym9keT5cbiAgICAgICAgPHRyID5cbiAgICAgICAgPHRkPlxuICAgICAgICAgICAgPGRpdiBpZD1cInRpbWVab25lXCI+PC9kaXY+PC90ZD5cbiAgICAgICAgPC90cj5cbiAgICA8L3Rib2R5PlxuICA8L3RhYmxlPlxuICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidGFibGVTdHlsZXMiLCJheGlvcyIsIkhvbWUiLCJsb2dpblVzZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlciIsIkpTT04iLCJwYXJzZSIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsIm5vdyIsIm5hbWUiLCJ0YWJsZSIsImNsYXNzTmFtZSIsInRoZWFkIiwidHIiLCJ0aCIsImgyIiwidGJvZHkiLCJ0ZCIsImRpdiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();