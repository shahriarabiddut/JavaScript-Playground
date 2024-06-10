/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a,b)=>a-b);
    const result = new Array();
    let min = Infinity;
    
    for(let i = 0;i< arr.length -1 ;i++){
        let diff = arr[i+1] - arr[i];
        min = Math.min(diff,min);
    }
    
    for(let i = 0;i<arr.length-1 ;i++){
        let diff = arr[i+1] - arr[i];
        if(min===diff){
            result.push([arr[i],arr[i+1]]);
        }
    }
    return result;
};
