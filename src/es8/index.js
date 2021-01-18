/************************
 **** Novedades ES8 *****
 ***********************/

/***** Async y Await *****/
const holaMundo = () => {
    return new Promise((resolve, reject) => {
        (true) ? setTimeout(() => resolve('Hola mundo!'), 2000) 
               : reject(new Error('Error!!!')); 
    });
}

const holaAsync = async() => {
    try {
        const hola = await holaMundo();
        console.log(hola);
    } catch (error) {
        console.log(error);
    }
}

holaAsync();


 /***** Object.entries *****/
 // Nota: Tranformamos este objeto en una matriz.
 const data= {
    front:'Rubén',
    back: 'Martínez',
    design: 'David'
}

const entries =Object.entries(data);
console.log(entries);

/***** Object.values *****/
// Nota:  Me devuelve los valores de un objeto a un array. 
const values = Object.values(data);
console.log(values);
