require('dotenv').config();
const express=require('express');
const mongoose=require("mongoose");
const autoRoutes=require('./routes');
const cors = require('cors');

const app=express();
app.use(cors());
app.use('/api', [express.json(),autoRoutes]);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://autodealerclient.vercel.app');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});


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


