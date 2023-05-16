//* ----------------CONST------------------*//
/* since const never changes its value, you can always use const on your code and 'let' only when the value WILL have to change*/

// let a = 1;
// a = 2;
// console.log(a);

//* ----------------TYPE COERCION------------------*//
/*convert from one type to another e.g. convert string to number*/

//string to number
// let a = "1"; //"a" is a string
// console.log(typeof parseInt(a));//'a' now is a number
// parseInt(a); // function to pass "a" to an integer number
// parseFloat(a); // pass "a" to a floating number like 1.1

// let a = 1.34; //"a" is a number
// console.log(typeof toString(a)); //"a" is now a string
// toString();//function to pass something to string

//* ---------------- == Vs === ------------------*//
/* triple equal sign === to tell JS to not convert types before comparing, because type coercion can give bugs*/

//with type coercion
// const a = 1;
// const b = "1";
// console.log(a == b); //true (even though one is number and another string, JS is doing type coercion)

// const a = 0; //number
// const b = false; //boolean
// console.log(a == b); //return "true" even though they are not the same type

//witout type coercion using ===
// const a = 1;
// const b = "1";
// console.log(a === b); //false === tells to NOT do the type coercion before comparing the types

// const a = 0; //number
// const b = false; //boolean
// console.log(a === b); //is a equal to b? // false

//* ---------------- NaN = not a number ------------------*//
// isNaN(); function to check if this is not a number

// const a = parseInt("abc");
// const b = 2;
// console.log(isNaN(a)); // true , because "a" is not a number even though we tried to pass it to parseInt using another function
// console.log(isNaN(b)); // false, because "b" is a Number (2)
