function Student(x, y) {
    this.x = x
    this.y = y
}
Student.prototype.say = function (){
    console.log(`im in (${this.x},${this.y})` )
}
Student.prototype.student = ''
Object.defineProperty(Student.prototype,'age', {
    enumberable: false,
    set(age) {
        this.age = age
    },
    get() {
        return this.age
    }
})
let s = new Student(11, 22)

let na = 'namex'
let sym = Symbol('sym')
class Person{

    static stableMethod() {
        console.log('im static m')
    }

    static stableBocy() {
        this.stableMethod()
    }

    constructor(x, y) {
        this.x = x
        this.y = y
        console.log('form person: ', new.target.name)

        this.say2 = function () {
            console.log(`im in (${this.x},${this.y})` )

        }.bind(this)
    }

    get [na]() {
        return this.x
    }

    set namex(x) {
        return this.x = x
    }

    say() {
        console.log(`im in (${this.x},${this.y}).....${super.toString()}` )
    }

    [sym]() {
        console.log(Person.name, '+++++',  Person, '++++', this)
    }
}
Object.defineProperty(Person.prototype,'age', {
    enumberable: false,
    set(age) {
        this.age = age
    },
    get() {
        return this.age
    }
})

Person.staticProp = 'static'

class PersonSon extends Person {
  static whoIsFather() {
      console.log('who: ',this.staticProp)
      super.stableMethod()
  }

    constructor(x, y) {
        super(x, y)
        super.x = 'xxx'
        console.log(super.x)
        this.son = 'im son'
        console.log('form son: ', new.target.name)
    }

    m() {
      super.x = 'zzz'
        super.say()
        console.log(super.x)
    }
}
Person.staticProp = 'staticSon'

let p = new Person(10, 20)
let ps = new PersonSon(11, 22)

// ps.m()


p.say()