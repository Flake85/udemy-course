// exercise 6
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410596#questions

// my solution
function isSubsequence(str1, str2) {
  if(str1.length === 0 || str2.length === 0) return false;
  let str1Test = 0;
  let str2Test = 0;
  
  while(str1Test < str1.length) {
  	if(str1[str1Test] === str2[str2Test]) {
  		str1Test++;
    	str2Test++;
  	} else if(str2Test !== str2.length) {
    	str2Test++;
    } else {
    	return false;
    }
  }
  return true;
}

// isSubsequence Solution - Iterative
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

// isSubsequence Solution - Recursive but not O(1) Space
function isSubsequence(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
  return isSubsequence(str1, str2.slice(1))
}