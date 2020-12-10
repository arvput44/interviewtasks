function vasitum_max_sum_subarray(nums, k) {

    var curr_max = 0;
    for (var i = 0; i < k; i++) {
        curr_max += nums[i];
    }

    var max_so_far = curr_max;

    for (var j = k; j < nums.length; j++) {
        curr_max += (nums[j] - nums[j - k]);
        // Each time we get a new curr_sum compare it with max_so_far and update max_so_far if it is greater than max_so_far    
        max_so_far = Math.max(curr_max, max_so_far);
    }
    return max_so_far;
}
console.log('vasitum_max_sum_subarray ==>>', vasitum_max_sum_subarray([2, 1, 5, 1, 3, 2], 3));


function vasitum_sum_target(arr, targetSum) {
    const nums = {};
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (targetSum - num in nums) {
            return [nums[targetSum - num], i];
        }
        nums[arr[i]] = i;
    }
    return [-1, -1];
}


console.log('vasitum_sum_target->>', vasitum_sum_target([2, 5, 9, 11], 11));