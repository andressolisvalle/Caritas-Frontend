import React, { useCallback, useState } from "react";
import { getBeneficiario } from "../../apiService";
import BeneficiariosList from "./beneficiariosList";
import AddBeneficiarioForm from "./addBeneficiarioForm";

function Beneficiario() {
  // const [beneficiarios, setBeneficiario] = useState([]);

  const [beneficiarios, setBeneficiario] = useState([
    {
      id: 1,
      NOMBRES: "Juan Carlos",
      APELLIDOS: "Pérez Rodríguez",
      FECHA_NACIMIENTO: "1990-05-15",
      TELEFONO_REDES_SOCIALES: "juan.perez@example.com / +573001234567",
      DIRECCION: "Calle Falsa 123, Ciudad Gótica",
      FECHA_REGISTRO: "2024-08-20",
      DOCUMENTO: "CC 1234567890"
    },
    {
      id: 2,
      NOMBRES: "María Fernanda",
      APELLIDOS: "Gómez López",
      FECHA_NACIMIENTO: "1988-11-23",
      TELEFONO_REDES_SOCIALES: "@maria.gomez / +573009876543",
      DIRECCION: "Avenida Siempre Viva 742, Springfield",
      FECHA_REGISTRO: "2024-08-22",
      DOCUMENTO: "CC 1098765432"
    },
    {
      id: 3,
      NOMBRES: "Carlos Andrés",
      APELLIDOS: "Martínez Díaz",
      FECHA_NACIMIENTO: "1992-07-12",
      TELEFONO_REDES_SOCIALES: "carlos.martinez@example.com / +573008765432",
      DIRECCION: "Carrera 10 #20-30, Metropolis",
      FECHA_REGISTRO: "2024-08-25",
      DOCUMENTO: "CC 1237894560"
    },
    {
      id: 4,
      NOMBRES: "Ana Lucía",
      APELLIDOS: "Ramírez Torres",
      FECHA_NACIMIENTO: "1995-02-28",
      TELEFONO_REDES_SOCIALES: "@ana.ramirez / +573002345678",
      DIRECCION: "Calle Luna, Ciudad del Sol",
      FECHA_REGISTRO: "2024-08-28",
      DOCUMENTO: "CC 1092345678"
    },
    {
      id: 5,
      NOMBRES: "Ricardo",
      APELLIDOS: "Sánchez Pérez",
      FECHA_NACIMIENTO: "1985-12-02",
      TELEFONO_REDES_SOCIALES: "ricardo.sanchez@example.com / +573004567890",
      DIRECCION: "Avenida Libertador 500, Ciudad Esmeralda",
      FECHA_REGISTRO: "2024-08-30",
      DOCUMENTO: "CC 1093456789"
    }
  ]);


  const actualizarBeneficiario = useCallback(async () => {
    const data = await getBeneficiario();
    // setBeneficiario(data);
  }, []);

  return (
    <div className="flex h-screen:40vh">
      <div className="w-1/2">
        <AddBeneficiarioForm actualizarBeneficiarios={actualizarBeneficiario} />
      </div>
      <div className="w-1/2 ">
      <BeneficiariosList beneficiarios={beneficiarios} actualizarBeneficiarios={actualizarBeneficiario}/>
      </div>
    </div>
  );
}

export default Beneficiario;
