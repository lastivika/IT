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





function show(num, num2){
    console.log(this)
    function sum(){
        console.log(this)

        return this.num + this.hum2
    }
    console.log(sum())
}
show(2, 3)