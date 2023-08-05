const me = { name: "Leticia", age: 26 };
const luca = { name: "Luca", age: 31 };
function printName(user) {
  console.log(`Name: ${user.name}. Age: ${user.age}`);
}
//need to declare , ser it to object if exporting more than one thing
module.exports = { me: me, luca: luca, printName: printName };
