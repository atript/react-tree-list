import React, { createContext, useState, useEffect } from "react";
import TreeNode from "./TreeNode";

import { searchTree } from "./utils";

const TreeMenu = ({
  classes = {
    root: "tree-view"
  },
  components,

  onChange = () => ({}),
  onNodeClick = () => ({}),
  onNodeCheckChange = () => ({}),

  checkedKeys: parentCheckedKeys,

  data,
  searchTerm
}) => {
  const [checkedKeys, setKeys] = useState([]);
  // const [nodesData, setData] = useState(data);

  useEffect(() => {
    setKeys(parentCheckedKeys);
  }, [parentCheckedKeys.length]);

  const searched = searchTerm
    ? data.map((node) => searchTree(node, searchTerm)).filter((x) => x)
    : data;

  // function markNode(node, checked) {
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
    setKeys((prevCheckedKeys) => {
      const checkedNode = prevCheckedKeys.indexOf(node.id);
      let result;

      if (checkedNode > -1) {
        prevCheckedKeys.splice(checkedNode, 1);

        result = prevCheckedKeys
          .slice(0, checkedNode)
          .concat(
            prevCheckedKeys.slice(checkedNode + 1, prevCheckedKeys.length)
          );
      } else {
        result = [...prevCheckedKeys, node.id];
      }

      onChange(result);

      return result;
    });

    onNodeCheckChange(node, checked);
  }

  return (
    <div className={classes.root}>
      {searched.map((node) => (
        <TreeNode
          classes={classes}
          components={components}
          node={node}
          checkedKeys={checkedKeys}
          key={`${node.id}-${0}`}
          onNodeCheckChange={markNode}
        />
      ))}
    </div>
  );
};

export default TreeMenu;
