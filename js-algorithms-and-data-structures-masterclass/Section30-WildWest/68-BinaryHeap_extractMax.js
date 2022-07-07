// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4409524#questions

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
    extractMax() {
        let removed = this.values[0];
        this.swap(0, this.values.length - 1);
        this.values.pop();
        this.sinkDown();
        return removed;
    }
    sinkDown() {
        let parentIdx = 0;
        let leftCIdx = (2 * parentIdx) + 1;
        let rightCIdx = (2 * parentIdx) + 2;
        while(this.values[parentIdx] < this.values[leftCIdx] 
           || this.values[parentIdx] < this.values[rightCIdx]) {
            if(this.values[leftCIdx] > this.values[rightCIdx]) {
                this.swap(parentIdx, leftCIdx);
                parentIdx = leftCIdx;
            } else {
                this.swap(parentIdx, rightCIdx);
                parentIdx = rightCIdx;
            }
            leftCIdx = (2*parentIdx) + 1;
            rightCIdx = (2*parentIdx) + 2;
        }
    }
}