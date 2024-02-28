import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-blue-950">
      <div className="flex items-center space-x-8">
        <Link to='/'>
        <img
          src="/logo.png"  
          alt="Logo"
          className="w-auto mr-20 h-9 max-w-32" 
        />
        </Link>

        <div className="italic font-thin space-x-9">
          <Link to='Control'>
          <button className="text-white">Proyectos</button>
          </Link>
          <button className="text-white">Asesores</button>
          <button className="text-white">Docentes</button>
          <button className="text-white">Documentos</button>
          <Link to='Tabla'>
          <button className="text-white">Alumnos</button>
          </Link>
          <button className="text-white">Roles</button>
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