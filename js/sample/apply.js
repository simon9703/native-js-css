let name = 'window'

let parent = {
    name: 'father'
}

let student = {
    name: 'son',
    say: function(...arg) {
        console.log(`----name: ${this.name} + ${arg}---`)
    }
}

Function.prototype.selfCall = function(context, ...args) {
    context = typeof context === 'object' ? context : {} // 传入非对象时使用空对象。
    let caller = Symbol('caller')
    context[caller] = this //在新的上下文添加此方法
    let result = context[caller](...args)
    delete context[caller]
    return result
}

Function.prototype.selfBind = function(context, ...args) {
    let func = this  // funcWrap不在最初函数内执行，需要提前在闭包内保留
    function funcWrap(...others) {
        func.call(context, ...args, ...others)
    }
    return funcWrap;
}

let ss = student.say.selfBind(parent, 'zzz')
ss(1,2,3)
student.say(1,2,3)
student.say.selfCall('s', 1,2,3)