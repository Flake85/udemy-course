// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410378#questions

function coinChange(coins, amount) {
    let ways = new Array(amount + 1);
    for (let i = 0; i < amount + 1; i++) {
        ways[i] = 0;
    }
    ways[0] = 1;
    for (let i = 0; i < coins.length; i++) {
        for (let j = 0; j < ways.length; j++) {
            if(coins[i] <= j) ways[j] += ways[(j - coins[i])];
        }
    }
    return ways[ways.length - 1];
}
