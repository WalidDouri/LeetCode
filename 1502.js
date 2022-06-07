/**
 * @param {number[]} arr
 * @return {boolean}
 */
let canMakeArithmeticProgression = function (arr) {
  let sorted = arr.sort(function (a, b) { return a - b });
  let diff = sorted[1] - sorted[0];
  // console.log(sorted)
  if (arr.length == 2) {
    return true
  }
  for (i = 2; i < sorted.length; i++) {
    let apples = sorted[i] - sorted[i - 1]
    if (apples !== diff) {
      return false

    }
  }
  return true
};       