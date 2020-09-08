const { parse } = require('@babel/parser')
const traverse = require('@babel/traverse').default
const generator = require('@babel/generator').default
const { transformFromAst, transformFromAstSync } = require('@babel/core')

let txt = `
import aa from 'ap'
const abc = 123
var bcd ='ss'
let qwe = true
function adc() {
  return 123
}
`

let ast = parse(txt, {
  sourceType: 'module'
})

traverse(ast, {
  Identifier() {
    console.log('caller')
  },
  enter(path) {
    if (path.node.type === 'Identifier') {
      let name = path.node.name
      path.node.name = name.split('').reverse().join('')
    }
  }
})
// let { code } = generator(ast)
let { code, map } = transformFromAst(ast, null, {
  presets: ['@babel/preset-env']
})
console.log(map)
