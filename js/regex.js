let regex = /c(.?t)/im;
let regex2= /dd/im;

let regeX = new RegExp('', 'i')
let message = String('cat and catdong likes eat ct.')
let result
// while(true) {
//     result = regex.exec(message)
//     if (!result) break
//     console.log(result, regex.lastIndex)
// }
console.log(message.match(regex), message.search(regex), message.replace(regex, `***`), message.split(regex))

console.log('---')