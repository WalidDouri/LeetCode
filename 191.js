/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {

  // 2 is binary for toString
  let sum = 0;
  let arr1 = n.toString(2).split("");
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === '1') {
      sum++;
    }
  }
  return sum;
};

//split into a string loop through it tally the number of ones for each return sum

//maybe reduce once we remove the 0zeros?