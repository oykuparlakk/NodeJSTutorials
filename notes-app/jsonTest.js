const fs = require('fs');

const book ={
    title:'Deneme',
    author:'Osman Pamuk'

}

//const bookJSON= JSON.stringify(book);

//console.log(bookJSON);
const dataBuffer=fs.readFileSync('test.json');
const bookJSON=dataBuffer.toString();

//fs.writeFileSync('test.json',bookJSON);


//console.log(dataBuffer.toString());

const parsedObject=JSON.parse(bookJSON);

console.log(parsedObject.title);
