var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
}

var personas = [sacha, alan, martin, dario, vicky, paula]

// Ejemplo Claro del funcionamiento
[0,1,2,3,4].reduce(function(valorAnterior, valorActual, indice, vector){
    return valorAnterior + valorActual;
  });


// Sacar la cuenta total de cuantos libros hay
const reducer = (acum, persona) =>{
    return acum + persona.cantidadDeLibros
}

var totalLibros = personas.reduce(reducer, 0) // function , valor inicial del acumulador