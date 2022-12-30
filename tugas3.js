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
    if (isNaN(num)) throw console.log('Input harus Angka');
    if (num == "" || num == "0") throw console.log('Input tidak boleh kosong');
    if (num > 9 || num < 0) throw console.log(`Input tidak boleh lebih dari 9 dan dibawah 0`);
    if (typeof num == "boolean") throw console.log('Input tidak boleh boolean');
    //show programs
    console.log(`${triangle}`);
}catch(er){
    `error`;
}


