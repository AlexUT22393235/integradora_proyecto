import React from 'react';
import Header from '../components/Header';

function DonacioLibro() {
    return (
        <>
            <Header />
            <h1 className="mb-6 text-2xl font-bold text-gray-700">Donación de Libros</h1>
                    <hr className="mb-6 border-gray-400" />
            <div className="flex min-h-screen">
                <div className="flex-grow p-8 bg-white ">

                    <div className="mb-4" >
                        <div className="relative mb-4">
                            <label htmlFor="title" className="block mb-2 text-sm font-bold text-gray-700">
                                Título del Libro
                            </label>
                            <div className="border-2 rounded-lg border-sky-900">
                                <input
                                    id="title"
                                    type="text"
                                    placeholder="Don Quijote de la mancha"
                                    className="w-full px-4 py-2 text-gray-700 bg-transparent rounded-lg focus:outline-none"
                                />
                            </div>
                        </div>
                        <label htmlFor="payment-doc" className="block mb-2 text-sm font-bold text-gray-700">
                            Documento de pago
                        </label>
                        <input
                            id="payment-doc"
                            type="text"
                            placeholder="Documento de pago"
                            className="w-full px-4 py-2 text-gray-700 bg-transparent border-2 rounded-lg border-sky-900 focus:outline-none"
                        />

                        <label htmlFor="isbn" className="block mb-2 text-sm font-bold text-gray-700">
                            ISBN
                        </label>
                        <input
                            id="isbn"
                            type="text"
                            placeholder="0-7645-2641-3"
                            className="w-full px-4 py-2 text-gray-700 bg-transparent border-2 rounded-lg border-sky-900 focus:outline-none"
                        />

                        <div className="flex items-center justify-between mt-4"> {/* Margen superior para los botones */}
                            <button
                                type="button"
                                className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                            >
                                Donación Compartida
                            </button>
                            <button
                                type="button"
                                className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline"
                            >
                                Listo
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-1/4"></div>
            </div>
        </>
    );
}

export default DonacioLibro;
