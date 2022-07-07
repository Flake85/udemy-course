// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410614#questions

function sortedFrequency(arr, val){
    if(!arr.length) return -1;
    let mid = Math.floor(arr.length / 2);
    if(arr[0] === val && arr[arr.length - 1] === val) return arr.length;
    if(arr[mid] === val) {
        let count = 1;
        let left = mid - 1;
        let right = mid + 1;
        while(arr[left] === val && left >= 0) {
            if(arr[left] === val) count++;
            left--;
        }
        while(arr[right] === val && right < arr.length) {
            if(arr[right] === val) count++;
            right++;
        }
        return count;
    } 
    else if(arr[mid] > val) return sortedFrequency(arr.slice(0, mid), val);
    else return sortedFrequency(arr.slice(mid + 1, arr.length), val);
}
