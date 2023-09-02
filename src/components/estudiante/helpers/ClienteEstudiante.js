import axios from "axios";

export const ingresarEstudianteFachada=(estudiante,token)=>{
    ingresarEstudiante(estudiante,token);
}

const ingresarEstudiante=async(estudiante,token)=>{
    const headers = {
        "Authorization": "Bearer " + token,
    }
    const data =await axios.post('http://localhost:8081/API/v1.0/Inscripcion/estudiantes',estudiante,{headers:headers}).then(r=>r.data);
    return data;
}
