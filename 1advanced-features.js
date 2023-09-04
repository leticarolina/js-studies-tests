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

//*------------------------- 3. SPREAD AND REST ------------------------*//
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

//combine 2 objects together
// const object = {
//   favoriteFood: "burger",
//   address: {
//     street: "222 s main st",
//     city: "Los Angeles",
//   },
// };
// const person = { name: "Leticia", age: 26 };
// const combined = { ...object, ...person };
// console.log(combined); //turned 2 objects into one

//*------------------------- 4. ENHANCED OBJECT LITERALS ------------------------*//
//regarding an object if the key and variable are the same doesn't need to write it twice like firstName: firstName
//only useful when you want to use variables or variable values to define object property

// const firstName = "Leticia";
// const secondName = "name";
// const age = 26;
// const ageIndex = 1;
// const person = {
//   [secondName]: firstName, //secondName is just a way to refer the variable, the value of mentioned variable will turn to be the key of the object
//   firstName, //with object literals can write firstName only once
//   age,
//   [`age${ageIndex}`]: age, //age1: 26
//   sayHi() {
//     console.log("hi"); //can also write the function directly on the object, no need to declare function keyword
//   },
// };
// console.log(person); //{name: 'Leticia', firstName: 'Leticia', age: 26, age1: 26, sayHi: ƒ}

//*------------------------- 5. DEFAULT PARAMETERS ------------------------*//
//giving default values to the parameters of a function
//not advisable to have default parameters before normal parameters unless good reason to do so, bcs can be quite confusing
//if giving default parameters put them at the end of the list of parameters

//greet and fullName has default parameters
//If we specify the parameter when calling the fucntion it will override the default value
// function greetings(
//   firstName,
//   lastName,
//   greet = "Hello",
//   fullName = `${firstName} ${lastName}`
// ) {
//   console.log(`${greet} ${fullName}`);
// }
// greetings("Leticia", "Azevedo"); //Hello Leticia Azevedo
//if we pass an undefined value to the parameter and it has a default value it will refer to the default

//using objects to default the parameters
// function greetings(lastName, { greet, suffix }) {
//   console.log(`${greet} ${suffix} ${lastName}`); // Hello Mrs Azevedo
// }
// greetings("Azevedo", { greet: "Hello", suffix: "Mrs" }); //destructing the object
//can also set value directly on the parameter object destructed but need to set to an empty object
// function greetings(lastName, { greet = "Hi", suffix = "Mrs" } = {}) {
//   console.log(`${greet} ${suffix} ${lastName}`);
// }gi
// greetings("Azevedo"); //Hi Mrs Azevedo

//*------------------------- 6. NULL COALESCING ------------------------*//
//coalesce = come together to form one mass or whole.
//syntax variable1 ?? variable2
//variable1 is to check weather null or undefined, variable2 is the one that will return in case variable1 result is null/undefined

// function greetings(firstName = "Leticia", lastName) {
//   lastName = lastName ?? "Azevedo"; //syntax If last name return falsie value("" 0) it will return the falsie anyway
//   console.log(`${firstName} ${lastName}`);
// }
// greetings("Leti", null); //Leti Azevedo
// greetings("Leti", undefined); //Leti Azevedo
// greetings("Leti", 0); //Leti 0
// greetings("Leti", " "); //Leti   //empty string is being printed out because it is not null or undefined

//*------------------------- 7. OPTIONAL CHAINING (new feature) ------------------------*//
// It is an easy way to check for null/undefined without having to write it out the long way.
//person != null && person.address vs person?.address
//it's a question mark syntax after a variable/key/fucntion to basically check if we have something called that name on the code to return if not wil;l return undefined instead of throwing error

//object key
// const leti = {
//   name: "Leticia",
//   age: 25,
//   address: {
//     street: "222 s main st",
//   },
// };
// //syntax key?.key?. this question mark after check if key is null or undefined,if so will stop right there and return undefined instead of throwing an error
// //if it's not null/undefined it continues
// function printStreet(parameter) {
//   console.log(parameter?.address?.street); // 222 s main st
// }
// printStreet(leti);

//on functions
// const person = {
//   name: "Leticia",
//   sayHi() {
//     console.log("hi");
//   },
// };
// function sayHi(person) {
//   person?.sayHi?.(); // person?. checks if there is a variable called person, if so continues, sayHi?.() check if this fucntion exist
// }
// sayHi(person);

