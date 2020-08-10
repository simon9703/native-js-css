const path = require('path')
const child_process = require('child_process')
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
// console.log(process.pid)
// process.kill(process.pid)
// console.log(process.argv, process.execArgv, process.execPath)
// console.log(process.cwd())

// child_process.exec('node -v', (err, data, errors) => {
//   if (err) {
//     console.log('出错了：', errors)
//     return
//   }

//   console.log('执行命令行：', data)
// })

// const work = child_process.spawn('pwd', [], {
//   env: __dirname,
//   shell: true
// })
// work.stdout.on('data', (data) => {
//   console.log('执行命令行：', data.toString())
// })
// work.stderr.on('data', (err) => {
//   console.log('出错了：', err.toString('utf8'))
// })

child_process.fork('npm -v')

// console.log('执行子进程！')
