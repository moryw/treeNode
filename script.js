const TreeNode = require('./TreeNode');

const tree = new TreeNode(1)

tree.addChild(15)
const newTree = new TreeNode(30)
tree.addChild(newTree)
console.log(tree)

tree.removeChild(15)
tree.removeChild(30)
console.log(tree)
