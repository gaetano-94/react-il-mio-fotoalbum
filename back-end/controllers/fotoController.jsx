const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllFoto = async (req, res) => {
  const foto = await prisma.foto.findMany();
  res.json(foto);
};

exports.getFotoById = async (req, res) => {
  const { id } = req.params;
  const foto = await prisma.foto.findUnique({
    where: { id: Number(id) },
  });
  res.json(foto);
};

exports.createFoto = async (req, res) => {
  const { titolo, descrizione, immagine, visibile, categorie } = req.body;
  const nuovaFoto = await prisma.foto.create({
    data: {
      titolo,
      descrizione,
      immagine,
      visibile,
      categorie: {
        create: categorie.map((cat) => ({ categoriaId: cat })),
      },
    },
  });
  res.json(nuovaFoto);
};

exports.updateFoto = async (req, res) => {
  const { id } = req.params;
  const { titolo, descrizione, immagine, visibile, categorie } = req.body;
  const foto = await prisma.foto.update({
    where: { id: Number(id) },
    data: {
      titolo,
      descrizione,
      immagine,
      visibile,
      categorie: {
        deleteMany: {},
        create: categorie.map((cat) => ({ categoriaId: cat })),
      },
    },
  });
  res.json(foto);
};

exports.deleteFoto = async (req, res) => {
  const { id } = req.params;
  await prisma.foto.delete({
    where: { id: Number(id) },
  });
  res.json({ message: 'Foto eliminata con successo' });
};
