function poo(obj) {
    var props = []
    while (obj) {
        props.push(...Object.getOwnPropertyNames(obj))
        obj = Object.getPrototypeOf(obj)    
    }
    console.log(props)
}

function Person(x) {
    this.name = '张思蒙';
    this.likes = ['游泳', '唱歌', '骑🐎'];
    this.m = function () { console.log('当前的名字是：', this.name) };
}

var obj = new Object()

var p = new Person()
var p2 = Object.setPrototypeOf({}, Person.prototype)
Person.call(p2)

Person.prototype.common = 'i\'m new, after creating!'
Person.prototype.writeCommon = function () { console.log(this.name) }
Object.prototype.color = 'black'
Object.prototype.writeColor = function ( ){ console.log(this.name) }

var t = Object.create(p)
t.fruit = '苹果'
t.say = function (something) {
    console.log(something)
}

var p4 = Object.create(p, {
    wife: {
        value: 'sss',
        writable: false
    }
})

function copyObj(origin) {  //拷贝原型
    var copy = Object.create(Object.getPrototypeOf(origin))
    copyObjProperties(copy, origin)
    return copy
}

function copyObjProperties(to, from) { // 拷贝对象自身属性描述
    Object.getOwnPropertyNames(from).forEach(prop => {
        Object.defineProperty(to, prop, 
            Object.getOwnPropertyDescriptor(from, prop))
    })
    return to
}
var cc = copyObj(p4)
console.log(p4)
console.log(copyObj(cc))

