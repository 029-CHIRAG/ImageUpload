// import { ApiResponse } from "../../Utils/ApiResponse.js";
const ApiResponse=require('../../Utils/ApiResponse.js')
// import { ApiError } from "../../Utils/ApiError.js";
const ApiError=require('../../Utils/ApiError.js')
const User=require('../../Models/User.js');
require('dotenv').config()

exports.signUp=async(req,res)=>{
    try {
        const {name,email,password}=req.body;
         if (
        [name, email, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }
    const existedUser = await User.findOne({
        $or: [{ name }, { email }]
    })
     if (existedUser) {
        throw new ApiError(409, "User with email or username already exists")
    }
    const user=await User.create({
        name,
        email,
        password,
        role:"User"
    })
    const createdUser=await User.findById(user._id).select("-password");

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered Successfully")
    )

    } catch (error) {
        throw new ApiError(409,error.message);
    }
}

exports.logIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            throw new ApiError(400, "Email and password are required");
        }

        const user = await User.findOne({ email });
        if (!user) {
            throw new ApiError(404, "User does not exist");
        }

        const isPasswordValid = await user.isPasswordCorrect(password);
        if (!isPasswordValid) {
            throw new ApiError(401, "Invalid user credentials");
        }

        const accessToken = user.generateAccessToken();

        const options = {
            httpOnly: true,
            secure: true, // set to false on localhost if needed
        };

        const loggedinUser = await User.findById(user._id).select("-password");

        return res
            .status(200)
            .cookie("accessToken", accessToken, options)
            .json(
                new ApiResponse(200, {
                    user: loggedinUser
                }, "User Logged In Successfully.")
            );
    } catch (error) {
        console.error("Login error:", error.message);

        return res.status(error.statusCode || 500).json({
            success: false,
            message: error.message || "Login failed",
        });
    }
};
