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
//the way javascript run the code

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
function sayHi() {
  console.log("hi 1");
  setTimeout(() => {
    console.log("hi 2");
  }, 30);
  new Promise((resolve) => {
    resolve("hi 3");
  }).then((a) => {
    console.log(a);
  });
  setTimeout(() => {
    console.log("hi 4");
  }, 0);
  console.log("hi 5");
}
sayHi();
//hi 1, hi 5, hi 3, hi 4, hi 2
//hi 1, hi 5 (MAIN THREAD)
//hi 3 logged out after function started to run
//hi 4, hi 2 queued up accordingly to the settimeout specifically
for (i = 0; i < 1000; i++) {
  console.log("First things first");
}
