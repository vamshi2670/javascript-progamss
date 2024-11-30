//separeate the elements 
arr1=[3,45,4,3,3]
arr2=[45,6,7,8]
arr3=[...arr1,...arr2]
let arr4=[one,two,...arr1]=arr1
console.log(one);
console.log(two)
console.log(arr4);
console.log(...arr3);


//splice syntax:arrname.splice(index,no of elments,add elemnts);
var arr=[2,3,5,6]
//arr.splice(1,0,3,4) //adding elements
//arr.splice(2,1) //removing elements
//arr.splice(0,2,2,1)  removeing elements from that place adding elements 
// arr.splice(-1,1,9)  last elment adding ,arr.splice(-1,1) last element delete
//arr.splice(2,1)
console.log(arr.slice(1,3))
console.log(arr);
