// para encontrar un hijo por busqueda de un contenedor es 
// por firstChild que busca el primer hijo de un elemento dentro de otro
// lastchild el ultimo hijo
// childNodes me devuelve toda la lista de hijos 
const contenedor = document.querySelector(".Contenedor");

const primerHijo = contenedor.firstChild; // obtenemos el primer hijo del contenedor
const hijos = contenedor.childNodes;
console.log(primerHijo);
console.log(hijos);

 
