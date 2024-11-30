// setInterval is continous excute after 3 secondes 
// clearintervel is gave stop exution is like a break.
var count=1
var x=setInterval(func,3000,"xyx");

    function func(name){
        console.log('hello'+name);
        console.log(count);
        count++;
        if(count>=5){
            clearInterval(x);
            console.log(count);
        }
    }
//settimeeout is excute only once given particular time 
    setTimeout(function(){
        console.log('hello');
    },3000)
    console.log('google');