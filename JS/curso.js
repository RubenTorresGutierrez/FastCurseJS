//curso.js
//Esto es un comentario

/* Esto es un comentario
  con muchas líneas
*/

'use strict' //Activar modo estricto

//Formas de salida
console.log('Hola Mundo'); //Salida en consola
document.write('Adiós mundo cruel'); //Salida en documento
alert('Viva mi profe de programación'); //Salida en popup

//Formas de entrada
var num = prompt('Dime algo bonito:');
console.log(num);

//Declaración de variables
var num; //Declara la variable
num = 7; //Tipo int
num = 'Zapato'; //Ahora se cambia a tipo String

num = 3.141592; //Tipo
num = 6.022E23; // Tipo 6'022 * 10^23
var G = 6.67E-11;
var texto = 'Zapato';
var booleano = true; //Tipo booleano
var nulo = null; //Tipo null
var nose = undefined; //Tipo undefined

var fecha = 12;

var texto = 'Tacón alto'; //Permite redeclarar y reasignar
var texto = 7; //Redeclaración porque lleva var
texto = true; //Reasignación porque no lleva var y solo se le cambia el valor
              // Alcance (scope) global/local (función)

console.log(texto); // => true
function funcion1(){
  console.log(texto); // => undefined
  var texto = 78;
  console.log(texto); // => 78
}
funcion1()
console.log(texto); // => true

texto = 'En un lugar de la Mancha';
const PI = 3.141592

let var1 = 7; //let permite Reasignar pero no Redeclarar
              //Alcance de bloque
var1 = 8 //reasignar

function funcion2(){
  let var1 = 'Zapato'
}

//Decisiones
let haySol = true;
if(haySol) console.log('¡Qué calor!');
else console.log('Lleva paraguas');

let num1 = 16
switch(num1){
  case 4:
    console.log('sffaagagsfd');
    break;
  case 5:
  case 'Hola':
  case true:
    console.log('asagdfsgfdgf');
    break;
  default:
}

//Bucles

for(let i=0;i<7;i++)
 console.info(i);

let i = 0;
while(i < 10){
  console.error('PFFFFFF');
  i++;
}
