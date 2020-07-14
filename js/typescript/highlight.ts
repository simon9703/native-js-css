type T1 = string
type T2 = string | number

let ts: T2 = 123

let ts2: 'ccc' | 'bbb' = 'bbb'

declare enum Days {
  Monday,
  Tuesday,
  Sunday,
  Today = '123'
}

declare const enum Keyups {
  Up,
  Right,
  Down,
  Left = '123'
}

let today = Days.Monday
let up = Keyups.Down

let tup: [string, number, boolean] = ['name', 2, true]

class Animal {
  static nn: string = 'nn'
  public readonly name: string = 'name'
  private likes: string[]
  protected age: string = '12'
  private static aa: string

  constructor(name: string, likes: string[]) {
    this.name = name
    this.likes = likes
  }

  say() {}

  static go() {}
}

class Birds extends Animal {
  private color: string = 'red'

  constructor() {
    super('bird', ['eat'])
    this.color = super.age
  }
}

let animal = new Animal('zsm', ['1', '2', '3'])
// animal.name = 'tt'

abstract class Art {
  abstract paint(): void
}

class Peop extends Art {
  paint(): string {
    return '123'
  }
}

let art = new Peop()
