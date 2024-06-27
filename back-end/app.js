const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const fotoRoutes = require('./routes/fotoRoutes');
const categoriaRoutes = require('./routes/categoriaRoutes');
const app = express();

require('dotenv').config();
const { PORT } = process.env;
const port = PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/foto', fotoRoutes);
app.use('/api/categorie', categoriaRoutes);

app.listen(port, () => {
  console.log(`Server attivo su http://localhost:${port}`);
});
