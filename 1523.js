
var countOdds = function (low, high) {
  let sum = 0
  for (let i = low; i <= high; i++) {
    if (i % 2 !== 0) {
      sum++
    }
  }
  return sum
};
