//While: es como una especie de if
// '++'. '--' Operador de incremento o cremento
let count = 1;

while(count <= 50){
    console.log(count);
    document.write(count);
    count ++;
}
//Bucle infinito
//Uno de los tantos errores que se pueden cometer
let incremento = 1;

while(incremento > 0){
    //console.log(incremento);
    //incremento ++;
}
//Elementos con indices, empieza desde la posicion 0
let names = ['ryan', 'joe', 'jonh'];
console.log(names[2]);
document.write(names[2]);

//Longitud de los elementos del array para obtener el valor

let name = ['ryan', 'joe', 'jonh'];
console.log(name.length);
document.write(name.length);

//For: toma una serie de condiciones que tenemos que darle

let namex = ['ryan', 'joe', 'jonh'];
for(let miIndice = 0; miIndice < namex.length; miIndice++){
    console.log(namex[miIndice]);
    document.write(namex[miIndice]);
}

let namez = ['ryan', 'joe', 'jonh'];

for(let miIndice = namez.length -1; miIndice >= 0; miIndice--){
    console.log(namez[miIndice]);
    document.write(namez[miIndice]);
}
