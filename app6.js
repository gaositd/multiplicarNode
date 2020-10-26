const argv = require('./config/yargs').argv;


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
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`).)
            .catch(e => console.log(e));
        break;
    }
    default:
        console.log('Comando no reconocido');
        break;
}