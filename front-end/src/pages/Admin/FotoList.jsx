import React, { useEffect, useState } from 'react';
import { getAllFoto } from '../../api/fotoService';

const FotoList = () => {
  const [foto, setFoto] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllFoto();
      setFoto(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Lista Foto</h1>
      <ul>
        {foto.map((f) => (
          <li key={f.id}>{f.titolo}</li>
        ))}
      </ul>
    </div>
  );
};

export default FotoList;
