let moduleName = './moduleA' + '.mjs'

import(moduleName).then(({USER}) => {
   console.log(USER)
})

