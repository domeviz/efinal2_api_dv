import { createRouter, createWebHistory } from 'vue-router'
import GenerarToken from '../components/estudiante/components/GenerarToken.vue'
import GuardarEstudiante from '../components/estudiante/components/GuardarEstudiante.vue'

const routes = [
  {
    path: '/token',
    name: 'token',
    component: GenerarToken
  },
  {
    path: '/estudiante',
    name: 'estudiante',
    component: GuardarEstudiante
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
