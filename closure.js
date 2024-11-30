//accessing inner varible in outer
 function outer(){
         let x=10
       function inner(){
         console.log(x)
     }
     return inner
 }
 let res=outer()
 res()

