"use strict"

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


// let number = +prompt("Введіть суму до оплати та подивіться яку знижку ви отримаєте: ");

// let discount1 = (number / 100) * 3;
// let discount2 = (number / 100) * 5;
// let discount3 =(number / 100) * 7;
// console.log(discount1.toFixed(2));
// console.log(discount2.toFixed(2));
// console.log(discount3.toFixed(2));



// if (number >= 200 && number < 300) {
//     console.log(`Ваша знижка буде ${discount1.toFixed(2)} грн, повна сума до сплати ${(number - discount1)} грн`);
// } else if (number >= 300 && number < 500) {
//     console.log(`Ваша знижка буде ${discount2.toFixed(2)} грн, повна сума до сплати ${(number - discount2)} грн`);
// } else if (number >= 500 && number < 1000) {
//     console.log(`Ваша знижка буде ${discount3.toFixed(2)} грн, повна сума до сплати ${(number - discount3)} грн`);
// } else {
//     console.log("Нажаль для вас знижки не буде :(");
// }


// Task 8


// let circle = +prompt("Введіть довжину кола: ");
// let quadrate = +prompt("Введіть периметр квадрата: ");

// let equation = quadrate / 4;


// if (circle < equation) {
//     console.log("Це коло може помістится в квадрат");
// } else {
//     console.log("Не поміститься в квадрат");
// }


// Task 9 


// let questionCity = +prompt("Введіть цифру біля якої на вашу думку правильна відповідь \n\nОбласний центр Волинської області: \n 1.Ковель \n 2.Шацьк \n 3.Луцьк");
// let questionMountain = +prompt("Введіть цифру біля якої на вашу думку правильна відповідь \n\nНайвища гора України: \n 1.Холм Слави \n 2.Говерла \n 3.Єврейка");
// let questionRivne = +prompt("Введіть цифру біля якої на вашу думку правильна відповідь \n\nНайпопулярніше місце відпочинку рівнян: \n 1.Лебединка \n 2.Злата Плаза \n 3.Екватор");

// let points = 0;

// switch (questionCity) {
//     case 3:
//         points+=2;
//         break;
// }
// switch (questionMountain) {
//     case 2:
//         points+=2;
//         break;
// }
// switch (questionRivne) {
//     case 1:
//         points+=2;
//         break;
// }

// console.log(points);


// Task 10


let day = +prompt("Write the date: ");
let month = +prompt("Write the month: ");
let year = +prompt("Write the year: ");


// let February = 2; // 28/29 днів

// let January = 1; // 31 днів
// let March = 3; // 31 днів
// let May = 5; // 31 днів
// let July = 7; // 31 днів
// let August = 8; // 31 днів
// let October = 10; // 31 днів
// let December = 12; // 31 днів

// let April = 4; // 30 днів
// let June = 6; // 30 днів
// let September = 9; // 30 днів
// let November = 11; // 30 днів


let result = (year%4==0 && year%100!=0) || year%400==0 ? 1 : 2;
console.log(result);


if (day > 31 || day < 1 || month < 1 || month > 12 || year < 1){ // Вибиває помилку, коли невірно введена дата
    console.log("Невірно введена дата");
} else if (month === 4 || month === 6 || month === 9 || month === 11 && day === 31){
    console.log("Невірно введена дата"); // Вибиває помилку коли стоїть 31 число в парному місяці

// *********************

} else if (day === 31 && month === 12) { // Переключає на новий рік
    day = 0;
    month = 0;
    day++;
    month++;
    year++;
    console.log(`${day}.${month}.${year}`); // Кінець коду що переключає на новий рік

// *********************

} else if (day <= 28 && month === 2 && result === 1) { // Оброблення лютого, високосний чи не високосний
    day++;
    console.log(`${day}.${month}.${year}`);
} else if(day === 28 && month === 2 && result === 2) {
    day = 0;
    day++;
    month++;
    console.log(`${day}.${month}.${year}`);
} else if (month === 2 && day === 29 && result === 1) {
    day = 0;
    day++;
    month++;
    console.log(`${day}.${month}.${year}`);
} else if (month === 2 && day === 29 && result === 2) {
    console.log(`Невірно введена дата`); // Кінець оброблення лютого

// *********************

} else if (day < 30 && month === 4 || month === 6 || month === 9 || month === 11) { // Оброблення парних місяців: квітень, червень, вересень, листопад
    day++;
    console.log(`${day}.${month}.${year}`); // Важливо щоб рівняння з днем було перше рівнянь місяців, бо якщо перші будуть місяці, день не буде братися до уваги
} else if (day > 30) {
    day = 0;
    day++;
    month++;
    console.log(`${day}.${month}.${year}`); // Кінець оброблення парних місяців

// *********************

} else if (day < 31) { // Оброблення не парних місяців: січень, березень, травень, Липень, Серпень, Жовтень, Грудень
    day++;
    console.log(`${day}.${month}.${year}`);
} else if (day === 31) {
    day = 0;
    day++;
    month++;
    console.log(`${day}.${month}.${year}`); // Кінець оброблення не парних місяців
}