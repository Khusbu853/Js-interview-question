// que:- https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Using Two-pointer approach

var removeDuplicates = function(nums) {
    let i = 0
    for(let j = 1; j<nums.length; j++){
        if(nums[i]!==nums[j]){
            i++;
            nums[i]=nums[j]
        }
    }
    return i+1
    
};

// Time Complexity:- O(n)