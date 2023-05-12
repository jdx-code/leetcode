// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.
// Example 1:
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:
// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:
// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].
// Constraints:
//     1 <= digits.length <= 100
//     0 <= digits[i] <= 9
//     digits does not contain any leading 0's.

// const plusOne = function(digits) {
//     const newNumber = Number(digits.join(''))
//     return newNumber
// }

var plusOne = function(digits) {
    for(var i = digits.length - 1; i >= 0; i--){        // check the array from end position
            digits[i]++;                                   // increment the current digit anyway
        if(digits[i] > 9){      // if after increment, current digit becomes greater than 9 then -
            digits[i] = 0;      // make current digit = 0, then re-run if elements left in array
        }else{                  // if after increment, current digit is less than 9 then - 
            return digits;      // return the digits array (solution found)
        }
    }
    digits.unshift(1);          // this is done if there are no array elements after first traverse
    return digits;              // return the array (solution found)
};



console.log(plusOne([1,2,3]))
console.log(plusOne([4,3,2,1]))
console.log(plusOne([9]))
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,9]))