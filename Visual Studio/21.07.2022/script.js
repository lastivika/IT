// "use strict"
// let num = 5.74534;

// console.log(Math.round( num ));          //заокруглює (5.5=6; 5.3=5)
// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.trunc(num));            //просто забирає після коми
// console.log(num.toFixed(3));             //в дужках вказано скільки має бути знаків після коми
// console.log(0.2 + 0.2 == 0.4);           //true
// console.log(0.2 + 0.1 == 0.3);           //false

// let num = '200.50px';
// let result = parseInt(num)               //робить строку в число без десяткових
// let result = parseFloat(num)             //робить строку в число з десятковими
// console.log(result);

// let num = prompt()
// let result = parseInt(num);
// console.log(result);

//console.log(Math.random())                //дає будь-які числа до 1

// let num = prompt()
// let result = parseInt(num);
// console.log(result)

// let a = Math.random() * 100;
// let b = a.toFixed(0);
// console.log(b); 

// console.log(Math.max(3, 10, 15, 1)) // максимум
// console.log(Math.min(3, 10, 15, 1.5, 1)) // мінімум

//console.log(Math.pow(2, 3)) // степінь

//______________________________________________________
//                   ОБ'ЄКТИ

// let user = new Object();
// let user = {};

// let user = {
//     name: 'Petro',
//     age: 20,
//     developer: true
// }
// console.log(user);
// console.log(user.name);

// user.developer = 'false';
// console.log(user.developer);

// user.woman = 'false';
// console.log(user.woman);



// let user = {
//     name: 'Petro',
//     age: 20,
//     "web developer": true,
//     cats: {
//         name:"Мурка",
//         age: 3,
//         color: "grey"
//     },
//     dogs: {
//         name:"Патрон",
//         age: 8,
//         color: "black"
//     },
//     skills: ["Уважний", "Добрий", "Розумний", {
//         name: 'Ivan',
//         age: 35,
//     }]
// }
// console.log(user);
// console.log(user.skills[0])


// for ( let key in user){
//     console.log(user[key]);
// }

// let store = {
//     vacuum: {
//         name: "Robot",
//         id: "#235",
//     }
// }

// store.vacuum.price = "2999uah";
// store.vacuum.color = "black";
// console.log(store);

// store.vacuum.price = "3uah";
// delete (store.vacuum.color);

// for (let key in store) {
//     console.log(key);
// }


// let num1 = prompt("Перше число");
// let num2 = prompt("Друге число");
// let num11 = parseFloat(num1);
// let num22 = parseFloat(num2);


// function random(min, max) {
//     let random = Math.random() * (max - min) + min
//     console.log(Math.trunc(random))
// }
// random(num11, num22)

