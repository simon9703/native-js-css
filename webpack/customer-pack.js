const fs = require('fs')
const path = require('path')
const { parse } = require('@babel/parser')
const traverse = require('@babel/traverse').default
const { transformFromAst } = require('@babel/core')
const generate = require('@babel/generator').default

function findMocules(entry) {
  const content = fs.readFileSync(path.resolve(__dirname, entry))
  const ast = parse(content.toString(), {
    sourceType: 'module' // import语句
  })

  let modules = {
    [entry]: ''
  }

  traverse(ast, {
    ImportDeclaration(s) {
      let source = path.posix.join(path.posix.dirname(entry), s.node.source.value)
      Object.assign(modules, findMocules(source))

      // console.log(s.node.source.value)
      // modules
    }
  })

  let { code } = transformFromAst(ast, null, {
    presets: ['@babel/preset-env']
  })
  modules[entry] = code
  return modules
}

function replaceRequire(txt) {
  const ast = parse(txt)
  traverse(ast, {
    CallExpression(s) {
      if (s.node.name === 'require') {
        s.node.name = console.log(s.node)
      }
    }
  })
  let { code } = generate(ast)
  return code
}

function _webpack_exec(modules, _webpack_exports, _webpack_require) {}

function _webpack_require(moduleId) {}

class Webpack {
  constructor(config) {
    this.entry = config.entry
  }

  run() {
    let modules = findMocules(this.entry)
    let result = replaceRequire(modules[this.entry])
    console.log(result)
  }
}

new Webpack({
  entry: './base/test3.js'
}).run()
