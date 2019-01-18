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


// estructura con Promesas encadenadas
obtenerPersonaje(1)
    .then((personaje)=>{
        console.log(personaje)
        return obtenerPersonaje(2)  // <-- este metodo retornara una nueva promesa     
    })
    .then(personaje2 =>{
        console.log(personaje2)
        return obtenerPersonaje(3)  // <-- este metodo retornara una nueva promesa 
    })
    .then(personaje3 =>{
        console.log(personaje3)
        return obtenerPersonaje(4)  // <-- este metodo retornara una nueva promesa 
    })
    .then(personaje4 =>{
        console.log(personaje4)
        return obtenerPersonaje(5)  // <-- este metodo retornara una nueva promesa 
    })
    .catch((id)=>{

        console.log(`Sucedió un error al obtener el personaje ${id}`)
    })

