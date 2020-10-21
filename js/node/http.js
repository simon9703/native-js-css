const http = require('http')
const url = require('url')
const querystring = require('querystring')
const formidable = require('formidable')

http
  .createServer((req, res) => {
    console.log('!!!!!')
    res.write('响应结果\n')

    // get
    // let pathname = url.parse('http://' + req.headers.host + req.url, true)
    // let u = new URL(req.url, 'http://' + req.headers.host)
    // res.writeHead(200, {
    //   'Content-Type': 'text'
    // })
    // res.write(JSON.stringify(pathname.query))

    // WHATWG
    // res.write(u.searchParams.get('name'))
    // res.write(u.searchParams.get('age'))

    // post x-www
    // let querys = ''
    // req.on('data', (chunk) => {
    //   console.log('post chunk:', chunk.toString())
    //   // querys.push(chunk)
    //   querys += chunk
    // })

    // req.on('end', () => {
    //   // let params = querys
    //   // let result = querystring.parse(querys) // x-www
    //   let result = JSON.parse(querys) // json
    //   res.end(JSON.stringify(result))
    // })

    // - Post + form-data
    // const form = new formidable.IncomingForm()
    // form.uploadDir = 'D://a-html/native/js/node/images'
    // form.keepExtensions = true
    // form.on('field', (field, value) => {
    //   console.log('+++', field, value)
    // })

    // form.on('file', (name, file) => {
    //   console.log('---', name, file.name)
    // })

    // form.on('end', () => {
    //   console.log('form data 解析完成！')
    // })

    // form.parse(req)

    // setTimeout(() => {
    // console.log('wait 2s。')
    console.log('--请求处理完成--')
    res.end('response!!')

    // }, 2000)
  })
  .listen(9000)
