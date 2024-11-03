/**
 *          Metodos para definir, obtener y elminar valores de atributos 
 *  setAttribute()      -modifica el calor de un atributo
 *  getAttribute()      -obtiene el valor de un atributo
 *  removeAttribute()   -Remueve el valor de un atributo
 */

//seleccionamos por clase 
const rangoEditario = document.querySelector(".rangoEdad");

//mdificador de atribnuto
rangoEditario.setAttribute("type",'text'); // podemos modificarlo al gusto

//obtener el valor de un atributo en este caso type
valorDelAtributo = rangoEditario.getAttribute("type");

document.write("<br>"+ "Tipo de atributo");
document.write("<br>"+valorDelAtributo);

//removewr un atributo
//valorDelAtributo = rangoEditario.remove("type"); // remueve un atributo o valor
