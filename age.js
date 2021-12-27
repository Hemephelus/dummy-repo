const os = require('os')
// info about current user
const user = os.userInfo()

console.log('The System Uptime is ' + os.uptime() + ' second')

const currentOs = {
    names: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOs)