import React from 'react'
import Header from '../components/Header'

function DashAsesor() {
    return (
        //comando para instalar los iconos
        //npm i react-icons
        <>
            <Header ></Header>
            <div className='border'>
            <h1 className='text-4xl p-4'>Calendario</h1>

            </div>

            <div className='mr-4 p-4 flex'>

                 {/* Card "Mis tareas" */}
      <div className="max-w-sm rounded overflow-hidden shadow-md bg-gray-100 m-10">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-indigo-700">Mis tareas</div>
          <p className="text-gray-700 text-base mb-4">Fecha de entrega: 27/06/24</p>
          <div className="mb-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox h-5 w-5" />
              <span className="text-gray-700">Corrección de objetivo principal</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox h-5 w-5" />
              <span className="text-gray-700">Corrección de título</span>
            </label>
          </div>
        </div>
      </div>

                  {/* Sección del calendario */}
       {/* Calendario */}
       <div className="bg-white rounded-lg shadow-md p-6 m-6 w-full max-w-4xl">
        <div className="flex justify-between items-center mb-4">
          <button className="text-sm bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Anterior
          </button>
          <h2 className="text-xl font-bold text-gray-700">Junio</h2>
          <button className="text-sm bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded">
            Siguiente
          </button>
        </div>

        <div className="grid grid-cols-7 gap-4 text-center">
          {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(dia => (
            <div key={dia} className="font-medium text-gray-700">{dia}</div>
          ))}
          {/* Generación de los días del calendario */}
          {/* Ejemplo de un día con una marca */}
          <div className="col-start-1">1</div>
          {/* ... otros días ... */}
          <div className="col-start-4 bg-blue-300 rounded-full text-white">27</div>
          {/* ... otros días ... */}
        </div>
      </div>

            </div>
        </>
    )
}

export default DashAsesor