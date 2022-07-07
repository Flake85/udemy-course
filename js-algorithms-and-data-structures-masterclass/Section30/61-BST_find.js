// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4408430#questions

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
     find(value) {
        let current = this.root;
        let found = false;
        while(!found) {
            if(current.value === value) return current;
            if(current.value > value) {
                if(current.left) current = current.left;
                else return undefined;
            } else {
                if(current.right) current = current.right;
                else return undefined;
            }
        }
    }

}
