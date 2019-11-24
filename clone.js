let ff = function(){console.log(123)}
let similar = {sss: 'sss'}
let people = {
    name : 'zsm',
    data: {
        a: 1,
        aaa: [1, 2, 3],
        f1: ff,
        f2: ff,
        reg: /reg/,
        ddd: new Date(),
        ttt1: similar,
        ttt2: similar,
        sss: Symbol('sss'),
        data: {
            x: 'x',
        }
    }
}

function isType(obj, type) {
    return Object.prototype.toString.call(obj) === `[object ${type}]`;
}
// people.people = people // 循环引用

Object.prototype.extra = 'extra' // 原型上属性
// Object.defineProperty(people, 'name', {
//     enumerable: true
// })

function creatData(deepth, breadth) { // 创建数据 深度 + 广度
    let root = {}
    let base = root  // 指向当前节点
    for (let i = 0; i < deepth; i++) {
        base = base['data'] = {}
       for (let j = 0; j < breadth; j++) {
           base[j] = j
       }
    }
    return root
}

function deepClone(source) {
    let root = {} 
    for( let property of Object.keys(source)) {
    // for(let property in source){
    //     if (source.hasOwnProperty(property)) {
        if ('[object Object]' === Object.prototype.toString.call(source[property])) {
            // /Object/.test(Object.prototype.toString.call(source[property]))
                root[property] = deepClone(source[property])
            } else {
                root[property] = source[property]
            }
        // }
    }
    return root
}

function stackDeepClone(source) {
    let root = {}
    let stack = [] // 递归调用栈
    let uniqueList = [] // 保留使用过对象。
    stack.push({
        parent: root,
        data: source
    })
    while(stack.length) {
        let {parent, data, origin} = stack.pop()
        if (data === similar) {
           console.log(1)
        }
        let temp = uniqueList.find(item => item.source === data)
        if (temp) { // 对象已经存在，重复引用。
            origin.obj[origin.pro] = temp.target // 原引用指向新的对象。
            continue
        }else {
            uniqueList.push({
                target: parent, // 新对象
                source: data    // 原对象
            })
        }

        for( let property of Object.keys(data)) {
            if ('[object Object]' === Object.prototype.toString.call(data[property])) {
                    parent[property] = {}
                    stack.push({
                        parent: parent[property] , // 新对象
                        data: data[property], // 原对象
                        origin: {  // 保留原引用对象，方便修改parent。 origin.obj[origin.pro] ----> parent
                            obj: parent,
                            pro: property
                        }
                    })
            } else {
                parent[property] = data[property]
            }
        }
    }
    return root
}

// console.log(stackDeepClone(creatData(40000,2)))
// console.log(JSON.parse(JSON.stringify(creatData(10000,2))))
// console.log(deepClone(people))
// console.log(stackDeepClone(creatData(17000,2)))
// 保持引用关系

let current = stackDeepClone(people)
// let sample = stackDeepClone(people)
// console.log(JSON.stringify(sample))
console.log(current)
// console.log(JSON.stringify(current) === JSON.stringify(sample))
console.log(current.data === people.data, current.data.ttt1 === current.data.ttt2, current.data.ttt1 === similar)