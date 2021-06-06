/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let treeStack = [this.root];
    let sum = 0;
    if (treeStack[0] == null) return sum;
    while (treeStack.length) {
      const current = treeStack.pop();
      sum += current.val;
      if (current.children.length) {
        for (let child of current.children) treeStack.push(child);
      }
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let treeStack = [this.root];
    let evens = 0;
    if (treeStack[0] == null) return evens;
    while (treeStack.length) {
      const current = treeStack.pop();
      if (current.val % 2 === 0) evens++;
      if (current.children.length) {
        for (let child of current.children) treeStack.push(child);
      }
    }
    return evens;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let treeStack = [this.root];
    let numsGreaterThanLB = 0;
    if (treeStack[0] == null) return numsGreaterThanLB;
    while (treeStack.length) {
      const current = treeStack.pop();
      if (current.val > lowerBound) numsGreaterThanLB++;
      if (current.children.length) {
        for (let child of current.children) treeStack.push(child);
      }
    }
    return numsGreaterThanLB;
  }
}

module.exports = { Tree, TreeNode };
