function Persona(nombre, apellido, altura){
	this.nombre = nombre
	this.apellido = apellido
	this.altura = altura
}

Persona.prototype.soyAlto = function (){
	this.altura > 1.8 ? console.log(`${this.nombre} es alto`) : console.log(`${this.nombre} es bajo`)
} 

var cesar = new Persona('Cesar', 'Lopez', 1.77)
var juan = new Persona ('Juan', 'Obando', 1.81)

cesar.soyAlto()
juan.soyAlto()