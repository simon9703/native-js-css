const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'zsm',
  port: '3306',
  database: 'school'
})

connection.connect()

// connection.query('select * from student', (err, result) => {
//   console.log(result)
// })

connection.query('insert into student value(null, ?, ?, ?)', ['zsm', '苏州', '2020-10-20'], (err, result) => {
  if (err) {
    console.log('insert errors!!!', err)
    return
  }
  console.log('insert success:', result)
})

// connection.query('update student set address=? where id = 35', ['苏州'], (err, result) => {
//   if (err) {
//     console.log('update errors!!!', err)
//     return
//   }
//   console.log('update success:', result)
// })

// connection.query('delete from student where id=?', [36], (err, result) => {
//   if (err) {
//     console.log('delete errors!!!', err)
//     return
//   }
//   console.log('delete success:', result)
// })x
