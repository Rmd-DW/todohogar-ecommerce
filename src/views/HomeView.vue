<template>
    <header class="container p-2 m-2">
        <h1 class="text-primary m-2">TodoHogar</h1>
        <h2 class="m-2">Todos los productos que buscas para el hogar en un solo lugar</h2>
    </header>
    <main class="container text-center m-2 p-2">
        <div class="row border m-2 p-2">
            <h3>Hogar</h3>
            <div class="col m-2 p-2" v-for="product in hogarProducts" :key="product.id">
                <ProductCard :product="product"/>
            </div>
        </div>
        <div class="row border m-2 p-2">
            <h3>Cocina</h3>
            <div class="col m-2 p-2" v-for="product in cocinaProducts" :key="product.id">
                <ProductCard :product="product"/>
            </div>
        </div>
        <div class="row border m-2 p-2">
            <h3>Dormitorio</h3>
            <div class="col m-2 p-2" v-for="product in dormitorioProducts" :key="product.id">
                <ProductCard :product="product"/>
            </div>
        </div>
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
.row {
    text-align: left;
}
</style>
