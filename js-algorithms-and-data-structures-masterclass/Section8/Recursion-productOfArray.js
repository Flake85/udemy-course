// Exercise 12
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/425990#questions

function productOfArray(arr) {
    if(arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
}

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
