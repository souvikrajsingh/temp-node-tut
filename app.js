const fs  = require('fs');
const { writeFile } = require('fs/promises');

fs.readFile('./content/first.txt','utf8', (err , result) => {
    if(err){
        console.error(err);
        return;
    }
    const first = result;
    fs.readFile('./content/second.txt','utf8', (err , result) => {
        if(err){
            console.error(err);
            return;
        }
        const second = result;
        fs.writeFile('./content/result-async.txt' , `here is the result : ${first , second}` , (err, result) => {
            if(err){
                console.error(err);
                return;
            }
            console.log(result);
        });
    })

})
  