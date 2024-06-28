import React, { useState, useEffect } from 'react';
import {
  getAllCategorie,
  createCategoria,
  deleteCategoria,
} from '../../api/categoriaService';

const CategoriaList = () => {
  const [categorie, setCategorie] = useState([]);
  const [nome, setNome] = useState('');

  useEffect(() => {
    fetchCategorie();
  }, []);

  const fetchCategorie = async () => {
    try {
      const data = await getAllCategorie();
      setCategorie(data);
    } catch (error) {
      console.error('Errore nel recuperare le categorie:', error);
    }
  };

  const handleCreateCategoria = async (e) => {
    e.preventDefault();
    try {
      await createCategoria({ nome });
      setNome('');
      fetchCategorie();
    } catch (error) {
      console.error('Errore nella creazione della categoria:', error);
    }
  };

  const handleDeleteCategoria = async (id) => {
    try {
      await deleteCategoria(id);
      fetchCategorie();
    } catch (error) {
      console.error('Errore nella cancellazione della categoria:', error);
    }
  };

  return (
    <div>
      <h1>Lista Categorie</h1>
      <form onSubmit={handleCreateCategoria}>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome Categoria"
          required
        />
        <button type="submit">Aggiungi Categoria</button>
      </form>
      <ul>
        {categorie.map((categoria) => (
          <li key={categoria.id}>
            {categoria.nome}
            <button onClick={() => handleDeleteCategoria(categoria.id)}>
              Cancella
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriaList;
