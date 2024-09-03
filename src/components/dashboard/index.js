import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDashboard } from "../../apiService";

function Inicio() {
 
    const [dashboardData, setDashboardData] = useState({
        beneficiarios_por_proyecto: [],
        beneficiarios_por_institucion: [],
      });
    
      useEffect(() => {
        const fetchDashboardData = async () => {
          try {
            const data = await getDashboard();
            setDashboardData({
                beneficiarios_por_institucion: data.beneficiarios_por_institucion,
                beneficiarios_por_proyecto: data.beneficiarios_por_proyecto
            });
          } catch (error) {
            console.error("Error loading dashboard data:", error);
          }
        };
    
        fetchDashboardData();
      }, []);

      console.log('beneficiarios_por_institucion',dashboardData.beneficiarios_por_institucion);
      console.log('beneficiarios_por_proyecto',dashboardData.beneficiarios_por_proyecto);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <Link
        to="/proyectos"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src="/proyectos.jpg"
        ></img>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            PROYECTOS
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Gestiona los proyectos
          </p>
        </div>
      </Link>
      <Link
        to="/instituciones"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src="/instituciones.jpg"
        ></img>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            INSTITUCIONES
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Gestiona las Instituciones
          </p>
        </div>
      </Link>
      <Link
        to="/beneficiarios"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src="/beneficiarios.jpg"
        ></img>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            BENEFICIARIOS
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Gestiona los Beneficiarios
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Inicio;
