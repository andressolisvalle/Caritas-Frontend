import React, { useCallback, useState } from "react";
import { getProyectos } from "../../apiService";
import ProyectosList from "./ProyectosList";
import ProyectoForm from "./ProyectoForm";

function Proyecto() {
  // const [proyectos, setproyectos] = useState([]);
  const [proyectos, setProyectos] = useState([
    {
      id: 1,
      NOMBRE_PROYECTO: "Proyecto Alfa",
      FECHA_INICIAL: "2024-01-15",
      FECHA_FINAL: "2024-06-30"
    },
    {
      id: 2,
      NOMBRE_PROYECTO: "Proyecto Beta",
      FECHA_INICIAL: "2024-02-01",
      FECHA_FINAL: "2024-07-15"
    },
    {
      id: 3,
      NOMBRE_PROYECTO: "Proyecto Gamma",
      FECHA_INICIAL: "2024-03-10",
      FECHA_FINAL: "2024-08-20"
    },
    {
      id: 4,
      NOMBRE_PROYECTO: "Proyecto Delta",
      FECHA_INICIAL: "2024-04-25",
      FECHA_FINAL: "2024-09-30"
    },
    {
      id: 5,
      NOMBRE_PROYECTO: "Proyecto Épsilon",
      FECHA_INICIAL: "2024-05-05",
      FECHA_FINAL: "2024-10-10"
    }
  ]);

  const actualizarProyecto = useCallback(async () => {
    const data = await getProyectos();
    // setproyectos(data);
  }, []);

  return (
    <div className="flex h-screen:40vh">
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
