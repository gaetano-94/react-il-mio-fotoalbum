import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [foto, setFoto] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:3000/api/foto');
      setFoto(result.data.filter((f) => f.visibile));
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {foto.map((f) => (
          <li key={f.id}>{f.titolo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
