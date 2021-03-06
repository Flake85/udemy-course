// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/424942#questions

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = new Node(value);
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = new Node(value);
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  breadthFirstSearch() {
      let node = this.root;
      let queue = [];
      let result = [];
      queue.push(node);
      while(queue.length) {
          node = queue.shift();
          result.push(node.value);
          if(node.left) queue.push(node.left);
          if(node.right) queue.push(node.right);
      }
      return result;
  }
}
