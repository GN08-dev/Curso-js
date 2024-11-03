//documen object model
/**
 *          Nodo
 *  en el dom es cualquier etiqueta del cuerpo, como un parrafo, el mismo body o incluso
 *  las etiquetas de una lista, no siempre son etiquetas, aveces suelen ser otro tipo
 *  de elemento 
 *  
 *  tipos de nodo 
 *  document: el nodo doument es el nodo raiz a partir del cual se deriva de el resto nodos
 *  Element: nodos definidos por html. (ejemplo etiquetas h1,div,a. et..)
 *  text: el texto dentro de un nodo element se considera un nuevo nodo hijo de tipo text
 *  attribute: los atributos de la etiquetas definen nodos (en javascript no los veremos como nodos sino como informacion asociada al tipo element)
 *  comentarios y otros:  los comentarios y otros como declaraciones doctype en cabecera de los documentos
 * 
 * 
 * 
 *      metodos de seleccion de elementos(se coloca document.segido de lo que buscaremos) 
 *  getElementById()             - Selecciona un elemento por su id
 *  getElementsByTagName()       - Selecciona todos los elementos que coicidan con el nombre de la etiqueta especificda.
 *  querySelector()              - Devuelve el primer elemento que coicida con el grupo especificado de selectores.
 *  querySelectAll()             - Devuelve todos los elementos que coincidan con el grupo especificado de selectores.  
 */

// laforma mas optima de selecionar un elemeto es getElementById para cuando se trata por ID, que usar por queryselector o getElementsByTagName
let parrafo = 'segimos chambiando siiii';
//selecionamos el elemento del parrafo con su nombre tambien se puede seleccionar por su tipo de tag o etiqueta
let seleccion_por_Id = document.getElementById("Parrafo_Fastidio");

//segunda forma de selecionar un elemento
let seleccionPorTag = document.getElementsByTagName('p') // devuelve una lista de eleemntos  y lo selecionamos como si fuera las posicionesde un array

//querySelector
parrafo = document.querySelector(".Parrafo"); // se eleciona de la misma forma que css pero usando lo que es . para clases # para id

//document.write(parrafo)

//selecionar elelemtos por querySelectAll()
parrafo = document.querySelectorAll(".Parrafo"); // seleccionamos ya sea por su id o clase 
document.write(parrafo[1]); // mostramos por el tippo de posicion