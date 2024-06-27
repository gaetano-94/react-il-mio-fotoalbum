const { body } = require('express-validator');

const registerValidator = [
  body('username')
    .isString()
    .isLength({ min: 3 })
    .withMessage('Username must be at least 3 characters long'),
  body('password')
    .isString()
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
];

const loginValidator = [
  body('username').isString().withMessage('Username is required'),
  body('password').isString().withMessage('Password is required'),
];

module.exports = { registerValidator, loginValidator };
