'use strict'

const somethingWillHappen = () =>{
  return new Promise((resolve, reject) =>{
    if (true) {
      resolve('hey!');
    } else {
      reject('Ooops!');
    }
  })
}

somethingWillHappen()
.then(responsive => console.log(responsive))
.catch(err => console.log(err));

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject)=> {
    if (true) {
      setTimeout(() => {
        resolve('True');
      }, 3000)
    } else {
      const error = new Error('Oops!');
      reject(error);
    }
  })
}

somethingWillHappen2()
.then(response => console.log(response))
.catch(err => console.error(err));

// También podemos ejecutar varias promesas a la vez

Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response => {
  console.log('Array of results', response);
})
.catch(err => {
  console.error(err);
})