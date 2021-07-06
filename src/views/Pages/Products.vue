<template>
  <div class="container">
    <div class="row mt-3 mb-3">
      <!-- Product Card -->
      <card
        :product="product"
        v-for="product in products"
        :key="product.id"
        @addToPanel="addProduct(product)"
      ></card>
    </div>
  </div>
</template>

<script>
import Card from "@/components/products/Card";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "products",
  components: {
    Card,
  },
  data() {
    return {
      ...mapMutations("Products", { setProducts: "SET_PRODUCTS" }),
    };
  },
  computed: {
    ...mapGetters("Products", ["products"]),
  },
  mounted() {
    this.setProducts();
  },
  methods: {
    ...mapActions("Products", ["addProduct", "getProducts"]),
  },
};
</script>
