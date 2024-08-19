//JAVASCRIPT STUDIES
//JAVASCRIPT STUDIES

// console.log("Hello World");

//------------8. VARIABLES---------
//variables are like a box that stores something inside

//example the box labelled grocery storing apple and juice
// var grocery = ["apple", "juice"];
// grocery = ["Lime", "wine"]; //changing the variable value
// console.log(grocery); //Lime, wine

// let a = 1;
// let b = 2;
// let c = 3;
// let d = a; //assign a variable as value
// a = 3; //reassigning the variable value

// console.log(a); //1
// console.log(b); //2
// console.log(c); //3
// console.log(d); //1 because variable "a" was still 1 when I declared "d", I haven't redeclared "a" before "d" was declared

let leticia = "It's been a while";
leticia = "Better late than never";
console.log(leticia);

//const is mostly used, variable caanot be reassigned
//let can be reassigned

//-----------9. NUMBER TYPE-------------

// let integer = 1; //integer means a full number
// let float = 2.3; //float menas a number with decimal point
// // typeof returns the type of variable
// console.log(typeof integer); //number
// console.log(typeof float); //number
// console.log(integer + float); //3.3 //this is opnly working because both are numbers
// console.log(integer + 2); //3 // this is working because it's adding another number
// console.log(integer + false); // 1
// console.log(integer + true); // 2 //  adding true to it will increase it by 1, and adding false will leave it unchanged

// let a = 1;
// let b = 2;
// let c = 3;
// console.log((a + b) / c); // 1 double parethesis to log the sum first
// console.log(b * c); //6

//-------10. STRING TYPE--------

// let a = "Leticia says 'hi'"; //single or double quote
// console.log(typeof a); //string

let myName = "Leticia";

// ways to console.log/print strings together
// console.log("Hello my name is", myName); //Hello my name is Leticia
// console.log("Hello my name is " + myName); //Hello my name is Leticia
// console.log(`${"Hello my name is"} ${myName}`); //Hello my name is Leticia
// console.log(`${"Hello"} ${myName}`);

//-------BOOLEAN--------
//boolean is a true or false value

// let a = true;
// let b = false;
// let c = true;
// //&& means "and", and when used to compare will return true or false if both values MATCH
// console.log(a && b); //false
// console.log(a && c); //true
// //|| means "or" will return true if one value is true
// console.log(a || b); //true
// console.log(b || b); //false
// console.log(b || a); //true

// let happy = true;
// let fun = true;
// console.log(happy && fun); //true
//exclamation point before ! print out the oppposite boolean in this case "false"
// console.log(!happy); //false

// ---------------NULL AND UNDEFINED-------------

// let a = null;
// let b = undefined;
// // null returns as an object, menas has a value but its null
// console.log(typeof a); //object
// console.log(typeof b); //undefined returns undefined, means not defined yet

// ---------------VARIABLE COMPARISON-------------

// let a = 1;
// let b = 2;
// let c = a;
// // == stands for "equals to"
// console.log(a == b); //false, value of "a" is not equal to "b"
// console.log(c == a);//true
// console.log(a < b); //true // < stands for "less than" same apply for > "greater than"
// console.log(a <= b); //true // <= less or equal to same for >= greater or equal to
// code below essentially saying: is "a" NOT EQUAL TO "b" ?
// console.log(a != b); //true // ! to get opposite return if false returns true

//TIP: same symbols apply for letters because they are set alphabetically example a < e
