function employe(firstname,lastname){
    this.firstname=firstname;
    this.lastname=lastname;
}
employe.prototype.fullname=function(){
    return this.firstname+" "+this.lastname
}
emp1=new employe("arvind","sai")
console.log(emp1.fullname());