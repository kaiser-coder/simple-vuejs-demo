<template>
  <div class="row mt-3 mb-3 container-fluid">
    <!-- Product Card -->
    <card
      :product="product"
      v-for="product in products"
      :key="product.id"
      @addToPanel="addProduct(product)"
    ></card>
  </div>
</template>

<script>
import Card from "@/components/products/Card";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "products",
  components: {
    Card,
  },
  computed: {
    ...mapGetters("Products", ["products"]),
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    ...mapActions("Products", ["addProduct", "getProducts"]),
  },
};
</script>
