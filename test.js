/* 二分查找 */
function BinarySearch(val, arr) {
  let left = 0
  let right = arr.length - 1
  let mid = 0

  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    if (arr[mid] == val) {
      return mid
    } else if (arr[mid] > val) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return false
}

/* 交换数组中的值 */
function swap(list, from, to) {
  let temp = list[from]
  list[from] = list[to]
  list[to] = temp
}

/* 取指定范围随机数 */
function random(start, end) {
  let gap = end - start
  return Math.floor(Math.random() * (gap + 1)) + start
}

function lottery(whiteList, participant) {
  whiteList = whiteList.sort() // 白名单按字母顺序排序，用于二分查找
  let current = 0 // 当前已抽奖人数
  let max = 10000 // 抽奖总数
  let len = participant.length

  // 存储白名单用户到participant前n位
  for (let i = 0; i < len; i++) {
    // 二分查找，判断是否在白名单
    if (binarySearch(participant[i], whiteList) > -1) {
      swap(participant, current++, i)
    }
  }

  // 存储普通用户到participant前n~max位
  for (let j = current, len = max - current; j < len; j++) {
    swap(participant, j, random(j, len))
  }

  return participant.slice(0, max)
}
