<template>
  <b-card
    id="product-card"
    :title="product.title"
    :img-src="product.image"
    img-alt="Image"
    img-top
    tag="article"
    class="m-1 col-3"
  >
    <b-card-text>
      {{ product.description }}
    </b-card-text>
    <b-card-text>
      <h5>Prix: {{ product.price }}</h5>
    </b-card-text>

    <b-button href="#" variant="info" @click.prevent="add_product(product)"
      >Ajouter au panier</b-button
    >
  </b-card>
</template>

<script>
import Vuex from "vuex";
import store from "@/stores/ProductsListStore";

export default {
  store: store,
  name: "product-card",
  props: ["product"],
  methods: {
    ...Vuex.mapActions(["add_product"]),
  },
};
</script>

<style scoped>
#product-card {
  font-size: 13px;
}
</style>
