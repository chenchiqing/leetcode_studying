//额外数组
var rotate=function(matrix){
    let len=matrix.length;
    let arr=new Array(len).fill(0).map(()=>new Array(len).fill(0));
    for(let i=0;i<len;i++){
        for(let j=0;j<len;j++){
            arr[j][len-1-i]=matrix[i][j];
        }
    }

    for(let i=0;i<len;i++){
        for(let j=0;j<len;j++){
            matrix[i][j]=arr[i][j];
        }
    }
};

//原地
var rotate=function(matrix){
    let len=matrix.length;
    for(let i=0;i<Math.floor(len/2);i++){
        for(let j=0;j<Math.floor((len+1)/2);j++){
            let temp=matrix[i][j];
            matrix[i][j]=matrix[len-j-1][i];
            matrix[len-j-1][i]=matrix[len-i-1][len-j-1];
            matrix[len-i-1][len-j-1]=matrix[j][len-i-1];
            matrix[j][len-i-1]=temp;
        }
    }
};