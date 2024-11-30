// x is passed to test function call now n did modifying x also modify that is called 
//pass by reference. is oposite is pass by value.
var x=[4];
function test(n){
    n+=1
    //console.log(n);
}
//console.log(x);
test(x)
//console.log(x);

//recursion
//calling the function inside is called recursion

function decending(n){
    if(n>0){
        //console.log(n);
        decending(n-1)
    }
}
decending(10)

n=10;
for(i=n;i>0;i--){
    //console.log(i);
}
//currying
function sum(a){
    return function second(b){
        return function third(c){
            return a+b+c
        }
    }
}
var total=sum(5)(4)(4)
//console.log(total);

function multiplay(a){
    return function(b){
        return a*b
    }
}
let multiplaynum=multiplay(6)
//console.log(multiplaynum(4));

//memorization
// is like a remind and time save.
 previousnum={}
function sumof(n){
    if(n in previousnum){
        return previousnum[n]
    }
    else{
    var result=0;
    for(i=0;i<=n;i++){
        result+=i;
    }
    previousnum[n]=result;
    return result;
    }
}
// console.time();
// console.log(sumof(100));
// console.timeEnd();
// console.time();
// console.log(sumof(100));
// console.timeEnd();

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(getlat)
}
function getlat(data){
    console.log(data)
    
}
