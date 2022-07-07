// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/424830#questions

function selectionSort(arr, comparator){
    if(typeof comparator !== 'function') {
        comparator = (a, b) => { return a - b };
    }
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if(comparator(arr[min], arr[j]) > 0){
                min = j;
            }
        }
        if(i !== min){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}
