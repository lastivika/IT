"use strict"

// let names = ['Ivan', 'Petro', 'Oleg'];

// *push додає елемент в кінець масиву
// shift видаляє елемент з початку
// *pop видаляє останній елемент
// unshift додає елемент на початку
// *-найшвидші

// console.log(names);

// names.push("Stepan");
// console.log(names);

// names.shift();
// console.log(names);

// names.unshift("Apple");
// console.log(names);

// names.pop();
// console.log(names);
// console.log(names.pop());

// names.push('Orange', 'Pear');
// console.log(names);

// let matrix = [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14]
// ];
// console.log(matrix[2][2]);

// let names = ['Ivan', 'Petro', 'Oleg'];

// delete names[1];
// console.log(names);
// console.log(names[1]);

// names.splice(0, 2, "Apple", "Orange");
// console.log(names);


// let names = ['Ivan', 'Petro', 'Oleg', 'Petro', 'Oleg'];
// names.splice(1, 2);
// console.log(names);

// names.splice(1, 2, "Apple");
// console.log(names);

// console.log(names);
// console.log(names.slice(1, 4));

// let colors = ['red', 'blue', 'yellow'];
// let result = names.concat(colors);
// console.log(result);

// result = result.concat([1, 5]);
// console.log(result);

//concat - додає(об'єднує)

// let colors = ['Red', 'Blue', 'Yellow'];
// let result = names.concat(colors);
// console.log(result);

// result = result.concat([1, 5]);
// console.log(result);

// // console.log(result.indexOf('red'));

// // result[5] = "green"
// // console.log(result);

// // console.log(result.lastIndexOf("Petro"));
// // console.log(result.includes("red"));
// // console.log(result.includes("violet"));

// console.log(result.sort());


// let num = [1, 4, 12, 3, 5, 6, 7];

// function fix(a, b) {
//     if (a > b) return 1;
//     if (a === b) return 0;
//     if (a < b) return -1;
// }
// console.log(num.sort(fix));

// let a = 'ivan';
// console.log(a);
// console.log(a.toLocaleUpperCase());

// let b = 'IVan';
// console.log(b);
// console.log(b.toLocaleLowerCase());

// let colors = 'red, blue, yellow';
// let a = colors.split(',', 2);
// console.log(a);

// let names = ['Ivan', 'Petro', 'Oleg', 'Petro', 'Stepan'];
// console.log(names);
// let str = names.join(', ');
// console.log(str);

// document.write(`<h1> ${str} </h1>`);

// let num = [1, 2, 3, 4, 5];

// num.reverse()
// console.log(num);

// names.forEach(function(item, i, names){

//     console.log(`${item} має індекс ${i} і виводиться з масиву ${names}`)
// })

// names.forEach(function(name){

//     console.log(`${name}`)
// })


// let names = ['Stepan', 'Petro', 'Nicole', 'Olga'];
// console.log(names);

// names.forEach(function(nickName){
//     if(nickName == "Nicole"){
//         const i = nickName
//         names.splice(names.indexOf("Nicole"), 1)
//         console.log(`${i} - deleted`)
//     }
// })
// console.log(names)