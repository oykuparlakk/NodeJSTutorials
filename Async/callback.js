//console.log('1.görev')

//console.log('2.görev')

//console.log('3.görev')
/*
const func1 = () => {
    console.log('func 1 tamamlandı');
    func2();
};

const func2 = () => {
    console.log('func 2 tamamlandı');
    func3();
};

const func3 = () => {
    console.log('func 3 tamamlandı');
};

//invoke
func1();
*/

/*
const func1 = () => {
    console.log('func 1 tamamlandı');
    func3();
};

const func2 = () => {
    console.log('func 2 tamamlandı');
    
};

const func3 = () => {
    console.log('func 3 tamamlandı');
    func2();
};

//invoke
func1();
*/

//javascript single thread ----- Senkrondur
//async await promise ve callback yapılarıyla manipüle edilerek 
//asenkron davranışlar elde ederiz

/*

let x=5;
console.log('1. gelen veri:',x);

setTimeout(()=>{
    x +=5;
    console.log('2. gelen veri:',x);
},5000);

x +=5;
console.log('3. gelen veri:',x);

*/


const books =[
    {name:'Kitap1', author: 'Yazar1'},
    {name:'Kitap2', author: 'Yazar2'},
    {name:'Kitap3', author: 'Yazar3'}
];

const listBooks = () => {
    books.map(book => {
        console.log(book.name);
    })
};

const addBook=(newBook,callback) => {
    books.push(newBook);
    callback();
};

addBook({name:'Kitap4', author: 'Yazar4'},listBooks);

//listBooks();