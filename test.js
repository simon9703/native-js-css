let a = ['s', 's']

let arr = [1, 2, 3, 4, 4, 5]
arr.forEach((item, index, arr) => {
  console.log(item)
  if (item % 2 === 0) {
    arr.splice(index, 1)
  }
})
console.log('final:', arr)
