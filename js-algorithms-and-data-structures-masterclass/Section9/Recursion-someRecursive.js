// Exercise 17
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/425980#questions

function someRecursive(val){
  if(val.length === 0) return false;
  if(val[0] % 2 !== 0) return true;
  return someRecursive(val.slice(1));
}

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false
