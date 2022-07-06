// Exercise 18
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/425972#questions

function flatten(arr){
  // add whatever parameters you deem necessary - good luck!
  let flattened = [];
  for(let x = 0; x < arr.length; x++) {
    if(Array.isArray(arr[x])) {
      flattened = flattened.concat(flatten(arr[x]));
    } else {
      flattened.push(arr[x]);
    }
  }
  return flattened;
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3