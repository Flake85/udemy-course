// Exercise 24
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/424816#questions

function linearSearch(arr, val) {
    for(let x = 0; x < arr.length; x++) {
        if(arr[x] === val) return x;
    }
    return -1;
}

linearSearch([10,15,20,25,30], 15) // 1