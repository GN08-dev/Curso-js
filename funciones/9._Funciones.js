//crear funciones 
function saludar (){
    let respuesta = prompt('Como estuvo tu dia??');
    if (respuesta == 'Bien') {
        alert('Me alegro');
    }else{
        alert("Hi por pendejo");
    }
}
saludar();

// creacion de funciones diferentes
let saludar2 = function (){
    document.write('Hola' + "<br>");
}
saludar2();

//funcion con retorno de valor
// los valores que se declaran dentro de la funcion se les llama
//parametros
const llamar = function(numero, numero2){
    let resul = numero * numero2;
    return resul;
}

document.write(llamar(15,15));

//forma de crear una funcion fuction se convierte en una flecha
// es decir si esta => es una funcion  si los parametros tiene solo uno entonces no es
// necesario colocar un parametro dentro de un parentecis
const flecha = (plumas, varitas, punta) => {
    return (plumas + varitas + punta)/3;
}

document.write("<br>");
document.write("Total de flechas creadas " + flecha(5,5,5))

//forma simplificada
const simpleFlecha =(plumas, varitas, punta) => (plumas + varitas + punta)/3;
 
document.write("<br>");
document.write(`Total de flechas creadas de manera simple: ${simpleFlecha(5,5,5)}`);

