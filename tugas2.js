"use strict";
const ps = require("prompt-sync");
const prompt = ps();

// function average and conditional average
const averageGrade = (grade1,grade2,grade3,grade4) =>{
    let allGrades = grade1 + grade2 + grade3 + grade4;
    return allGrades / 4;
}

const conditionGrade = (firstGrade) => {

    return firstGrade <= 100 && firstGrade >= 90 ? 'A' :
           firstGrade <= 90  && firstGrade >= 80 ? 'B' : 
           firstGrade <= 80  && firstGrade >= 70 ? 'C' :
           firstGrade <= 70  && firstGrade >= 60 ? 'D' :
           firstGrade <= 60  && firstGrade >= 0  ? 'E' :
           'Tidak ada Grade, Nilai terlalu besar/kecil';
}

// try catch block
try{
    let b_indo = parseInt(prompt(`Masukan Nilai B. Indonesia : `));
    let b_ing  = parseInt(prompt(`Masukan Nilai B. Inggris   : `));
    let Ipa    = parseInt(prompt(`Masukan Nilai Ipa          : `));
    let Mtk    = parseInt(prompt(`Masukan Nilai MTK          : `));

    // let b_indo = 90;
    // let b_ing  = 20;
    // let Ipa    = 100;
    // let Mtk    = 100;

    let average = averageGrade(b_indo,b_ing,Ipa,Mtk);
    let grade = conditionGrade(average);

    if(isNaN(average)) throw console.log(`\nData tidak benar`);
    if(typeof gradVal == "boolean") throw console.log(`\nData tidak benar`);
    if(typeof b_indo == "boolean" || typeof b_ing == "boolean" || typeof Ipa == "boolean" || typeof Mtk == "boolean") throw console.log(`\nData Boolean`);
    if(average > 100 || average < 0) throw console.log(`\nNilai Terlalu Besar/kecil`);
        console.log(`\nRata - Rata : ${average}`);
        console.log(`Grade       : ${grade}`);
}catch(e){
        `error : ${e}`;
}



