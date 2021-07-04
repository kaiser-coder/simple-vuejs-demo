<template>
  <div class="col-3">
    <b-card
      id="product-card"
      :title="product.title"
      :img-src="product.image"
      img-alt="Image"
      img-top
      tag="article"
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
  </div>
</template>

<script>
import store from "@/stores/ProductsListStore";

export default {
  store: store,
  name: "product-card",
  props: ["product"],
  methods: {
    add_product(product) {
      this.$emit("addToPanel", product);
    },
  },
};
</script>

<style scoped>
#product-card {
  font-size: 13px;
}
</style>
