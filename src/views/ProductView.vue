<template>
    <div>
      <h1>Productos disponibles</h1>
  
      <div class="container text-center my-4">
        <div class="row mb-4">
          <div class="col-md-4">
            <input type="text" v-model="searchName" class="form-control" placeholder="Búsqueda por nombre">
          </div>
          <div class="col-md-4">
            <select v-model="searchCategory" class="form-control">
              <option value="">Todas las categorías</option>
              <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
            </select>
          </div>
          <div class="col m-2">
            <button @click="filterProducts" class="btn btn-primary w-100">Filtrar</button>
          </div>
        </div>
  
        <div class="row">
          <div class="col m-2 p-2" v-for="product in filteredProducts" :key="product.id">
            <ProductCard :product="product" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  import ProductCard from '../components/ProductCard.vue';
  
  export default {
    components: {
      ProductCard
    },
    data() {
      return {
        searchName: '',
        searchCategory: '',
        filteredProducts: []
      };
    },
    computed: {
      ...mapGetters('products', ['allProducts']),
      categories() {
        return [...new Set(this.allProducts.map(product => product.categoria))];
      }
    },
    methods: {
      ...mapActions('products', ['fetchProducts']),
      filterProducts() {
        this.filteredProducts = this.allProducts.filter(product => {
          return (
            (this.searchName === '' || product.nombre.toLowerCase().includes(this.searchName.toLowerCase())) &&
            (this.searchCategory === '' || product.categoria === this.searchCategory)
          );
        });
      }
    },
    mounted() {
      this.fetchProducts().then(() => {
        this.filteredProducts = this.allProducts;
      });
    }
  };
  </script>
  
  <style scoped>
 
  </style>
  