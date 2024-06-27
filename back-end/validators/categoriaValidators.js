const { body } = require('express-validator');

const categoriaValidator = [
  body('nome')
    .isString()
    .isLength({ min: 1 })
    .withMessage('Category name is required'),
];

module.exports = { categoriaValidator };
