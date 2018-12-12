var x =4,y='4';

var sacha={
	nombre:'Sacha'
}
var otraPersona={
	nombre: 'Sacha'
}
var otraPersona1 = sacha;

var otraPersona2={
	...sacha
}
if(x==y){
	console.log("x==y -> True Cuando usamos 2 igual (==) javascript lo lleva a un mismo tipo de variable");
}
if(!(x===y)){
	console.log("x===y -> False Cuando usamos 3 igual (===) javascript compara el tipo de variable");
}
// sacha==otraPersona  - >  false    False por que compara las referencias del objeto
// sacha===otraPersona  ->  False    False por que compara las referencias del objeto
// sacha==otraPersona1  ->  true     True por que apuntan al mismo lugar de memoria 
// sacha===otraPersona1  -> truetrue por que apuntan al mismo lugar de memoria 
// sacha==otraPersona2   -> falsefalse por que es otro objeto
// sacha===otraPersona2  -> falsefalse por que es otro objeto