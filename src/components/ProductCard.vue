<template>
  <div class="card bg-secondary" style="width: 18rem;">
    <img :src="product.imagen" class="card-img-top" :alt="product.nombre" width="100%" height="300px">
    <div class="card-body">
      <h3 class="card-title">{{ product.nombre }}</h3>
      <p class="card-text text-light">{{ product.descripcion }}</p>
      <p class="card-text text-light">Precio: ${{ product.precio }}</p>
      <p class="card-text text-light">Stock Disponible: {{ product.stock }}</p>
      <router-link :to="{ name: 'detailproduct', params: { id: product.id } }" class="btn btn-primary">Ver Más</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>

</style>
