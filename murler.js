
const express=require('express')
const multer=require('multer')
const cors=require('cors')
const app=express()
app.use(cors())
const ds=multer.diskStorage({
    destination:'uploads/',
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname)
    }
})
const mul=multer({
    storage:ds
})
app.listen(5000,()=>{
    console.log('server started at 5000 port')
})

app.post(
    '/uploads',mul.single('avatar'),
    (req,res)=>{

    }
)