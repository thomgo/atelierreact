import './App.css';

import Header from './layout/Header';
import Footer from './layout/Footer';

import { Routes, Route, Link } from "react-router-dom";

import Nav from './layout/Nav';

import Countclic from "./components/countclic/Countclic";
import Atelierapi from './components/atelierapi/Atelierapi';
import Colorselector from './components/colorselector/Colorselector';

// Fonction représentative de l'ensemble de l'application
function App() {

  // Dans le JSX on met l'ensemble des routes autorisées sur l'application
  // Chaque route correspond à un chemin (url) et renvoie sur un composant
  // C'est donc le composant au coeur de notre template qui change
  return (
    <div>
     <Header />
     <Nav/>
     <main className="container my-5">
      <Routes>
        <Route path="/" element={<Countclic />} />
        <Route path="/home" element={<Countclic />} />
        <Route path="/atelierapi" element={<Atelierapi />} />
        <Route path="/colorselector" element={<Colorselector />} />
      </Routes>
     </main>
     <Footer />
    </div>
  );
}

export default App;
