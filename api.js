
const express=require('express')

const app=express()

app.listen(4500,()=>{
    console.log('server started')
})
app.get('/mobiles',(req,res)=>{
    res.send('request send sucess')
})
app.post('/mobiles',(req,res)=>{
    res.send('mobile posted')
})
app.put('/mobiles',(req,res)=>{
    res.send('mobile updated')
})
app.delete('/mobiles',(req,res)=>{
    res.send('mobile deleted')
})