// Includes Content From Sections 22 && 23
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11082118#questions

class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(val) {
        var newNode = new Node(val);
        if(!this.root) this.root = newNode;
        else {
            let currentNode = this.root;
            let found = false;
            while(!found) {
                if(currentNode.value === newNode.value) return null;
                if(currentNode.value < newNode.value) {
                    if(currentNode.right) currentNode = currentNode.right;
                    else {
                        currentNode.right = newNode;
                        found = true;
                    }
                } else {
                    if(currentNode.left) currentNode = currentNode.left;
                    else {
                        currentNode.left = newNode;
                        found = true;
                    }
                }
            }
        }
        this.value++;
        return this;
    }
    find(val) {
        if(!this.root) return null;
        let currentNode = this.root;
        let found = false;
        while(!found) {
            if(currentNode.value === val) return currentNode;
            if(currentNode.value < val) {
                if(currentNode.right) currentNode = currentNode.right;
                else if(currentNode.value !== val) return null;
                else return currentNode;
            }
            else {
                if(currentNode.left) currentNode = currentNode.left;
                else return currentNode;
            }
        }
    }
    // alt bfs
    // bfs() {
    //     var node = this.root;
    //         data = [];
    //         queue = [];
    //     queue.push(node);
    //     while(queue.length) {
    //         node = queue.shift();
    //         data.push(node.value);
    //         if(node.left) queue.push(node.left);
    //         if(node.right) queue.push(node.right);
    //     }
    //     return data;
    // }
    bfs() {
        let queue = [];
        let result = [];
        let current = this.root;
        queue.push(current);
        while(queue.length > 0) {
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
            let shifted = queue.shift()
            result.push(shifted.value);
            current = queue[0];
        }
        return result;
    }
    // can be used to export a tree structure 
    // so it can be easily copied or reproduced
    dfsPreOrder() {
        let data = [];
        function traverse(node) {
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    dfsPostOrder() {
        let data = [];
        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }
    dfsInOrder() {
        let data = [];
        function traverse(node) {
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}

var tree = new BinarySearchTree();
tree.insert(5);
tree.insert(3);
tree.insert(4);
tree.insert(2);
tree.insert(1);
tree.insert(8);
