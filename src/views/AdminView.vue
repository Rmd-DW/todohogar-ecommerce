<template>
  <div class="container">
    <header>
      <h1>Gestión de productos</h1>
    </header>
    <main>
      <div v-if="message" :class="messageClass" role="alert">
        {{ message }}
      </div>
      <ProductForm :product="newProduct" :editing="editingProduct" @submit="handleFormSubmit" />
      <ProductTable :products="allProducts" @edit="editProduct" @delete="deleteProduct" />
    </main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ProductForm from '../components/ProductForm.vue';
import ProductTable from '../components/ProductTable.vue';

export default {
  name: 'AdminView',
  components: {
    ProductForm,
    ProductTable
  },
  data() {
    return {
      newProduct: {
        nombre: '',
        categoria: '',
        precio: 0,
        stock: 0,
        imagen: '',
        destacado: false,
        descripcion: ''
      },
      editingProduct: false,
      message: '',
      messageClass: ''
    };
  },
  computed: {
    ...mapGetters('products', ['allProducts'])
  },
  methods: {
    ...mapActions('products', ['fetchProducts', 'addProduct', 'updateProduct', 'removeProduct']),
    async handleFormSubmit(product) {
      console.log('Producto a manejar:', product); 
      try {
        if (this.editingProduct) {
          await this.updateProduct(product);
          this.message = 'Producto actualizado correctamente';
          this.messageClass = 'alert alert-success';
          this.editingProduct = false;
        } else {
          await this.addProduct(product);
          this.message = 'Producto agregado correctamente';
          this.messageClass = 'alert alert-success';
        }
        await this.fetchProducts();
        this.resetForm();
      } catch (error) {
        this.message = 'No se pudo agregar el producto';
        this.messageClass = 'alert alert-danger';
        console.error('Error en handleFormSubmit:', error);
      }
    },
    editProduct(product) {
      this.newProduct = { ...product };
      this.editingProduct = true;
    },
    async deleteProduct(productId) {
      try {
        await this.removeProduct(productId);
        this.message = 'Producto eliminado correctamente';
        this.messageClass = 'alert alert-success';
        await this.fetchProducts();
      } catch (error) {
        this.message = 'No se pudo eliminar el producto';
        this.messageClass = 'alert alert-danger';
        console.error('Error al eliminar producto:', error);
      }
    },
    resetForm() {
      this.newProduct = {
        nombre: '',
        categoria: '',
        precio: 0,
        stock: 0,
        imagen: '',
        destacado: false,
        descripcion: ''
      };
    }
  },
  mounted() {
    this.fetchProducts();
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}
header {
  margin-bottom: 20px;
}
form .form-group {
  margin-bottom: 15px;
}
.alert {
  margin-top: 15px;
}
</style>
