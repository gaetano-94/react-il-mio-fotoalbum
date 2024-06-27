const { body } = require('express-validator');

const fotoValidator = [
  body('titolo')
    .isString()
    .isLength({ min: 1 })
    .withMessage('Title is required'),
  body('descrizione').isString().withMessage('Description is required'),
  body('immagine').isString().withMessage('Image URL is required'),
  body('visibile').isBoolean().withMessage('Visibility must be a boolean'),
  body('categorie').isArray().withMessage('Categories must be an array'),
];

module.exports = { fotoValidator };
