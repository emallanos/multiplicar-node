const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite=10) => {
    return new Promise((resolve, reject) => {
        
        if(!Number(base)){
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        if(!Number(limite)){
            reject(`El valor introducido para la límite ${limite} no es un número`);
            return;
        }

        let data = '';

        for(let i = 1; i<=limite; i++){
            data += `${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) 
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`.green);
        });        
    });
};

let listarTabla = (base, limite=10) =>{
    return new Promise((resolve,reject) => {
        if(!Number(base)){
            reject(`El valor introducido para la base ${base} no es un número`.red);
            return;
        }

        if(!Number(limite)){
            reject(`El valor introducido para la límite ${limite} no es un número`.red);
            return;
        }

        console.log('=================='.green);
        console.log(`Tabla del ${base}`.green);
        console.log('=================='.green);
        
        let data = '';

        for(let i = 1; i<=limite; i++){
            data += `${base} * ${i} = ${base * i} \n`;
        }

        resolve(data.yellow);
    });
};

module.exports = {
    crearArchivo,
    listarTabla
};

