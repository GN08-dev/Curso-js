//obtencion y modificacion de elementos 
/**
 * textContent      - devuelve el texto de cualquier nodo , desde que comienza hasta que termina
 * innerHTML        - devuelve el contenido html deun elemnto
 * outerHTML        - devuelve el codigo html compelto del elemento
 * 
 * 
 * // ya no usado
 * innerText        - devuelve el texto visisble de un nodo element // ya no sirve ya no es estandar
 */
// para mostrar un valor visible de un html se usa lo que es textcontent 
const parrafo = document.querySelector(".parrafo");

let resultado = parrafo.textContent;
document.write(resultado); // muestra el texto completo 

//innerHTML muestra el codigo como esta opero sin mostrar los estilos que tenga 
let resultado2 = parrafo.innerHTML;
alert(resultado2); // muestra el elemento 

//outerHTML muesta toda la informacion de las etiquetas es decir las clases , id, etc
let resultado3 = parrafo.outerHTML;
alert(resultado3); // muestra el elemento 

//********************************************************************************************* */
//creaciones de elementos 
