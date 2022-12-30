"use strict";
const ps = require("prompt-sync");
const prompt = ps();

const numberRightTriangle = (l) => { 
    let s = '';
    for (let i = 0; i < l; i++) {
       
        for (let k = 1; k <= l - i; k++) {
        s += k+' ';
        }
        s += "\n";
    }
    return s;
}

try{
    //declarate
    let num = parseInt(prompt(`Enter a number: `));
    let triangle = numberRightTriangle(num);
    //error condition
    if (isNaN(num)) throw console.log('Tidak bisa');
    if (num == "" || num == "0") throw console.log('Tidak bisa');
    if (num > 9) throw console.log(`Tidak Bisa`);
    if (typeof num == "boolean") throw console.log('Data boolean');
    //show programs
    console.log(`${triangle}`);
}catch(er){
    `error`;
}


