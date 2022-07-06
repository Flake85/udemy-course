// Exercise 9
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410594#questions

// my solution
function findLongestSubstring(str){
  if(str === '') return 0;
  let first = 0;
  let last = 1;
  let obj = { [str[first]]: 1 };
  let current = 1;
  let longest = 1;
  
  while(last < str.length) {
    if(str[last] in obj) {
    	obj[str[last]]++;
      while(str[first] !== str[last]) {
        obj[str[first]] >= 2 ? obj[str[first]]-- : delete obj[str[first]];
        first++;
        if(current > 1) current--;
      }
	  obj[str[first]] >= 2 ? obj[str[first]]-- : delete obj[str[first]];
      first++
    } else {
      obj[str[last]] = 1;
      current++;
    }
    if(current > longest) longest = current;
    last++;
  }
  return longest;
}

console.log(findLongestSubstring(''), 0);
console.log(findLongestSubstring('rithmschool'), 7);
console.log(findLongestSubstring('thisisawesome'), 6);
console.log(findLongestSubstring('thecatinthehat'), 7);
console.log(findLongestSubstring('bbbbbb'), 1);
console.log(findLongestSubstring('longestsubstring'), 8);
console.log(findLongestSubstring('thisishowwedoit'), 6);