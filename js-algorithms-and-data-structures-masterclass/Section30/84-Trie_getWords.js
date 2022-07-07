// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/424954#questions

class Trie {
    constructor() {
        this.characters = {};
        this.isWord = false;
    }
    addWord(word, index = 0) {
        if (index === word.length) {
            this.isWord = true;
        } else if (index < word.length) {
            var char = word[index];
            var subTrie = this.characters[char] || new Trie();
            subTrie.addWord(word, index + 1);
            this.characters[char] = subTrie;
        }
        return this;
    }
    getWords(words = [], currentWord = ""){
        if(this.isWord) words.push(currentWord);
        for(var char in this.characters) {
            var nextWord = currentWord + char;
            this.characters[char].getWords(words, nextWord);
        }
        return words;
    }
}
