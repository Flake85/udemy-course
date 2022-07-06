// Exercise 21
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/425970#questions

function capitalizeWords(input) {
  // add whatever parameters you deem necessary - good luck!
  let capitalized = [];
  function recursive(input) {
    if(input.length === 0) return capitalized;
    capitalized.push(input[0].toUpperCase());
    return recursive(input.slice(1));
  }
  return recursive(input);
}

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']