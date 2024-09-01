import React, { useEffect } from 'react';

const BeneficiariosList = ({ beneficiarios, actualizarBeneficiarios }) => {
  useEffect(() => {
    actualizarBeneficiarios(); 
  }, [actualizarBeneficiarios]);

  return (
    <div className="container mx-auto py-4">
      <h2 className="text-xl font-bold mb-4">Lista de Beneficiarios</h2>
      
      {/* Contenedor con tamaño fijo y scroll */}
      <div className="overflow-y-auto max-h-96"> {/* max-h-96 equivale a 24rem, puedes ajustarlo */}
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
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center">No hay beneficiarios registrados</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BeneficiariosList;
