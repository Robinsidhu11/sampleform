const express=require('express')
const app=express()
const cors=require('cors')

app.use(cors())
const routes=require('./routes/routes')
app.use(express.json())
app.use("/api",routes)
app.listen(4000,()=>{
    console.log("port 4000 running")
})
const dbconnnect=require('./config/database')
dbconnnect()