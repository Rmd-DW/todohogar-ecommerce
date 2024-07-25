
<template>
 
    <div class="container m-5 ">
    <form @submit.prevent="onSubmitLogin" class="w-50 mx-auto border">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" id="email" v-model="email" class="form-control" placeholder="Ingrese su email" required />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Contraseña</label>
        <input type="password" id="password" v-model="password" class="form-control" placeholder="Ingrese su contraseña" required />
      </div>
      <FormButton :text="textButton" :type="button" class="btn btn-primary w-100 m-2 p-2"/>
    </form>
  </div>  
</template>


<script>
import { mapActions } from 'vuex'
import FormButton from './FormButton.vue'

export default {
  components: {
    FormButton
  },
  data() {
    return {
      textButton: "Iniciar Sesión",
      typeButton: "login-btn",
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions('auth', ['loginUser']),

    async onSubmitLogin() {
      try {
        await this.loginUser({ email: this.email, password: this.password })
        alert(`Bienvenido ${this.email}`)
        this.$router.push('/')
      } catch (error) {
        alert('Credenciales Invalidas')
      }
    }
  }
}
</script>

<style scoped>

</style>
