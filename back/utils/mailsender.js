const nodeMailer=require('nodemailer')

const mailSender=async (email,subject,body)=>{
    const transponder=await nodeMailer.createTransport({
        host:"smtp.gmail.com",
        auth:{
            user:"pesnation44@gmail.com",
            pass:"drraxmrufnkrwhia"
        }
    })

    const mailinfo=await transponder.sendMail({
        from:"robin welcomes you to robin acedamy",
        to:`${email}`,
        subject:`${subject}`,
        html:`${body}`

    })

    // console.log("mail sent",mailinfo)
    return mailinfo
}

module.exports=mailSender