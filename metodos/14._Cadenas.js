// metodos que se usan en javascript
let cadena2 = "texto";
let cadema = "esto es una cadena de texto de prueba";
/**
 * resultado = cadema.concat('hola') // une lo que es dos cadenas o mas, 
 * 
 * verifica si dos cadenas son indenticas 
 * resultado = cadema.startsWith(cadena2); de igual forma con end
 * 
 * includes busca si en la cadena hay un texto similar a una cadena
 * resultado = cadema.includes(cadena2);
 * 
 * indexof nos muestra el en que posision se encuentra alguna palabra 
 * o valor y si no lo encuentra nos manda -1 y lastindexof es inverso de atras
 * hacia delante
 * 
 * padstart  rellena una cadena  comenzando la cantidad de caracteres, 
 * y lo que quieres introducir  y padend es al final
 * 
 * repeat es para que se repita una cadena la veces que quieras 
 * 
 * ##########################################################################
 * las mas usadas 
 * split divide las cadenas de texto dependiendo lo que nosotros  pidamos si por 
 * espacios o por comas o simbolos. identificando por espacios  se divide por secciones
 * por posiciones y solo se pide diciendo  la posicion
 * 
    resultado = cadema.split(" ");

    document.write(resultado);

    substring nos dice desde donde quiere que comience es decir crea un nuevo string 
    se le inidica la posision inicial y final

 *
 *
 * toLowerCase vuelve al string minusculas
 * toUpperCase vuelve una cadena de texto en mayusculas
 * 
 * tostring convierte un numero a string o una lista la convierte a string y ya no se 
 * identifica por posiciones
 * 
 * trim elimina los espacios en blanco
 * trimStart elima los espacios del final
 * trimEnd elimina los espacios del final
 * .length muestra el tama;o de la cadena de textos
 * valueof es para saber que ti[p de datp es ]
 */

resultado = cadema.split(" ");

document.write(resultado);