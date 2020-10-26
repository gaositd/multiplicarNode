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
    .command('crear', 'Crear un archivo con la tabla de multiplicar con base y limite dados por el usuario', {
        crear: {
            alias: 'c'
        }
    })
    .help()
    .argv;

const {
    command
} = require('yargs');
//const argv = require('yargs').argv;

const {
    crearArchivo,
    listarTabla
} = require('./multiplicar/multiplicar.js');

//let argv2 = process.argv;
/*let parametro = argv[2];
let base = parametro.split('=')[1];*/
let comando = argv._[0];

switch ('Comando', comando) {
    case 'listarTabla': {
        listarTabla(argv.base, argv.limite);
        break;
    }
    case 'crear': {
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(e => console.log(e));
        break;
    }
    default:
        console.log('Comando no reconocido');
        break;
}
/**/