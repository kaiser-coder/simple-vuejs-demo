<template>
  <div>
    <b-modal
      id="bv-modal-product-cart"
      size="lg"
      title="Votre panier"
      hide-footer
    >
      <b-row>
        <b-container class="mb-5">
          <div v-if="selectedProductsCount != 0">
            <ul class="list-unstyled">
              <cart-item
                v-for="product in selectedProducts"
                :item="product"
                :key="product.id"
              ></cart-item>
            </ul>

            <h4>Total: Ar {{ totalPrice }}</h4>

            <b-button block variant="outline-primary"
              >Acheter ({{ selectedProductsCount }})</b-button
            >
          </div>
          <div v-else class="text-center">
            Aucun élément
          </div>
        </b-container>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartItem from "./CartItem.vue";

export default {
  name: "cart",
  components: {
    CartItem,
  },
  computed: {
    ...mapGetters("Carts", [
      "selectedProducts",
      "selectedProductsCount",
      "totalPrice",
    ]),
  },
};
</script>

<style>
p {
  font-size: 13px;
}
</style>
