var moveZeros=function(nums){
    let temp=0;
    let r=0;
    let l=0;
    while(r<nums.length){
        if(nums[r]!=0){
            temp=nums[r];
            nums[r]=nums[l];
            nums[l]=temp;
            l++;
        }
        r++;
    }
    return nums;
};
console.log(moveZeros([1,0,2,5,0,4,7]));
