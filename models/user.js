const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const config = require('../config/database');

//user models

const UserSchema = mongoose.Schema({

   name:{
       type:String
   },
   email:{               
       type:String,
       required:true
   },
   username:{
       type:String,
       required:true
   },
   password:{
        type:String,
        required:true
   }

});

const User = module.exports = mongoose.model('User',UserSchema);

module.exports.getUserById = function(id, callback){
    User.findById(id,callback);
}
module.exports.getUserByUsername = function(username, callback){
    const query = {username:username};
    User.findone(username,callback);
}
