var maxArea = function(height) {
    let i=0, j=height.length-1;
    let maxValue=0;

    while(i<j){
         maxValue = Math.max(maxValue, Math.min(height[i],height[j])*(j-i))
        if(height[i] < height[j]){
            i++;
        } else {
            j--
        }
       
    }

    return maxValue;
};

// let height = [1,8,6,2,5,4,8,3,7];
let height = [1,1];
console.log(maxArea(height));