const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

exports.protectRoute = asyncHandler(async(req,res,next)=>{
    let token;

    token=req.cookies.jwt;

    if(token){
        try{
            const decoded = jwt.verify(token,process.env.JWT_SECRET);

            req.user =await User.findById(decoded.userId).select('-password');
            next();
        }
        catch(error){
            res.status(401);
            throw new Error('not authorized, invalide token')
        }
    }
    else{
        res.status(401);
        throw new Error('not authorized, no token ')
    }
});

