# React Tree List

Simple tree view component. See [demo](/test/index.html) for mor information.

## Usage

```jsx
const App = ({ classes }) => {
  const [searchTerm, setTerm] = useState("");

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
```

## Components

### `Checkbox`

Props:

- `checked` - state of checkbox
- `onChange` - callback, that should triggered on change of checkbox

### `Switcher`

Props:

- `collapsed` - state of switcher

### `Label`

Props:

- `label` - text of row

## Classes

- **root** - Menu class name
- **treeNode** - Classname for tree node
- **treeRow** - Classname for `collapser`, `checkbox` and `label`
- **collapser** - Classname for `Collapser` component
- **checkbox** - Classname for `Checkbox` component
- **childrens** - Classname for `childrens` of tree node

## Data Example

```js
[
  {
    id: "1",
    label: "Parent 1",

    nodes: [
      {
        id: "2",
        label: "Parent 2",
        nodes: [
          {
            id: "3",
            label: "Child 1"
          }
        ]
      }
    ]
  },

  {
    id: "4",
    label: "Parent 3",

    nodes: [
      {
        id: "5",
        label: "Parent 4",

        nodes: [
          {
            id: "6",
            label: "Child 2"
          }
        ]
      }
    ]
  }
];
```
