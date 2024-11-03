// creacion de elementos 
// createElements()             crea un elemento 
// createTextNode()             crea un texto dentro del item
// appendChild()                agrega el elemento
// createDocumentFragment() 

//llamamos a la clase del contenedor
const contenedor = document.querySelector(".Contenedor");

//creamos un elemento
const item = document.createElement("LI");
//creando un texto dentro de un item en este caso de la lista
const TextoItem = document.createTextNode("este es un item de el li");
//partee final para agrregar el elemento
item.appendChild(TextoItem); //lo agregamos como  un hijo al la lista el texto de item

//agregamos el li al div
contenedor.appendChild(item)
console.log(item)

//MANERA MAS SIMPLE DE AGREGAR UN TEXTO O MEJOR DICHO MODIFICAR EL ELEMENTO QUE ESTA DENTRO
const item2 = document.createElement("LI");

item2.innerHTML = "Modificando el interior del atributo";
contenedor.appendChild(item2);



// agregar varios elementos 
const fragmento = document.createDocumentFragment();
for(i = 0; i <10 ; i ++){
    const item3 = document.createElement("li");
    item3.innerHTML = "agregando valores por bucle";
    fragmento.appendChild(item3);
}
contenedor.appendChild(fragmento)
console.log(fragmento);