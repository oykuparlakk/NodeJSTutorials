const getNotes=require('./notes.js');
const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');


yargs.version('1.1.0');
yargs.command({
    command:'add',
    describe:'add new note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe: 'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
        console.log('title:',argv.title);
        console.log('body:',argv.body);
    }
});

yargs.command({
    command:'remove',
    describe:'remove  note',
    handler: function(){
        console.log('Removing the note');
    }
});

yargs.command({
    command:'list',
    describe:'listing all notes',
    handler: function(){
        console.log('All notes are listed');
    }
});

yargs.command({
    command:'Read',
    describe:'Read a note',
    handler: function(){
        console.log('Reading a note');
    }
});


yargs.parse();

//console.log(process.argv[1]);

//console.log(process.argv);
//console.log(yargs.argv);

/*
if(command === 'add'){
    console.log('Addind Note');
}
else if(command ==='remove'){
    console.log('Removing Note');
}
*/

/*
console.log(validator.isEmail('oyku@btu.edu.tr'));
console.log(validator.isURL('https://github.com/oykuparlakk?tab=repositories'));
console.log(chalk.green.bold('success'));
const msg = getNotes();

console.log(msg);
console.log('Nodemon Deneme');
*/