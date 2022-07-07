// Exercise 20
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/425996#questions

function nestedEvenSum(obj) {
  // add whatever parameters you deem necessary - good luck!
    let sum = 0;
    function getKeys(obj){
      for(var key in obj) {
        if (typeof obj[key] === "object") getKeys(obj[key]);   
        else if(obj[key] % 2 === 0) sum += obj[key];
      }
    }
    getKeys(obj);
    return sum; 
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
};

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

// nestedEvenSum(obj1); // 6
// nestedEvenSum(obj2); // 10