const express = require('express');
const {
  getAllFoto,
  getFotoById,
  createFoto,
  updateFoto,
  deleteFoto,
} = require('../controllers/fotoController');
const { fotoValidator } = require('../validators/fotoValidators');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getAllFoto);
router.get('/:id', authMiddleware, getFotoById);
router.post('/', authMiddleware, fotoValidator, createFoto);
router.put('/:id', authMiddleware, fotoValidator, updateFoto);
router.delete('/:id', authMiddleware, deleteFoto);

module.exports = router;
