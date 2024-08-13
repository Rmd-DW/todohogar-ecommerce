<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-group">
      <label for="nombre">Nombre</label>
      <input type="text" id="nombre" v-model="localProduct.nombre" required class="form-control" />
    </div>
    <div class="form-group">
      <label for="categoria">Categoría</label>
      <input type="text" id="categoria" v-model="localProduct.categoria" required class="form-control" />
    </div>
    <div class="form-group">
      <label for="precio">Precio</label>
      <input type="number" id="precio" v-model="localProduct.precio" required class="form-control" />
    </div>
    <div class="form-group">
      <label for="stock">Stock</label>
      <input type="number" id="stock" v-model="localProduct.stock" required class="form-control" />
    </div>
    <div class="form-group">
      <label for="imagen">URL Imagen</label>
      <input type="text" id="imagen" v-model="localProduct.imagen" required class="form-control" />
    </div>
    <div class="form-group form-check">
      <input type="checkbox" id="destacado" v-model="localProduct.destacado" class="form-check-input" />
      <label for="destacado" class="form-check-label">Destacado</label>
    </div>
    <div class="form-group">
      <label for="descripcion">Descripción</label>
      <textarea id="descripcion" v-model="localProduct.descripcion" required class="form-control"></textarea>
    </div>
    <button type="submit" class="btn m-2">{{ editing ? 'Actualizar' : 'Agregar' }}</button>
  </form>
</template>

<script>
export default {
  name: 'ProductForm',
  props: {
    product: {
      type: Object,
      required: true
    },
    editing: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      localProduct: { ...this.product }
    };
  },
  watch: {
    product: {
      handler(newValue) {
        this.localProduct = { ...newValue };
      },
      deep: true
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', { ...this.localProduct });
    }
  }
};
</script>

<style scoped>
button{
  background-color: #30A7AE;
  color: white
}
</style>
