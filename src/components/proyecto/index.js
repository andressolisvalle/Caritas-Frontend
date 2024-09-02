import React, { useCallback, useState } from "react";
import { getProyectos } from "../../apiService";
import ProyectosList from "./ProyectosList";
import ProyectoForm from "./ProyectoForm";

function Proyecto() {
  const [proyectos, setproyectos] = useState([]);

  const actualizarProyecto = useCallback(async () => {
    const data = await getProyectos();
    setproyectos(data);
  }, []);

  return (
    <div className="flex h-[100vh]">
      <div className="w-1/2">
        <ProyectosList
          proyectos={proyectos}
          actualizarProyecto={actualizarProyecto}
        />
      </div>
      <div className="w-1/2 ">
        <ProyectoForm actualizarProyecto={actualizarProyecto}/>
      </div>
    </div>
  );
}

export default Proyecto;
