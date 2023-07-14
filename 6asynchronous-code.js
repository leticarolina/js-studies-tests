//asynchronous code used before addEventListener and SetTimeOut, essentially code that will not run right away but after
// setTimeout(() => {
//   console.log("I will run 2 seconds after 'hi' ");
// }, 2000); //settimeout takes a function and timer after
// console.log("hi");

//* --------------------------------58. CALLBACKS------------------------------*//
//asynchronous code === callbacks
//code that will run at a later time based on specific condition

//adding an event listener to the button with callback
// const button = document.querySelector("button");
// addingEventListener(button, () => {
//   console.log("Button was clicked");
// });
// function addingEventListener(a, callback) {
//   a.addEventListener("click", callback);
// }

//* --------------------------------59. PROMISES------------------------------*//
// "Promise" is an object class built into JS. The function we pass it (that takes "resolve, reject") is passed into the class constructor function.
//promises CAPITAL P need to be declared with new Promise(here goes the code/function you want to run)
//the function inside the promise will take 2 parameters usually called resolve and reject, these will also take 1 parameter each
//after when calling the paramets, resolve/first paramets === .then()  reject === .catch()
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
const p1 = new Promise((resolve, reject) => {
  resolve("I am promise 1");
});
const p2 = new Promise((resolve, reject) => {
  resolve("I am promise 2");
});
const p3 = new Promise((resolve, reject) => {
  resolve("I am promise 3");
});

Promise.race([p1, p2, p3]).then((message) => {
  console.log(message);
}); //'I am promise 1'

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
//.finally() will execute weather .then or .catch, good to use when you need to execute code no matter it if resolve or reject before
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

//The code inside .then and .catch are the placeholders that just sit there and do nothing on their own. The only time the code in those functions runs is when you call either resolve or reject. Once you do that the code inside your .then or .catch will run based on which method you called.
