//incase of error occur in try block catch block excute.
//otherwise no error occur catch block not excute.
// try{
//     console.log('line1');
//     console.log(line2);
//     console.log('line3');
// }
// catch(error){
//     console.log('inner catch');
// }
// console.log('outer console');

// Dstructure            syntax :[variables],{property}=array_name,object_name
arr=[1,2,3,4,5]
a=arr[2]
b=arr[3]
let [x,y,z,l,m]=arr
console.log(z);
let detais={
    name:"name",
    age:32,
    address:{
        village:"teldarpalli",
        district:'khammam',
        state:'telengana'
    }
}
v=detais.address.district //this is lengthy process 
console.log(v);
let {name,age,address:{village,district,state}}=detais   //we can assign like these
console.log(village);              //use as any whare with only property



arr2=arr;
console.log(arr);
console.log(...arr2); 
