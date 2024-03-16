function sumofArrayExceptSelf(arr){
    let len =arr.length;
    const result =new Array(len);
    let leftSum =0;
    let rightSum=0;
    for(let i=0;i<len;i++){
        result[i]=leftSum
        leftSum += arr[i];
    }
    for(let i=len -1;i>=0;i--){
        result[i] +=rightSum;
        rightSum += arr[i];
    }
    console.log(result);
}
   sumofArrayExceptSelf([4,3,2,10])