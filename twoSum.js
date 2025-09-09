// var twoSum = function(nums, target) {
    
//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;j<nums.length;j++){
//             if(nums[i] + nums[j] == target){
                
//                 return ([i,j]);
//             }
//         }
//     }
// };


var twoSum = function(nums, target) {
    
    let myMap={}
    for(let i=0;i<nums.length;i++){
        myMap[nums[i]] = i
    }

    for(let j=0;j<nums.length;j++){
        let pairToFind = target - nums[j];
       
        if(myMap[pairToFind] && myMap[pairToFind] != j){
            return [j, myMap[pairToFind]]
        }
    }
};


let nums = [1,3,4,2]
let target = 6

console.log(twoSum(nums,target))