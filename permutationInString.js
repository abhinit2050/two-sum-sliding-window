var checkInclusion = function(s1, s2) {
    let hashS = Array(26).fill(0);
    let hashW = Array(26).fill(0);
    let window_length = s1.length;

    for(let i=0; i< window_length;i++){
        hashS[s1.charCodeAt(i) - 97]++;
        hashW[s2.charCodeAt(i) - 97]++
    }

    let i=0;
    let j=window_length-1;

    while(j<s2.length){
        if(isHashSame(hashS, hashW)){
            return true;
        } else {
            --hashW[s2.charCodeAt(i) - 97];
            ++i;
            ++j;
            ++hashW[s2.charCodeAt(j) - 97];
        }
    }
    return false;

};

 function isHashSame(hashS, hashW){
        for(let i=0;i<26;i++){
            if(hashS[i] !== hashW[i]){
                return false;
            }
        }

        return true;
}

let s1 = "ab", s2 = "eidboaooo"
console.log(checkInclusion(s1,s2));