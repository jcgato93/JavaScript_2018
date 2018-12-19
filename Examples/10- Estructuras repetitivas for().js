var camilo={
    nombre: 'Camilo',
    apellido: 'Castillo',
    edad: 25,
    peso: 75
}


// En este ejemplo se calculara el peso de la persona a lo largo de un año
console.log(`Al inicio del año ${camilo.nombre} pesa ${camilo.peso} `)


const aumentarDePeso = (persona) =>{
    persona.peso += 0.2 ;
}


const adelgazar = (persona) =>{
    persona.peso -= 0.2
}

for (let index = 0; index <= 365; index++) {
    
    
    var random = Math.random(); // random retorna un numero entre 0 y 1

    if(random < 0.25 ){
        // aumentaDePeso
        aumentarDePeso(camilo)
    }else if(random < 0.5){
       // adelgazar
       adelgazar(camilo)
    }
}

console.log(`Al final del año ${camilo.nombre} pesa ${camilo.peso.toFixed(2)} `)