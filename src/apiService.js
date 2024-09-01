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

export const getProyectos = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/proyectos`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching proyectos:', error);
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

export const postProyecto = async (proyecto) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/proyectos`, proyecto);
        return response.data;
    } catch (error) {
        console.error('Error creating proyecto:', error);
        throw error;
    }
};

export const getBeneficiario = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/beneficiarios`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching beneficiarios:', error);
        throw error;
    }
};
export const postBeneficiario = async (beneficiario) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/beneficiarios`, beneficiario);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating beneficiarios:', error);
        throw error;
    }
};


