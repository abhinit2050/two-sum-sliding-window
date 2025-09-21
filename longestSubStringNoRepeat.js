var lengthOfLongestSubstring = function(s) {
    let i = j =0;
    let wsMax = 0;
    let currentWs=0;
    let myMap = new Map()

    for(j=0;j<s.length;j++){
        if(myMap[s[j]] != undefined && myMap[s[j]]>=i){
            i=myMap[s[j]]+1;
        }
        myMap[s[j]] = j;
        currentWs = j-i+1;
        wsMax = Math.max(wsMax, currentWs);
       
    }

    return wsMax

};

let s = "abcabcbb"
console.log(lengthOfLongestSubstring(s));
