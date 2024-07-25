import axios from 'axios';

const state = {
    user: null,
    users: []
};

const getters = {
    getUser: state => state.user,
    isAuthenticated: state => !!state.user,
    isAdmin: state => state.user && state.user.admin,
    getUsers: state => state.users
};

const mutations = {
    setUser: (state, user) => state.user = user,
    addUser: (state, user) => state.users.push(user),
    setUsers: (state, users) => state.users = users
};

const actions = {
    loginUser({ commit, state }, { email, password }) {
        const user = state.users.find(user => user.correo === email && user.password === password);
        if (!user) throw new Error('Credenciales Invalidas');
        
        commit('setUser', user);
    },

    registerUser({ commit, state }, newUser) {
        const userExists = state.users.find(user => user.correo === newUser.correo);
        if (userExists) throw new Error('Ya hay un usuario registrado con este email');

        newUser.id = state.users.length + 1;
        commit('addUser', newUser);

        commit('setUser', newUser);
    },

    logout({ commit }) {
        commit('setUser', null);
    },

    async fetchUsersFromJson({ commit }) {
        const { data } = await axios.get('/api/usuarios.json');
        commit('setUsers', data);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
