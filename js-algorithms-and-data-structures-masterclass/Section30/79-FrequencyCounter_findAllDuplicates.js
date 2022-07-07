// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410606#questions

function findAllDuplicates(arr){
    let result = [];
    let seen = {};
    arr.forEach(num => {
        if(!seen[num]) seen[num] = 1;
        else {
            if(seen[num] === 1) result.push(num);
            seen[num] += 1;
        }
    });
    return result;
}