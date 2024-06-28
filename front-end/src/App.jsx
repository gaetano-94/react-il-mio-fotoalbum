import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Public/Home';
import Login from './components/Auth';
import FotoList from './pages/Admin/FotoList';
import FotoDetail from './pages/Admin/FotoDetail';
import CategoriaList from './pages/Admin/CategoriaList';
import CategoriaDetail from './pages/Admin/CategoriaDetail';
import ContactForm from './pages/Public/ContactForm';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/foto" element={<FotoList />} />
        <Route path="/admin/foto/:id" element={<FotoDetail />} />
        <Route path="/admin/categorie" element={<CategoriaList />} />
        <Route path="/admin/categorie/:id" element={<CategoriaDetail />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </Router>
  );
};

export default App;
