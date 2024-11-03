// el polomorfismo es quel quel que se herada pero que su metodo trabaja diferente 
// ejemplo si un gato camina y un perro caminan ambos caminan diferentes el 
// polimorfismo es cambia solo el metodoamor

// modularidad es aquel que se divide en partes mas peque 

//La abstracción es el concepto de ocultar los detalles 
//complejos y mostrar solo la información esencial. Es decir, 
//te permite definir una interfaz simple para interactuar con un objeto o componente 
//sin preocuparte por cómo funciona internamente.

/**
 * encapsulamiento es el principio de restringir el acceso directo a ciertos detalles 
 * de un objeto, de modo que algunas partes de un objeto estén ocultas y no sean 
 * accesibles desde el exterior. Esto se logra controlando el acceso a los datos a 
 * través de métodos públicos y propiedades privadas.
 */
//creando clase 
class animal{
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo una edad de ${this.edad}, 
        mi color es ${this.color}`;
    }
    //creamos un metodo para mostrar la informacion
    informacion(){
        document.write(this.info);
    }
    //creando el metodo a usar como polimorfismo
    // ladrar(){
    //     let texto = this.especie.toLowerCase();
    //     if(texto == "perro"){
    //         document.write('wuaaa');
    //     }else{
    //         document.write(`No puede lagrar ya que es  un ${this.especie}`)
    //     }
    // }

}


// heredar clase animal
class perro extends animal{
    constructor (especie, edad, color,raza){
        super(especie,edad,color); // heredar lo que son los atributos en el metodo
        this.raza = raza;
    }
    ladrar(){
            document.write('wuaaa');
    }
}


let objeto= new animal("perro",23,"rojo")
objeto.informacion();

//mandamos a llamar la clase heredada
let object = new perro("perro",23,'rojo','doberman');

object.informacion();
object.ladrar();