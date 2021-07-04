<template>
  <div>
    <b-card-group deck>
      <b-card header="Articles">
        <div v-if="totalPricePanel != []">
          <div v-for="product in selectedProducts" :key="product.id">
            <product-panel-item
              :product="product"
              @removeProductPanel="remove_product(product.id)"
            ></product-panel-item>
          </div>
        </div>

        <div v-else>
          <b-card-text>
            Aucune séléction
          </b-card-text>
        </div>

        <b-card-text class="mt-4">
          <h5>Total: {{ totalPricePanel }}</h5>
        </b-card-text>
        <login-modal :productsCount="selectedProductsCount"></login-modal>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import ProductPanelItem from "./ProductPanelItem.vue";
import LoginModal from "./LoginModal.vue";
import store from "@/stores/ProductsListStore.js";
import Vuex from "vuex";

export default {
  store: store,
  name: "product-panel",
  components: {
    ProductPanelItem,
    LoginModal,
  },
  computed: {
    ...Vuex.mapGetters([
      "selectedProducts",
      "selectedProductsCount",
      "totalPricePanel",
    ]),
  },
  methods: {
    ...Vuex.mapActions(["remove_product"]),
  },
};
</script>

<style></style>
