const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id/'


function obtenerPersonaje(id) {

    return new Promise((resolve, reject) => {
        fetch(API_URL + PEOPLE_URL.replace(":id", id), { model: 'cors' })
            .then((response) => {
                return Promise.resolve(response.json())
            })
            .then(json => {
                resolve(json) // <-- Resolver la promesa, es decir que retorna el resultado si todo se ejecuto correctamente
            })
            .catch(function (err) {
                reject(id) // <-- Rechazar la promesa, retorna el valor cuando sucede algun error
            });
    })
}


// Multiples request en paralelo

var ids= [1,2,3,4,5,6,7] // <-- array de id de personajes

// Retorna un array de promesas
var promesas = ids.map(function(id){
    return obtenerPersonaje(id)
})

// se pasa por parametro un array de promesas, si se ejecutan correctamente, retornara el array de valores
Promise.all(promesas)
    .then(personajes => {
        personajes.map((value,index)=>{
            console.log(`Hola mi nombre es ${value.name} y soy el personaje #${index}`)
        })
    })
    .catch(()=>{
         console.log(`Sucedió un error al obtener el personaje`)
    })