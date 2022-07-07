// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11082308#questions

// // only works for strings 
// function hash(key, arrLen) {
//     let total = 0;
//     // adding the prime # helps avoid collisions when hashing
//     let WEIRD_PRIME = 31;
//     for(let i = 0; i < Math.min(key.length, 100); i++) {
//         let char = key[i];
//         let value = char.charCodeAt(0) - 96;
//         total = (total + WEIRD_PRIME + value) % arrLen;
//     }
//     return total;
// }

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }
    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    set(key, value) {
        let hashedKey = this._hash(key);
        if (!this.keyMap[hashedKey]) this.keyMap[hashedKey] = [[key, value]];
        else this.keyMap[hashedKey].push([key, value]);
        return this.keyMap;
    }
    get(key) {
        let hashedKey = this._hash(key);
        if (!this.keyMap[hashedKey]) return undefined;
        for (let i = 0; i < this.keyMap[hashedKey].length; i++) {
            if(this.keyMap[hashedKey][i][0] === key) return this.keyMap[hashedKey][i][1];
        }
        return undefined;
    }
    keys() {
        let result = [];
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if(!result.includes(this.keyMap[i][j][0])) {
                        result.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return result
    }
    values() {
        let result = [];
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if(!result.includes(this.keyMap[i][j][1])) {
                        result.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return result
    }
}

const hash = new HashTable();
hash.set("test8k","test8v")
hash.set("test7k","test7v")
hash.set("test6k","test6v")
hash.set("test5k","test5v")