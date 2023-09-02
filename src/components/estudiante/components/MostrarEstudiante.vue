<template>
  <div class="tabla">
        <table v-if="estudiantes">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Cedula</th>
          </tr>
          <tr v-for="e in estudiantes" :key="e.id">
            <td>{{ e.id }}</td>
            <td>{{ e.nombre }}</td>
            <td>{{ e.apellido }}</td>
            <td>{{ e.cedula }}</td>
          </tr>
        </table>
      </div>
</template>

<script>
export default {
    props:{
          "estudiantes":{
              type: Array,
              default:null
          }
      },
      data(){
          return{
              lista:this.estudiantes
          }
      }
}
</script>

<style>

</style>