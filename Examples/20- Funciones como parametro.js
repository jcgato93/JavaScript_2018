class Persona{

    constructor(nombre,apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }


    saludar(fn){
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}`)

        var {nombre , apellido} = this

        if (fn != undefined) {
            fn(nombre,apellido)
        }
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

    saludar(fn){
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido} y soy desarrollador`)

        var {nombre , apellido} = this
        
        if (fn != undefined) {
            fn(nombre,apellido, true)
        }
    }
}


var camilo2 = new Desarrollador();

camilo2.saludar()
camilo2.soyAlto();



// ==================   Funciones como parametro ============================

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`)

    if(esDev){
        console.log(`no sabía que eras desarrollador/a`)
    }
}


var juan = new Persona('Juan','castillo',1.80)
var erik = new Persona('erik','erik',1.80)
var test = new Dsarrollador('test','test',1.80)

juan.saludar()
erik.saludar(responderSaludo)
test.saludar(responderSaludo)