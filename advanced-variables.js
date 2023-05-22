//* ----------------CONST------------------*//
/* since const never changes its value, you can always use const on your code and 'let' only when the value WILL have to change*/

// let a = 1;
// a = 2;
// console.log(a);

//* ----------------TYPE COERCION------------------*//
/*convert from one type to another e.g. convert string to number*/

// string to number
// let a = "1"; //variable "a" is a string
// console.log(typeof parseInt(a));//'a' now is a number
// parseInt(the variable here); // function name to pass "a" to an integer number
// parseFloat(a); // pass "a" to a floating number like 1.1

// let a = 1.34; //"a" is a number
// console.log(typeof toString(a)); //"a" is now a string
// toString();//function to pass something to string

//* ---------------- == Vs === ------------------*//
/* triple equal sign === to tell JS to not convert types before comparing, because type coercion can give bugs*/

// with type coercion
// const a = 1;
// const b = "1";
// console.log(a == b); //true (even though one is number and the another string, JS is doing type coercion)

// const a = 0; //number
// const b = false; //boolean
// console.log(a == b); //return "true" even though they are not the same type due to type coercion

// without type coercion using ===
// const a = 1;
// const b = "1";
// console.log(a === b); //return false, due to === tells to NOT use the type coercion before comparing the types

// const a = 0; //number
// const b = false; //boolean
// // console.log(a === b); //is a equal to b? // false

//* ---------------- NaN = not a number ------------------*//
// isNaN(); function to check if this is not a number

// const a = parseInt("abc");
// const b = 2;
// console.log(isNaN(a)); // true , because "a" is not a number even though we tried to pass it to parseInt using another function
// console.log(isNaN(b)); // false, because "b" is a Number (2)

//* ---------------- ARRAYS ------------------*//
/*arrays are defined inside the square brackets [] and elements inside separated by comma ALSO ARRAY INDEX STARTS AT 0*/

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(array); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// console.log(array[0]); //1 //to access the array use square brackets and the index
// array.push(11); //using variable.push() to add an element to the end of array, since push is a function need to use parenthesis
// console.log(array); //now array goes till 11

// const us = [26, 31];
// us.push(["Leticia", "Luca"]); //creating array inside another here
// console.log(us);
// console.log(us[2]); //return ['Leticia', 'Luca'] which is the inner array created and has index of 2

// const array = [
//   ["hi", "bye"],
//   ["day", "night"],
// ]; //this is a nested array
// console.log(array[0][1]); //return 'bye', first brackets access array and the second brackets access the element index inside the array

//exercise: create array with 5 letters and print out the middle element on the array
// const letters = ["a", "b", "c", "d", "e"];
// console.log(letters[2]); //return "c", the name of the variable[index of element] will print out the element

//exercise: print out the number 4, 8 and 11 from code below
// const array = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
// ];
// console.log(array[0][3]); //4
// console.log(array[1][2]); //8
// console.log(array[2][0]); //11

//getting the lenght of array
// const array = [1, 2, 3, 4, 5];
// console.log(array.length); //5 return

//channging the value of an array
const number = [1, 2, 3];
number[0] = 26;
console.log(number); //26, 2, 3

//* -------------------------OBJECTS-----------------------------*//
/*objects are defined with curly brackets {key: value} inside goes key and value*/

// const sex = "Female";
// const age = 26;
// const favNumber = 8;
//declaring same thing as an object
// const person = { sex: "Female", age: 26, favNumber: 8 };
// console.log(person); //{sex: 'Female', age: 26, favNumber: 8}
// console.log(person.sex); //Female variable.key will return it's value

//creating functions inside the objects
// const person = {
//   sex: "Female",
//   age: 26,
//   number: 8,
//   callFunction: function () {
//     console.log("Hello");
//   } /*one way to create fucntion*/,
//   callFunction2() {
//     console.log("Hi");
//   } /*easier way to create fucntion*/,
// };
// person.callFunction(); //Hello
// person.callFunction2(); //Hi

//exercise: create object car with properties Make, model and isUsed. Also add a function which logs "Vroom"
// const car = {
//   brand: "BMW",
//   model: "polo",
//   isUsed: true,
//   noise() {
//     console.log("Vroom");
//   },
// };

//puttting objects and array inside another object
// const person = {
//   name: "leticia",
//   hobbies: ["programming", "music", "swimming"],
//   address: {
//     street: "primeiro de maio",
//     city: "São Paulo",
//   },
// };
// console.log(person.address.city); //São Paulo, accessing value object inside another object
// console.log(person.hobbies[2]); //swimming, accesing array index inside the object

//channging the value of an object
// const book = {
//   title: "The power of nowhere",
//   author: {
//     name: "Eckhart Tolle",
//     age: 75,
//   },
// };
// book.title = "The power of now"; //code to give a new value variable.key and then give the new value
// console.log(book);
