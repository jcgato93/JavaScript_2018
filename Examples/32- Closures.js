function crearSaludo(finalDeFrase){
    return function ( nombre){ // Funcion anonima
        console.log(`Hola ${nombre} ${finalDeFrase}`)
    }
}


const saludoargentino = crearSaludo('che')
const saludoMexicano = crearSaludo('guey')
const saludoColombiano = crearSaludo('parce')

saludoargentino('Juan')
saludoMexicano('Juan')
saludoColombiano('Juan')




// Otro ejemplo
function creaSumador(x) {
    return function(y) {
        return x + y;
    };
    }

    var suma5 = creaSumador(5);
    var suma10 = creaSumador(10);

    console.log(suma5(2));  // muestra 7
    console.log(suma10(2)); // muestra 12 