const express=require('express');
const User=require('../Models/User.js');
const router=express.Router();

const {signUp,logIn}=require('../Controllers/User/Auth.js');

router.post('/login',logIn);
router.post('/signup',signUp);


module.exports=router;
