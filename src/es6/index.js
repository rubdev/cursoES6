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

/***** Arrow functions *****/

/***** Promesas *****/

/***** Parámetros en objetos *****/

/***** Clases *****/

/***** Módulos *****/

/***** Generadores *****/
