import React, { useState, useEffect } from 'react';
import ModalBeneficiario from './modalBeneficiario';
import { deleteBeneficiarios } from '../../apiService';

const BeneficiariosList = ({ beneficiarios, actualizarBeneficiarios }) => {
  const [selectedBeneficiario, setSelectedBeneficiario] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <div className="container mx-auto py-4">
      <h2 className="text-xl font-bold mb-4">Lista de Beneficiarios</h2>
      
      <div className="overflow-y-auto max-h-96">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Nombre</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Apellidos</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Fecha de Nacimiento</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Teléfono/Redes Sociales</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Dirección</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Fecha de Registro</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Documento</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {beneficiarios.length > 0 ? (
              beneficiarios.map((beneficiario) => (
                <tr key={beneficiario.id}>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{beneficiario.NOMBRES}</td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{beneficiario.APELLIDOS}</td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{beneficiario.FECHA_NACIMIENTO}</td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{beneficiario.TELEFONO_REDES_SOCIALES}</td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{beneficiario.DIRECCION}</td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{beneficiario.FECHA_REGISTRO}</td>
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
              ))
            ) : (
              <tr>
                <td colSpan="8" className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center">No hay beneficiarios registrados</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

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
