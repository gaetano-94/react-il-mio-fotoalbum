import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/admin/foto" exact component={FotoList} />
        <Route path="/admin/foto/:id" component={FotoDetail} />
        <Route path="/admin/categorie" exact component={CategoriaList} />
        <Route path="/admin/categorie/:id" component={CategoriaDetail} />
        <Route path="/contact" component={ContactForm} />
        {/* Aggiungi altre rotte qui se necessario */}
      </Switch>
    </Router>
  );
};

export default App;
