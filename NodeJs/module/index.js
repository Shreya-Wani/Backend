const fs = require('node:fs');

const contents = fs.readFileSync('notes.txt', 'utf8')

// //overright the contents of copy.txt with the contents of notes.txt
// fs.writeFileSync('copy.txt', contents, 'utf8');

// //append a new line to copy.txt with old contents
// fs.appendFileSync('copy.txt', '\nI want to write this to a file', 'utf8');

// //create a new directory named 'newDir'
// fs.mkdirSync('games/cricket/play', { recursive: true });

// // remove the directory 'games' and all its contents
// fs.rmSync('games', { recursive: true, force: true });

// // delete the file copy.txt
// fs.unlinkSync('copy.txt'); 

console.log(contents);