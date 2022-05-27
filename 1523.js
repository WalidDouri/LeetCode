/*
1523. Count Odd Numbers in an Interval Range
Easy

714

58

Add to List

Share
Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

 

Example 1:

Input: low = 3, high = 7
Output: 3
Explanation: The odd numbers between 3 and 7 are [3,5,7].
Example 2:

Input: low = 8, high = 10
Output: 1
Explanation: The odd numbers between 8 and 10 are [9].
 

Constraints:

0 <= low <= high <= 10^9
*/


// Answer

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
  let sum = 0
  for (let i = 0; i < high; i++) {
    if (i % 2 === 1) {
      sum++
    }
  }
  return sum
};
