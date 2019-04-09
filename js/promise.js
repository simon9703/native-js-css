

function f1() {
    console.log('its f1111')
}

function truncation(resolve, reject) {
    console.log('in promise')
    setTimeout(f1, 2000)
    resolve('成功了')
    reject('失败了')
}
function sleep(ms, arg = '') {
    return new Promise(resolve => setTimeout(resolve, ms, arg))
}

function sleepErr(ms, arg = '') {
    return new Promise((resolve, reject) => setTimeout(reject, ms, arg))
}

// let p = new Promise(truncation)

let result = {
    name: '张思蒙',
    likes: ['swim', 'sing', 'work']
}
result.toString = function () { return this.name + ' ' + this.likes }

function post(ms, arg) {
    return new Promise((resolve, reject) => {
        setTimeout((arg) => {
            console.log(new Date, 'post' + arg)
            // if(ms == 2) reject('fail')
            resolve(arg)
        }, 1000 * ms, arg)
    })
}

function postErr(ms, arg) {
    return new Promise((resolve, reject) => {
        setTimeout((arg) => {
            console.error(new Date, 'post' + arg)
            // reject(new Error('have fail'))
            reject('出错了。。')
        }, 1000 * ms, arg)
    })
}

// new Promise((resolve) => {
//     console.log('.........')
//     // resolve()
// }).then((response) => {
//     console.log('then1: ' + response)
// }).then((response) => {
//     console.log('then2: ' + response)
// }).catch(err => console.error('发生错误。。。', err))
// .finally(() => {
//     console.log('anyway')
// })


// p.then(mid).then(console.log).then(console.log)


// const promises = [2,3,4,5,6].map((item) => {
//     return post(item ,'第' + item + '个')
// })

// const time = ([
//     post(6, '请求成功'),
//     new Promise(resolve => {
//         setTimeout(resolve, 5000, '请求超时')
//     })
// ])

// Promise.reject(sleepErr(2000, 'xxx')).then((jsons) => {
//     console.log(jsons)
// }).catch((err) => (console.log('出错' + err)))
// .catch((err) => (console.log('出错22' + err)))



async function stream() {
    let pro = {
        name: 'naruto',
        then: (resolve) => {
            resolve('pro')
        }
    }
    const result = await sleep(2000, '张思蒙')
    const response = await sleepErr(2000, '错错错')
    // throw new Error('xxxxx')
    consol.log('没有错啊')
    return response
}

stream('aa').then(console.log)
    .catch(err => console.log('出错了' + err))



