<template>
  <div class="row mt-3 mb-3 container-fluid">
    <div class="col-9">
      <div class="row">
        <product-card
          :product="product"
          v-for="product in products"
          :key="product.id"
        ></product-card>
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
import axios from "axios";

export default {
  store: store,
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
  mounted: () => {
    axios
      .get("https://fakestoreapi.com/products?limit=9")
      .then((response) => (store.state.products = response.data));
  },
};
</script>
