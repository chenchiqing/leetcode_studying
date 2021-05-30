//额外数组
var rotate = function (nums, k) {
    let len = nums.length;
    const newArr = new Array(len);
    for (let i = 0; i < len; i++) {
        newArr[(i + k) % len] = nums[i];
    }
    for (let i = 0; i < len; i++) {
        nums[i] = newArr[i];
    }
    console.log(nums);
};
rotate([1, 2, 3, 4, 5, 6], 3);