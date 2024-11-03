//siempre que se crea una clase de crearse un constructor 
class animal{
    //pasamos parametros
    constructor(especie, edad, color){
        // this señala al objeto que quiero crear es decir los parametros que tengo en el 
        //constrictor los señalo con la palabra this sera = al parametro que selecione
        //del contructor es decir this.edad = edad sseñala al atributo  o parametros 
        //del constructor , se crean propiedades con this
        this.edad = edad;
        this.especie = especie;
        this.color = color;
        //mostrar informacion
        this.informacion = `soy un ${this.especie} tengo una edad de: ${this.edad} mi color es: ${this.color}`;
    }
    
    //cuando se crea una funcion dentro de una clase se le llama metodo 
    //entonces si se le crea un metodo dentro de una clase es igual que una funcion
    //creando metodo info de la forma que no se debe hacer
    Info= ()=> document.write(this.informacion); // esto no se debe hacer 
    //metodo forma  correcta
    Info2(){
        document.write(this.informacion);
    }
}

//instanciar clase o crear objeto
let perro = new animal("perro",23,"rojo");
console.log(perro); // para mostrar informacion en consola
//pasar parametros 

document.write(perro.informacion);

document.write("<br>" + "ver informacion del metodo ");
perro.Info();
document.write("<br>" + "ver informacion del metodo ");
perro.Info2();//se declara como un metodo