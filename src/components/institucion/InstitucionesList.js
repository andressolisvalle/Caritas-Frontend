import React, { useState, useEffect } from 'react';
import EditarInstitucionModal from './modalUpdate';
import { deleteInstitucion } from '../../apiService';

const InstitucionesList = ({ instituciones, actualizarInstituciones }) => {
  const [selectedInstitucion, setSelectedInstitucion] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    actualizarInstituciones();
  }, [actualizarInstituciones]);

  const handleEditClick = (institucion) => {
    setSelectedInstitucion(institucion);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedInstitucion(null);
  };
  const handleDeleteClick = async (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar esta institucion?")) {
      try {
        await deleteInstitucion(id);
        actualizarInstituciones();
      } catch (error) {
        console.error('Error al eliminar el proyecto', error);
      }
    }
  };

  if (!instituciones || instituciones.length === 0) {
    return <p>No hay instituciones disponibles</p>;
  }

  return (
    <div className="overflow-x-auto h-96 shadow-md shadow-2xl">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Lista de Instituciones</h1>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg ">
        <thead>
          <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Nombre</th>
            <th className="py-3 px-6 text-left">Dirección</th>
            <th className="py-3 px-6 text-left">Teléfono</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Acciones</th>
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
                  <button
                    className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer"
                    onClick={() => handleEditClick(institucion)}
                  >
                    ✏️
                  </button>
                  <div className="w-4 mr-2 transform hover:text-red-500 hover:scale-110 cursor-pointer"
                  onClick={() => handleDeleteClick(institucion.id)}>
                    🗑️
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <EditarInstitucionModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        institucion={selectedInstitucion}
        actualizarInstituciones={actualizarInstituciones}
      />
      
    </div>
  );
};

export default InstitucionesList;
