// coding exercise 5
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410602#questions

// my solution
function averagePair(arr, avg){
    if(arr.length === 0) return false;
    const target = avg * 2;
    let left = 0;
    let right = (arr.length - 1);
    while(left < right) {
    	if(arr[left] + arr[right] === target) {
      	return true
      } else if(arr[left] + arr[right] > target){
      	right--;
      } else {
      	left++;
      }
    }
    return false;
}

// averagePair Solution
function averagePair(arr, num){
  let start = 0
  let end = arr.length-1;
  while(start < end){
    let avg = (arr[start]+arr[end]) / 2 
    if(avg === num) return true;
    else if(avg < num) start++
    else end--
  }
  return false;
}