const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const app = express()
const multer = require('multer')

app.set('view engine', 'ejs')
app.set('views', './dist')
app.use('/static', express.static(__dirname + '/temp'))

app.all('/*', (req, res, next) => {
  console.log('global middle!')
  next()
})

app.get('/view/*', (req, res, next) => {
  res.render('index', {
    title: '<p style="color:red;">welcome!</p>',
    message: 'hello!',
    age: 17,
    likes: ['swim', 'sing', 'eat']
  })
})

app.post(
  '/a/*',
  [
    (req, res, next) => {
      console.log('post request11!')
      // res.end()
      // res.json({
      //   name: 'xxx',
      //   age: 17
      // })
      // res.send('hello post!') // 结束

      next()
    },
    (req, res, next) => {
      console.log('post request33!')
      // res.send('hello post!') // 结束
      next()
    },
    (req, res, next) => {
      console.log('post request44!')
      // res.send('hello post!') // 结束
      next()
    }
  ],
  (req, res) => {
    console.log('post request222!')
    // res.send('hello post!') // 多个回调函数只能send一次
  }
)

router.use((req, res, next) => {
  console.log('current is router middle!---start')
  next()
  console.log('current is router middle!---end')
})

router.get('/*', [
  (req, res, next) => {
    console.log('a request111---start')
    next()
    console.log('a request111---end')
  },
  (req, res, next) => {
    console.log('a request222---start')
    next()
    console.log('a request222---end')
  },
  (req, res, next) => {
    console.log('a request333---start')
    next()
    res.send('middler!!!')
    console.log('a request333---end')
  }
])

app.use('/a', router)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// const upload = multer({ dest: './images' })
app.use(multer({ dest: './images/' }).array('ext'))

app.post('/tx/*', (req, res, next) => {
  console.log('get request22!')
  res.set('x-name', 'zsm')
  // res.status(201)
  // res.send(req.body)

  throw new Error('safity!')
  // res.send('hello get22!') // 结束
  // next('123')
})

app.use((req, res, next) => {
  console.log('response send!')
  next()
})

app.use((err, req, res, next) => {
  console.log('something happened!', err)
  res.status(500)
  res.send(err.stack)
})

app.listen(9001, () => {
  console.log('express application started!!')
})
