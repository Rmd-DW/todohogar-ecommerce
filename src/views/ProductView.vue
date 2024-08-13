<template>
  <main>
    <div mt-5 pt-5>
   
    <div class="container text-center my-4 p-2 ">

      <div class="row mt-5">
        <h1 class="fs-2 p-2 m-5 p-5">Productos disponibles</h1>
        <div class="col-md-4 ">
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

      <div v-if="filteredProducts.length > 0" class="row">
        <div class="col m-2 p-2" v-for="product in filteredProducts" :key="product.id">
          <ProductCard :product="product" />
        </div>
      </div>

      <div v-else class="row">
        <div class="col-12">
          <p>No hay productos que coincidan con la búsqueda.</p>
        </div>
      </div>
    </div>
  </div>

  </main>
 
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
      filteredProducts: [] // Initially empty
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
    this.fetchProducts();
  }
};
</script>

  
  <style scoped>
  main{
    min-height: 73vh;
  }
  
  button {
  background-color: #30A7AE;
  color: white;
}

  </style>
  