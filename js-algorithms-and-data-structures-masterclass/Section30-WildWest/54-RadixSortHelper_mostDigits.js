// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4445136#questions

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
