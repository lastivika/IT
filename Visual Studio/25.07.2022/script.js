// _______________________ПОДІЇ______________
// function clickBox(){
//     console.log("Ви клікнули на квадрат")
// }

// const box = document.querySelector('.box');
// console.log(box);

// box.onclick = function (){
//     console.log('Ви клікнули на квадрат');
//     box.style.width = '300px';
// }

// box.addEventListener('click', () => {
//     console.log('Ви клікнули на квадрат');
// })

// box.addEventListener('click', function () {
//     console.log('Ви клікнули на квадрат');
// })

// box.addEventListener('mouseover', function () { // коли наводжу курсор
//    console.log('Ви навели на квадрат');
// })

// box.addEventListener('mouseout', function () { // коли виводжу курсор
//     console.log('Ви навели на квадрат');
//  })

// box.addEventListener('dblclick', function () { // два рази клікаю
//     console.log('Ви навели на квадрат');
//  })

// box.addEventListener('contexmenu', function () { // реагує на натискання правої клавіші
//     console.log('Ви навели на квадрат');
//  })

// box.addEventListener('click', function (event) { // event виводить в консоль детальну ін-фу про клік
//     console.log(event);
// })

// box.addEventListener('click', function (event) { // event.type тип евенту
//     console.log(event.type);
//     console.log('hello');
// })





// const box = document.querySelector('.box');

// box.addEventListener('click', function (event) { // видає box при кліку
//     // console.log(event.type);
//     console.log(event.currentTarget);
// })

// box.addEventListener('mouseover', function (event) { // додає те, що в innerHTML
//     console.log(event.target);
//     box.innerHTML += 'text'
// })


// const box = document.querySelector('.box');
// const count = document.querySelector('#count');
// let num = 0;
// box.addEventListener('mouseover', function (event) {
//     num = ++num
//     count.innerHTML = num;
// })


// const box = document.querySelector('.box');
// box.addEventListener('mouseover', function (event) {
//     //box.classList.add("box-black");    //classList - взаємодіє з класами
//     box.classList.toggle("box-black")
//     if (box.classList.contains('box-black')){
//         console.log('Ваш блок зараз чорний')
//     }
//     else{
//         console.log('Ваш блок зараз червоний')
//     }
// })

// box.addEventListener('mouseout', function (event) {
//     box.classList.remove("box-black");
// })

// let box = document.createElement('div'); //створюється дівка
// box.className = 'box-yellow';            //даємо клас
// document.body.append(box) //додає щось в кінець чогось//box в кінець body
// document.body.prepend(box) //додає щось на початок чогось//box на початок body
// h1.before(box) // додає елемент перед вказаним боксом 
// h1.after(box) // додає елемент після вказаного боксу
// console.log(box)

const text = document.querySelector('.text');
text.addEventListener('click', function(){
    let box = document.createElement('div');
    box.className = "box-yellow";
    document.body.prepend(box)
})