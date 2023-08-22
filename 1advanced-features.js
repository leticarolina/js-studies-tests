//*---------------- 2. DESTRUCTING ----------------*//
//another way to get elements from an array/object

//array destructing
// const array = ["A", "B", "C"];
//normal way to get value by tagging index
// const first = array[0];
// const second = array[1];
//destructing
// const [first, second, third] = array; // The [] are like giving a variable name to each item of array
//can also do skipping to declare an array index
// const [first, , third] = array;
// console.log(`${first} ${second} ${third}`); //A B C
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
const object = {
  name: "Leticia",
  age: 26,
  favoriteFood: "burger",
  address: {
    street: "222 s main st",
    city: "Los Angeles",
  },
};
//normal way to get value by tagging key
// const firstName = object.name;
// console.log(firstName);
//changing the object key name
const { name: firstName } = object;
console.log(firstName); // Leticia
//destrcuting the object inside other object
const {
  address: { city },
} = object;
console.log(city);
