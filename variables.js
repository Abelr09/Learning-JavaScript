
//Variables:
//Nunca se pueden empezar con un numero o un caracter,
//excepto el dollar o guion bajo
//Se recomienda el camelcase ej: estoEsCamelcase

var userName = "Jhon"; 
let lastName = "carter";

//Reasignando el valor a la variable
userName = 'Pepe';

//para definir constantes
const PI = 3.1416;
const id = "user1";

console.log(userName);
document.write(id);


//String
console.log("This is a string");
document.write("This is a string");

//number
console.log("14.5");
document.write("14.5");

//boolean
console.log(true);
document.write(true);

//array
console.log([1, 2, 3]);
document.write([1, 2, 3]);

//object
console.log({
    "username": "Ryan",
    "score": 70.4,
    "hours": 14
});
document.write({
    "username": "Ryan",
    "score": 70.4,
    "hours": 14
});

//calculos matematicos
let a = 60;
let b = 60;

let result = a + b;

console.log(result);
document.write(result);

//comparaciones con booleanos
let numberOne = 100;
let numberTwo = 500;

let response = numberOne < numberTwo;
 //se pueden usar las siglas "==: es igual ", "!=: es diferente, "<=, >=" 

console.log(response);
document.write(response);

//Ejemplo de comparacion de password
let passwordDb = 'pep123'; //Ej: contraseña actual

let input = 'pepGuardiola'; //Ej: contraseña erronea

let resultLogin = passwordDb == input;

console.log(resultLogin);
document.write(resultLogin); //Si las contraseñas coinciden, entonces es true, de lo contrario es false

//Union de variables: concatenacion

let name = 'Jhon';
let lastname = 'Carter';

//Se usa ' ' para dar espacio

let completeName = name + ' ' + lastname;

console.log(completeName);
document.write(completeName);

 