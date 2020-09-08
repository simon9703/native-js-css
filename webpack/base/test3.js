import ww from './child/w3c.js'
import { bb2 } from './child/w3c2.js'
// const { bb2 } = require('./child/w3c2.js')
// const path = require('path')
// import _ from 'loadsh'

// console.log(x)

export function splitTest() {
  console.log('split test!!')
}

export function splitTest2() {
  // console.log(path.resolve(__dirname))
}

ww.bb()

bb2()

splitTest()
splitTest2()
