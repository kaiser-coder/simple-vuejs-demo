<template>
  <b-card
    id="product-card"
    :title="product.name"
    :img-src="product.img"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      {{ product.description }}
    </b-card-text>
    <b-card-text>
      <h5>Prix: {{ product.price }}</h5>
    </b-card-text>

    <b-button href="#" variant="info" @click="add_product_panel(product)"
      >Ajouter au panier</b-button
    >
  </b-card>
</template>

<script>
import Vuex from "vuex";

export default {
  name: "product-card",
  props: ["product"],
  methods: {
    ...Vuex.mapGetters(["add_product_panel"]),
  },
};
</script>

<style scoped>
#product-card {
  font-size: 14px;
}
</style>
