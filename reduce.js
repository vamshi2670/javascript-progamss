//arrname.reduce(function(accumulator,element,index,array))

arr=[23,56,33,7,5,2,323];
max=arr.reduce(function(ecum,element){
    if(ecum>element){
        return ecum
    }
    else{
        return element
    }
},arr[0])
console.log(max);

arr=[2,4,7,9]
sum=arr.reduce(function(accumulator,element){
    return accumulator+element
},0)
console.log(sum);