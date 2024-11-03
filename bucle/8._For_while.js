let numero = 0;
let numero2 = 0;
//se ejecutara para poder llegar a 10 finaliza el programa
document.write("Bucle while");
document.write("<br>");
while (numero <= 10){
    document.write(numero);
    document.write("<br>");
    numero++;
}
document.write("<br>");

//el do while siempre se ejecuta y despues comprueba si es verdadero
document.write("Do while");
document.write("<br>");
do {
    document.write(numero2);
    document.write("<br>");
    numero2 ++;
} while (numero2 <= 10);

//ejercicio
document.write("<bR>");

document.write("Ejercicio");
document.write("<br>");
while (numero <= 20) {
    if (numero == 15) {
        document.write("Termino el programa");
        break;
    }
    document.write(numero + "<br>");
    numero++;
}

document.write("<br><br>");
//ciclo for 
document.write("Ciclo For");
document.write("<br>");
for (let index = 0; index < numero2; index++) {
    document.write(index + "<br>");
    
}

//ciclo for in devuelve el valor del inice es decir posicion, declaramos una lista
let animales = ['perro','gato','gamster'];
document.write("<br>");

document.write("recorriendo una lista con un for");

document.write("<br>");
for(animal in animales){
    document.write(animal + "<br>");
}

//ciclo para mostrar los elementos  usando  of 
for(animal of animales){
    document.write(animal + "<br>");
}