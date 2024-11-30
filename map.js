//array elements modifying easily.
//array.map(function(currentValue, index, arr), thisValue)
birthyears=[2004,2003,2020,2006,2009]
var ages=birthyears.map(function(elements,index,arr){
    let age=2024-elements;
    return age;
})
console.log(ages)
console.table(birthyears)
console.table(ages)