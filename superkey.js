class companyname{
    constructor(){
        this.companyname="javascript.Ltd"
    }
}
class employe extends companyname{
    constructor(id,name){
        super();
        this.id=id;
        this.name=name;
    }
}
var emp=new employe(100,"name");
console.log(emp.id+" "+emp.name+" "+emp.companyname);