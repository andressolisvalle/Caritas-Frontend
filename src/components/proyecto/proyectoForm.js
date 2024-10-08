import React, { useState } from "react";
import { postProyecto } from "../../apiService";

const ProyectoForm = ({ actualizarProyecto }) => {
  const [nombre_proyecto, setNombre] = useState("");
  const [fecha_inicial, setFechaInicial] = useState("");
  const [fecha_final, setFechaFinal] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoProyecto = {
      nombre_proyecto,
      fecha_inicial: fecha_inicial,
      fecha_final: fecha_final,
    };

    try {
      await postProyecto(nuevoProyecto);
      setMessage("Institución registrada exitosamente");
      setNombre("");
      setFechaFinal("");
      setFechaInicial("");

      actualizarProyecto();
    } catch (error) {
      setMessage("Error registrando el proyecto");
      window.alert(message);
    }
  };

  return (
    <div className="max-w-lg mx-auto  shadow-md shadow-2xl">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">
        Registrar Nuevo Proyecto
      </h2>
      <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4 font-serif font-bold ">
        <div className="mb-4">
          <label
            className="block text-gray-700  mb-2"
            htmlFor="nombre"
          >
            Nombre del Proyecto
          </label>
          <input
            id="nombre"
            type="text"
            value={nombre_proyecto}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Ingrese el nombre del proyecto"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700  mb-2"
            htmlFor="fecha_inicial"
          >
            Fecha de Inicio
          </label>
          <input
            id="fecha_inicial"
            type="date"
            value={fecha_inicial}
            onChange={(e) => setFechaInicial(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700  mb-2"
            htmlFor="fecha_final"
          >
            Fecha Final
          </label>
          <input
            id="fecha_final"
            type="date"
            value={fecha_final}
            onChange={(e) => setFechaFinal(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full  focus:outline-none focus:shadow-outline"
        >
          Registrar Proyecto
        </button>
      </form>
    </div>
  );
};

export default ProyectoForm;
