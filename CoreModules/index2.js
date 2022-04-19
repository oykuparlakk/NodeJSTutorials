const fs = require('fs');
//core module --> kullanıma hazır

//encoding  --> utf-8

//Dosya Okuma
/*
fs.readFile('password.txt','utf-8',(err,data)=>{
    if(err) console.log(err);
    console.log(data);
    console.log('Dosya Okundu.');

})
*/

//Dosya Yazmak
/*
fs.writeFile('write.txt','KODLUYORUZ','utf-8',(err)=>{
    if(err) console.log(err);
    console.log('Dosya Başarılı bir şekilde oluşturuldu.')
});
*/
/*
fs.writeFile('example.json','{"name":"Arin","Age":"21"}','utf-8',(err)=>{
    if(err) console.log(err);
    console.log('Dosya Başarılı bir şekilde oluşturuldu.')
});
*/

//Veri Ekleme
/*
fs.writeFile('write.txt',' \n KODLUYORUZ','utf-8',(err)=>{
    if(err) console.log(err);
    console.log('Dosya Başarılı bir şekilde oluşturuldu.')
});
*/

//Dosya Silme
/*
fs.unlink('example.json',(err)=>{
    if(err) console.log(err);
    console.log('Dosya Başarılı bir şekilde silindi.')
});*/

//Klasörler Oluşturma--> iç içe klasör oluşturma {recursive:true}
/*
fs.mkdir('uploads/img',{recursive:true},(err)=>{
    if(err) console.log(err);
    console.log('Klasörler oluşturuldu');
})
*/
//Klasörleri Silme
/*
fs.rmdir('uploads',{recursive:true},(err)=>{
    if(err) console.log(err);
    console.log('Klasörler silindi');
});
*/