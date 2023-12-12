//* ----------------23. CONST------------------*//
/* since const never changes its value, you can always use const on your code and 'let' only when the value WILL have to change*/
/*remember objects and arrays has memory address as values, declaring const means only the memory address can't change aka redeclare the variable*/

//let can be reassigned
// let a = 1;
// {
//   a = 2;
// }
// console.log(a); //2

// const b = 2;
// b = 3;
// console.log(b); //error assignment to constant variable

//* ----------------25. TYPE COERCION------------------*//
/*convert from one type to another e.g. convert string to number*/
// parseInt() function name to pass string to a integer number, syntax parseInt(the variable here);

// string to number
// let a = "1.1"; //variable "a" is a string
// console.log(typeof a); //string
// console.log(typeof parseInt(a)); //'a' now is a number because of parseInt() function
// parseFloat(a); // pass string to a floating number like 1.1

//toString() converts type to a string
// let a = 1.34; //"a" is a float number
// console.log(typeof a); //number
// console.log(typeof toString(a)); //"a" is now a string

//* ----------------26. == Vs === ------------------*//
/* triple equal signs === tell JS to not convert types before comparing, because type coercion with 2 equal signs == can give bugs*/
//TIP:::: only use == when comparing null and undefined otherwise ALWAYS use ===

// with type coercion
// const a = 1; //typeof number
// const b = "1"; //typeof string
// console.log(a == b); //true (even though one is number and the another string, JS is doing type coercion bcs of both is 1)

// const a = 0; //number
// const b = false; //boolean
// console.log(a == b); //return "true" even though they are not the same type due to type coercion

// without type coercion using ===
// const a = 1;
// const b = "1";
// console.log(a === b); //return false, due to === tells to NOT use the type coercion before comparing the types

// const a = 0; //number
// const b = false; //boolean
// console.log(a === b); //is 'a' TRULY equal to 'b' ? // false

//can use == when comparing null and undefined
// const a = 1;
// const b = null;
// console.log(a == b); //false

//* ----------------27. NaN = not a number ------------------*//
// isNaN(); function to check if this is not a number returns true if it's not a number

// const a = parseInt("abc");
// const b = 2;
// console.log(isNaN(a)); // true , because "a" is not a number even though we tried to pass it to parseInt using another function
// console.log(isNaN(b)); // false, because "b" is a Number (2)
// console.log(a); //NaN

//* ----------------28.ARRAYS ------------------*//
//arrays are defined inside the square brackets [] and each element inside are separated by comma
//** ALSO ARRAY INDEX STARTS AT 0 **

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(array); // (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] (10) is the current array number of elements
// // to access an specific element of the array use square brackets and the index
// console.log(array[0]); //1
// console.log(array[3]); //4
// // adding a new element to the array use function .push()
// array.push(11); // variable.push() adds an element to the end of array, since push is a function need to use parenthesis
// console.log(array); // (11) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// const girl = ["leticia", 26, "programmer"];
// girl.push("yes");
// console.log(girl[3]); //yes

//Pushing a nested array inside another
// const me = [26, 1997];
// me.push(["Leticia", "Azevedo"]); //creating array inside another here
// console.log(me); //(3) [26, 1997, Array(2)]
// console.log(me[2]); // ['Leticia', 'Azevedo'] which is the inner array created and has index of 2

//accessing an array index inside of another array
// const array = [
//   ["hi", "bye"],
//   ["day", "night"],
// ]; //this is a nested array 2 arrays inside a parent array
// console.log(array[0][1]); //return 'bye', first brackets access the array index and the second brackets access the value index inside the array

// //exercise: create array with 5 letters and print out the middle element on the array
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
// const array = [1, 2, 3, 4, "b", [5]];
// console.log(array); //(6) [1, 2, 3, 4, 'b', Array(1)]
// console.log(array.length); //6 return
// array.push(8);
// console.log(array.length); //7

//checking length of an array
// const array = ["hy", "bye", "oi", "tchau"];
// if (array.length > 3) {
//   console.log("Array is bigger than 3");
// }
// console.log(array.length); //4 //array length doesn't starts at 0

