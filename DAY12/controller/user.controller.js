// logic // register // login

const User = require("../models/user.model");
const bcryptjs = require("bcryptjs");
const secretKey = require("../config/authConfig");
const jwt = require("jsonwebtoken");

export const registrationController = async (req, res) => {
  try {
    let { name, email, password } = req.body;

    let existUser = await User.findOne({ email: email });
    if (existUser) {
      return res
        .status(200)
        .send({ message: "user Already present please login" });
    }

    let hashPassword = await bcryptjs.hash(password, 10);

    let user = new User({
      name,
      email,
      password: hashPassword,
    });
    user = await user.save();
    res.status(201).send({
      message: "user Signup Successfully",
      user,
    });
  } catch (error) {
    console.log(error.message);
    res.send(500).send({
      message: "user Signup Error",
      error: error.message,
    });
  }
};

// Login user

export const loginController = async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = User.findOne({ email: email }); // raja @123 // 1 // admin
    if (!user) {
      res.send(404).send({ message: "user not exist" });
    }
    let matchPassword = await bcryptjs.compare(password, user.password);
    if (!matchPassword) {
      res.send(400).send({ message: "password not matched .." });
    }
    let payload = {
      id: user.id,
      email: user.email,
      role: user.role,
    };
    let token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
    res.status(200).send({
      message: "user Login Successfully",
      user,
      token,
    });
  } catch (error) {
    console.log(error.message);
    res.send(500).send({
      message: "user login Error",
      error: error.message,
    });
  }
};
