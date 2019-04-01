import React, { Fragment, useState, useEffect } from "react";
import { render } from "react-dom";
import injectSheet, { jss, ThemeProvider } from "react-jss";

import TreeMenu from "../src/TreeMenu";

const data = [
  {
    id: "123",
    label: "Parent 1",

    nodes: [
      {
        id: "1",
        label: "Parent 2",
        nodes: [
          {
            id: "2",
            label: "Child 1"
          }
        ]
      }
    ]
  },

  {
    id: "321",
    label: "Parent 3",

    nodes: [
      {
        id: "3",
        label: "Parent 4",

        nodes: [
          {
            id: "4",
            label: "Child 2"
          }
        ]
      }
    ]
  }
];

const root = document.getElementById("root");

const styles = (theme) => ({
  root: {
    padding: 40,
    background: theme.background,
    textAlign: "left"
  },

  treeNode: {
    display: "flex",
    flexDirection: "column",

    "& $treeNode": {
      position: "relative",
      marginLeft: "30px"
    }
  },

  treeRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    "& div": {
      margin: "0 5px"
    }
  },

  collapser: {
    fontSize: "22px",
    height: "17px",
    cursor: "pointer"
  },

  checkbox: {
    verticalAlign: "super"
  }
});

const App = ({ classes }) => {
  const [searchTerm, setTerm] = useState("");
  const [checkedKeys, setKeys] = useState({});

  return (
    <Fragment>
      <input onChange={(e) => setTerm(e.target.value)} value={searchTerm} />
      <TreeMenu
        data={data}
        searchTerm={searchTerm}
        classes={classes}
        onNodeCheckChange={(node, checked) => ({})}
      />
    </Fragment>
  );
};

const StyledComp = injectSheet(styles)(App);

const theme = {
  background: "#f7df1e",
  color: "#24292e"
};

render(
  <ThemeProvider theme={theme}>
    <StyledComp />
  </ThemeProvider>,
  root
);
