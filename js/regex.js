// let regex = /a?c.t|d.g/im;
// let regex2= /dd/im;
//
// let regeX = new RegExp('', 'i')
// let message = String('cat and catdong likes eat ct.')
// let message2 = 'as adogc adn dpo'
// let result
// while(true) {
//     result = regex.exec(message)
    // if (!result) break
    // console.log(result, regex.lastIndex)
// }
// console.log(message.match(regex), message.search(regex), message.replace(regex, `***`), message.split(regex))
// console.log(regex.exec(message2))

let message = 'zsm-----zzm----\nzttm---zsssm---zjjm'
let reg = /z(.*?)m/m

console.log(reg.test(message),RegExp.$1, reg.exec(message))
console.log(reg.test(message),RegExp.$1, reg.exec(message))
console.log(reg.test(message),RegExp.$1, )
console.log(reg.test(message),RegExp.$1, reg.exec(message))

// console.log(reg.test(message))
// console.log(reg.test(message))
console.log(reg.test(message), reg.exec(message))
console.log(reg.test(message), reg.exec(message))
console.log(reg.test(message), reg.exec(message))

