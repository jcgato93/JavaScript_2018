var persona = {
    nombre: "camilo",
    apellido: "castillo",
    edad: 25
}



function cumpleanos(persona) {
    
    persona.edad += 1;
}

// El uso de esta funcion afectaria el objeto , por lo que la edad quedaria en 26
cumpleanos(persona)




function cumpleanos2(edad){
    edad+=1
}

// el uso de esta funcion no afectaria la edad del objeto persona
cumpleanos2(persona.edad) // la edad de la persona seguiria siendo 25



// Si quisieramos retornar una persona nueva con los mismos datos de la 
// que se pasa por parametro , para no afectar los datos de la persona original
function cumpleanos3(persona) {
    return{
        ...persona, // se desglosa cada propiedad del objeto persona
        edad: persona.edad + 1
    }
}

var persona2 = cumpleanos3(persona)
/**
persona2 {
    nombre: "camilo",
    apellido: "castillo",
    edad: 26
}
 */