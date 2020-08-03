const http = require('http')

http
  .createServer((req, res) => {
    console.log('!!!!!')

    res.writeHead(201, {
      'Content-Type': 'text/plain2'
    })
    res.write('123')
    res.end()
  })
  .listen(9000)
