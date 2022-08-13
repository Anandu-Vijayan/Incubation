const mongoose = require('mongoose')

const connectDB= async ()=>{

    const url=process.env.MONGO_URI
    console.log(url);
    try {
        const conn= await mongoose.connect(url,{
            // useUnifiedTopology:true,
            // useNewUrlParser:true,
            // useCreateIndex:true,
        })
        console.log(`MongoDB Connected:${conn.connection.host}`);
    } catch (error) {
        console.error(`Error:${error.message}`);
        process.exit()

        
    }
}
module.exports = connectDB;