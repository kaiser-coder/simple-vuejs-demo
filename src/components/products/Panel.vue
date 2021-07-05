<template>
  <div>
    <b-card-group deck>
      <b-card header="Articles">
        <div v-if="totalPricePanel != []">
          <div v-for="product in selectedProducts" :key="product.id">
            <panel-item
              :product="product"
              @removeProductPanel="removeProduct(product.id)"
            ></panel-item>
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
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import PanelItem from "./PanelItem.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "product-panel",
  components: {
    PanelItem,
  },
  computed: {
    ...mapGetters("Products", [
      "selectedProducts",
      "selectedProductsCount",
      "totalPricePanel",
    ]),
  },
  methods: {
    ...mapActions(["removeProduct"]),
  },
};
</script>

<style></style>
