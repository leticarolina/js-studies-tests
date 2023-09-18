/*-------------------------- 35. WINDOW OBJECT-----------------------*/

/*window is an object that we can access using 'window.' However it is totally optional to use it because
the browser will also understand without*/

// window.alert("Hello"); //pops out alert window saying Hello
// alert("Hello"); //same as above

// //can be good practice to write window on code before adding an event listener
//this code would still work without the window.
// window.addEventListener("resize", () => {
//   console.log("resized");
// }); //will log "resized" when user change window side
/*-------------------------- 36 .DOCUMENT OBJECT-----------------------*/
/*document is the keyword we use to access the html document, also add elements to html or change them*/

// console.log(document); //prints out the whole html page including <!DOCTYPE html>
// console.log(document.body); //prints only
// console.log(document.documentElement); //prints out only the body and head portion oh html

//creating a new element on the html using document in 3 steps
// /*1*/ const htmlElement = document.createElement("h1"); //inside the parethesis insert name of html that will be created, variable created to save info
// /*2*/ htmlElement.innerText = "Hello I am an element created on Javascript"; // innerText to specify the text content of the element, what if was an image?
// /*3*/ document.body.appendChild(htmlElement); // document.body is telling that the element will be created on the body, .appendChild(name of variable) is to push the element to the html

/*-------------------------- 37. ID AND CLASS SELECTORS-----------------------*/

//calling an id element
// const id = document.getElementById("div-id"); //inside curly brackets goes the name of the class or ID
// console.log(id);

//changing css style of an ID
// const divWithId = document.getElementById("div-id");
// console.log(divWithId);
// divWithId.style.color = "red"; // the text inside div-id will turn into red this code won't work for class because class is an array

//selecting elements by their class and changing color
// const divWithClass = document.getElementsByClassName("div-class"); // this code return htmlCollection which is an object similar to an array
// console.log(divWithClass); //HTMLCollection(3) [div.div-class, div.div-class, div.div-class]
// divWithClass[0].style.color = "green"; //this will change color of only the first div, this is kinda of an array but without the array methods
// converting HTMLcollection divs into an actual array and then modyfing the color of it all
// const classToArray = Array.from(divWithClass); // Array.from(variable) method syntax to transform something into an array, in this case the div-class
// classToArray.forEach((element) => {
//   element.style.color = "green";
// }); //this code is telling to take classToArray variable and for each array run the function

/*-------------------------- 38. QUERY SELECTOR-----------------------*/
/*select any element regardless it's type, querySelector will select first element that match and return the html element, querySelectorAll will select all elements that match and turn into a Nodelist (sort of an array) with only forEach method included*/
/*querySelectorAll has forEach method without needing to convert into an array before*/

//selecting a data element
// const dataElement = document.querySelector("[data-test]");
// dataElement.style.color = "orange";
// console.log(dataElement);

//selecting divs by class with querySelectorAll
// const divWithClass = document.querySelectorAll(".div-class"); //need to put class as it would be in CSS
// divWithClass.forEach((div) => (div.style.color = "green")); //creating a loop for each array and then changing it's color, no need to change to array with query bcs it has forEach method appended

//selecting an input
// const input = document.querySelector("input");
// console.log(input); // <input>
// //can be more specific
// const inputSpecific = document.querySelector("input[type='text']");
// console.log(inputSpecific); //<input type="text">

/*-------------------------- 39. EVENT LISTENERS-----------------------*/

//event listener on a button from html
//create a variable to target the button
// const myButton = document.querySelector("[data-button]");
// //addinng an event listener to the button variable
// myButton.addEventListener("click", (afterClick) => {
//   console.log("Clicked");
// }); //syntax nameOfVariable.addEventListener(2 parameters) first is name of the event seconf is the function that will run after event

// const myButton = document.querySelector("[data-button]");
// myButton.addEventListener("click", afterClick);
// //removing an event listener
// myButton.removeEventListener("click", afterClick);
// //function created to be the second parameter of both the event listeners
// function afterClick() {
//   console.log("Clicked");
// } //nothing will happen on the console after clicking bcs the event is being added and remove right after on the same click

//addidng event listener to an input
// const input = document.querySelector("[data-input]");
// input.addEventListener("change", inputChanged);
// function inputChanged() {
//   console.log("The input value has been changed");
// } // "change" event listener will run once the input has been changed and mouse clicked out of the input
//using "input" event instead of "change" will return how many characters are being written on the input

//Using 'submit' event listener on the submit button from a form
// const submitButton = document.querySelector("[data-form]");
// submitButton.addEventListener("submit", (clicked) => {
//   clicked.preventDefault(); //this code is to prevent the default behaviour when running code**
//   console.log("Submitted form");
// });
//**the default behaviour for submit event listener, is to submit a form again to same page bcs it was not specified where the form will be submitted to and the console.log will not work so need to use method .preventDefault() to escape default behaviour   */

