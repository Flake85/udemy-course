// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410620#questions

function countZeroes(arr){
    let min = 0;
    let max = arr.length - 1;
    while(min <= max) {
        let mid = Math.floor((min + max) / 2);
        if(arr[mid] === 1) min = mid + 1;
        else if(arr[mid] === 0) max = mid - 1;
    }
    return arr.length - min;
}