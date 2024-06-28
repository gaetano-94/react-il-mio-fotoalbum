import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CategoriaDetail = () => {
  const { id } = useParams();
  const [categoria, setCategoria] = useState({ nome: '' });

  useEffect(() => {
    const fetchCategoria = async () => {
      const result = await axios.get(
        `http://localhost:3000/api/categorie/${id}`
      );
      setCategoria(result.data);
    };
    fetchCategoria();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategoria({ ...categoria, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/categorie/${id}`, categoria, {
        headers: { Authorization: localStorage.getItem('token') },
      });
      // Success handling
    } catch (error) {
      console.error('Update failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Dettaglio Categoria</h1>
      <input
        type="text"
        name="nome"
        value={categoria.nome}
        onChange={handleChange}
        placeholder="Nome Categoria"
      />
      <button type="submit">Salva</button>
    </form>
  );
};

export default CategoriaDetail;
