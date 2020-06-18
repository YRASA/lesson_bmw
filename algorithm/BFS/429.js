var levelOrder = function(root) {
  if (root === null) return [];
  let queue = [ root ];
  let res = [];
  while (queue.length) {
    let rowNodes = queue.splice(0);
    let cell = [];
    for (node of rowNodes) {
      cell.push(node.val);
      if (node.children) {
        for (let child of node.children) {
          queue.push(child);
        }
      }
    }
    res.push(cell);
  }
  return res;
};