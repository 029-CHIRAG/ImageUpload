const jwt=require('jsonwebtoken');
const User=require('../Models/User.js');
require('dotenv').config();
const ApiError=require('../Utils/ApiError.js');
const verifyJwt=async(req,res,next)=>{
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        console.log(token);
         if (!token) {
            throw new ApiError(401, "Unauthorized request")
        }
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        const user=await User.findById(decodedToken?._id).select("-password");
        if(!user){
                        throw new ApiError(401, "Invalid Access Token")
        }
        req.user=user;
        next();



        
    } catch (error) {
                throw new ApiError(401, error?.message || "Invalid access token")

    }
}

module.exports=verifyJwt;