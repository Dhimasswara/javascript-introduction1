// A
let data = {
    id      : 1,
    name    : "Bret",
    email   : "Sincere@april.biz",
    address : {
        street : "Kulas Light",
        suite  : "Apt. 556",
        city   : "Gwenborough",
        zipcode: "92998-3874",
    },
    phone   : "1-770-736-8031x56442",
    website : "hildegard.org"
}

const newData = {
    name  : "Dhimas Pandu Y",
    email : "dhimasswara08@gmail.com",
    hobbi : ['Nonton Film','Gabut','Nyanyi','Ngoding']
}

const alldata = {
    ...data,
    ...newData
}

console.log(alldata);

// B
const {street, city} = data.address;
console.log(`Street : ${street}, City : ${city}`);
