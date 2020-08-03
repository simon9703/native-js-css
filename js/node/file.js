const fs = require('fs')

function exec(msg, err, data) {
  if (err) {
    console.error(`${msg}异常：`, err)
    return
  }
  console.log(`${msg}成功：`, data)
}

// fs.readFile('./temp/a.txt', (err, data) => {
//   if (err) {
//     console.log('异步获取异常：', err)
//     return
//   }
//   console.log('异步获取：', data.toString())
// })

// fs.writeFile('./temp2/b.txt', '我是写入内容\nbbb', (err, data) => {
//   if (err) {
//     console.log('异步写入异常：', err)
//     return
//   }
//   console.log('异步写入：', data)
// })
// try {
//   let result = fs.readFileSync('./temp/a2.txt')
//   console.log('同步获取：', result.toString())
// } catch (e) {
//   console.log('同步获取失败：', e)
// }

// fs.open('./temp', 'r', (err, data) => {
//   console.log('文件打开成功：', data)
// })

// fs.mkdir('test/tt/123', { recursive: true }, (err, data) => {
//   if (err) {
//     console.log('文件夹创建异常：', err)
//     return
//   }
//   console.log('文件夹创建成功：', data)
// })

// fs.rmdir('test/tt/123/1.txt', (err, data) => {
//   exec('删除文件', err, data)
// })

// function deleteAll(path) {
//   if (!fs.existsSync(path)) return // 不存在文件/文件夹
//   const info = fs.statSync(path)
//   if (info.isDirectory()) {
//     const files = fs.readdirSync(path)
//     files.forEach((item) => {
//       const current = path + '/' + item
//       deleteAll(current)
//     })
//     fs.rmdirSync(path)
//   } else {
//     fs.unlinkSync(path)
//   }
// }

// function deleteFiles(path) {
//   return new Promise((resolve, reject) => {
//     try {
//       deleteAll(path)
//       resolve('删除成功！')
//     } catch (e) {
//       reject(e)
//     }
//   })
// }

fs.rename('temp2', 'temp1', (err) => {
  exec('重命名', err, 'success')
})

// deleteFiles('test')
//   .then(() => {
//     console.log('删除成功')
//   })
//   .catch((e) => {
//     console.log('删除失败', e)
//   })

// const files = fs.readdirSync(path)
// files.forEach((item) => {
//   const current = path + '/' + item
//   if (fs.statSync(current).isDirectory()) {
//     deleteAll(current)
//   } else {
//     fs.unlinkSync(current)
//   }
// })
// fs.rmdirSync(path)
// const ex = fs.existsSync('./temp/a.txt')
// console.log('文件存在：', ex)

// fs.stat('./temp', (err, data) => {
//   console.log('文件信息:',  data.isFile(), data.isDirectory())
// })
// let res = Buffer.alloc(1024)
// let fd = fs.openSync('temp/a.txt', 'r+')
// fs.read(fd, res, 0, 12, 0, (err, data) => {
//   console.log(res.toString())
//   exec('读取文件', err, data)

//   fs.close(fd, (err) => {})
// })

// fs.open('temp/c.txt', 'a', (err, fd) => {
//   let buf = Buffer.from('今天天气真好!\n')
//   fs.write(fd, buf, (err, num, buf) => {
//     exec('写入文件', err, num)
//   })
// })

// exec('打开文件', undefined, fd)
console.log('。。。文件开始。。。')
