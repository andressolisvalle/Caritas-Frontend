import React, { useState, useEffect } from "react";
import { getInstituciones, getProyectos, postBeneficiario } from "../../apiService";

const AddBeneficiarioForm = ({ actualizarBeneficiarios }) => {
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [documento, setDocumento] = useState("");
  const [observaciones, setObservaciones] = useState("");
  const [idInstitucion, setIdInstitucion] = useState("");
  const [idProyecto, setIdProyecto] = useState("");
  const [instituciones, setInstituciones] = useState([]);
  const [proyectos, setProyectos] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const inst = await getInstituciones();
        setInstituciones(inst);
        const proyect = await getProyectos();
        setProyectos(proyect);
      } catch (error) {
        setMessage('Error al cargar los datos');
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBeneficiario = {
      nombres,
      apellidos,
      fecha_nacimiento: fechaNacimiento,
      telefono_redes_sociales: telefono,
      direccion,
      documento,
      observaciones,
      id_institucion: idInstitucion,
      id_proyecto: idProyecto,
    };
    console.log('datos nuevos'+newBeneficiario.fecha_registro);
    try {
      await postBeneficiario(newBeneficiario);
      setNombres("");
      setApellidos("");
      setFechaNacimiento("");
      setTelefono("");
      setDireccion("");
      setDocumento("");
      setIdInstitucion("");
      setIdProyecto("");
      actualizarBeneficiarios();
    } catch (error) {
      setMessage('Error registrando el proyecto');
    }
  };

  return (
    <div className="container mx-auto py-4">
      <h2 className="text-xl font-bold mb-4">Agregar Nuevo Beneficiario</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nombres:
          </label>
          <input
            type="text"
            value={nombres}
            onChange={(e) => setNombres(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Apellidos:
          </label>
          <input
            type="text"
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Fecha de Nacimiento:
          </label>
          <input
            type="date"
            value={fechaNacimiento}
            onChange={(e) => setFechaNacimiento(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Teléfono:
          </label>
          <input
            type="number"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
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
            Documento:
          </label>
          <input
            type="number"
            value={documento}
            onChange={(e) => setDocumento(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Observaciones:
          </label>
          <input
            type="text"
            value={observaciones}
            onChange={(e) => setObservaciones(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Institución:
          </label>
          <select
            value={idInstitucion}
            onChange={(e) => setIdInstitucion(e.target.value)}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="" disabled>
              Seleccione una institución
            </option>
            {instituciones.map((institucion) => (
              <option key={institucion.id} value={institucion.id}>
                {institucion.NOMBRE}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Proyecto:
          </label>
          <select
            value={idProyecto}
            onChange={(e) => setIdProyecto(e.target.value)}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="" disabled>
              Seleccione un proyecto
            </option>
            {proyectos.map((proyecto) => (
              <option key={proyecto.id} value={proyecto.id}>
                {proyecto.NOMBRE_PROYECTO}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Agregar Beneficiario
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBeneficiarioForm;
