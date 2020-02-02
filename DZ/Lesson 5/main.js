// Task 00 
/* Палиндром — слово, предложение или последовательность символов, которая абсолютно одинаково читается как в привычном направлении, так и в обратном. К примеру, “Anna” — это палиндром, а “table” и “John” — нет.
*/

const palindrome = str => {
  // Меняем регистр строки на нижний
  str = str.toLowerCase(anna)
  // Переворачиваем строку и возвращаем результат сравнения
  return str === str.split('').reverse().join('')
}
console.log(anna);