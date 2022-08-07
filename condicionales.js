//Control de flujo
//es la forma en el que el programa puede comportarse de una o de otra manera
let passwordDb = 'pep123'; //Ej: contraseña actual

let input = 'pep123'; //Ej: contraseña erronea

let resultLogin = passwordDb == input; 


//'if' es una palabra clave que puede definir una condicion
//Solo hay dos estados, o verdadero o falso
if (resultLogin === true) {
    console.log('Login Correcto');
    document.write('Login Correcto');
}else{
    console.log('Login incorrecto');
    document.write('Login incorrecto');
}
//Puntuacion en un juego
let score = 30;
if (score >= 30){
    console.log('You need to practice more');
    document.write('You need to practice more');
}else if(score >= 15){
    console.log("You're improving");
    document.write("You're improving");
}
else{
    console.log('You need to follow this tutorial');
    document.write('You need to follow this tutorial');
}
//Switch
//Verificacion de tipo de tarjeta
//Case es para comprobar distintos casos
//'defauld' es como el 'else'
let typeCard = 'Credit Car';
switch(typeCard){
    case 'Debid Card':
        console.log('This is a Debid Card');
        document.write('This is a Debid Card');
        break;
    case 'Credit Card':
        console.log('This is a Credit Card');
        document.write('This is a Credit Card');
        break;
    default:
        console.log("You don't card");
        document.write("You don't card");
    }