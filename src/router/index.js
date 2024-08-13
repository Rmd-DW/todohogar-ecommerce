import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
const ProductView = () => import('../views/ProductView.vue');
const LoginView = () => import('../views/LoginView.vue');
const NotfoundView = () => import('../views/NotfoundView.vue');
const DetailproductView = () => import('../views/DetailproductView.vue');
const AdminView = () => import('../views/AdminView.vue');
import store from '../store'; // Asegúrate de importar el store de Vuex

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
    beforeEnter: (to, from, next) => {
      if (store.getters['auth/isAdmin']) {
        next();
      } else {
        next('/login');
      }
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/product/:id',
    name: 'detailproduct',
    component: DetailproductView
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: NotfoundView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

