Object.name00 = 'aaa'
Object.prototype.namexx = 'xxxx'

function Student(x, y) {
    this.x = x
    this.y = y
}

class Person{
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    say() {
        console.log(`im in${this.x}` )
    }
}

let p = new Person('最初ppp', 40)
let s = new Person('最初sss', 40)

p.say()
let pp = Object.getPrototypeOf(p)
let pp2 = Object.getPrototypeOf(Person)
let pp3 = p.__proto__
let pp4 = Person.__proto__

console.log(p)