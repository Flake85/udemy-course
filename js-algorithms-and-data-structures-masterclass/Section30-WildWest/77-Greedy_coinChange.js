// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4413076#questions

function minCoinChange(coins, value){
    let result = [];
    for (let i = coins.length - 1; i >= 0; i--) {
        while(value >= coins[i]) {
            value -= coins[i];
            result.push(coins[i]);
        }
    }
    return result;
}