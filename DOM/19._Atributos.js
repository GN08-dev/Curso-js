/**
 *  conteteditable   -indica si el elemento puede ser modificado por el usuario (bool)
 *  dir              -indica la direcionalidad del texto
 *  hidden           -indica si el elemento aun no es, ya no es, relevante.
 *  tabIndex         -indica si el elemento puede obtiener un focus de input
 *  title            -contiene un texto con informacion relacionada al elemento al que pertenece
 *        
 */
let titulo = document.querySelector(".Titulo");

//se asigna un modificador 
titulo.setAttribute("contentEditable","false");
//dir indicar el sentido del texto no se recomienda hacerlo por js si no por css 
titulo.setAttribute("dir", "rtl");  // 'rtl' indica 'right-to-left' (derecha a izquierda)

//hidden es que se oculta pero se puede indicar por html ocultarlo y lo mostramos por js
titulo.setAttribute("hidden","false");
titulo.removeAttribute("hidden");

//para colocar un focus
let link_a = document.querySelector(".link_A");

titulo.setAttribute("tabindex", "0")

//title
titulo.setAttribute("title","ajajajjajaj xd")