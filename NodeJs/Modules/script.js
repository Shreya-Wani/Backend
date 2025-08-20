const fs = require('node:fs');

//Task :  Read the contents of notes.txt

console.log('Satrt of script');

// //[Sync] => Blocking opernation
// const contents = fs.readFileSync('notes.txt', 'utf8');
// console.log(contents);

//[Async] => Non-blocking operation
fs.readFile('notes.txt', 'utf8', (err, data) => {
    if (err) console.log(error);
    else console.log('content got', data)
    }
);

console.log('End of script');

