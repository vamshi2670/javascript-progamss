//asynchernos in js
// setTimeout(function(){
//     console.log('this is first line');
// },3000)
// console.log('this is second');
// test()
// console.log('this is second');
// function test(){
//     console.log('this is first');
// }
//ajax
// "use strict" //used for before delaring variable to assign first let,var,const,
// otherwise it show error it was used starting of code. 
//async defer is excute code one time js and html.
//
/*function sum(a){
    return function total(b){
        return a*b
    }
        
}
console.log(sum(4)(4));*/

//arrow function
square = a => a*a
//console.log(square(4));
function sum(a,b){
    sum=a+b;
    console.log(sum);
    square(sum)
    console.log('hello');
}
function dif(a,b){
    console.log(a-b);
}
function square(n){
    console.log(n*n);
}
sum(3,4)
dif(5,1)
