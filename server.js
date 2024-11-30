
const express=require('express')
const app=express()
//starting server
app.listen(3500,()=>{
    console.log('server started');
})
// app.get('/',(req,res)=>{//include two parameters request and response.
// //clint send request to server.
//     res.send('hello received get request') //this method send respose to clint
//     //when he send request.
// })
// app.post('/hello',(req,res)=>{
//     res.send('post request received')
// })
// app.put('',(req,res)=>{
//     res.send('put request')
// })

//handling quary parameter
// app.get('/',(req,res)=>{
//     if(req.query.state){
//         res.send(`welcome to ${req.query.state}`)
//     }
//     else{
//         res.send('hello')
//     }
// })

//path parameters use parmes 
//:city write anyting 
// /xyz/:city means write anything after written xyz
// app.get('/:city/',(req,res)=>{
//     if(req.params.city){
//         res.send(`welcome to ${req.params.city}`)
//     }
//     else{
//         res.send('hello world')
//     }
// })


// create http server.
const http=require('http')
const port=4000;
const hostname= '127.0.0.1';
const server=http.createServer((req,res)=>{
    // res.statusCode=200;
    // res.setHeader('content-type','text/plain')
    // res.end('Hello world!')
    res.writeHead(200,{'content-type':'text/plain'})
    res.write("hello world")
    res.end()
})

server.listen(port,hostname,()=>{
    console.log('server started')
})