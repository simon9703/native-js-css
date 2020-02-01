import '@/test.css'
import '@/w3c.css'

import img3 from '../../img/face/hanyan.png'
import img4 from '../../img/face/liulei.png'
import('./test3') // 动态加载
import('./w3c2') // 动态加载
console.log(img3, img4)
import x from './w3c'
// import _ from 'loadsh'
console.log(x)

const base = '基础'
let arrow = aa => aa + '123'
let pro = new Promise((resolve, reject) => {
  resolve('p1p1s')
})
console.log(base, arrow, pro)
// dd()
console.log('热加载1111233332444')
// import $ from 'jquery'
// $('.back').text('1234')
debugger
console.log('zsm: ', process.env)
// fetch('/back/api/v1/whoami')
//   .then(function(response) {
//     return response.json()
//   })
//   .then(function(myJson) {
//     console.log(myJson)
//   })

// 页面js
let back = document.querySelector('.back')

function backToTop(time) {
  time = time || 400
  let scrollDis = document.body.scrollTop || document.documentElement.scrollTop
  let startTime = new Date()

  let wrap = () => {
    let currentTime = new Date()
    let diff = time - (currentTime - startTime) // 剩余时间

    let distance = (scrollDis * diff) / time // 根据剩余时间计算下一步位置
    console.log(diff, distance)

    if (diff > 0) {
      window.scrollTo(0, distance)
      requestAnimationFrame(wrap)
    } else {
      window.scrollTo(0, 0) // 结尾
    }
  }

  wrap()
}

function backToTopEase(time) {
  time = time || 500
  let scrollDis = document.body.scrollTop || document.documentElement.scrollTop
  let startTime = new Date()

  let wrap = () => {
    let currentTime = new Date()
    let diff = currentTime - startTime // 经过时间
    let a = -scrollDis / (time * time)
    let b = scrollDis
    let destination = a * diff * diff + b

    console.log(diff, destination)
    if (diff < time) {
      window.scrollTo(0, destination)
      requestAnimationFrame(wrap)
    } else {
      window.scrollTo(0, 0) // 结尾
    }
  }

  wrap()
}

back.addEventListener('click', () => {
  backToTopEase()
})
