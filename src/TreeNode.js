import React, { useState, useEffect } from "react";

const DefaultCheckbox = ({ checked, onChange }) => (
  <input type="checkbox" checked={checked} onChange={onChange} />
);

const DefaultSwitcher = ({ collapsed }) => (collapsed ? "˅" : "˃");
const DefaultLabel = ({ label }) => label;

const TreeNode = ({
  node,
  onNodeCheckChange,

  classes,
  components = {},

  checkedKeys,
  level = 0
}) => {
  const [state, setState] = useState({
    collapsed: false,
    checked: checkedKeys.includes(node.id)
  });

  const { collapsed, checked } = state;
  const { label, nodes } = node;

  const hasChild = nodes && !!nodes.length;

  const onClickLabel = (e) => {
    e.stopPropagation();

    setState((prevState) => ({
      ...prevState,
      collapsed: !prevState.collapsed
    }));
  };

  const checkboxChanged = (e) => {
    e.stopPropagation();

    setState((prevState) => {
      onNodeCheckChange(node, !prevState.checked);

      return {
        ...prevState,
        collapsed: true,
        checked: !prevState.checked
      };
    });
  };

  const CheckBoxComponent = components.Checkbox || DefaultCheckbox;
  const SwitcherComponent = components.Switcher || DefaultSwitcher;
  const LabelComponent = components.Label || DefaultLabel;

  return (
    <div className={classes.treeNode}>
      <div className={classes.treeRow}>
        {hasChild && (
          <div onClick={(e) => onClickLabel(e)} className={classes.collapser}>
            <SwitcherComponent collapsed={collapsed} />
          </div>
        )}

        <div className={classes.checkbox}>
          <CheckBoxComponent
            checked={checked}
            onChange={(e) => checkboxChanged(e)}
          />
        </div>

        <div onClick={(e) => onClickLabel(e)} className={classes.label}>
          <LabelComponent label={label} />
        </div>
      </div>

      <div className={classes.childrens}>
        {collapsed &&
          node.nodes &&
          node.nodes.map((childNode) => {
            return (
              <TreeNode
                classes={classes}
                components={components}
                key={`${childNode.id}-${level}`}
                node={childNode}
                checkedKeys={checkedKeys}
                onNodeCheckChange={onNodeCheckChange}
                level={level + 1}
              />
            );
          })}
      </div>
    </div>
  );
};

export default TreeNode;
