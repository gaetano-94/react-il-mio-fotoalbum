import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CategoriaDetail = () => {
  const { id } = useParams();
  const [categoria, setCategoria] = useState(null);
  const [nome, setNome] = useState('');

  useEffect(() => {
    const fetchCategoria = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/categorie/${id}`
        );
        setCategoria(response.data);
        setNome(response.data.nome);
      } catch (error) {
        console.error('Errore nel recuperare la categoria:', error);
      }
    };
    fetchCategoria();
  }, [id]);

  const handleUpdateCategoria = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/categorie/${id}`, { nome });
      // Redirect or show success message
    } catch (error) {
      console.error("Errore nell'aggiornamento della categoria:", error);
    }
  };

  if (!categoria) return <div>Caricamento...</div>;

  return (
    <div>
      <h1>Dettagli Categoria</h1>
      <form onSubmit={handleUpdateCategoria}>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
          required
        />
        <button type="submit">Aggiorna Categoria</button>
      </form>
    </div>
  );
};

export default CategoriaDetail;
