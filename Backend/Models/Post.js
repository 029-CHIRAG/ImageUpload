const mongoose=require('mongoose');

const postSchema=new mongoose.Schema({
    Url:{
        type:String,
        required:true,
    },
    CreatedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    UploadedAt:{
        type:Date,
        default:Date.now()
    }
},{timestamp:true})


module.exports=mongoose.model("Post",postSchema);