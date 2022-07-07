// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/424952#questions

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
  insert(value){
      let newNode = new Node(value);
      if(!this.root) {
          this.root = newNode;
      } else {
          let found = false;
          let current = this.root;
          while(!found) {
              if(current.value === newNode.value) return null;
              if(current.value > newNode.value) {
                  if(current.left) current = current.left;
                  else {
                      current.left = newNode;
                      found = true;
                  }
              } else {
                  if(current.right) current = current.right;
                  else {
                      current.right = newNode;
                      found = true;
                  }
              }
          }
      }
      return this;
  }
}
