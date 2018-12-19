var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

//declarar un array
var personas = [sacha, martin, dario, vicky, paula, alan]

//metodo para filtrar arreglos (recibe un array como parametro)

/**
 * una forma de hacerlo seria
 * 
 *  var arrayPersonasAltas = personas.filter(persona => persona.altura > 1.8)  
 * 
 *  o
 * 
 *  var arrayPersonasAltas = personas.filter({altura} => altura > 1.8)
 */

const esAlta = ({altura}) => altura > 1.8
const esBaja = ({altura}) => !esAlta({altura})

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

console.log(personasAltas)
console.log(personasBajas)