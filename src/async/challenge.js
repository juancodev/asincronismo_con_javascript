// traemos nuestra funcion que llamara a la API
const fetchData = require('../utils/fetchData');
// el link de la API
const API = 'https://rickandmortyapi.com/api/character/';

// nuestra funcion asíncrona, le devemos pasar la api
const anotherFunction = async (url_api) => {
  // el TryCatch, para que se maneje de manera sincrónica
  try {
    // esperamos que se aga la primera llamada
    const data = await fetchData(url_api);

    // esperamos que se aga la segunda llamada
    const character = await fetchData(`${API}${data.results[0].id}`)

    // esperamos que se aga la tercera llamada
    const origin = await fetchData(character.origin.url);

    // imprimimos las datos de la api
    console.log(data.info.count);
    console.log(character.name);
    console.log(origin.dimension);

  } catch (error) {
    // si hay algun error lo mostramos
    console.error(error);
  }
}

console.log('before');
// mandamos a llamar nuestra api
anotherFunction(API);
console.log('After');