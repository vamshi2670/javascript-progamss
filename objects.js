// 3 type of objects are there.
// 1) syntax:- object_name={property:value1,property:value2,....property:valueN}
var student={name:"vamshi",
            age:20,
            class:"13",
            group:"bcom",
            year:"2024"
        };
        Object.freeze(student) //prevent from modifcation.
        student.age=21;
console.log(student);


//2) object_name=new object();
var shop=new Object();
  
shop.name='memufamous';
shop.place='hyd';
shop.income=20000;
shop.customers=100;
console.log(shop);

//3)function with arguments and this keyword.

function employe(id,name,salery){
    this.id=id;
    this.name=name;
    this.salery=salery;
};
details=new employe(101,"emloyname",50000)
console.log(details);

