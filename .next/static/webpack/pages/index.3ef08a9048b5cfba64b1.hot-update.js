webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CustomHeader.tsx":
/*!*************************************!*\
  !*** ./components/CustomHeader.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_native_web_dist_exports_Platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web/dist/exports/Platform */ \"./node_modules/react-native-web/dist/exports/Platform/index.js\");\n/* harmony import */ var react_native_web_dist_exports_Dimensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-native-web/dist/exports/Dimensions */ \"./node_modules/react-native-web/dist/exports/Dimensions/index.js\");\n/* harmony import */ var react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-native-web/dist/exports/View */ \"./node_modules/react-native-web/dist/exports/View/index.js\");\n/* harmony import */ var react_native_paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-native-paper */ \"./node_modules/react-native-paper/lib/module/index.js\");\n/* harmony import */ var _components_logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/logo */ \"./components/logo.tsx\");\nvar _this=undefined,_jsxFileName=\"/Users/mikevocalz/pruapp/components/CustomHeader.tsx\";var __jsx=react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"];var _Dimensions$get=react_native_web_dist_exports_Dimensions__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get('window'),width=_Dimensions$get.width,height=_Dimensions$get.height;var isMobileSz=width>=640;var breakpoint=320;var CustomHeader=function CustomHeader(_ref){var _jsx,_jsx2,_jsx3,_jsx4,_jsx5,_jsx6,_jsx7,_jsx8,_jsx9,_jsx10;var scene=_ref.scene,previous=_ref.previous,navigation=_ref.navigation;var options=scene.descriptor.options;var title=options.headerTitle!==undefined?options.headerTitle:options.title!==undefined?options.title:scene.route.name;return __jsx(react_native_paper__WEBPACK_IMPORTED_MODULE_5__[\"Appbar\"].Header,(_jsx10={style:{backgroundColor:\"red\",marginHorizontal:10},__self:_this},_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_jsx10,\"__self\",_this),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_jsx10,\"__source\",{fileName:_jsxFileName,lineNumber:30,columnNumber:5}),_jsx10),previous&&__jsx(react_native_paper__WEBPACK_IMPORTED_MODULE_5__[\"Appbar\"].BackAction,(_jsx={onPress:navigation.pop,color:\"red\",__self:_this},_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_jsx,\"__self\",_this),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_jsx,\"__source\",{fileName:_jsxFileName,lineNumber:31,columnNumber:20}),_jsx)),width<=breakpoint?__jsx(react_native_paper__WEBPACK_IMPORTED_MODULE_5__[\"Appbar\"].Action,(_jsx2={icon:\"menu\",onPress:function onPress(){},__self:_this},_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_jsx2,\"__self\",_this),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_jsx2,\"__source\",{fileName:_jsxFileName,lineNumber:34,columnNumber:29}),_jsx2)):null,__jsx(react_native_paper__WEBPACK_IMPORTED_MODULE_5__[\"Appbar\"].Content,(_jsx4={titleStyle:{textAlign:react_native_web_dist_exports_Platform__WEBPACK_IMPORTED_MODULE_2__[\"default\"].OS===\"web\"?\"left\":\"center\"},title:previous?title:__jsx(_components_logo__WEBPACK_IMPORTED_MODULE_6__[\"default\"],(_jsx3={width:260,height:180,__self:_this},_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_jsx3,\"__self\",_this),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_jsx3,\"__source\",{fileName:_jsxFileName,lineNumber:47,columnNumber:13}),_jsx3)),__self:_this},_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_jsx4,\"__self\",_this),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_jsx4,\"__source\",{fileName:_jsxFileName,lineNumber:38,columnNumber:7}),_jsx4)),isMobileSz!==null&&isMobileSz!==void 0?isMobileSz:__jsx(react_native_paper__WEBPACK_IMPORTED_MODULE_5__[\"Appbar\"].Content,(_jsx9={style:{position:\"absolute\",justifyContent:\"center\",right:0},title:__jsx(react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_4__[\"default\"],(_jsx8={style:{flexDirection:\"row\"},__self:_this},_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_jsx8,\"__self\",_this),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_jsx8,\"__source\",{fileName:_jsxFileName,lineNumber:59,columnNumber:13}),_jsx8),__jsx(react_native_paper__WEBPACK_IMPORTED_MODULE_5__[\"Button\"],(_jsx5={mode:\"text\",onPress:function onPress(){return console.log(\"Pressed\");},labelStyle:{color:\"white\",fontWeight:\"bold\"},__self:_this},_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_jsx5,\"__self\",_this),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_jsx5,\"__source\",{fileName:_jsxFileName,lineNumber:65,columnNumber:15}),_jsx5),\"Home\"),__jsx(react_native_paper__WEBPACK_IMPORTED_MODULE_5__[\"Button\"],(_jsx6={mode:\"text\",onPress:function onPress(){return console.log(\"Pressed\");},labelStyle:{color:\"white\",fontWeight:\"bold\"},__self:_this},_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_jsx6,\"__self\",_this),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_jsx6,\"__source\",{fileName:_jsxFileName,lineNumber:72,columnNumber:15}),_jsx6),\"Scan\"),__jsx(react_native_paper__WEBPACK_IMPORTED_MODULE_5__[\"Button\"],(_jsx7={mode:\"text\",labelStyle:{color:\"white\",fontWeight:\"bold\"},onPress:function onPress(){return console.log(\"Pressed\");},__self:_this},_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_jsx7,\"__self\",_this),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_jsx7,\"__source\",{fileName:_jsxFileName,lineNumber:79,columnNumber:15}),_jsx7),\"Timeline\")),__self:_this},_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_jsx9,\"__self\",_this),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_jsx9,\"__source\",{fileName:_jsxFileName,lineNumber:52,columnNumber:9}),_jsx9)));};_c=CustomHeader;/* harmony default export */ __webpack_exports__[\"default\"] = (CustomHeader);var _c;$RefreshReg$(_c,\"CustomHeader\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXN0b21IZWFkZXIudHN4P2NiMzMiXSwibmFtZXMiOlsiRGltZW5zaW9ucyIsIndpZHRoIiwiaGVpZ2h0IiwiaXNNb2JpbGVTeiIsImJyZWFrcG9pbnQiLCJDdXN0b21IZWFkZXIiLCJzY2VuZSIsInByZXZpb3VzIiwibmF2aWdhdGlvbiIsIm9wdGlvbnMiLCJ0aXRsZSIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbkhvcml6b250YWwiLCJ0ZXh0QWxpZ24iLCJQbGF0Zm9ybSIsInBvc2l0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJyaWdodCIsImZsZXhEaXJlY3Rpb24iLCJjb25zb2xlIiwiY29sb3IiLCJmb250V2VpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OzBLQVkwQkEsZ0ZBQVUsQ0FBVkEsYSxDQUFsQkMsSyxpQkFBQUEsSyxDQUFPQyxNLGlCQUFBQSxNLENBRWYsR0FBTUMsV0FBVSxDQUFJRixLQUFLLEVBQXpCLElBRUMsR0FBTUcsV0FBVSxDQUFoQixJQUVELEdBQU1DLGFBQVksQ0FBRyxRQUFmQSxhQUFlLE1BQXlDLG9FQUF0Q0MsTUFBc0MsTUFBdENBLEtBQXNDLENBQS9CQyxRQUErQixNQUEvQkEsUUFBK0IsQ0FBckJDLFVBQXFCLE1BQXJCQSxVQUFxQixJQUNwREMsUUFEb0QsQ0FDeENILEtBQUssQ0FEbUMsVUFDeENBLENBRHdDLFFBRTVELEdBQU1JLE1BQUssQ0FDVEQsT0FBTyxDQUFQQSx3QkFDSUEsT0FBTyxDQURYQSxZQUVJQSxPQUFPLENBQVBBLGtCQUNBQSxPQUFPLENBRFBBLE1BRUFILEtBQUssQ0FBTEEsTUFMTixLQVFBLE1BQ0UsT0FBQyx5REFBRCxpQkFBZSxLQUFLLENBQUUsQ0FBRUssZUFBZSxDQUFqQixNQUEwQkMsZ0JBQWdCLENBQUUsRUFBNUMsQ0FBdEIsZ1JBQ0dMLFFBQVEsRUFBSSxNQUFDLHlEQUFELG1CQUFtQixPQUFPLENBQUVDLFVBQVUsQ0FBdEMsSUFBNEMsS0FBSyxDQUFqRCwwUUFEZixJQUNlLEVBRGYsQ0FJRSxLQUFLLEVBQUwsV0FBc0IsTUFBQyx5REFBRCxnQkFBZSxJQUFJLENBQW5CLE9BQTJCLE9BQU8sQ0FBRSxrQkFBTSxDQUExQyx3UUFBdEIsS0FBc0IsRUFBdEIsQ0FKRixLQVFFLE1BQUMseURBQUQsaUJBQ0UsVUFBVSxDQUFFLENBQ1ZLLFNBQVMsQ0FBRUMsOEVBQVEsQ0FBUkEsa0JBQWlDLFFBRGxDLENBRGQsQ0FJRSxLQUFLLENBQ0hQLFFBQVEsT0FJTix1RUFBTSxLQUFLLENBQVgsSUFBa0IsTUFBTSxDQUF4QiwwUUFUTixLQVNNLEVBVE4sc1FBUkYsS0FRRSxFQVJGLENBcUJHSixVQXJCSCxPQXFCR0EsWUFyQkgsU0FxQkdBLENBckJILFVBcUJHQSxDQUNDLE1BQUMseURBQUQsaUJBQ0UsS0FBSyxDQUFFLENBQ0xZLFFBQVEsQ0FESCxXQUVMQyxjQUFjLENBRlQsU0FHTEMsS0FBSyxDQUFFLENBSEYsQ0FEVCxDQU1FLEtBQUssQ0FDSCx5RkFDRSxLQUFLLENBQUUsQ0FDTEMsYUFBYSxDQUFFLEtBRFYsQ0FEVCw4UUFNRSx3RUFDRSxJQUFJLENBRE4sT0FFRSxPQUFPLENBQUUseUJBQU1DLFFBQU8sQ0FBUEEsSUFBTixTQUFNQSxDQUFOLENBRlgsRUFHRSxVQUFVLENBQUUsQ0FBRUMsS0FBSyxDQUFQLFFBQWtCQyxVQUFVLENBQUUsTUFBOUIsQ0FIZCw4UUFORixNQU1FLENBTkYsQ0FhRSx3RUFDRSxJQUFJLENBRE4sT0FFRSxPQUFPLENBQUUseUJBQU1GLFFBQU8sQ0FBUEEsSUFBTixTQUFNQSxDQUFOLENBRlgsRUFHRSxVQUFVLENBQUUsQ0FBRUMsS0FBSyxDQUFQLFFBQWtCQyxVQUFVLENBQUUsTUFBOUIsQ0FIZCw4UUFiRixNQWFFLENBYkYsQ0FvQkUsd0VBQ0UsSUFBSSxDQUROLE9BRUUsVUFBVSxDQUFFLENBQUVELEtBQUssQ0FBUCxRQUFrQkMsVUFBVSxDQUFFLE1BQTlCLENBRmQsQ0FHRSxPQUFPLENBQUUseUJBQU1GLFFBQU8sQ0FBUEEsSUFBTixTQUFNQSxDQUFOLENBSFgsK1FBM0JOLFVBMkJNLENBcEJGLENBUEosc1FBdkJOLEtBdUJNLEVBdEJKLENBREYsQ0FWRixFLEdBQU1kLFksQ0E0RU4sNkUiLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1c3RvbUhlYWRlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQbGF0Zm9ybSwgRGltZW5zaW9ucywgQWxlcnQsIFRleHQsIFZpZXd9IGZyb20gXCJyZWFjdC1uYXRpdmVcIjtcbmltcG9ydCB7IEFwcGJhciwgQXZhdGFyLCBCdXR0b24sIFBhcmFncmFwaCwgRGlhbG9nLCBQb3J0YWwgfSBmcm9tIFwicmVhY3QtbmF0aXZlLXBhcGVyXCI7XG5pbXBvcnQgeyBTdmdVcmksIFN2Z0Nzc1VyaSB9IGZyb20gXCJyZWFjdC1uYXRpdmUtc3ZnXCI7XG5pbXBvcnQgeyBpc01vYmlsZSwgaXNNb2JpbGVPbmx5IH0gZnJvbSBcInJlYWN0LWRldmljZS1kZXRlY3RcIjtcblxuaW1wb3J0IHsgTWF0ZXJpYWxDb21tdW5pdHlJY29ucyB9IGZyb20gXCJAZXhwby92ZWN0b3ItaWNvbnNcIjtcbmltcG9ydCBMb2dvIGZyb20gJy4uL2NvbXBvbmVudHMvbG9nbyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwUHJvcHMgeyBcbn1cblxuY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBEaW1lbnNpb25zLmdldCgnd2luZG93JylcblxuY29uc3QgaXNNb2JpbGVTeiA9ICB3aWR0aCA+PSA2NDA7XG4gICAgICBcbiBjb25zdCBicmVha3BvaW50ID0gIDMyMDtcblxuY29uc3QgQ3VzdG9tSGVhZGVyID0gKHsgc2NlbmUsIHByZXZpb3VzLCBuYXZpZ2F0aW9uIH06YW55KSA9PiB7XG4gIGNvbnN0IHsgb3B0aW9ucyB9ID0gc2NlbmUuZGVzY3JpcHRvcjtcbiAgY29uc3QgdGl0bGUgPVxuICAgIG9wdGlvbnMuaGVhZGVyVGl0bGUgIT09IHVuZGVmaW5lZFxuICAgICAgPyBvcHRpb25zLmhlYWRlclRpdGxlXG4gICAgICA6IG9wdGlvbnMudGl0bGUgIT09IHVuZGVmaW5lZFxuICAgICAgPyBvcHRpb25zLnRpdGxlXG4gICAgICA6IHNjZW5lLnJvdXRlLm5hbWU7XG5cblxuICByZXR1cm4gKFxuICAgIDxBcHBiYXIuSGVhZGVyIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCJyZWRcIiwgbWFyZ2luSG9yaXpvbnRhbDogMTAgfX0+XG4gICAgICB7cHJldmlvdXMgJiYgPEFwcGJhci5CYWNrQWN0aW9uIG9uUHJlc3M9e25hdmlnYXRpb24ucG9wfSBjb2xvcj17XCJyZWRcIn0gLz59XG4gICAgICB7XG4gICAgXG4gICAgICB3aWR0aCA8PSBicmVha3BvaW50ID8gPEFwcGJhci5BY3Rpb24gaWNvbj1cIm1lbnVcIiBvblByZXNzPXsoKSA9PiB7fX0gLz4gOiBudWxsXG4gICAgXG4gICAgICB9XG5cbiAgICAgIDxBcHBiYXIuQ29udGVudFxuICAgICAgICB0aXRsZVN0eWxlPXt7XG4gICAgICAgICAgdGV4dEFsaWduOiBQbGF0Zm9ybS5PUyA9PT0gXCJ3ZWJcIiA/IFwibGVmdFwiIDogXCJjZW50ZXJcIixcbiAgICAgICAgfX1cbiAgICAgICAgdGl0bGU9e1xuICAgICAgICAgIHByZXZpb3VzID8gKFxuICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgLy8gPFRleHQ+VEVYVDwvVGV4dD5cbiAgICAgICAgICAgIDxMb2dvIHdpZHRoPXsyNjB9IGhlaWdodD17MTgwfSAvPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICAgIHtpc01vYmlsZVN6ID8/IChcbiAgICAgICAgPEFwcGJhci5Db250ZW50XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgIH19XG4gICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgPFZpZXdcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgICAgICAgICAgICAgIC8vanVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYXJvdW5kXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBtb2RlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgb25QcmVzcz17KCkgPT4gY29uc29sZS5sb2coXCJQcmVzc2VkXCIpfVxuICAgICAgICAgICAgICAgIGxhYmVsU3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiwgZm9udFdlaWdodDogXCJib2xkXCIgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBtb2RlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgb25QcmVzcz17KCkgPT4gY29uc29sZS5sb2coXCJQcmVzc2VkXCIpfVxuICAgICAgICAgICAgICAgIGxhYmVsU3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiwgZm9udFdlaWdodDogXCJib2xkXCIgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNjYW5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBtb2RlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbGFiZWxTdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiB9fVxuICAgICAgICAgICAgICAgIG9uUHJlc3M9eygpID0+IGNvbnNvbGUubG9nKFwiUHJlc3NlZFwiKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFRpbWVsaW5lXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9BcHBiYXIuSGVhZGVyPlxuICApO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21IZWFkZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CustomHeader.tsx\n");

/***/ })

})