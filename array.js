//array includes objects but object not includes array
/*array create 3 types.
1) var array_name=[value1,value2......valuen]
2) var array=new Array()
 */

var movies=['rrr','bahubali','devera','salar','hanuman']
movies[1]='another value';  //change array value.
console.log(movies);


var cars=new Array('alto','maruthi','audi','bmw');
cars[3]='rr'//accessing
console.log(cars);


//3)
var cars=new Array('alto','maruthi','audi','bmw');
for(i=0;i<cars.length;i++){
    console.log(cars);
}

//functions in array
movies.concat(cars)
//include method
let t=movies.includes('rrr')
    console.log(t);
//indexof
movies.indexOf('salar')

//two diminetin array;
var arry=[
    [1,'java script',100],
    [2,'react js',200],
    [3,'sql',300]
]
//arry[0][2]=10;
//arry[1][2]
var s=arry[2].push('django')
console.log(s);
console.log(arry);

//array flatten is convert multi dimentions array into single dimention array.
let num=[1,2,3,[4,5,6],3,4,[8,9,1],[2,4]]
var result=[]
function flatten(arr){
    for(ele of arr){
        if(Array.isArray(ele)){
            flatten(ele)
        }
        else{
            result.push(ele)
        }
    }
}
flatten(num)
console.log(result);

//is like above method short cut.
console.log(num.flat(1))


//