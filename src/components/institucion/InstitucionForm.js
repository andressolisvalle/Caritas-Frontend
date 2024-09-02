import React, { useState } from 'react';
import { postInstitucion } from '../../apiService';

const InstitucionForm = ({ actualizarInstituciones }) => {
    const [nombre, setNombre] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newInstitucion = {
            nombre,
            direccion,
            telefono,
            email
        };

        try {
            await postInstitucion(newInstitucion);
            setMessage('Institución registrada exitosamente');
            setNombre('');
            setDireccion('');
            setTelefono('');
            setEmail('');
            actualizarInstituciones(); 
        } catch (error) {
            setMessage('Error registrando la institución');
        }
    };

    return (
        <div className="max-w-lg mx-auto  shadow-md shadow-2xl ">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Agregar Institución</h2>
          {message && <p className="mb-4 text-sm text-center text-gray-700">{message}</p>}
          <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4 font-serif">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                Nombre
              </label>
              <input
                id="nombre"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Nombre de la institución"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
    
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="direccion">
                Dirección
              </label>
              <input
                id="direccion"
                type="text"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                placeholder="Dirección de la institución"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
    
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telefono">
                Teléfono
              </label>
              <input
                id="telefono"
                type="tel"
                required
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                placeholder="Teléfono de contacto"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
    
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Correo electrónico"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
    
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full  focus:outline-none focus:shadow-outline"
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      );
};

export default InstitucionForm;
