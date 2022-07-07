// Exercise 3
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410598#questions

// my solution:
function sameFrequency(num1, num2) {
    const str1 = num1.toString();
    const str2 = num2.toString();
    if(str1.length !== str2.length) return false;
    let lookup = {};
    for(let x = 0; x < str1.length; x++) {
        let digit = str1[x];
        lookup[digit] ? lookup[digit] += 1 : lookup[digit] = 1;
    }
    for(let x = 0; x < str2.length; x++) {
        let digit = str2[x];
        if(!lookup[digit]) {
            return false;
        } else {
            lookup[digit] -= 1;
        }
    }
    return true;
}

// colt's solution:
function sameFrequency(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;
  
  let countNum1 = {};
  let countNum2 = {};
  
  for(let i = 0; i < strNum1.length; i++){
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }
  
  for(let j = 0; j < strNum1.length; j++){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }
  
  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }
 
  return true;
}