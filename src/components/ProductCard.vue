<template>
  <div class="card .bg-secondary.bg-gradient" style="width: 18rem;">
    <img :src="product.imagen" class="card-img-top" :alt="product.nombre" width="250px" height="250px">
    <div class="card-body">
      <h3 class="card-title">{{ product.nombre }}</h3>
      <p class="card-text ">{{ product.descripcion }}</p>
      <p class="card-text ">Precio: ${{ product.precio }}</p>
      <p class="card-text ">Stock Disponible: {{ product.stock }}</p>
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


.card{
  background-color:#E9ECEF;
}

.btn{
  background-color: #30A7AE;
}



</style>
