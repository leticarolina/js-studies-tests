//*------------------------- 5. ES UPDATES ------------------------*//
//JS is constantly changing and updating last one was ES6
//example ES6 update = arrow function, promises, let, const etc
//ES6 Came out in 2015 can call ES2015

//proposals for js updates : https://github.com/tc39/proposals

//*------------------------- 5. POLYFILL (not very common)------------------------*//
//polyfill is one way of using a feature in js that is not implemented yet in the browser we are using
//can be useful only for simple function

// const number = 6;
// //Math.double() is a new feature
// console.log(Math.double(number)); //Uncaught TypeError: Math.double is not a function
//using polyfill to support this
//1. create a new file "polyfill.js" and also add this file to the html head script
//2.inside polyfill.js create the Math function
// Math.double = function (num) {
//     return num * 2;
//   };
//3.can use Math.double() on the original file

//explanation: essentially we just implemented the function ourself

//the polyfill if active will override the original method
// //Math.max() is supported
// const number1 = 5;
// const number2 = 6;
// const higher = Math.max(number1, number2);
// console.log(higher); //6

//If there is a polyfill declared for Math.max it will override
//polyfill.js
// Math.max = function (...num) {
//   return num[0];
// };
// //original file.js
// const number1 = 5;
// const number2 = 6;
// const higher = Math.max(number1, number2);
// console.log(higher); //5 //because the polyfill is actually returning jkust the first number not the heighest one

//when creating a polyfill, good practice to create an if statement for the current methos being created
//so if we dont have thta method already it will run function from polyfill
//creating an if statement for the Math.double()
// if (Math.double == null) {
//   Math.double = function (...number) {
//     return number * 2;
//   };
// }

//*------------------------- 5. TRANSPILE AND BABEL------------------------*//
//babel https://babeljs.io/
//similar to polyfill but it reads your js code and then converts to old js code that is available in every browser

//example
//normal code using null coalescing
// const person = {
//   name: "leti",
//   country: "brazil",
//   address: {
//     city: "los angeles",
//     country: "USA",
//   },
// };
// console.log(person.address.city ?? "There is no city");
// //same code from babel for null coalescing, weird code but will make it every browser compatible
// console.log(
//   (_person$address$city = person.address.city) !== null &&
//     _person$address$city !== void 0
//     ? _person$address$city
//     : "There is no city"
// );

//to use babel it has to be installed on your project
//step by step: https://courses.webdevsimplified.com/view/courses/javascript-simplified-advanced/729106-using-future-javascript/2125731-20-transpile-and-babel

//*------------------------- 5. BUNDLERS ------------------------*//
//Parcel is a bundler that already has babel on it, it make sure when you make changes on the code it automatically refresh
//Snowpack similar to Parcel, just a newer version
//Webpack - very complex a lot of configuration
