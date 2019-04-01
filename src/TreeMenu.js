import React, { createContext, useState } from "react";
import TreeNode from "./TreeNode";

import { searchTree } from "./utils";

const TreeMenu = ({
  classes = {
    root: "tree-view"
  },

  onNodeClick,
  onNodeCheckChange,

  data,
  searchTerm
}) => {
  const [checkedKeys, setKeys] = useState([]);
  // const [nodesData, setData] = useState(data);

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
      if (checkedNode > -1) {
        return prevCheckedKeys.splice(checkedNode + 1);
      }
      return [...prevCheckedKeys, node.id];
    });

    onNodeCheckChange(node, checked);
  }

  return (
    <div className={classes.root}>
      {searched.map((node) => (
        <TreeNode
          classes={classes}
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
