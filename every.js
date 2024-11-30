//syntax:arrnmae.every(function(ele,index,arr){condition})
//in array every element satisfy the condition return true
//unless one element doesn't satisfy return false.

let arr=[24,74,28,4,8,40]
let even=arr.every(function(ele){
    return ele%2==0
})
console.log(even);

//odd array
let array=[4,35,7,9,11]
let odd=array.every(function(e){
    return e%2!=0
})
console.log(odd);