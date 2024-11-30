var num=[31,24,4,87,81,20];
var states=['telengana','andra','jaipur','pune','tamilnadu']
//acending
let s=num.sort(
    function(a,b){
        if(a>b){
            return 1
        }
        else{
            return -1
        }
    }
);
//decending
let st=states.sort(
    function(a,b){
        if(a<b){
            return 3
        }
        else return-1
    }
);
console.log(st);
console.log(s);