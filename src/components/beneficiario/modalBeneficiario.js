import React, { useState, useEffect } from "react";
import {
  getInstituciones,
  getProyectos,
  putBeneficiario,
} from "../../apiService";

const ModalBeneficiario = ({
  isOpen,
  onClose,
  beneficiario,
  actualizarBeneficiarios,
}) => {
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const inst = await getInstituciones();
        setInstituciones(inst);
        const proyect = await getProyectos();
        setProyectos(proyect);
      } catch (error) {}
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (beneficiario) {
      setNombres(beneficiario.NOMBRES);
      setApellidos(beneficiario.APELLIDOS);
      setFechaNacimiento(beneficiario.FECHA_NACIMIENTO);
      setTelefono(beneficiario.TELEFONO_REDES_SOCIALES);
      setDireccion(beneficiario.DIRECCION);
      setDocumento(beneficiario.DOCUMENTO);
      setObservaciones(beneficiario.OBSERVACIONES);
      setIdInstitucion(beneficiario.ID_INSTITUCION);
      setIdProyecto(beneficiario.ID_PROYECTO);
    }
  }, [beneficiario]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const editBeneficiario = {
      id: beneficiario.id,
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

    try {
      await putBeneficiario(editBeneficiario);
    } catch (error) {}
    actualizarBeneficiarios();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Editar Beneficiario</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nombres
            </label>
            <input
              type="text"
              name="nombres"
              value={nombres}
              onChange={(e) => setNombres(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Apellidos
            </label>
            <input
              type="text"
              name="APELLIDOS"
              value={apellidos}
              onChange={(e) => setApellidos(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Fecha de Nacimiento
            </label>
            <input
              type="date"
              name="FECHA_NACIMIENTO"
              value={fechaNacimiento}
              onChange={(e) => setFechaNacimiento(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Teléfono/Redes Sociales
            </label>
            <input
              type="text"
              name="TELEFONO_REDES_SOCIALES"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Dirección
            </label>
            <input
              type="text"
              name="DIRECCION"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Documento
            </label>
            <input
              type="text"
              name="DOCUMENTO"
              value={documento}
              onChange={(e) => setDocumento(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              required
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
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600 focus:outline-none"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalBeneficiario;
