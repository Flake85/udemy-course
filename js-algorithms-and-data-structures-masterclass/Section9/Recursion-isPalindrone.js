// Exercise 16
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/425982#questions

function isPalindrome(str){
  // add whatever parameters you deem necessary - good luck!
  if(str.length === 1) return true;
  if(str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, str.length - 1));
}

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
