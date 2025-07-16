const express=require("express");
require('dotenv').config();

const app=express();

const PORT=process.env.PORT||4000;

app.use(express.json());


//Routes Mounting

const UserRouter=require('./Routes/User.router.js');
const PostRouter=require('./Routes/Post.router.js');
app.use('/api/v1',UserRouter);
app.use('/api/v1',PostRouter);



app.listen(PORT,()=>{
    console.log(`Server is up at PORT ${PORT}`)
});

const DBCONNECT=require('./config/Database.js');
DBCONNECT();


