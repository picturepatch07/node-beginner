const fs = require('node:fs/promises');

fs.readFile('file.txt', 'utf8', (err, data) => {
    console.log(err,data)
})