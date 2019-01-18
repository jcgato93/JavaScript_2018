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


// estructura con Promesas
obtenerPersonaje(1)
    .then(function(personaje){
        console.log(personaje)
    })
    .catch(function(id){

        console.log(`Sucedió un error al obtener el personaje ${id}`)
    })