var findKthLargest = function(nums, k) {
    let i = 0, j = nums.length - 1;
    // 基准 -> index
    let index = partition(nums, i, j);
    // 基准值是不是第k个元素
    // [8, 9, 7, -1, 5] k = 2 > 1 2 3
    // partition: [5, -1, 7, 8, 9]
    // 0 1 2 3
    // let num = nums[index];
    // 倒数: 第k大元素
    // 5 - 2 = 3
    k = nums.length - k;
    while (index !== k) {
        if (index < k) {
            i = index + 1;
        } else {
            j = index - 1;
        }
        index = partition(nums, i, j);
    }
    return nums[index];
};
function partition(nums, left, right) {
    let i = left;
    let j = right;
    let provit = nums[left];
    while (left < right) {
        while (left < right && nums[right] >= provit) right--;
        nums[left] = nums[right];
        while (left < right && nums[left] <= provit) left++;
        nums[right] = nums[left];
    }
    nums[left] = provit;
    return left;
}