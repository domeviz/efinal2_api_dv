<template>
  <div class="container">
    <div>
      <label for="">Semilla</label>
      <input type="text" v-model="usuario.semilla" />
      <label for="">Tiempo de vigencia</label>
      <input type="number" v-model="usuario.tiempo" />
    </div>
    <div>
      <label for="">Token</label>
      <input type="text" v-model="token" readonly />
    </div>
    <button @click="obtenerToken">Generar</button>
  </div>
</template>

<script>
import { obtenerTokenFachada } from '../helpers/ClienteToken'

export default {
    data() {
      return {
        token: null,
        usuario: {
          username: "mike",
          password: "1234",
          semilla: null,
          tiempo: null,
        },
      };
    },
    methods: {
      async generarToken() {
        const token = await obtenerTokenFachada(this.usuario);
        this.token = token;
      },
    },
};
</script>

<style>
.container{
    display: grid;
    margin: 20px 200px 200px;
}
</style>
