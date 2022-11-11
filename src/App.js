import Login from "./auth/Login";
import Home from "./booking/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from "./auth/Register";
import Navbar from "./components/Navbar";

/* const TopNav = () => {
  <div className="nav bg-light d-flex justify-content-between">
    <Link className="nav-link" to='/'>
      Accueil
    </Link>
    <Link className="nav-link" to='/connexion'>
      Se connecter
    </Link>
    <Link className="nav-link" to='/inscription'>
      S'inscrire
    </Link>
  </div>
};*/

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connexion" element={<Login />} />
        <Route path='/inscription' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
