const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id/'


function obtenerPersonaje(id) {
    fetch(API_URL + PEOPLE_URL.replace(":id", id), { model: 'cors' })
        .then((response) => {
            if (response.status >= 200 && response.status < 300) {
                return Promise.resolve(response.json())
            } else {
                return Promise.reject(new Error(response.statusText))
            }
        })
        .then(json => console.log(json.name))
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}


/**
 * En este caso no se sabria en que orden se daran las respuestas de
cada uno de los llamdos de la API.
Esta es una de las razones por las cuales se utilizan los callbacks,
ya que si necesitaramos que una secuencia de metodos se ejecute en un
orden determinado , debemos utilizar los callbacks
 */
obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)

