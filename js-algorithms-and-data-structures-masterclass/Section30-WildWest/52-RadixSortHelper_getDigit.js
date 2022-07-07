// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4444446#questions

function getDigit(num, i) {
    let str = num.toString();
    if(i > str.length - 1) return 0;
    return parseInt(str[(str.length - 1) - i]);
}