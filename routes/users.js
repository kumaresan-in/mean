const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
 

router.post('/register',(req, res, next)=>{
    //res.send('register page');
    let newUser = new User({
            name:req.body.name,
            email:req.body.email,
            username:req.body.username,
            password:req.body.password
    });
});
User.addUser(newUser,(err,user)=>{
    if(err){
        res.json({success:false,mgs:'failed to register user'});
    }
    else{
        res.json({success:true,mgs:'user registerd'});
    }
})

router.get('/authenticate',(req,res,next)=>{
    res.send('authenticate page');
});

router.get('/profile',(req,res,next)=>{
    res.send('profile page');
});

module.exports = router;