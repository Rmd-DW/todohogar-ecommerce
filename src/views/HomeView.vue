
<template>

<!-- Header -->
<header class="container-fluid text-light mt-5 py-5 bg-dark">
   <div class="content-header d-flex justify-content-between align-items-center py-5 px-5 mx-5 row">
    <div class="cont-text col-md-6 text-left px-5">
      <p class="lead"><strong>Decoración</strong></p>
      <h1 class="display-1 fw-bold text-uppercase">Ideas</h1>
      <p class="lead">Todos los productos que buscas <br> para el Hogar en un solo lugar</p>
      <button class="btn btn-primary">Comprar</button>
    </div>
    <div class="cont-img col-md-6 d-flex justify-content-end pr-5">
      <img src="../../public/banners/img-header.png" alt="Imagen de Header" class="img-fluid img-header">
    </div>
  </div>
</header>

<!-- Main Content -->
<main class="container my-5">
  <!-- Hogar Section -->
  <section class="category-section mb-5">
    <div class="categorys s-hogar p-4 rounded shadow-sm d-flex justify-content-between">
      <div class="cont-text">
        <h3 class="display-6">Hogar</h3>
        <p class="lead">Descubre muebles y accesorios decorativos que convierten cada rincón de tu casa en un lugar acogedor y estilizado.</p>
      </div>
      <div class="cont-img">
        <img src="../../public/banners/img_hogar.png" alt="Hogar" class="img-fluid">
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-4 mb-4 d-flex justify-content-center" v-for="product in hogarProducts" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </section>

  <!-- Dormitorio Section -->
  <section class="category-section mb-5">
    <div class="categorys p-4 s-dor rounded shadow-sm d-flex justify-content-between">
      <div class="cont-text p-2">
        <h3 class="display-6">Dormitorio</h3>
        <p class="lead">Crea un ambiente relajante con nuestras camas, ropa de cama y soluciones de organización.</p>
      </div>
      <div class="cont-img p-2 m-2">
        <img src="../../public/banners/img_dormitorio.png" alt="Dormitorio" class="img-fluid img-header">
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-4 mb-4 d-flex justify-content-center" v-for="product in dormitorioProducts" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </section>

  <!-- Cocina Section -->
  <section class="category-section mb-5">
    <div class="categorys s-hogar p-4 rounded shadow-sm d-flex justify-content-between">
      <div class="cont-text">
        <h3 class="display-6">Cocina</h3>
        <p class="lead">Equipa tu cocina con utensilios, electrodomésticos y soluciones de almacenamiento de alta calidad.</p>
      </div>
      <div class="cont-img">
        <img src="../../public/banners/img_cocina.png" alt="Cocina" class="img-fluid">
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-4 mb-4 d-flex justify-content-center" v-for="product in cocinaProducts" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </section>
</main>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import ProductCard from '../components/ProductCard.vue';

export default {
  name: 'HomeView',
  components: {
    ProductCard
  },
  computed: {
    ...mapGetters('products', ['allProducts']),
    hogarProducts() {
      return this.allProducts?.filter(product => product.categoria === 'hogar') || [];
    },
    cocinaProducts() {
      return this.allProducts?.filter(product => product.categoria === 'cocina') || [];
    },
    dormitorioProducts() {
      return this.allProducts?.filter(product => product.categoria === 'dormitorio') || [];
    }
  },
  methods: {
    ...mapActions('products', ['fetchProducts']),
  },
  mounted() {
    this.fetchProducts();
  }
};
</script>

<style scoped>
header {
  background-image: url('../../public/banners/banner-header.png');
  background-position: center;
  background-size: cover;
  min-height: 70vh;
  width: 100%;
}

h1 {
  font-weight: bold;
  text-transform: uppercase;
  color: transparent; /* Hace que el texto sea transparente */
  -webkit-text-stroke: 2px #17A2B8; /* Añade el contorno al texto con un borde de 2px */
}

.s-hogar {
  background-color: #CFEBE6;
}

.s-dor {
  background-color: #EED8D8;
}

.categorys {
  display: flex;
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  align-items: center;
}

.category-section .row {
  text-align: left;
}

img {
  max-width: 100%;
  height: auto;
}

.img-header {
  border-radius: 10px;
  box-shadow: 0;
}

button {
  background-color: #30A7AE;
  color: white;
}
</style>
