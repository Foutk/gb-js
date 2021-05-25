// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2  это префиксная форма, она возвращает новое значение
// d = b++; alert(d);           // 1  это постфиксная форма, она возвращает старое значение
// c = (2+ ++a); alert(c);      // 5  т.к. a = 2 (мы выяснили это из строки 2 это префиксная форма; ++a => a = a + 1), тогда получается c = (2+(2+1))=5;
// d = (2+ b++); alert(d);      // 4  т.к тут постфиксная форма b++, то b=1, d=(2+1)=3;
// alert(a);                    // 3  во время всех дейсвий мы использовали 2 раза ++a, получается увеличели на два раза
// alert(b);                    // 3  во время всех дейсвий мы использовали 2 раза b++, получается увеличели на два раза



// 2. Чему будет равен x в примере ниже?
// var a = 2;
// var x = 1 + (a *= 2);
// x = 1 + (a * 2);
// x = 1 + (2 * 2);
// x = 1 + 4;
// x = 5;
// ответ:5


// 3.Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
// var a = +prompt('введите число a');
// var b = +prompt('введите число b');
// if (a >= 0 && b >= 0) {
//     alert(a - b);
// } else if (a < 0 && b < 0) {
//     alert(a * b);
// } else {
//     alert(a + b);
// }


// .4

// var a = +prompt('введите любое число от 0 до 15');
// if (a < 0 || a > 15) {
//     alert('Неверное число!');
// } else {
// switch (a) {
//     case 1:
//         alert('ваше число 1');
//    

//     case 2:
//         alert('ваше число 2');
//         
//     case 3:
//         alert('ваше число 3');
//         
//     case 4:
//         alert('ваше число 4');
//        
//     case 5:
//         alert('ваше число 5');
//         
//     case 6:
//         alert('ваше число 6');
//         
//     case 7:
//         alert('ваше число 7');
//         
//     case 8:
//         alert('ваше число 8');
//         
//     case 9:
//         alert('ваше число 9');
//         
//     case 10:
//         alert('ваше число 10');
//         
//     case 11:
//         alert('ваше число 11');
//         
//     case 12:
//         alert('ваше число 12');
//         
//     case 13:
//         alert('ваше число 13');
//         
//     case 14:
//         alert('ваше число 14');
//         
//     case 15:
//         alert('ваше число 15');
//         
// }}


// 5.

// var a = 1;
// var b = 2;

// function raz (a,b) {
//     return a - b;
// }

// function sum (a,b) {
//     return a + b;
// }

// function del (a,b) {
    // if (b != 0)
//     return a / b;
// return 0;
// }

// function mult (a,b) {
//     return a * b;
// }


// .6

// function mathOperation(arg1, arg2, operation) {
//     switch (operation) {
//         case 'сумма':
//             return arg1 + arg2;
//             


//         case 'разность':
//             return arg1 - arg2;
//             

//         case 'умножение':
//             return arg1 * arg2;
//             

//         case 'деление':
//             return arg1 / arg2;
//             
//     }
// }


// .7

// alert(null > 0);  // false т.к. не строгое сравнение делает null = 0, 0 > 0 false
// alert(null == 0);  // false null только равен undefined
// alert(null >= 0)  // true т.к. null может быть 0, поэтому  true

.8

// function power(val, pow) {
//     if (val == 0) {
//         return 0;
//     }
//     if (pow == 0) {
//         return 1;
//     }
//     if (pow < 0) {
//         return (power(1 / val, -pow));
//     } else {
//         return (val * power(val, pow - 1));
//     }
// }

