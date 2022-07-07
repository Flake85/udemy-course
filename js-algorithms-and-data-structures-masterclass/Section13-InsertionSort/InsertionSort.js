// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344156#questions

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let val = arr[i];
        let idx = i;
        for (let j = i - 1; j >= 0 && arr[j] > val; j--) {
            arr[j + 1] = arr[j]
            idx = j;
        }
        arr[idx] = val;
    }
    return arr;
}

insertionSort([2,5,3,1,4])