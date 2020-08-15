class EventEmitter {
    constructor() {
        this._events = {}
    }

    on(type, fn, prepend = false) { // prepend表示向前/后添加
        if(this._events[type]) {
            if (prepend) {
                this._events[type].unshift(fn)
            }else {
                this._events[type].push(fn)
            }
        }else {
            this._events[type] = [fn]
        }
    }

    once(type, fn) {
        let onceWrap = (...args) => {
            fn(...args)
            this.off(type, fn)
        }
        onceWrap._listener = fn  // 保留原函数
        this.on(type, onceWrap)
    }

    trigger(type, ...args) {
        this._events[type] && this._events[type].forEach(element => element(...args))
    }

    off(type, fn) {
        if (this._events[type]) {
            this._events[type] = this._events[type].filter(element => element !== fn && element._listener !== fn)
        }
        !this._events[type].length && delete this._events[type]
    }

    offAll(type) {
        this._events[type] && delete this._events[type]
    }

    eventsNames() { //
        return Object.keys(this._events)
    }

    eventsCount() {
        return Object.keys(this._events).length
    }

    listenerCount(type) {
        return !this._events[type] ? 0 : this._events[type].length
    }
}

let f1 = (arg) => {console.log('form 1：' + arg);bus.trigger('some', 'zsm') }
let f2 = (arg) => console.log('form 2：' + arg)
let f3 = (arg) => console.log('form 3：' + arg)

let bus = new EventEmitter()
bus.on('some', f1)
bus.on('some', f2, true)
bus.once('some', f3)
// f1(bus.off('some', f3) instanceof Array)
// bus.offAll('some2')
console.log(bus.eventsNames(), bus.eventsCount(), bus.listenerCount('some'))
bus.trigger('some', 'zsm')
bus.trigger('some', 'zsm')

