let num: Number = 122244
let num2: number = 11
let n3: number = 0x123
let n4: number = Infinity
let n5: number = 0b10101
let s: String = 'ss'
let s2: string = 'ss'
let s3: string = `iam ${s}`
let bb: Boolean = new Boolean()
let Bb: boolean = true
let uu: undefined = undefined
let nn: null = null
let sym: Symbol = Symbol(1)
let nev: never

let aa: string | number | Array<string> = '123'
// aa = '1234'
// aa = ['1']
// aa = 123
// aa.length

let tt: any = null
let tt2: any = [1, 2, 3]
let tt3
tt3 = '22'
tt3 = 123

interface Person {
  readonly name: string
  age: number
  likes?: string[]
  [property: string]: any
}

let pp: Person = {
  name: 'nn',
  age: 11,
  likes: ['1'],
  some: '123',
  [Symbol(1)]: '123'
  // likes: [1, 2, 3]
}
// pp.name = 1
pp.likes

let p = {
  x: 123,
  y: 'tt'
}

// p.z = 123
interface Arr {
  callee: Function
  length: number
  [index: number]: String
}
// let arr: Arr = ['1', '2', '3;']
// arr.push(1)

function hello(s: string | number, a?: number, ...rest: any[]): string {
  console.log('hello1', s)
  console.log('hello2', a)
  console.log('hello3', rest)

  return '111'
}

hello(1, 2)
// function hello(s1: boolean, s2: boolean): string {
//   console.log('hello222', s)
//   return '222'
// }

// hello(1, 2)

function say(name: string, age: number): string
function say(name: number, age: number[]): number
function say(name: string | number, age: number | number[]): any {
  console.log('say', s)
  if (!age) {
    return '222'
  } else {
    return [name, name]
  }
}

say(1, [1])
