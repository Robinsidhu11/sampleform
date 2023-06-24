const mongoose=require('mongoose')

const dbconnnect=()=>{
    mongoose.connect("mongodb://127.0.0.1:27017",{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>console.log("connected")).catch((err)=>console.log("db not connected"))
    
}

module.exports=dbconnnect