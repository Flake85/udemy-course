// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410610#questions

function findRotatedIndex(arr, val, min=0, max=arr.length-1) {
    if(min > max) return -1;
    let mid = Math.floor((min + max) / 2);
    if(arr[mid] === val) return mid;
    if(arr[min] <= arr[mid]) {
        if(val >= arr[min] && val <= arr[mid]) {
            return findRotatedIndex(arr, val, min, mid - 1);
        }
        return findRotatedIndex(arr, val, mid + 1, max);
    }
    if(val >= arr[mid] && val <= arr[max]) {
        return findRotatedIndex(arr, val, mid + 1, max);
    }
    return findRotatedIndex(arr, val, min, mid - 1);
}