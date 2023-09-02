import axios from "axios";

export const obtenerTokenFachada = async (bodyUsuario) => {
    return await obtenerToken(bodyUsuario);
}

const obtenerToken = async (bodyUsuario) => {
    const data = axios.post(`http://localhost:8082/API/v1.0/Autorizacion/tokens/obtener`,bodyUsuario).then(r => r.data);
    return data;
}
