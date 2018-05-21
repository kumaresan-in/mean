const express = require('express');

//App router
const router = express.Router();

const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
 
router.post('/register',(req,res,next)=>{
    res.send('register page');
});

router.get('/authenticate',(req,res,next)=>{
    res.send('authenticate page');
});

router.get('/profile',(req,res,next)=>{
    res.send('profile page');
});

module.exports = router;