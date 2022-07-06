// Exercise 8
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410608#questions

function minSubArrayLen(arr, num) {
  let left = 0;
  let right = 0;
  let tempNum = arr[left];
  let tempResult;
  let result = 0;
  
  while(right <= arr.length) {
    if(tempNum < num) {
      right++;
      if(arr[right]) tempNum += arr[right];
    } else {
      tempResult = right - left + 1;
      result = result ? Math.min(result, tempResult) : tempResult;
      tempNum -= arr[left];
      left++;
    }
  }
  return result
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7), "returns 2")
console.log(minSubArrayLen([2,1,6,5,4], 9), "returns 2")
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39), "returns 3")
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 55), "returns 4")