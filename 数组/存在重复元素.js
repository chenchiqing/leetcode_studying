var a=function(nums){
    if(nums.length==0) return 0;
    let i=0;
    for(let j=1;j<nums.length;j++){
        if(nums[i]!=nums[j]){
            i++;
            nums[i]=nums[j];
        }
    }
    let num=[];
    let k=0;
    for(k;k<i+1;i++){
        num[k]=nums[i];
    }
    console.log(num);
    return i+1;
};

console.log(a([0,0,1,2,3,3]));