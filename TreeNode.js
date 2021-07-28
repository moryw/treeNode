class TreeNode {
  constructor(data) {
    this.data = data
    this.children = []
  }

  addChild(child) {
    if (child instanceof TreeNode) {
      this.children.push(child)
    } else {
      child = new TreeNode(child)
      this.children.push(child)
    }
  }

  removeChild(childToRemove) {
    this.children = this.children.filter(child => {
      if (childToRemove instanceof TreeNode) {
        if (childToRemove !== child) {
          return true
        } else {
          return false
        }
      }
      if ( !(childToRemove instanceof TreeNode) ) {
        if (childToRemove !== child.data) {
          return true
        } else {
          return false
        }
      }
    })
  }
}
const newTree = new TreeNode(1)
console.log(newTree.children)

module.exports = TreeNode
