const express = require('express');
const router = express.Router();
const {
  getAllFoto,
  getFotoById,
  createFoto,
  updateFoto,
  deleteFoto,
} = require('../controllers/fotoController');
const authenticateToken = require('../middlewares/authMiddleware');

router.get('/', getAllFoto);
router.get('/:id', getFotoById);
router.post('/', authenticateToken, createFoto);
router.put('/:id', authenticateToken, updateFoto);
router.delete('/:id', authenticateToken, deleteFoto);

module.exports = router;
