// //  Primitive

// //  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// // const bigNumber = 3456543576654356754n



// // Reference (Non primitive)

// // Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// ++++++++++++++++++++++++++++++++++++++++++

// stack(primitive), Heap(Non-Primitive)

let myYoutubename = "anuragtrivedidotcom"

let anothername = myYoutubename
anothername = "abhaytrivedi"

console.log(myYoutubename);
console.log(anothername);

let username = {
    email : "anuragtrivedi545@gamil.com",
    upiId : "anuragtriv"

}

let anuragisuser = username
anuragisuser.email = "anshtrivedi545@gamil.com"

console.log( anuragisuser.email);
console.log( username.email);


