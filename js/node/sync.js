setImmediate(() => {
  console.log('immediate')
})

setTimeout(() => {
  console.log('time')
}, 0)

process.nextTick(() => {
  console.log('nexttick1')
})

new Promise((resolve, reject) => {
  console.log('promise')
  resolve()
}).then(() => {
  console.log('promise then')
})

process.nextTick(() => {
  console.log('nexttick2')
})

console.log('event start.')
