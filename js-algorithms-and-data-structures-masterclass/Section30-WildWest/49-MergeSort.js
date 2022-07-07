// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/424834#questions

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
        } else {
            result.push(arr1[i]);
            i++;
        }
    }
    i === arr1.length
        ? result = result.concat(arr2.slice(j))
        : result = result.concat(arr1.slice(i));
    return result;
}

function mergeSort(arr, comparator) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid), comparator);
    let right = mergeSort(arr.slice(mid), comparator);
    return merge(left, right, comparator);
}