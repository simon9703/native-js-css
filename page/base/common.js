/**
 * 按照retina屏幕比例放缩画布
 * @param {预设宽度} cwidth
 * @param {预设高度} cheight
 */
function createCanvas(canvas, ctx, cwidth, cheight) {
  window.devicePixelRatio || (window.devicePixelRatio = 1)
  console.log('devicePixelRatio: ', window.devicePixelRatio)
  canvas.style.width = cwidth + 'px' // css只是修改显示效果
  canvas.style.height = cheight + 'px'
  canvas.height = cheight * window.devicePixelRatio // 画布面积扩大
  canvas.width = cwidth * window.devicePixelRatio
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio) // 画布尺寸比例增加，让画布1px --> 1 * devicePixelRatio px。最终计算不变
}

/**
 * 随机整数
 * @param {*} start  一个参数: [0,start]
 * @param {*} end  两个参数: [start,end]
 */
function random(start = 0, end = 0) {
  let gap
  if (end === 0) {
    gap = start
    start = 0
  } else {
    gap = end - start
  }
  return Math.floor(Math.random() * (gap + 1)) + start
}

/**
 * 按权重随机
 * @param {权重数组，如[1,2,3]} weight
 * @param {取值数组，如['apple', 'orange', 'banana']} probable
 */
function randomArea(weight, probable) {
  // 转化成概率数组。[1,2,3] ==> [0.1666666, 0.5, 1]
  let sum = weight.reduce((previous, item) => previous + item)
  let randoms = [],
    pre = 0,
    cur = 0
  for (let i = 0; i < weight.length; i++) {
    cur = weight[i] / sum + pre
    randoms.push(cur)
    pre = cur
  }

  // 按照概率分布遍历，找到所属区间。
  let rand = Math.random()
  for (let i = 0; i < randoms.length; i++) {
    if (rand < randoms[i]) {
      return probable[i]
    }
  }
  return null
}

/**
 * 随机色彩
 * @param {透明度是否变化} alpha
 */
function randomColor(alpha = false) {
  if (typeof alpha === 'number' || typeof alpha === 'string') {
    return `rgba(${random(255)}, ${random(255)}, ${random(255)}, ${alpha})`
  } else if (!alpha) {
    return `rgba(${random(255)}, ${random(255)}, ${random(255)})`
  } else {
    return `rgba(${random(255)}, ${random(255)}, ${random(255)}, ${Math.random()})`
  }
}
