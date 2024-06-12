#leetcode 1304 js
/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let output = [] ;
    if(n%2!=0){
        output.push(0);
    }
    while(output.length<n){
        let index = output.length+1;
        output.push(index);
        output.push(-index);
    }
    return output;
};
