var trap = function(arr) {
    let maxL=[];
    let maxR=[]
    let n = arr.length;
    maxL[0] = arr[0];
    maxR[n-1] = arr[n-1];
    let waterTrapped =0;

    for(let i=1;i<n;i++){
        maxL[i] = Math.max(arr[i], maxL[i-1])
    }

    for(let j=n-2;j>=0;j--){
        maxR[j] = Math.max(arr[j], maxR[j+1])
    }


    for(let k=0;k<maxL.length;k++){
        let h = Math.min(maxL[k], maxR[k]);
        h = (h < 0 ? 0 : h)
        waterTrapped += h-arr[k]
    }

    return waterTrapped;
};

let height =[4,2,0,3,2,5]
console.log(trap(height));