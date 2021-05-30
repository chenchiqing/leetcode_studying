var reverseList=function(head){
    let [p,c]=[null,head];
    while(c){
        [c.next,p,c]=[p,c,c.next];
    }
    return p;
};

console.log(reverseList([1,2,5,4,9]));