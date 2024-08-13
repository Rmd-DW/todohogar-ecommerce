import axios from 'axios';

const state = {
  products: []
};

const getters = {
  allProducts: (state) => state.products,
  getProductById: (state) => (id) => {
    return state.products.find(product => product.id === id);
  }
};

const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
  addProduct(state, product) {
    state.products.push(product);
  },
  updateProduct(state, updatedProduct) {
    const index = state.products.findIndex(product => product.id === updatedProduct.id);
    if (index !== -1) {
      state.products.splice(index, 1, updatedProduct);
    }
  },
  removeProduct(state, productId) {
    state.products = state.products.filter(product => product.id !== productId);
    console.log('Estado de productos después de eliminar:', state.products);
  },
  
  decrementProductStock(state, productId) {
    const productSelected = state.products.find(item => item.id === productId);
    if (productSelected && productSelected.stock > 0) {
      productSelected.stock--;
    }
  }
};



const actions = {
  async fetchProducts({ commit }) {
    try {
      const { data } = await axios.get('/api/productos.json');
      commit('setProducts', data);
    } catch (error) {
      console.error('No pudimos tomar la data', error);
    }
  },
  async addProduct({ commit }, product) {
    try {
      product.id = new Date().getTime();
      commit('addProduct', product);
      console.log('Producto agregado:', product);
      return Promise.resolve();
    } catch (error) {
      console.error('Error al agregar producto:', error);
      return Promise.reject(error);
    }
  },
  async updateProduct({ commit }, updatedProduct) {
    try {
      commit('updateProduct', updatedProduct);
      console.log('Producto actualizado:', updatedProduct);
      return Promise.resolve();
    } catch (error) {
      console.error('Error al actualizar producto:', error);
      return Promise.reject(error);
    }
  },
  async removeProduct({ commit }, productId) {
    try {
      commit('removeProduct', productId);
      console.log('Producto eliminado, ID:', productId);
      return Promise.resolve();
    } catch (error) {
      console.error('Error al eliminar producto:', error);
      return Promise.reject(error);
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
