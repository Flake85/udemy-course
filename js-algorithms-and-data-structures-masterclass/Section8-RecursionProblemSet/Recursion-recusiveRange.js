// Exercise 13
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/426000#questions

function recursiveRange(num) {
   if(num === 1) return 1;
   return num + recursiveRange(num - 1);
}

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 
