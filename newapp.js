const { readFile } = require('fs');
// const { resolve } = require('path');

const getText = (path) => {
  return new Promise((resolve, reject) => {
    // Read the file
    readFile(path, 'utf8', (err, data) => {
      if (err) {
        // If there's an error, reject the promise
        reject(err);
      } else {
        // If successful, resolve the promise with the file content
        resolve(data);
      }
    });
  });
};


getText('./content/first.txt')
.then((result) => console.log(result))
.catch((err) => console.log(err));