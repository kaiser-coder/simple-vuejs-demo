<template>
  <div class="row mt-3 mb-3 container-fluid">
    <div class="col-9">
      <div v-for="product in products" :key="product.id">
        <product-card :product="product"></product-card>
      </div>
    </div>
    <div class="col-3">
      <product-panel></product-panel>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";
import ProductPanel from "@/components/ProductPanel";
import store from "@/stores/ProductsListStore.js";

export default {
  name: "products-list",
  components: {
    ProductCard,
    ProductPanel,
  },
  computed: {
    products: () => {
      return store.state.products;
    },
  },
};
</script>
