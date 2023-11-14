const bubbleArr = [9, 2, 1, 4, 3, 0]

function recursiveBubbleSort(arr, s = 0) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      const toSwitch = arr[i]
      arr[i] = arr[i + 1]
      arr[i + 1] = toSwitch
      s++
    }
  }
  if (s) {
    return recursiveBubbleSort(arr, s = 0)
  }
  return arr
}
// recursiveBubbleSort(bubbleArr)
