/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let sum = nums.reduce((acc, curr) => acc * curr, 1);
  return sum < 0 ? -1 : sum > 0 ? 1 : 0;
};



//  var arraySign = function(nums) {
//   // let sum = 1
//   // for (i=0; i<nums.length; i++) {
//   //     sum = sum*nums[i]
//   // }
//   // console.log(sum)
// //     if (sum > 0) {
// //     return 1
// // } else if (sum < 0){
// //     return -1
// //     } else  if (sum === 0){
// //         return 0
// //     }
// };