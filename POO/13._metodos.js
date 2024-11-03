//metodo estaticu funciona apesar de no estar usando las
//propiedades, por lo cual si se manda una alerta funciona
// sin importar que tener que crear un objeto


//metodo getter son para obtener un valor
//setter son para modificar o definirlo

class animal{
    constructor(especie, edad, color){
        this.edad = edad;
        this.especie = especie;
        this.color = color;
        this.informacion = `soy un ${this.especie} tengo una edad de: ${this.edad} mi color es: ${this.color}`;
    }
    Info(){
        document.write(this.informacion);
    }
}

class Perrin extends animal{
    #atun 
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = null;
    }
    //metodo estatico
     static ladrar(){
        alert("waww");
    }
    //metodos getter , setters(set) 
    set modificarRaza(nombreRaza){
        this.raza = nombreRaza;
    }
    get getRaza(){
        return this.raza;
    }
}
//Perrin.ladrar();

//creamos objeto para modificar la raza
perro = new Perrin("perro",24,"rojo","buldop");

perro.modificarRaza = "elote"; // modificador de valor  

document.write(perro.getRaza);
