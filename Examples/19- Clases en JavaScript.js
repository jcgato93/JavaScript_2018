class Persona{

    constructor(nombre,apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }


    saludar(){
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}`)
    }

    soyAlto(){
        return this.altura >= 1.8
    }
}



var camilo = new Persona('camilo','castillo',1.8)

camilo.saludar()
camilo.soyAlto()



// ========== HERENCIA ====================
class Desarrollador extends Persona{
    constructor(nombre,apellido, altura){
        super(nombre,apellido,altura)
    }
}


var camilo2 = new Desarrollador();

camilo2.saludar()
camilo2.soyAlto();
