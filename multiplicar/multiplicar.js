//requireds
const {
    rejects
} = require('assert');
const fs = require('fs');
const {
    resolve
} = require('path');
var colors = require('colors');

listarTabla = (base, limite) => {
    console.log('============================='.bold.green);
    console.log(`========Tabla del ${base}==========`.bold);
    console.log('============================='.bold.green);
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base no es número (${base})`)
            return;
        }
        if (!Number(limite)) {
            reject(`El límite no es número (${limite})`);
            return;
        }
        for (let i = 1; i <= limite; i++) {
            console.log(`${i}\tx\t${base}\t=\t${base * i}`);
        }
    })
}

crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let i = 1;
        let contenido = "";

        if (!Number(base)) {
            reject(`El valor dado ${base} no es número`);
            return;
        }

        for (; i <= limite; i++) {
            //console.log(i, '\tx\t', base, '=\t', i * base);
            console.log(`${i}\tx\t${base}\t=\t${base * i}`.green.bold);
            contenido += `\n${i}\tx\t${base}\t=\t${base * i}`;
        }

        fs.writeFile(`tablas/tabla${base}.txt`, contenido, (err) => {
            if (err) reject(err)
            else resolve(`Archivo creado tabla${base}.txt`.green);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}