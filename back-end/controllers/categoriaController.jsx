const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllCategorie = async (req, res) => {
  const categorie = await prisma.categoria.findMany();
  res.json(categorie);
};

exports.createCategoria = async (req, res) => {
  const { nome } = req.body;
  const nuovaCategoria = await prisma.categoria.create({
    data: { nome },
  });
  res.json(nuovaCategoria);
};

exports.deleteCategoria = async (req, res) => {
  const { id } = req.params;
  await prisma.categoria.delete({
    where: { id: Number(id) },
  });
  res.json({ message: 'Categoria eliminata con successo' });
};
