// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410600#questions

function constructNote(str, construct){
    let seen = {};
    for (let i = 0; i < str.length; i++) {
        if(!seen[str[i]]) seen[str[i]] = 1;
        else seen[str[i]] += 1;
    }
    for (let i = 0; i < construct.length; i++) {
        if(seen[construct[i]] > 1) seen[construct[i]]--; 
        else delete seen[construct[i]];
        if(Object.keys(seen).length === 0) return true;
    }
    return false;
}