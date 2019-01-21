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


//============== Async & await ============================


/**
 * Para utilizar await dentro de una funcion
 * esta debe ser asincrona , y se denota con 
 * la palabra async antes de la palabra function
 */
async function obtenerPersonajes(){

    var ids= [1,2,3,4,5,6,7] // <-- array de id de personajes
    
    // Retorna un array de promesas
    var promesas = ids.map(function(id){
        return obtenerPersonaje(id)
    })

    // Se debe contener dentro de un try{...}catch
    try {
        
        var personajes = await Promise.all(promesas) // <-- Cuando todas las promesas se resuelvan , se guardaran en una variable

        console.table(personajes)

    } catch (id) {
        console.log('Se presento un error')
    }
       
}


obtenerPersonajes();