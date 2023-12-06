const color = [
  "#8dd3c7",
  "#ffffb3",
  "#bebada",
  "#fb8072",
  "#80b1d3",
  "#fdb462",
  "#b3de69",
  "#fccde5",
  "#d9d9d9",
  "#bc80bd",
  "#ccebc5",
  "#ffed6f",
];

export default function fillColor(node) {
  dfs(node, 0);

  console.log(node);
}

function dfs(node, colorIndex) {
  const alreadyFilled = node.data.color;
  if (alreadyFilled) {
    return;
  }

  node.data.color = color[colorIndex];

  const leafNode = !node.children;
  if (leafNode) {
    return;
  }

  const [firstChild, ...restChildren] = node.children;
  dfs(firstChild, colorIndex);
  restChildren.forEach((child, offset) => dfs(child, colorIndex + offset + 1));
}
