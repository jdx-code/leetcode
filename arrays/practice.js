// TWO-SUM
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// const twoSum = (nums, target) => {
//     let hashMap = {}
//     for(let i=0; i<nums.length; i++){
//         let diff = target - nums[i]
//         if(diff in hashMap && hashMap[diff] !== i){
//             return [hashMap[diff], i]
//         }
//         hashMap[nums[i]] = i
//     }
// }

// console.log(twoSum([2,7,11,15], 9))
// console.log(twoSum([3,2,4], 6))
// console.log(twoSum([3,3], 6))



// PLUSONE
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

const plusOne = (digits) => {
    for(let i=digits.length-1; i>=0; i--){
        digits[i]++
        if(digits[i] > 9){
            digits[i] = 0
        } else {
            return digits
        }
    }
    digits.unshift(1)
    return digits
}

console.log(plusOne([1,2,3]))
console.log(plusOne([4,3,2,1]))
console.log(plusOne([9]))