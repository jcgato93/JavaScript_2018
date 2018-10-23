var nombre = 'Juan', edad = 28

// Crear la funcion
function imprimirEdad() {
    console.log(`${nombre} tiene ${edad} años`)
}


// LLamado de la funcion
imprimirEdad();



// ================
// Funciones con parametros

function imprimirEdadConParams(nombre,edad){
    console.log(`${nombre} tiene ${edad} años`)
}

imprimirEdadConParams('Juan',24);



// Asignar una funcion a una variable

var functionTest= function imprimirEdadVarFuncition(nombre,edad){
    console.log(`${nombre} tiene ${edad} años`)
}

functionTest(nombre,edad);

