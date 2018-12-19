var camilo={
    nombre: 'Camilo',
    apellido: 'Castillo',
    edad: 25,
    peso: 75
}


// En este ejemplo se calculara la cantidad de dias le toma a la persona bajar 3 kilos de peso
console.log(`Al inicio del año ${camilo.nombre} pesa ${camilo.peso} `)


const aumentarDePeso = (persona) =>{
    persona.peso += 0.3 ;
}


const adelgazar = (persona) =>{
    persona.peso -= 0.3
}

const comeMucho = ()=> Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4


const META = camilo.peso - 3 //meta a alcanzar

var dias = 0

// mientras el peso de camilo es mayor a la meta , debe seguir adelgazando
while (camilo.peso > META) {
    if (comeMucho()) {
        // aumentarDePeso
        aumentarDePeso(camilo)
    }

    if(realizaDeporte()){
        // adelgazar
        adelgazar(camilo)
    }

    dias++;
}





console.log(`Al final del año ${camilo.nombre} pesa ${camilo.peso.toFixed(2)} y transcurrieron ${dias} días`)