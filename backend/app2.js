const os = require('os');
const user  = os.userInfo();

console.log(user);

console.log((os.uptime() / 60 )/60);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem : os.totalmem(),
    remMem : os.freemem(),
}

console.log(currentOS);