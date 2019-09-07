const keys = require('../config/keys');
const jwt = require('jsonwebtoken');


exports.loginRequired = function(req,res,next)
{
    try{
        const token = req.header.authorization.split(' ')[1];
        jwt.verify(token,keys.SECRET_KEY, function(err,decoded){
            if(decoded){
                return next();
            }else{
                return next({
                    status:401,
                    message:"Please login first"
                });
            }
        })
    }
    catch(err){
        return next({
            status:401,
            message:"please login first"
        })
    }
}


exports.ensureCorrectUser = function(req,res,next){
    try{
        const token = req.header.authorization.split(' ')[1];
        jwt.verify(token,keys.SECRET_KEY, function(err, decoded){
            if(decoded && decoded.id === req.params.id){
                return next();
            }else{
                return next({status:401,message: "Unauthorized"})
            }
        })
    }catch(err){
        return next({status:401, message:"Unauthorized"})
    }
}