//PREVENTING THE DEFAULT BEHAVIOUR
//exercise: Create an anchor <a> and when its clicked prevent the default (opening the link) and log something to the console instead
// const site = document.querySelector("[data-anchor]");
// site.addEventListener("click", (a) => {
//   a.preventDefault(); //this method prevents the link to be opened and will run code below instead
//   console.log("The link was clicked");
// });
//same result of exercise on a different way
// const theLink = document.querySelector("a");
// theLink.addEventListener("click", recalculate);
// function recalculate(aa) {
//   aa.preventDefault();
//   console.log("The link was clicked");
// }

//TYPES OF Event
/*mouseenter = everytime mouse hover will trigger the event listener
mouseleave = whenever the mouse leave hovering the object will trigger the event listener
mouseover = mouse over will only run once when the mouse is over an element (?)
focus = whenever the object receives focus (stop will mouse or click) from the mouse it will trigger
blur = after the object loose the focus
rezise = whenever the user resixe the window browser */

/*----------------NORMAL VS ARROW FUNCTION (using 'this' keyword)---------------*/

//always use arrow function is you will use the keyword 'this'
// const button = document.querySelector("[data-button]");
// //adding evennt listener with arrow function to log 'this'
// button.addEventListener("click", (theEvent) => {
//   console.log(this);
// }); //'this' will access a window object (means that can do things like this.document inside the arrow function only)
// //adding evennt listener with normal function to log 'this'
// button.addEventListener("click", function theEvent(a) {
//   console.log(this);
// }); //this will access the html code for button, if I would write console.log(a.targe) would return the same

/*----------------------------DATA ATTRIBUTES------------------------*/

// const dataOne = document.querySelector("[data-one]");
// //dataset will give a javascript object with all data values it has inside
// // console.log(dataOne.dataset); // return {one: '123'} "one" is from data-one="123" name I gave. (If you dont give a value for data it will return empty string)
// // console.log(dataOne.dataset.one); //return only value of the data "123"
// //changing value of data attribute inside javascript (instead of HTML)
// dataOne.dataset.one = "456"; //this will change 123 to 456 only on javascript not html (same way as changing value of an object)

//this code will chage inside the html data-clicks= "" the amount of times the button is clicked
// const buttons = document.querySelectorAll("button");
// buttons.forEach((theButton) => {
//   theButton.addEventListener("click", () => {
//     const dataToNumber = parseInt(theButton.dataset.clicks); //.clicks is from the data-clicks on html
//     theButton.dataset.clicks = dataToNumber + 1;
//   });
// });

/*----------------------------DOM TRAVERSAL------------------------*/
/*traverse = atravessar*/
//key elements = children, nextElementSibling, previousElementSibling, parentElement
/*  <div id="grand-parent">
      Grand Parent 
      <div>
        Parent 1
          <div id="child-one" class='child' >Child 1</div>
          <div class='child'>Child 2</div>
      </div>
      <div> Parent 2</div>
    </div> */

//changing the color of only the first children of Parent 1

//getting the parent element of a child
// const childOne = document.querySelector("#child-one");
// const itsParent = childOne.parentElement; //getting the parent element of the target
// itsParent.style.color = "red";
// //getting the parent of itsParent
// const grandParent = itsParent.parentElement;
// grandParent.style.color = "blue";

//jumping from the child straight to the grand parent, without having to pass thru elements in between using method closest()
//*important because not always you will know how many children/parent there is
// const childOne = document.querySelector("#child-one");
// const grandParent = childOne.closest("#grand-parent"); //closest method look for all of the parents and finds the FIRST/closest one that matches with selector we put in () that can be class, id etc
// grandParent.style.color = "red";

//jumping from the grand parent to the childs
// const grandParent = document.querySelector("#grand-parent");
// const childrens = grandParent.querySelectorAll(".child"); //queryselectorAll will select all elements that match with class child
// childrens.forEach((c) => {
//   c.style.color = "red";
// });//forEach because it is more than one element then need to create a function

/*----------------------------TO DO LIST CODE------------------------*/
// //1. Select all elements
// const form = document.querySelector("#new-item-form");
// const list = document.querySelector("#list");
// const input = document.querySelector("#item-input");
// const button = document.querySelector("[data-button]");

// //2. When click submit the form, add a new element
// form.addEventListener("submit", (a) => {
//   a.preventDefault();
//   //2.1 create a new item/element on the html after click submit
//   const item = document.createElement("div");
//   item.innerText = input.value; //setting what will be the inner text of div
//   item.classList.add("list-item"); //addidng the css class list-item to this new element created
//   //2.2 add the item/element to the list element on html using append child
//   list.appendChild(item); //syntax parentHTMLElement.appendChild(variable)
//   //2.3 clear the input after clicking to add the value
//   input.value = "";
//   //2.4 Setup event listener to delete item when click on it 2 ways
//   item.addEventListener("click", (deleted) => {
//     list.removeChild(item); //this will remove the child from the list
//     item.remove(); //method remove() willremove this individual item
//   });
// });
