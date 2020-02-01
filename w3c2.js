export function con() {
  console.log('from script : ', document.getElementById('content'))
}

export function bb2() {
  console.log('+++++bbb')
}

export function cc2() {
  console.log('+++++ccc')
}

export function dd() {
  console.log('+++++ddd')
}

con()

export default {
  dd,
  cc2,
  bb2,
  con
}
