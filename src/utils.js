export function searchTree(node, matchingTitle) {
  if (node.label.toLowerCase().includes(matchingTitle.toLowerCase())) {
    let nodes = node.nodes;

    if (nodes && nodes.length) {
      nodes = node.nodes
        .map((element) => {
          return searchTree(element, matchingTitle);
        })
        .filter((x) => x);
    }

    return {
      ...node,
      nodes
    };
  } else if (node.nodes && node.nodes.length) {
    const nodes = node.nodes
      .map((element) => {
        return searchTree(element, matchingTitle);
      })
      .filter((x) => x);

    if (!nodes.length) {
      return null;
    }

    return {
      ...node,
      nodes
    };
  }

  return null;
}