/*--------------------------WINDOW OBJECT-----------------------*/

/*window is an object that we can access using 'window.' However it is totally optional to use it 
the browser will also understand without*/

// window.alert("Hello"); //pops out alert window saying Hello
// alert("Hello"); //same as above

// //can be good practice to write window on code before adding an event listener
// window.addEventListener();

/*--------------------------DOCUMENT OBJECT-----------------------*/
/*document is the keyword we use to access the html document, also add elements to html or change them*/

// console.log(document.documentElement);//prints out only elements of the html

//creating a new element on the html using document in 3 steps
// /*1*/ const htmlElement = document.createElement("h1"); //inside the parethesis insert name of html that will be created, variable created to save info
// /*2*/ htmlElement.innerText = "Hello I am an element created on Javascript"; // innerText to specify the text content of the element, what if was an image?
// /*3*/ document.body.appendChild(htmlElement); // document.body is telling that the element will be created on the body, .appendChild(name of variable) is to push the element to the html

/*--------------------------ID AND CLASS SELECTORS-----------------------*/

//calling an id element
//console.log(document.getElementById("div-id")); //inside curly brackets goes the name of the class

//changing css style of an ID
// const divWithId = document.getElementById("div-id");
// divWithId.style.color = "red"; // the text inside div-id will turn into red this code won't work for class because class is an array

//selecting elements by their class and changing color
// const divWithClass = document.getElementsByClassName("div-class"); // this code return htmlCollection which is an object similar to an array
// divWithClass[0].style.color = "green"; //this will change color of only the first div, this is kinda of an array but without the methods
// converting divs into an actual array and then modyfing the color of it all
// const classToArray = Array.from(divWithClass); // Array.from(variable) method syntax to transform something into an array, in this case the div with class
// classToArray.forEach(function (hi) => { return
//   hi.style.color = "green";
// }); //this code is telling to take classToArray variable and for each array run the function

/*--------------------------QUERY SELECTOR-----------------------*/
/*select any element regardless it's type, querySelector will select first element that match, querySelectorAll will select all elements that match on a node list*/
/*querySelectorAll has forEach method without needing to convert into an array before*/

//selecting a data element
// const dataElement = document.querySelector("[data-test]");
// dataElement.style.color = "red";
// console.log(dataElement);

//selecting divs by class with querySelectorAll
// const divClass = document.querySelectorAll(".div-class"); //need to put class as it would be in CSS
// divClass.forEach((line) => (line.style.color = "green")); //creating a loop for each array and then changing it's color, no need to change to array with query bcs it has forEach method appended

//selecting an input
const input = document.querySelector("input");
console.log(input);
