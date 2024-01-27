//asynchronous code used before addEventListener and SetTimeOut, essentially code that will not run right away but after
// setTimeout(() => {
//   console.log("I will run 2 seconds after 'hi' ");
// }, 2000); //settimeout takes a function and timer after
// console.log("hi");

const greetings = settimeout(() => {
  console.log("hi");
}, 2000);
console.log(greetings);
console.log("Hi I'm first");

//* --------------------------------58. CALLBACKS------------------------------*//
//asynchronous code === callbacks
//code that will run at a later time based on specific condition

//adding an event listener to the button with callback
// const button = document.querySelector("button");
// // creating a function that will call a click event listener
// function addingEventListener(a, callback) {
//   a.addEventListener("click", callback);
// }
// // when calling the function can replace the target and code to run on click
// addingEventListener(button, () => {
//   console.log("Button was clicked");
// });

//first function to be executed however has settimeout, after timer will call readyToEat function
// function orderPizza(readyToEat) {
//   console.log("pizza ordered");
//   setTimeout(() => {
//     const pizza = "marguerita";
//     readyToEat(pizza);
//   }, 2000);
// }
// //will be called after settimeout and pizza variable is defined
// function readyToEat(pizza) {
//   console.log(`Eat this delicios ${pizza}`);
// }
// orderPizza(readyToEat);
// console.log("Call Fernanda");
//* --------------------------------59. PROMISES------------------------------*//
//promise there is maker and receiver
//maker is the async function and the receiver is the one that calls the maker and receives the return from it
// "Promise" is an object class built into JS. The function we pass it (that takes "resolve, reject") is passed into the class constructor function.
//promises CAPITAL P need to be declared with new Promise, example //new Promise((resolve, reject) => { here goes the code/function you want to run} )
//the function inside the promise will take 2 parameters usually called resolve and reject, these will also take 1 parameter each
//after when calling the parameters, resolve/first paramets === .then()  reject === .catch()
//.then .catch() will be passed a function inside, you must always pass a function to .then .catch

// const firstPromise = new Promise((resolve, reject) => {
//   const sum = 1 + 1;
//   if (sum === 2) {
//     resolve("Success");
//   } else {
//     reject("Some Error");
//   }
// });
// firstPromise
//   .then((a) => {
//     console.log(a); //success
//   })
//   .catch((b) => {
//     console.log(b); //some error
//   });
//outcome success because 'sum' return true/resolve()

//using a asynchronous code with promises
// setTimeOutPromise(250).then(() => {
//   console.log("1");
// });
// function setTimeOutPromise(duration) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, duration); //settimeout is taking 2 parameters
//   });
// }
// //avoiding callback hell with promises (same code above)
// setTimeOutPromise(250)
//   .then(() => {
//     console.log("1");
//     return setTimeOutPromise(350); //this code is telling the next .then() will be calling this fucntionn again
//   })
//   .then(() => {
//     console.log("2");
//     return setTimeOutPromise(450);
//   }) //this is the next .then() , the duration was set in the previous scope
//   .then(() => {
//     console.log("3");
//   });

//EXERCISE: create a promise version of addEventListener when the button is clicked
// const button = document.querySelector("button");
// addEventListenerPromise(button, "click").then(() => {
//   console.log("clicked");
// });
// function addEventListenerPromise(element, method) {
//   return new Promise((resolve, reject) => {
//     element.addEventListener(method, resolve);
//   });
// }

//calling a resolve promise most simple way
//promise is calling a promise, .resolve is to pass the value and .then() will call the fucntion itself
// Promise.resolve("value").then((a) => {
//   console.log(a);
// });
// //calling a reject promise most simple way
// //.reject is to pass the value, .catch() will call the function
// Promise.reject("value reject").catch((a) => {
//   console.error(a);
// });

//* --------------------------------59.1 PROMISES types------------------------------*//
//using Promise.all([array]) to put a lot of promises together in a array, .then() to run for all of them but .then() will only run if all promises are true
// Promise.all([
//   Promise.resolve("1"),
//   Promise.resolve("2"),
//   Promise.resolve("3"),
// ]).then((a) => {
//   console.log(a);
// }); //(3) ['1', '2', '3']

//with Promise.all([]), .then will only run if all promises in the array return resolve otherwise will only return the first reject/error of the array
// Promise.all([
//   Promise.resolve("1"),
//   Promise.reject("I am an error"),
//   Promise.reject("2"),
// ])
//   .then((a) => {
//     console.log(a);
//   })
//   .catch((a) => {
//     console.error(a);
//   }); //I am an error

//to run .then() on the first promise of the array that succeeds we can use Promise.any()
//Will return only one promise, first one that succeeds
// Promise.any([Promise.reject(1), Promise.reject(2), Promise.resolve(3)]).then(
//   (a) => {
//     console.log(a);
//   }
// ); //3 because was the first to suceed

//RACE: to get the first promises that finish running WHATEVER it succeeds or fail the syntax is Promise.race([]) will also only return ONE
// const p1 = new Promise((resolve, reject) => {
//   resolve("I am promise 1");
// });
// const p2 = new Promise((resolve, reject) => {
//   resolve("I am promise 2");
// });
// const p3 = new Promise((resolve, reject) => {
//   resolve("I am promise 3");
// });

// Promise.race([p1, p2, p3]).then((message) => {
//   console.log(message);
// }); //'I am promise 1'

//to return ALL of of promises after loading no matter it succeeds or fail, use Promise.allSettled([]), .catch() has no roll in this scenario only the .then()
// Promise.allSettled([
//   Promise.resolve(1),
//   Promise.resolve(2),
//   Promise.reject("error"),
// ]).then((a) => {
//   console.log(a);
// }); /*(3) [{…}, {…}, {…}]
// {status: 'fulfilled', value: 1}
// {status: 'fulfilled', value: 2}
// {status: 'rejected', reason: 'error'} */

