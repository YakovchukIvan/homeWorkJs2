"use strict"

// Task 1

// let userName = prompt("Введіть будь ласка ваше імя: ");
// console.log("Вітаю, вас звати: ", userName);
// alert(`Вітаю, вас зват ${userName}`)


// Task 2

// let numberYear = +prompt("Введіть рік вашого народження: ");
// const year = 2023;
// let result = year - numberYear;
// alert(`Вітаю, вам ${result} років:)`)


// Task 3

// let lengthSquare = +prompt("Введіть будь ласка довжину сторони квадрата:");
// let result = lengthSquare * 4;
// alert(`Периметр квадрата вказаной вами довжини буде: ${result}`);


// Task 4

// let circleRadius = +prompt("Введіть будь ласка радіус кола: ");
// const pi = 3.14;
// let result = (circleRadius * circleRadius) * pi;
// alert(`Площа вашого кругу: ${result} см`);


// Task 5

// let question1 = +prompt("Введіть відстань між містами у які ви хочете попасти: ");
// let question2 = +prompt("За скільки часу ви туди хочете потрапити?");
// let result = ~~(question1 / question2);
// alert(`${result}км \nЗ такою швидкість вам потрібно їхати, щоб потрапити у ваше місце за стільки годин ${question2} `);


// Task 6

// let summDolar = +prompt("Введіть суму валюти: ");
// const euro = 1.082;
// let result = (summDolar / euro);
// alert(`Сума в євро буде ${result}`);


// Task 7

// let flashMemory = +prompt("Введіть обсяг флешки в ГБ: ");
// flashMemory = flashMemory * 1000;
// let file = 820;
// let result = ~~(flashMemory / 820);

// alert(`Кількість файлів що вміститься на вашій флешці: ${result}`);


// Task 8

// let summClient = +prompt("Введіть вашу суму: ");
// let priceChocolate = +prompt("Введіть вартість шоколадки: ");
// let result = ~~(summClient / priceChocolate);
// let formula = summClient - (result * priceChocolate);

// alert(`Ви зможете купити ${result} шоколадок і отримаєте ${formula}грн здачі`);


// Task 9

// Ні як не можу зрозуміти суті самого завдання...


// Task 10


// let number = +prompt("Введіть ціле число: ");

// let result = number % 2 == 0 ? "even" : "odd";
// console.log(result);




// Task 1

// Робили на уроці


// Task 2


// let symbol = +prompt("Введіть цифру від 0 до 9: ");


// switch (symbol) {
//     case 0:
//         console.log(")");
//         break;
//     case 1:
//         console.log("!");
//         break;
//     case 2:
//         console.log("@");
//         break;
//     case 3:
//         console.log("#");
//         break;
//     case 4:
//         console.log("$");
//         break;
//     case 5:
//         console.log("%");
//         break;
//     case 6:
//         console.log("^");
//         break;
//     case 7:
//         console.log("&");
//         break;
//     case 8:
//         console.log("*");
//         break;
//     case 9:
//         console.log("(");
//         break;
//     default:
//         console.log("Невірно введено цифру");
// }


// Task 3

// let number = +prompt("Введіть тризначне число");

// let equation = ~~(number / 100 % 10);
// let equation2 = ~~(number / 10) % 10;
// let equation3 = number % 100 % 10;
// console.log(equation);
// console.log(equation2);
// console.log(equation3);

// if (equation == equation2 || equation2 == equation3 || equation == equation3) {
//     console.log("Вітаю, тут є одинакові цифри");
// } else {
//     console.log("Одинакових цифр немає");
// }



// Task 4 

// let year = +prompt("Введіть рік: ");

// let result = (year%4==0 && year%100!=0) || year%400==0 ? "Високосний":"Не високосний";
// console.log(result);


// Task 5

// let number = +prompt("Введіть пятизначне число");
// console.log(number);
// let equation = ~~(number / 10000);
// let equation2 = ~~(number / 1000) % 10;
// // let equation3 = number / 100;
// let equation4 = ~~(number / 10) % 10;
// let equation5 = ~~(number % 10);

// if (equation === equation5 && equation2 === equation4) {
//     console.log("Число є паліндромом");
// } else{
//     console.log("Число не є паліндромом");
// }



// Task 6

// let uan = +prompt("Введіть кількість ваших гривень: ")

// let choice = +prompt("Виберіть цифрою, в яку валюту хочете здійснити обмін \n 1. euro \n 2. usd \n 3. zlota");


// let euro = uan / 43.70;
// let usd = uan / 40.50;
// let zlota = uan / 9.35;


// switch (choice) {
//     case 1:
//         console.log(`${euro.toFixed(2)} EURO`);
//         break;
//     case 2:
//         console.log(`${usd.toFixed(2)} USD`);
//         break;
//     case 3:
//         console.log(zlota.toFixed(2), "PLZ");
//         break;
//     default:
//         console.log("Невірно введена валюта");
// }


// Task 7






