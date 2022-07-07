// coding exercise 2: Multiple Pointers
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410612#questions

// My original solution, but defeats the purpose of the exercise
function countUniqueValues(arr) {
    return new Set(arr).size;
}

// My actual solution per the exercise guidelines
function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    let left = 0;
    for(let right = 1; right < arr.length; right++){
        if(arr[left] !== arr[right]){
            left++;
            arr[left] = arr[right];
        }
    }
    return left + 1;
}

// Colt's Solution
function countUniqueValues(arr) {
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
countUniqueValues([1,2,2,5,7,7,99])
