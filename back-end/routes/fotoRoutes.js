const express = require('express');
const {
  getAllFoto,
  getFotoById,
  createFoto,
  updateFoto,
  deleteFoto,
} = require('../controllers/fotoController');
const { fotoValidator } = require('../validators/fotoValidators');
//const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', getAllFoto);
router.get('/:id', getFotoById);
router.post('/', fotoValidator, createFoto);
router.put('/:id', fotoValidator, updateFoto);
router.delete('/:id', deleteFoto);

module.exports = router;
