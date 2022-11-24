import React from 'react';
import Button from '.';
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var Demo1 = function Demo1() {
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(Button, {
      type: "default",
      disabled: false,
      onClick: function onClick() {
        return console.log(111);
      },
      children: "Default"
    }), /*#__PURE__*/_jsx(Button, {
      disabled: true,
      type: "primary",
      children: "Primary"
    }), /*#__PURE__*/_jsx(Button, {
      type: "dashed",
      children: "Dashed"
    }), /*#__PURE__*/_jsx(Button, {
      type: "danger",
      children: "Danger"
    })]
  });
};

export default Demo1;