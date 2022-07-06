// Exercise 25
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/424820#questions

function binarySearch(arr, val) {
    var left = 0;
    var right = arr.length - 1;
    var pointer = Math.floor((right - left) / 2);
    while(left <= right) {
        
        if(arr[pointer] === val) return pointer;
        else if(arr[pointer] < val) {
            left = pointer + 1;
            pointer = Math.floor(left + ((right - left) / 2));
        } else if(arr[pointer] > val) {
            right = pointer;
            pointer = Math.floor((right - left) / 2);
        }
    }
    return -1;
}

binarySearch([1,2,3,4,5], 2) // 1