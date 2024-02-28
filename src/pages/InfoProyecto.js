import React from "react";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import ImageProyecto from "../image/imageProyecto.png";


function InfoProyecto() {
  return (
    <div>
         <Header />
          <h1 className="text-left text-2xl font-bold mt-8 ml-4">
            Información del proyecto
          </h1>
          <div className="border-b border-gray-300 m-1"></div>
      <div className="flex">
        <div className="w-1/2 p-4">
        <img src={ImageProyecto} alt="Imagen del proyecto" className="" />


        </div>
        <div className="w-1/2 p-4">
         

          <div className="mr-4 p-4 flex">
            <div className="max-w-sm rounded overflow-hidden shadow-md bg-gray-100 mr-10">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-indigo-700">
                  Asesor academico
                </div>
                <p className="text-gray-700 text-base mt-8">Rafael Villegas</p>
                <p className="text-gray-700 text-base">
                  rvillegas@utcancun.edu.mx
                </p>
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-md bg-gray-100 mr-10">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-indigo-700">
                  Estatus del proyecto
                </div>
                <p className="text-gray-700 text-base mt-8">
                  Comentarios: <span className="text-red-500">2</span>
                </p>
                <p className="text-gray-700 text-base">
                  Votos: <span className="text-green-500">3</span>
                </p>
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden mr-10 flex flex-col items-center">
              <FontAwesomeIcon
                icon={faBell}
                className="text-gray-500 mt-4 text-3xl"
              />
              <FontAwesomeIcon
                icon={faPencilAlt}
                className="text-gray-500 mt-4 text-3xl"
              />
            </div>
          </div>
          <div>
            <h2 className="font-bold text-xl mb-2 text-indigo-700">Comentarios:</h2>
            <p className="text-justify">
              El documento presentado no tiene ningún aspecto que se tenga que
              corroborar ya que abarca todos los requerimientos que se tienen
              que cumplir y tiene 3 votos a favor, lo que da autorización para
              el siguiente paso.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoProyecto;
