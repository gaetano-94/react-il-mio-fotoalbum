import axios from 'axios';

const API_URL = 'http://localhost:3000/api/foto';

const getAllFoto = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const createFoto = async (fotoData) => {
  const token = localStorage.getItem('token');
  const response = await axios.post(API_URL, fotoData, {
    headers: { Authorization: token },
  });
  return response.data;
};

// Aggiungi altri metodi (update, delete, ecc.)

export { getAllFoto, createFoto };
