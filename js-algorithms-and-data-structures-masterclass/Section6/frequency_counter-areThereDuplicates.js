// Coding Exercise 4
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410592#questions

// My Solution (frequency counter)
function areThereDuplicates(...items) {
    if(items.length <= 1) return false;
    const lookup = {};
    for(let x = 0; x < items.length; x++) {
    	let digit = items[x];
      if(lookup[digit]){
      	return true;
      } else { 
      	lookup[digit] = 1;
      }
    }
    return false;
}

// Colt's Solutions:
function areThereDuplicates() {
  let collection = {}
  for(let val in arguments){
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for(let key in collection){
    if(collection[key] > 1) return true
  }
  return false;
}

function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}

function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}