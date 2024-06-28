import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FotoList = () => {
  const [foto, setFoto] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:3000/api/foto');
      setFoto(result.data);
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
