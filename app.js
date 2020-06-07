//requireds
//const fs = require('express');

//console.log( process.argv );
//let argv2 = process.argv;
//let parametro = argv[2];
//let base =  parametro.split('=')[1];

const colors = require('colors');
const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch(comando){
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => {console.log(`Archivos creado ${archivo}`)})
            .catch(err => {console.log(err)});
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(resultado => {console.log(resultado)})
            .catch(err => {console.log(err)});
        break;
    default:
        console.log('No se reconoce el comando ingresado');    
}

