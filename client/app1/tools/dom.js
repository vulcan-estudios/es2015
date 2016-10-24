function select (query) {
  return document.querySelector(query);
}

function render (container, children) {
  container.appendChild(children);
}

function create (nodeName, content) {
  const node = document.createElement(nodeName);
  if (content) node.innerHTML = content;
  return node;
}

export { select, render, create };
