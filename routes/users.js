const express = require('express');

//App router
const router = express.Router();


        
router.get('/register',(req,res,next)=>{
    res.send('register page');
});

router.get('/authenticate',(req,res,next)=>{
    res.send('authenticate page');
});

router.get('/profile',(req,res,next)=>{
    res.send('profile page');
});

router.get('/validate',(req,res,next)=>{
    res.send('validate page');
});



module.exports = router;