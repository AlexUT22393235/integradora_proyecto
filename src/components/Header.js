import React from 'react'

function Header() {
    return (
        <>
        <header className=' bg-sky-900 p-4 flex'> 
        <h1 className='text-2xl font-bold text-white mr-10'>SGE/UT</h1>
            <ul className='flex text-white'>
                <li className='mr-4'>Gestion de Estadias</li>
                <li className='mr-4'>Proyectos</li>
                <li className='mr-4'>Calendario</li>
                <li className='mr-4'>Documentos</li>
            </ul>
        </header>
        </>
    )
}

export default Header