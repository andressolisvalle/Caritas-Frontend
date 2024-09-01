import React, { useState, useEffect } from 'react';
import { putProyecto } from '../../apiService';

const ModalProyectos = ({ isOpen, onClose, proyecto, actualizarProyecto }) => {
  const [nombre_proyecto, setNombreProyecto] = useState('');
  const [fecha_inicial, setFechaInicial] = useState('');
  const [fecha_final, setFechaFinal] = useState('');

  useEffect(() => {
    if (proyecto) {
      setNombreProyecto(proyecto.NOMBRE_PROYECTO);
      setFechaInicial(proyecto.FECHA_INICIAL);
      setFechaFinal(proyecto.FECHA_FINAL);
    }
  }, [proyecto]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await putProyecto({
        id: proyecto.id,
        nombre_proyecto,
        fecha_inicial,
        fecha_final,
      });
      onClose();
      actualizarProyecto();
    } catch (error) {
      console.error('Error al actualizar el proyecto', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
        <h2 className="text-xl font-bold mb-4">Editar Proyecto</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Nombre del Proyecto</label>
            <input
              type="text"
              value={nombre_proyecto}
              onChange={(e) => setNombreProyecto(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Fecha Inicial</label>
            <input
              type="date"
              value={fecha_inicial}
              onChange={(e) => setFechaInicial(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Fecha Final</label>
            <input
              type="date"
              value={fecha_final}
              onChange={(e) => setFechaFinal(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Actualizar
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalProyectos;
