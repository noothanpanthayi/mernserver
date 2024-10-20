require('dotenv').config();
const express=require('express');
const mongoose=require("mongoose");
const autoRoutes=require('./routes');
const cors = require('cors');

const app=express();
app.use(cors());
app.use(express.json());

// const corsOptions={
//     origin:"https://mernserver-wheat.vercel.app",
//     optionsSuccessStatus:200
// }
// app.use(cors(corsOptions))

// DB Connection
mongoose.connect(process.env.MONG_URI)
.then(()=>{
const PORT=process.env.PORT||8080
app.listen(PORT, ()=>{ 
    console.log("great connected to db listening on port 4000")
});
})
.catch((error)=>{
    console.log("Error ", error)
})


