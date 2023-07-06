const os = require('os');

//info about current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds
console.log(`System uptime : ${os.uptime()} seconds`);

//info on system
const currentOS = {
    name: os.type(),
    versionName: os.version(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}
console.log(currentOS);