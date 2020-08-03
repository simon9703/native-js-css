const events = require('events')

const eventsEmitter = new events.EventEmitter()

let wrap = (a) => {
  console.log('doing', a)
  eventsEmitter.off('doing', wrap)
}

for (let i = 0; i < 20; i++) {
  eventsEmitter.prependListener('doing', (a) => {
    console.log(`doing-${i}`, a)
  })
}

// eventsEmitter.setMaxListeners(5)
// console.log(eventsEmitter.eventNames())
// console.log(eventsEmitter.listeners('doing'), eventsEmitter.listenerCount('doing'))
// eventsEmitter.removeAllListeners('doing')
// eventsEmitter.on('doing', wrap)

eventsEmitter.emit('doing', 123)
// eventsEmitter.emit('doing', 345)
// eventsEmitter.emit('doing', 567)
