//* ----------------CONST------------------*//
/* since const never changes its value, you can always use const on your code and 'let' only when the value WILL have to change*/
/*remember objects and arrays has memory address as values, declaring const means only the memory address can't change aka redeclare the variable*/

// let a = 1;
// a = 2;
// console.log(a);

// const b = 2;
// b = 3; //error assignment to const variable
// console.log(b);

//* ----------------TYPE COERCION------------------*//
/*convert from one type to another e.g. convert string to number*/

// string to number
// let a = "1"; //variable "a" is a string
// console.log(typeof parseInt(a));//'a' now is a number
// parseInt(the variable here); // function name to pass string to an integer number
// parseFloat(a); // pass string to a floating number like 1.1

// let a = 1.34; //"a" is a number
// console.log(typeof toString(a)); //"a" is now a string
// toString();//function to pass value to string

//* ---------------- == Vs === ------------------*//
/* triple equal signs === tell JS to not convert types before comparing, because type coercion with 2 equal signs == can give bugs*/

// with type coercion
// const a = 1; //number
// const b = "1"; //string
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
// // console.log(a === b); //is 'a' TRULY equal to 'b?' // false

//* ---------------- NaN = not a number ------------------*//
// isNaN(); function to check if this is not a number

const a = parseInt("abc");
const b = 2;
console.log(isNaN(a)); // true , because "a" is not a number even though we tried to pass it to parseInt using another function
console.log(isNaN(b)); // false, because "b" is a Number (2)
console.log(a);

//* ---------------- ARRAYS ------------------*//
/*arrays are defined inside the square brackets [] and elements inside separated by comma ALSO ARRAY INDEX STARTS AT 0*/

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(array); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// console.log(array[0]); //1 //to access the array use square brackets and the index
// array.push(11); //using variable.push() to add an element to the end of array, since push is a function need to use parenthesis
// console.log(array); //now array goes till 11

// const girl = ["leticia", 26, "single"];
// girl.push("yes");
// console.log(girl[3]);//yes

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
// const number = [1, 2, 3];
// number[0] = 26;
// console.log(number); //26, 2, 3

//* -------------------------OBJECTS-----------------------------*//
/*objects are defined with curly brackets {key: value} inside goes key and value*/

// const sex = "Female";
// const age = 26;
// const favNumber = 8;
// //declaring same thing as an object
// const person = { sex: "Female", age: 26, favNumber: 8 };
// console.log(person); //{sex: 'Female', age: 26, favNumber: 8}
// console.log(person.sex); //return only Female, variable.key will return it's value

//creating functions inside the objects
// const person = {
//   sex: "Female",
//   age: 26,
//   number: 8,
//   callFunction: function () {
//     console.log("Hello");
//   } /*one way to create function*/,
//   callFunction2() {
//     console.log("Hi");
//   } /*easier way to create function*/,
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
//   hobbies: ["programming", "music", "swimming"]//array
//   ,
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
// book.title = "The power of now"; //code to give a new value variable.key = and then give the new value
// console.log(book);

//* -------------------------REFERENCE VS VALUE--------------------------*//
//each array/object created has a NEW memory address this is their "value", if the array/object is set as value of variable then will share THE SAME memory address
//array and objects reference the same code unless they are not related, aka: mentioned as value from another variable

// const a = 1;
// const b = "hi";
// const c = [2, 3];
// const d = c; //this code is making C and D array refer to the same value or memory address so if one change the other will too
// d.push(4); // this code will push "4" to both variables B and C, because when it comes to array/objects they are referencing the same "memory address" 0x01 if one is declared as value of another
// console.log(a);
// console.log(b);
// console.log(c);//[2, 3, 4]
// console.log(d);//[2, 3, 4]

// let a = [1, 2]; //one memory address
// let b = [1, 2]; //another memory address
// console.log(a === b); //return false, because variable a and b was never related so each has it's own memory address
// b.push(3);
// console.log(a); // [1, 2]
// console.log(b); //[1, 2, 3]

// let person = { name: "leticia", age: 26 }; //one memory address
// person = { name: "leticia", age: 26, sex: "Female" }; // pushing new key and value
// let person2 = { name: "leticia", age: 26 }; //another memory address even tho same value inside
// person.hobby = "Swimming"; //pushing only to first variable
// console.log(person); // { name: "leticia", age: 26, sex: "Female" , hobby: "Swimming"}

// const a = [1, 2];
// const elementToAdd = 3;
// add(a, elementToAdd); //array and element paramethers being passed to variables "a" and "elementToAdd"
// function add(array, element) {
//   element = element + 1;
//   array.push(element);
// }
// //console.log(a); //[1, 2, 3]

