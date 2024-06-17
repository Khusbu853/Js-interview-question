// que:- given an integer array nums, find the subarray with the largest sum and return its sum

function maxSubArraySum(nums) {
    let sum = 0
    let maxSum = nums[0]
    
    for(let i = 0; i<nums.length; i++){
        sum = sum+nums[i];
        if(sum>maxSum) maxSum = sum;
        if(sum<0) sum = 0
    }
    return sum;
}


