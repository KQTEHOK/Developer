// Task 00 
/* Палиндром — слово, предложение или последовательность символов, которая абсолютно одинаково читается как в привычном направлении, так и в обратном. К примеру, “Anna” — это палиндром, а “table” и “John” — нет.
*/

let isPalindrome = (str) => {
  str = str.toLowerCase('')
  return str === str.split('').reverse().join('');
};

// console.log(isPalindrome('Anna'));
// console.log(isPalindrome('table'));
// console.log(isPalindrome('John'));


//! Task 01 
/* Так называют слово, которое содержит все буквы другого слова в том же количестве, но ином порядке. Постановка
Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения. Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.
*/


function validAnagramOrNot(a, b) {
  if (a.length !== b.length)
  return false;
  const lookup = {};

  for (let i = 0; i < a.length; i++) {
    let character = a[i];
    lookup[character] = (lookup[character] || 0) + 1;
  }

  for (let i = 0; i < b.length; i++) {
    let character = b[i];
    if (!lookup[character]) {
      return false;
    } else {
      lookup[character]--;
    }
  }
  return true;
}

// console.log(validAnagramOrNot("a", "b"))
// console.log(validAnagramOrNot("aza", "zaa"))

//! Task 02 Поиск гласных
/* Достаточно простая задача, которая часто попадается на собеседованиях. Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
Гласными являются «a», «e», «i», «o», «u».*/


let str = 'paralelogramm';
let findVowels = str => {
  let count = 0
  let vowels = ['a', 'e', 'i', 'o', 'u']
  for(let char of str.toLowerCase()) {
    if(vowels.includes(char)) {
      count++
    }
  }
  return count
}

// console.log(findVowels(str));

//! Task 03
/*Классическая задача, которую можно встретить на собеседованиях самого разного уровня. Стоит напомнить, что последовательность Фибоначчи — это ряд чисел, где каждое последующее является суммой двух предыдущих. Так, первые десять чисел выглядят следующим образом: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34. Нужно написать функцию, которая возвращает n-ную запись в определенной последовательности, причем n — число, которое передается в качестве аргумента функции.*/

let fibonacci = num => {
  let result = [0, 1]
 
  for(let i = 2; i <= num; i++) {
    let prevNum1 = result[i - 1]
    let prevNum2 = result[i - 2]
    result.push(prevNum1 + prevNum2)
  }

  return result[num]
}

//! Task 04
// Задача. Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).

function task() {
  let str = 'aaa, bbb, ccc';
// document.write(str.substr(5,3));
// document.write(str.substring(5,8));
document.write(str.slice(5,[8]));
}

// console.log(task(str));

//! Task 04
// В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'.


var data = '2025-12-31';
var arr = data.split('-');
// alert(arr);

var str2 = '2025-12-31';
var arr = data.split('-');
var newStr = arr[2] + '/' + arr[1] + '/'+arr[0];
// alert(newStr);

//! Task 04
// Дана строка 'js'. Сделайте из нее строку 'JS'.

let capsLock = 'js';
console.log(capsLock.toUpperCase());

//! Task 04
// Дана строка 'JS'. Сделайте из нее строку 'js'.

let lowerCase = 'js';
console.log(capsLock.toLocaleLowerCase());

//! Task 05
// Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.

let task5 = 'я учу javascript!';
document.write(task5.length);

//! Task 06
// Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).

let task6 = 'я учу javascript!';
document.write(task6.substr(2, 4));
document.write(task6.substring(6,));
document.write(task6.slice(2,));

//! Task 07
// Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.

let task7 = 'я учу javascript!';
document.write(task7.indexOf('учу'));

//! Task 09
// Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.

let task09 = 'я учу javascript!';
let array = task09.split(' ');
console.log(array);

//! Task 10
//  Дана строка 'я учу javascript!'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.

let task10 = 'я учу javascript!';
let array10 = task10.split('');
console.log(array10);

//! Task 11
//  В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.

var data = '2025-12-31';
var arr = data.split('-');
// alert(arr);

var str2 = '2025-12-31';
var arr = data.split('-');
var newStr = arr[2] + '.' + arr[1] + '.'+arr[0];
// alert(newStr);

//! Task 12
// Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.

let array12 = [' Я', 'учу', 'javascript', '!'];
document.write(array12.join (' '));

//! Task 13
// Преобразуйте первую букву строки в верхний регистр.

let str13 = 'я учу javascript!';
document.write(str13[0].toLocaleUpperCase() + str13.substr(1, str13.length -1));

//! Task 14
// Преобразуйте первую букву строки в верхний регистр.
//  Преобразуйте первую букву каждого слова строки в верхний регистр.

let str14 = 'я учу javascript!';
str14 = str14.split(' ').map(function(item) {
  return item[0].toUpperCase() + item.substr(1, str14.length - 1)
}).join(' ')

console.log(str14);

//! Task 15
// Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.

let str15 = 'var_test_text';
arr = str15.split('_');
for(let i = 1; i < arr.length; i++) {
  arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1, arr[i].length - 1)
}
str15 = arr.join('')
console.log(str15);

//! Task 16
// Напишите функцию stringToarray(str), которая преобразует строку в массив слов.

let str16 = 'Скрипт, конечно же, должен работать с любыми аналогичными строками';

function stringToarray(str16) {
  return str16.trim().split(" , ");

}

let array16 = stringToarray(str16);
document.writeln(array16);
console.log(array16);

//! Task 17
// Напишите функцию delete_characters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

let str17 = 'Каждый охотник желает знать';
function delete_characters(str17, length) {
  if((str17.constructor === String) && (length>0)) {
    return str17.slice(0, length);
  }
};
document.writeln(delete_characters(str17, 14));

//! Task 18
// Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.

let str18 = "HTML JavaScript PHP";
function insert_dash(str18) {
  return str18.trim().toUpperCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
};

document.writeln(insert_dash(str18));

//! Task19
// Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний

let str19 = "string not starting with capital";

function cursive_letter(str19) {
  return str19.charAt(0).toUpperCase() + str19.slice(1);
}
document.writeln(cursive_letter(str19));

//! Task 20
// Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.

let str20 = "каждый охотник желает знать, где сидит фазан";  
function capitalize(str20) {
 return str20.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
}
document.writeln(capitalize(str20));

//! Task 21
// Напишите функцию change_register(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».

let str21 = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";  
 
function change_register(str21) {
  let new_str21 = "";
  let len = str21.length;
  for (var i = 0; i < len; i++) {
    if (str21[i] === str21[i].toLowerCase()) {
      new_str21 += str21[i].toUpperCase();
    } else {
      new_str21 += str21[i].toLowerCase();
    }
  }
  return new_str21;
}
document.writeln(change_register(str21));

//! Task 22
// Напишите функцию remove_char(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.

let str22 = "every., -/ hunter #! wishes ;: {} to $ % ^ & * know";  
 
function remove_char(str22) {
  let res = "";
  res = str22.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
  return res;      
}
document.writeln(remove_char(str22));

//! Task 23
// Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое значение с дополнительным знаком «+» или « -« в зависимости от передаваемого аргумента.

function zeros (num, len, sign) {
  let len_zer = len - (num + '').length,
  num_zer = '';
  for( ; len_zer > 0; len_zer--) {
    num_zer += 0;
  }
  return (sign === undefined || sign === '') ? num_zer + num + '' : sign + num_zer + num +'';
}

document.writeln(zeros(145, 5, '-'));
document.writeln(zeros(33, 4, '+'));
document.writeln(zeros(33, 4)); 

//! Task 24
// 
