/**
 *          metodos de childs 
 * replacechild()       remplaza un hijo por otro
 * hasChildNodes()      verifica si tiene nodos o hijos
 * removeChild()        remueve un hijo en dado caso de querer
 */


const contenedor = document.querySelector(".Contenedor");
//declaramos las variables del parrafo y h2
const parrrafo = document.createElement("p").innerHTML = 'remplazado el parrafo';
const h2_Nuevo = document.createElement('H2');

h2_Nuevo.innerHTML = "Se remplazo el titulo anterior por este"

//llamamos a la clase que deseamos primero remplazar para ello creamos una variable
let h2_antiguo  = document.querySelector(".h2");

//remplazamos ahora del contenedor el h2 viejo por el nuevo
contenedor.replaceChild(h2_Nuevo, h2_antiguo);

//padres /parents
/**
 * parentElement sirve para identifica para el padre de un elemento 
 * parentNode --casi lo mismo solo que pare node seleciona el padre de un elemento 
 *              se usa para buscar el padre que esta encima del otro
 */
