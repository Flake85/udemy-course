// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11072116#questions

// my solution
function getDigit(num, place) {
    var str = num.toString();
    return parseInt(str[(str.length - 1) - place]);
}

function digitCount(num) {
    return num.toString().length;
}

function mostDigits(nums) {
    let most = 0;
    for (let i = 0; i < nums.length; i++) {
        if(most < digitCount(nums[i])) most = digitCount(nums[i])
    }
    return most;
}

function radixSort(nums) {
    let maxDigits = mostDigits(nums)
    for (let k = 0; k < maxDigits; k++) {
        console.log(nums)
        let buckets = [[], [], [], [], [], [], [], [], [], []];
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            if(isNaN(digit)) buckets[0].push(nums[i]); 
            else buckets[digit].push(nums[i]);
        }
        nums = [].concat.apply([], buckets)
    }
    return nums
}

// function getDigit(num, i) {
//     // Math.abs (absolute) is for working with (-)numbers
//     return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
// }

// function digitCount(num) {
//     if(num === 0) return 1;
//     return Math.floor(Math.log10(Math.abs(num))) + 1;
// }

// function mostDigits(nums) {
//     let maxDigits = 0;
//     for(let i = 0; i < nums.length; i++) {
//         // Math.max gets the biggest number passed
//         maxDigits = Math.max(maxDigits, digitCount(nums[i]))
//     }
//     return maxDigits;
// }

// getDigit(12345, 0)
// digitCount(234)
// mostDigits([1234, 56, 7, 890])
radixSort([10645, 534, 6645, 37, 2, 834, 9543, 46, 749, 18])