import axios from "axios";

const API_BASE_URL = 'http://localhost:8000/api';

export const getInstituciones = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/instituciones`);
        return response.data;
    } catch (error) {
        console.error('Error fetching instituciones:', error);
        throw error;
    }
};
export const postInstitucion = async (institucion) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/instituciones`, institucion);
        return response.data;
    } catch (error) {
        console.error('Error creating institucion:', error);
        throw error;
    }
};

export const putInstitucion = async (institucion) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/instituciones/${institucion.id}`, institucion);
        return response.data;
    } catch (error) {
        console.error('Error al editar institucion:', error);
        throw error;
    }
};

export const deleteInstitucion = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/instituciones/${id}`);
    } catch (error) {
        window.alert(error.response.data.error);
    }
};




export const getProyectos = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/proyectos`);
        return response.data;
    } catch (error) {
        console.error('Error fetching proyectos:', error);
        throw error;
    }
};



export const postProyecto = async (proyecto) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/proyectos`, proyecto);
        return response.data;
    } catch (error) {
        console.error('Error creating proyecto:', error);
        throw error;
    }
};

export const putProyecto = async (proyecto) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/proyectos/${proyecto.id}`, proyecto);
        return response.data;
    } catch (error) {
        console.error('Error al editar el proyecto:', error);
        throw error;
    }
};

export const deleteProyecto = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/proyectos/${id}`);
    } catch (error) {
        window.alert(error.response.data.error);
    }
};

export const getBeneficiario = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/beneficiarios`);
        return response.data;
    } catch (error) {
        console.error('Error fetching beneficiarios:', error);
        throw error;
    }
};
export const postBeneficiario = async (beneficiario) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/beneficiarios`, beneficiario);
        return response.data;
    } catch (error) {
        console.error('Error creating beneficiarios:', error);
        throw error;
    }
};

export const putBeneficiario = async (beneficiario) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/beneficiarios/${beneficiario.id}`, beneficiario);
        return response.data;
    } catch (error) {
        console.error('Error al editar beneficiarios:', error);
        throw error;
    }
};

export const deleteBeneficiarios = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/beneficiarios/${id}`);
    } catch (error) {
        window.alert(error.response.data.error);
    }
};


