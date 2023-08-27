//*--------------------- 2. DESTRUCTING ---------------------*//
//destruct === getting code inside array/object
//another way to get elements from an array/object
//syntax const [elementsDestructed] = variableToDestruct

//array destructing
// const array = ["A", "B", "C"];
// //normal way to get value by tagging index
// const first = array[0];
// const second = array[1];
// // destructing the aarray, giving variable names to them and pushing a new element at the end
// const [first, second, third, fourth = "D"] = array; // The [] are like giving a variable name to each item of array
// // can also do skipping to declare an array index
// // const [first, , third] = array;
// console.log(`${first} ${second} ${third} ${fourth}`); //A B C D
// console.log(first, third); //A C

// function addAndMultiply(a, b) {
//   // this function returns an array
//   return [a + b, a - b]; // [3, 1]
// }
// //to get array from the function
// const results = addAndMultiply(2, 1);
// console.log(results); // [3, 1]
// //redeclaring same function and destructing the array to get individual element
// const [first, second] = addAndMultiply(1, 1);
// console.log(first); // 2

//object destructing
// const object = {
//   name: "Leticia",
//   age: 26,
//   favoriteFood: "burger",
//   address: {
//     street: "222 s main st",
//     city: "Los Angeles",
//   },
// };
// //normal way to get value by tagging key
// // const firstName = object.name;
// // console.log(firstName); // Leticia
// //changing the object key name to firstName
// const { name: firstName, favoriteFood } = object; //renaming "name" key
// console.log(firstName); // Leticia
// //destrcuting a nested object, (object descructing doesnt have to be in the same order like array, just have to refer to the key)
// const {
//   address: { city: angelsCity, zipcode = "90012", street }, //renamed the key city and pushed a new key:value
// } = object; //{address} will return an object, to get an element inside the nested object need to deconstruct key inside nested object too
// console.log(angelsCity, zipcode); //Los Angeles 90012

// function addAndMultiply(a, b) {
//   return { sum: a + b, sub: a - b };
// }
// const values = addAndMultiply(2, 1); //this return the object
// console.log(values); // {sum: 3, sub: 1}
// const { sum: soma, sub: subtrair } = addAndMultiply(2, 2); //{} destruct the object that the function is returning
// console.log(soma); // 4

//EXERCISE
//create a function that will take full name and convert to individual name
// function fullNameToIndividual(fullname) {
//     return fullname.spli(" ") //this will split in an array the whole string on every space
//   return Array.from(fullname); // this will return an array but splitted into each letter not word
// }

// const name = fullNameToIndividual("Leticia Azevedo");
// console.log(name);
// const [first, middle, last = "Azevedo"] = fullNameToIndividual(
//   "Leticia Carolina Azevedo"
// );
// console.log(first); //Leticia
//object version f exerciseo
// function fullNameToIndividual(fullname) {
//   const [first, middle, last] = fullname.split(" ");
//   return {
//     firstName: first,
//     middle: middle,
//     lastName: last,
//   };
// }
// const { firstName } = fullNameToIndividual("Leticia Carolina Azevedo");
// console.log(firstName); //Leticia

//------- clean destructing code
//destructing an object without having to create one
// function addAndMultiply(options) {
//   const a = options.a;
//   const b = options.b;
// //cleaning code above with same output
// const { a, b } = options;
//   return [a + b, a - b];
// }
// const values = addAndMultiply({ a: 2, b: 1 }); //destrcuting before declaring?
// console.log(values); // [3, 1]
// //can go even further and destruct 'values' before
// const [sum, sub] = addAndMultiply({ a: 2, b: 1 });
// console.log(sub); //1

//cleaning code above with same output
// function addAndMultiply({ a, b }) {
//   return [a + b, a - b];
// }
// const [sum, sub] = addAndMultiply({ a: 2, b: 1 });
// console.log(sum, sub); //3 1

//*------------------------- 2. SPREAD AND REST ------------------------*//
//rest operator is 3 dots that goes before the last parameter of a function
//every value added to the function that has parameters with ... will be turned into an array ...parameter: any[]

// function multiplyAndAdd(multiplier, ...add) {
//   console.log(multiplier); //2
//   console.log(add); //(3) [1, 2, 3]
//   return multiplier * add.reduce((base, sum) => base + sum, 0);
// }
// const values = multiplyAndAdd(2, 1, 2, 3); //12 will do the sum and then multiply last
// console.log(values);

// --------- SPREAD OPERATOR
//spread operator take all index of array and convertes it to individual values

// const numberArray = [2, 1, 3, 1];
// function multiplyAndAdd(multiplier, ...add) {
//   console.log(multiplier); //2
//   console.log(add); // (2) [1, 3, 1]
//   return multiplier * add.reduce((base, sum) => base + sum, 0);
// }
// multiplyAndAdd(...numberArray); //passing numberArray as parameters, will take first index to first parameters and so on. If there is a rest operator will take all last indexes as last parameter
// const newArray = [...numberArray]; //copying an existent array, exact same array as const numberArray but a brand new one
// newArray.push("hi"); //will only push to newArray  and not numberArray
// console.log(newArray); //[2, 1, 3, 1]

// const myName = ["Leticia", "Nascimento", "Azevedo"];
// function concatNames(first, ...last) {
//   //   console.log(last); // ['Nascimento', 'Azevedo']
//   console.log(`${first} ${last}`); //Leticia Nascimento,Azevedo
// }
// concatNames(...myName); //using spread operator , will spread index of array according to parameters

//converting smt similar to an array into an array, example with Nodelist
// const divs = document.querySelectorAll("div");
// console.log(divs); //NodeList(5) [div, div, div, div, div]
// // divs.map((number) => {
// //   console.log(number); //Uncaught TypeError: divs.map is not a function
// // });
// const divsArray = [...divs];
// console.log(divsArray); //(5) [div, div, div, div, div]
// divsArray.map((number) => {
//   console.log(number); //return each div separetely
// });
// //can also convert Nodelist to an array straight from the document.querySelector
// const div = [...document.querySelectorAll("div")];
// console.log(div); //(5) [div, div, div, div, div]

// const array = ["a", "b", "c", "d", "e"];
// const [first, second, ...rest] = array;
// console.log(rest); //['c', 'd', 'e']

//REST OPERATOR OBJECT ORIENTED
// const object = {
//   name: "Leticia",
//   age: 26,
//   favoriteFood: "burger",
//   address: {
//     street: "222 s main st",
//     city: "Los Angeles",
//   },
// };
// const { name: firstName, age, ...rest } = object;
// console.log(firstName, age); //Leticia 26
// console.log(rest); // {favoriteFood: 'burger', address: {…}}
// const object2 = { ...object, hobbie: "read" }; //cloned the object to a new one with new memory address
// object2.name = "Fernanda";
// object2.age = 29;
// console.log(object2);

const object = {
  favoriteFood: "burger",
  address: {
    street: "222 s main st",
    city: "Los Angeles",
  },
};
const person = { name: "Leticia", age: 26 };
const combined = { ...object, ...person };
console.log(combined); //turned 2 objects into one
