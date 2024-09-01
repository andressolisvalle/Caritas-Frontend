import React, { useEffect, useState } from "react";

const ProyectosList = ({proyectos,actualizarProyecto}) => {
  //const [proyectos, setProyectos] = useState([]);
    //   const [loading, setLoading] = useState(true);
    //   const [error, setError] = useState(null);

  useEffect(() => {
    actualizarProyecto(); 
  }, [actualizarProyecto]);


//   useEffect(() => {
//     const fetchProyectos = async () => {
//       try {
//         const data = await getProyectos();
//         setProyectos(data);
//       } catch (error) {
//         setError("Error fetching proyectos");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProyectos();
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead>
          <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">NOMBRE PROYECTO</th>
            <th className="py-3 px-6 text-left">FECHA_INICIAL</th>
            <th className="py-3 px-6 text-left">FECHA_FINAL</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {proyectos.map((proyecto) => (
            <tr
              key={proyectos.key}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left">{proyecto.NOMBRE_PROYECTO}</td>
              <td className="py-3 px-6 text-left">{proyecto.FECHA_INICIAL}</td>
              <td className="py-3 px-6 text-left">{proyecto.FECHA_FINAL}</td>
              <td className="py-3 px-6 text-center">
                <div className="flex item-center justify-center">
                  <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                    ✏️
                  </div>
                  <div className="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
                    🗑️
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProyectosList;
