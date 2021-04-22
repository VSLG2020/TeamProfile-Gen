//const { rejects } = require('assert');
const fs = require('fs');
//const { resolve } = require('path');
   
const writeFile = (fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'your file has been saved in /dist'
            })
        })
    })
});

const copyFile = () => {
    new promises((resolve, reject) => {
        fs.copyFile('./src/css/styles.css', './dist/style.css', err => {
            if (err) {
                rejects(err);
                console.log(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Style Sheet has been copied int /dist!'
            });
        });
    })
}

module.exports = writeFile, copyFile