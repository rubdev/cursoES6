/************************
 ****** Curso ES6+ ******
 ***********************/

/***** PARÁMETROS POR DEFECTO *****/
// Antes
function nuevaFunc(nombre, edad, pais) {
    var name = name || 'Rubén';
    var age = edad || 25;
    var pais = pais || 'ES';
    console.log(nombre, edad, pais);
}
// ES6
function nuevaFunc2(nombre = 'Rubén', edad = 25, pais = 'ES') {
    console.log(nombre, edad, pais);
}
nuevaFunc2();
nuevaFunc2('Goku', 283, 'JP');

/*****  Template literal *****/
let hola = 'Hola';
let mundo = 'mundo';
// Antes
let frase = hola + ' ' + mundo;
console.log(frase);
// ES6
let frase2 = `${hola} ${mundo}`;
console.log(frase2);

/***** LET y CONST *****/
// Nota: CONST => Es una constante la cual NO cambiara su valor en ningún momento en el futuro.
//       VAR => Es una variable que SI puede cambiar su valor y su scope es local.
//       LET=> Es una variable que también podra cambiar su valor, pero solo vivirá(Funcionara) en el bloque donde fue declarada LET tiene un scope llamado “block scope" y su valor es contenido dentro del bloque de código actual.
var var1 = 'Puede cambiar su valor y tiene scope local';
const var2 = 'No puede cambiar de valor';
function variables() {
    let var3 = 'Puede cambiar su valor pero su ámbito es solo dentro de esta función';
}

/***** Multilínea *****/
// Antes
var fraseEpica = "Esta es una frase epica \n"
+ "otra frase epica";
console.log(fraseEpica);
// ES6
let fraseEpicaES6 = `Esta es una frase epica 
multilinea en ES6
`;
console.log(fraseEpicaES6);

/***** Spread Operator *****/
// Nota:  permite que una expresión sea expandida en situaciones donde se esperan 
//        múltiples argumentos (llamadas a funciones) o múltiples elementos (arrays literales).
// Se puede apreciar en el siguiente ejemplo de desestructuración:
// let equipoDragonBall = ['Piccolo', ...equipoGoku, ...equipoVegeta];

/***** Desestructuración *****/
let persona = {
    nombre: 'Rubén',
    edad: 25,
    pais: 'ES'
};
let {nombre, edad, pais} = persona;
console.log(nombre, edad, pais);
console.log(nombre);
console.log(nombre, pais);

let equipoGoku = ['Gohan', 'Goten'];
let equipoVegeta = ['trunks', 'trunks del futuro'];
let equipoDragonBall = ['Piccolo', ...equipoGoku, ...equipoVegeta];
console.log(equipoDragonBall);

/***** Arrow functions *****/
// Nota: - Permite tener un sintaxis más reducida
//       - Tenemos un objeto THIS no vinculable, es decir que no tiene enlaces a this o super.
const personas = [
    {nombre: 'Rubén', edad: 25},
    {nombre: 'María', edad: 32}
]
// Antes
let listaNombre = personas.map(function(item) {
    console.log(item.nombre);
})
// ES6
let listaNombres2 = personas.map(item => console.log(item.nombre));

/***** Promesas *****/
// Nota: JS no es síncrono, se va ejecutando tarea por tarea y para ello las promesas
//       nos ayudan a solventar este problema.
//       Las promesas quedan a la espera de ser resuelta o no
const holaPromesa = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Todo bien, promesa cumplida!');
        } else {
            reject('No se pudo cumplir la promesa...');
        }
    });
}
holaPromesa()
    .then(response => console.log(response))
    .catch(error => console.log(error));

/***** Parámetros en objetos *****/
// Antes
let marca = "Renault";
let modelo = "Megane";
let coche = {marca: marca, modelo: modelo};
console.log(coche);
// ES6
let coche2 = {marca, modelo}   
console.log(coche2);
/***** Clases *****/

/***** Módulos *****/

/***** Generadores *****/
