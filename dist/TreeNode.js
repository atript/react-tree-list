"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DefaultCheckbox = function DefaultCheckbox(_ref) {
  var checked = _ref.checked,
      onChange = _ref.onChange;
  return _react.default.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChange
  });
};

var DefaultSwitcher = function DefaultSwitcher(_ref2) {
  var collapsed = _ref2.collapsed;
  return collapsed ? "˅" : "˃";
};

var DefaultLabel = function DefaultLabel(_ref3) {
  var label = _ref3.label;
  return label;
};

var TreeNode = function TreeNode(_ref4) {
  var node = _ref4.node,
      onNodeCheckChange = _ref4.onNodeCheckChange,
      classes = _ref4.classes,
      _ref4$components = _ref4.components,
      components = _ref4$components === void 0 ? {} : _ref4$components,
      checkedKeys = _ref4.checkedKeys,
      _ref4$level = _ref4.level,
      level = _ref4$level === void 0 ? 0 : _ref4$level;

  var _React$useState = _react.default.useState({
    collapsed: false,
    checked: checkedKeys.includes(node.id)
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var collapsed = state.collapsed,
      checked = state.checked;
  var label = node.label,
      nodes = node.nodes;
  var hasChild = nodes && !!nodes.length;
  (0, _react.useEffect)(function () {
    setState(function (prevState) {
      return _objectSpread({}, prevState, {
        checked: checkedKeys.includes(node.id)
      });
    });
  }, [checkedKeys.length]);

  var onClickLabel = function onClickLabel(e) {
    e.stopPropagation();
    setState(function (prevState) {
      return _objectSpread({}, prevState, {
        collapsed: !prevState.collapsed
      });
    });
  };

  var checkboxChanged = function checkboxChanged(e) {
    e.stopPropagation();
    setState(function (prevState) {
      onNodeCheckChange(node, !prevState.checked);
      return _objectSpread({}, prevState, {
        collapsed: true,
        checked: !prevState.checked
      });
    });
  };

  var CheckBoxComponent = components.Checkbox || DefaultCheckbox;
  var SwitcherComponent = components.Switcher || DefaultSwitcher;
  var LabelComponent = components.Label || DefaultLabel;
  return _react.default.createElement("div", {
    className: classes.treeNode
  }, _react.default.createElement("div", {
    className: classes.treeRow
  }, hasChild && _react.default.createElement("div", {
    onClick: function onClick(e) {
      return onClickLabel(e);
    },
    className: classes.collapser
  }, _react.default.createElement(SwitcherComponent, {
    collapsed: collapsed
  })), _react.default.createElement("div", {
    className: classes.checkbox
  }, _react.default.createElement(CheckBoxComponent, {
    checked: checked,
    onChange: function onChange(e) {
      return checkboxChanged(e);
    }
  })), _react.default.createElement("div", {
    onClick: function onClick(e) {
      return onClickLabel(e);
    },
    className: classes.label
  }, _react.default.createElement(LabelComponent, {
    label: label
  }))), _react.default.createElement("div", {
    className: classes.childrens
  }, collapsed && node.nodes && node.nodes.map(function (childNode) {
    return _react.default.createElement(TreeNode, {
      classes: classes,
      components: components,
      key: "".concat(childNode.id, "-").concat(level),
      node: childNode,
      checkedKeys: checkedKeys,
      onNodeCheckChange: onNodeCheckChange,
      level: level + 1
    });
  })));
};

var _default = TreeNode;
exports.default = _default;