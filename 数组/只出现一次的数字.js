var singleNumber=function(nums){
    nums.sort((a,b)=>a-b);
    let len=nums.length;
    for(let i=0;i<len-1;i+=2){
        if(nums[i]!=nums[i+1]){
            return nums[i];
        }
    }
};
console.log(singleNumber([4,1,2,1,2]));

//异或运算
var singleNumber1=function(nums1){
    let a=0;//一个数和0异或等于其本身
    for(const b of nums1){
        a^=b;
    }
    return a;
}
console.log(singleNumber1([4,1,2,1,2]));