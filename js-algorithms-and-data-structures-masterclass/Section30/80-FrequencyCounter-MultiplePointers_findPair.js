// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410618#questions

function findPair(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if(Math.abs(arr[i] - arr[j]) === Math.abs(n)) return true;
        }
    }
    return false;
}