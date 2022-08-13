const express = require("express");
const app = express()
const PORT =process.env.PORT || 5000;
const cors = require("cors") 
const connectDB=require("./config/db")
const dotenv = require("dotenv");

dotenv.config();


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
connectDB();

app.post("/signup",(req,res)=>{
    console.log(req.body);
    res.send("This is working")
})
app.post("/login",(req,res)=>{
    console.log(req.body);
    res.send("Login Working")
})

app.listen(PORT,console.log(`server Started on PORT ${PORT}`)) 