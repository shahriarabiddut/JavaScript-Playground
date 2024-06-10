const sumOfDigits = (nums) => {
    nums.sort((a,b)=>a-b);
    let sum = 0 ,x = nums[0];
    while(x>0){
            sum += x%10;
            x = parseInt(x/10);
        }
    return 1 - sum%2;
}
console.log(sumOfDigits([99,77,33,66,55]));
console.log(sumOfDigits([34,23,1,24,75,33,54,8]));
