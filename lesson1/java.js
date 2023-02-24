"use strict";
// var number = 15
// var number2 = 30
// // var randomNumber = prompt("Raqam yozing")
// // console.log(randomNumber);
// // console.log(randomNumber * 5);
// // var randomNumber = prompt("dollor hosiobi")
// // console.log(randomNumber);
// // console.log(randomNumber / 11700);
// var randomNumber = prompt("dollor hosiobi")
// console.log(randomNumber);
// console.log(randomNumber * 11350);
// // console.log(number + number2);
// // console.log(number2 / number);
// // console.log(number * number20);
// let apple = "apple"
// apple = "red"
// // let apple = "iphone"
// console.log(apple);
// const box = "redmi note 9 pro"
// console.log(box);
// let eni = prompt('Tort burchka uzunligini aniqlang');
// let boyi = prompt('Tort burchka boyini aniqlang');
// let s = eni * boyi;
// let p = 2 * (Number(eni) + Number(boyi));
// alert(s);
// alert(p);
// console.log(eni);
// console.log(boyi);

// let number = prompt ("number enter")
// let result = Math.pow(3,2)
// alert(result);

// let a=prompt('a somi kiriting');
// let b=Math.PI('b somi kiriting');

// alert(a - b)

// console.log();

// let q=prompt('nechi sonini darajaga kutarish kerak');
// let w=prompt(' shu sonni nechinchi darajaga kutarish kerak');

// alert(q**w)

// let r=prompt('aylanani radiusini kiriting');

// alert(Math.PI*r**2)

// let telNumber = Number(prompt("enter number"));

// if (telNumber % 3 === 0 && telNumber % 5 === 0) {
//     console.log("fizzBazz");
// }
//  else if (telNumber % 5 === 0) {
//     console.log("bazz");
// } else if (telNumber % 3 === 0) {
//     console.log("fizz");
// }


// let text = ""
// if (telNumber % 3 === 0) {
//     text = text + "fizz"
// }
// if (telNumber % 5 === 0) {
//     text = text + "bazz"
// }
// console.log(text);

// let num = prompt("SON: ")





// if (num % 2 == 0 && num < 0) {

//     console.log(`manfiy juft`);


// } else if (num % 2 == 0 && num > 0) {

//     console.log(`musbat juft`);
// }


// if (num % 2 == -1 && num < 0) {
//     console.log(`toq manfiy`);
// }
// else if (num % 2 == 1 && num > 0) {

//     console.log(`toq musbat`);


// } 

// add(11,12);
// function GetData(a) {
//     console.log("message:" + a);
// }
// GetData("Assalomu Aleykum");
// GetData("Va aleykum assalom");

// let a = +prompt(`a=`)
// let b = +prompt(`b=`)
// function add(num1, num2) {
//     console.log(num1 + num2)
// }
// add(34,56);


// declaration function

// function funcName(arg1, arg2, arg3) {
// console.log(arg1);
// }
// funcName("salom")
// 

// express function  es5
// const funcName = function (arg1) {
//     console.log(arg1);
// }
// funcName("salom")

// arrow function es6
// const funcName = (arg1) => {
//     console.log(arg1);
// }
// funcName("salom")
// let num = +prompt("n=")
// let juft =0;
// let toq= 0

// for (let i = 0; i <= num ; i++) {

//     if(i%2===0 ){
//         juft=juft+1

//     }else{

//         toq=toq+1
//     }

// }
// console.log(`juft sonlar: ${juft}`);
// console.log(`toq sonlar: ${toq}`);





let a = {
    name: "Ahmad",
    age: 25,
    address: "tashkent",
}
let newArray = []

for (let key in a) {
    newArray.push([key, a[key]])
}
