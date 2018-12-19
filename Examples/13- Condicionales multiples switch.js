var edad = 19


switch (edad >= 18 ) {
    case true:
        console.log('mayor a 18')
        break;

    case false:
    console.log('menor a 18')
        break;

    default:
    console.error('mensaje por defecto si no se cumple ninguna de las condiciones')
        break;
}