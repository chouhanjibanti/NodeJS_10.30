// const User= require('../model/userModel');

// //  password hashing
// const bcryptjs = require('bcryptjs');

// // logic for hashing
// const securePassword = async (password)=>{
//     try {
//         const passwordHash = await bcryptjs.hash(password ,10)
//         return passwordHash;
//     } catch (error) {
//         console.log("error",error);
//     }
// }

// const registerUser = async (req,res)=>{
//     try {
//         // for  securing password
//     const spassword = await securePassword(req.body.password)

//     const user = new User({
//         name :req.body.name,
//         email :req.body.email,
//         password : spassword,
//          mobile :req.body.mobile,
//          image :req.file.filename,
//          type : req.body.type,
//     })

//     // check email is exist  or not
//       const userData = User.findOne({email :req.body.email})
//       if(userData){
//         res.status(200).send({success : false , message :"user already exist"});
//       }else{
//          const user_data= await user.save();
//          res.status(200).send({success:true , data:user_data})
//       }

//     } catch (error) {
//          res.status(400).send(error.message) // check on the api
//     }
// }

// module.exports = {
//     registerUser,
// }

// =======================================

const User = require("../model/userModel");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

// Function to hash password
const securePassword = async (password) => {
  try {
    const passwordHash = await bcryptjs.hash(password, 10);
    return passwordHash;
  } catch (error) {
    console.log("error", error);
  }
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password, mobile, type } = req.body;

    // Check if user already exists
    const userData = await User.findOne({ email: email });
    if (userData) {
      return res
        .status(200)
        .send({ success: false, message: "User already exists" });
    }

    // Hash the password
    const spassword = await securePassword(password);

    // Create new user
    const user = new User({
      name,
      email,
      password: spassword,
      mobile,
      image: req.file.filename,
      type,
    });

    const savedUser = await user.save();
    res.status(200).send({ success: true, data: savedUser });
  } catch (error) {
    res.status(400).send({ success: false, message: error.message });
  }
};

const create_token = async (id) => {
  try {
    const token = await jwt.sign({ _id: id }, config.secret_jwt);
    return token;
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// login method

const user_login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const userData = await User.findOne({ email: email });
    if (userData) {
      const passwordMatch = await bcryptjs.compare(password, userData.password);
      if (passwordMatch) {
        const tokenData = await create_token(userData.id);

        const useResult = {
          _id: userData._id,
          name: userData.name,
          email: userData.email,
          password: userData.password,
          image: userData.image,
          mobile: userData.mobile,
          type: userData.type,
          token: tokenData,
        };

        const response = {
          success: true,
          msg: "user details",
          data: useResult,
        };
        res.status(200).send(response);
      } else {
        res
          .status(200)
          .send({ success: false, msg: "login details are incorrect.." });
      }
    } else {
      res
        .status(200)
        .send({ success: false, msg: "login details are incorrect.." });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  registerUser,
  user_login
};
