// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11072016#questions

function merge(arr1, arr2) {
    let result = [];
    let i = 0; 
    let j = 0;
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    i === arr1.length 
        ? result = result.concat(arr2.splice(j)) 
        : result = result.concat(arr1.splice(i));
    return result;
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

// merge([1,3,4,5], [2,4,6,8])

mergeSort([0,1,23,35,4,6,7,12,21]) // [0,1,4,6,7,12,21,23,35] (9)