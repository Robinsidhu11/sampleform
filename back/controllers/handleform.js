const mailSender=require('../utils/mailsender')
const {courseEnrollmentEmail}=require('../mailtemp/mailSenttemplate')
exports.handleForm=async (req,res)=>{
    try{
        const {fullname,email}=req.body
        console.log("data recived is ",fullname,email)
        //to user
        const resp=await mailSender(email,"Juat a testing mail",courseEnrollmentEmail("Robin Acedamy",fullname))
        //copy to myself
        await mailSender("rbnsidhu11@gmail.com","Someone filled the form",`${fullname} has just filled the form. <br> His Email being <h1>${email}</h1>`)
        res.status(200).json({
            success:true,
            
        })
    }   
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message,
            error:"unknown h jai"
        })
    }
}
