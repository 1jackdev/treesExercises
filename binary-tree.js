/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    let treeStack = [this.root];
    if (treeStack[0] == null) return 0;
    let minDepth = 1;
    let count = 1;
    while (treeStack.length) {
      let { left, right } = treeStack.pop();
      count++;
      if (count > minDepth) minDepth = count;
      if (right.length) {
        for (let child of right) treeStack.push(child);
      } else if (left.length) {
        for (let child of left) treeStack.push(child);
      }
    }
    return minDepth;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    let treeStack = [this.root];
    if (treeStack[0] == null) return 0;
    let maxDepth = 1;
    let count = 1;
    while (treeStack.length) {
      // get last added node and add 1 to the count
      let { left, right } = treeStack.pop();
      count++;
      if (count > maxDepth) maxDepth = count;

      // if (right) === if (right has children)
      if (right) {
        for (let child in right) {
          // if child is left or right, and
          // child's value is
          if (child != "val" && right[child]) treeStack.push(right[child]);
        }
      }
      if (left) {
        for (let child in left) {
          if (child != "val" && left[child]) treeStack.push(left[child]);
        }
      }
    }
    return maxDepth;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let maxSum = 0;

    function maxSumHelper(node) {
      if (node === null) return 0;
      const leftSum = maxSumHelper(node.left);
      const rightSum = maxSumHelper(node.right);
      maxSum = Math.max(maxSum, node.val + leftSum + rightSum);
      return Math.max(0, leftSum + node.val, rightSum + node.val);
    }

    maxSumHelper(this.root);
    return maxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;
    let stack = [this.root];
    let closest = null;

    while (stack.length) {
      let {val, left, right} = stack.pop();
      let currentVal = val;
      let currentValIsGreaterThanLowerBound = currentVal > lowerBound;
      let shouldReassignClosest = currentVal < closest || closest === null;

      if (currentValIsGreaterThanLowerBound && shouldReassignClosest) {
        closest = currentVal;
      }

      if (left) stack.push(left);
      if (right) stack.push(right);
    }

    return closest;
  }

}

module.exports = { BinaryTree, BinaryTreeNode };
