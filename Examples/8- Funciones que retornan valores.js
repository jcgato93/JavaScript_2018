'use stric'

var  daniel = {
    nombre: 'daniel',
    edad : 21,
  },


// Verifica si la persona es mayor de edad o no
function esMayorDeEdad(persona){
    return persona.edad >= 18
}  


function imprimirSiEsMayorDeEdad(persona){
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    }
    else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}