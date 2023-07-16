//* --------------------------------61. FETCH------------------------------*//
//FETCH will return data from the server, mostly an API

//JS return a fetch as a promise
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json(); //data stored on the server in this case is the "stringified" version of the JSON object, need to convert to json
  })
  .then((data) => {
    console.log(
      data.map((user) => {
        user.name;
      })
    );
  });
