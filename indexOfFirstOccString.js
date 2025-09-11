var strStr = function(haystack, needle) {
    
    let i =0, j=0;

    while(i<needle.length && j<haystack.length){
      
        if(needle[i] == haystack[j]){
            i++;
            j++
        } else {
            j = j-i+1;
            i=0; 
        }

        if(i == needle.length){
          
            return j-i
        }
       
    }

    return -1;
}

let haystack ="leetcode", needle = "leeto"

console.log(strStr(haystack,needle));