//* --------------------------------61. FETCH------------------------------*//
//FETCH will return data from the server, mostly an API

//JS return a fetch as a promise
// fetch("https://jsonplaceholder.typicode.com/users") //syntax to fetch an url from sever, it's an array eith 10 users object
//   .then((response) => {
//     return response.json(); //data stored on this server in this case is the "stringified" version of the JSON object, need to convert to json
//   })
//   .then((data) => {
//     data.map((u) => {
//       console.log(u.name); //loggin out only the name of the users
//     });
//   });

//Turning promise above into a async function
// async function doStuff() {
//   try {
//     const url = await (
//       await fetch("https://jsonplaceholder.typicode.com/users")
//     ).json();
//     url.map((n) => {
//       console.log(n.name);
//     });
//   } catch (e) {
//     console.error("ERROR");
//   }
// }
// doStuff();

//using .ok to check if the requested fetch will return true of false, if it doesn't return will log out "fail"
// const URL = "https://jsonplaceholder.typicode.com/users/";
// async function doStuff() {
//   const response = await fetch(URL);
//   if (response.ok) {
//     const users = await response.json();
//     console.log(users);
//   } else {
//     console.log("fail");
//   }
// }
// doStuff();

//fetch can also SEND data to a server, to do so it needs a second parameter
// const url = "https://jsonplaceholder.typicode.com/posts";
// async function doStuff() {
//   const response = await fetch(url, {
//     /*here goes second parameter which is an object*/
//     // need to set POST as mathod and headers and stringfy are importand
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify({
//       title: "new",
//     }),
//   });
//   const post = await response.json();
//   console.log(post);
// }
// doStuff();

//getting data from the server with fetch and async function
// const URL = "https://jsonplaceholder.typicode.com/comments?postId=1";
// // async function logging() {
// //   const response = await fetch(URL);
// //   const content = await response.json();
// //   console.log(content);
// // }
// // logging();
//with PROMISE INSTEAD OF async await
// fetch(URL).then((response) => {
//   const content = response.json();
//   console.log(content);
// });

//* --------------------------------62. EVENT LOOP------------------------------*//
//event loop is the way javascript run the code
//usually promises have priority over others async code, they can run after the main thread is over or after the function it's in is over.
//the key is that Promises/async funnctions will run eventually when they have time to and generally run quicker than things like timeouts because of the separate queue they are in.

//javascript run code in a line called "MAIN THREAD"
//any async code will run on a different thread, and queue up to run after the main one is finished
// function sayHi() {
//   console.log("hi 1");
//   console.log("hi 2");
//   setTimeout(() => console.log("hi 3"), 300);
//   setTimeout(() => console.log("hi 4"), 0);
//   console.log("hi 5");
// }
// sayHi();
// console.log("hi 6");
//hi 1, hi 2, hi 5, hi 4, hi 3.
//hi 1, hi 2, hi 5, hi 6 (MAIN THREAD)
//hi 4, hi 3 other thread which "hi 4" was the next on the queue bcs delay of 0

// functions behave differently than others async like settime and addevent
//promises and async will go to the queue immediately after the function it's in finishes reading.
// function sayHi() {
//   console.log("hi 1");
//   setTimeout(() => {
//     console.log("hi 2");
//   }, 30);
//   new Promise((resolve) => {
//     resolve("hi 3");
//   }).then((a) => {
//     console.log(a);
//   });
//   setTimeout(() => {
//     console.log("hi 4");
//   }, 0);
//   console.log("hi 5");
// }
// sayHi();
//hi 1, hi 5, hi 3, hi 4, hi 2
//hi 1, hi 5 (MAIN THREAD)
//hi 3 logged out after function started to run
//hi 4, hi 2 queued up accordingly to the settimeout specifically

//* --------------------------------63. EVENT DELEGATION------------------------------*//
//the layers of javascript
//for example when you click a button, it's behind the scenes also clicking the body and the document
//when you click on a button or any event on the page, these events will be captured and bubbled, starting with capturing from the outside/document to the inside/button in this case, and then bubbling up from the inside/button to the furthest/outside (document)
//code is run on the bubble phase

// const buttons = document.querySelectorAll("button");
// document.addEventListener("click", () => {
//   console.log("clicked document");
// });

// document.body.addEventListener("click", () => {
//   console.log("clicked body");
// });

// buttons.forEach((e) => {
//   e.addEventListener("click", () => {
//     console.log("clicked button");
//   });
// }); //sequence of output: clicked button, clicked body, clicked document

// const buttons = document.querySelectorAll("button");
// document.addEventListener("click", () => {
//   console.log("clicked document");
// });

// document.body.addEventListener(
//   "click",
//   () => {
//     console.log("clicked body");
//   },
//   { capture: true } // setting capture to true will capture this event first before the button
// );

// buttons.forEach((e) => {
//   e.addEventListener("click", (e) => {
//     e.stopPropagation(); //this will stop the browser from propagating and won't capture body and document.
//     console.log("clicked button");
//   });
// }); //sequence of output: clicked button, clicked body (baucause body has a  { capture: true } otherwise wouldn't be logged)

//creating a new button and also adding the event listener to this new button
// const button = document.querySelector("button");
// const newButton = document.createElement("button");
// newButton.innerHTML = " Button 2";
// document.body.append(newButton);
// // //will NOT log clicked on both, code is only being added to button and not newButton
// // button.addEventListener("click", () => {
// //   console.log("clicked");
// // });
// //RESOLUTION
// //this code has no connection with variable declared on previous example, it targets the document and ask for the matching of "button"
// document.addEventListener("click", (e) => {
//   if (e.target.matches("button")) {
//     console.log("clicked");
//   } //.matches(name as targeret on css)
// });

//* ----------------------------64. BROWSER STORAGE--------------------------*//
//3 different main types of browser storage: cookies, local storage and session storage
// Local Storage       |  Cookies              | Session Storage
// 10 MB (a lot)       | 4KB                   | 5MB                   //you're gonna get limit of for each item inside
// data never expires  |manual up to 400 days  | Expire on tab close   //when the data expires?
// only on user browser| client and server     | only on user browser //how can you access this information? *cookies are perfect for when u need to send data from the client/user to the server automatically
// Easy to use         | Hard                  | Easy to use

//LOCAL/SESSION STORAGE can access with keyword localStorage,since it is an object has methods on it
//syntax .setItem("key - you choose", "value - always string") syntax to save a new item on the storage
// window.localStorage.setItem("Name", "Leticia");
// //updated the same key "name", it will not add a new key
// localStorage.setItem("Name", "Carolina");
// //deleting an item .removeItem('key')
// // localStorage.removeItem("Name"); //case-sensitive
// //same for session Storage
// sessionStorage.setItem("Name", "Leticia");
// sessionStorage.setItem("Name", "Azevedo");
// sessionStorage.removeItem("Name");
// //getting data from the storage with .getItem("key")
// console.log(localStorage.getItem("Name")); //Carolina

// //COOKIES
// const date = new Date(2024, 0, 1).toUTCString(); //cookies can add a manually expiration, need to set a date for it maximum of 400 days
// //storaging data with cookie
// document.cookie = `name=Leticia; expires=1 Jan 2024 00:00:00 `; //expires=${data} could alternatively set expires to the variable date
// //addinng a new cookie to the storage
// document.cookie = "age=26"; //this will not redeclare the cookie but add a new one instead, unless we declare the SAME key and another value
// console.log(document.cookie);
// //to delete a cookie need to set key as nothing and the expires as a past date
// //deleting cookie with key of Name
// document.cookie = "name= ; expires=1 Jan 2023 00:00:00";

console.log("hi!!!");
