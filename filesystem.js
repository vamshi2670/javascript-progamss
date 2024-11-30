
//readfile
//fs is module it has several methods
/*
let fs=require('fs')
fs.readFile('file.text',(err,data)=>{
    if(err){
        console.log('error found')
    }
    else{
        console.log(data.toString())
    }
})
console.log('after code') //asynchrous method

read file synchrous method

let fs=require('fs')
let data=fs.readFileSync('./file.text')
console.log(data.toString())
console.log('after');

writefile
let fs=require('fs')
fs.writeFile('./file2.text',"this is ajax call",(err)=>{
    if(err){
        console.log('error found');
    }else{
        console.log('sucess');
    }
})
//it is adding extra text
let fs=require('fs')
fs.appendFile('./file2.text',"adding text",(err)=>{
    if(err){
        console.log('error found');
    }else{
        console.log('sucess');
    }
})
// used to delete given file
let fs=require('fs')
fs.unlink('./file3.text',(err)=>{
    if(err){
        console.log('error found');
    }else{
        console.log('sucess');
    }
})
// used to create new folder.
let fs=require('fs')
fs.mkdir('newfolder',(err)=>{
    if(err){
        console.log('error found');
    }else{
        console.log('sucess');
    }
})
// used to read folders in new folder.
let fs=require('fs')
fs.readdir('newfolder',(err,data)=>{
    if(err){
        console.log('error found');
    }else{
        console.log(data);
    }
})

*/
// used to delete empty folder.
// let fs=require('fs')
// fs.rmdir('newfolder',(err)=>{
//     if(err){
//         console.log('error found');
//     }else{
//         console.log('s');
//     }
// })
//opening file
let fs=require('fs')
var readstream=fs.ReadStream('file2.text')
readstream.on('open',function(){
    console.log('file is open')
})