"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchTree = searchTree;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function searchTree(node, matchingTitle) {
  if (node.label.toLowerCase().includes(matchingTitle.toLowerCase())) {
    var nodes = node.nodes;

    if (nodes && nodes.length) {
      nodes = node.nodes.map(function (element) {
        return searchTree(element, matchingTitle);
      }).filter(function (x) {
        return x;
      });
    }

    return _objectSpread({}, node, {
      nodes: nodes
    });
  } else if (node.nodes && node.nodes.length) {
    var _nodes = node.nodes.map(function (element) {
      return searchTree(element, matchingTitle);
    }).filter(function (x) {
      return x;
    });

    if (!_nodes.length) {
      return null;
    }

    return _objectSpread({}, node, {
      nodes: _nodes
    });
  }

  return null;
}