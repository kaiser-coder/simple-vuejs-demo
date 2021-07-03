<template>
  <div>
    <b-card-group deck>
      <b-card header="Articles">
        <div v-if="products != []">
          <div v-for="product in products" :key="product.id">
            <product-panel-item :product="product"></product-panel-item>
          </div>
        </div>

        <div v-else>
          <b-card-text>
            Aucune séléction
          </b-card-text>
        </div>

        <b-card-text class="mt-4">
          <h5>Total: {{ totalPrice }}</h5>
        </b-card-text>
        <b-button href="#" variant="info"
          >Acheter ({{ productsCount }})</b-button
        >
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import ProductPanelItem from "./ProductPanelItem.vue";
import store from "@/stores/ProductsListStore.js";

export default {
  name: "product-panel",
  components: {
    ProductPanelItem,
  },
  computed: {
    products: () => store.state.selectedProducts,
    productsCount: () => store.state.selectedProducts.length,
    totalPrice: () => {
      let total = 0;
      store.state.selectedProducts.forEach((item) => {
        total += item.price * 1;
      });
      return total;
    },
  },
};
</script>

<style></style>
