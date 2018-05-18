const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const config = require('../database/config');

//user models

const   UserSchema = mongoose.Schema({

   name:{
       type:string
   },
   email:{
       type:string,
       required:true
   },
   username:{
       type:string,
       required:true
   },
   password:{
        type:string,
        required:true
   }

});