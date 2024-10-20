require('dotenv').config();
const express=require('express');
const mongoose=require("mongoose");
const autoRoutes=require('./routes');

const app=express();
app.use('/api', [express.json(),autoRoutes])

// DB Connection
mongoose.connect(process.env.MONG_URI)
.then(()=>{
app.listen(process.env.PORT, ()=>{ 
    console.log("great connected to db listening on port 4000")
});
})
.catch((error)=>{
    console.log("Error ", error)
})


