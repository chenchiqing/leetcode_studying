var removeDuplicates = function (nums) {
    if (!nums.length) return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] != nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    let k = 0;
    let num = [];
    for (k; k < i + 1; k++) {
        num[k] = nums[k];
    }
    console.log(num);
    return i + 1;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4]))