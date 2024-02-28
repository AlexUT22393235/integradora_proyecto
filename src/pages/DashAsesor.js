import React from 'react'
import Header from '../components/Header'

function DashAsesor() {
    return (
        //comando para instalar los iconos
        //npm i react-icons
        <>
            <Header ></Header>
            <div className='border'>
            <h1 className='text-4xl p-4'>Sistema de Gestión de Estadías</h1>

            </div>

            <div className='mr-4 p-4 flex'>

                <div class="max-w-sm rounded overflow-hidden shadow-md bg-gray-100 mr-10 ">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-indigo-700">Estudiantes Asesorados</div>
                        <p class="text-gray-700 text-base">Todos los Estudiantes asesorados
                        </p>
                    </div>
                </div>

                <div class="max-w-sm rounded overflow-hidden shadow-md bg-gray-100 mr-10">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-indigo-700">Proyectos</div>
                        <p class="text-gray-700 text-base">Todos los proyectos asesorados
                        </p>
                    </div>
                </div>

                <div class="max-w-sm rounded overflow-hidden shadow-md bg-gray-100 mr-10">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-indigo-700">Calendario</div>
                        <p class="text-gray-700 text-base">Revisa tus citas y reuniones
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default DashAsesor