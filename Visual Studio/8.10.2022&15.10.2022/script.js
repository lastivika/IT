// // es5
// function User(name, id){
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function(){
//         console.log('Hi '+ this.name);
//     }
// }

// let oleg = new User("Oleg", 30);
// let petro = new User("Petro", 40);

// console.log(oleg);
// console.log();

// petro.hello();
// oleg.hello();





// class User{
//     constructor(name, id){
//         this.name = name;
//         this.id = id;
//         this.human = true;
//     }

//     hello(){
//         console.log(`'HI ${this.name}`)
//     }
// }





// function show(num, num2){
//     console.log(this)
//     function sum(){
//         console.log(this)

//         return num + num2
//     }
//     console.log(sum())
// }
// show(2, 3)




// let user = {
//     name: "Oleg",
//     age: 24,
//     sayHi(){
//         console.log('Hello ' + this.name)
//     }
// }

// console.log(user)
// user.sayHi()
// console.log(user.name)





// let user = {
//     name: "Oleg",
//     age: 24,
//     sayHi(){
//         console.log('Hello ' + this.name)
//     }
// }







// function calc(a, b){
//     return a + b
// }

// console.log(calc(2,5));
// console.log(calc(12, 15));







// class Rectangle{
//     constructor(height, width, color){
//         this.height = height;
//         this.width = width;
//         this.color = color;
//     }

//     calcArea(){
//         return this.height * this.width + this.color;
//     }
// }

// const square = new Rectangle(5, 5, " red");
// console.log(square.calcArea())

// const square2 = new Rectangle(6, 6, " blue");
// console.log(square2.calcArea())




// let fruits = ['apple', 'orange', 'tomato'];
// let user = ['Ivan', 'Petro', 'Oleg'];
// let colors = ['Red', 'Blue', 'Green']

// let result = [...fruits, ...user, ...colors, 55, "square"];


// console.log(result)
// //spread






// localStorage.setItem("name", "petro")
// console.log(localStorage.getItem("name"));
// localStorage.removeItem("name");
// localStorage.clear();


// window.addEventListener("DOMContentLoaded", function(){
//     const checkbox = document.getElementById('checkBox');
//     if (this.localStorage.getItem("isChecked") === "true"){
//         checkbox.checked = true;
//     }
//     console.log(checkbox);
//     checkbox.addEventListener("click", function (){
//         console.log('ok')
//         localStorage.setItem("isChecked", true)
//     })
//     if (checkbox.checked == true){
//         document.body.style.backgroundColor = "red";

//     }
// })








// JSON - java script object notation, для того щоб завантажувати інфу на сервер

// let options = {
//     width: 1200,
//     height: 600,
//     background: 'blue',
//     font: {
//         size: '22px',
//         fontWeight: 'bold'
//     }
// }

// console.log(options); //повноцінний об'єкт

// let json = JSON.stringify(options);

// let resultJson = JSON.parse(json);
// console.log(json)
// console.log(JSON.stringify(options)); //строка


// ajax - asynchronous java script and xml, для швидкого інтерфейсу без оновлення всієї сторінки


// get - отримує данні
// post - надсилає данні на сервер(приховані від користувча)
// put - для оновлення вже існуючих данних на сервері
// delete - видаляє ресурс, данні 
//head - перевіряє, зчитує певні метаданні, схоже на get



//status server = 
// 1) Інформаційні 100-199
// 2) Успішні 200 - 299
// 3) Перенаправлення на редирект 300-399
// 4)  Клієнтські помилки 400 - 499
// 5) Серверні помилки 500-599


// readyState 0 - метод open ще не викликаний
// readyState 1 - метод open викликаний
// readyState 2 - метод send викликаний
// readyState 3 - метод responseText часткові дані
// readyState 4 - все виконано успішно



const inputGrn = document.getElementById('grn');
const inputUsd = document.getElementById('usd');

inputGrn.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    //request.open(method, url, async,login, pass);
    request.open('GET', 'currency.json'); //http запит
    request.setRequestHeader('Content-type', 'application/json; charset=uft-8')
    request.send();


    // responseText = response - відповідь сервера
    // readyState - готовність сервера

    request.addEventListener('readystatechange', function () {
        if (request.readyState === 4 && request.status === 200) {
            let data = JSON.parse(request.response)
            console.log(data)
            inputUsd.value = inputGrn.value / data.usd
        }
    })
    //http
})

