// Task 01
// Клонирование массива
// Напишите функцию copyArr(arr), которая копирует массив не изменяя иригинал.

// let vegetables = ['Репа','Капуста','Редиска','Морковка'];
//    function arrayClone(arr) {
//    return arr.slice(0);
//    };
// let arr1 = arrayClone(vegetables);
// document.write(arr1);
// console.log(arr1);

// Task 02
// Преобразование массива в строку
// Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. Элементы массива будут разделены запятой. Получите результат двумя разными методами.
// <==== index.html

// Task 03
// Заполните массив 10-ю иксами с помощью цикла.

// let myArr = [];
//    for(let i = 0; i< 10; i++) {
//       myArr[i] = "x";
//    }
// console.log(myArr);

// Task 04
// Заполните массив числами от 1 до 10 с помощью цикла

// const arr = [];
//    for(let i = 1; i <= 10; i++) {
//       arr.push(i);
//    }
// console.log(arr);

// Task 05
// Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла. Дроби округляйте до двух знаков в дробной части.

// const arr = [];
//    for (let i = 0; i < 10; i++) {
//       arr.push(Math.random().toFixed(2));
//    }
// console.log(arr);

// Task 06
// Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла. 

// let arr = [];
//    for(let i = 0; i < 10; i++) {
//       arr.push(Math.round(Math.random() * 10) + 1);
//    }
// console.log(arr);

// Task 07
// Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти. 

// let arr = [1, 2, 4, -1, -3, 8, 7, 0, 9, -5, 18, -12];
//    for (let i = 0; i < arr.length; i++) {
// 	   if(arr[i] > 0 && arr[i] < 10) {
// 		   console.log(arr[i]);
// 	}
// };

// Task 08
//  Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5. Как только будет найден первый такой элемент - выведите 'Есть' и оборвите цикл. Если такого элемента нет - ничего не выводите.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//    for(let i = 0; i < arr.length; i++) {
//       if(arr[i] === 5) {
//          alert('Есть!!!');
//          break;
//       }
//    };

// Task 09
// Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let sum = 0;
// for(let i = 0; i < arr.length; i++) {
//    sum += arr[i];
// }
// console.log(sum);

// Task 10
// Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива. 

// let arr = [1, 2, 3, 4, 5, 6];
// let sum = 0;
// for(let i = 0; i <arr.length; i++) {
//    sum += arr[i] * arr[i];
// }
// alert(sum);
// console.log(sum);

// Task 11
// Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество)

// let arr = [1, 2, 3, 4, 5, 7, 9];
// let sum = 0;
// for(let i = 0; i < arr.length; i++) {
//    sum += arr[i];
// }
// let result = sum / arr.length;
// alert(result);

// Task 12
// Пользователь вводит многозначное число через promt. Напишите функцию colonOdd(num), которая принимает число num в качестве аргумента и вставляет двоеточие (:) между двумя нечетными числами. Например, если вводится число 55639217, то на выход должно быть 5:563:921:7.

// const num = prompt('Введите число', 55639217);
 
// function colonOdd(num) {
//     let newNum = '';
//     for (let i = 0; i < num.length; i++) {
//         if ( (num[i] % 2 !== 0) && (num[i + 1] % 2 !== 0) && (num[i + 1]) ) {
//             newNum += num[i] + ':';
//         } else {
//             newNum += num[i];
//         }
//     }
//    return newNum;
// }
// document.write(colonOdd(num));

// Task 13
// Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся элементы из массива arr (игнорируйте чувствительность к регистру).
// <====

// Task 14
// Напишите функцию getFirst(array, n), которая возвращает фрагмент массива, содержащий первые 'n' элементов массива.
// <====

// Task 15
// Сумма элементов двух массивов
// Напишите код, который создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов.
// <====

// Task 16 
// Объединить два массива без дублирования элементов

// const alpha = ['a','b','c'],
//       numeric = [1, 2, 3];
// let alphaNumeric = alpha.concat(numeric);

// console.log(alphaNumeric);


// Task 17
// Напишите функцию union, которая возвращает массив состоящий только из уникальных элементов из каждого массива.
// <===

//  Task 18
// Напишите функцию union, которая возвращает массив, содержащий все элементы arr1, которые не находятся в arr2 и наоборот.
// <===

// Task 19
// Напишите функцию compareNumbers(arr), которая возвращает массив, элементы которого отсортированы по убыванию их значений.

// Task 20 
// Напишите функцию sumOfSquares(arr), которая возвращает сумму квадратов значений массива.
// Напишите код, который определяет сумму и произведение значений массива.
//  <===

// Task 21
// Напишите функцию filterFalse(arr), которая очищает массив от ложных (false) значений: false, null, undefined, 0, –0, NaN и "" (пустя строка).
// <===

// Task 22-23
// Переместить элемент массива из одной позиции в другую
// Напишите функцию moveElement(arr,from,to), которая позволяет переместить элемент массива из позиции from в позицию to.
// <===

// Task 24
// Напишите функцию generateNumbers(start, len), которая генерирует массив заданной длины len, заполненный целыми числами, где каждое число больше предыдущего на единицу.
// <===

// Task 25
// Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.
// <===

// Task 26
// Задача. Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.

// const arr = ['a', 'b', 'c'];
//    arr.push(1, 2, 3);
// alert(arr);
// console.log(arr);

// Task 27
// Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

// const arr = [1, 2, 3];
//    arr.reverse(arr);
// console.log(arr);

// Task 28
// Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

// const arr = [1, 2, 3];
//    arr.unshift(5, 6, 7);
// console.log(arr);

// Task 29
// Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

// const arr = ['js', 'css', 'jq'];
// let a = arr.pop();
// console.log(a);

// Task 30
// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

// const arr = [1, 2, 3, 4, 5];
// let sliceArr = arr.slice(2, 5);
// console.log(arr);

// Task 31
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

// const arr = [1, 2, 3, 4 ,5];
//    let a = arr.splice(1, 3, 4);
// console.log(arr);

// Task 32
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

// arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2);
// console.log(arr);

// Task 33
// Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.

// const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9] ]
// console.log(arr [1][0]);

// Task 34
// Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}. Выведите с его помощью слово 'jQuery'.

// let arr = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}
// const obj = {
//   js: ['jQuery', 'Angular'],
//   php: 'hello', css: 'world'
// };
// alert( obj['js'][0] );

// Task 35
// Создайте массив arr = ['a', 'b', 'c']. Выведите его на экран с помощью функции alert.
// arr = ['a', 'b', 'c'];
// alert(arr);

// Task 36
//  С помощью массива arr из предыдущего номера выведите на экран содержимое первого, второго и третьего элементов.
// arr = ['a', 'b', 'c'];
// alert(arr[0]);
// alert(arr[1]);
// alert(arr[2]);

// Task 37
// Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку 'a+b, c+d'.
// const arr = ['a', 'b', 'c', 'd'];
// alert( arr[0] + arr[1] + ', ' + arr[2] + arr[3] );

// Task 38
// Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.
// const arr = [2, 5, 3, 9];
// let result = arr[0] * arr[1] + arr[2] * arr[3];
// alert(result);
// console.log(result);