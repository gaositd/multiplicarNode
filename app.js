//requireds
const fs = require('fs'); //proyecto porpio de Node
//const fs = require('express'); //no esta en Node, es necesario instalar el paquete (codifo de otras personas)
//const fs = require('./');//es hecho por el programador en el momento, no existe en otro lado

let base = 2;
let i = 1;
let contenido = "";

for (; i < 11; i++) {
    //console.log(i, '\tx\t', base, '=\t', i * base);
    console.log(`${i}\tx\t${base}\t=\t${base * i}`);
    contenido += `\n${i}\tx\t${base}\t=\t${base * i}`;
}

fs.writeFile(`tablas/tabla${base}.txt`, contenido, (err) => {
    if (err) throw err;
    console.log(`The file tabla${base}.txt has been saved!`)
});

//const data = new Uint8Array(Buffer.from('Hello Node.js'));