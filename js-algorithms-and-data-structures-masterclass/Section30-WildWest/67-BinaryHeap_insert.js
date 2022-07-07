// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/424938#questions

class MaxBinaryHeap{
    constructor(){
        this.values = [];    
    }
    insert(val){
        this.values.push(val);
        this.bubbleUp();
        return this.values;
    }
    swap(a, b) {
        let temp = this.values[a];
        this.values[a] = this.values[b];
        this.values[b] = temp;
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        let el = this.values[idx];
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if(el <= parent) break;
            this.swap(parentIdx, idx);
            idx = parentIdx;
        }
    }
}