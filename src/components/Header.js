import React from 'react';
import { Link } from 'react-router-dom';
import DashAsesor from '../pages/DashAsesor';

const Header = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-blue-950">
      <div className="flex items-center space-x-8">
        <Link to='/DashAsesor'>
        <img
          src="/logo.png"  
          alt="Logo"
          className="w-auto mr-20 h-9 max-w-32" 
        />
        </Link>

        <div className="italic font-thin space-x-9">
          <Link to='/DonacionLibro'>
          <button className="text-white">Donacion Libro</button>

          </Link>

          <Link to='/Calendario'>
          <button className="text-white">Calendario</button>

          </Link>
          
        </div>
      </div>

      <div className="flex items-center">
        <input
          type="text"
          placeholder="Buscar..."
          className="p-2 mr-4 bg-white rounded-md"
        />
      </div>
    </nav>
  );
};

export default Header;