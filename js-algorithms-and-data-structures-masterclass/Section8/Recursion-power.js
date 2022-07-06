// Exercise 10
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/425998#questions

function power(num1, num2) {
    if(num2 === 0) return 1;
    return num1 * power(num1, num2 - 1);
}

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16
