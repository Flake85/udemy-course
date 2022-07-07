// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/424838#questions

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function pivot(arr, comparator, start=0, end=arr.length - 1){
    if(typeof comparator !== 'function') {
        comparator = (a, b) => { return a - b };
    }
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i < arr.length; i++) {
        if(comparator(pivot, arr[i]) > 0) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

function quickSort(arr, comparator, left=0, right=arr.length - 1) {
    if(left < right) {
        let pivotIdx = pivot(arr, comparator, left, right);
        quickSort(arr, comparator, left, pivotIdx - 1);
        quickSort(arr, comparator, pivotIdx + 1, right);
    }
    return arr;
}