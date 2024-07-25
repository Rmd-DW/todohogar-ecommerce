<template>
    <div>
      <h1>Detalles del Producto</h1>
      <div v-if="product" class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img :src="product.imagen" class="img-fluid rounded-start" :alt="product.nombre">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ product.nombre }}</h5>
              <p class="card-text">{{ product.descripcion }}</p>
              <p class="card-text">Precio:${{ product.precio }}</p>
              <p class="card-text"><small class="text-body-secondary">Quedan en stock:{{ product.stock }}</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DetailproductView',
    data() {
      return {
        product: null
      };
    },
    created() {
      const productId = this.$route.params.id;
      this.product = this.$store.getters['products/getProductById'](productId);
    }
  };
  </script>
  
  <style scoped>
  
  </style>
  