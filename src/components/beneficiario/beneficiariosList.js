import React, { useState, useEffect } from 'react';
import ModalBeneficiario from './modalBeneficiario';
import { deleteBeneficiarios, getInstituciones, getProyectos } from '../../apiService';

const BeneficiariosList = ({ beneficiarios, actualizarBeneficiarios }) => {
  const [selectedBeneficiario, setSelectedBeneficiario] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [instituciones, setInstituciones] = useState([]);
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const inst = await getInstituciones();
        setInstituciones(inst);
        const proyect = await getProyectos();
        setProyectos(proyect);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    actualizarBeneficiarios();
  }, [actualizarBeneficiarios]);

  const handleEditClick = (beneficiario) => {
    setSelectedBeneficiario(beneficiario);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBeneficiario(null);
  };

  const handleDeleteClick = async (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este Beneficiario?")) {
      try {
        await deleteBeneficiarios(id);
        actualizarBeneficiarios();
      } catch (error) {
        console.error('Error al eliminar el Beneficiario', error);
      }
    }
  };

  return (
    <div className="overflow-x-auto h-96 shadow-md shadow-2xl">
      <h2 className="text-xl font-bold mb-4">Lista de Beneficiarios</h2>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead>
          <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Nombre</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Apellidos</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Fecha de Nacimiento</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Teléfono/Redes Sociales</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Dirección</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Fecha de Registro</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Institucion</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Proyecto</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Documento</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Acciones</th>
          </tr>
        </thead>
        <tbody className='text-gray-600 text-sm font-light'>
          {beneficiarios.length > 0 ? (
            beneficiarios.map((beneficiario) => {
              const ben = beneficiario.ID_INSTITUCION;
              const institucion = instituciones.find(inst => inst.id == beneficiario.ID_INSTITUCION);
              const proyecto = proyectos.find(proj => proj.id == beneficiario.ID_PROYECTO);

              return (
                <tr key={beneficiario.id}>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{beneficiario.NOMBRES}</td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{beneficiario.APELLIDOS}</td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{beneficiario.FECHA_NACIMIENTO}</td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{beneficiario.TELEFONO_REDES_SOCIALES}</td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{beneficiario.DIRECCION}</td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{beneficiario.FECHA_REGISTRO}</td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    {institucion ? institucion.NOMBRE : 'Sin asignar'}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    {proyecto ? proyecto.NOMBRE_PROYECTO : 'Sin asignar'}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{beneficiario.DOCUMENTO}</td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="flex item-center justify-center">
                      <button
                        className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer"
                        onClick={() => handleEditClick(beneficiario)}
                      >
                        ✏️
                      </button>
                      <div className="w-4 mr-2 transform hover:text-red-500 hover:scale-110 cursor-pointer"
                      onClick={() => handleDeleteClick(beneficiario.id)}>
                        🗑️
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="10" className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center">No hay beneficiarios registrados</td>
            </tr>
          )}
        </tbody>
      </table>

      {isModalOpen && (
        <ModalBeneficiario 
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
          beneficiario={selectedBeneficiario} 
          actualizarBeneficiarios={actualizarBeneficiarios} 
        />
      )}
    </div>
  );
};

export default BeneficiariosList;
