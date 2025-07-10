const mongoose = require('mongoose');

const userSchema =new mongoose.Schema({
    name:{
        type : String,
        required :true,
    },
     email:{
        type : String,
        required :true,
    },
     password:{
        type : String,
        required :true,
    },
    role:{
        type:String,
        enum : ["admin","customer"],
        default : "customer"
    }

});

const User = mongoose.model("users", userSchema)

module.exports = User;
