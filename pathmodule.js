const path = require('node:path');

const a1 = path.basename('C:\\temp\\myfile.html');
console.log(a1)

const a2 = path.dirname('/foo/bar/baz/asdf/quux');
console.log(a2)

const a3 = path.extname(__filename);
console.log(a3)

path.isAbsolute('//server');    // true
path.isAbsolute('\\\\server');  // true
path.isAbsolute('C:/foo/..');   // true
path.isAbsolute('C:\\foo\\..'); // true
path.isAbsolute('bar\\baz');    // false
path.isAbsolute('bar/baz');     // false
path.isAbsolute('.');           // false