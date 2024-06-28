import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const FotoDetail = () => {
  const { id } = useParams();
  const [foto, setFoto] = useState(null);
  const [titolo, setTitolo] = useState('');

  useEffect(() => {
    const fetchFoto = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/foto/${id}`
        );
        setFoto(response.data);
        setTitolo(response.data.titolo);
      } catch (error) {
        console.error('Errore nel recuperare la foto:', error);
      }
    };
    fetchFoto();
  }, [id]);

  const handleUpdateFoto = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/foto/${id}`, { titolo });
      // Redirect or show success message
    } catch (error) {
      console.error("Errore nell'aggiornamento della foto:", error);
    }
  };

  if (!foto) return <div className="loading">Caricamento...</div>;

  return (
    <div className="fotoDetail">
      <h1>Dettagli Foto</h1>
      <form onSubmit={handleUpdateFoto}>
        <input
          type="text"
          value={titolo}
          onChange={(e) => setTitolo(e.target.value)}
          placeholder="Titolo"
          required
        />
        <button type="submit">Aggiorna Foto</button>
      </form>
    </div>
  );
};

export default FotoDetail;
