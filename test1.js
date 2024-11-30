//If wants to access functions,class,variable anything from another file.
// first do export test1.js
// syntax:module.exports={funcation_name,class_name
// variable ...}anythin is give here
//test2 file access test1 with function of: require(path)


function sum(a,b){
    console.log(a+b)
}


let a=39

module.exports={
    sum,a
}