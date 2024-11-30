//function passed as argument to another function is called call back function.

function first(a){
    a()
    console.log("this is first");
}
function second(){
    console.log("this is second");
}
first(second)