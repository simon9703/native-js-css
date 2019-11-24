let Promisexx = require('./promise++')

function f1(arg = '1111111') {
    console.log(`its ${arg}`)
    throw new Error('xxxxxxxxxxx')
    // return new post(2, 'the other!', true)
}

function f2(arg = '222222') {
    console.log(`from ${arg}`)
}

function f3(arg = '555555') {
    console.log(`wawa ${arg}`)
}

function e1(arg = '3333333') {
    console.log(`error its ${arg}`)
}

function e2(arg = '4444444') {
    console.log(`error from ${arg}`)
    return `--error from ${arg}---`
}

function e3(arg = '66666666') {
    console.log(`error wawa ${arg}`)
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

function post(ms, arg, flag) {
    return new Promise((resolve, reject) => {
        if (flag) {
            setTimeout((arg) => {
                console.log(new Date, '-----post-----' + arg)
                // throw new Error('xxxxxxxxx')
                // setTimeout(() => console.log('--async--' + arg), 0)
                resolve(arg)
                // console.log(123)
            }, 1000 * ms, arg)
        } else {
            console.log(new Date, '-----post-----' + arg)
            throw new Error('xxxxxxxxx')
            resolve(arg)
        }
    })
}

function postErr(ms, arg, flag=false) {
    return new Promise((resolve, reject) => {
        if (flag) {
            setTimeout((arg) => {
                console.error(new Date, '-----post-----' + arg)
                reject(arg)
            }, 1000 * ms, arg)
        } else {
            console.error(new Date, '-----post-----' + arg)
            reject('出错了。。')
        }
    })
}

function getData(){
    let p = new Promisexx(function(resolve, reject){
        setTimeout(function(){
            var num = Math.ceil(Math.random()*20); //生成1-10的随机数
            console.log('随机数生成的值：',num)
            if(num<=2){
                console.log('符合条件，值为'+num)
                resolve(num);
            }
            else{
                reject('数字大于10了执行失败');
            }
        }, 1000);
    })
    return p
}

// Promisexx.retry(getData, 5, 300).then(val => console.log('success', val)).catch(err => console.log('err', err))

let pro = post(1, 'zsm', true)
// let pro2 = post(3, 'zsm2', true)
// let pro3 = postErr(2, 'zsm3', true)
// Promisexx.all([pro, pro2, pro3]).then(val => console.log('success', val), err => console.log('err', err))
pro.then(f1).then(f2).then(f3).catch(e1).catch(e2)
// Promisexx.resolve(1234).then(f2, e2)
// pro.then(f1).then(f1)
// pro.then(f2).then(f2)

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



// async function stream() {
//     let pro = {
//         name: 'naruto',
//         then: (resolve) => {
//             resolve('pro')
//         }
//     }
//     const result = await sleep(2000, '张思蒙')
//     const response = await sleepErr(2000, '错错错')
//     // throw new Error('xxxxx')
//     consol.log('没有错啊')
//     return response
// }
//
// stream('aa').then(console.log)
//     .catch(err => console.log('出错了' + err))



