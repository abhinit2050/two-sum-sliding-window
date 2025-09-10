//https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/submissions/1766304528/
var twoSum = function(numbers, target) {
    let i=0;
    let j=numbers.length;
    while(i<=j){
       
        let sum = numbers[i]+numbers[j-1]
        if(sum<target){
            i++
        } else {
            j--
        }
        if(sum==target){
            return [i+1,j+1]
        }
    }



    return [-1,-1]

};

let numbers = [2,7,11,15], target = 9

console.log(twoSum(numbers,target));