//on an array
// const person = {
//   name: "Leticia",
//   hobbies: ["swimming", "coding"],
// };
// function printHobby(person) {
//   //checking do we have an object person?. yes
//   //do we have a property called hobbies?. yes
//   console.log(person?.hobbies?.[0]); //swimming
// }
// printHobby(person);

//*------------------------- 8. MAPS ------------------------*//
//to create a map need to declare new Map()
//inside () can create an array, this array can contain other arrays with 2 values the first value will refer to key and second to value
//plus: the key can be anything, regular object the key HAS to be an string

//sintax new Map([])
// const map = new Map([
//   ["Brazil", "BRL"],
//   ["United States", "USD"],
//   [{ Germany: "Deutsch" }, "Euro"], //key {Germany: 'Deutsch'} value Euro
// ]);
// console.log(map); // Map(2)  {'Brazil' => 'BRL', 'USA' => 'USD'} key and value

//mapping from one object to another object
// const user = {
//   name: "leticia",
// };
// const map = new Map([[user, { age: 26 }]]);
// console.log(map); // key: {name: 'leticia'} value: {age: 26}
// //to get a value from the map map.get(key)
// console.log(map.get(user)); //{age: 26}

//maps VS object, building a loop thru an object is way easier with map
//the order on the map is always the same order we add them
// const map = new Map([
//   [1, "A"],
//   [2, "B"],
//   [3, "C"],
//   [4, "D"],
//   [5, "E"],
// ]);
// map.forEach((value) => {
//   console.log(value); //A B C D E
// });
// //usually objects doesn't have a size but with map we can get the size property
// console.log(map.size); //5

// ---------------------------- MAP METHODS
// const map = new Map([
//   [1, "A"],
//   [2, "B"],
//   [3, "C"],
//   [4, "D"],
//   [5, "E"],
// ]);
// //Getting a value from the map map.get(key)
// console.log(map.get(1)); // A
// //adding a new key value to the existent map map.set(key, value)
// map.set(6, "F");
// console.log(map.get(6)); //F
// //Checking if a value exists on the map map.has(key) return true or false
// console.log(map.has(5)); //do we have a value for the key 5? // true
// //deleting a map key/value map.delete(key)
// map.delete(6);
// console.log(map.has(6)); //false
//map.clear() will clear the map and return a brand new empty map

//EXERCISE create the map and get a value from it
// const items = new Map([
//   [1, { id: 1, name: "Test", description: "Desc" }],
//   [2, { id: 2, name: "Test 2", description: "Desc 2" }],
//   [3, { id: 3, name: "Test 3", description: "Desc 3" }],
// ]);
// function getItem(id) {
//   console.log(id.get(2)); //{id: 2, name: 'Test 2', description: 'Desc 2'}
// }
// getItem(items);

//*------------------------- 9. SETS------------------------*//
//sets are extension to arrays, that is always guaranteed to have all items inside of it to be unique

//example checking if a number is on the array ans if it's not add it to the array
//without using sets >
// const uniqueList = [2, 3, 4, 5];
// const newNumber = 1;
// if (!uniqueList.includes(newNumber)) {
//   uniqueList.push(newNumber);
// }
// console.log(uniqueList); // [2, 3, 4, 5, 1]

//using sets , syntax: new Set()
// const set = new Set([1, 2, 3, 3, 3]);
// console.log(set); //{1, 2, 3} sets remove all the duplicated values
// //adding a value to the set, can't be an existent value variable.add(value)
// set.add(4);
// console.log(set); //{1, 2, 3, 4}
// //acessing element inside of a set variable.has(value) returns true or false
// //we cant really get an element from the array set but only check weather the set has that element
// console.log(set.has(1)); //true
// //delete an element from the set variable.delete(element)
// //quite handy since it's difficult to delete an element on a regular array
// set.delete(4);
// console.log(set); //{1, 2, 3}
// //can also get size of the set using set.size
// console.log(set.size); //3
// //clear the whole set using set.clear()
// set.clear();
// console.log(set); //Set(0) {size: 0}

//EXERCISE
//remove all the duplicate elements from the array
function removeDuplicate(array) {
  const set = new Set();
  set.add(array);
  console.log(set);
}

removeDuplicate([1, 2, 3, 4, 3, 2, 5]);
