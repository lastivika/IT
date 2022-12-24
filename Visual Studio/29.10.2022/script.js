// function hi(){
//     console.log('hi');
// }

// hi()
// hi.field = "Petro"

// console.log(hi.field)

// function hi(){
//     return 'hi';
// }

// hi()

// let name = function(){
//     console.log('hi')
// }

// function age(){
//     name()
// }
// age()


//функції першого класу

// функції вищого порядку -- функції, які приймають
// в параметрах інші функції або поертають функції

// addEventListener('click', hi());

// function name(){
//     return function () {
//         console.log(a)
//     }
// }


// const fruits = ['apple', 'orange', 'banana', 'lime'];
// let newFruits = []
// for (let i = 0; i < fruits.length; i++){
//     newFruits.push(fruits[i].length);
// }
// console.log(newFruits)

// // ------------------------------

// let newFruits2 = []
// for (let i = 0; i < fruits.length; i++){
//     newFruits2.push(fruits[i].toLocaleUpperCase());
// }
// console.log(newFruits2)

// function createArray(arr, fn){
//         let resArr = []
//         for (let i = 0; i < arr.length; i++){
//             resArr.push(fn(arr[i]));
//         }
//         return resArr
// }
// base function --------------------------------------------------------------

// function nameLength(el){
//     console.log(el)
//     return el;
// }



//----------------------------
// function nameUpperCase(el){
//     return el.toUpperCase()
// }

// let result = createArray(fruits, nameLength);
// console.log(result)
// let result2 = createArray(fruits, nameUpperCase);
// console.log(result2)






// function nameShow(name){
//     console.log(name);
//     return name
// }
// nameShow('Ivan')


// function showMess(name){
//     console.log(name)
// }
// showMess(22);


// function greeting(firstName){
//     return function(lastName){
//         return `Hello, ${firstName} ${lastName}`
//     };
// };

// const testGreeting = greeting('Petro')
// console.log(testGreeting)

// const fullName = testGreeting('Osipov')
// console.log(fullName)

// const fullName = greeting('Petro')('Osipov');
// console.log(fullName)

// let arr = ['Ivan', 'Petro', function hi(h){
//     return function(){
//         return h
//     }
// }]

// console.log(arr[2]('Hello')())




// function question(job){
//     if (job == 'webDev'){
//         return function(name){
//             return `${name}, що таке for?`
//         }
//     }
//     else if (job == 'HR'){
//         return function(name){
//             return `${name}, що ви тут робите?`
//         }
        
//     }
// }

// const developerQuestion = question('webDev');
// console.log(developerQuestion('ivan')) 

// const developerQuestion2 = question('HR')('oleg')
// console.log(developerQuestion2)


// function question(job){
//     const jobSelect = {
//         developer: 'що таке for?',
//         HR: 'що ви тут робите?'
//     }

//     return function (name){
//         return `${name}, ${jobSelect[job]}`
//     }
// }

// const developerQuestion = question('developer');
// console.log(developerQuestion('ivan')) 

// function first(){
//     setTimeout(function(){
//         console.log('hi 1');
//     }, 1000);
// }

// function second(){
//     console.log('hi 2');
// }

// first();
// second();

// function hi(name, callback){
//     console.log(`Привіт ${name}`);
//     callback(name)
// }

// hi(prompt("name"), function(name){
//     console.log(`${name} як справи?`)
// })


// function hi(name, callback){
//     console.log(`Привіт ${name}`);
//     callback(name)
// }

// function how(name){
//     console.log(`${name} як справи?`)
// }
//  hi (prompt("name"),how)