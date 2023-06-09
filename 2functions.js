//* ----------------FUNCTIONS-----------------------*//
//*syntax function nameOfTheFunction (parameters = giving a name to the info the function will take later , max of 2(?)) {then code here} *//

// function sayHi() {
//   console.log("hi");
// }
// sayHi(); //this run the function and "()" to pass info to the function, in this case no info needed

// //create a function with no argument, insert your name and print it out
// function myName() {
//   console.log("Leticia Azevedo");
// }
// myName();

//* ----------------FUNCTIONS WITH ARGUMENT-----------------------*//

// function sum(a, b) {
//   console.log(a + b);
// }
// let x = 1; //option to create a variable to define a value that will be passed to the function inside ()
// let y = 2;
// sum(x, y); //passing the information to a and b inside the () is another option, could put 1 and 2 straight here instead of x,y

// //create a function that takes one argument (a person's name) ans prints that out
// function myName(a) {
//   console.log(a);
// }
// myName("Leticia"); //passing the info/Leticia straight to "a" parameter without creating a variable for that

//create a function with one argument (name) it will return that name added to the end of the string "Hello"
// function person(she) {
//   return "Hello " + she;
// }
// const girl = person("Leti");
// console.log(girl);//Hello Leti

// function storeName(a) {
//   return "Hello " + a;
//   console.log("this will not run because there is a return above");
// } //return is used to return a value from the fuNCtion BUT NOTHING will run after "return"
// const sayHi = storeName("Leticia");
// console.log(sayHi);

// function number(a, b) {
//   return a + b;
// }
// let sum = number(1, 1); //created variable to define value of parameters, now sum has a value of 2
// let sum2 = sum + number(1, 1); //created another variable, set the value of sum + new parameters on the function
// console.log(sum2); //4

//* -----PASS FUNCTION TO ANOTHER, OR AS ARGUMENTS/PARAMETERS-----------*//
//function is a "variable" with a name

// function printVariable(variable) {
//   console.log(variable);
// }
// function takeValue(a /*will be changed to printVariable*/) {
//   a("She is the girl boss"); //calling the function "a" and giving it a information
// }
// takeValue(printVariable); // this is passing the parameter of takeValue to the function printVariable

// function first(ab) {
//   console.log(ab);
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
// } //function to print whatever I'm going to to put on the function below
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

/*----------PASSING FUNCTION AS PARAMETERS/ARGUMENTS ANOTHER EXAMPLE----------*/
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

//*---------SCOOPING-----------*//

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

//*---------CLOSURES (good for interview)-----------*//
/*normally closures are defined by function inside other function*/
/*what is a closure? closure describe or limit the scope of a function*/

// function first(a) {
//   return function second(b) {
//     console.log(a); //Leticia
//     console.log(b); //Leti
//   };
// }
// let x = first("Leticia"); //calling "first" function that will return another function from it
// //x now represents the function "first"
// x("Leti"); //when calling "x" we are calling the function "first" and passing the second parameter which maps to "second" function, thats how we pass value to the inner function
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

//*---------FOR LOOP-----------*//
