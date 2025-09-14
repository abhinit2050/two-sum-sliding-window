var strStr = function(haystack, needle){
    
    let n = haystack.length;
    let m = needle.length;

    //lps is the longest prefix which is also suffix in the needle array. First element is obviously 0
    let lps = [0];
    let i =0;
    let j=1;

    //adding values to lps array
    while(j<m){
        if(needle[i] == needle[j]){
            lps[j] = i+1;
            i++;
            j++;
        }
        else{
            if(i==0){
                lps[j] = 0;
                j++
            }else{
            i = lps[i-1]
        }

        }
    }

    i=0;
    j=0;
    
    //using lps array to skip unnecessary comparisons
    while(i<n){
        if(haystack[i] == needle[j]){
            i++;
            j++;
        } else {
            if(j==0){
                i++
            } else {
                j = lps[j-1]
            }
        }
        if(j==m){
            return i-m
        }
    }

    return -1;
}