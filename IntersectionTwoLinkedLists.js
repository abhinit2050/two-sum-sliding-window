// var getIntersectionNode = function(headA, headB){

// if(!headA || !headB) return null;

// let n=0;
// let m=0;
// let a = headA;
// let b = headB;
  
//     while(a){
//         n++;
//         a = a.next
//   }
//     while(b){
//         m++;
//         b = b.next
//   }
//     if(n>m){
//         for(let i=0;i<n-m;i++){
//             headA = headA.next
//         }
//     } else if(m>n){
//         for(let i=0;i<m-n;i++){
//             headB = headB.next
//         }
//     }

//     while(headA && headB){
//         if(headA == headB) return headA;
        
//         headA = headA.next;
//         headB = headB.next;
//     }

// }

//now wih two pointer approach


var getIntersectionNode = function(headA, headB){
    if(!headA || !headB) return null;
    
    let pA = headA;
    let pB = headB;

    while(pA != pB){
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;

    }

    return pA;
}