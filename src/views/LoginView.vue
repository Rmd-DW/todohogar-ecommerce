<template>
    <main>
        <div class="container">
        <h1>Iniciar Sesión</h1>
        <form @submit.prevent="onSubmitLogin">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="email" class="form-control" required />
            </div>
            <div class="form-group">
                <label for="password">Contraseña</label>
                <input type="password" id="password" v-model="password" class="form-control" required />
            </div>
            <FormButton text="Iniciar Sesión" type="btn-primary"/>
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
main{
    display: flex;
    min-height: 70vh;
    justify-content: center;
    align-items: center;
}

</style>