//* -------------------------ARRAYS METHODS--------------------------*//
/*methods are functions you can use on the array*/

//forEach logs out each array value separately
// const a = [1, 2, 3, 4, 5];
// a.forEach((line) => {
//   console.log(line);
// });
// console.log(a);

//map will loop thru each element of the array and return a new array with new values without changing the original
// const a = [1, 2, 3];
// const newA = a.map((mapping) => {
//   return mapping * 2; //asking to return mapping which is the array multyplied by 2
// });
// console.log(a); //[1, 2, 3]
// console.log(newA);//[2, 4, 6]

//filter will loop thru element and filter the values that match with code
// const a = [1, 2, 3, 4, 5, 6];
// const newA = a.filter((filtering) => {
//   return filtering > 3; //Code to filter only number higher than 3
// });
// console.log(newA); //OUTPUT [4, 5, 6]

//find to find a value inside the array, this fucntion will return only the first true value, example below return only 4
// const a = [2, 4, 6];
// const newA = a.find((n) => {
//   return n > 2;
// });
// console.log(newA);//4

//some will return true of false if at least one element inside the array match with code given
//.every will do the same but return true if only EVERY element match
// const a = [1, 2, 3, 4, 5];
// const isTrue = a.some((odd) => {
//   return odd === 1; //code asking if there is number 1 on the array
// });
// console.log(isTrue); // true

//---------REDUCE METHOD
//!!!!exercise: get the total of the code below using .reduce method
// const items = [
//   { price: 10 },
//   { price: 20 },
//   { price: 14 },
//   { price: 1 },
//   { price: 6 },
// ];
//.reduce takes at least 2 paramethers .reduce(first is a function, second starting value that will be used in the reducer function) and reduce the array down to ONE SINGLE VALUE
//the function inside .reduce() has 2 parameters aswell, the first is the accumulater(total) and the second parameter is each individual item on the abject given a name (info to be passed)
// const total = items.reduce((sum, item) => {
//   return sum + item.price; //whathever return here will be added to "sum" and then do the next loop until items are over
// }, 0/*starting value as 0*/);
// console.log(total);

//includes: return true or false is array include that value
// const myName = ["Leticia", "Carolina", "Nascimento", "Azevedo"];
// const isTrue = myName.includes("Carolina");
// console.log(isTrue); //true

//* -------------------------STRING TEMPLATE LITERALS--------------------------*//
/*ways to declare a string on a variable ""  ''  ``*/

// const a = "Hi";
// const b = "Hello";
// const c = `Hey`;
// console.log(a + " " + b + " " + c); //Hi Hello Hey
// //easier way to declare same console.log above with backticks
// console.log(`${a} ${b} ${c}`); //Hi Hello Hey , syntax `${any js code or variable to run here}`

//exercise: create 2 variables with your name and combina them together with backticks
// const first = "Leticia";
// const last = "Azevedo";
// console.log(`${first} ${last}`);// Leticia Azevedo // this backticks syntax is called template literals or template string

//* -------------------------NEW & THIS keyword--------------------------*//

//when you are creating an object that will be repeated, use first letter as capital for best pratice like the Date object
// const today = new Date();//this "Date" is essentially an object that is converted to a string before logged out //new keyword is a constructor
// console.log(today);

// function person(name, age) {
//   return { name: name, age: age, human: true };
// }
// function NewPerson(name, age) {
//   // this = {} calling "this" it creates a new empty object and we will push the key&values to it
//   this.name = name; //'this' keyword reference the current object you are trying to create
//   this.age = age;
//   this.human = true;
//   //(return this) at the end it will return the object "this"
// } //this is a constructor function, because it will construct a new code/object that will be repeated
// const values = person("Luca", 31);
// const newValues = new NewPerson("Leticia", 26);
// console.log(values); //{name: 'Luca', age: 31, human: true}
// console.log(newValues); //NewPerson {name: 'Leticia', age: 26, human: true}

// function car(model, brand, year) {
//   return {
//     model: model,
//     brand: brand,
//     year: year,
//   };
// }
// function NewCar(
//   model,
//   brand,
//   year /*parameters will defined based on which function it will construct*/
// ) {
//   (this.model = model),
//     (this.name = " "),
//     (this.brand = brand),
//     (this.year = year); //() curly brackets here are optional
// }
//this code below will do the same as the function above but using classes instead (not very common)
// class NewCar {
//   constructor(model, brand, year) {
//     (this.model = model), (this.brand = brand), (this.year = year);
//   }
// }
// const newValues = new NewCar("Renegade", "Jeep", 2014); // the keyword "new" creates a new variable using the same paramets as the variable "car"
// const values = car("Model S", "Tesla", 2022);
// console.log(values);
// console.log(newValues);
