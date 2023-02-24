
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Accueil from './composents/Accueil';
import Boutique from './composents/Boutique';
import Footer from './composents/Footer';
import Header from './composents/Header';
import Panier from './composents/Panier';
import products from './products.json'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Accueil />}></Route>
        <Route path='/Boutique' element={<Boutique products={products} />}></Route>
        <Route path='/Panier' element={<Panier />}></Route>
        {/* path='*' fonctionne si jamais l'url ne correspond à rien de déclaré au dessus, ramène à l'accueil */}
        <Route path='*' element={<Accueil />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
