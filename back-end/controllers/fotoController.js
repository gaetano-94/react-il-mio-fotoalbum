const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllFoto = async (req, res) => {
  try {
    const foto = await prisma.foto.findMany();
    res.json(foto);
  } catch (error) {
    res.status(500).json({ error: 'Errore durante il recupero delle foto' });
  }
};

const getFotoById = async (req, res) => {
  const { id } = req.params;
  try {
    const foto = await prisma.foto.findUnique({ where: { id: parseInt(id) } });
    if (!foto) return res.status(404).json({ error: 'Foto non trovata' });
    res.json(foto);
  } catch (error) {
    res.status(500).json({ error: 'Errore durante il recupero della foto' });
  }
};

const createFoto = async (req, res) => {
  const { titolo, descrizione, immagine, visibile, categorie } = req.body;
  try {
    const foto = await prisma.foto.create({
      data: { titolo, descrizione, immagine, visibile, categorie },
    });
    res.json(foto);
  } catch (error) {
    res.status(500).json({ error: 'Errore durante la creazione della foto' });
  }
};

const updateFoto = async (req, res) => {
  const { id } = req.params;
  const { titolo, descrizione, immagine, visibile, categorie } = req.body;
  try {
    const foto = await prisma.foto.update({
      where: { id: parseInt(id) },
      data: { titolo, descrizione, immagine, visibile, categorie },
    });
    res.json(foto);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Errore durante l'aggiornamento della foto" });
  }
};

const deleteFoto = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.foto.delete({ where: { id: parseInt(id) } });
    res.json({ message: 'Foto cancellata con successo' });
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Errore durante la cancellazione della foto' });
  }
};

module.exports = {
  getAllFoto,
  getFotoById,
  createFoto,
  updateFoto,
  deleteFoto,
};
