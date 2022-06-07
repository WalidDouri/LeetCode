/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  let sorted = arr.sort();
  let diff = sorted[1] - sorted[0]
  // console.log(sorted)
  for (i = 2; i < sorted.length; i++) {
    let apples = sorted[i] - sorted[i - 1]
    if (apples !== diff) {
      return false
    } else {
      return true
    }
  }
};       