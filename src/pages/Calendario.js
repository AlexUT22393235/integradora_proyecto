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
      <div className="max-w-sm rounded overflow-hidden shadow-md  m-10">
        <div className="px-6 py-4">
          <div className="font-normal text-2xl mb-2 text-indigo-700">Mis tareas</div>
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
<div className="bg-white rounded-xl shadow-md p-8 m-8 w-full max-w-6xl">
  <div className="flex justify-between items-center mb-4">
  <div>
    <h1 className="text-2xl font-normal text-blue-950">Calendario</h1>
</div>

<div>
    <h1 className="text-2xl font-normal text-blue-950">Junio</h1>
</div>
  </div>

  <div className="grid grid-cols-7 text-center">
    {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(dia => (
      <div key={dia} className="font-medium text-gray-700 border border-gray-200 p-4">{dia}</div>
    ))}
    {/* Generación de los días del calendario */}
    {[...Array(6)].map((_, rowIndex) => (
      [...Array(7)].map((_, colIndex) => {
        const dayOfMonth = rowIndex * 7 + colIndex + 1;
        const dayToShow = dayOfMonth <= 30 ? dayOfMonth : dayOfMonth - 30;
        return (
          <div key={`${rowIndex}-${colIndex}`} className="border border-gray-200 p-4">
            {/* Renderizar solo si el día está dentro del mes */}
            {dayToShow}
          </div>
        );
      })
    ))}
  </div>
  <div className="flex justify-between items-center mb-4">
  <div>
    <h1 className="text-sm font-normal text-blue-950">Anterior</h1>
</div>

<div>
    <h1 className="text-sm font-normal text-blue-950">Siguiente</h1>
</div>
  </div>
</div>





            </div>
        </>
    )
}

export default DashAsesor