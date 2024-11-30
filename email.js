
const nm=require('nodemailer')
const trans=nm.createTransport(
    {
        host:"smtp.gmail.com",
        port:597,
        secure:false,
        auth:{
            user:"vamshivamshi2670@gmail.com",
            pass:"mcmd cijo jxqf apni"
        }
        
    }
)
var options={
    from:"vamshivamshi2670@gmail.com",
    to:"vamshibathula5@gmail.com",
    subject:"testing nodejs email",
    text:"hello welcome to our applications"
}
trans.sendMail(
    options,function(err,info){
        if(err){
            console.log('error')
        }
        else{
            console.log("sent")
        }
    }
)