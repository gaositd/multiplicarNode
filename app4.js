const argv = require('yargs')
    .command('listar', 'Imprime en cosola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

//const argv = require('yargs').argv;

const {
    crearArchivo
} = require('./multiplicar/multiplicar.js');

//let argv2 = process.argv;
/*let parametro = argv[2];
let base = parametro.split('=')[1];*/
console.log(argv.base);
console.log('limite', argv.limite);

/*crearArchivo(base)
    .then(archivo => console.log(`Archivo creado tabla${archivo}`))
    .catch(e => console.log(e));*/