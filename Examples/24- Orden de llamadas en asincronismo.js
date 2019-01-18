const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id/'


function obtenerPersonaje(id, callback) {
    fetch(API_URL + PEOPLE_URL.replace(":id", id), { model: 'cors' })
        .then((response) => {
            if (response.status >= 200 && response.status < 300) {
                return Promise.resolve(response.json())
            } else {
                return Promise.reject(new Error(response.statusText))
            }
        })
        .then(json => {
            console.log(json.name)
            
            if (callback) {  // <-- si se envia un callback , se ejecutara luego de la respuesta de la API
                callback();  
            }
        })        
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}


/* de esta forma podriamos hacer los llamados a la API en forma ordenada ,
es decir que se ejecutara el metodo siguiente cuando el anterior finalice
*/

// Esta estructura es la que se conoce como Callback hell
obtenerPersonaje(1, function(){
    obtenerPersonaje(2, function(){
        obtenerPersonaje(3,function(){
            obtenerPersonaje(4,function(){
                obtenerPersonaje(5)
            })
        })
    })
})


