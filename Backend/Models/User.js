const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,       
        maxLength: 50
    },
    password: {
        type: String,
        required: true        
    },
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["Admin", "User"],
        default: "User"
    }
}, { timestamps: true });


userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) return next();   
    this.password = await bcrypt.hash(this.password, 10); 
    next();
});


userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password, this.password);
};


userSchema.methods.generateAccessToken = function() {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            name: this.name
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY || "1h"
        }
    );
};

module.exports = mongoose.model("User", userSchema);
