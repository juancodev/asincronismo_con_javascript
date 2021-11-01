'use strict'

const fetchData = require('../utils/fetchData')
const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)
.then(data => {
  console.log(data.info.count);
  return fetchData(`${API}${data.results[0].id}`)
})
.then(data => {
  console.log(data.name)
  return fetchData(data.origin.url)
})
.then(data => {
  console.log(data.dimension)
})
.catch(err => console.error(err));

// importamos la funcion
const fetchData = require('./../utils/fetchData');
// declaramos la ruta de la api
const API = 'https://rickandmortyapi.com/api/character/';

/*
fetchData(API)
  .then(data => {
    // imprimimos el numero de personajes
    console.log(data.info.count);
    // volvemos a hacer la promesa de pedir algo, en este caso el personaje 1: Rick
    return fetchData(`${API}${data.results[0].id}`);
  })
  .then(data => {
    // esperamos la promesa anterior y vemos el nombre de rick
    console.log(data.name);
    // volvemos a hacer la promesa, pero esta es sobre la dimension de Rick
    return fetchData(data.origin.url)
  })
  .then(data => {
    // vemos la dimension de rick
    console.log(data.dimension);
  })
  // si hay error
  .catch(err => {
    console.log(err);
  }) */