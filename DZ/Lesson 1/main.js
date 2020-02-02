//Tasks: Создать 9 переменных по три с let,const,var
/*  var oldFirst = 100,
        oldSecond = 123,
        oldThird = oldFirst + oldSecond;
    const globalFirst = oldFirst,
        globalsecond = oldSecond,
        globalThird = 1250;
    let primary = 100,
        secondary = -100,
        result;
    console.log(result);
*/

// Task_01 Из двух чисел с разной четностью вывести на экран нечетное число.
/*for (let i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
        alert(i);
    }
};
*/

// Task_02 Определить количество дней в году, который вводит пользователь.

//     function isLeapYear (year) {
//     return year % 4 === 0;
// }
//     let year = +prompt("Введи год:");
//     if(isNaN(year)){
//     alert("Нужно ввести целое число.")
// }
//     if(isLeapYear(year)){
//         alert("Год " + year + " - високосный.");
// }   else {
//         alert("Год " + year + " - не високосный.");
// }


//Task_03 Вводяться три разных числа. Найти, какое из них является средним (больше одного, но меньше другого).

/*
let first = prompt(),
    second = prompt(),
    third = prompt(),
    result3;
    if ((second < first && first < third) || (third > first && first < second)){
        result3 = second
    }else if ((first < third && third < second) || (second < third && third < first)){
        result3 = second
    }else if ((first < third && third < second) || (second < third && third < first)){
        result3 = third
    }else{
        result3 = "similar numbers found"
    };
console.log(result3);
*/

//Task_04 Вводятся три целых числа. Определить какое из них наибольшее.


//Task_05 Написать 5 строчек любого нормального кода. Зокомментировать 1 строчку однострочным комментарием и остальные многострочным.


// function user() {
//     userName 
//     alert(console.log());
//     console.log(array = [[123, 434], [324, 4322, 423234])

}()

let user = {
    name: "Pavel",
    age: 31,
};
alert(user.name, user.age);

user.isAdmin = true;
