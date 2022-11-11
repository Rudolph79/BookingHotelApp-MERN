import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
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
  )
}

export default Navbar;
