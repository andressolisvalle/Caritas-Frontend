import axios from 'axios';
import React, { useState } from 'react';
import { putInstitucion } from '../../apiService';

const UpdateInstitucionForm = ({ institucion }) => {
    const [nombre, setNombre] = useState(institucion.nombre);
    const [direccion, setDireccion] = useState(institucion.direccion);
    const [telefono, setTelefono] = useState(institucion.telefono);
    const [email, setEmail] = useState(institucion.email);

    const handleSubmit = async (e) => {
        e.preventDefault();

        await putInstitucion(institucion);

        // try {
        //     const response = await axios.put(`/api/instituciones/${institucion.id}`, {
        //         nombre,
        //         direccion,
        //         telefono,
        //         email
        //     });

        //     // Aquí puedes manejar la respuesta, por ejemplo, mostrar un mensaje de éxito
        //     console.log('Institución actualizada:', response.data);
        // } catch (error) {
        //     // Aquí puedes manejar errores, por ejemplo, mostrar un mensaje de error
        //     console.error('Error actualizando la institución:', error);
        // }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Nombre:
                </label>
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Dirección:
                </label>
                <input
                    type="text"
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Teléfono:
                </label>
                <input
                    type="text"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email:
                </label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Actualizar Institución
                </button>
            </div>
        </form>
    );
};

export default UpdateInstitucionForm;
