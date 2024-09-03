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
    <div className="flex h-[100vh]">
      <div className="w-2/3 px-4">
      <BeneficiariosList beneficiarios={beneficiarios} actualizarBeneficiarios={actualizarBeneficiario}/>
      </div>
      <div className="w-1/3">
        <AddBeneficiarioForm actualizarBeneficiarios={actualizarBeneficiario} />
      </div>
      
    </div>
  );
}

export default Beneficiario;
