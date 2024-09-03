import React, { useState } from "react";
import InstitucionesList from "./InstitucionesList";
import InstitucionForm from "./InstitucionForm";
import { getInstituciones } from "../../apiService";

function Institucion() {
  const [instituciones, setInstituciones] = useState([]);

  
  const actualizarInstituciones = React.useCallback(async () => {
    const data = await getInstituciones();
    setInstituciones(data);
  }, []);

  return (
    <div className="flex h-[100vh]">
      <div className="w-3/2">
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
