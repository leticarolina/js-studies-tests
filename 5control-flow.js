//* -----------------IF /ELSE STATEMENT---------------*//
//sintax if (here goes variable that will reference the statement or js code) {code that will run if true} else { code that will run if false}
//basically if (this is true) {run this code} else/if not {run this code}

// let a = 18;
// if (a >= 18) {
//   console.log("You are old enough!");
// } else {
//   console.log("You are still young!");
// } //you are old enough!

//combining multiples if statements in one chain using else if, (the last else can be at the end)
//You can only run onne condition inside if statement, either one or another(s) to run more than one statement need to declare each if separately
// const price = 15;
// if (price === null) {
//   console.log("There is no price");
// } else if (price < 10) {
//   console.log("Thats very cheap");
// } else if (price < 50) {
//   console.log("Thats a good deal");
// } else {
//   console.log("This is expensive");
// } //that's a good deal

//exercise: create an array and using if statement check the lenght of array
//if empty prints 'empty' , if < 5 prints small, if < 10 medium , else prints large
// const array = [
//   "Leticia",
//   "Azevedo",
//   26,
//   { hobbies: ["swimming", "running"] },
//   { dogs: false },
// ];
// // console.log(array[3].hobbies[0]); //swimming
// if (array.length === 0) {
//   console.log("empty");
// } else if (array.length <= 5) {
//   console.log("small");
// } else if (array.length < 10) {
//   console.log("medium");
// } else {
//   console.log("large");
// } //'small' because array is equal to 5

//****NOTE: each if statements works like functions (has it's own scope), cannot declare smt in one statements and use on another
//{} curly braces means a new scope

//checking if there is a variable with that name null or undefined
// const totalPrice = null;
// if (totalPrice == null) {
//   console.log("it is null");
// } else {
//   console.log("it is not null");
// } // return it is null

//it will always run true if variable exist, regardless the value unless empty string or 0.
// const userLogged = []; //true
// if (userLogged) {
//   console.log("exist");
// } else {
//   console.log("doesnt'exist");
// } //exist

//* -----------------TERNARY OPERATOR---------------*//
//more condensed way to create if statement (not very used)
//syntax Variable  ?  code to run if true : code to run if false

// const isUserOnline = true;
// isUserOnline ? console.log("Online") : console.log("Offline"); //online

//when is interesting actually use ternary operator is when need to set a variable based on true or false variable
// const isUserLogged = true;
// let welcomeMessage = "";
// if (isUserLogged) {
//   welcomeMessage = "Welcome!";
// } else {
//   welcomeMessage = "Please log in";
// }
// console.log(welcomeMessage); //welcome! because isUserLogged = true;
//same code using ternary operator (syntax Variable  ?  code to run if true : code to run if false)
const isUserLogged = true;
const welcomeMessage = isUserLogged
  ? (welcomeMessage = "welcome!")
  : "Please log in";
console.log(welcomeMessage); //welcome!