//changing the value of an array
// const number = [1, 2, 3];
// const numberNew = number;
// console.log(numberNew); //(3) [1, 2, 3]
// number[0] = 26; //telling that the index 0 of variable number will be 26
// //but also changes variable numberNew bcs they have the same memory address
// console.log(number); //26, 2, 3
// console.log(numberNew); //26,2 ,3

//* -------------------------29. OBJECTS-----------------------------*//
/*objects are defined with curly brackets {key: value} inside goes key and value*/

//declaring without object syntax
// const sex = "Female";
// const age = 23;
// const favNumber = 8;

// declaring same thing as an object
// const person = { sex: "Female", age: 26, favNumber: 8 };
// console.log(person); //{sex: 'Female', age: 26, favNumber: 8}
// console.log(person.sex); //Female , variable.key will return it's value

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
// console.log(person.number); //8
// console.log(person.callFunction); // ƒ () { console.log("Hello") }

//exercise: create object car with properties brand, model and isUsed. Also add a function which logs "Vroom"
// const car = {
//   brand: "BMW",
//   model: "polo",
//   isUsed: true,
//   noise() {
//     console.log("Vroom");
//   },
// };
// car.noise();

//puttting objects and array inside a parent object
// const person = {
//   name: "leticia",
//   hobbies: ["programming", "music", "swimming"], //array
//   address: {
//     street: "primeiro de maio",
//     city: "São Paulo",
//   },
// };
// console.log(person.address.city); //São Paulo, accessing value object inside another object
// console.log(person.hobbies[2]); //swimming, accesing array index inside the object
// variableObject.nameOfKey to access key's value

//changing the value of an object
// const book = {
//   title: "The power of nowhere",
//   author: {
//     name: "Eckhart Tolle",
//     age: 75,
//   },
// };
// //code to give a new value variable.key = new value
// book.title = "The power of now";
// console.log(book.title); //The power of now

//* -------------------------30. REFERENCE VS VALUE--------------------------*//
//each array/object created with bracket notation has a NEW memory address this is their "value", if the array/object is set as value of variable then will share THE SAME memory address
//array and objects reference the same memory address unless they are not related, aka: mentioned as value from another variable

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
// person.sex = "Female"; //easier way to push new key and value
// let person2 = { name: "leticia", age: 26 }; //new memory address even tho same value inside
// person.hobby = "Swimming"; //pushing new key and value only to first variable
// console.log(person); // { name: "leticia", age: 26, sex: "Female" , hobby: "Swimming"}

// const a = [1, 2];
// const elementToAdd = 3;
// add(a, elementToAdd); //array and element paramethers being passed to variables "a" and "elementToAdd"
// function add(array, element) {
//   element = element + 1;
//   array.push(element);
// }
// console.log(a); //[1, 2, 4]

//* -------------------------31. ARRAYS METHODS--------------------------*//
/*methods are functions you can use on the array*/

//forEach logs out each array value separately, or will run code for each value of array
// const a = [1, 2, 3, 4, 5];
// a.forEach((number) => {
//   console.log(number); //logs each separately
// });
// console.log(a); //logs number together on array

//.map() will loop thru each element of the array and return a new array with new values without changing the original
// const a = [1, 2, 3];
//new array that will be mapped
// const newA = a.map((number) => {
//   return number * 2; //asking to return mapping which is the array multyplied by 2
// });
// console.log(a); //[1, 2, 3]
// console.log(newA); //[2, 4, 6]

//.filter() will loop thru each element and filter the values that match with code
// const a = [1, 2, 3, 4, 5, 6];
// const newA = a.filter((number) => {
//   return number > 3; //Code to filter only number higher than 3
// });
// console.log(a); //[1, 2, 3, 4, 5, 6]
// console.log(newA); //[4, 5, 6]

//.find() to find a value inside the array, this function will return only one value which is the first true value
// const a = [2, 4, 6];
// const newA = a.find((number) => {
//   return number > 2;
// });
// console.log(newA); //4 ,return only 4 due to first true value

