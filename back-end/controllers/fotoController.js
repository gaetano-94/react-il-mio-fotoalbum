const { validationResult } = require('express-validator');

const getAllFoto = async (req, res) => {
  try {
    const foto = await prisma.foto.findMany();
    res.json(foto);
  } catch (error) {
    res.status(500).json({ error: 'Fetching photos failed' });
  }
};

const getFotoById = async (req, res) => {
  const { id } = req.params;
  try {
    const foto = await prisma.foto.findUnique({
      where: { id: parseInt(id, 10) },
    });
    res.json(foto);
  } catch (error) {
    res.status(500).json({ error: 'Fetching photo failed' });
  }
};

const createFoto = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { titolo, descrizione, immagine, visibile, categorie } = req.body;

  try {
    const foto = await prisma.foto.create({
      data: {
        titolo,
        descrizione,
        immagine,
        visibile,
        categorie: { connect: categorie.map((id) => ({ id })) },
      },
    });
    res.status(201).json(foto);
  } catch (error) {
    res.status(500).json({ error: 'Creating photo failed' });
  }
};

const updateFoto = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { id } = req.params;
  const { titolo, descrizione, immagine, visibile, categorie } = req.body;

  try {
    const foto = await prisma.foto.update({
      where: { id: parseInt(id, 10) },
      data: {
        titolo,
        descrizione,
        immagine,
        visibile,
        categorie: { set: categorie.map((id) => ({ id })) },
      },
    });
    res.json(foto);
  } catch (error) {
    res.status(500).json({ error: 'Updating photo failed' });
  }
};

const deleteFoto = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.foto.delete({ where: { id: parseInt(id, 10) } });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Deleting photo failed' });
  }
};

module.exports = {
  getAllFoto,
  getFotoById,
  createFoto,
  updateFoto,
  deleteFoto,
};
