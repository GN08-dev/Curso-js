//uso de la la libreria math 

numero = Math.sqrt(25) // raiz cuadrada
document.write(numero + '<br>');

numero = Math.cbrt(25);// raiz cuadrada cubica
document.write(numero + '<br>');
//max devuelve lo que esel valor mas grande de una arreglo y lo contrario min

numero = Math.random()*100;// devuelve un numero pseudo aleatorio 
numero = numero.toString();//se usa para convertirlo a sting para quitarle los decimales
num = numero[0] + numero[1];// para quitar los decimales

document.write(num + '<br>');

// mejor forma de usar numeros aleatorios 
numero = Math.random()*100;
numero = Math.round(numero);// secoloca dentro el valor a redondear 

document.write(numero);

//floor 
//devuelve un valor redondeandolo hacia abajo es decir sin importar los decimales 

//trunc devuelve la parte entera del numero x, la eliminacion de los siguientes fraccionarios
//ees decir elimina los decimales