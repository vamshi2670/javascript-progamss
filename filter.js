//return satisfied value in array.


var num=[4,5,32,8,956,3,5,6,23,54,7]
let value=num.filter(function(element){
    return element%2==0;
})
console.log(value);