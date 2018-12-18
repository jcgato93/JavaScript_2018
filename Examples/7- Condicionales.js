var edad = 18;
var edadTexto = edad == 5 ? 'Cinco' :
                edad == 7 ? 'Siete':
                edad == 11 ? 'Once':
                edad == 15 ? 'Quince':
                edad >= 18 ? 'Mayor de edad':
                    'Otra edad';

console.log( edadTexto ); // Mayor de edad



var  daniel = {
    nombre: 'daniel',
    edad : 21,
  },
  
  david  = {
    nombre: 'david',
    edad : 17
  }
  
  function mayorDeEdad({nombre, edad}) {
  console.log(`${nombre} es ${edad >= 18 ? 'mayor':'menor'} 
   de edad `);
  }