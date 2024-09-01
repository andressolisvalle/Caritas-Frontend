import React, { useCallback, useState } from "react";
import { getBeneficiario } from "../../apiService";
import BeneficiariosList from "./beneficiariosList";
import AddBeneficiarioForm from "./addBeneficiarioForm";

function Beneficiario() {
  const [beneficiarios, setBeneficiario] = useState([]);

  const actualizarBeneficiario = useCallback(async () => {
    const data = await getBeneficiario();
    setBeneficiario(data);
  }, []);

  return (
    <div className="flex h-screen:40vh">
      <div className="w-1/2">
        {/* <InstitucionesList instituciones={instituciones} actualizarInstituciones={actualizarInstituciones} /> */}
        <AddBeneficiarioForm actualizarBeneficiarios={actualizarBeneficiario} />
      </div>
      <div className="w-1/2 ">
      <BeneficiariosList beneficiarios={beneficiarios} actualizarBeneficiarios={actualizarBeneficiario}/>
       
        {/* <InstitucionForm actualizarInstituciones={actualizarInstituciones} /> */}
      </div>
    </div>
  );
}

export default Beneficiario;
