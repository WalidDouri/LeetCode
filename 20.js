/*
iven a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/


//Answer

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function (s) {
//   let apples = s.split('');
//   for (let i = 0; i < apples.length; i++) {
//     if (apples[i] === "(" && apples[i + 1] === ")") {
//       return true
//     }
//     else if (apples[i] === "{" && apples[i + 1] === "}") {
//       return true
//     }
//     else if (apples[i] === "[" && apples[i + 1] === "]") {
//       return true
//     }
//     else {
//       return false
//     }

//     console.log(apples)
//   }
// }



/**
 * @param {string} s
 * @return {boolean}
 */// maybe try to use map text time with stack
var isValid = function (s) {
  let stack = []
  let object = {
    "(": ")",
    "[": "]",
    "{": "}"
  }


  for (let i of s) {
    if (object[i]) {
      stack.push(object[i])
      // console.log(stack)
    } else {
      console.log(i, [i])
      if (stack.pop() !== i) {
        return false
      }
    }
  }
  return (!stack.length)
};

