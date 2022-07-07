// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4445156#questions

function getDigit(num, i) {
    let str = num.toString();
    if(i > str.length - 1) return 0;
    return parseInt(str[(str.length - 1) - i]);
}

function digitCount(num) {
    let str = num.toString();
    return str.length;
}

function mostDigits(nums) {
    let most = 0;
    nums.forEach(num => {
        if(digitCount(num) > most) most = digitCount(num);
    });
    return most;
}

function radixSort(nums) {
    let max = mostDigits(nums);
    for (let i = 0; i < max; i++) {
        let buckets = Array.from({length: 10}, () => ([]));
        for (let j = 0; j < nums.length; j++) {
            let digit = getDigit(nums[j], i);
            if(isNaN(digit)) buckets[0].push(nums[j]);
            else buckets[digit].push(nums[j]);
        }
        nums = [].concat.apply([], buckets);
    }
    return nums; 
}