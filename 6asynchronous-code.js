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
//promises need to be declared with new Promise(here goes the code/function you want to run)
//the function inside the promise will take 2 parameters usually called resolve and reject
//after when calling the paramets, resolve/first paramets === .then()  reject === .catch()
//.then .catch() will be passed a function inside

const firstPromise = new Promise((resolve, reject) => {
  const sum = 1 + 1;
  if (sum === 2) {
    resolve("Success");
  } else {
    reject("Some Error");
  }
});

firstPromise
  .then((a) => {
    console.log(a); //success
  })
  .catch((b) => {
    console.log(b); //some error
  });
//outcome success because 'sum' return true/resolve()
