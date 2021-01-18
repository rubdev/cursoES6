/************************
 **** Novedades ES7 *****
 ***********************/

 /***** Includes *****/
 // Nota: Vale tanto para números como string
 let numeros = [1,2,3,4,5,6,7,8,9];
 if (numeros.includes(5)) {
     console.log('Se encuentra el valor 5 en el array');
 } else {
     console.log('No se encuentra el valor 5 en el array');
 }

 /***** Exponer con POW *****/
 // Nota: Se realiza con el operador **
 let base = 2;
 let exponente = 3;
 let resultado = base ** exponente;
 console.log(resultado);