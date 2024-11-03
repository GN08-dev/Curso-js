/**
 *              definicion y usos de classlist 
 *  add()       agrega una clase
 *  remove()    Remueve una clase
 *  item()      Devuelve la clase del indice especificado
 *  contains()  Verifica si ese elemento posee o no, la clase especificada
 *  replace()   Reemplaz una clase por otra
 *  toggle()    si no tiene la clase especificada, la agrega, si ya la tiene, la elimina 
 */

//sincronizar elemeto del texto 
const subTitulo = document.querySelector(".subTitulo");
subTitulo.classList.add("titulo2"); //agrega una clase mas al titulo
subTitulo.classList.remove("titulo2"); // elimina una clase que se haya agragado
subTitulo.classList.add("titulo2"); 

//item
let valor = subTitulo.classList.item(1);
document.write(valor);// muestra le valor en la pocision inicada es decir de la clase

//contains 
nombreClase = "Grandes_miau";
valor = subTitulo.classList.contains(nombreClase); // verifica si existe y sies asi es true
document.write("<br>")
if(valor){
    document.write(`La clase ${nombreClase} existe y se removera`);
    subTitulo.classList.remove()
}else{
    document.write(`La clase ${nombreClase} no existe y se agrego`)
    subTitulo.classList.add(nombreClase);
}

//metodo mas facil para agregar mas simplificado
//para forzar que mantenga un valor se muestra true y si quiere que se saque se coloca false  en dado casos que exista
// pero si quiere que se agrege o se quite de una forma mas facil solo se coloca el value
//son dos parametros (value, false/true) o solo el value para eliminar o agregar

subTitulo.classList.toggle(nombreClase); // aqui lo elimina porque es true pero s ino quiero que se elimine colocas false despues
subTitulo.classList.toggle(nombreClase); // aqui se vuelve agregar 
subTitulo.classList.toggle(nombreClase, true); // aqui permanece apesar de que existe

