import axios from 'axios';

const API_URL = 'http://localhost:3000/api/categorie';

const getAllCategorie = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const createCategoria = async (categoriaData) => {
  const token = localStorage.getItem('token');
  const response = await axios.post(API_URL, categoriaData, {
    headers: { Authorization: token },
  });
  return response.data;
};

const deleteCategoria = async (id) => {
  const token = localStorage.getItem('token');
  const response = await axios.delete(`${API_URL}/${id}`, {
    headers: { Authorization: token },
  });
  return response.data;
};

export { getAllCategorie, createCategoria, deleteCategoria };
