import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CategoriaList = () => {
  const [categorie, setCategorie] = useState([]);

  useEffect(() => {
    const fetchCategorie = async () => {
      const result = await axios.get('http://localhost:3000/api/categorie');
      setCategorie(result.data);
    };
    fetchCategorie();
  }, []);

  return (
    <div>
      <h1>Lista Categorie</h1>
      <ul>
        {categorie.map((c) => (
          <li key={c.id}>{c.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriaList;
