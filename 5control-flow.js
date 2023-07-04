//* -----------------IF /ELSE STATEMENT---------------*//
//sintax if (here goes variable that will reference the statement or js code) {code that will run if true} else { code that will run if false}
//basically if (this is true) {run this code} else/if not {run this code}

// let a = 40;
// if (a >= 18) {
//   console.log("You are old enough!");
// } else if (a > 14 || a <= 17) {
//   console.log("You are almost old enough");
// } else {
//   console.log("You are still young!");
// } //you are old enough!

//combining multiples if statements in one chain using else if, (the last else can be at the end)
//You can only run one condition inside if statement, either one or another(s) to run more than one statement need to declare each if separately
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

// const favoriteAnimal = "rat";
//example using if statement
// if (favoriteAnimal === "cat") {
//   console.log("Cats are so cute");
// } else if (favoriteAnimal === "dog") {
//   console.log("Dogs are humans best friend");
// } else if (favoriteAnimal === "horse") {
//   console.log("That is an interesting choice");
// } else {
//   console.log("I am not familiar with that Animal");
// }
//example using switch statement
// switch (favoriteAnimal /*syntax switch (variable to check)*/) {
//   case "bobcat": //putting 2 cases possibilities to run one code
//   case "cat":
//     console.log("Cats are so cute");
//     break; //break after every case so it won't keep running every case
//   case "dog": //case keyword then check statement :
//     console.log("Dogs are humans best friend");
//     break;
//   case "horse":
//     console.log("That is an interesting choice");
//     break;
//   default:
//     /*default keyword is the "else" for if statement*/ console.log(
//       "That is cool but I am unfamiliar with that animal"
//     );
// }

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

//* --------------------------------FOR LOOP------------------------------*//
//for loop is to run the same code multiple times without having to repeat the code itself
/*to run a for loop need to define 3 different things
1. define a variable for starting
2.an ending point, this a true/false statement if you put true it will never end but if you put (variable < 5) will run until less than 5 
3.how to modify our variable */

//runnning a for loop statement to print out Hello world
// for (
//   let start = 0 /*step 1*/;
//   start < 5 /*step 2*/;
//   start = start + 1 /*step 3 or can be  start++*/
// ) {
//   console.log("Hello world");
// } //hello world 5X

// for (var a = 0; a < 10; a++) {
//   console.log("clap!");
// } //clap 10x

// using break keyword inside for loop to stop the loop
// for (let i = 1; i < 11; i++) {
//   if (i > 5) break; //declaring an if statement to break
//   console.log(i);
// } //1 2 3 4 5

// //using continue inside for loop
// // for (let start = 1; start <= 5; start++) {
// //   if (start > 3) continue; //this will not run the code that match if statement, will be skipped
// //   console.log(start);
// } // 1 2 3

//exercise: create a for loop that prints out from 0 to 10
//then modify the loop to exit the loop when the value is equal to 5
// for (a = 0; a < 11; a++) {
//   if (a > 4) break;
//   console.log(a);
// }
// for (let number = 0; number <= 10; number++) {
//   if (number === 5) {
//     break;
//   }
//   console.log(number);
// }

//* --------------------------------WHILE LOOP------------------------------*//
//does the same thing as for loop but take only one paramether (the ending point)

//with for loop, looping till number 5
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }
// // with while loop, looping until number 5
// i = 0; //need to declare a separate variable
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

//USEFUL: while loop is useful when you don't know how many times code needs to loop
// const family = {
//   names: "Leticia",
//   child: {
//     names: "Zoe",
//     child: {
//       names: "Snow",
//     },
//   },
// }; //suppose that the last child is a number we don't know
// // let currentName = family;
// // while (currentName != null /*while family is not null run the code*/) {
// //   console.log(currentName.names); //this will loop forever on 'Leticia'
// //   currentName = currentName.child; //this will change the currentName to be the child every time it loops until child is null
// // }

//* --------------------------------RECURSION (GOOD FOR INTERVIEWS)------------------------------*//
//recursion is a function that calls itself again, anything you can do with recursion you do with a normal for loop aswell
//not reccomended to use recursion unless you have a strong case for it

