import React, { useEffect } from "react";

const InstitucionesList = ({ instituciones, actualizarInstituciones }) => {

  useEffect(() => {
    actualizarInstituciones(); 
  }, [actualizarInstituciones]);

  if (!instituciones || instituciones.length === 0) {
    return <p>No hay instituciones disponibles</p>;
  }

  return (
    <div className="overflow-x-auto">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Lista de Instituciones</h1>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead>
          <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Nombre</th>
            <th className="py-3 px-6 text-left">Dirección</th>
            <th className="py-3 px-6 text-left">Teléfono</th>
            <th className="py-3 px-6 text-left">Email</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {instituciones.map((institucion) => (
            <tr
              key={institucion.id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left">{institucion.NOMBRE}</td>
              <td className="py-3 px-6 text-left">{institucion.DIRECCION}</td>
              <td className="py-3 px-6 text-left">{institucion.TELEFONO}</td>
              <td className="py-3 px-6 text-left">{institucion.EMAIL}</td>
              <td className="py-3 px-6 text-center">
                <div className="flex item-center justify-center">
                  <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                    ✏️
                  </div>
                  <div className="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
                    🗑️
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InstitucionesList;
