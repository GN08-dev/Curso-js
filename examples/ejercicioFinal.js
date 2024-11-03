//devover arreglo 
const contenedor = document.querySelector(".flex-container");

//llamar al boton para cambiar el tama;o de las letras
const boton = document.querySelector(".send-button");
let valorAntiguo = boton.value;
boton.value = valorAntiguo.toUpperCase();

function crearLlaves(nombre,modelo,precio) {
    img     = "<img class='llave-img' src='../image/key.png'>";
    nombre  = `<h2>${nombre}</h2>`;
    modelo  = `<h3>${modelo}</h2>`;
    precio  = `<p>Precio <b>$${precio}</b></p>`;
    return [img,nombre,modelo,precio]; /// retorna los valores en un array o lista 
}
//metodo mas tardado   para selecionar el tipo de modelo
// const changeHidden = (number) => {
//     document.querySelector(".key-data").value = number;
// };

let documentFragment = document.createDocumentFragment();

for (var i = 0; i <  20; i++) {
    let modeloRandom = Math.round(Math.random()*10000);
    let precioRandom = Math.round(Math.random()*100+30);
    let llave = crearLlaves(`llave ${i}`, `modelo ${modeloRandom}`, precioRandom);
    //creamos un div
    const div  = document.createElement('DIV');
    //evento para obtener el value del  texto que aplanamos y obtenemos el valor del modelo
    //forma mas tardada relacionando con el de arriba y el que sige es la forma mas rapida
    // div.addEventListener("click",()=>{changeHidden(modeloRandom)})
    div.addEventListener("click",()=>{
        document.querySelector(".key-data").value = modeloRandom;
    });
    //hacemos que quede selecionado un elemento
    div.tabIndex = i;
    div.classList.add(`item-${i}`, `flex-item`); // aagregar clases 
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    documentFragment.appendChild(div);
}
contenedor.appendChild(documentFragment)