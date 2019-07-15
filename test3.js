let arr = ['apple', 'lee', 'tao']
let sym = Symbol('sym')
let person = {
    name: 'zsm',
    age: 12,
    [sym]: arr,
    get x() { return 'xxx'}
}
Object.defineProperty(person, 'lam', {
    get(){return 'lammm'},
    set(xx) {}
})
Object.assign(person.__proto__, {parent: 'i am', like() {return ''}})
//
// for (i in person ) {
//     console.log(i)
// }
Object.defineProperty(person,'age', {enumerable:false})
// // console.log(Object.getOwnPropertyDescriptor(person, sym))

// let z = Object.assign({}, person)
let z = { ...person}

let c = Object.create(person)
console.log(z)

let a