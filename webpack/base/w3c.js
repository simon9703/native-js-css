export function con() {
  console.log('from script : ', document.getElementById('content'))
}

export function bb() {
  console.log('+++++bbb')
}

export function cc() {
  console.log('+++++ccc')
}

export function dd() {
  console.log('+++++ddd')
}

con()

export default {
  dd,
  cc,
  bb,
  con
}
