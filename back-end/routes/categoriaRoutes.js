const express = require('express');
const router = express.Router();
const {
  getAllCategorie,
  createCategoria,
  deleteCategoria,
} = require('../controllers/categoriaController');
const authenticateToken = require('../middlewares/authMiddleware');

router.get('/', getAllCategorie);
router.post('/', authenticateToken, createCategoria);
router.delete('/:id', authenticateToken, deleteCategoria);

module.exports = router;
