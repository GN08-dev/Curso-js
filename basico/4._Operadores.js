/// para mostrar en el html se usa document.write
let numero = 10;
numero *= 5;
//operadores
/**
 * resto %= 6; muestra los resuidos de una divicion
 */

document.write(numero)
//metodo concat  es un metodo de cadena 

let valor = '5';
let valor2 = 10;

let frase = valor.concat(valor2);

document.write(frase);

//concatenar cadenas o valores  usando backticks  y se ouede hasta escribir codigo
//html con el backticks
let nombre = "Juan noe";
frase = `  mi nombrea es ${nombre} y tengo hambre  `;
document.write(frase);