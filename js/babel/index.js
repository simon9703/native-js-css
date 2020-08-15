const { parse } = require('@babel/parser')
const traverse = require('@babel/traverse').default
const generator = require('@babel/generator').default

let txt = 'const abc= 123'

let ast = parse(txt)

traverse(ast, {
  enter(path) {
    if (path.node.type === 'Identifier') {
      let name = path.node.name
      path.node.name = name.split('').reverse().join('')
    }
  }
})
let { code } = generator(ast)
console.log(code)
