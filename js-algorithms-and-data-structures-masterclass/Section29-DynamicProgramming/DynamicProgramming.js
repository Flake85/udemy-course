// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/12434772#questions

// recursive solution O(2^n) and is really bad and slow.
// function fib(n) {
//     if(n <= 2) return 1;
//     return fib(n-1) + fib(n-2);
// }

// memoization solution O(n)
// function fib(n, memo=[]) {
//     if(memo[n] !== undefined) return memo[n];
//     if(n <= 2) return 1;
//     var res = fib(n-1, memo) + fib(n-2, memo);
//     memo[n] = res;
//     return res;
// }

// tabulation solution (bottum up approach) 
function fib(n) {
    if(n <= 2) return 1;
    var fibNums = [0,1,1];
    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n];
}