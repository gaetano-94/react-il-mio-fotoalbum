const { validationResult } = require('express-validator');

const getAllCategorie = async (req, res) => {
  try {
    const categorie = await prisma.categoria.findMany();
    res.json(categorie);
  } catch (error) {
    res.status(500).json({ error: 'Fetching categories failed' });
  }
};

const getCategoriaById = async (req, res) => {
  const { id } = req.params;
  try {
    const categoria = await prisma.categoria.findUnique({
      where: { id: parseInt(id, 10) },
    });
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ error: 'Fetching category failed' });
  }
};

const createCategoria = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { nome } = req.body;

  try {
    const categoria = await prisma.categoria.create({ data: { nome } });
    res.status(201).json(categoria);
  } catch (error) {
    res.status(500).json({ error: 'Creating category failed' });
  }
};

const deleteCategoria = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.categoria.delete({ where: { id: parseInt(id, 10) } });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Deleting category failed' });
  }
};

module.exports = {
  getAllCategorie,
  getCategoriaById,
  createCategoria,
  deleteCategoria,
};
