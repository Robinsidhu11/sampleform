const express=require('express')
const routes=express.Router()
const {handleForm}=require('../controllers/handleform')
routes.post("/fillform",handleForm)
module.exports=routes