"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _TreeNode = _interopRequireDefault(require("./TreeNode"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TreeMenu = function TreeMenu(_ref) {
  var _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? {
    root: "tree-view"
  } : _ref$classes,
      components = _ref.components,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {
    return {};
  } : _ref$onChange,
      _ref$onNodeClick = _ref.onNodeClick,
      onNodeClick = _ref$onNodeClick === void 0 ? function () {
    return {};
  } : _ref$onNodeClick,
      _ref$onNodeCheckChang = _ref.onNodeCheckChange,
      onNodeCheckChange = _ref$onNodeCheckChang === void 0 ? function () {
    return {};
  } : _ref$onNodeCheckChang,
      parentCheckedKeys = _ref.checkedKeys,
      data = _ref.data,
      searchTerm = _ref.searchTerm;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      checkedKeys = _useState2[0],
      setKeys = _useState2[1]; // const [nodesData, setData] = useState(data);


  (0, _react.useEffect)(function () {
    setKeys(parentCheckedKeys);
  }, [parentCheckedKeys.length]);
  var searched = searchTerm ? data.map(function (node) {
    return (0, _utils.searchTree)(node, searchTerm);
  }).filter(function (x) {
    return x;
  }) : data; // function markNode(node, checked) {
  //   const recursiveMark = (rnode, keysState) => {
  //     rnode.checked = checked;
  //     if (rnode.nodes && rnode.nodes.length) {
  //       rnode.nodes = rnode.nodes.map((subnode) =>
  //         recursiveMark(subnode, checked)
  //       );
  //     }
  //     return rnode;
  //   };
  //   const newState = recursiveMark(node, checked);
  //   setData((prevKeys) => {
  //     return nodesData;
  //   });
  //   onNodeCheckChange(node, checked);
  // }

  function markNode(node, checked) {
    setKeys(function (prevCheckedKeys) {
      var checkedNode = prevCheckedKeys.indexOf(node.id);
      var result;

      if (checkedNode > -1) {
        prevCheckedKeys.splice(checkedNode, 1);
        result = prevCheckedKeys.slice(0, checkedNode).concat(prevCheckedKeys.slice(checkedNode + 1, prevCheckedKeys.length));
      } else {
        result = [].concat(_toConsumableArray(prevCheckedKeys), [node.id]);
      }

      onChange(result);
      return result;
    });
    onNodeCheckChange(node, checked);
  }

  return _react.default.createElement("div", {
    className: classes.root
  }, searched.map(function (node) {
    return _react.default.createElement(_TreeNode.default, {
      classes: classes,
      components: components,
      node: node,
      checkedKeys: checkedKeys,
      key: "".concat(node.id, "-", 0),
      onNodeCheckChange: markNode
    });
  }));
};

var _default = TreeMenu;
exports.default = _default;