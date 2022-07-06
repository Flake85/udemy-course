// Exercise 22
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/425988#questions

function stringifyNumbers(obj) {
    let stringifiedObj = Object.assign({}, obj);
    function getKeys(stringifiedObj){
      for(var key in stringifiedObj) {
        if (typeof stringifiedObj[key] === "object") getKeys(stringifiedObj[key]);   
        else if(typeof stringifiedObj[key] === 'number') stringifiedObj[key] = stringifiedObj[key].toString();
    }}
    getKeys(stringifiedObj);
    return stringifiedObj;
}

let obj = {
    num: 2,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
};