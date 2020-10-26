const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar...', 'Imprime en cosola la tabla de multiplicar', opts)
    .command('crear....', 'Crear un archivo con la tabla de multiplicar con base y limite dados por el usuario', opts)
    .help()
    .argv;

module.exports = {
    argv
}