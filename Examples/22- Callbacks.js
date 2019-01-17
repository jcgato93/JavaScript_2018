const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL= 'people/:id/'

fetch(API_URL+PEOPLE_URL.replace(":id",1), {model: 'cors'})
.then((response)=>{
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response.json())
      } else {
        return Promise.reject(new Error(response.statusText))
      }
})
.then(json => console.log(json.name))
.catch(function(err) {
    console.log('Fetch Error :-S', err);
});