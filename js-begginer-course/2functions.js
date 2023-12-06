//* ----------------16. FUNCTIONS-----------------------*//
//*syntax for function: function nameOfTheFunction (parameters) {then code here} *//
//parameters = giving a name to the info the function will take later

//creating the function
// function sayHi() {
//   console.log("hi");
// }
// sayHi(); //functionName() calls the fucntion to run
//when calling the function to run, the parethesis() is to pass the actual info to the function, in this case no info needed

// exercise: create a function with no argument, insert your name and print it out
// function myName() {
//   console.log("Leticia Azevedo");
// }
// myName();

//* ----------------16.1 FUNCTIONS WITH ARGUMENT/PARAMETERS-----------------------*//

// function sum(a, b) {
//   console.log(a + b); //3
// }
// //option to create a variable to define a value that will be passed to the function inside ()
// let x = 1;
// let y = 2;
// sum(x, y);
// //passing the number directly when calling the function() is another option
// sum(1, 2);

// //create a function that takes one argument (a person's name) ans prints that out
// function myName(a) {
//   console.log(a);
// }
// myName("Leticia"); //passing the info/Leticia straight to "a" parameter without creating a variable for that

//create a function with one argument (name) it will return that name added to the end of the string "Hello"
// function person(she) {
//   return "Hello " + she;
// }
// //code below the variable itself is holding the function as its value and also calling/passing the parameter to the function
// const girl = person("Leti");
// console.log(girl); //Hello Leti
// console.log(person()); //Hello undefined

// function storeName(a) {
//   return "Hello " + a;
//   console.log("this will not run because there is a return above");
// } //return is used to return a value from the fuNCtion BUT NOTHING will run after "return"
// const sayHi = storeName("Leticia");
// console.log(sayHi); //Hello Leticia

function number(a, b) {
  return a + b;
}
//created variable to define value of parameters, now sum has total value of 2
let sum = number(1, 1);
//created another variable, taking the previous value returned by the function and add 2 new parameters on the function number
let sum2 = sum + number(1, 1);
console.log(sum); //2
console.log(sum2); //4

//* ----- 17. PASS FUNCTION TO ANOTHER, OR AS ARGUMENTS/PARAMETERS-----------*//
//function is a "variable" with a name

// function printVariable(variable) {
//   console.log(variable);
// }
// function takeValue(a /*will be changed to printVariable*/) {
//   a("She is the girl boss"); //calling the function "a" and giving it a information
// }
// takeValue(printVariable); // this is passing the parameter of takeValue to the function printVariable

// function first(a) {
//   console.log(a);
// }
// function second(b) {
//   b("hi");
// }
// second(first);

// //create function that takes 2 parameter name and callback, take the name and append "hello" and print on the first function
// function person(she, callback) {
//   callback("Hello " + she);
// }
// const value = person("Leticia", (values) => {
//   console.log(values); //Hello Leticia
// });

// function printVariable(variable) {
//   console.log(variable);
// } //helper function to print whatever I'm going to to put on the function below
// function sayHi(x, callback /*callback to call another function*/) {
//   callback("Hello " + x);
// }
// sayHi("Leticia", printVariable); //function was called and gave the info of "x" to leticia and replaced callback
// sayHi("Leticia", function (variable) {
//   console.log(variable);
// });//another way to call function by replacing callback with already writing another function inside the "calling" and can delete the first function created

// function number(a, b, callback) {
//   callback(a + b);
// }
// function sum(num) {
//   console.log(num);
// }
// number(1, 1, sum); //2

//* -----ARROW FUNCTION-----------*//

/* normal function syntax*/
// function sum(a, b) {
//   return a + b;
// }
// /* arrow function syntax, need to create a variable and declare as a function*/
// let sum = (a, b) => {
//   return a + b;
// };

// let printName = (x) => x; //TIP: if only one thing declared to return inside arrow function, can be option the name the curly {}, () and the "return" word
// console.log(printName("Leticia"));

// take the function below and transform into arrow function in just ONE LINE
// function printHi(theName) {
//   return "Hi " + theName;
// }
// let printHiArrow = (theName) => "Hi " + theName;
// console.log(printHiArrow("Leticia"));

//minimalistic version to pass function
// function func(a, callback) {
//   callback(a); //the callback will turn into "console.log", and the 'a' will have it's value passed
// }
// func('I am "a"', (x) => console.log(x)); // x is the parameter of the new function, after the => is what the function will return

/*---------- 17. PASSING FUNCTION AS PARAMETERS/ARGUMENTS ANOTHER EXAMPLE----------*/
// function doItAll(x, y, hi) /* x= 1 , y= 1, hi = 'Leti'*/ {
//   printVariable(sum(x, y) /*this is replacing "variable"*/);
//   printVariable(sayHi(hi) /*this is replacing "variable"*/);
// }

// function printVariable(variable) {
//   console.log(variable);
// } //function create just to console.log and need to pass the info to the "variable"

// function sum(a, b) {
//   return a + b;
// } //function created to return a + b but they still need value

// function sayHi(theName) {
//   return "Hi " + theName;
// }

// doItAll(1, 1, "Leti"); //2 Hi Leti

// //passing one function to another with return
// function display(a) {
//   console.log(a);
// }
// function thePhrase(x) {
//   return x("I am a new function"); // you can call the parameters inside the function
// }
// thePhrase(display);

// function printVariable(x) {
//   console.log(x);
// }
// function theName(myName, callback) {
//   callback("Hello " + myName);
// }
// theName("Leticia", printVariable);

//*---------21. SCOOPING-----------*//

/*code inside the scope can access the code from global scope.
but global scope cannot access code inside the scope. */

//console.log can access variable "c" outsIde the scope
// let c = 3;
// {
//   let a = 1;
//   {
//     let b = 2;
//     console.log(a); //1
//     console.log(b); //2
//     console.log(c); //3
//   }
// }

//console.log could NOt access variables INSIDE the scope
// {
//   let a = 1;
//   console.log(b); // error 'b' is not defined in this scope but in the inner scope. it will read from the current scope to the outside not inner.
//   {
//     let b = 2;
//     let c = 3;
//     console.log(a); //1
//   }
// }
// console.log(c); // error 'c' is not defined in the global scope

//functions has it's own scope and can be placed at the end of js code

//*---------22. CLOSURES (good for interview)-----------*//
/*normally closures are defined by function inside other function*/
/*what is a closure? closure describe or limit the scope of a function*/

// function first(a) {
//   return function second(b) {
//     console.log(a); //Leticia
//     console.log(b); //Leti
//   };
// }
// let x = first("Leticia"); //calling "first" function that will return another function from it
// console.log(x); //x now represents the function "first"
// x("Leti"); //when calling "x" we are calling the function "first" which has a function inside and passing the parameter which maps to "second" function, thats how we pass value to the inner function
// let x = first("Leticia")('Leti'); // this code will give same result as 3 lines above together.

// function a(x) {
//   return function (age) {
//     console.log(x);
//     console.log(age);
//   };
// }
// const myName = a("Leticia")(25);

// function first(a) {
//   console.log(a + " = first"); //Leticia first
//   return function second(b, c) {
//     console.log(b + " = second b"); //Carolina = second b
//     console.log(c + " = second c"); //Azevedo = second c
//   };
// }
// // let theValues = first("Leticia");
// // theValues("Carolina", "Azevedo"); //this code is basically giving values to the 2 parameters of the inner function called "second"
// let theValues = first("Leticia")("Carolina", "Azevedo"); // code will give same result as 2 lined above
