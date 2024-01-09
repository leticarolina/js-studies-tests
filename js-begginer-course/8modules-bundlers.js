//* ---------------------69. ES6 MODULES------------------*/
//raw exporting and importing code to another .js file
//need to tell browser that will use module on the html head <script type="module"></script> (this automatically has defer on it)

//example export
//code at script1.js helper doc with some code inside
//export keyword before the variable
// export const me = { name: "Leticia", age: 26 };
// export const luca = { name: "Luca", age: 31 };
// function printName(user) {
//   console.log(`Name: ${user.name}. Age: ${user.age}`);
// }
//default export can also be inline declared (when importing the default no need curly brackets and can choose any name )
// export default printName;

// example import
// code at script2.js with <script type="module" src="/script2.js ></script>
// import print, { me as leti, luca } from "./7advanced-dom.js";
// // if it's not default export need to defined inside curly brackets {}, to rename = {NameofVariable as newName}
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
// //if exporting more than one thing better to declare as an object
// module.exports = { me: me, luca: luca, printName: printName }; //can also write module.exports = { me, luca, printName } as long as the key and the variable are exactly the same, can do with any object

//code to import require()
// const imported = require("./user.js"); //variable to set the whole object imported
// const leti = imported.me; //tagging the key of the object and setting as a new variable
// const lu = imported.luca;
// const aFunction = imported.printName;
// aFunction(leti); // Name: Leticia. Age: 26

//* ---------------------71. NPM node package manager website------------------*/
//npm is the way to import libraries and packages into the project
//need to have node installed in order to use npm (node = javascript run time ennviroment)

//2 ways to install a package, locally (only for that ptoject) and globally
//to instal globally declare npm install -g NameOfPackage

//check if ntm is installed
//npm -v

//check current depencies on package.json
//npm list

//IMPORTING A NPM TO USE ON NODE
//code to initiate npm, this will create package.json file with dependencies inside, each depency is a package installed
//npm init -y (-y is yes to all questions)

//terminal code to install npm a package, this will turn nameOfPackage as value of dependencies so won't need the big folder of package
//npm install NameOfPackage

// //js normal file, running the npm inside node
// const uuid = require("uuid");
// //uuid.v4() is the function inside this specific npm to generate a randon ID
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
