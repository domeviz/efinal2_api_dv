<template>
  <div class="container">
    <h2>ESTUDIANTE</h2>
        <label>Token</label>
        <input v-model="token" type="text"/>
      <label for="">Nombre:</label>
      <input v-model="nombre" type="text"/>
      <br />
      <label for="">Apellido:</label>
      <input v-model="apellido" type="text" />
      <br />
      <label for="">Cedula:</label>
      <input v-model="cedula" type="text" />
      <br />
      <button @click="guardarEstudiante">Guardar Estudiante</button>
    </div>
</template>

<script>
import { ingresarEstudianteFachada } from '../helpers/ClienteEstudiante'
import MostrarEstudiante from './MostrarEstudiante.vue';

export default {
    components:{
        MostrarEstudiante
    },
    data() {
        return{
              token:null,
              nombre:null,
              cedula:null,
              apellido:null,
              listado:[]
            }
        },
    methods: {
        async guardarEstudiante() {
            const data ={
                  nombre:this.nombre,
                  apellido:this.apellido,
                  cedula:this.cedula
              }
              const estudiante= await ingresarEstudianteFachada(data, this.token);
              console.log(estudiante)
              this.listado.push(estudiante)
        }
    }
}

</script>

<style>
.container{
    display: grid;
    margin: 20px 200px 200px;
}
</style>