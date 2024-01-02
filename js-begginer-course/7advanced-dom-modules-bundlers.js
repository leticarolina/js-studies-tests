//* --------------------------------61. FETCH------------------------------*//
//FETCH will return data from the server, mostly an API
//fetch is an async operation, so it returns a promise
//some API's request headers, only fetch(wont be enough) nees to declare second parameter on fetch new Request( url , {headers : {} })

//JS return a fetch as a promise
// fetch("https://jsonplaceholder.typicode.com/users") //syntax to fetch an url from sever, it's an array with 10 users object
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
// async function logging() {
//   const response = await fetch(URL);
//   const content = await response.json();
//   console.log(content);
// }
// logging();

//with PROMISE INSTEAD OF async await
// const URL = "https://jsonplaceholder.typicode.com/comments?postId=1";
// fetch(URL).then((response) => {
//   const content = response.json();
//   console.log(content);
// });

//* --------------------------------62. EVENT LOOP------------------------------*//
//https://courses.webdevsimplified.com/view/courses/javascript-simplified-beginner/521739-advanced-dom/1511157-62-event-loop
//event loop is the way javascript run the code
//usually promises have priority over others async code, they can run after the main thread is over or after the function it's in is over.
//the key is that Promises/async funnctions will run eventually when they have time to and generally run quicker than things like timeouts because of the separate queue they are in.

//javascript run code in a line called "MAIN THREAD"
//any async code will run on a different thread, and queue up to run after the main one is finished
function sayHi() {
  console.log("hi 1");
  console.log("hi 2");
  setTimeout(() => console.log("hi 3"), 300);
  setTimeout(() => console.log("hi 4"), 0);
  console.log("hi 5");
}
sayHi();
console.log("hi 6");
//hi 1, hi 2, hi 5, hi, 6, hi 4, hi 3.
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
// //updating the same key "name", it will not add a new key
// localStorage.setItem("Name", "Carolina");
// //deleting an item .removeItem('key')
// // localStorage.removeItem("Name"); //case-sensitive
// //getting data from the storage with .getItem("key")
// console.log(localStorage.getItem("Name")); //Carolina

// //same for session Storage
// sessionStorage.setItem("Name", "Leticia");
// sessionStorage.setItem("Name", "Azevedo");
// sessionStorage.removeItem("Name");

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

//* ---------------------69. ES6 MODULES------------------*/
//raw exporting code to another .js file
//need to tell browser that will use module on the html head <script type="module"></script> (this automatically has defer on it)

//example code at script1.js helper doc with code inside
// export const me = { name: "Leticia", age: 26 };
// export const luca = { name: "Luca", age: 31 };
// function printName(user) {
//   console.log(`Name: ${user.name}. Age: ${user.age}`);
// }
// export default printName;

// // example code at script2.js with <script type="module" src="/script2.js ></script>
// import print, { me as leti, luca } from "./7advanced-dom.js";
// // if it's not default export need to defined inside curly brackets {}, to rename NameofVariable as new Name.
// //default export can have any name, exported as printName and imported as print
// print(leti); //Name: Leticia. Age: 26

//* ---------------------70. NODE MODULES------------------*/
//with node we cannot have a export defaulft and the syntax is different

//code to export from user.js
// const me = { name: "Leticia", age: 26 };
// const luca = { name: "Luca", age: 31 };
// function printName(user) {
//   console.log(`Name: ${user.name}. Age: ${user.age}`);
// }
// //need to declare , ser it to object if exporting more than one thing
// module.exports = { me: me, luca: luca, printName: printName }; //can also write module.exports = { me, luca, printName } as long as the key and the variable are exactly the same, can do with any object

//code to import require()
// const imported = require("./user.js"); //variable set the whole object imported
// const leti = imported.me; //tagging the key of the object and setting as a new variable
// const luca = imported.luca;
// const aFucntion = imported.printName;
// aFucntion(leti); // Name: Leticia. Age: 26

//* ---------------------71. NPM node package manager website------------------*/
//import libraries into the project

//IMPORTING A NPM TO USE ON NODE
//code to initiate npm, this will create package.json file with dependencies inside
//npm init -y (-y is yes to all questions)

//terminal code to install npm a package, this will turn nameOfPackage as value of dependencie so won't need the big folder of package
//npm install NameOfPackage NameOfPackage2

// //js normal file, running the npm inside node
// const uuid = require("uuid");
// //uuid.v4() is the functionn inside this specific npm to generate a randon ID
// console.log(uuid.v4()); //978b8dee-894f-4abe-91fe-a60e764d7f38

//IMPORTING A NPM TO USE ON HTML
// import { v4 as uuid } from "./node_modules/uuid/dist/esm-browser/index.js"; //this relative path has to find inside the package which file has the export
// console.log(uuid()); //dd2a378b-fc51-46b8-af59-e4e44b0e9abd

//* ---------------------72. Bundler called PARCEL website------------------*/
//bundle = a collection of things or quantity of material tied or wrapped up together in a parcel

//Initiating npm to run parcel
//npm init -y

//instal parcel
//npm install parcel-bundler (will install normal dependency) which your entire program depends on to run //   Normal dependencies are installed always and will be used in the production build of your code.
//npm install parcel-bundler --save-dev (development dependency) need when actually developing the site but not when you run it // dev dependencies are only installed and used when you run the start command
//anything that is not needed for your site to run (such as Parcel, Babel, etc.) should be a dev dependency while everything else is a normal dependency.

//  Parcel-bundler will probably still work, but if you want to use new parcel do this: instead of running "npm i --save-dev parcel-bundler", run "npm i --save-dev parcel".

//using type="modules"
//example code on another file user.js
// export const luca = {
//     name: "luca",
//   };
//   export const leti = { name: "leti" };
//   export default function printName(name) {
//     console.log(name);
//   }
// example importing code from user.js to this file
// import printName, { luca, leti } from "./user.js";
// printName(leti.name); //leti

//getting a browser link from parcel to develop without using type=modules on html
//inside package.json there is an object value called scripts: scripts are sets of code you can run thru npm
//need to do the setting
// "scripts": {
//     "start": "parcel index.html" //this will run parcel inside the html file (technically can remove type="modules" from html head)
//   }
//on the terminal run ( npm start ) to get a link for browser window

//making file of code available in any browser with parcel
//inside package.json there is an object value called scripts: scripts are sets of code you can run thru npm
//need to do the setting
// "scripts": {
//     "start": "parcel index.html" //this will run parcel inside the html file (technically can remove type="modules" from html head)
//       "build": "parcel build index.html" //
//   }
//on the terminal run ( npm run build)
//will return 3 files with reduced convoluted code (?)

//then can run npm i uuid as a test, will create a dependencie of uuid on package.json
//importing code from user.js to this file
// import printName, { luca, leti } from "./user.js";
// printName(leti.name); //leti
// import { v4 } from "uuid";
// console.log(v4()); // 75667de6-8313-4640-8449-eab712ddaba0 easy running without having to do code at lesson 70 node modules
