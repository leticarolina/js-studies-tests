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
/*1*/ const htmlElement = document.createElement("h1"); //inside the parethesis insert name of html that will be created, variable created to save info
/*2*/ htmlElement.innerText = "Hello I am an element created on Javascript"; // innerText to specify the text content of the element, what if was an image?
/*3*/ document.body.appendChild(htmlElement); // document.body is telling that the element will be created on the body, .appendChild(name of variable) is to push the element to the html
