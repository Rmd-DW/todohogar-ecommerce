<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Categoría</th>
        <th>Precio</th>
        <th>Stock</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.nombre }}</td>
        <td>{{ product.categoria }}</td>
        <td>{{ product.precio }}</td>
        <td>{{ product.stock }}</td>
        <td>
          <button @click="$emit('edit', product)" class="btn btn-warning btn-sm  m-2">Editar</button>
          <button @click="$emit('delete', product.id)" class="btn btn-danger btn-sm m-2">Eliminar</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'ProductTable',
  props: {
    products: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
</style>
