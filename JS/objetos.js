//Rubén Torres
'use strict'

console.log('Cargado JS');



//////////////////////////////////// DATE ////////////////////////////////////

console.log('///////////////// DATE /////////////////');
let fecha1 = new Date();
console.log(fecha1);

let fecha2 = new Date(2021, 8, 29); //El mes empieza en 0. Enero = 0
console.log(fecha2);

const meses = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre'
];

const semana = [
  'domingo',
  'lunes',
  'martes',
  'miércoles',
  'jueves',
  'viernes',
  'sábado'
];

let hoy = `Hoy es ${semana[fecha1.getDay()]} de ${meses[fecha1.getMonth()]} de ${fecha1.getFullYear()}`;
console.log(hoy);

let ms1 = fecha1.getTime();
console.log('Desde los Beatles han pasado ' + ms1 + ' ms');

let dentro5Dias = ms1 + 5*24*60*60*1000;
//5 dias, 24 horas al día, 60 minutos cada hora, 60 segundos cada minuto y 1000 milisegundos cada segundo.

dentro5Dias = new Date(dentro5Dias);
console.log(dentro5Dias);

console.log('No sé sumar 2 + 2 = ' + (2 + 2) + '.');



//////////////////////////////////// STRINGS ////////////////////////////////////

console.log('///////////////// STRINGS /////////////////');
let nombre1 = 'Ana';
let nombre2 = 'Ángel';
let nombre3 = 'Abel';
if(nombre2 > nombre3)
  console.log(nombre2 + ' es mayor que ' + nombre3);
else console.log('No');

let texto = 'En un lugar de La Mancha, de cuyo nombre no quiero...'
console.log(texto.charAt(6));
console.log(texto.indexOf('l')); //Busca la posición de la primera "l"
console.log(texto.indexOf('e', texto.indexOf(','))); //Busca la posición de la primera "e" después de la ","
console.log(texto.includes('La Mancha')); //Si contiene lo que le pasas por parámetro
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());
console.log(texto.substr(4,10)); //El primer parámetro es la posición y el segundo la longitud



//////////////////////////////////// MATH ////////////////////////////////////

console.log('///////////////// MATH /////////////////');
console.log(Math.floor(Math.PI));



//////////////////////////////////// NUMBER ////////////////////////////////////

console.log('///////////////// NUMBER /////////////////');
let entrada = '12hola';
console.log(isNaN(entrada));
console.log(Number.parseInt(entrada));
entrada = '3.1415PiñaColada';
console.log(Number.parseFloat(entrada));



//////////////////////////////////// SET ////////////////////////////////////

//Lista: elementos ordenados con repetición
//Conjunto: Sin orden y sin repetición (SET)
//Mapa: conjunto de parejas clave-valor. Ej: DNI es la clave del objeto persona

console.log('///////////////// SET /////////////////');
let amigos = new Set();
amigos.add('Ana');
amigos.add('Juan');
amigos.add('Conde Draco');
console.log(amigos);
console.log(amigos.size);
for(let amigo of amigos)
  console.log(amigo);



//////////////////////////////////// MAP ////////////////////////////////////

console.log('///////////////// MAP /////////////////');
let coches = new Map();
coches.set('BA-9282-ZT', 'Porsche');
coches.set('TO-6891-JO', 'Seat Ibiza');
coches.set('B-5150-KFN', 'Tesla Turbo Volador');
console.log(coches);



//////////////////////////////////// SYMBOL ////////////////////////////////////

console.log('///////////////// SYMBOL /////////////////');
