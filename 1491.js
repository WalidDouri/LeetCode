/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {

  let y = salary.sort(function (a, b) { return b - a });
  let z = y.slice(1, -1);
  let w = (z.reduce((a, b) => a + b) / z.length).toFixed(5);

  console.log("first", y)
  console.log("second", z)
  console.log("third", w)

  return w

};




// look through array and push the highest and lowest value in the empty arrays
// map? filter/ mid and max/ map and splice

