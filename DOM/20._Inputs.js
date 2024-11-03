//atributos de inputs
/**
 * className    // muestra los datos que estan dentro de los input de una clase
 * Value        // nos muestra lo que tiene dentro de un input lo que contiene
 * type         // modificador de tipo de input
 * accept       // para determinar que tipo de dato o archivo  puede aceptar
 * form         // nos permite ejecutar un input dentro de un form  que este fuera de un form
 * minlength    // limita la cantidad de caracteres que debera tener no peude ser menor a la cantidad
 * placeholder  // coloca el un mensaje de texto en el input para que el usuario tenga idea de que dijitar 
 * required     // se coloca para informar que es un campo requerido de afuezas
 */

const input_text = document.querySelector(".input_normal");

document.write("Mostrando el nombre de el input " +input_text.className);
document.write("<br>");

document.write(input_text.value);
document.write("<br>");

document.write("Muestra el tipo de modificacion<br>");
document.write(input_text.type = "range") 
//input_text.type = "color"; //cambio a color

//accept
input_text.type = "file";
input_text.accept = "image/png"

//minlenght
document.write("<br> <br>");
const input = document.querySelector(".inputDentroForm");
input.minLength = 4; // limita  la minima que debera tener debe tener mas de 4 caracteres
input.setAttribute("minLength", '10'); //cantidad minima modificada
input.placeholder = 'que pasa mami';  // para colocar un texto de mensaje para saber que dijitar
input.required = ' '; // required campo requerido