<template>
    <main>
      <div class="login-container">
        <h1 class="text-center mb-4">Iniciar Sesión</h1>
        <form @submit.prevent="onSubmitLogin">
          <div class="form-group mb-3">
            <label for="email">Correo</label>
            <input type="email" id="email" v-model="email" class="form-control" required />
          </div>
          <div class="form-group mb-4">
            <label for="password">Contraseña</label>
            <input type="password" id="password" v-model="password" class="form-control" required />
          </div>
          <div class="d-grid">
            <FormButton text="Iniciar sesión" type="btn-primary" />
          </div>
        </form>
      </div>
    </main>
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex';
  import FormButton from '../components/FormButton.vue';
  
  export default {
      components: {
          FormButton
      },
      data() {
          return {
              email: '',
              password: ''
          };
      },
      computed: {
          ...mapGetters('auth', ['isAdmin'])
      },
      methods: {
          ...mapActions('auth', ['loginUser']),
          async onSubmitLogin() {
              try {
                  await this.loginUser({ email: this.email, password: this.password });
                  alert(`Bienvenido ${this.email}`);
                  if (this.isAdmin) {
                      this.$router.push('/admin');
                  } else {
                      this.$router.push('/');
                  }
              } catch (error) {
                  alert('Credenciales Invalidas');
              }
          }
      }
  };
  </script>
<style scoped>
main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f8f9fa; /* Ajusta el color de fondo si es necesario */
}

.login-container {
    width: 100%;
    max-width: 400px;
    padding: 2rem;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

h1 {
    font-size: 1.75rem;
    font-weight: 600;
    color: #333;
}

.form-group label {
    font-weight: 500;
    margin-bottom: 0.5rem;
}

.form-control {
    border-radius: 4px;
    border: 1px solid #ced4da;
    padding: 0.75rem;
    font-size: 1rem;
}

.d-grid {
    display: grid;
    gap: 1rem;
}
</style>
