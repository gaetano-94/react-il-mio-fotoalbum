const express = require('express');
const {
  getAllCategorie,
  getCategoriaById,
  createCategoria,
  deleteCategoria,
} = require('../controllers/categoriaController');
const { categoriaValidator } = require('../validators/categoriaValidators');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getAllCategorie);
router.get('/:id', authMiddleware, getCategoriaById);
router.post('/', authMiddleware, categoriaValidator, createCategoria);
router.delete('/:id', authMiddleware, deleteCategoria);

module.exports = router;
