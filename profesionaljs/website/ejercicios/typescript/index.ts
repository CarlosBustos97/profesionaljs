/*console.log("Hello, TypeScript")

function add(a: number, b:number){
    return a + b
}

const sum = add(2,3)*/
//Especifica el tipado que se usara para cada variables
//Booleanos
let muted: boolean = true
muted = false
//muted = "Callado" --> Reconoce asignaciones invalidad

//Numeros
let numerador: number  = 42
let denominador: number = 6 
let resultado = numerador / denominador

//String
let nombre: string = "Carlos"
let saludo = `Me llamo ${nombre}`

//Arreglos: Se puede definir si son de un solo tipo, o de varios
let people: string[] = [] //Arreglo solo de strings
people = ["Carlos", "Andres", "Lizandro", "Cristian"]
people.push("Nuevo_nombre")

let peopleAndNubers: Array <string | number> = []  // Arreglo de estring y números
peopleAndNubers.push("Carlos")
peopleAndNubers.push(1997)

//ENUM "Crea sus  propias variables"
enum Color{ // Si se inicializa uno se inicializan todos
    rojo= "Rojo",
    verde = "Verde",
    azul = "Azul"
}

let colorFavorito: Color = Color.azul //  Solo acepta uno e los valores establecidos en la definicion del objeto
console.log(`el color favorito es ${colorFavorito}`); // Si no esta inizializados optiene la posicion en la que se enuentra dicho valor


//Any No se sabe que tipo de variable será
let comodin: any = "Joker"
comodin = {type: "Wildcar"}

//object
let someObject: Object = {type: "Wildcar"}

// ***********************Funciones¨************************ //

function add(a: number, b: number): number{
    return a + b
}

const sum = add(4,6)

function createAdder(a: number): (number)=>number { // Indica que va a retornar una funcion que recibe un número y retornas un numero 
    return function(b: number){
        return b+a
    }
}

const addFour = createAdder(4)
const addFoursix = createAdder(6)

function fullName(firtName: string, lastName?: string): string{ // ? indica que esa variable puede ser opcional 
//o se le puede agregar un valor por defecto en caso de que no se le envie e valor de la variable lastName: string = Valor_deseado
    return `${firtName}${lastName}`
}
const carlos = fullName("Carlos")

//*******************Interfaces **************************/
//Forma exacta en la que ira un objeto
enum Colors {
    rojo = "Rojo",
    verde = "Verde"
}

interface Rectangulo{
    ancho: number
    alto: number
    color?: Colors
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    //color: Colors.rojo
}

function area(r: Rectangulo){
    return r.alto * r.ancho
}

const areaRect = area(rect)
console.log(`El area del rectagulo es ${areaRect}`);

rect.toString = function (){
    return this.color ? `Un  rectangulo de color ${this.color}`  : `Un rectangulo`
}

console.log(rect.toString());
