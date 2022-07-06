// Exercise 15
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/425976#questions

function reverse(str){
   if(str.length === 1) return str;
   return reverse(str.slice(1)) + str[0];
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'