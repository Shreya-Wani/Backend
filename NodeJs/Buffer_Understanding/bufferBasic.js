const {Buffer} = require('buffer');

// const buf = Buffer.alloc(5);
// console.log(buf); // <Buffer 00 00 00 00 00>
// console.log(buf[1]); // 0

// const buf = Buffer.from("Hello Chai");
// console.log(buf); // <Buffer 48 65 6c 6c 6f 20 43 68 61 69>
// console.log(buf.toString()); 

// const bufTwo = Buffer.allocUnsafe(10);
// console.log(bufTwo);

// const buf = Buffer.from.alloc(10);
// buf.write("Hello");
// console.log(buf.toString()); // Hello

// const buf = Buffer.from('Chai aur Code')
// console.log(buf.toString());
// console.log(buf.toString('utf8', 0, 4)); // Chai

// const buf = Buffer.from("Chai");
// console.log(buf);
// buf[0] = 0x4A; // Changing first byte to 'J'
// console.log(buf); // <Buffer 4a 68 61 69>
// console.log(buf.toString());

const buf1 = Buffer.from("Chai aur")
const buf2 = Buffer.from(" Code");
const merged = Buffer.concat([buf1, buf2]);
console.log(merged.toString()); // Chai aur Code
console.log(merged.length); // 15
console.log(Buffer.byteLength(merged)); // 15

