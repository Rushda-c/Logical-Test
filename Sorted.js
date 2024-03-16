function sortAscendingDescending(array){
    const mid =Math.floor(array.length/2);
    const firstHalf =array.slice(0,mid);
    const secondHalf=array.slice(mid);
    firstHalf.sort((p,q)=> p-q);
    secondHalf.sort((p,q)=>q-p);
    return firstHalf.concat(secondHalf);
}
   const Array=[3,7,1,4,90,67,10,78,45];
   const sortedArray= sortAscendingDescending(Array);
   console.log(sortedArray);
   const secondHalfArray = sortedArray.slice
   (Math.floor(sortedArray.length/2));
   console.log(secondHalfArray);