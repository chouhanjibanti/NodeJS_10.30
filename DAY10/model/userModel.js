const mongoose = require('mongoose');

const user = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
       email:{
        type:String,
        required:true,
    },
       password:{
        type:String,
        required:true,
    },

       image:{
        type:String,
        required:true,
    },
       mobile:{
        type:Number,
        required:true,
    },
       type:{
        type:Number,
        required:true,
    },
});

// we will create the model of the schema

const User =mongoose.model('user',user)
module.exports= User