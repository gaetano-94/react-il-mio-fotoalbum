import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/admin/foto">Admin Foto</Link>
      <Link to="/admin/categorie">Admin Categorie</Link>
    </nav>
  );
};

export default Navbar;
