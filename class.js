class student{
    constructor(id,name,age,group){
        this.id=id;
        this.name=name;
        this.age=age;
        this.group=group;
    }
    updateid(uid){
        this.id=uid;
    }
    set setage(age){
        if(age<20){
            console.log('you are not eligible for bcom');
        }
        else if(age>50){
            console.log('your age is high so not eligible for bcom');
        }
        else{
            this.age=age;
        }
    }
    //used for some additional information add,don't pass parameters
    get nameu(){
        return "your name is"+this.name
    }
}
let student1= new student(100,'sai',21,'bcom');
let student2=new student(101,'arvind',22,'ba');

access=student1.name;
// console.log(access);
// student1.updateid(123)
// //used for chack and definetly pass one parameter
// student1.setage=24;
// console.log(student1);
// console.log(student2.nameu);

//inheritance;

class DSP{
    constructor(n,m){
        this.name=n;
        this.mobilno=m
    }
    getdspdetails(){
        console.log('name :',this.name,'mobilno :',this.mobilno);
    }
}
//inherit with extends word .super key word used for combine parent and child properties.
class constable extends DSP{
    constructor(n,m,s,p){
        super(n,m)
        this.salery=s;
        this.place=p
    }
    constabledetails(){
        console.log('salery :',this.salery,'place :',this.place);
    }
}
d1=new DSP('police',422222222)
console.log(d1);
c1=new constable('cname',211211212,30000,'khammam')
console.log(c1);
console.log(c1.constabledetails())