//---BONUS: besides .then() .catch(), there is a third that is .finally()
//.finally() will execute weather .then or .catch, good to use when you need to execute code no matter it if resolve or reject
// const promise = Promise.resolve("hi");
// promise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((a) => {
//     console.error(a);
//   })
//   .finally(() => {
//     console.log("finally");
//   }); //hi, finally

//The code inside .then and .catch are the placeholders that just sit there and do nothing on their own.
//The only time the code in those functions runs is when you call either resolve or reject. Once you do that the code inside your .then or .catch will run based on which method you called.

//* --------------------------------60. ASYNC AWAIT------------------------------*//
//The keyword async before a function makes the function return a promise
//The await keyword can only be used inside an async function, they must be together (exvept for JS Modules and chrome dev tools console)
//The await keyword makes the function pause the execution and wait for a resolved promise before it continues
//Await just means that none of the code after await will be executed until the promise is finished, It doesn't actually pause your other code and stop it from running. Instead if just stops the code directly after await from running until the promise is finished.
//you can put await before any function that returns a promise
//best practice is to separate the success from reject with try.

//creating async function instead of a promise
// function setTimeOutPromise(delay) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, delay);
//   });
// }
// async function doStuff() {
//   await setTimeOutPromise(1000);
//   console.log("1");
//   await setTimeOutPromise(1000);
//   console.log("2");
// }; //after one sec: 1 , after another sec: 2
// doStuff(); //need to call the async function after so everything can run

//creating async function to log out the "resolve" that was declared in another function
// function setTimeOutPromise(delay) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`You waited ${delay} milliseconds`);
//     }, delay);
//   });
// }
// async function doStuff() {
//   const message = await setTimeOutPromise(1000);
//   console.log(message);   /*IMPORTANT ASYNC AWAIT will only run next value after first is finished*/
//   console.log("1");
// }
// doStuff();

//async with await only has a return for "resolve" promises, if you want to get result for reject aswell need to wrap up the code
//wrapping up the code inside try{resolve code} catch{reject code here}
//created a function that returns a promise, the promise will check if my nickname is written correctly but if it's not so it will reject
// function setTimeOutPromise(delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //if it takes a fucntion I can put anything inside here, in this case created an if statement
//       const name = "Leticia";
//       if (name == "Leti") {
//         resolve("name is correct");
//       } else {
//         reject("Name is not correct");
//       }
//     }, delay);
//   });
// }
// //creating async function with try and catch
// async function printName() {
//   try /*assuming this is the true side*/ {
//     const message = await setTimeOutPromise(250);
//     console.log(message);
//   } catch (error) /*catch HAS to take a parameter*/ {
//     console.error(error);
//   }
// }
// printName(); //Name is not correct

//EXERCISE
// function getValueWithDelay(value, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(value);
//     }, delay);
//   });
// }
// function getValueWithDelayError(delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Some error happened");
//     }, delay);
//   });
// }
// //EXERCISE: call getValueWithDelay twice and print out the value, then call getValueWithDelayError and make sure the error is caught
// async function doStuff() {
//   try {
//     const message = await getValueWithDelay("first resolve", 1000);
//     console.log(message);
//     const message2 = await getValueWithDelay("second resolve", 1000);
//     console.log(message2);
//     const message3 = await getValueWithDelayError("rejected", 1000);
//     console.log(message3); //this won't log bcs function returned a rejected promise so it will jump to catch
//   } catch (err) {
//     console.error(err);
//   }
// }
// doStuff();
// //another way for same resolution with less code (console.log is already set as the value parameter)
// async function doStuff() {
//   try {
//     await getValueWithDelay(console.log("hi 1"), 500);
//     await getValueWithDelay(console.log("hi 2"), 500);
//     await getValueWithDelayError(400);
//   } catch (e) {
//     console.error(e);
//   }
// }
// doStuff();

//To run every promise code at the same time need to use .then() instead of async await
// function getValue(value, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(value);
//     }, delay);
//   });
// }
// getValue("how", 1000).then((a) => {
//   console.log(a);
// });
// getValue("are", 1000).then((a) => {
//   console.log(a);
// });
// getValue("you", 1000).then((a) => {
//   console.log(a);
// }); //how are you, all logged AT THE SAME TIME and not each after 1sec

//SAME OUTPUT DIFFERENT CODE, DIFFERENCE BETWEEN PROMISE USING THEN/CATCH AND ASYNC/AWAIT
//Using .then.catch
// const firstPromise = new Promise((resolve, reject) => {
//   const sum = 1 + 1;
//   if (sum === 2) {
//     resolve("Success");
//   } else {
//     reject("Some Error");
//   }
// });
// firstPromise
//   .then((a) => {
//     console.log(a); //success
//   })
//   .catch((b) => {
//     console.log(b); //some error
//   });
//Using async/await
// function aPromise(value) {
//   return new Promise((resolve, reject) => {
//     const sum = 1 + 2;
//     if (sum === 3) {
//       resolve(value);
//     } else {
//       reject("Sum is not correct");
//     }
//   });
// }
// async function checkPromise() {
//   try {
//     const s = await aPromise("Sum is correct");
//     console.log(s);
//   } catch (e) {
//     console.error(e);
//   }
// }
// checkPromise();

//fetching from an API with async
// async function start() {
//   const api = await fetch(
//     "https://api.weather.gov/gridpoints/TOP/31,80/forecast"
//   );
//   const result = await api.json();
//   console.log(result.properties.periods[0].temperature); //gettting the current weather temperature from the API
// }
// start();
