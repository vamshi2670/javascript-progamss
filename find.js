//find is a callback functin
// it return only first element if it return true.

let places=['khammam','suryapet','hydrabad','palair','kothagudem']
var place=places.find(function(element){
    return element.startsWith('k')
})
console.log(place);


// if condition is satisfy it return true.
// one element is not satisfy it return false

let marks=[70,75,85,90,80]
var pass=marks.every(function(element){
    return element>65;
})
console.log(pass);