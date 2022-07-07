// Exercise 19
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/425994#questions

let capitalized = [];

function capitalizeFirst (arr) {
  // add whatever parameters you deem necessary - good luck!
  if(arr.length === 0) return capitalized;
  capitalized.push(arr[0][0].toUpperCase() + arr[0].substring(1));
  return capitalizeFirst(arr.slice(1));
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
