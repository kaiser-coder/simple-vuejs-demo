<template>
  <div class="row mt-3 mb-3 container-fluid">
    <div class="col-9">
      <div class="row">
        <product-card
          :product="product"
          v-for="product in products"
          :key="product.id"
          @addToPanel="add_product(product)"
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
import Vuex from "vuex";

export default {
  store: store,
  name: "products-list",
  components: {
    ProductCard,
    ProductPanel,
  },
  computed: {
    ...Vuex.mapGetters(["products", "productCategories"]),
  },
  mounted() {
    this.fetch_products();
  },
  methods: {
    ...Vuex.mapActions(["add_product", "fetch_products", "filter_products"]),
  },
};
</script>
