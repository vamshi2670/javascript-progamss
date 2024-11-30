
const sql=require('mysql')
const con=sql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'Vamshi@123',
        database:'test'
    }
)
 function getmobiles(){
    con.query(`select * from mobiles`,(err,row,col)=>{
        if(err){
            console.log("error")
        }else{
            console.log(row)
            console.log(col)
        }
        con.end()
    })
}

function addmobiles(n,p,r,s){
    con.query(`insert into mobiles(name,price,ram,storage) values(${n,p,r,s})`)
    ,function(err,res){
        if(err){
            console.log('errora')
        }
        else{
            console.log(res)
        }
    }
}
getmobiles()
addmobiles('radmi',20000,'8gb','128gb')