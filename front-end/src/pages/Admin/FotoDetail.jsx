import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const FotoDetail = () => {
  const { id } = useParams();
  const [foto, setFoto] = useState({
    titolo: '',
    descrizione: '',
    immagine: '',
    visibile: false,
    categorie: [],
  });

  useEffect(() => {
    const fetchFoto = async () => {
      const result = await axios.get(`http://localhost:3000/api/foto/${id}`);
      setFoto(result.data);
    };
    fetchFoto();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFoto({ ...foto, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/foto/${id}`, foto, {
        headers: { Authorization: localStorage.getItem('token') },
      });
      // Success handling
    } catch (error) {
      console.error('Update failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Dettaglio Foto</h1>
      <input
        type="text"
        name="titolo"
        value={foto.titolo}
        onChange={handleChange}
        placeholder="Titolo"
      />
      <textarea
        name="descrizione"
        value={foto.descrizione}
        onChange={handleChange}
        placeholder="Descrizione"
      ></textarea>
      <input
        type="text"
        name="immagine"
        value={foto.immagine}
        onChange={handleChange}
        placeholder="Immagine URL"
      />
      <label>
        Visibile:
        <input
          type="checkbox"
          name="visibile"
          checked={foto.visibile}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Salva</button>
    </form>
  );
};

export default FotoDetail;
