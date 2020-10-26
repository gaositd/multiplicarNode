const argv = require('./config/yargs').argv;
var colors = require('colors');

const {
    crearArchivo,
    listarTabla
} = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch ('Comando', comando) {
    case 'listarTabla': {
        listarTabla(argv.base, argv.limite);
        break;
    }
    case 'crear': {
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`${archivo}`.green))
            .catch(e => console.log(e));
        break;
    }
    default:
        console.log('Comando no reconocido');
        break;
}