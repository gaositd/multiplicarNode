//const multiplicar = require('./multiplicar/multiplicar.js');
const { crearArchivo } = require('./multiplicar/multiplicar.js');
let base = 'a';
//console.log(multiplicar);
crearArchivo(base)
    .then(archivo => console.log(`Archivo creado tabla${archivo}`))
    .catch(e => console.log(e));