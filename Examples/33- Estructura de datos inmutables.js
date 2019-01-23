/*
Autor: Daniel Páez
URL Autor:  heysoypaez.com
URL código: github.com/heysoypaez
*/


/*PROTOCOLO DE VERIFICACIÓN DE FUNCIONAMIENTO
==================================*/
//Imprimiendo algo en la consola
console.log("inicializando archivo");


/*DECLARACIÓN DE OBJETOS
============================*/		

const daniel = {
	nombre: "Daniel",
	apellido: "Páez",
	edad: 18
}


/*DECLARACIÓN DE VARIABLES
==================================*/


/*DECLARACIÓN DE FUNCIONES
========================================================*/

const cumpleanos = ( persona ) => persona.edad ++ 
//esta función modifica cosas fuera de ella


//esta funcion devuelve un nuevo objeto con su edad + 1
//el objeto de daniel queda inmutable, no cambia
const cumpleanosInmutable = persona => ({
	...persona,
	edad: persona.edad + 1
})

/*EJECUCIÓN DE FUNCIONES Y PROMESAS
========================================0*/

cumpleanosInmutable(daniel)


/*=======================================
RENDER EN PANTALLA
Agregando al html datos de la clase
=======================================*/

//Variables
let temaClase = "Entendiendo los closures de javascript";
let titulo = document.getElementById("title")
let contenidoClase = document.getElementById("contenido-clase")

//Variables reasignadas
titulo.innerHTML=  temaClase;
contenidoClase.innerHTML= temaClase;

//contenido de la clase

let apuntes = document.getElementById("apuntes")
let textoContenido = "=> Reduce al minimo el alcance de cada una de las variables a menos que tenga un objetivo concreto" 

apuntes.innerHTML = `${textoContenido}`;