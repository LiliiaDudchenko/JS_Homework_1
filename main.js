"use strict"



// Homework 1

// 0

let productPrice = 200;
let userSurname = "Ivanov";
let yearIncome = 100000;

const birthday = "01.01.1997";
const password = "123456"
const daysInWeek = 7;

var age = 20;
var email = "test@gmail.com";
var country = "USA";



// 1

let num1 = 9;
let num2 = 4;

if (num1 % 2 != 0) {
    console.log("Число 1: " + num1 + " - нечетное.")
} else console.log("Число 1: " + num1 + " - четное.");

if (num2 % 2 != 0) {
    console.log("Число 2: " + num2 + " - нечетное.")
};




// 2

let year = 1600;

if (((year % 100 == 0) && (year % 400 == 0)) || ((year % 100 != 0) && (year % 4 == 0))) {
    console.log("Количество дней в году " + year + " - 366")
} else console.log("Количество дней в году " + year + " - 365");



// 3
let n1 = 34;
let n2 = 7;
let n3 = 150;

if (n1 > n2 && n1 > n3) {
    if (n2 > n3) console.log(n2);
    else console.log(n3);
} else console.log(n1);


// 4

let number1 = 100;
let number2 = 480;
let number3 = 90;

if ((number1 > number2) && (number1 > number3))
    console.log(number1);
if ((number2 > number1) && (number2 > number3))
    console.log(number2);
if ((number3 > number1) && (number3 > number2))
    console.log(number3);

//5


// let n = "345543";

/*let sum1 = ((Number(n[0]) + Number(n[1]) + Number(n[2])));
let sum2 = ((Number(n[3]) + Number(n[4]) + Number(n[5])));
if (sum1 == sum2) {
    alert("Yes");
} else {
    alert("No");
} */



let monthNum = 10;

if ((3 <= monthNum) && (monthNum < 6)) {
    console.log('Весна')
} else if ((6 <= monthNum) && (monthNum < 9)) {
    console.log('Лето')
} else if ((9 <= monthNum) && (monthNum < 12)) {
    console.log('Осень')
} else if ((monthNum == 12) || (monthNum == 1) || (monthNum == 2)) {
    console.log('Зима')
} else console.log("Месяц введен неверно");