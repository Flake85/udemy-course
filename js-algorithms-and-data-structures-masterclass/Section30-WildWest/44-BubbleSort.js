// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/424828#questions

function bubbleSort(arr, comparator) {
    if(typeof comparator !== 'function') {
        comparator = (a, b) => { return a - b };
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if(comparator(arr[j],arr[j + 1]) > 0){
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}