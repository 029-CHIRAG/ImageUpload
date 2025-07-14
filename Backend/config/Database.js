const mongoose=require("mongoose");
require('dotenv').config();

const DBCONNECT=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>console.log("DataBase Connected SuccessFully."))
    .catch((error)=>{
        console.log("Database Connection Failed");
        process.exit(1);
    })
}

module.exports= DBCONNECT;