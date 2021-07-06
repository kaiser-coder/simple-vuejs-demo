<template>
  <b-card-text class="mb-2 container">
    <div class="alert">
      <b-media tag="li">
        <template #aside>
          <b-img width="64" alt="placeholder" :src="product.image"></b-img>
        </template>
        <h5 class="mt-0 mb-1">{{ product.title }}</h5>
        <h4 class="mb-0">1 X {{ product.price }}</h4>

        <b-button variant="outline-warning" class="mt-2"
          ><b-icon icon="bag-x-fill"></b-icon> Retirer</b-button
        >
      </b-media>
    </div>
  </b-card-text>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "cart-item",
  props: ["product"],
  methods: {
    remove_product() {
      this.$emit("removeProductPanel");
    },
  },
  computed: {
    ...mapGetters("Products", ["products"]),
  },
};
</script>

<style scoped>
#drop-btn {
  cursor: pointer;
}
</style>
