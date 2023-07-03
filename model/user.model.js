// Model Class

const mongoose = require('mongoose');

const userSchema =  new mongoose.Schema({
    name:{
      type:String,
      required:true
    },
    userId:{
        type:String,
        required : true,
        unique :true
    },
    password:{
        type: String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        minLength:10,
        lowercase:true
    },
    userType:{
        type:String,
        required:true,
        default:"Customer",
        enum:["Customer","Admin"]
    }
},{timestamps : true});

mongoose.model("users_info",userSchema);