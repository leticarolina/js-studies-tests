//* ---------------------- 22. PROTOTYPES ------------------*//
//Every object in Javascript comes with a prototype, so the objects can inherit properties and methods from a prototype
//when you try to access a property or method on an object (eg. new Date().getFullYear()) JavaScript looks for that property or method in the object itself.
//If it doesn't find it, it looks in the object's prototype, and so on, until it reaches the top of the prototype chain.

// console.log(Object.create({})); //empty object with basic prototypes
// console.log(Object.create(null)); //empty object with NO PROPERTIES

// // Constructor function for creating objects
// function Person(first, last) {
//   //creating 2 new methods to the prototype
//   //this = {}
//   this.first = first;
//   this.last = last;
//   //return this
// }
// // Adding a method called "getFullName" to the prototype of Person
// Person.prototype.getFullName = function () {
//   //   console.log("Hello, I am " + this.first + this.last);
//   console.log(`Hello, I am ${this.first} ${this.last}`);
// };
// // Creating instances of Person
// const person1 = new Person("Leticia", "Azevedo");
// const person2 = new Person("Fernanda", "Santos");
// // Accessing properties and methods
// console.log(person1.last); //Azevedo
// person2.getFullName(); //Hello, I am Fernanda Santos

// //another example
// const currentYear = new Date().getFullYear();
// console.log(currentYear); //2024
// //I have not created a method called getFullYear()but it does return me the current year.
// //The reason for that is the use of prototypes, the build in methods inside the object

const myName = ["Leticia", "Carolina", "Azevedo"];
function concatNames(first, ...last) {
  console.log(last); //(2) ['Carolina', 'Azevedo']
}
concatNames(...myName);