//example with for loop to print 1 to 10
// for (let n = 1; n <= 10; n++) {
//   console.log(n);
// }
// example same result to print 1 to 10 but with recursion
// function callNumber(number) {
//   if (number > 10) return; // this is the ending point
//   console.log(number);
//   callNumber(number + 1);
// }
// callNumber(1);

//using the word return, it will return to the previous function that was called
// function currentNumber(number) {
//   if (number > 2) return; //when getts to nnumber 3 it will return to the previous call equals 2 and then return
//   console.log(number);
//   currentNumber(number + 1); //number will be equal to 2
//   console.log("I am the return stack"); //will be logged 2 times after the number 1 , 2
// }
// currentNumber(1); //it will start here with number 1
// console.log("hi"); //bla bla will run after the whole recursion is done

//getting the sum of 1 to 5 with for loop
// let total = 0;
// for (let n = 1; n <= 5; n++) {
//   total = total + n;
// }
// console.log(total); //15
//getting the sum of 1 to 5 with for recursion
// function total(number) {
//   if (number <= 0) return 0;
//   return number + total(number - 1);
// }
// console.log(total(5));

//EXERCISE: object base for the exercise
// const person = {
//   name: "Leticia",
//   friend: {
//     name: "Fernanda",
//     friend: {
//       name: "Juliano",
//     },
//   },
// };
//Getting info from object with while loop
// let currentName = person;
// while (currentName != null) {
//   console.log(currentName.name);
//   currentName = currentName.friend;
// }
//exercise get the same result with recursion
// function printNames(n) {
//   if (n == null) return;
//   console.log(n.name);
//   printNames(n.friend);
//   console.log("I am returning"); // was logged 3 times
// }
// printNames(person);
//another way to run with recursion changing the if statement
// function printName(n) {
//   if (n != null) {
//     console.log(n.name);
//     printName(n.friend);
//   }
// }
// printName(person);

// function printNames(theName) {
//   if (theName == null) return;
//   console.log(theName.name);
//   printNames(theName.friend);
// }
// printNames(person);

//another example of recursion
// function printNumber(number) {
//   if (number > 11) {
//     return number;
//   }
//   console.log(number); //10, 11
//   return printNumber(number + 1);
// }
// printNumber(10);
// console.log("this code will run after the function printNumber is done");

// function printNumber(number) {
//   if (number > 10) return;
//   console.log(number);
//   printNumber(number + 1);
//   console.log("bob " + number); /*<- this is BOB*/
// }
// printNumber(1);

//* --------------------------------SHORT CIRCUIT EVALUATION------------------------------*//
//short circuit evaluation will skip the rest of the code if the first boolean/code will already return true
//true ||or false will always be equal to true, javascript will not evaluate the second booleam bcs the first one already returns true
//false || true will return both first the false and then true, or until it's true
//false && anything will always return false

//using or to compare
// console.log(true || true); //true
// console.log(true || false); //true
// console.log(false || true); //true
// console.log(false || false || true); //true

// function printTrue() {
//   console.log("I am true");
//   return true;
// }
// function printFalse() {
//   console.log("I am false");
//   return false;
// }
// printTrue() || printFalse(); // it will print out "I am true" and ignore the second function
// printFalse() || printTrue(); // "I am false" "I am true" , since the first function return false it will keep going until the true
// printFalse() || printTrue() || printFalse(); // "I am false" "I am true" , will not print the last function since the second one already returned true

//using and && , javascript will stop at the fisrt false statement (opposite as ||)
// function printFalse() {
//   console.log("I am false");
//   return false;
// }
// function printTrue() {
//   console.log("I am true");
//   return true;
// }
// // printFalse() && printTrue(); //I am false
// printTrue() && printFalse() && printFalse();// I am true, I am false
// // printTrue() && printFalse(); //I am true, I am false

//when to use ||
// function printName(name) {
//   name = name || "Default"; //name is "true", default is "false"
//   console.log(name);
//   //can make code above even smaller
//   console.log(name || "Default"); // if name is true will not log default, if name is false will continue nad then log default
// }
// printName();

//when to use &&, && will short circuit at the false statement
// const person = {
//   name: "Leticia",
//   address: {
//     street: "Main st",
//   },
// };
// console.log(person && person.address && person.address.street); //Main st

// function printName(name = "Default") /*telling here that name is default until it's not*/ */ {
//   console.log(name);
// }
// printName();
