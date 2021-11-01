'use strict'

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback){
  let xhttp = new XMLHttpRequest();
  xhttp.open('GET', url_api, true); // por defecto el tercer valor es true
  xhttp.onreadystatechange = function (event) {
    if(xhttp.readyState === 4) {
      if(xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText))
      } else {
        const error = new Error('Error ' + url_api );
        return callback(error, null);
      }
    }
  }
  xhttp.send();
}

// fetchData(API, function (error1, data1) {
//   if (error1) return console.error(error1);
//   fetchData(API + data1.results[0].id, function(error2, data2) {
//     if (error2) return console.error(error2);
//     fetchData(data2.species, function (error3, data3){
//       if (error3) return console.error(error3);
//       fetchData(data3.origin.url, function (error4, data4){
//         if (error4) return console.error(error4);
//         console.log(data1.info.count);
//         console.log(data2.species);
//         console.log(data3.name);
//         console.log(data4.dimension);
//       })
//     })
//   })
// })

fetchData(API, (error1, data1) => {
  // si error, matamos retornando un error
  if(error1) return console.error(error1);
  // luego buscamos en la API el id de Rick
  fetchData(API + data1.results[0].id, (error2, data2) => {
    // si error, matamos retornando un error
    if(error2) return console.error(error2);
    // por ultimo la consulta a la API que contiene su dimension
    fetchData(data2.origin.url, (error3, data3) => {
      // si error, matamos retornando un error
      if(error3) return console.error(error3);

      // mostramos los resultados :)
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);

      // rutas de las peticiones en orden
      console.log(API);
      console.log(API + data1.results[0].id);
      console.log(data2.origin.url);

    });
  });
});

fetchData(API, function (error1, data1) {
  if (error1) return console.error(error1);
  fetchData(API + data1.results[0].id, function (error2, data2) {
    if (error2) return console.log(error2);
      console.log(data1.info.count);
      console.log(data2.species);
  })
})