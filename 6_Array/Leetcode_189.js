// que:- https://leetcode.com/problems/rotate-array/description/
// rotate the array by k
// Hint:- Need 3 reversal

var rotate = function(nums, k) {
    if(nums.length < k){
        k = k % nums.length
    }
    reverse(nums, 0, nums.length-1);
    reverse(nums, 0, k-1);
    reverse(nums, k, nums.length-1);

    return nums;

};

var reverse = function (arr, l, r) {
    while(l<r){
        const temp = arr[l]
        arr[l++] = arr[r]
        arr[r--] = temp
    }
}


console.log(rotate([1,2,3,4,5,6,7], 3));

// Time Complexity:- O(n)