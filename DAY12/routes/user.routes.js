const express = require('express');

const userController = require('../controller/user.controller');

const router =express.Router();

router.post("/registration", userController.registrationController);

router.post("/login", userController.loginController)


module.exports = router;