/**
 *              propiedades de siblings (hermanos)
 * nextSbling                   --es el hermano que le sigue
 * previousSibling              --los que vienen antes
 * nextElementSibling           
 * previousElementSibling
 * 
 * closest                      --nos seleciona el elemento ascendente mas sercano
 * se seleciona como el query selector se manda a llamar a la clase donde esta el div a 
 * querer mostrar  ua una vez que se hace una variable  funciona de esta forma 
 * console.log(div.closest(".div")) se hace referencia a la clase
 */
const contenedor = document.querySelector(".Contenedor");
//creando un nuevo elemento de h2 para el remplazar por el h2 anterior
const h2_Nuevo = document.createElement('H2');

const h2_antiguo = document.querySelector(".h2");

document.write(h2_antiguo.nextSibling); // devuelve lo que le sigue al h2 es un texto un parrafo

console.log(h2_antiguo.previousSibling); // el anterior que esta antes del h2 sera el h4
