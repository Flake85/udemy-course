// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/424944#questions

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
  remove(val) {
        let current = this.root;
        let parent = null;
        let found = false;
        while(!found) {
            if(!current) return undefined;
            if(val > current.value) {
                parent = current;
                current = current.right;
            } else if(val < current.value) {
                parent = current;
                current = current.left;
            } else {
                found = true;
                // if no child
                if(!current.left && !current.right) {
                    parent.right.value === val ? parent.right = null : parent.left = null;
                }
                // if 1 child
                else if(!current.left || !current.right) {
                    parent.left.value === val ? parent.left = current.right : parent.right = current.right;
                }
                // if 2 children
                else if(current.left && current.right) {
                    let replacer = current.right;
                    let replacerParent = current;
                    while(replacer.left) {
                        replacerParent = replacer;
                        replacer = replacer.left;
                    }
                    parent.right.value === val ? parent.right = replacer : parent.left = replacer;  
                    if(replacerParent.value === current.value) replacer.left = current.left;
                    else {
                        replacerParent.left = replacer.right;
                        replacer.left = current.left;
                        if(replacer.right.value) replacer.right = current.right;
                    }
                }
            }
        }
        return current;
    }
}
