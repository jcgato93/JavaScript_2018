var obj1 = {
    obj2: {
        nombre: 'camilo',
        edad: 25
    }
}


function saludar(obj) {
    var { nombre, edad } = obj.obj2

    /**
     * Esto evita tener que hacer lo siguientes
     * var nombre = obj.obj2.nombre
     * var edad = obj.obj2.edad
     */

    console.log(`Hola me llamo ${nombre} y tengo ${edad} años`)
}

saludar(obj1) // Salida ->  Hola me llamo camilo y tengo 25 años
