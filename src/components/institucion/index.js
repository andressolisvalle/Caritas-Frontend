import React, { useState } from "react";
import InstitucionesList from "./InstitucionesList";
import InstitucionForm from "./InstitucionForm";
import { getInstituciones } from "../../apiService";

function Institucion() {
  // const [instituciones, setInstituciones] = useState([]);
  const [instituciones, setInstituciones] = useState([
    {
      id: 1,
      NOMBRE: "Institución Educativa Central",
      DIRECCION: "Calle 123, Bogotá",
      TELEFONO: "+57123456789",
      EMAIL: "contacto@institucioncentral.edu.co"
    },
    {
      id: 2,
      NOMBRE: "Colegio Nacional",
      DIRECCION: "Carrera 45, Medellín",
      TELEFONO: "+57456789012",
      EMAIL: "info@colegionacional.edu.co"
    },
    {
      id: 3,
      NOMBRE: "Universidad del Norte",
      DIRECCION: "Avenida 7, Barranquilla",
      TELEFONO: "+573212345678",
      EMAIL: "admisiones@uninorte.edu.co"
    },
    {
      id: 4,
      NOMBRE: "Instituto Tecnológico del Sur",
      DIRECCION: "Calle 56, Cali",
      TELEFONO: "+572987654321",
      EMAIL: "contacto@tecnologicosur.edu.co"
    },
    {
      id: 5,
      NOMBRE: "Centro de Formación Integral",
      DIRECCION: "Calle 78, Bucaramanga",
      TELEFONO: "+57765432109",
      EMAIL: "informes@cfi.edu.co"
    }
  ]);

  
  const actualizarInstituciones = React.useCallback(async () => {
    const data = await getInstituciones();
    // setInstituciones(data);
  }, []);

  return (
    <div className="flex h-screen:40vh">
      <div className="w-1/2">
        <InstitucionesList
          instituciones={instituciones}
          actualizarInstituciones={actualizarInstituciones}
        />
      </div>
      <div className="w-1/2 ">
        <InstitucionForm actualizarInstituciones={actualizarInstituciones} />
      </div>
    </div>
  );
}

export default Institucion;
