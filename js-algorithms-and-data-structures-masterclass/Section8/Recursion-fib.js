// Exercise 14
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/425984#questions

function fib(num){
   if (num < 2) return num;
   return (fib(num-1) + fib(num-2));
}

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
