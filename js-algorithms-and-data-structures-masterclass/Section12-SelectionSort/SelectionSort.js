// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344140#questions

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        if(i !== min) {
            var temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

selectionSort([0,4,6,22,8,5,9,2])