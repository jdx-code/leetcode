// 1. TWOSUM
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
// Constraints:
//     2 <= nums.length <= 104
//     -109 <= nums[i] <= 109
//     -109 <= target <= 109
//     Only one valid answer exists.
// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

// const twoSum = (nums, target) => {
//     const hashMap = {}
//     for(let i=0; i<nums.length; i++){
//         hashMap[nums[i]] = i
//     }
//     for(let i=0; i<nums.length; i++){
//         let difference = target - nums[i]
//         if(difference in hashMap && hashMap[difference] != i){
//             return [i, hashMap[difference]]
//         }        
//     }
// }

// console.log(twoSum([2,7,11,15], 9))
// console.log(twoSum([3,2,4], 6))
// console.log(twoSum([3,3], 6))


// 2. REMOVE ELEMENTS
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
//     Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
//     Return k.
// Custom Judge:
// The judge will test your solution with the following code:
// int[] nums = [...]; // Input array
// int val = ...; // Value to remove
// int[] expectedNums = [...]; // The expected answer with correct length.
//                             // It is sorted with no values equaling val.
// int k = removeElement(nums, val); // Calls your implementation
// assert k == expectedNums.length;
// sort(nums, 0, k); // Sort the first k elements of nums
// for (int i = 0; i < actualLength; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.
// Example 1:
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:
// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Constraints:
//     0 <= nums.length <= 100
//     0 <= nums[i] <= 50
//     0 <= val <= 100

// const removeElement = (nums, val) => {
//     let  i=0
//     for(let j=0; j<nums.length; j++){
//         if(nums[j] !== val){
//             nums[i] = nums[j]            
//             i++
//         }        
//     }
//     return nums
// }

// console.log(removeElement([3,2,2,3], 3))
// console.log(removeElement([0,1,2,2,3,0,4,2], 2))
                        //   [0,1,3,0,4,0,4,2]  
                        //                i  
                        //                    j    

// 3. REMOVE DUPLICATES FROM SORTED ARRAY
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
//     Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
//     Return k.
// Custom Judge:
// The judge will test your solution with the following code:
// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length
// int k = removeDuplicates(nums); // Calls your implementation
// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.
// Example 1:
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Constraints:
//     1 <= nums.length <= 3 * 104
//     -100 <= nums[i] <= 100
//     nums is sorted in non-decreasing order.

// const removeDuplicatesFromSortedArray = (nums) => {
//     let i=0
//     for(let j=0; j<nums.length; j++){
//         if(nums[i] !== nums[j]){
//             nums[i+1] = nums[j]
//             i++
//         }
//     }
//     return ++i
// }

// console.log(removeDuplicatesFromSortedArray([1,1,2]))
// console.log(removeDuplicatesFromSortedArray([0,0,1,1,1,2,2,3,3,4]))
                                          //[0,1,2,3,4,2,2,3,3,4]
                                               //    i
                                               //                j


//  SEARCH INSERT POSITION
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.
// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4
// Constraints:
//     1 <= nums.length <= 104
//     -104 <= nums[i] <= 104
//     nums contains distinct values sorted in ascending order.
//     -104 <= target <= 104                                               

const searchInsertPosition = (nums, target) => {
    let low = 0, high = nums.length - 1, mid = 0
    while(low <= high){
        mid = Math.floor((low+high)/2)
        if(target === nums[mid]) {
            return mid
        }
        else if(target < nums[mid]) {
            high = mid - 1
        }
        else if(target > nums[mid]) {
            low = mid + 1
        }
    }
    return low
}

console.log(searchInsertPosition([1,3,5,6], 5))
console.log(searchInsertPosition([1,3,5,6], 2))
console.log(searchInsertPosition([1,3,5,6], 7))