const path = require('path')
// const os = require('os')

// console.log(os.arch(), os.cpus().length, os.freemem(), os.totalmem())

// console.log(os.homedir(), os.hostname(), os.networkInterfaces(), os.platform())

// console.log(__dirname, __filename)

// console.log(path.basename(__filename), path.basename(__filename, '.js'))
// console.log(path.dirname(__filename))
// console.log(path.extname(__filename))
// console.log(path.join('1', '/2', 'a', '/d'))
// console.log(path.normalize('/t/b/1/2/.././3'))
// console.log(path.parse('/1/2/3/m/n'))
// console.log(path.resolve('/a', 'b', '1'))

// process.exit()
console.log(process.pid)
process.kill(process.pid)
console.log(process.argv, process.execArgv, process.execPath)
console.log(process.cwd())
