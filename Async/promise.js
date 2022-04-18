//bir işlemin sonucunu temsil eden bir js nesnesidir.
//resolve,reject

const promise1 = new Promise((resolve, reject) => {
    resolve('veriler alındı');
    reject('ağ bağlantı hatası');
});

//console.log(promise1);

/*
promise1.then(value => {
    console.log(value);
});
*/

// hata yakalama
/*
promise1.catch(err => {
    console.log(err);
});
*/

//chain yapısı

promise1
    .then(value => {
        console.log(value);
    }).catch(err => {
        console.log(err);
    });


const books = [
    { name: 'Kitap1', author: 'Yazar1' },
    { name: 'Kitap2', author: 'Yazar2' },
    { name: 'Kitap3', author: 'Yazar3' }
];

const listBooks = () => {
    books.map(book => {
        console.log(book.name);
    })
};

const addBook = (newBook) => {
    const promise1 = new Promise((resolve,reject) => {
        books.push(newBook);
        resolve(books);
        //reject('Bir hata oluştu')
    })

    return promise1;

};

addBook({ name: 'Kitap10', author: 'Yazar10' })
    .then(()=>{
        console.log('Yeni Liste');
        listBooks();
    }).catch((err)=>{
        console.log(err);
    });

