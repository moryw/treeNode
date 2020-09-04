class TreeNode {
  constructor(data) {
    this.data = data
    this.children = []
  }

  addChild(child) {
    if (child instanceof TreeNode) {
      this.children.push(child)
    } else {
      let newChild = new TreeNode(child)
      this.children.push(newChild)
    }
  }
}

const tree = new TreeNode(1)
console.log(tree)

tree.addChild(15)
console.log(tree)

const newTree = new TreeNode(30)
tree.addChild(newTree)
console.log(tree)

module.exports = TreeNode
