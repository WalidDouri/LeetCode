/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {

  let sumM = 1
  let sum = 0
  let apples = n.toString().split('').map(Number);
  for (i = 0; i < apples.length; i++) {
    sumM = sumM * apples[i]
    sum = sum + apples[i]
    // console.log(sum)

  }
  return sumM - sum
};