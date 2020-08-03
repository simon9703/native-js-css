const fs = require('fs')
const zlib = require('zlib')
let data = ''

let readStream = fs.createReadStream('temp/a.txt')
let writeStream = fs.createWriteStream('temp/b.txt')

readStream.pipe(zlib.createGzip()).pipe(writeStream)

readStream.on('data', (r) => {
  data += r
  console.log('data:', r.toString())
})

readStream.on('end', (r) => {
  console.log('end', data)
})

readStream.on('finish', (r) => {
  console.log('finish:', r)
})

readStream.on('error', (e) => {
  console.log('error:', e)
})

// writeStream.write('今天星期六啊~~')
// writeStream.end()

console.log('++ stream start ++')
