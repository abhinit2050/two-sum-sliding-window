var characterReplacement = function(s, k) {
    let i=j=0;
    let maxStrLength = 0;
    let currMap={};

    while(j<s.length){

        //let currMap = mapper(s.slice(i,j+1));
         currMap[s[j]] = (currMap[s[j]] || 0) + 1;
        
        let totalChars = totalCounter(currMap);
        let maxCharCount = maximumCounter(currMap);
        let charsToReplace = totalChars - maxCharCount;

        if(charsToReplace <=k){
            maxStrLength = Math.max(maxStrLength, j-i+1);
            j++;
           
        } else {
           
            currMap[s[i]] -= 1;
             i++;
             j++;
        }
    }

    return maxStrLength;
    
};

function mapper(str){
    let map = new Map();
    for(let x=0;x<str.length;x++){
        if(map[str[x]]){
            map[str[x]] += 1;
        } else {
            map[str[x]] = 1;
        }
    }

    return map;
}

function totalCounter(obj){
    let totalCount = 0;
    for(let key in obj){
        totalCount += obj[key]
    }

    return totalCount;
}

function maximumCounter(obj){
    let maxCount = 0;
    for(let key in obj){
        maxCount = Math.max(maxCount, obj[key]);
    }

    return maxCount;
}


let s = "AABABBA", k = 1;

console.log(characterReplacement(s,k));