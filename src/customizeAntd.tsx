import * as React from "react";

import {
  Cascader,
  CascaderProps,
  Drawer,
  DrawerProps,
  Input,
  InputNumber,
  InputNumberProps,
  Modal,
  Select,
  SelectProps,
  Tooltip,
} from "antd";
import { PasswordProps } from "antd/lib/input";
import { BaseOptionType } from "rc-cascader";
import { RFIArrowLeft, RFIArrowDown, RFIClose, RFIArrowUp } from "react-frame-icon";

/*
 * Modal
 */
if (Modal.defaultProps) {
  // Modal.defaultProps.transitionName = "slidedown";
  Modal.defaultProps.maskClosable = false;
  // Modal.defaultProps.closeIcon = <QIClose fontSize={16} />;
}

/*
 * Tooltip
 */
if (Tooltip.defaultProps) {
  Tooltip.defaultProps.mouseEnterDelay = 0;
  Tooltip.defaultProps.mouseLeaveDelay = 0;
  Tooltip.defaultProps.destroyTooltipOnHide = true;
}

/*
 * Cascader
 */
const _Cascader = Cascader as React.FC<CascaderProps<BaseOptionType>>;

_Cascader.defaultProps ??= {};
const cascaderDefaultProps = _Cascader.defaultProps;
if (cascaderDefaultProps) {
  cascaderDefaultProps.expandIcon = <RFIArrowLeft fontSize={12} />;
  cascaderDefaultProps.suffixIcon = <RFIArrowDown fontSize={16} />;
}

/*
 * Select
 */
const _Select = Select as React.FC<SelectProps>;

_Select.defaultProps ??= {};
const selectDefaultProps = _Select.defaultProps;
if (selectDefaultProps) {
  selectDefaultProps.suffixIcon = <RFIArrowDown fontSize={16} />;
  // selectDefaultProps.menuItemSelectedIcon = <QICheck fontSize={16} />;
}

/*
 * Drawer
 */

const _Drawer = Drawer as React.FC<DrawerProps>;

_Drawer.defaultProps ??= {};
const drawerDefaultProps = _Drawer.defaultProps;
if (drawerDefaultProps) {
  drawerDefaultProps.closeIcon = <RFIClose fontSize={16} />;
}

/*
 * Input
 */
const _InputNumber = InputNumber as React.FC<InputNumberProps>;

_InputNumber.defaultProps ??= {};
const inputNumberDefaultProps = _InputNumber.defaultProps;

if (inputNumberDefaultProps) {
  inputNumberDefaultProps.upHandler = <RFIArrowUp fontSize={12} />;
  inputNumberDefaultProps.downHandler = <RFIArrowDown fontSize={12} />;
}

if (Input.defaultProps) {
  Input.defaultProps["onMouseUp"] = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
}

const _InputPassword = Input.Password as React.FC<PasswordProps>;

_InputPassword.defaultProps ??= {};
// const inputPasswordDefaultProps = _InputPassword.defaultProps;

// if (inputPasswordDefaultProps) {
//   inputPasswordDefaultProps.iconRender = (visible) =>
//     visible ? <QIEye fontSize={16} /> : <QIEyeClose fontSize={16} />;
// }