//.some will return true of false if at least ONE element inside the array match with code given
// .every will do the same but return true if only EVERY element match
// const a = [1, 2, 3, 4, 5];
// const matching = a.some((num) => {
//   return num === 1; //code asking if there is number 1 on the array
// });
// console.log(matching); // true

//.includes() return true or false if array include that value
// const myName = ["Leticia", "Carolina", "Nascimento", "Azevedo"];
// const doesInclude = myName.includes("Carolina");
// console.log(doesInclude); //true

// const a = ["Leticia", "Carolina", "Nascimento", "Azevedo"];
// if (a.includes("Leticia")) {
//   console.log("array has my fxirst name");
// }

//-------- .reduce() METHOD
//!!exercise: get the total of the code below using .reduce method
// const items = [
//   { price: 10 },
//   { price: 20 },
//   { price: 14 },
//   { price: 1 },
//   { price: 6 },
// ];
// //.reduce takes at least 2 paramethers .reduce(first is a function, second is the starting value that will be used in the reducer function) and after reduce the array down to ONE SINGLE VALUE
// //the function inside .reduce() has 2 parameters aswell, the first is the accumulater(total) for the starting value and the second parameter is each individual item on the abject given a name (info to be passed)
// const total = items.reduce((total, item) => {
//   return total + item.price; //whathever return here will be added to "sum" and then do the next loop until items are over
// }, 0 /*starting value as 0*/);
// console.log(total); //51

//* ------------------------- 32. STRING TEMPLATE LITERALS--------------------------*//
/*ways to declare a string on a variable ""  ''  ``*/
// `` this backticks syntax is called template literals or template string

// const a = "Hi";
// const b = "Hello";
// const c = `Hey`;
// console.log(a + " " + b + " " + c); //Hi Hello Hey
// // //easier way to declare same console.log above with backticks
// console.log(`${a} ${b} ${c}`); //Hi Hello Hey , syntax `${any js code or variable to run here}`

//exercise: create 2 variables with your name and combina them together with backticks
// const first = "Leticia";
// const last = "Azevedo";
// console.log(`${first} ${last}`);// Leticia Azevedo, I did put space between the dollar sign to obtain space between variables

//* ------------------------- 33. NEW & THIS keyword--------------------------*//

//when you are creating an object that will be repeated, use first letter as capital for best pratice like the Date object
// const today = new Date(); //this "Date" is essentially an object that is converted to a string before logged out //'new' keyword is a constructor
// console.log(today);
// console.log(today.getFullYear()); //2023

// function person(name, age) {
//   return { name: name, age: age, human: true };
// }
// function NewPerson(name, age) {
//   /*parameters will define base on which function it will construct*/
//   // this = {} calling "this" it's like it creates a new empty object and we will push the key&values to it
//   this.name = name; //'this' keyword reference the current object you are trying to create
//   this.age = age;
//   this.human = true;
//   //(return this) at the end it's like there is (return this) because will return the object "this"
// } //this is a constructor function, because it will construct a new code/object that will be repeated
// const values = person("Luca", 31);
// const newValues = new NewPerson("Leticia", 26); //
// console.log(values); //{name: 'Luca', age: 31, human: true}
// console.log(newValues); //NewPerson {name: 'Leticia', age: 26, human: true}

// function car(model, brand, year) {
//   return {
//     model: model,
//     brand: brand,
//     year: year,
//   };
// }
// function NewCar(model, brand, year) {
//   /*parameters will define base on which function it will construct*/
//   (this.model = model),
//     (this.name = " "),
//     (this.brand = brand),
//     (this.year = year); //() curly brackets here are optional
// }
// //this code below will do the same as the function above but using classes instead (not very common)
// // class NewCar {
// //   constructor(model, brand, year) {
// //     (this.model = model), (this.brand = brand), (this.year = year);
// //   }
// // }
// const newValues = new NewCar("Renegade", "Jeep", 2014); // the keyword "new" creates a new variable using the same paramets as the variable "car"
// const values = car("Model S", "Tesla", 2022);
// console.log(values);
// console.log(newValues);
