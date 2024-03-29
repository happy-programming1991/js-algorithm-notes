// 二分查找
function binarySearch(list, item) {
  let low = 0
  let high = list.length - 1

  while (low <= high) {
    const mid = Math.floor( (low + high) / 2 )
    const guess = list[mid]

    if (guess === item) {
      return mid
    } else if (guess < item) {
      low = mid + 1
    }else {
      high = mid - 1
    }
  }

  return -1
}

console.log(binarySearch([1, 3, 5, 7, 9, 11], 3))
