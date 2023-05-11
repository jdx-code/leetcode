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

var searchInsert = function (nums, target) {
    // Method #1 : My Solution
    // let found = 0
    // for(let i=0; i<nums.length; i++){
    //     if(nums[i] === target){
    //         found = i
    //     } else if(nums[i] < target) {
    //         found = i+1
    //     } 
    // }
    // return found

    // Method #2 : Leetcode solution (Binary search)    

    let low = 0, high = nums.length-1
    let mid = 0
    while(low <= high){
        mid = Math.floor((low+high)/2)
        if(target === nums[mid]){
            return mid
        } else if (target < nums[mid]) {
            high = mid - 1
        } else if (target > nums[mid]) {
            low = mid + 1
        }
    }
    return low;
    
}

console.log(searchInsert([1,3,5,6], 5))
console.log(searchInsert([1,3,5,6], 2)) 
console.log(searchInsert([1,3,5,6], 4))
console.log(searchInsert([1,3,5,6], 7))