import React, { useState, useEffect } from 'react';
import ModalProyectos from './modalProyecto';
import { deleteProyecto } from '../../apiService';

const ProyectosList = ({ proyectos, actualizarProyecto }) => {
  const [selectedProyecto, setSelectedProyecto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    actualizarProyecto();
  }, [actualizarProyecto]);

  const handleEditClick = (proyecto) => {
    setSelectedProyecto(proyecto);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProyecto(null);
  };

  const handleDeleteClick = async (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este proyecto?")) {
      try {
        await deleteProyecto(id);
        actualizarProyecto();
      } catch (error) {
        console.error('Error al eliminar el proyecto', error);
      }
    }
  };

  if (!proyectos || proyectos.length === 0) {
    return <p>No hay proyectos disponibles</p>;
  }

  return (
    <div className="overflow-x-auto h-96 shadow-md shadow-2xl">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Lista de Proyectos</h1>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead>
          <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Nombre Proyecto</th>
            <th className="py-3 px-6 text-left">Fecha Inicial</th>
            <th className="py-3 px-6 text-left">Fecha Final</th>
            <th className="py-3 px-6 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {proyectos.map((proyecto) => (
            <tr
              key={proyecto.id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left">{proyecto.NOMBRE_PROYECTO}</td>
              <td className="py-3 px-6 text-left">{proyecto.FECHA_INICIAL}</td>
              <td className="py-3 px-6 text-left">{proyecto.FECHA_FINAL}</td>
              <td className="py-3 px-6 text-center">
                <div className="flex item-center justify-center">
                  <div
                    className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer"
                    onClick={() => handleEditClick(proyecto)}
                  >
                    ✏️
                  </div>
                  <div
                    className="w-4 mr-2 transform hover:text-red-500 hover:scale-110 cursor-pointer"
                    onClick={() => handleDeleteClick(proyecto.id)}
                  >
                    🗑️
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal para editar el proyecto */}
      <ModalProyectos
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        proyecto={selectedProyecto}
        actualizarProyecto={actualizarProyecto}
      />
    </div>
  );
};

export default ProyectosList;
