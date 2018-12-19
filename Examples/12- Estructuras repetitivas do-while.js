var contador = 0;

var llueve = () => Math.random()>0.25;

do{
  contador++;
}while(!llueve());

var frecuencia = contador === 1 ? "vez":"veces";
console.log(`Fui a ver si llovía ${contador} ${frecuencia}`);