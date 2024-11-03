//cadena del array 

let nombres = ['juan','noe','dalto'];
//      modificadores de array
//pop lo que hace es extraer el ultimo elemento de la cadena y eliminarlo de ella
// lo almacena en la variable el ultimo resultado
// shift de la misma forma elimina un elemento pero elimina el primer elemento 
// push agrega un elemento al final de la lista / llamando a resultado muestra la cantidad elem
// revers invierte el orden del elemento
// unshift agrega uno o mas elementos al prinmcipio del array, se puede agregar sin limit 
//  resultado = nombres.unshift(0,1,2,3,4);
// sort ordena los elementos  ya sea de forma de abecedario o numerico
// splice elimna o remplaza pero si no queremos eliminar ninguno se coloca 0,0 y los elementosagregar
//numero.splice(0,0,"roberto","elote"); 
let resultado = nombres.push('zeus es hermoso');

document.write(resultado + '<br>');
document.write(nombres + '<br>');

///         metodos acesores
/**
 * join une matrices o cadenas y las vuevlve cadenas de texto
 * slice  es cuando le decimos crea una nueva cadena diciendo desde donde comenzara y temrinara
 */

resultado = nombres.slice(0,-1);

document.write(resultado);

/**
 * de repeticion
 * filter() crea un nuevo array cuando  y siempre cumpla la condicion
 * filter usa una funcion de flecha
 * forech es lo mismo
 * solo que filter se puede agregar para indicarle que cumpla cierta condicion 
 * ejemplo
 * resultado = nombres.filter(nombre => nombres.lenght > 5);
 * solo si cumple la condicion la funcion del filter devuelve el valor si es verdadero
 */
nombres.filter(numero => document.write(numero + '<br>'));
