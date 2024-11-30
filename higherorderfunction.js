let arr=[4,5,6,3,6]
// function square(){
//     var squares=[]
//     for(ele of arr){
//     let s=ele*ele
//         squares.push(s)
//     }
//     return squares
// }
// function cube(){
//     var cubes=[]
//     for(e of arr){
//         let res=e*e*e
//         cubes.push(res)
//     }
//     return cubes
// }
// let x =square(arr)
// console.log(x);
// let y=cube(arr)
// console.log(y);

function square(n){
    return n*n
}
function cube(n){
    return n*n*n
}
function increment(c){
    return c+1
}
function anyoperation(arr,operation){
    let result=[]
    for(ele of arr){
        result.push(operation(ele))
    }
    return result
}
let s=anyoperation(arr,square)
console.log(s);
let c=anyoperation(arr,cube)
console.log(c);