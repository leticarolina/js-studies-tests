//* -----------------IF /ELSE STATEMENT---------------*//
//sintax if (here goes variable that will reference the statement or js code) {code that will run if true} else { code that will run if false}
//basically if (this is true) {run this code} else/if not {run this code}

let a = 17;
if (a >= 18) {
  console.log("You are old enough!");
} else if (a > 14 || a <= 17) {
  console.log("You are almost there");
} else {
  console.log("You are still young!");
} //you are old enough!

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

//ONLY CASE when is interesting actually use ternary operator is when need to set a variable based on true or false of another variable
// const isUserLogged = true;
// let welcomeMessage = "";
// if (isUserLogged) {
//   welcomeMessage = "Welcome!";
// } else {
//   welcomeMessage = "Please log in";
// }
// console.log(welcomeMessage); //welcome! because isUserLogged = true;
//same code using ternary operator (syntax Variable  ?  code to run if true : code to run if false)
// const isUserLogged = true;
// const welcomeMessage = isUserLogged ? "welcome!" : "Please log in"; //no need to redeclare variable, only put the new value
// console.log(welcomeMessage); //welcome!

//* -----------------SWITCH STATEMENT---------------*//
//Useful when you have  multiple choices inside if statement can use switch statement
//syntax switch (variable to check) { case JSCodeForTheCaseorStringNumberETC : codeToRun break }

// const favoriteAnimal = "bobcat";
// //example using if statement
// // if (favoriteAnimal === "cat") {
// //   console.log("Cats are so cute");
// // } else if (favoriteAnimal === "dog") {
// //   console.log("Dogs are humans best friend");
// // } else if (favoriteAnimal === "horse") {
// //   console.log("That is an interesting choice");
// // } else {
// //   console.log("I am not familiar with that Animal");
// // }
// //example using switch statement
// // switch (favoriteAnimal /*syntax switch (variable to check)*/) {
// //   case "bobcat": //putting 2 cases possibilities to run one code
// //   case "cat":
// //     console.log("Cats are so cute");
// //     break; //break after every case so it won't keep running every case
// //   case "dog": //case keyword then check statement :
// //     console.log("Dogs are humans best friend");
// //     break;
// //   case "horse":
// //     console.log("That is an interesting choice");
// //     break;
// //   default:
// //     /*default keyword is the "else" for if statement*/ console.log(
// //       "That is cool but I am unfamiliar with that animal"
// //     );
// // }

//EXERCISE: create switch statement to check the value of number variable
//if 0 prints "It is zero"
//if between 1-2 prints "It is small" //if between 3-4 prints "It is medium"
//if 5 prints "It is large" //if none of these prints "Try again"
// const number = 5;
// switch (number) {
//   case 0:
//     console.log("It is zero");
//     break;
//   case 1:
//   case 2:
//     console.log("It is small");
//     break;
//   case 3:
//   case 4:
//     console.log("It is medium");
//     break;
//   case 5:
//     console.log("It is large");
//     break;
//   default:
//     console.log("Try again");
// }
