//console globalde tanımlı bir nesnedir.
console.log('Log yazıldı');

// https://nodejs.org/api/globals.html

//global tarayıcıdaki window nesnesine benzetilebilir.
global.setTimeout(()=>{
    console.log('3 saniye bekle');
}, 3000);