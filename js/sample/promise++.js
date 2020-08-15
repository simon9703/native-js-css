class Promised {
    constructor(executor) {
        let _this = this //保证函数在promised的this作用域下执行。
        _this.status = 'pending'
        _this.value = undefined  // 保存成功状态结果
        _this.reason = '' // 保存失败原因
        _this.onResolvedCallbacks = [] //成功回调队列
        _this.onRejectedCallbacks = [] //失败回调队列

        function resolve(arg) {
            if (_this.status !== 'pending') return // 只能改变一次状态
            _this.status = 'resolved'
            _this.value = arg
            _this.onResolvedCallbacks.forEach(fn => {
                fn(arg)
            })
        }

        function reject(arg) {
            if (_this.status !== 'pending') return
            _this.status = 'rejected'
            _this.reason = arg
            _this.onRejectedCallbacks.forEach(fn => {
                fn(arg)
            })
        }

        try { // 异步错误只能在onerr的回调中返回。
            executor(resolve, reject)
        } catch (e) {
            reject(e)
        }
    }

    then(onResolved, onRejected) {
        onResolved = typeof onResolved === 'function' ? onResolved : (value) => value  // 默认传递成功状态
        let _this = this
        let promise2
        switch (this.status) {
            case 'resolved':
                promise2 = new Promised((resolve, reject) => {
                    setTimeout(() => { // （根据规范（本应使用微任务) 这里使用普通异步
                        try {
                            let x = onResolved(_this.value)
                            // resolve(x)
                            _this.transformPromise(promise2, x, resolve, reject)
                        } catch (e) {
                            reject(e)
                        }
                    })
                })
                break;
            case 'rejected':
                promise2 = new Promised((resolve, reject) => {
                    setTimeout(() => {
                        try {
                            if (typeof onRejected === 'function') {
                                let x = onRejected(_this.reason)
                                // resolve(x)  // 上个promise的reject被处理后，返回成功状态。
                                _this.transformPromise(promise2, x, resolve, reject)
                            } else { // then中异常处理不存在时，继续向后传递rejict状态
                                reject(_this.reason)
                            }
                        } catch (e) {
                            reject(e)
                        }
                    })
                })
                break;
            default:  // pending状态
                promise2 = new Promised((resolve, reject) => {
                    _this.onResolvedCallbacks.push(function (arg) {
                        setTimeout(() => {
                            try {
                                let x = onResolved(arg)
                                // resolve(x)
                                _this.transformPromise(promise2, x, resolve, reject)
                            } catch (e) {
                                reject(e)
                            }
                        })
                    })

                    _this.onRejectedCallbacks.push(function (arg) {
                        setTimeout(() => {
                            try {
                                if (typeof onRejected === 'function') {
                                    let x = onRejected(_this.reason)
                                    // resolve(x)  // 上个promise的reject被处理后，返回成功状态。
                                    _this.transformPromise(promise2, x, resolve, reject)
                                } else {
                                    reject(_this.reason)
                                }
                            } catch (e) {
                                reject(e)
                            }
                        })
                    })
                })
                break;
        }
        return promise2
    }

    transformPromise(promise2, x, resolve, reject) {
        if (promise2 === x) reject('循环引用')
        if (typeof x === 'object' && typeof x.then === 'function') {
            x.then((val) => {
                this.transformPromise(promise2, val, resolve, reject)
            }, (err) => {
                reject(err)
            })
        } else {
            resolve(x)
        }
    }

    catch(onRejected) { // 捕获异常
        this.then(null, onRejected)
    }

    static resolve(arg) {  // 生成成功的promise
        return new Promised((resolve, reject) => resolve(arg))
    }

    static reject(arg) { // 生成失败的promise
        return new Promised((resolve, reject) => reject(arg))
    }

    static all(arr) { // 所有成功才解析。
        return new Promised((resolve, reject) => {
            let n = 0 // 成功次数
            let resultsList = [] // 成功结果

            arr.forEach((item, index) => {
                item.then((val) => {
                    resultsList[index] = val
                    n++
                    if (n === arr.length) resolve(resultsList)
                }, (err) => {
                    reject(err)
                })
            })
        })
    }

    static race(arr) { //随第一个promise的状态改变
        return new Promised((resolve, reject) => {
            arr.forEach((item, index) => {
                item.then((val) => {
                    resolve(val)
                }, (err) => {
                    reject(err)
                })
            })
        })
    }

    static retry(fn, times, delay, sum = times) { // 失败重试
        return new Promised((resolve, reject) => {
            let attempt = function () {
                fn().then(resolve, err => {
                    if (times === 0) {
                        reject(err)
                    } else {
                        times-- // 剩余次数减一
                        setTimeout(attempt, delay)
                    }
                })
            }
            attempt()
        })
    }
}

module.exports = Promised