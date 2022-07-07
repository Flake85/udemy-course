// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11071948#questions

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

bubbleSort([0,4,6,22,8,5,9,2])