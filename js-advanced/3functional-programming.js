//* ----------------------- 30. PURE FUNCTIONS ------------------*//
//pure functions is the building blocks of functional programming
//rules for pure functions:
//1.you only rely on inputs or variables that never change to your function
//2.can't have any side effects, like modifying variables, inputs outside that scope or call an API
//3.impure functions placed on the top and pure functions placed below

//impure function, the array variable does not live in this function
// const array = [1, 2, 3, 4];
// function addElement(e) {
//   array.push(e);
// }
// addElement(5);
// console.log(array);
//pure function bcs is not having any side effects (changinf an external variable)
// const array = [1, 2, 3, 4];
// //creating a new array instead of modifying the variable array
// function addElement(a, element) {
//   return [...a, element];
// }
// console.log(addElement(array, 5));

//EXERCISE: turn this impure function to be a pure function
// const person = {
//   name: "Leticia",
//   friends: ["Fernanda", "Juliano"],
// };
// //impure function
// // function addFriend(friendName) {
// //   person.friends.push(friendName);
// // }
// // addFriend("Thalita");
// // //pure function
// function addFriend(object, friendName) {
//   return { ...object, friends: [...object.friends, friendName] };
// }
// const newPerson = addFriend(person, "Thalita");
// console.log(person.friends); // (2) ['Fernanda', 'Juliano']
// console.log(newPerson.friends); // (3) ['Fernanda', 'Juliano', 'Thalita']

//* ----------------------- 31. IMMUTABILITY ------------------*//
//Immutability is something that cannot be changed

//constant variables are immutable by default
// const number = 3;
// number = 4;
// console.log(number); //Uncaught TypeError: Assignment to constant variable.
//however objects and array are mutable with const, due to reference not value rule

//making an obj immutable using Object.freeze()
//it freezes only first iteration, so name will br freezed to be immutable and friends won't
// const person = Object.freeze({
//   name: "leti",
//   friends: ["ju", "fe"],
// });
// person.name = "leticia"; //name will still leti
// console.log(person);

//changing the object by creating a new object withput changing the original one
// const person = {
//   name: "leticia",
//   address: {
//     street: "sunset blvd",
//     city: "los angeles",
//   },
//   hobbies: ["swimming", "painting"],
// };
// //creating new object that will exactly like the person object, but just changing the street and hobbies
// const newPerson = {
//   ...person,
//   address: { ...person.address, street: "S Main Street" },
//   hobbies: [...person.hobbies, "Running"],
// };
// //original person object will not be affected
// console.log(newPerson.address); //{street: 'S Main Street', city: 'los angeles'}
// console.log(newPerson.hobbies); //(3) ['swimming', 'painting', 'Running']

//* ---------------------- 32. HIGH ORDER FUNCTIONS ------------------*//
//A higher order function is a function that takes one or more functions as arguments, or returns a function as its result like a callback

// // Callback function, passed as a parameter in the higher order function
// function callbackFunction() {
//   console.log("I am the callback function");
// }
// // //higherOrderFunction() is an HOF because we are passing a callback function as a parameter to it.
// function hihgOrderFunction(func) {
//   console.log("I am the high order function");
//   func();
// }
// hihgOrderFunction(callbackFunction);

// //How to Use Some Important BUILD IN Higher Order Functions
//.map() is a high order function because its a function and the element we pass in like "person" is the parameter to the callback function
// const users = [
//   { firstName: "John", lastName: "Doe", age: 25 },
//   { firstName: "Jane", lastName: "Doe", age: 30 },
//   { firstName: "Jack", lastName: "Doe", age: 35 },
// ];
// const names = users.map((person) => {
//   return person.firstName;
// });
// console.log(names); //(3)[("John", "Jane", "Jack")];

//The function inside map is a high order function
// const array = [5, 10, 15];
// const newArray = array
//   .map((number) => {
//     return number * 2;
//   })
//   .map((duplicatedNumber) => duplicatedNumber / 3);
// console.log(newArray); //(3) [3.3333333333333335, 6.666666666666667, 10]

//.filter()
// const users = [
//   { firstName: "John", lastName: "Doe", age: 25 },
//   { firstName: "Jane", lastName: "Doe", age: 30 },
//   { firstName: "Jack", lastName: "Doe", age: 35 },
// ];
// const ages = users.filter((person) => {
//   return person.age > 30;
// });
// //same but different
// const output = users.filter(({ age }) => age > 30);
// console.log(ages);

//.reduce()
// Example  Using reduce() to merge different objects in a single object:
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const obj3 = { e: 5, f: 6 };
// const mergedObj = [obj1, obj2, obj3].reduce((acc, curr) => {
//   return { ...acc, ...curr };
// }, {});
// console.log(mergedObj);

//creating my own high order function
// const people = [
//   { name: "Leticia", friends: ["juliano", "Fernanda", "Thalita"] },
//   { name: "Fernanda", friends: ["Nivia", "Leticia"] },
//   { name: "Alison", friends: ["Evelyn", "Leticia"] },
//   { name: "Thailita", friends: ["Evelyn", "Leticia", "Karla"] },
// ];
// //EXERCISE: Create a function called groupBy() to be a HOF so it will take in a function
// //this function will group by the amount of friends each person has
// function groupBy(array, func) {
//   return array.reduce((grouping, element) => {
//     const key = func(element);
//     if (grouping[key] == null) {
//       grouping[key] = [];
//     }
//     grouping[key].push(element);
//     return grouping;
//   }, {});
// }
// const results = groupBy(people, (person) => person.friends.length);
// console.log(results);

//* ---------------------- 33. FUNCTION COMPOSITION ------------------*//
//Combining multiple functions into one silgle function

// const array = [1, 2, 3, 4, 5];
// function double(element) {
//   return element * 2;
// }
// function addOne(element) {
//   return element + 1;
// }
// //not using function composition
// const newArray = array.map(double).map(addOne);
// console.log(newArray); // (5) [3, 5, 7, 9, 11]
// //using function composition to add double and addOne function together
// function doubleAndAddOne(element) {
//   //calling addOne with paremeter being double function , so double function will run first
//   //its kind of backwards bcs you have to read from inside out
//   return addOne(double(element));
// }
// const newComposition = array.map(doubleAndAddOne);
// console.log(newComposition); //(5) [3, 5, 7, 9, 11]

// //with loadash
// import { compose } from "loadash/fp";
// const doubleAndAdd = compose(addOne, double);

//loadash
//JS library which provides 200+ functions to facilitate web development.

//* ---------------------- 34. CURRYING ------------------*//
//Currying is taking all the arguments from that function and reducing it, preferably down to one
//better using loadash

function sum(a, b) {
  return a + b;
}
console.log(sum(1, 3)); //4
///currying
function sumOne(a) {
  return (b) => {
    return a + b;
  };
}
const result = sumOne(1)(3); //4
console.log(result);
