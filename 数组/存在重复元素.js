//排序
var containsDuplicate = function (nums) {
    nums.sort((a, b) => a - b);
    let len = nums.length;
    for (let i = 1; i < len; i++) {
        if (nums[i - 1] == nums[i]) {
            return true;
        }
    }
    return false;
};
console.log(containsDuplicate([1, 2, 5,2, 8]));

//哈希表
var containsDuplicate1=function(nums1){
    const set=new Set();
    for(const x of nums1){
        if(set.has(x)){
            return true;
        }
        set.add(x);
    }
    return false;
};
console.log(containsDuplicate1([1,5,4,2,3]));