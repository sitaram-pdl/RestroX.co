webpackHotUpdate("main",{

/***/ "./src/Components/Employee/Employee/Modal/AddBulk.jsx":
/*!************************************************************!*\
  !*** ./src/Components/Employee/Employee/Modal/AddBulk.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dropdown */ "./node_modules/react-dropdown/dist/index.js");
/* harmony import */ var react_dropdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dropdown__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_date_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-date-picker */ "./node_modules/react-date-picker/dist/entry.js");
/* harmony import */ var react_date_picker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_date_picker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AddStaff_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddStaff.module.css */ "./src/Components/Employee/Employee/Modal/AddStaff.module.css");
/* harmony import */ var _AddStaff_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_AddStaff_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var _Custom_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Custom.css */ "./src/Components/Employee/Employee/Modal/Custom.css");
/* harmony import */ var _Custom_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Custom_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _AddStaff2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AddStaff2 */ "./src/Components/Employee/Employee/Modal/AddStaff2.jsx");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../api */ "./src/api/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/blacktech/Documents/restrox-reception/src/Components/Employee/Employee/Modal/AddBulk.jsx",
    _s = __webpack_require__.$Refresh$.signature();













const AddBulk = props => {
  _s();

  const prottype = {
    'firstName': '',
    'lastName': '',
    'displayName': '',
    'email': '',
    'phone': '',
    'phone2': '',
    'locality': '',
    'city': '',
    'country': '',
    'gender': '',
    'dob': '',
    'idType': '',
    'postion': '',
    'role': ''
  };
  const ids = ['Citizenship', 'Driving License', 'Passport', 'Other'];
  const [options, setOptions] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
    'value': 'Male'
  }, {
    'value': 'Female'
  }]);
  const [step, setStep] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const [error, setError] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const [file, setFile] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const [data, setData] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([prottype]);
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const handleChange = (name, index) => e => {
    switch (name) {
      case 'phone':
        var letters = /^[A-Za-z]+$/;

        if (!e.target.value.match(letters)) {
          let temp = [...data];
          temp[index][name] = e.target.value;
          setData(temp);
        }

        break;

      default:
        let temp = [...data];
        temp[index][name] = e.target.value;
        setData(temp);
        break;
    }
  };

  const handleAdd = () => {
    setData(data => data.concat(prottype));
  };

  const handleDelete = index => {
    if (data.length === 1) return 1;
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const handleDrop = (name, index) => e => {
    let temp = [...data];
    temp[index][name] = e;
    setData(temp);
  };

  const deleteAll = () => {
    setData([prottype]);
  };

  const handleDate = name => e => {
    setData({ ...data,
      [name]: e
    });
  };

  const handleFile = e => {
    let reader = new FileReader();
    let file = e.target.files;
    let tempFile = file[0];
    setFile(file => tempFile);

    reader.onloadend = () => {
      setData({ ...data,
        'image': reader.result
      });
    };

    if (file[0]) {
      reader.readAsDataURL(file[0]);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
    className: _AddStaff_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.mainContainer,
    children: step ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: _AddStaff_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: _AddStaff_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title,
        children: "Add Staffs"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: _AddStaff_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.subTitle,
        children: "Basic Personal Details"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: _AddStaff_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.topBulk,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: _AddStaff_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.checkBox
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: _AddStaff_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.sn,
          children: "S.N."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: _AddStaff_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.firstName,
          children: "First Name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: _AddStaff_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.firstName,
          children: "Last Name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: _AddStaff_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.firstName,
          children: "Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: _AddStaff_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.firstName,
          children: "Phone Number"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: _AddStaff_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.firstName,
          children: "Position"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: _AddStaff_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.firstName,
          children: "Role"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          children: "Action"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: _AddStaff_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.maxDiv,
        children: data.map((dat, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: _AddStaff_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.topBulk2,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: _AddStaff_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.checkBox,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
              type: "checkbox"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: _AddStaff_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.sn,
            children: index + 1
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: _AddStaff_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.firstName,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
              onChange: handleChange('firstName', index),
              value: data[index].firstName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 20
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: _AddStaff_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.firstName,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
              onChange: handleChange('lastName', index),
              value: data[index].lastName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: _AddStaff_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.firstName,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
              onChange: handleChange('email', index),
              value: data[index].email
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: _AddStaff_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.firstName,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
              value: data[index].phone,
              onChange: handleChange('phone', index)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: _AddStaff_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.firstName,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_dropdown__WEBPACK_IMPORTED_MODULE_0___default.a, {
              value: data[index].postion,
              onChange: handleDrop('position', index),
              controlClassName: _AddStaff_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,
              options: options
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 22
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: _AddStaff_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.firstName,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_dropdown__WEBPACK_IMPORTED_MODULE_0___default.a, {
              value: data[index].role,
              onChange: handleDrop('role', index),
              controlClassName: _AddStaff_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,
              options: options
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: _AddStaff_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.actions,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_7__["MdDelete"], {
              size: "2em",
              className: _AddStaff_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.icon,
              onClick: () => handleDelete(index)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 21
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsThreeDotsVertical"], {
              size: "2em",
              className: _AddStaff_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.icon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 21
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 12
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: _AddStaff_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button2,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: _AddStaff_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.add,
          onClick: () => handleAdd(),
          children: "Add Lines"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 31
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: _AddStaff_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.add,
          onClick: () => deleteAll(),
          children: "Delete All"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 32
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: _AddStaff_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: _AddStaff_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.cancel,
          children: "Save as draft"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 31
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: _AddStaff_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.view,
          onClick: () => props.menuHandler('View Menu'),
          children: "Quick Add"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 32
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: _AddStaff_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.drive,
          onClick: () => props.setBulk(false),
          children: "Cancel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 32
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: _AddStaff_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.save,
          onClick: () => setStep(false),
          children: "Next"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 32
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_AddStaff2__WEBPACK_IMPORTED_MODULE_6__["default"], {
      setStep: setStep,
      dataFirst: data,
      citizenship: file
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 16
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 9
  }, undefined);
};

_s(AddBulk, "/YrBiv8P4WyzXn+KHY9lsE+gWUU=");

_c = AddBulk;
/* harmony default export */ __webpack_exports__["default"] = (AddBulk);

var _c;

__webpack_require__.$Refresh$.register(_c, "AddBulk");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.17b5795bf22eba4ce31a.hot-update.js.map