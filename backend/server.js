const express = require("express");
const app = express()
const PORT =process.env.PORT || 5000;
const cors = require("cors") 
const connectDB=require("./config/db")
const dotenv = require("dotenv");
const userRoutes =require('./routes/userRoutes');
const { notFound, errorHandler } = require("./middlewares/errorMiddleWare");

dotenv.config();


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
connectDB();
app.use(express.json());

app.post("/signup",(req,res)=>{
    console.log(req.body);
    res.send("This is working")
}) 
app.post("/login",(req,res)=>{
    console.log(req.body);
    res.send("Login Working")
})
app.use('/users',userRoutes)
app.use(notFound)
app.use(errorHandler)
app.listen(PORT,console.log(`server Started on PORT ${PORT}`)) 