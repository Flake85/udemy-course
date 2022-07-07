// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/424832#questions

function insertionSort(arr, comparator) {
    if(typeof comparator !== 'function') {
        comparator = (a, b) => { return a - b };
    }
    for (let i = 1; i < arr.length; i++) {
        let val = arr[i];
        let idx = i;
        for (let j = i - 1; j >= 0; j--) {
            if(comparator(arr[j], val) > 0) {
                arr[j + 1] = arr[j];
                idx = j;
            }
        }
        arr[idx] = val;
    }
    return arr;
}
