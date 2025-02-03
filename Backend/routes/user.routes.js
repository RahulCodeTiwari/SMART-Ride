const express = require('express');
const router = express.Router();
const { body } = require("express-validator")
const userController = require('../controllers/user.controller');


router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage
    ('Fist name must be at least 3 characters long'),
    body('password').isLength({min: 4}).withMessage('Password must be at least 4 character long')
],
    userController.registerUser
)

router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min: 4}).withMessage('Password must be at least 4 charcter long')
],
    userController.loginUser
)

module.exports = router;