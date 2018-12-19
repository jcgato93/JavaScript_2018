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

var personasModificadas = personas.map(x=> x.altura * 100)
console.log(personasModificadas)



// Tambien se puede crear una funcion aparte y pasarla como parametro
// pero esta modificaria el objeto original
const pasarAlturasACms = persona =>{
    persona.altura *= 100
    return persona
}


// para hacerlo del mismo modo pero sin modificar el objeto , seria
const pasarAlturasACmsSinModificar = persona =>{
    
    return {
        ...persona,
        altura: persona.altura * 100
    }
}


personasModificadas = personas.map(pasarAlturasACms)
console.log(personasModificadas)


