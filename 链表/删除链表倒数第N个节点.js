var removeNthFromEnd=function(head,n){
    let prehead=new ListNode(-1);
    prehead.next=head;
    let fast=prehead;
    let slow=prehead;
    while(n!=0){
        fast=fast.next;
        n--;
    }

    while(fast.next!=null){
        fast=fast.next;
        slow=slow.next;
    }
    slow.next=slow.next.next;
    return prehead.next;
}