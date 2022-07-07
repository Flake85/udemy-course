// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4413454#questions

function merge(arr1, arr2, comparator) {
    if(typeof comparator !== 'function') {
        comparator = (a, b) => { return a - b };
    }
    let result = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length) {
        if(comparator(arr1[i], arr2[j]) >= 0) {
            result.push(arr2[j]);
            j++;
        }
        if(comparator(arr2[j], arr1[i]) > 0) {
            result.push(arr1[i]);
            i++;
        }
    }
    if(i === arr1.length) {
        result = result.concat(arr2.slice(j));
    } else {
        result = result.concat(arr1.slice(i));
    }
    return result;
}