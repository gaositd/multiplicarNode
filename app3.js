const {
    crearArchivo
} = require('./multiplicar/multiplicar.js');
//console.log(process);
//console.log(process.argv);

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado tabla${archivo}`))
    .catch(e => console.log(e));*/