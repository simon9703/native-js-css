const buf1 = Buffer.from('今天天气真好啊~')
const buf2 = Buffer.alloc(100, '1')
const buf3 = Buffer.from(['1', '2', 'a'])

const buf = Buffer.alloc(256)
buf.write('asdfghj今天天气真好啊')
// let o = { name: '张思蒙', val: 'test' }
// buf.write(JSON.stringify(o))
// console.log(buf1.length, buf1.toString('utf-8'))
let bufc = Buffer.concat([buf1, buf])
let bufp = Buffer.compare(buf1, buf)
buf.copy(buf1, 8, 10, 4)
let bufs = buf1.slice(5)
// bufs.fill('1')
// let a = [1, 3]
console.log(buf1.length)
