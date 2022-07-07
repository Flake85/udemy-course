// Exercise 23
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/425986#questions

function collectStrings(obj) {
    let strings = [];
    function getKeys(obj){
      for(var key in obj) {
        if (typeof obj[key] === "object") getKeys(obj[key]);   
        else if(typeof obj[key] === "string") strings.push(obj[key]);
    }}
    getKeys(obj);
    return strings; 
}

const obj1 = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
};

collectStrings(obj1); // ["foo", "bar", "baz"])